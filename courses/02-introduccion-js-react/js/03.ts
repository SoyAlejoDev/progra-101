(() => {
  //03.tipos de datos

  //undefined
  let cliente;
  console.log(typeof cliente);

  //strings o cadenas de texto
  const alumno: string = "Ale";
  console.log(alumno);
  console.log(typeof alumno);

  const producto = "monitor de 49 pulgadas";
  console.log(producto);
  console.log(typeof producto);

  //numbers
  const numero: number = 20;
  const numero2: number = 30.45;
  console.log(numero);
  console.log(numero2);
  console.log(typeof numero);
  console.log(typeof numero2);

  //boolean
  const descuento: boolean = false;
  console.log(descuento);
  console.log(typeof descuento);

  //null
  const detect: null = null;
  console.log(detect);
  //Symbol
  const primerSymbol: Symbol = Symbol(30);
  const segundoSymbol: Symbol = Symbol(30);
  console.log(primerSymbol);
  console.log(segundoSymbol);

  console.log(primerSymbol === segundoSymbol);
})();
