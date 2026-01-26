# 🎓 Progra 101 - Monorepo Educativo

> **Repositorio de aprendizaje para estudiantes de programación web**  
> Profesor: [Alejo Dev](https://github.com/SoyAlejoDev)

¡Bienvenidos a **Progra 101**! Este es un **monorepo educativo** diseñado para enseñar programación web con JavaScript, TypeScript y React de manera práctica y progresiva. Aquí encontrarás ejemplos, proyectos y recursos para aprender desde lo básico hasta aplicaciones completas.

## 🌟 ¿Qué encontrarás aquí?

- **📚 Material de estudio**: Ejemplos progresivos de JavaScript/TypeScript
- **🎮 Proyectos prácticos**: Aplicaciones React reales para aprender
- **🏗️ Monorepo moderno**: Estructura profesional con pnpm workspaces
- **🚀 Despliegue automático**: Cada proyecto se publica en GitHub Pages
- **📖 Guías paso a paso**: Documentación para estudiantes

---

## 🚀 **Proyectos Actuales**

### 🎮 **[HangIng - Juego del Ahorcado](https://soyalejodev.github.io/progra-101/)**
**Tecnologías:** React 19 + TypeScript + Vite  
**Estado:** ✅ Desplegado y funcionando  
**Aprende:** Componentes, estado, eventos, lógica de juego

---

## 📁 **Estructura del Monorepo**

```
progra-101/
├── 📚 sections/              # Material de estudio (JavaScript/TypeScript)
│   ├── 01-variables-y-tipos.ts
│   ├── 02-condicionales-if-else.ts
│   ├── 03-funciones-basicas.ts
│   ├── 04-arrays.ts
│   ├── 05-objetos.ts
│   └── ... (más de 11 temas)
├── 🎮 apps/                  # Proyectos frontend desplegables
│   └── hanging/             # Juego del Ahorcado (React + TS)
├── 📦 packages/              # Librerías compartidas (futuro)
├── 📝 tarea/                 # Ejercicios prácticos
├── 🛠️ helpers/               # Funciones auxiliares
└── ⚙️ .github/workflows/     # CI/CD automático
```

## 🎯 ¿Qué vas a aprender?

Este curso cubre los conceptos fundamentales de la programación de manera práctica y progresiva. Cada sección contiene código ejecutable que puedes probar y modificar.

## 🚀 **Configuración del Entorno**

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [pnpm](https://pnpm.io/) (recomendado para monorepo)

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

## 🎮 **Cómo Usar el Monorepo**

### **Para estudiar el material teórico:**

```bash
# Ejecutar un ejemplo específico
pnpm dev:ts sections/01-variables-y-tipos.ts

# Modo watch para desarrollo
pnpm dev:watch
```

### **Para trabajar con los proyectos React:**

```bash
# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Previsualizar el build
pnpm preview
```

### **Scripts Disponibles:**

- `pnpm dev` - Iniciar servidor de desarrollo de React
- `pnpm build` - Construir proyectos para producción
- `pnpm preview` - Previsualizar builds locales
- `pnpm dev:ts` - Ejecutar archivos TypeScript
- `pnpm dev:watch` - Modo watch para TypeScript
- `pnpm deploy` - Despliegue manual a GitHub Pages

---

## 📚 **Material de Estudio - Estructura Detallada**

### **📖 sections/ - Teoría y Ejemplos**

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
    ├── array.ts                      # Ejemplo básico de arrays
    ├── array-objects.ts              # Arrays con objetos
    ├── clases.ts                     # Ejemplo de clases
    ├── import-export.ts              # Módulos y exportaciones
    └── object-literal.ts             # Objetos literales
```

### **📝 tarea/ - Ejercicios Prácticos**

```
tarea/
├── tarea-1.ts            # Conversión de unidades
├── tarea-2.ts            # Conversión kilómetros a millas
├── tarea-3.ts            # Cálculo de área de círculo
├── tarea-4.ts            # Verificación de números pares
├── tarea-5.ts            # Cálculo de factorial
├── tarea-6.ts            # Suma de arrays
├── tarea-7.ts            # Búsqueda en arrays
├── tarea-8.ts            # Manipulación de strings
└── tarea-9.ts            # Funciones matemáticas
```

### **🛠️ helpers/ - Funciones Auxiliares**

```
helpers/
├── math-helpers.ts       # Operaciones matemáticas
└── print-multiplication-table.ts # Tabla de multiplicar
```

## 🚀 Configuración del Entorno

### Prerrequisitos

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [pnpm](https://pnpm.io/)

### Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/SoyAlejoDev/progra-101.git
cd progra-101
```

2. Instala las dependencias:

```bash
npm install
# o si usas pnpm
pnpm install
```

## ▶️ Cómo Ejecutar los Ejemplos

Cada archivo en la carpeta `sections/` es un ejemplo independiente que puedes ejecutar. Usa el comando:

```bash
# Para ejecutar un ejemplo específico
npx ts-node sections/01-variables-y-tipos.ts

# Para ejecutar con watch mode (se reinicia automáticamente al cambiar)
npm run dev:watch
```

### Scripts Disponibles

- `npm run dev`: Ejecuta el archivo principal `app.ts`
- `npm run dev:watch`: Ejecuta en modo watch para desarrollo

## 🗂️ Orden de Estudio Recomendado

Sigue este orden para un aprendizaje progresivo y efectivo:

### 📖 **FASE 1: FUNDAMENTOS** (Semanas 1-2)

#### 1. `01-variables-y-tipos.ts` - Variables y Tipos Básicos ⭐

Aprende sobre los tipos de datos fundamentales en TypeScript/JavaScript:

- **Strings**: Manipulación de texto con template literals
- **Numbers**: Operaciones numéricas
- **Booleans**: Valores verdadero/falso

**Ejemplo clave:**

```typescript
let fullName: string = `${firstName} ${lastName}`;
let result: number = number1 + number2;
let isActive: boolean = true;
```

#### 2. `02-condicionales-if-else.ts` - Condicionales Básicos ⭐

Comprende cómo tomar decisiones en tu código usando estructuras condicionales.

**Conceptos:**

- Uso de `if`, `else if`, y `else`
- Evaluación de expresiones booleanas
- Lógica de toma de decisiones

#### 3. `03-condicionales-calificaciones.ts` - Evaluación con Calificaciones ⭐

Aplicación práctica de condicionales para asignar letras de calificación.

**Escala de calificaciones:**

- A ≥ 90
- B ≥ 80
- C ≥ 70
- D ≥ 60
- F < 60

### 🔄 **FASE 2: CONTROL DE FLUJO** (Semanas 3-4)

#### 4. `04-switch.ts` - Sentencia Switch ⭐

Alternativa a los if-else cuando tienes múltiples opciones.

**Ejemplo:** Días de la semana usando switch.

#### 5. `05-ciclos-for.ts` - Ciclo For ⭐⭐

El ciclo más común para iteraciones controladas.

**Conceptos:**

- Inicialización, condición y actualización
- Uso de `continue` para saltar iteraciones

#### 6. `06-ciclos-while-do-while.ts` - Ciclos While y Do-While ⭐⭐

Ciclos condicionales que se ejecutan mientras una condición sea verdadera.

**Diferencias:**

- **while**: Evalúa la condición ANTES de ejecutar
- **do-while**: Ejecuta AL MENOS UNA VEZ y luego evalúa

**Ejemplo:** Simulación de nivel de gasolina en un tanque.

#### 7. `07-bucles-tabla-multiplicar.ts` - Aplicación de Bucles ⭐⭐

Aplicación práctica de bucles para generar tablas de multiplicar.

### 🛠️ **FASE 3: FUNCIONES Y ESTRUCTURAS DE DATOS** (Semanas 5-6)

#### 8. `08-funciones-basicas.ts` - Funciones Básicas ⭐⭐

Introducción a las funciones como bloques de código reutilizables.

**Conceptos:**

- Declaración de funciones
- Llamadas a funciones
- Variables locales vs globales

#### 9. `09-arrays.ts` - Arrays y Operaciones ⭐⭐⭐

Trabaja con arreglos y sus métodos principales.

**Conceptos:**

- Crear y acceder a arrays
- Agregar/eliminar elementos (push, pop, shift, unshift)
- Recorrer arrays (for, forEach)
- Operaciones comunes (filter, includes, indexOf)

#### 10. `10-objetos.ts` - Objetos y Clases ⭐⭐⭐

Aprende sobre objetos, propiedades y programación orientada a objetos.

**Conceptos:**

- Crear objetos literales
- Propiedades y métodos
- Clases y constructores
- Interfaces en TypeScript

### 🎯 **FASE 4: PROYECTOS INTEGRADORES** (Semanas 7-8)

#### 11. `11-ejercicios-integradores.ts` - Ejercicios que Combinan Todo ⭐⭐⭐⭐

Proyectos completos que integran todos los conceptos aprendidos.

**Ejercicios incluidos:**

- **Sistema de Biblioteca**: Gestión de libros con arrays y objetos
- **Sistema de Calificaciones**: Estudiantes con calificaciones ponderadas
- **Juego de Adivinanza**: Lógica de juego con bucles y condicionales

## 📚 Tareas y Ejercicios Prácticos

La carpeta `tarea/` contiene ejercicios adicionales para practicar los conceptos aprendidos. Cada archivo `tarea-X.ts` incluye una función específica que resuelve un problema común:

- `tarea-1.ts`: Conversión de libras a kilogramos
- `tarea-2.ts`: Conversión de kilómetros a millas
- `tarea-3.ts`: Cálculo del área de un círculo
- `tarea-4.ts`: Verificación de números pares
- `tarea-5.ts`: Cálculo de factorial
- `tarea-6.ts`: Suma de elementos en un array
- `tarea-7.ts`: Búsqueda de elementos en arrays
- `tarea-8.ts`: Manipulación de cadenas de texto
- `tarea-9.ts`: Funciones matemáticas avanzadas

Cada tarea incluye:

- Una descripción del problema
- Una función exportable con la solución
- Ejemplos de uso con console.log
- Código comentado para facilitar el aprendizaje

## � Consejos para Estudiantes

1. **Lee el código**: Antes de ejecutar, intenta predecir qué hará cada línea.

2. **Modifica y experimenta**: Cambia los valores y observa cómo afectan el resultado.

3. **Ejecuta paso a paso**: Usa `console.log()` para ver el flujo de ejecución.

4. **Comenta el código**: Agrega tus propios comentarios explicando qué hace cada parte.

5. **Practica en paralelo**: Crea tus propios archivos .ts con variaciones de estos ejemplos.

## 🛠️ Tecnologías Utilizadas

- **TypeScript**: Para tipado estático y mejor desarrollo
- **Node.js**: Entorno de ejecución
- **ts-node**: Para ejecutar TypeScript directamente
- **nodemon**: Para desarrollo con recarga automática

## 🎯 Proyectos Sugeridos para Practicar

Después de completar todas las secciones, intenta estos proyectos:

### **Proyecto 1: Calculadora Interactiva** ⭐⭐

- Crea una calculadora que tome dos números y una operación
- Usa condicionales para validar operaciones
- Implementa funciones para cada operación matemática

### **Proyecto 2: Lista de Tareas (To-Do List)** ⭐⭐⭐

- Sistema para agregar, eliminar y marcar tareas como completadas
- Usa arrays para almacenar las tareas
- Implementa búsqueda y filtrado

### **Proyecto 3: Sistema de Inventario** ⭐⭐⭐⭐

- Gestiona productos con nombre, precio, stock y categoría
- Implementa funciones para agregar, vender y buscar productos
- Usa objetos y arrays para organizar los datos

### **Proyecto 4: Juego de Batalla Naval** ⭐⭐⭐⭐⭐

- Juego donde dos jugadores colocan barcos y se atacan
- Usa arrays bidimensionales para el tablero
- Implementa lógica de turnos y validaciones

## 📝 Notas Importantes

- Todos los ejemplos están en español para facilitar el aprendizaje
- El código está diseñado para ser simple y autodidacta
- Cada sección es independiente y puede estudiarse por separado
- Los comentarios explican qué hace cada parte del código
- Los ejercicios están ordenados por dificultad creciente (⭐)

## 🤝 Contribuciones

Si encuentras errores o quieres agregar más ejemplos, ¡las contribuciones son bienvenidas! Crea un issue o envía un pull request.

---

¡Feliz aprendizaje! Recuerda que la programación se aprende practicando. ¡Manos a la obra! 🚀</content>
