// =============================================
// Print Multiplication Table - Tabla de Multiplicar
// =============================================
// Función que imprime la tabla de multiplicar de un número base
// hasta un límite especificado (por defecto 10).

export function printMultiplication(base: number, limit: number = 10): number {
  // Validación: el límite debe ser positivo
  if (limit <= 0) {
    throw new Error("El límite debe ser un número positivo mayor que cero.");
  }
  // Ciclo para imprimir cada multiplicación
  for (let i = 1; i <= limit; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
  }
  // Retorna el último resultado
  return base * limit;
}
