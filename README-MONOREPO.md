# Progra 101 - Monorepo 🚀

Monorepo multipaquete para el curso de programación 101, construido con pnpm workspaces.

## 📁 Estructura

```
progra-101/
├── apps/
│   └── hanging/          # Aplicación React/Vite
├── packages/             # Paquetes compartidos (futuro)
├── .github/workflows/    # GitHub Actions
├── pnpm-workspace.yaml   # Configuración de workspaces
└── package.json          # Scripts del monorepo
```

## 🛠️ Comandos

### Desarrollo
```bash
# Iniciar servidor de desarrollo de la app React
pnpm dev

# O alternativamente
pnpm --filter hanging dev
```

### Build
```bash
# Construir todas las apps
pnpm build

# Construir solo la app hanging
pnpm --filter hanging build
```

### Despliegue
```bash
# Desplegar a GitHub Pages (manual)
pnpm deploy
```

## 🌐 Despliegue Automático

El proyecto está configurado para desplegarse automáticamente a GitHub Pages cuando se hace push a la rama `main` o `master`.

### Configuración de GitHub Pages

1. Ve a la configuración de tu repositorio en GitHub
2. En "Pages", selecciona:
   - Source: "Deploy from a branch"
   - Branch: `gh-pages` y `/ (root)`
3. Activa los GitHub Actions en tu repositorio

### Flujo de Despliegue

1. Haces push a `main` o `master`
2. GitHub Actions se activa automáticamente
3. Construye la app React
4. Despliega a la rama `gh-pages`
5. Tu app está disponible en: `https://[tu-usuario].github.io/progra-101/`

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