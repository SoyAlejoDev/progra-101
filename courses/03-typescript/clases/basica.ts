(() => {
  class Avenger {
    // private nombre: string;
    // private equipo: string;
    // public nombreReal: string;

    static avgAge: number = 35;
    static getAvgAge() {
      return this.avgAge;
    }
    constructor(
      private nombre: string,
      private equipo: string,
      public nombreReal?: string,
    ) {}

    public bio(): string {
      return `${this.nombre} (${this.nombreReal}) - ${this.equipo}`;
    }
  }

  const antman = new Avenger("Antman", "Capitan", "Scott Lang");
  console.log(antman.bio());
  console.log(Avenger.getAvgAge());
})();
