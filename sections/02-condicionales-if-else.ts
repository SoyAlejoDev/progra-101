// =============================================
// 02 - Condicionales If-Else
// =============================================
// Este archivo demuestra el uso de estructuras condicionales if-else
// para tomar decisiones en el código basadas en condiciones booleanas.

console.log("Inicio de programa");

// Ejemplo comentado de condicional simple (no se ejecuta)
/*
let isTired: boolean = true;

if (isTired) {
  console.log("Tomar cafe");
} else {
  if (!isTired) {
    console.log("Tomar Agua");
  }
}
*/

// Ejemplo principal: Evaluación de calificaciones
let graded: number = 85; // Calificación del estudiante

// Estructura condicional if-else if-else para evaluar la calificación
if (graded >= 60) {
  console.log("Aprobo el curso"); // Si la calificación es 60 o más
} else if (graded >= 50) {
  console.log("Hizo el curso pero debe mejorar"); // Si es entre 50 y 59
} else {
  console.log("Por favor repita el curso"); // Si es menos de 50
}

console.log("Fin de programa");
