(() => {
  type Avenger = {
    nombre: string;
    weapon: string;
  };

  const ironman: Avenger = {
    nombre: "Tony",
    weapon: "Armour",
  };

  const captainAmerica: Avenger = {
    nombre: "Steve",
    weapon: "Shield",
  };
  const thor: Avenger = {
    nombre: "Thor",
    weapon: "Mjolnir",
  };
  const avengers: Avenger[] = [ironman, captainAmerica, thor];

  for (const avenger of avengers) {
    console.log(avenger.nombre, avenger.weapon);
  }
})();
