//? Eventos del DOM Inputs
(() => {
  const formulario = document.querySelector("#formulario");
  formulario?.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const password = document.querySelector("#password").value;
    // console.log(nombre);
    // console.log(password);
    // console.log("escribiendo formulario");

    //prevenir Alertas
    const alertaPrevia = document.querySelector(".alerta");
    alertaPrevia?.remove();
    const alerta = document.createElement("DIV");
    alerta.textContent = "contenido de alerta";
    alerta.classList.add("alerta", "text-white", "uppercase", "text-center");
    if (nombre === "" || password === "") {
      alerta.textContent = " obligatorios";
      alerta.classList.add("bg-red-500");
      //   console.log("todos los campos ");
    } else {
      //   console.log("todo OK");
      alerta.textContent = "Todo OK";
      alerta.classList.add("bg-green-500");
    }

    formulario.appendChild(alerta);
    // setTimeout(() => {
    //   alerta.remove();
    // }, 3000);
    // console.log(alerta);
  });
})();
