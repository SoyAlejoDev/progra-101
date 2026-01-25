// =============================================
// 01 - Variables y Tipos Básicos
// =============================================
// Este archivo demuestra el uso de tipos de datos básicos en TypeScript:
// - Strings: Para texto
// - Numbers: Para números
// - Booleans: Para valores verdadero/falso

// Strings - Cadenas de texto
console.log("-------------------strings-------------------");
// Declaramos variables de tipo string para almacenar texto
let firstName: string = "Alejo"; // Nombre del usuario
let lastName: string = "Dev"; // Apellido del usuario
// Usamos template literals (backticks) para concatenar strings de forma elegante
let fullName: string = `${firstName} ${lastName}`; // Combina nombre y apellido
// Mostramos los valores usando template literals para interpolación
console.log(`el nombre es ${firstName}`);
console.log(`el apellido es ${lastName}`);
console.log(`el nombre completo es ${fullName}`);
console.log(`el dev mas mostro es: ${fullName}`);

// Numbers - Números
console.log("-------------numbers-------------------");
// Declaramos variables de tipo number para operaciones matemáticas
let number1: number = 10; // Primer número
let number2: number = 20; // Segundo número
let result: number = number1 + number2; // Suma de los dos números
// Mostramos los valores y el resultado
console.log(`el numero 1 es : ${number1}`);
console.log(`el numero 2 es ${number2}`);
console.log(`el resultado de la suma es: ${result}`);

// Booleans - Valores booleanos
console.log("-------------booleans-------------------");
// Declaramos variables booleanas para representar estados verdadero/falso
let isActive: boolean = true; // Indica si algo está activo
let itRunning: boolean = false; // Indica si algo está corriendo
let hasKids: boolean = false; // Indica si tiene hijos
// Mostramos los valores booleanos
console.log(`el valor de isActive es: ${isActive}`);
console.log("isActive", isActive);
console.log("itRunning", itRunning);
console.log("hasKids", hasKids);
