// Arrays - Arreglos en JavaScript/TypeScript
console.log('================== ARRAYS - EJERCICIOS PRÁCTICOS ==================\n');

// 1. Crear y mostrar arrays básicos
console.log('1. CREACIÓN DE ARRAYS:');
let frutas: string[] = ['manzana', 'banana', 'naranja', 'uva'];
let numeros: number[] = [1, 2, 3, 4, 5];
let booleanos: boolean[] = [true, false, true, false];

console.log('Frutas:', frutas);
console.log('Números:', numeros);
console.log('Booleanos:', booleanos);
console.log('');

// 2. Acceder a elementos del array
console.log('2. ACCESO A ELEMENTOS:');
console.log('Primera fruta:', frutas[0]); // Índice 0
console.log('Última fruta:', frutas[frutas.length - 1]); // Último elemento
console.log('Tercer número:', numeros[2]);
console.log('');

// 3. Modificar elementos
console.log('3. MODIFICACIÓN DE ELEMENTOS:');
console.log('Array original:', frutas);
frutas[1] = 'pera'; // Cambiar banana por pera
console.log('Después de cambiar índice 1:', frutas);

numeros[0] = 10; // Cambiar primer número
console.log('Números modificados:', numeros);
console.log('');

// 4. Agregar elementos
console.log('4. AGREGAR ELEMENTOS:');
console.log('Array original:', frutas);
frutas.push('kiwi'); // Agregar al final
console.log('Después de push:', frutas);

frutas.unshift('limón'); // Agregar al inicio
console.log('Después de unshift:', frutas);
console.log('');

// 5. Eliminar elementos
console.log('5. ELIMINAR ELEMENTOS:');
console.log('Array actual:', frutas);
let frutaEliminada = frutas.pop(); // Eliminar último
console.log('Después de pop:', frutas);
console.log('Fruta eliminada:', frutaEliminada);

frutaEliminada = frutas.shift(); // Eliminar primero
console.log('Después de shift:', frutas);
console.log('Fruta eliminada:', frutaEliminada);
console.log('');

// 6. Recorrer arrays con for
console.log('6. RECORRER CON FOR:');
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}
console.log('');

// 7. Recorrer arrays con forEach
console.log('7. RECORRER CON FOREACH:');
frutas.forEach((fruta, indice) => {
    console.log(`Fruta ${indice + 1}: ${fruta}`);
});
console.log('');

// 8. Operaciones comunes con arrays
console.log('8. OPERACIONES COMUNES:');
let masNumeros = [6, 7, 8, 9, 10];
let todosLosNumeros = [...numeros, ...masNumeros]; // Spread operator
console.log('Todos los números:', todosLosNumeros);
console.log('Longitud del array frutas:', frutas.length);
console.log('¿Contiene "naranja"?', frutas.includes('naranja'));
console.log('Índice de "uva":', frutas.indexOf('uva'));
console.log('');

// 9. EJERCICIO PRÁCTICO: Calcular promedio
console.log('9. EJERCICIO: CALCULAR PROMEDIO');
let calificaciones: number[] = [85, 92, 78, 96, 88];
let suma = 0;

for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
}

let promedio = suma / calificaciones.length;
console.log('Calificaciones:', calificaciones);
console.log('Suma total:', suma);
console.log('Promedio:', promedio.toFixed(2));
console.log('');

// 10. EJERCICIO PRÁCTICO: Filtrar elementos
console.log('10. EJERCICIO: FILTRAR NÚMEROS PARES');
let todosLosNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares: number[] = [];

for (let numero of todosLosNumeros2) {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    }
}

console.log('Números originales:', todosLosNumeros2);
console.log('Números pares:', numerosPares);
console.log('');

// 11. Array de objetos
console.log('11. ARRAY DE OBJETOS:');
let estudiantes = [
    { nombre: 'Ana', edad: 20, promedio: 9.2 },
    { nombre: 'Carlos', edad: 22, promedio: 8.7 },
    { nombre: 'María', edad: 21, promedio: 9.5 }
];

console.log('Lista de estudiantes:');
estudiantes.forEach((estudiante, index) => {
    console.log(`${index + 1}. ${estudiante.nombre} - Edad: ${estudiante.edad} - Promedio: ${estudiante.promedio}`);
});

console.log('\n================== FIN DE EJERCICIOS ==================');