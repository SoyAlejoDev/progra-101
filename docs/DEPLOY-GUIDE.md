# 🚀 Guía de Deploy en el Monorepo

## Estructura actual

El workflow `.github/workflows/deploy.yml` está configurado para desplegar **solo el proyecto Hanging** (Juego del Ahorcado).

## ⚙️ Configuración actual

### Proyecto desplegado:
- **Nombre:** Hanging (Juego del Ahorcado)
- **Ruta:** `apps/hanging/`
- **URL:** https://soyalejodev.github.io/progra-101/
- **Build:** `pnpm --filter hanging build`

## 📝 Cómo agregar más proyectos

Cuando quieras desplegar otro proyecto (por ejemplo, un nuevo juego o app):

### Opción 1: Reemplazar el proyecto actual

Editá `.github/workflows/deploy.yml`:

```yaml
- name: Build [NOMBRE_PROYECTO] App
  run: pnpm --filter [nombre-del-proyecto] build

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./apps/[nombre-del-proyecto]/dist
```

### Opción 2: Múltiples proyectos en sub-rutas

Si querés tener varios proyectos en diferentes URLs:

#### 1. Crear workflow específico para cada proyecto

**`.github/workflows/deploy-hanging.yml`** (el actual):
```yaml
name: Deploy Hanging to GitHub Pages
# ... config actual
```

**`.github/workflows/deploy-otro-proyecto.yml`** (nuevo):
```yaml
name: Deploy OtroProyecto to GitHub Pages
on:
  push:
    branches: [ main ]
    paths:
      - 'apps/otro-proyecto/**'  # Solo cuando cambia este proyecto

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: pnpm install
      - run: pnpm --filter otro-proyecto build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./apps/otro-proyecto/dist
```

#### 2. Configurar base URL en cada proyecto

En `apps/[proyecto]/vite.config.ts`:
```typescript
export default defineConfig({
  base: '/progra-101/[nombre-proyecto]/',  // Sub-ruta específica
  // ... resto de config
})
```

## 🎯 Ejemplo completo: Agregar un nuevo proyecto

### Paso 1: Crear la app
```bash
cd apps
npm create vite@latest mi-nuevo-juego -- --template react-ts
```

### Paso 2: Configurar vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/progra-101/',  // O '/progra-101/mi-juego/' para sub-ruta
})
```

### Paso 3: Agregar package.json
```json
{
  "name": "@progra-101/mi-nuevo-juego",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

### Paso 4: Crear workflow de deploy (opcional - si querés deploy independiente)

Copiá `.github/workflows/deploy.yml` a `.github/workflows/deploy-mi-juego.yml` y modificalo:

```yaml
name: Deploy Mi Nuevo Juego
on:
  push:
    branches: [ main ]
    paths:
      - 'apps/mi-nuevo-juego/**'
      - '.github/workflows/deploy-mi-juego.yml'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # ... setup steps ...
      
      - name: Build Mi Nuevo Juego
        run: pnpm --filter @progra-101/mi-nuevo-juego build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./apps/mi-nuevo-juego/dist
```

## 🔧 Configuración de GitHub Pages para múltiples proyectos

### Opción A: Un proyecto principal (actual)
- Settings → Pages → Source: GitHub Actions
- El workflow actual despliega automáticamente

### Opción B: Múltiples proyectos en sub-rutas

1. **Crear estructura de carpetas en `gh-pages` branch:**
```
(index.html del proyecto principal)
/mi-juego-1/
  (archivos del juego 1)
/mi-juego-2/
  (archivos del juego 2)
```

2. **Workflow para deploy múltiple:**
```yaml
- name: Build all projects
  run: |
    pnpm --filter hanging build
    pnpm --filter mi-juego-1 build
    pnpm --filter mi-juego-2 build

- name: Prepare deploy structure
  run: |
    mkdir -p deploy
    cp -r apps/hanging/dist/* deploy/
    mkdir -p deploy/mi-juego-1
    cp -r apps/mi-juego-1/dist/* deploy/mi-juego-1/
    mkdir -p deploy/mi-juego-2
    cp -r apps/mi-juego-2/dist/* deploy/mi-juego-2/

- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./deploy
```

## ⚠️ Solución de problemas comunes

### Error: "Multiple versions of pnpm specified"
**Causa:** Versión definida en workflow Y en package.json
**Solución:** Eliminar `version:` del workflow, dejar que lea de `packageManager`

### Error: "Cannot find module"
**Causa:** No se instaló dependencias correctamente
**Solución:** Verificar `pnpm install --frozen-lockfile`

### Error: "Build not found"
**Causa:** Ruta incorrecta en upload-artifact
**Solución:** Verificar que la ruta coincida con el output del build

## 📚 Referencias

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [pnpm GitHub Action](https://github.com/pnpm/action-setup)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
