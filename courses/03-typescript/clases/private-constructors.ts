(() => {
  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis el único");
      }
      return Apocalipsis.instance;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();

  console.log(apocalipsis1 === apocalipsis2);
  console.log(apocalipsis1.name);
})();
