/* 3- Calcule el área de un triangulo rectángulo que:
Base 10 y altura 5 */
export function areaTrianguloRectangulo(base: number, altura: number): number {
  const area = (base * altura) / 2;
  return area;
}

console.log(areaTrianguloRectangulo(10, 5));

/* let base: number = 10;
let altura: number = 5;
let area: number = (base * altura) / 2;
console.log(
  `El área del triángulo rectángulo de base ${base} y altura ${altura} es ${area}`,
); */
