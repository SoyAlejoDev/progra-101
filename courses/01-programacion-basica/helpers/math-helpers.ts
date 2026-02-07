// =============================================
// Math Helpers - Funciones Matemáticas Auxiliares
// =============================================
// Este archivo contiene funciones básicas de operaciones matemáticas
// que pueden ser reutilizadas en otros módulos del proyecto.

// Función para sumar dos números
export function sumar(a: number, b: number): number {
  return a + b;
}

// Función para restar dos números
export function restar(a: number, b: number): number {
  return a - b;
}

// Función para multiplicar dos números
export function multiplicar(a: number, b: number): number {
  return a * b;
}

// Función para dividir dos números con validación
export function dividir(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero"); // Evita división por cero
  }
  return a / b;
}
