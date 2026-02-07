(() => {
  const sumar = (a: number, b: number): number => a + b;
  const greet = (name: string): string => `Hello ${name}`;
  const saveTheWorld = (): string => "The world is saved!";
  console.log({
    sumar: sumar(1, 2),
    greet: greet("Clark"),
    saveTheWorld: saveTheWorld(),
  });
})();
