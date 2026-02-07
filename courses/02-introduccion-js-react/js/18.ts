(() => {
  //Condicionales
  const disponible: number = 4000;
  const retirar: number = 300;

  const auth: boolean = true;

  if (auth) {
    //se cumple la condicion
    console.log("Acceso");
  } else {
    //?no se cumple
    console.log("Sin permino");
  }
  if (disponible > retirar) {
    //se cumple la condicion
    console.log("Si Puede retirar");
  } else {
    //?no se cumple
    console.log("No  Puede retirar");
  }
})();
