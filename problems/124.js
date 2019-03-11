class Radical {
  constructor(rad, number) {
    this.rad = rad;
    this.number = number;
  }
}

module.exports = () => {
  const target = 10000;
  const limit = 100000 + 1;

  const radicals = new Array(limit);
  for (let i = 0; i < radicals.length; i += 1) {
    radicals[i] = new Radical(1, i);
  }
  for (let i = 2; i < limit; i += 1) {
    if (radicals[i].rad === 1) {
      radicals[i].rad = i;
      for (let j = i + i; j < limit; j += i) {
        radicals[j].rad *= i;
      }
    }
  }
  radicals.sort((a, b) => {
    if (a.rad > b.rad) {
      return 1;
    }
    if (a.rad < b.rad) {
      return -1;
    }
    return a.number > b.number ? 1 : -1;
  });
  return console.log(`Problem 124 solution is: ${radicals[target].number}`);
};
