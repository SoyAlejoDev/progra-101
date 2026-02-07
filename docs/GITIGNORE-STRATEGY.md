# 🔒 Estrategia de .gitignore en el Monorepo

## Resumen

Cada workspace en el monorepo tiene su propio `.gitignore` para mantener el repositorio limpio y eficiente.

## 📁 Estructura de .gitignore

```
progra-101/
├── .gitignore                          # Reglas globales (root)
├── apps/
│   └── hanging/
│       └── .gitignore                  # Específico de la app
├── courses/
│   ├── 01-programacion-basica/
│   │   └── .gitignore                  # Específico del curso
│   ├── 02-introduccion-js-react/
│   │   └── .gitignore                  # Específico del curso
│   └── 03-typescript/
│       └── .gitignore                  # Específico del curso
└── packages/
    └── config-typescript/
        └── .gitignore                  # (si aplica)
```

## 🎯 Reglas por Workspace

### Root (`/.gitignore`)
- Reglas globales que aplican a TODO el repositorio
- Node modules de root
- Archivos de sistema (`.DS_Store`, `Thumbs.db`)
- Configuraciones de IDE (`.vscode/`, `.idea/`)
- Archivos de logs
- Variables de entorno (`.env`)

### Cursos (`/courses/*/.gitignore`)
Cada curso ignora:
- `node_modules/` - Instalaciones locales
- `*.js`, `*.js.map`, `*.d.ts` - Archivos compilados de TypeScript
- `dist/`, `build/` - Carpetas de build
- `*.log` - Archivos de log
- `.env` - Variables de entorno locales
- Archivos del sistema (`.DS_Store`)

### Apps (`/apps/*/.gitignore`)
Las apps React tienen:
- Todo lo de los cursos
- Carpetas específicas de build (`dist-ssr/`, `.next/`, etc.)
- Archivos locales (`*.local`)

## ⚠️ IMPORTANTE: Por qué cada workspace necesita su .gitignore

1. **Independencia**: Cada workspace puede tener diferentes necesidades
2. **Performance**: Git no tiene que escanear archivos innecesarios
3. **Limpieza**: No se suben archivos compilados o de caché
4. **Seguridad**: No se filtran variables de entorno

## 🧹 Archivos que NUNCA deben subirse

```
# ❌ NUNCA subir:
node_modules/          # Instalaciones de npm/pnpm
dist/                  # Builds compilados
*.js (compilados)      # TypeScript compilado a JS
*.js.map               # Source maps
*.d.ts                 # Declaraciones de tipos generadas
.env                   # Variables de entorno
*.log                  # Logs
.DS_Store              # macOS
```

## 📝 Comandos útiles

```bash
# Ver qué archivos están siendo ignorados
git check-ignore -v courses/01-programacion-basica/node_modules

# Ver archivos que git está trackeando
git ls-files courses/01-programacion-basica/

# Remover archivos del tracking (si se agregaron por error)
git rm -r --cached courses/XX-curso/node_modules
git rm -r --cached courses/XX-curso/dist
```

## 🔍 Verificación

Antes de hacer commit, verificá:
```bash
git status
# NO deberías ver:
# - node_modules/
# - dist/
# - *.js (compilados)
# - *.log
```

## 🚀 Buenas prácticas

1. **Creá el .gitignore ANTES de instalar dependencias**
2. **Si ya instalaste**, usá `git rm -r --cached` para remover del tracking
3. **Verificá siempre** con `git status` antes de commitear
4. **No ignores archivos fuente** (`.ts`, `.tsx`, `.js` originales)
5. **Documentá excepciones** si hay archivos que quieren ser trackeados
