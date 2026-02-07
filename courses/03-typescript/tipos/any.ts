(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Doctron Strange";
  //   console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0));

  avenger = 150.4545;
  //   console.log(avenger.toFixed(2));
  console.log(<number>avenger.toFixed(2));
})();
