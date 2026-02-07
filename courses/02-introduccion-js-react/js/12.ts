(() => {
  //Recorriendo arreglos
  const tecnologias: string[] = ["html", "css", "javascript", "nest", "node"];

  //for
  for (let i = 0; i <= tecnologias.length - 1; i++) {
    console.log(tecnologias[i]);
  }

  //foreach
  tecnologias.forEach(function (tech) {
    console.log(tech);
  });

  //map
  const arrayMap = tecnologias.map(function (tech) {
    return tech;
  });

  //for..of
  for (let tech of tecnologias) {
    console.log(tech);
  }
  console.log(arrayMap);
})();
