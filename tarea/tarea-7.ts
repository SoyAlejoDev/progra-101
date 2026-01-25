/* 7- Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
max, la función debe de determinar cual es el mayor de los 3 y retornarlo... la función debe de
trabajar así:
let maxValue = max( 5, 2, 6);
console.log( maxValue ); // 6 */

export function max(a: number, b: number, c: number): number {
  let mayor = a;
  if (b > mayor) {
    mayor = b;
  }
  if (c > mayor) {
    mayor = c;
  }
  return mayor;
}
let maxValue = max(5, 2, 6);
console.log(maxValue); // 6
