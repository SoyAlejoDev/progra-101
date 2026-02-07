(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = "Pepe";
  console.log(myCustomVariable);

  myCustomVariable = 20;
  console.log(myCustomVariable);
})();
