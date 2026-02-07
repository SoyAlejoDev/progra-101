(() => {
  class Avenger {
    name;
    power;
    constructor(name = "No name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    flyingSpeed;
    constructor(name, power, flyingSpeed) {
      super(name, power);
      this.flyingSpeed = flyingSpeed;
    }
  }

  const ironman = new Avenger("Ironman", 55);
  console.log(ironman);

  const falcon = new FlyingAvenger("Falcon", 70, 500);
  console.log(falcon);

  const hulk = new Avenger("hilk", 9000);
  console.log(hulk);
})();
