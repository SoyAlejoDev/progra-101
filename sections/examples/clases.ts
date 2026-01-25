class Carro {
  public readonly marca: string;
  public puertas: number;
  public fullTank: number;
  public isRunning: boolean;
  public tipo: string;
  private readonly createdAt: number;
  constructor(maraca: string, tipo: string) {
    ((this.marca = maraca),
      (this.fullTank = 0),
      (this.puertas = 0),
      (this.isRunning = false),
      (this.tipo = tipo),
      (this.createdAt = 123456789));
  }
  enceder() {
    if (this.isRunning) {
      console.log("el carro ya estaba encendido o se rompio");
      return;
    }

    if (this.fullTank <= 0) {
      console.log("el carro no tiene gasolina");
      return;
    }
    this.isRunning = true;
    console.log("el carro esta encendido");
  }
  fillTank(gasolina: number) {
    if (gasolina <= 0) {
      console.log("la cantidad de gasolina debe ser mayor a 0");
      return;
    }
    if (this.fullTank === 100) {
      console.log("el tanque ya esta lleno");
      return;
    }
    if (this.fullTank + gasolina > 100) {
      console.log("la cantidad de gasolina excede la capacidad del tanque");
      return;
    }
    this.fullTank += gasolina;
    console.log(`el tanque ahora tiene ${this.fullTank} litros de gasolina`);
  }
}

let miCarro = new Carro("Toyota", "Sedan");
// miCarro.marca = "Honda";
// console.log(miCarro.createdAt);
console.log(miCarro);
miCarro.fillTank(50);

miCarro.enceder();
console.log(miCarro);
// miCarro.enceder();
