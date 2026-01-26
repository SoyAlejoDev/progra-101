# 🎓 Guía Rápida para Estudiantes

> **Cómo usar el monorepo Progra 101 en 5 minutos**

## 🚀 **Empezar Ahora**

### **1. Clonar y Configurar**

```bash
# Clonar el repositorio
git clone https://github.com/SoyAlejoDev/progra-101.git
cd progra-101

# Instalar dependencias (¡importante!)
pnpm install
```

### **2. Elegir tu Ruta de Aprendizaje**

#### **📚 Opción A: Aprender TypeScript/JavaScript**

```bash
# Ejecutar el primer tema
pnpm dev:ts sections/01-variables-y-tipos.ts

# Ver el resultado en la consola
```

#### **🎮 Opción B: Trabajar con el Proyecto React**

```bash
# Iniciar el juego del ahorcado
pnpm dev

# Abrir http://localhost:3000
```

---

## 📋 **Comandos Esenciales**

| Comando | ¿Qué hace? | ¿Cuándo usarlo? |
|---------|------------|-----------------|
| `pnpm dev` | Inicia el servidor React | Para trabajar en proyectos web |
| `pnpm dev:ts archivo.ts` | Ejecuta un archivo TypeScript | Para estudiar teoría |
| `pnpm build` | Construye para producción | Antes de hacer deploy |
| `pnpm preview` | Previsualiza el build | Para probar el resultado |
| `pnpm dev:watch` | Modo auto-recarga | Mientras estudias/codificas |

---

## 🎯 **Ruta de Aprendizaje Sugerida**

### **Semana 1-2: Fundamentos 📚**

```bash
# Estudia estos archivos en orden:
pnpm dev:ts sections/01-variables-y-tipos.ts
pnpm dev:ts sections/02-condicionales-if-else.ts
pnpm dev:ts sections/03-funciones-basicas.ts
pnpm dev:ts sections/04-arrays.ts
pnpm dev:ts sections/05-objetos.ts
```

### **Semana 3-4: Práctica con React 🎮**

```bash
# 1. Explora el proyecto existente
pnpm dev
# Abre apps/hanging/src/

# 2. Modifica algo simple
# Cambia el título, colores, etc.

# 3. Construye y prueba
pnpm build
pnpm preview
```

### **Semana 5-6: Crea tu Propio Proyecto 🚀**

```bash
# 1. Copia el proyecto existente
cp -r apps/hanging apps/mi-proyecto

# 2. Modifica package.json
# Cambia el nombre y descripción

# 3. ¡Crea algo nuevo!
pnpm --filter mi-proyecto dev
```

---

## 🔧 **Problemas Comunes y Soluciones**

### **❌ "pnpm: command not found"**

```bash
# Solución 1: Instalar pnpm
npm install -g pnpm

# Solución 2: Usar npx
npx pnpm install
```

### **❌ "Cannot resolve module"**

```bash
# Limpiar todo y reinstalar
rm -rf node_modules apps/*/node_modules
pnpm install
```

### **❌ "Port 3000 already in use"**

```bash
# Matar el proceso
pkill -f "vite"

# O usar otro puerto
pnpm dev --port 3001
```

---

## 📁 **Dónde Encontrar las Cosas**

```
progra-101/
├── 📚 sections/          # Material de estudio (TypeScript)
├── 🎮 apps/hanging/      # Proyecto React (juego del ahorcado)
├── 📝 tarea/            # Ejercicios para practicar
├── 🛠️ helpers/          # Funciones útiles
└── ⚙️ .github/workflows/ # Deployment automático
```

---

## 🎮 **Tips para el Proyecto React**

### **Explorar el Código:**

```bash
# Estructura principal
apps/hanging/src/
├── App.tsx              # Componente principal
├── components/          # Componentes reutilizables
├── helpers/             # Lógica del juego
└── assets/              # Imágenes y recursos
```

### **Modificar Algo:**

1. **Cambia el título** en `App.tsx`
2. **Modifica colores** en `index.css`
3. **Añade una nueva palabra** en `helpers/getWord.ts`
4. **Crea un nuevo componente** en `components/`

---

## 📚 **Cómo Estudiar Efectivamente**

### **📖 Antes de ejecutar:**
- Lee el código y trata de entender qué hace
- Piensa qué resultado esperas

### **🎯 Durante la ejecución:**
- Observa la salida en la consola
- Compara con tu predicción

### **✍️ Después de ejecutar:**
- Modifica valores y observa cambios
- Agrega `console.log()` para entender el flujo
- Escribe tus propios comentarios

---

## 🚀 **Siguientes Pasos**

### **Cuando termines el material básico:**

1. **Haz los ejercicios** en `tarea/`
2. **Modifica el juego React** existente
3. **Crea tu propio proyecto** en `apps/`
4. **Contribuye** al repositorio con mejoras

### **Proyectos sugeridos:**

- 📝 Lista de tareas (To-Do List)
- 🎨 Generador de paletas de colores
- 📊 Dashboard simple
- 🎮 Quiz app
- 🛍️ Catálogo de productos

---

## 🤝 **Pedir Ayuda**

### **Si tienes problemas:**

1. **Revisa esta guía** primero
2. **Busca en Google** el error específico
3. **Pregunta en clase** o al profesor
4. **Crea un issue** en el repositorio

### **Recursos útiles:**

- [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de React](https://react.dev/)
- [Tutoriales de Vite](https://vitejs.dev/guide/)

---

## 🎉 **¡Estás Listo!**

Ahora tienes todo lo necesario para:

- ✅ **Ejecutar** el material educativo
- ✅ **Trabajar** en proyectos React
- ✅ **Construir** y desplegar aplicaciones
- ✅ **Aprender** desarrollo web moderno

**¡Manos al código y feliz aprendizaje!** 🚀

---

*¿Necesitas más ayuda? Revisa el [README-MONOREPO.md](./README-MONOREPO.md) para una guía técnica detallada.*