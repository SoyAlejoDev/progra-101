let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  isActive: true,
  hobbies: ["fútbol", "lectura", "viajar"],
  toString() {
    let objectString =
      this.nombre +
      ", " +
      this.edad +
      " años, de " +
      this.ciudad +
      " " +
      this.hobbies;
    console.log(objectString);
  },
};
/* console.log(persona.nombre);
persona.toString();
 */

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
  color: "Rojo",
  isElectric: false,
  features: ["aire acondicionado", "bluetooth", "cámara de reversa"],
  toString() {
    let objectString =
      this.marca +
      " " +
      this.modelo +
      ", año " +
      this.anio +
      ", color " +
      this.color +
      " " +
      this.features;
    console.log(objectString);
  },
};

let smartTv = {
  marca: "Samsung",
  modelo: "QLED 8K",
  tamano: "65 pulgadas",
  resolucion: "8K",
  isSmart: true,
  features: ["control por voz", "aplicaciones integradas", "HDR"],
  toString() {
    let objectString =
      this.marca +
      " " +
      this.modelo +
      ", tamaño " +
      this.tamano +
      ", resolución " +
      this.resolucion +
      " " +
      this.features;
    console.log(objectString);
  },
};

let youtubeVideo = {
  titulo: "Aprendiendo TypeScript",
  duracion: "15:30",
  canal: "Programación Fácil",
  isLive: false,
  tags: ["TypeScript", "programación", "tutorial"],
  toString() {
    let objectString =
      this.titulo +
      ", duración " +
      this.duracion +
      ", canal " +
      this.canal +
      " " +
      this.tags;
    console.log(objectString);
  },
};

console.log(carro.toString());
console.log(smartTv.toString());
console.log(youtubeVideo.toString());
