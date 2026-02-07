# 🔷 Curso 3: TypeScript Avanzado

> TypeScript desde lo básico hasta conceptos avanzados

## 🎯 Objetivos

Al completar este curso serás capaz de:
- Tipar cualquier variable, función o clase
- Crear interfaces y tipos personalizados
- Usar clases con herencia y encapsulamiento
- Implementar genéricos
- Usar decoradores
- Organizar código con namespaces
- Configurar tsconfig.json

## 📁 Estructura

```
.
├── tipos/              # Tipos básicos
│   ├── booleans.ts
│   ├── strings.ts
│   ├── number.ts
│   ├── any.ts
│   ├── arrays.ts
│   ├── tuplas.ts
│   ├── enum.ts
│   ├── void.ts
│   ├── never.ts
│   └── null-undefined.ts
├── funciones/          # Funciones tipadas
│   ├── functions.ts
│   ├── arg-required.ts
│   ├── args-optional.ts
│   ├── args-default.ts
│   ├── args-rest.ts
│   └── function-type.ts
├── objetos/            # Objetos y tipos
│   ├── objects.ts
│   ├── type.ts
│   └── union-types.ts
├── clases/             # POO en TypeScript
│   ├── basica.ts
│   ├── extends.ts
│   ├── abstract.ts
│   └── private-constructors.ts
├── interfaces/         # Interfaces
│   ├── basicas.ts
│   ├── complejas.ts
│   ├── funciones.ts
│   └── clases.ts
├── ES6/                # Características ES6
│   ├── let-var.ts
│   ├── desestructuring.ts
│   ├── for-of.ts
│   └── clases-es6.js
├── namespaces/         # Namespaces
│   └── validation.ts
├── app.ts              # Archivo principal
├── main.js             # Compilado (generado)
└── tsconfig.json       # Configuración
```

## 🚀 Cómo usar

```bash
# Ejecutar el archivo principal
pnpm dev app.ts

# Ejecutar un archivo específico
pnpm dev tipos/arrays.ts

# Compilar todo el proyecto
pnpm typecheck
```

## 📖 Temas por orden de dificultad

### Nivel 1: Fundamentos ⭐
- tipos/booleans.ts
- tipos/strings.ts
- tipos/number.ts
- tipos/any.ts
- funciones/functions.ts

### Nivel 2: Estructuras ⭐⭐
- tipos/arrays.ts
- tipos/tuplas.ts
- objetos/objects.ts
- funciones/arg-required.ts
- funciones/args-optional.ts

### Nivel 3: Tipos avanzados ⭐⭐⭐
- objetos/type.ts
- objetos/union-types.ts
- tipos/enum.ts
- interfaces/basicas.ts

### Nivel 4: POO ⭐⭐⭐⭐
- clases/basica.ts
- clases/extends.ts
- interfaces/clases.ts

### Nivel 5: Avanzado ⭐⭐⭐⭐⭐
- clases/abstract.ts
- ES6/
- namespaces/
- (Genéricos y Decoradores cuando los agregues)

## ⚙️ Configuración

El archivo `tsconfig.json` está configurado para:
- Target: ES6
- Módulo: AMD (para navegador)
- Output: main.js (archivo único)
- Sourcemaps: Habilitados
- Strict mode: Activado

Para cambiar a Node.js/modern ES modules, modificá:
```json
{
  "module": "ESNext",
  "moduleResolution": "node",
  "outDir": "./dist",
  "outFile": null
}
```
