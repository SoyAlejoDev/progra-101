(() => {
  const hero: [string, number, boolean] = ["Dr Strange", 100, true];

  hero[1] = 60;
  hero[0] = "ironman";
  hero[2] = false;
  console.log(hero);
})();
