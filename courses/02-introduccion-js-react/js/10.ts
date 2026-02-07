(() => {
  //arays o arreglos
  const tecnologias: string[] = ["html", "css", "javascript", "nest", "node"];

  //   const tecnologias2 = tecnologias.filter(function (tech) {
  //     console.log(tech);
  //     if (tech !== "html") {
  //       return tech;
  //     }
  //   });

  const tecnologias2 = tecnologias.map(function (tech) {
    console.log(tech);
    return tech;
  });
  console.log(tecnologias2);
  tecnologias.push("Angular");

  //eliminar el primer elemento de un array -shift()
  tecnologias.shift();

  const nuevoArray: string[] = [...tecnologias, "vue"];
  console.log(tecnologias);
  console.log(nuevoArray);
})();
