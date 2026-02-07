(() => {
  abstract class Mutante {
    constructor(
      public nombre: string,
      public realName: string,
    ) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return "Mundo salvado!";
    }
  }
  class Villian extends Mutante {
    conquistarMundo() {
      return "Mundo conquistado!";
    }
  }

  const wolverine: Mutante = new Xmen("Wolverine", "Logan");
  const magneto: Mutante = new Villian("Magneto", "Erik Lehnsherr");
  //   console.log(wolverine.salvarMundo());
  //   console.log(magneto.conquistarMundo());

  const printName = (mutant: Mutante) => {
    console.log(mutant.nombre);
  };

  //   printName(wolverine);
  //   printName(magneto);
})();
