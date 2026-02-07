// =============================================
// 05 - Ciclo For
// =============================================
// Este archivo demuestra el uso del ciclo for para iteraciones controladas.
// El ciclo for tiene tres partes: inicialización, condición y actualización.

// Ciclo for básico
for (let i = 0; i <= 5; i++) {
  // i va de 0 a 5 inclusive
  console.log(`Número ${i}`); // Imprime el número actual
  if (i === 5) {
    continue; // Salta a la siguiente iteración (aunque es la última)
  }
}
