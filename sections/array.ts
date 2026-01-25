let personas: string[] = ["Alice", "Bob", "Charlie"];
let flores: string[] = ["Rosa", "Tulipán", "Margarita"];

/* for (let index = 0; index < flores.length; index++) {
  console.log(flores[index]);
} */

let salarios: number[] = [1000, 2000, 3000];

for (let index = 0; index <= personas.length - 1; index++) {
  console.log(`${personas[index]} tiene un salario de ${salarios[index]}`);
}
