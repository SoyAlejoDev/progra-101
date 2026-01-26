# 🎮 HangIng - Juego del Ahorcado

> **Proyecto educativo de React + TypeScript**  
> Parte del monorepo [Progra 101](https://github.com/SoyAlejoDev/progra-101)

Un clásico juego de adivinanza de palabras construido con **React 19**, **TypeScript** y **Vite**. Este proyecto es un ejemplo práctico para estudiantes que quieren aprender desarrollo frontend moderno.

## 🌟 **Características Principales**

- **🎯 Selección aleatoria** de palabras relacionadas con programación
- **🖼️ Imágenes visuales** del ahorcado que progresan con errores
- **⌨️ Botones interactivos** para adivinar letras
- **🏆 Detección automática** de victoria/derrota
- **🔄 Reinicio rápido** del juego
- **📱 Diseño responsivo** para todos los dispositivos
- **⚡ Build optimizado** con Vite
- **🚀 Despliegue automático** a GitHub Pages

## 🎮 **Jugar Online**

**👉 [Juega ahora aquí](https://soyalejodev.github.io/progra-101/)**

El juego está desplegado y funcionando gracias al monorepo y GitHub Actions.

## Cómo Jugar

1. Se selecciona una palabra aleatoria de la lista de palabras
2. Haz clic en los botones de letras para adivinar letras en la palabra
3. Las adivinanzas correctas revelan las letras en la palabra
4. Las adivinanzas incorrectas aumentan el dibujo del ahorcado
5. Gana adivinando todas las letras antes de que el dibujo se complete (9 intentos)
6. Pierde si el dibujo se completa antes de adivinar la palabra
7. Haz clic en "Reiniciar juego" para comenzar un nuevo juego

## 🛠️ **Tecnologías Modernas**

- **⚛️ React 19** - Última versión con hooks modernos
- **📘 TypeScript** - Tipado estático para código robusto  
- **⚡ Vite** - Build tool ultrarrápido
- **🔍 ESLint** - Calidad de código automatizada
- **🎨 CSS Modules** - Estilos scoped y mantenibles
- **📦 pnpm** - Gestión de paquetes eficiente

---

## 🚀 **Cómo Usar este Proyecto**

### **Para Estudiantes**

Este es un proyecto **educativo** perfecto para aprender:

1. **Componentes React** y hooks (`useState`, `useEffect`)
2. **Manejo de estado** en aplicaciones interactivas
3. **Event handling** y user interactions
4. **TypeScript** en proyectos reales
5. **Build moderno** con Vite
6. **Deployment automático** con GitHub Actions

### **Clonar y Ejecutar Localmente**

```bash
# Clonar el monorepo completo
git clone https://github.com/SoyAlejoDev/progra-101.git
cd progra-101

# Instalar dependencias del monorepo
pnpm install

# Iniciar este proyecto específico
pnpm dev
# O alternativamente
pnpm --filter hanging dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el juego.

### **Construir para Producción**

```bash
# Build local para pruebas
pnpm build

# Previsualizar el build
pnpm preview

# Deploy manual (automático con GitHub Actions)
pnpm deploy
```

---

## 📁 **Estructura del Código**

```
src/
├── 🎯 App.tsx              # Componente principal - lógica del juego
├── 🧩 components/
│   └── 🖼️ HangImage.tsx    # Componente visual del ahorcado
├── 🛠️ helpers/
│   ├── 📝 getWord.ts       # Selector aleatorio de palabras
│   └── ⌨️ letters.ts       # Array de letras del alfabeto
├── 🎨 assets/              # Imágenes 0-9.png (estados del juego)
├── 🎨 App.css              # Estilos principales
├── 🎨 index.css            # Estilos globales
└── 🌐 main.tsx             # Punto de entrada
```

### **🔍 Componentes Principales**

#### **`App.tsx` - El Cerebro del Juego**
- Estado del juego con `useState`
- Lógica de victoria/derrota
- Manejo de eventos de clicks
- Renderizado condicional

#### **`HangImage.tsx` - Componente Visual**
- Props para mostrar estado actual
- Imágenes secuenciales del ahorcado
- Simple y reutilizable

#### **`helpers/` - Lógica de Negocio**
- `getWord.ts`: Selección aleatoria de palabras
- `letters.ts`: Configuración del alfabeto

---

## 🎯 **Cómo Jugar**

1. **🎲 Selección automática** de palabra aleatoria
2. **🔤 Click en letras** para adivinar
3. **✅ Letras correctas** se revelan en la palabra
4. **❌ Letras incorrectas** dibujan partes del ahorcado
5. **🏆 Ganas** adivinando todas las letras (antes de 9 errores)
6. **💀 Pierdes** si se completa el dibujo
7. **🔄 Reinicia** con el botón para nuevo juego

---

## 💡 **Conceptos de Aprendizaje**

### **📚 Para Estudiantes de React**

```tsx
// Estado del juego - useState hook
const [word, setWord] = useState(getWord());
const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
const [errors, setErrors] = useState(0);

// Manejo de eventos
const handleClick = (letter: string) => {
  if (!guessedLetters.includes(letter)) {
    setGuessedLetters([...guessedLetters, letter]);
    if (!word.includes(letter)) setErrors(errors + 1);
  }
};

// Renderizado condicional
{word.split('').map((letter, index) => (
  guessedLetters.includes(letter) ? letter : '_'
))}
```

### **🎨 Tips de Estilo CSS**

```css
/* Estilos responsivos */
.game-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Animaciones simples */
button:hover {
  transform: scale(1.05);
  transition: transform 0.2s;
}
```

---

## 🔄 **Flujo de Trabajo con Git**

```bash
# Para modificar el proyecto
git checkout -b feature/mejora-hanging

# Hacer cambios
# Añadir nuevas palabras, estilos, etc.

# Commit con mensaje claro
git add .
git commit -m "feat: agregar nuevas palabras de programación"

# Push y Pull Request
git push origin feature/mejora-hanging
```

---

## 🚀 **Ideas para Mejorar el Proyecto**

### **🎯 Nivel Básico**
- [ ] **Agregar más palabras** de programación
- [ ] **Mejorar estilos** con animaciones
- [ ] **Añadir contador** de partidas ganadas/perdidas
- [ ] **Modo oscuro/claro**

### **🚀 Nivel Intermedio**
- [ ] **Categorías de palabras** (frontend, backend, etc.)
- [ ] **Dificultades** (fácil, medio, difícil)
- [ ] **Sonidos** para aciertos/errores
- [ ] **Tiempo límite** por partida

### **🏆 Nivel Avanzado**
- [ ] **Multiplayer** local (2 jugadores)
- [ ] **Base de datos** de palabras externa
- [ ] **Sistema de puntuación** global
- [ ] **PWA** para móvil
- [ ] **Traducciones** a otros idiomas

---

## 📚 **Recursos de Aprendizaje**

### **📖 Documentación**
- [React 19 Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)

### **🎮 Proyectos Similares para Practicar**
- [ ] **To-Do List** con localStorage
- [ ] **Quiz App** con múltiples categorías
- [ ] **Calculadora** científica
- [ ] **Weather App** con API

---

## 🤝 **Contribuciones Estudiantiles**

¡Este es un proyecto educativo! Los estudiantes pueden contribuir:

1. **🐛 Reportar bugs** en los ejercicios
2. **💡 Sugerir mejoras** de gameplay
3. **🎨 Crear nuevos estilos** o temas
4. **📝 Escribir mejor documentación**
5. **🔧 Añadir nuevas funcionalidades**

### **Cómo Contribuir**

```bash
# Fork del repositorio
# Crear rama de feature
# Hacer cambios con tests
# Pull request con descripción clara
```

---

## 🌟 **¿Qué Aprenderás?**

Al trabajar con este proyecto, dominarás:

- ✅ **Component-based architecture** con React
- ✅ **State management** con hooks
- ✅ **TypeScript typing** para componentes
- ✅ **Event handling** y user interactions
- ✅ **CSS-in-JS** y responsive design
- ✅ **Build processes** con Vite
- ✅ **CI/CD** con GitHub Actions
- ✅ **Monorepo workflow** con pnpm

---

**¡Este es solo el comienzo de tu viaje en desarrollo web moderno!** 🚀

*¿Listo para tu siguiente proyecto? Revisa el [README principal](../../README.md) del monorepo.*

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
