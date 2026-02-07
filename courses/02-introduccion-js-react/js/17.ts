(() => {
  // Array Mthods
  const tecnologias: string[] = ["html", "css", "javascript", "nest", "node"];
  const numeros: number[] = [10, 20, 30];
  //filter
  const nuevoArray: string[] = tecnologias.filter((tech) => tech === "html");
  const resultado: number[] = numeros.filter((numero) => numero !== 10);
  console.log(nuevoArray);
  console.log(resultado);

  //include
  const tiene: boolean = tecnologias.includes("nest");
  console.log(tiene);

  //some - devuelve si al menos uno cumple la condicion
  const resul = numeros.some((numero) => numero < 10);
  console.log(resul);

  //find devuelve el primer elemento que cumple una condicion
  const result = numeros.find((numero) => numero > 15);
  console.log(result);

  //every - retorna true o false si todos cumplen la condicion
  const resultado2 = numeros.every((numero) => numero > 5);
  console.log(resultado2);

  //reduce- retorna el acumulado del total
  const resultado3 = numeros.reduce((total, numero) => {
    return total + numero;
  }, 0);
  console.log(resultado3);
})();
