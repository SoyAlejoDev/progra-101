export function printMultiplication(base: number, limit: number = 10): number {
  if (limit <= 0) {
    throw new Error("El límite debe ser un número positivo mayor que cero.");
  }
  for (let i = 1; i <= limit; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
  }
  return base * limit;
}
