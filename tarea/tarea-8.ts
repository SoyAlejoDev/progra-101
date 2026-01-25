/* 8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
nombre que tenga más letras del arreglo, y debe de trabajar así:
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray( heroes );
console.log( hero ); // Profesor Charles Xavier
Tip:
let hero = 'Strider';
hero.length; // 7 */
let heroes = ["Deadpool", "Ciclope", "Magneto", "Profesor Charles Xavier"];
export function largestNameOfArray(names: string[]): string {
  let largestName = "";
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > largestName.length) {
      largestName = names[i];
    }
  }
  return largestName;
}
let hero = largestNameOfArray(heroes);
console.log(hero); // Profesor Charles Xavier
