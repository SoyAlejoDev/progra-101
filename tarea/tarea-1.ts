/* 1- Convertir de Libras a Kilogramos. ( 1 libra = 0.453592 Kilogramos )
Ejemplo: 150 libras = 68.0388 kilogramos */
export function librasAKilogramos(libras: number): number {
  const kilogramos = libras * 0.453592;
  return kilogramos;
}

console.log(librasAKilogramos(150));

/* let libras: number = 150;
let kilogramos: number = libras * 0.453592;
console.log(`${libras} libras son ${kilogramos} kilogramos`); */
