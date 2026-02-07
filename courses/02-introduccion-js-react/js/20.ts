(() => {
  //Condicionales
  const saldo: number = 1000;
  const pagar: number = 1200;
  const tarjeta: boolean = true;

  if (saldo > pagar || tarjeta) {
    console.log("puedes pagar");
  } else {
    console.log("no pudedes pagar");
  }
})();
