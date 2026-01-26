# 🏗️ Guía del Monorepo - Progra 101

> **Guía técnica del monorepo educativo para estudiantes**  
> Profesor: [Alejo Dev](https://github.com/SoyAlejoDev)

Este documento explica cómo está estructurado el monorepo **Progra 101** y cómo los estudiantes pueden usarlo para aprender programación web moderna.

## 🎯 **Propósito Educativo del Monorepo**

Este monorepo está diseñado para enseñarte:

- **🏗️ Arquitectura profesional**: Cómo se organizan los proyectos reales
- **📦 Gestión de dependencias**: Uso de pnpm workspaces
- **🚀 CI/CD moderno**: Despliegue automático con GitHub Actions
- **🎮 Desarrollo frontend**: React + TypeScript + Vite
- **📚 Desarrollo incremental**: Desde TypeScript básico hasta apps completas

## 📁 **Estructura del Monorepo Explicada**

```
progra-101/
├── 📚 sections/              # Material teórico (TypeScript/JS)
│   ├── 01-variables-y-tipos.ts
│   └── ... (temas progresivos)
├── 🎮 apps/                  # Aplicaciones frontend
│   └── hanging/             # Juego del Ahorcado (React + TS)
│       ├── src/              # Código fuente
│       ├── public/           # Assets estáticos
│       ├── dist/             # Build de producción
│       └── package.json      # Dependencias específicas
├── 📦 packages/              # Librerías compartidas (futuro)
├── 📝 tarea/                 # Ejercicios prácticos
├── 🛠️ helpers/               # Funciones auxiliares
├── ⚙️ .github/workflows/     # CI/CD automático
│   └── deploy.yml           # Workflow de despliegue
├── pnpm-workspace.yaml       # Configuración de workspaces
└── package.json              # Scripts y dependencias raíz
```

### **🔍 ¿Qué es cada carpeta?**

- **`apps/`**: Contiene las aplicaciones web reales (proyectos React)
- **`packages/`**: Para librerías compartidas entre apps (componentes, utils)
- **`sections/`**: Material educativo de TypeScript y JavaScript
- **`.github/workflows/`**: Automatización de deployment y pruebas

---

## 🛠️ **Comandos del Monorepo**

### **🚀 Para Desarrollo de Apps React**

```bash
# Iniciar servidor de desarrollo (default: app hanging)
pnpm dev

# Iniciar una app específica
pnpm --filter hanging dev

# Iniciar en modo watch (auto-recarga)
pnpm dev:watch
```

### **🔨 Para Build y Producción**

```bash
# Construir todas las apps
pnpm build

# Construir solo una app específica
pnpm --filter hanging build

# Previsualizar el build localmente
pnpm preview
```

### **📚 Para Material Educativo**

```bash
# Ejecutar un archivo de estudio específico
pnpm dev:ts sections/01-variables-y-tipos.ts

# Ejecutar en modo watch para TypeScript
pnpm dev:watch
```

### **🌐 Para Despliegue**

```bash
# Despliegue manual a GitHub Pages
pnpm deploy

# Limpieza de builds
pnpm clean
```

## 🌐 **Despliegue Automático (CI/CD)**

### **🔄 ¿Cómo funciona el deployment?**

1. **Haces push** a la rama `main` o `master`
2. **GitHub Actions** se activa automáticamente
3. **Instala dependencias** con pnpm
4. **Construye la app** con Vite y TypeScript
5. **Despliega a GitHub Pages** usando GitHub Actions
6. **Tu app está online** en minutos

### **⚙️ Configuración de GitHub Pages**

1. Ve a **Settings → Pages** de tu repositorio
2. En **Source**, selecciona: **"GitHub Actions"**
3. ¡Listo! Los Actions se encargarán del resto

### **🔍 ¿Qué hace el workflow de deployment?**

```yaml
# .github/workflows/deploy.yml
- Checkout del código
- Setup Node.js 20
- Setup pnpm 9.15.4
- Install dependencies (con cache)
- Build apps con pnpm
- Deploy a GitHub Pages
```

### **🎯 URL de Despliegue**

Tu aplicación estará disponible en:
```
https://[tu-usuario].github.io/progra-101/
```

**Ejemplo real:**  
👉 [https://soyalejodev.github.io/progra-101/](https://soyalejodev.github.io/progra-101/)

---

## 🔧 **Conceptos Técnicos que Aprenderás**

### **📦 pnpm Workspaces**

```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'      # Aplicaciones independientes
  - 'packages/*'  # Librerías compartidas
```

**Ventajas:**
- Dependencias compartidas optimizadas
- Scripts unificados desde raíz
- Build coordinado

### **🏗️ Arquitectura Monorepo**

- **Apps**: Proyectos desplegables (React, Vue, etc.)
- **Packages**: Código compartido (utils, components, types)
- **Tools**: Configuraciones y scripts globales

### **⚡ Vite + React 19 + TypeScript**

Configuración moderna para desarrollo rápido:
```ts
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/progra-101/', // Para GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
```

### **🤖 GitHub Actions**

CI/CD automatizado que:
- Prueba el código en cada push
- Construye las aplicaciones
- Despliega automáticamente
- Maneja diferentes entornos

---

## 🎓 **Guía de Aprendizaje del Monorepo**

### **👶 Nivel Básico (1-2 semanas)**

1. **Entiende la estructura** del monorepo
2. **Ejecuta el material educativo** en `sections/`
3. **Usa los comandos básicos**: `pnpm dev`, `pnpm build`
4. **Estudia los ejemplos** de TypeScript

### **🚶 Nivel Intermedio (3-4 semanas)**

1. **Modifica el proyecto React** existente
2. **Añade nuevas funcionalidades** al juego
3. **Crea tus propios componentes**
4. **Usa el modo watch** para desarrollo

### **🏃 Nivel Avanzado (5-6 semanas)**

1. **Crea una nueva app** en `apps/`
2. **Configura tu propio deployment**
3. **Comparte código** entre apps usando `packages/`
4. **Contribuye al CI/CD** con nuevos workflows

---

## 🔧 **Solución de Problemas Comunes**

### **❌ Error: "pnpm command not found"**

```bash
# Instalar pnpm globalmente
npm install -g pnpm

# O usar npx
npx pnpm install
```

### **❌ Error: "Cannot resolve module"**

```bash
# Limpiar e reinstalar
rm -rf node_modules apps/*/node_modules
pnpm install
```

### **❌ Error en GitHub Actions**

- Verifica que no haya conflictos de versiones
- Revisa que los .gitignore estén correctos
- Asegúrate de que GitHub Pages esté configurado

### **📝 Consejos para Estudiantes**

1. **Usa VSCode** con las extensiones de TypeScript y React
2. **Activa autoguardado** para mejor flujo de trabajo
3. **Aprende a leer los errores** - son tus mejores amigos
4. **Comenta tu código** mientras aprendes
5. **Haz commit frecuentemente** con mensajes claros

---

## 🎯 **Proyectos Futuros para el Monorepo**

### **📦 Ideas para nuevas apps:**

- 📝 **To-Do List** con localStorage
- 🎨 **Color Palette Generator**
- 📊 **Dashboard de Analytics**
- 🎮 **Quiz App** con múltiples temas
- 🛍️ **E-commerce** básico
- 📱 **Weather App** con API

### **📦 Ideas para packages compartidos:**

- `@progra-101/ui-components` - Componentes React reutilizables
- `@progra-101/utils` - Funciones helper
- `@progra-101/types` - Tipos TypeScript compartidos
- `@progra-101/hooks` - Custom React hooks

---

## 🤝 **Contribuciones Estudiantiles**

Los estudiantes pueden contribuir al monorepo:

1. **Corregir errores** en el material educativo
2. **Mejorar ejemplos** con mejores explicaciones
3. **Agregar nuevos ejercicios** a la carpeta `tarea/`
4. **Crear nuevas apps** para el portfolio
5. **Mejorar la documentación**

**Cómo contribuir:**
```bash
# Fork, clone, branch
git checkout -b feature/mi-mejora

# Hacer cambios
git add .
git commit -m "feat: agregar nuevo ejemplo de arrays"

# Push y Pull Request
git push origin feature/mi-mejora
```

---

## 🎉 **Conclusión**

Este monorepo es más que código - es un **ecosistema de aprendizaje** donde puedes:

- 📚 **Aprender** conceptos teóricos
- 🎮 **Practicar** con proyectos reales  
- 🏗️ **Entender** arquitectura profesional
- 🚀 **Desplegar** tus propias aplicaciones
- 🤝 **Colaborar** con otros estudiantes

**¡El futuro del frontend está aquí, y tú estás aprendiéndolo desde el principio!** 🚀

## 📦 Workspaces

Este monorepo usa pnpm workspaces para gestionar múltiples paquetes:

- **apps/**: Aplicaciones desplegables
- **packages/**: Librerías compartidas (utils, componentes, etc.)

## 🚀 Agregar una nueva app

```bash
# Crear nueva app en apps/
mkdir apps/nueva-app
cd apps/nueva-app
pnpm create vite . --template react-ts

# El nombre del paquete debe seguir la convención:
# @progra-101/nombre-app
```

## 🎯 Scripts Disponibles

- `pnpm dev` - Iniciar desarrollo
- `pnpm build` - Construir para producción
- `pnpm preview` - Previsualizar build local
- `pnpm lint` - Ejecutar linting
- `pnpm deploy` - Despliegue manual a GitHub Pages
- `pnpm dev:ts` - Ejecutar script TypeScript principal
- `pnpm dev:watch` - Modo watch para TypeScript

## 📚 Tecnologías

- **React 19** - Framework frontend
- **Vite** - Build tool y dev server
- **TypeScript** - Tipado estático
- **pnpm** - Gestor de paquetes y workspaces
- **GitHub Actions** - CI/CD automatizado
- **GitHub Pages** - Hosting gratuito

---

¡Listo para programar! 🎉