// =============================================
// 08 - Funciones Básicas
// =============================================
// Este archivo demuestra el uso de funciones en TypeScript.
// Las funciones permiten reutilizar código y organizar la lógica.

let numberOfLines = 0; // Variable global para contar líneas

// Definición de una función que imprime el número de línea
export function printLineNumber() {
  numberOfLines++; // Incrementa el contador
  console.log("Línea #", numberOfLines); // Imprime el número de línea
}

// Llamadas a la función (se ejecuta 4 veces)
printLineNumber();
printLineNumber();
printLineNumber();
printLineNumber();
