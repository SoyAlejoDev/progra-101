// =============================================
// Ejemplo Básico de Arrays
// =============================================
// Este archivo demuestra el uso básico de arrays en TypeScript.
// Los arrays permiten almacenar múltiples valores del mismo tipo.

let personas: string[] = ["Alice", "Bob", "Charlie"]; // Array de strings
let flores: string[] = ["Rosa", "Tulipán", "Margarita"]; // Otro array de strings

// Código comentado: ejemplo de cómo recorrer un array con for
/*
for (let index = 0; index < flores.length; index++) {
  console.log(flores[index]);
}
*/

let salarios: number[] = [1000, 2000, 3000]; // Array de números

// Recorrer arrays paralelos para mostrar información relacionada
for (let index = 0; index <= personas.length - 1; index++) {
  console.log(`${personas[index]} tiene un salario de ${salarios[index]}`);
}
