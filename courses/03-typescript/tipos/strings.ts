(() => {
  const batman = "Batman";
  const linternaVerde = "Linterna Verde";
  const volcanNegro = `heroe Volcan Negro`;

  console.log(`I am ${batman}`);

  console.log(batman.toUpperCase());

  console.log(batman[10]?.toUpperCase() || " no esta presente");
})();
