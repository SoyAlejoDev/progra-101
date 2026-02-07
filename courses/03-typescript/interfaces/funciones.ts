(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let sumar: addTwoNumbers;

  sumar = () => {
    return 10;
  };
})();
