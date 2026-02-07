/* 4- Dado el siguiente arreglo:
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
Utilizando un ciclo FOR, barra todo el arreglo y determine ¿Cuál es el número mayor? */
export function encontrarNumeroMayor(numbers: number[]): number {
  let mayor = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > mayor) {
      mayor = numbers[i];
    }
  }
  return mayor;
}

const numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];
console.log(encontrarNumeroMayor(numbers));
// Salida esperada: 10

/* let mayor: number = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > mayor) {
    mayor = numbers[i];
  }
}
console.log(`El número mayor del arreglo es: ${mayor}`); */
