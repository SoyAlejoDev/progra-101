// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelear: () => void;
}

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
};

const batimovil = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion
interface CuidadGotica {
  (ciudadanos: string[]): number;
}

const ciudadGotica: CuidadGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
interface PersonaInterface {
  nombre: string;
  edad: number;
  estadoCivil: string;
  sexo: string;
  imprimirBio(): void;
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaInterface {
  constructor(
    public nombre: string,
    public edad: number,
    public estadoCivil: string,
    public sexo: string,
  ) {}
  imprimirBio(): void {}
}
