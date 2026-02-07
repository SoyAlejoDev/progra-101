function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};
function CheckValiPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    console.log({ target, propertyKey, descriptor });
  };
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}
  @CheckValiPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon Guardado en BD: ${id}`);
  }
}
