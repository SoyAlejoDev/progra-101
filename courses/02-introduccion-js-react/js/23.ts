(() => {
  //Evaluacion de corto circuito
  const auth = true;

  if (auth) {
    console.log("truthy");
  }
  {
    console.log("falsy");
  }
  auth && console.log("user autenticado");
  const user = {};

  user && console.log("user auntenticado");
})();
