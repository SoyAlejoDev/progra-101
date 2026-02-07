// Objetos - Trabajando con objetos en JavaScript/TypeScript
console.log('================== OBJETOS - EJERCICIOS PRÁCTICOS ==================\n');

// 1. Crear objetos básicos
console.log('1. CREACIÓN DE OBJETOS:');
interface Persona {
    nombre: string;
    edad: number;
    ciudad: string;
    activo?: boolean;
    profesion?: string;
    hobbies?: string[];
}

let persona: Persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Buenos Aires',
    activo: true
};

console.log('Objeto persona:', persona);
console.log('');

// 2. Acceder a propiedades
console.log('2. ACCESO A PROPIEDADES:');
console.log('Nombre:', persona.nombre); // Notación punto
console.log('Edad:', persona['edad']); // Notación corchetes
console.log('Ciudad:', persona.ciudad);
console.log('');

// 3. Modificar propiedades
console.log('3. MODIFICACIÓN DE PROPIEDADES:');
console.log('Objeto original:', persona);
persona.edad = 26; // Cambiar edad
persona.ciudad = 'Córdoba'; // Cambiar ciudad
console.log('Después de modificaciones:', persona);
console.log('');

// 4. Agregar nuevas propiedades
console.log('4. AGREGAR PROPIEDADES:');
persona.profesion = 'Desarrollador'; // Agregar profesión
persona.hobbies = ['programar', 'leer', 'deporte']; // Agregar array
console.log('Después de agregar propiedades:', persona);
console.log('');

// 5. Eliminar propiedades
console.log('5. ELIMINAR PROPIEDADES:');
delete persona.activo; // Eliminar propiedad
console.log('Después de eliminar "activo":', persona);
console.log('');

// 6. Objetos con métodos
console.log('6. OBJETOS CON MÉTODOS:');
let coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2020,
    encendido: false,

    // Método para encender
    encender: function() {
        this.encendido = true;
        console.log(`${this.marca} ${this.modelo} encendido`);
    },

    // Método para apagar
    apagar: function() {
        this.encendido = false;
        console.log(`${this.marca} ${this.modelo} apagado`);
    },

    // Método para obtener información
    info: function() {
        return `${this.marca} ${this.modelo} (${this.anio}) - ${this.encendido ? 'Encendido' : 'Apagado'}`;
    }
};

console.log('Información del coche:', coche.info());
coche.encender();
console.log('Después de encender:', coche.info());
coche.apagar();
console.log('Después de apagar:', coche.info());
console.log('');

// 7. Constructor de objetos (clases)
console.log('7. CLASES Y CONSTRUCTORES:');
class Producto {
    nombre: string;
    precio: number;
    stock: number;

    constructor(nombre: string, precio: number, stock: number = 0) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad: number = 1): boolean {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log(`Vendidos ${cantidad} ${this.nombre}(s). Stock restante: ${this.stock}`);
            return true;
        } else {
            console.log(`No hay suficiente stock de ${this.nombre}`);
            return false;
        }
    }

    info(): string {
        return `${this.nombre} - $${this.precio} (Stock: ${this.stock})`;
    }
}

let laptop = new Producto('Laptop', 1500, 10);
let mouse = new Producto('Mouse', 25, 50);

console.log('Producto 1:', laptop.info());
console.log('Producto 2:', mouse.info());
console.log('');

laptop.vender(2);
mouse.vender(5);
console.log('');

console.log('Después de ventas:');
console.log('Laptop:', laptop.info());
console.log('Mouse:', mouse.info());
console.log('');

// 8. EJERCICIO PRÁCTICO: Sistema de estudiantes
console.log('8. EJERCICIO: SISTEMA DE ESTUDIANTES');
class Estudiante {
    nombre: string;
    calificaciones: number[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.calificaciones = [];
    }

    agregarCalificacion(nota: number): void {
        if (nota >= 0 && nota <= 10) {
            this.calificaciones.push(nota);
            console.log(`Calificación ${nota} agregada a ${this.nombre}`);
        } else {
            console.log('La calificación debe estar entre 0 y 10');
        }
    }

    calcularPromedio(): number {
        if (this.calificaciones.length === 0) return 0;

        let suma = 0;
        for (let calif of this.calificaciones) {
            suma += calif;
        }
        return suma / this.calificaciones.length;
    }

    estadoAcademico(): string {
        let promedio = this.calcularPromedio();
        if (promedio >= 7) return 'Aprobado';
        if (promedio >= 4) return 'Regular';
        return 'Reprobado';
    }

    reporte(): void {
        console.log(`Estudiante: ${this.nombre}`);
        console.log(`Calificaciones: ${this.calificaciones.join(', ')}`);
        console.log(`Promedio: ${this.calcularPromedio().toFixed(2)}`);
        console.log(`Estado: ${this.estadoAcademico()}`);
    }
}

// Crear estudiantes y agregar calificaciones
let estudiante1 = new Estudiante('María González');
let estudiante2 = new Estudiante('Carlos López');

estudiante1.agregarCalificacion(8);
estudiante1.agregarCalificacion(9);
estudiante1.agregarCalificacion(7);

estudiante2.agregarCalificacion(6);
estudiante2.agregarCalificacion(5);
estudiante2.agregarCalificacion(7);

console.log('');
estudiante1.reporte();
console.log('');
estudiante2.reporte();
console.log('');

// 9. Objetos anidados
console.log('9. OBJETOS ANIDADOS:');
let empresa = {
    nombre: 'Tech Corp',
    ubicacion: 'Argentina',
    empleados: [
        { nombre: 'Ana', puesto: 'Desarrolladora', salario: 50000 },
        { nombre: 'Pedro', puesto: 'Diseñador', salario: 45000 },
        { nombre: 'Laura', puesto: 'Gerente', salario: 60000 }
    ],
    calcularSalarioTotal: function() {
        let total = 0;
        for (let empleado of this.empleados) {
            total += empleado.salario;
        }
        return total;
    }
};

console.log('Empresa:', empresa.nombre);
console.log('Empleados:');
empresa.empleados.forEach((emp, index) => {
    console.log(`  ${index + 1}. ${emp.nombre} - ${emp.puesto} - $${emp.salario}`);
});
console.log('Salario total de la empresa:', empresa.calcularSalarioTotal());

console.log('\n================== FIN DE EJERCICIOS ==================');