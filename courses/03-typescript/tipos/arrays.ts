(() => {
  const numbers: number[] = [1, 3, 4, 6];

  numbers.push(2);
  console.log(numbers);

  const villians: string[] = ["Omega Rojo ", "Dormamu "];
  villians.forEach((v) => console.log(v.toUpperCase()));
})();
