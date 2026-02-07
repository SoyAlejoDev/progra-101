(() => {
  //Ternarios
  const auth = true;
  const saldo: number = 1000;
  const pagar: number = 1200;
  const tarjeta: boolean = true;

  auth ? console.log("auntenticado") : console.log("no auntenticado");

  saldo > pagar || tarjeta
    ? console.log("si puedes pagar")
    : console.log("no puedes pagar");
})();
