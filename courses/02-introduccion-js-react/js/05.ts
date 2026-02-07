(() => {
  //Objetos - Manipulacion
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
  //rescribir un valor
  producto.disponible = true;

  console.log(producto);
})();
