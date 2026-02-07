(() => {
  class Avenger {
    constructor(
      public nombre: string,
      public nombreReal?: string,
    ) {
      console.log("Constructor Avenger llamado");
    }
    private getNombre(): string {
      return `${this.nombre} - ${this.nombreReal}`;
    }
  }

  class Xmen extends Avenger {
    constructor(nombre: string, nombreReal?: string) {
      super(nombre, nombreReal);
      console.log("Constructor Xmen llamado");
    }

    get fullName() {
      return `${this.nombre} - ${this.nombreReal}`;
    }
    set fullName(nombre: string) {
      if (nombre.length < 3) {
        throw new Error("El nombre debe ser mayor a 3 caracteres");
      }
      this.nombre = nombre;
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan");
  //   console.log(wolverine.fullName);
  //   wolverine.fullName = "New Name";
  //   console.log(wolverine.fullName);
  // console.log(wolverine.getNombre()); // No es posible acceder a un método privado de la clase padre
})();
