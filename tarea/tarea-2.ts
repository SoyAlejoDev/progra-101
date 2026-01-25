/* 2- Convertir de kilómetros a millas, sabiendo que: (1 kilómetro es igual a 0.62 millas )
Ejemplo: 10 kilómetros = 6.21 millas */
export function kilometosAMillas(kilometros: number): number {
  const millas = kilometros * 0.62;
  return millas;
}
console.log(kilometosAMillas(10));

/* let kilometros: number = 10;
let millas: number = kilometros * 0.62;
console.log(`${kilometros} kilómetros son ${millas} millas`); */
