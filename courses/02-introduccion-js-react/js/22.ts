(() => {
  //Optional Chaining ' ? '
  const alumno = {
    nombre: "juan",
    clase: "progra",
    aprobado: true,
    examenes: {
      examen1: 90,
    },
  };

  console.log(alumno.examenes?.examen1);
  console.log("despues de alumnno");

  // Nullish coalescing operator(??)

  const pagina = alumno.examenes?.examen1 ?? 1;
  console.log(pagina);
})();
