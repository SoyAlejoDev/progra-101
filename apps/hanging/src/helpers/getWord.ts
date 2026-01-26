const words: string[] = [
  "PROGRAMACION",
  "DESARROLLO",
  "COMPUTADORA",
  "JAVASCRIPT",
  "TIPOGRAFIA",
  "COMPILADOR",
  "ALGORITMO",
  "FUNCION",
  "VARIABLE",
  "OBJETO",
];

export function getWord(): string {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}
