(() => {
  //Destructuring de  arreglos
  const tecnologias: string[] = ["html", "css", "javascript", "nest", "node"];

  const nest = tecnologias[3];
  console.log(nest);

  const [html, css, javascript, , node] = tecnologias;
  console.log(html, css, javascript, node);
})();
