(() => {
  //Objetos - destructuring de dos o mas objetos
  type Producto = {
    nombre: string;
    precio: number;
    disponible: boolean;
  };
  type Cliente = {
    nombre: string;
    premium: boolean;
    direccion: Direccion;
  };
  type Direccion = {
    calle: string;
  };
  const producto: Producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false,
  };

  const cliente: Cliente = {
    nombre: "Juan",
    premium: true,
    direccion: {
      calle: "Cuba",
    },
  };

  const carrito = {
    cantidad: 1,
    ...producto, //spread operator
  };

  //   console.log(carrito);

  const nuevoObjeto = {
    // producto: { ...producto },
    // cliente: { ...cliente },
    producto,
    cliente,
  };
  console.log(nuevoObjeto);

  const nuevoObjeto2 = Object.assign(producto, cliente);
  console.log(nuevoObjeto2);
})();
