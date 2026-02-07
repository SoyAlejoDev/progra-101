interface Persona {
  nombre: string;
  apellido: string;
  edad: number;
  isActive: boolean;
}
let juan: Persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 28,
  isActive: true,
};

let fernanda: Persona = {
  nombre: "Fernanda",
  apellido: "Gomez",
  edad: 34,
  isActive: false,
};

let melisa = {
  nombre: "Melisa",
  apellido: "Lopez",
  edad: 25,
  isActive: true,
};

let personas: Persona[] = [juan, fernanda, melisa];
// console.log(personas);

for (let i = 0; i < personas.length; i++) {
  let persona = personas[i];
  console.log(persona.nombre + " " + persona.apellido);
}
