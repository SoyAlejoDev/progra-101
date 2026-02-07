(() => {
  type Avenger = {
    nombre: string;
    clave: string;
    poder: string;
  };
  const avengers: Avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Droga",
  };

  //   const { clave, poder } = avengers;

  //   console.log(clave.toLowerCase(), poder.toUpperCase());

  const printAvenger = ({ nombre, ...resto }: Avenger) => {
    console.log(nombre, resto);
  };
  //   printAvenger(avengers);

  const avengersArray: string[] = ["Thor", "Steve", "Tony"];

  const [thor, steve, tony] = avengersArray;

  console.log({ thor, steve, tony });
})();
