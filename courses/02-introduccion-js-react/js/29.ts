//? Manipular elementos HTML con js
(() => {
  const heading = document.querySelector(".heading");
  const enlaces = document.querySelectorAll(".navegacion a");

  //   console.log(heading?.textContent);
  //   heading?.textContent = " Un nuevo heading";
  //   heading?.id = "Un nuevo id";

  //   heading?.removeAttribute("id");
  const inputNombre = document.querySelector("#nombre");
  inputNombre?.value = "Un nuevo valor ..";

  //   console.log(inputNombre?.classList);
  console.log(enlaces);

  //   enlaces[0]?.textContent = "Nuevo enlace";
  //   enlaces.forEach((enlace) => (enlace.textContent = "New"));
})();
