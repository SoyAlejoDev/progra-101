# 🎓 Progra 101 - Monorepo Educativo

> **Repositorio de aprendizaje para estudiantes de programación web**  
> Profesor: [Alejo Dev](https://github.com/SoyAlejoDev)

¡Bienvenidos a **Progra 101**! Este es un **monorepo educativo** diseñado para enseñar programación web con JavaScript, TypeScript y React de manera práctica y progresiva. Aquí encontrarás ejemplos, proyectos y recursos organizados por cursos.

## 🌟 ¿Qué encontrarás aquí?

- **📚 Cursos organizados**: Cada curso en su propio workspace
- **🎮 Proyectos prácticos**: Aplicaciones React reales para aprender
- **🏗️ Monorepo moderno**: Estructura profesional con pnpm workspaces
- **🚀 Despliegue automático**: Cada proyecto se publica en GitHub Pages
- **📖 Guías paso a paso**: Documentación para estudiantes

---

## 📁 **Estructura del Monorepo**

```
progra-101/
├── 📚 courses/                    # Material de estudio por curso
│   ├── 01-programacion-basica/   # Fundamentos de JS/TS
│   │   ├── sections/             # Ejemplos por tema
│   │   ├── tareas/               # Ejercicios prácticos
│   │   └── helpers/              # Funciones auxiliares
│   ├── 02-introduccion-js-react/ # JS para React
│   │   ├── js/                   # Código fuente
│   │   ├── css/                  # Estilos
│   │   └── *.html                # Páginas de ejemplo
│   └── 03-typescript/            # TypeScript avanzado
│       ├── tipos/                # Tipos básicos
│       ├── funciones/            # Funciones y parámetros
│       ├── objetos/              # Objetos y clases
│       ├── clases/               # POO en TypeScript
│       ├── interfaces/           # Interfaces
│       ├── ES6/                  # Características ES6
│       └── namespaces/           # Namespaces
│
├── 🎮 apps/                       # Aplicaciones desplegables
│   └── hanging/                  # Juego del Ahorcado (React + TS)
│
├── 📦 packages/                   # Configuraciones compartidas
│   └── (futuras utilidades)
│
├── 🛠️ Configuración
│   ├── package.json              # Root con workspaces
│   ├── pnpm-workspace.yaml       # Configuración de pnpm
│   └── README.md                 # Esta documentación
```

---

## 🚀 **Configuración del Entorno**

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [pnpm](https://pnpm.io/) (versión 8 o superior)

### Instalación

1. **Clona este repositorio:**

```bash
git clone https://github.com/SoyAlejoDev/progra-101.git
cd progra-101
```

2. **Instala las dependencias:**

```bash
pnpm install
```

---

## 🎮 **Cómo Usar el Monorepo**

### **📚 Para estudiar los cursos:**

```bash
# Curso 1: Programación Básica
pnpm --filter @progra-101/programacion-basica dev sections/01-variables-y-tipos.ts

# Curso 2: Introducción a JS para React
pnpm --filter @progra-101/introduccion-js-react dev js/03-variables.ts

# Curso 3: TypeScript
pnpm --filter @progra-101/typescript dev app.ts
```

### **🎮 Para trabajar con aplicaciones React:**

```bash
# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Previsualizar el build
pnpm preview
```

### **Scripts Disponibles (Root):**

| Script | Descripción |
|--------|-------------|
| `pnpm dev` | Iniciar servidor de desarrollo de React (hanging) |
| `pnpm build` | Construir todos los proyectos |
| `pnpm deploy` | Desplegar a GitHub Pages |
| `pnpm typecheck` | Verificar tipos en todos los workspaces |
| `pnpm clean` | Limpiar node_modules y builds |

---

## 📚 **Cursos Disponibles**

### **Curso 1: Programación Básica** ⭐ Fundamentos

Ubicación: `courses/01-programacion-basica/`

Temas cubiertos:
- Variables y tipos de datos
- Condicionales (if/else, switch)
- Ciclos (for, while, do-while)
- Funciones
- Arrays y objetos
- Ejercicios integradores

```bash
# Ejecutar ejemplos
cd courses/01-programacion-basica
pnpm dev sections/01-variables-y-tipos.ts
```

**Estructura:**
```
sections/
├── 01-variables-y-tipos.ts           # Tipos básicos y variables
├── 02-condicionales-if-else.ts       # Condicionales básicos
├── 03-condicionales-calificaciones.ts # Evaluación con calificaciones
├── 04-switch.ts                      # Sentencia switch
├── 05-ciclos-for.ts                  # Ciclo for
├── 06-ciclos-while-do-while.ts       # Ciclos while y do-while
├── 07-bucles-tabla-multiplicar.ts    # Aplicación de bucles
├── 08-funciones-basicas.ts           # Introducción a funciones
├── 09-arrays.ts                      # Arrays y operaciones
├── 10-objetos.ts                     # Objetos y clases
├── 11-ejercicios-integradores.ts     # Ejercicios que combinan todo
└── examples/                         # Ejemplos adicionales

tareas/
├── tarea-1.ts  # Conversión de unidades
├── tarea-2.ts  # Conversión km a millas
├── tarea-3.ts  # Área de círculo
├── tarea-4.ts  # Números pares
├── tarea-5.ts  # Factorial
├── tarea-6.ts  # Suma de arrays
├── tarea-7.ts  # Búsqueda en arrays
├── tarea-8.ts  # Manipulación de strings
└── tarea-9.ts  # Funciones matemáticas
```

### **Curso 2: Introducción a JavaScript para React** ⚛️

Ubicación: `courses/02-introduccion-js-react/`

Temas cubiertos:
- Variables (let, const)
- Tipos de datos
- Objetos y destructuring
- Arrays y métodos
- Funciones (declaration, expression, arrow)
- Array methods (map, filter, reduce)
- Condicionales avanzados
- ES Modules
- Fetch API (Promises, Async/Await)
- DOM (selección, manipulación, eventos)
- Validación de formularios

```bash
# Ejecutar ejemplos
cd courses/02-introduccion-js-react
pnpm dev js/03-variables.ts
```

### **Curso 3: TypeScript Avanzado** 🔷

Ubicación: `courses/03-typescript/`

Temas cubiertos:
- Tipos básicos (string, number, boolean, any, void, never)
- Arrays y tuplas
- Enums
- Funciones y parámetros
- Objetos y tipos personalizados
- Union types
- Interfaces
- Clases (herencia, abstractas, private constructors)
- Namespaces
- Genéricos (Generics)
- Decoradores
- ES6 features

```bash
# Ejecutar ejemplos
cd courses/03-typescript
pnpm dev app.ts
```

---

## 🎮 **Proyectos**

### **🎯 HangIng - Juego del Ahorcado**

**Ubicación:** `apps/hanging/`  
**Tecnologías:** React 19 + TypeScript + Vite  
**Demo:** [https://soyalejodev.github.io/progra-101/](https://soyalejodev.github.io/progra-101/)

Aprende:
- Componentes React
- Manejo de estado (useState)
- Efectos secundarios (useEffect)
- Eventos y callbacks
- Lógica de juego
- Custom hooks

```bash
# Desarrollo
pnpm dev

# Build
pnpm build

# Deploy
pnpm deploy
```

---

## 🛠️ **Tecnologías Utilizadas**

### Core
- **TypeScript** - Tipado estático
- **Node.js** - Entorno de ejecución
- **pnpm** - Gestor de paquetes y workspaces

### Frontend
- **React 19** - Biblioteca UI
- **Vite** - Build tool
- **ESLint** - Linter

### Herramientas de Desarrollo
- **ts-node** - Ejecutar TypeScript directamente
- **nodemon** - Recarga automática
- **gh-pages** - Despliegue a GitHub Pages

---

## 📖 **Ruta de Aprendizaje Recomendada**

```
🎯 FASE 1: Fundamentos (Semanas 1-2)
   └── courses/01-programacion-basica/
       ├── 01-variables-y-tipos.ts
       ├── 02-condicionales-if-else.ts
       ├── 05-ciclos-for.ts
       └── 08-funciones-basicas.ts

🎯 FASE 2: JavaScript Moderno (Semanas 3-4)
   └── courses/02-introduccion-js-react/
       ├── js/03-variables.ts - js/05-tipos.ts
       ├── js/06-objetos.ts - js/09-unir-objetos.ts
       ├── js/11-arrays.ts - js/13-destructuring-arrays.ts
       └── js/16-funciones.ts - js/19-funciones-retorno.ts

🎯 FASE 3: Arrays y Async (Semanas 5-6)
   └── courses/02-introduccion-js-react/
       ├── js/20-array-methods.ts
       ├── js/31-fetch-promises.ts
       └── js/32-fetch-async-await.ts

🎯 FASE 4: DOM y Formularios (Semanas 7-8)
   └── courses/02-introduccion-js-react/
       ├── js/34-dom-seleccion.ts
       ├── js/36-eventos-click.ts
       └── js/39-validacion-formularios.ts

🎯 FASE 5: TypeScript (Semanas 9-12)
   └── courses/03-typescript/
       ├── tipos/
       ├── funciones/
       ├── objetos/
       ├── clases/
       └── interfaces/

🎯 FASE 6: Proyecto Final (Semanas 13-14)
   └── apps/hanging/
       └── ¡Crear tu propia versión!
```

---

## 🤝 **Contribuciones**

Si encontrás errores o querés agregar más ejemplos, ¡las contribuciones son bienvenidas! 

1. Fork el repositorio
2. Creá una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commiteá tus cambios: `git commit -am 'Agrego nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Creá un Pull Request

---

## 📝 **Notas Importantes**

- Todos los ejemplos están en español para facilitar el aprendizaje
- El código está diseñado para ser simple y autodidacta
- Cada curso es independiente y puede estudiarse por separado
- Los comentarios explican qué hace cada parte del código
- Los ejercicios están ordenados por dificultad creciente (⭐)

---

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 **Agradecimientos**

- A todos los estudiantes que practican y mejoran cada día
- A la comunidad de desarrolladores que comparte conocimiento
- A los creadores de contenido educativo de programación

---

¡Feliz aprendizaje! Recuerda que la programación se aprende practicando. ¡Manos a la obra! 🚀

<p align="center">
  <strong>Hecho con ❤️ para la comunidad de desarrolladores</strong>
</p>
