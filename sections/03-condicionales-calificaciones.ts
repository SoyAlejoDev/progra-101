// =============================================
// 03 - Condicionales con Calificaciones
// =============================================
// Este archivo demuestra cómo convertir calificaciones numéricas
// a letras usando estructuras condicionales if-else if-else.

/*
Realizar un programa que muestre la nota del alumno como: A, B, C, D, F
según la siguiente tabla de calificaciones:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

let grade: number = 70; // Calificación numérica (puedes cambiar este valor para probar)
let letterGrade: string; // Variable para almacenar la letra de calificación

// Estructura condicional para asignar la letra según el rango
if (grade >= 90) {
  letterGrade = "A"; // Excelente
} else if (grade >= 80) {
  letterGrade = "B"; // Bueno
} else if (grade >= 70) {
  letterGrade = "C"; // Aceptable
} else if (grade >= 60) {
  letterGrade = "D"; // Deficiente
} else {
  letterGrade = "F"; // Fallido
}

// Mostrar el resultado
console.log(`La calificación del alumno es: ${letterGrade}`);
