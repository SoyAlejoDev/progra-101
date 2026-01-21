/* 
Realizar un progrma que muestre la nota del alummno como : A , B , C , D , F segun la siguiente tabla de calificaciones:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/
let grade: number = 70; // Puedes cambiar este valor para probar diferentes calificaciones
let letterGrade: string;

if (grade >= 90) {
  letterGrade = "A";
} else if (grade >= 80) {
  letterGrade = "B";
} else if (grade >= 70) {
  letterGrade = "C";
} else if (grade >= 60) {
  letterGrade = "D";
} else {
  letterGrade = "F";
}

console.log(`La calificación del alumno es: ${letterGrade}`);
