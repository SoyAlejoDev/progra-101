// EJERCICIOS INTEGRADORES - Combinando todos los conceptos aprendidos
console.log('================== EJERCICIOS INTEGRADORES ==================\n');

// EJERCICIO 1: Sistema de Biblioteca
console.log('EJERCICIO 1: SISTEMA DE BIBLIOTECA\n');

interface Libro {
    titulo: string;
    autor: string;
    anio: number;
    disponible: boolean;
    genero: string;
}

class Biblioteca {
    libros: Libro[];

    constructor() {
        this.libros = [];
    }

    agregarLibro(libro: Libro): void {
        this.libros.push(libro);
        console.log(`Libro "${libro.titulo}" agregado a la biblioteca`);
    }

    buscarPorAutor(autor: string): Libro[] {
        return this.libros.filter(libro =>
            libro.autor.toLowerCase().includes(autor.toLowerCase())
        );
    }

    buscarPorGenero(genero: string): Libro[] {
        return this.libros.filter(libro =>
            libro.genero.toLowerCase() === genero.toLowerCase()
        );
    }

    prestarLibro(titulo: string): boolean {
        const libro = this.libros.find(l =>
            l.titulo.toLowerCase() === titulo.toLowerCase()
        );

        if (libro && libro.disponible) {
            libro.disponible = false;
            console.log(`Libro "${titulo}" prestado exitosamente`);
            return true;
        } else {
            console.log(`Libro "${titulo}" no está disponible`);
            return false;
        }
    }

    devolverLibro(titulo: string): boolean {
        const libro = this.libros.find(l =>
            l.titulo.toLowerCase() === titulo.toLowerCase()
        );

        if (libro && !libro.disponible) {
            libro.disponible = true;
            console.log(`Libro "${titulo}" devuelto exitosamente`);
            return true;
        } else {
            console.log(`Libro "${titulo}" ya está disponible o no existe`);
            return false;
        }
    }

    mostrarLibrosDisponibles(): void {
        console.log('Libros disponibles:');
        const disponibles = this.libros.filter(libro => libro.disponible);
        if (disponibles.length === 0) {
            console.log('No hay libros disponibles');
        } else {
            disponibles.forEach((libro, index) => {
                console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor} (${libro.genero})`);
            });
        }
    }
}

// Crear biblioteca y agregar libros
const biblioteca = new Biblioteca();

biblioteca.agregarLibro({
    titulo: 'JavaScript: The Good Parts',
    autor: 'Douglas Crockford',
    anio: 2008,
    disponible: true,
    genero: 'Programación'
});

biblioteca.agregarLibro({
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
    anio: 2008,
    disponible: true,
    genero: 'Programación'
});

biblioteca.agregarLibro({
    titulo: 'The Pragmatic Programmer',
    autor: 'Andrew Hunt',
    anio: 1999,
    disponible: true,
    genero: 'Programación'
});

biblioteca.agregarLibro({
    titulo: '1984',
    autor: 'George Orwell',
    anio: 1949,
    disponible: true,
    genero: 'Ficción'
});

console.log('\n--- Libros disponibles ---');
biblioteca.mostrarLibrosDisponibles();

console.log('\n--- Buscar por autor "Martin" ---');
const librosMartin = biblioteca.buscarPorAutor('Martin');
librosMartin.forEach(libro => console.log(`${libro.titulo} - ${libro.autor}`));

console.log('\n--- Prestar libro ---');
biblioteca.prestarLibro('Clean Code');
biblioteca.mostrarLibrosDisponibles();

console.log('\n--- Devolver libro ---');
biblioteca.devolverLibro('Clean Code');
biblioteca.mostrarLibrosDisponibles();

// EJERCICIO 2: Sistema de Calificaciones de Estudiantes
console.log('\n\nEJERCICIO 2: SISTEMA DE CALIFICACIONES\n');

interface Materia {
    nombre: string;
    creditos: number;
}

interface Calificacion {
    materia: Materia;
    nota: number;
    fecha: string;
}

class EstudianteSistema {
    nombre: string;
    id: number;
    calificaciones: Calificacion[];

    constructor(nombre: string, id: number) {
        this.nombre = nombre;
        this.id = id;
        this.calificaciones = [];
    }

    agregarCalificacion(materia: Materia, nota: number): void {
        if (nota >= 0 && nota <= 10) {
            const calificacion: Calificacion = {
                materia: materia,
                nota: nota,
                fecha: new Date().toLocaleDateString()
            };
            this.calificaciones.push(calificacion);
            console.log(`Calificación ${nota} agregada en ${materia.nombre} para ${this.nombre}`);
        } else {
            console.log('La calificación debe estar entre 0 y 10');
        }
    }

    calcularPromedio(): number {
        if (this.calificaciones.length === 0) return 0;

        let suma = 0;
        for (let calif of this.calificaciones) {
            suma += calif.nota;
        }
        return suma / this.calificaciones.length;
    }

    calcularPromedioPonderado(): number {
        if (this.calificaciones.length === 0) return 0;

        let sumaNotas = 0;
        let sumaCreditos = 0;

        for (let calif of this.calificaciones) {
            sumaNotas += calif.nota * calif.materia.creditos;
            sumaCreditos += calif.materia.creditos;
        }

        return sumaCreditos > 0 ? sumaNotas / sumaCreditos : 0;
    }

    obtenerMejorMateria(): string {
        if (this.calificaciones.length === 0) return 'Sin calificaciones';

        let mejorCalif = this.calificaciones[0];
        for (let calif of this.calificaciones) {
            if (calif.nota > mejorCalif.nota) {
                mejorCalif = calif;
            }
        }
        return mejorCalif.materia.nombre;
    }

    reporteCompleto(): void {
        console.log(`\n=== REPORTE DE ${this.nombre.toUpperCase()} ===`);
        console.log(`ID: ${this.id}`);
        console.log(`Total de calificaciones: ${this.calificaciones.length}`);

        if (this.calificaciones.length > 0) {
            console.log('\nCalificaciones por materia:');
            for (let i = 0; i < this.calificaciones.length; i++) {
                const calif = this.calificaciones[i];
                console.log(`${i + 1}. ${calif.materia.nombre} (${calif.materia.creditos} créditos): ${calif.nota} - ${calif.fecha}`);
            }

            console.log(`\nPromedio simple: ${this.calcularPromedio().toFixed(2)}`);
            console.log(`Promedio ponderado: ${this.calcularPromedioPonderado().toFixed(2)}`);
            console.log(`Mejor materia: ${this.obtenerMejorMateria()}`);
        }
    }
}

// Materias disponibles
const matematica: Materia = { nombre: 'Matemáticas', creditos: 4 };
const programacion: Materia = { nombre: 'Programación', creditos: 5 };
const fisica: Materia = { nombre: 'Física', creditos: 3 };
const ingles: Materia = { nombre: 'Inglés', creditos: 2 };

// Crear estudiantes y agregar calificaciones
const estudianteA = new EstudianteSistema('Ana García', 1);
const estudianteB = new EstudianteSistema('Luis Rodríguez', 2);

estudianteA.agregarCalificacion(matematica, 8);
estudianteA.agregarCalificacion(programacion, 9);
estudianteA.agregarCalificacion(fisica, 7);
estudianteA.agregarCalificacion(ingles, 8);

estudianteB.agregarCalificacion(matematica, 6);
estudianteB.agregarCalificacion(programacion, 8);
estudianteB.agregarCalificacion(fisica, 9);
estudianteB.agregarCalificacion(ingles, 7);

estudianteA.reporteCompleto();
estudianteB.reporteCompleto();

// EJERCICIO 3: Juego de Adivinar Números
console.log('\n\nEJERCICIO 3: JUEGO DE ADIVINAR NÚMEROS\n');

class JuegoAdivinanza {
    numeroSecreto: number;
    intentos: number;
    maxIntentos: number;
    historial: number[];

    constructor(maxIntentos: number = 10) {
        this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
        this.intentos = 0;
        this.maxIntentos = maxIntentos;
        this.historial = [];
    }

    adivinar(numero: number): string {
        this.intentos++;
        this.historial.push(numero);

        if (numero === this.numeroSecreto) {
            return `¡Felicitaciones! Adivinaste el número ${this.numeroSecreto} en ${this.intentos} intentos`;
        }

        if (this.intentos >= this.maxIntentos) {
            return `Game Over! El número secreto era ${this.numeroSecreto}`;
        }

        if (numero < this.numeroSecreto) {
            return `El número es MAYOR que ${numero}. Te quedan ${this.maxIntentos - this.intentos} intentos`;
        } else {
            return `El número es MENOR que ${numero}. Te quedan ${this.maxIntentos - this.intentos} intentos`;
        }
    }

    mostrarEstadisticas(): void {
        console.log(`Intentos realizados: ${this.intentos}`);
        console.log(`Historial de números: ${this.historial.join(', ')}`);

        if (this.historial.length > 1) {
            let diferencia = Math.abs(this.historial[this.historial.length - 1] - this.numeroSecreto);
            console.log(`Última diferencia: ${diferencia}`);
        }
    }

    reiniciar(): void {
        this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
        this.intentos = 0;
        this.historial = [];
        console.log('Juego reiniciado. ¡Nuevo número generado!');
    }
}

// Simular juego
const juego = new JuegoAdivinanza(8);

console.log('¡Bienvenido al juego de adivinar números!');
console.log('Estoy pensando en un número entre 1 y 100. ¡Adivina cuál es!');

let resultado: string;
let numerosPrueba = [50, 75, 62, 68, 71];

for (let numero of numerosPrueba) {
    resultado = juego.adivinar(numero);
    console.log(`Intento: ${numero} - ${resultado}`);

    if (resultado.includes('Felicitaciones') || resultado.includes('Game Over')) {
        break;
    }
}

console.log('\nEstadísticas finales:');
juego.mostrarEstadisticas();

console.log('\n================== FIN DE EJERCICIOS INTEGRADORES ==================');