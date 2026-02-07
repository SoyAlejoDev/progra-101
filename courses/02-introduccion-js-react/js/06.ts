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

  const { nombre } = producto;
  const {
    nombre: nombreCliente,
    direccion: { calle },
  } = cliente;
  console.log(nombre);
  console.log(nombreCliente);
  console.log(calle);
})();
