(() => {
  //objetos

  type Producto = {
    nombre: string;
    precio: number;
    disponible: boolean;
  };

  const producto: Producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false,
  };

  //   console.log(producto);
  //   console.log(typeof producto);
  //   console.table(producto);

  //   console.log(producto.nombre);

  //destructuring
  const { nombre, precio, disponible } = producto;
  console.log(nombre);
  console.log(precio);
  console.log(disponible);

  //object literal enhacement

  const autenticado = true;
  const usuario = "Juan";

  const nuevoOjeto = {
    autenticado,
    usuario,
  };
  console.log(nuevoOjeto);
})();
