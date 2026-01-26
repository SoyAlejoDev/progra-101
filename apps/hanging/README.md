# Juego del Ahorcado

Un clásico juego de adivinanza de palabras construido con React, TypeScript y Vite.

## Características

- Selección aleatoria de palabras de una lista predefinida de términos relacionados con programación
- Imágenes visuales del ahorcado que progresan con adivinanzas incorrectas
- Botones de letras para adivinar
- Detección de victoria/derrota
- Funcionalidad de reinicio del juego
- Diseño responsivo

## Cómo Jugar

1. Se selecciona una palabra aleatoria de la lista de palabras
2. Haz clic en los botones de letras para adivinar letras en la palabra
3. Las adivinanzas correctas revelan las letras en la palabra
4. Las adivinanzas incorrectas aumentan el dibujo del ahorcado
5. Gana adivinando todas las letras antes de que el dibujo se complete (9 intentos)
6. Pierde si el dibujo se completa antes de adivinar la palabra
7. Haz clic en "Reiniciar juego" para comenzar un nuevo juego

## Tecnologías Utilizadas

- React 18
- TypeScript
- Vite
- ESLint
- CSS

## Primeros Pasos

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o pnpm

### Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   # o
   pnpm install
   ```

### Ejecutando la Aplicación

```bash
npm run dev
# o
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Construyendo para Producción

```bash
npm run build
# o
pnpm build
```

## Estructura del Proyecto

```
src/
├── App.tsx              # Componente principal del juego
├── components/
│   └── HangImage.tsx    # Visualización de imágenes del ahorcado
├── helpers/
│   ├── getWord.ts       # Selección aleatoria de palabras
│   └── letters.ts       # Array de letras para botones
├── assets/              # Imágenes del ahorcado (0-9.png)
└── App.css              # Estilos
```

## Lógica del Juego

- Las palabras se seleccionan aleatoriamente de `src/helpers/getWord.ts`
- El estado del juego se maneja con hooks de React
- Condición de victoria: todas las letras de la palabra son adivinadas
- Condición de derrota: 9 intentos incorrectos
- El juego se puede reiniciar recargando la página o usando el botón de reinicio

## Contribuyendo

¡Siéntete libre de enviar issues y solicitudes de mejoras!
