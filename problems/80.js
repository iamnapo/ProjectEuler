/* eslint-disable */

module.exports = () => {
  let sum = 0;
  const carres = [4, 9, 16, 25, 36, 49, 64, 81];
  for (n = 2; n < 100; n += 1) {
    if (!(carres.includes(n))) lsqrt(n).forEach(el => sum += el);
  }
  return console.log(`Problem 80 solution is: ${sum}`);
};

function carre(l) {
  const rep = new Array(110).fill(0);
  for (let i = 0; i < 100; i += 1) {
    for (let j = 0; j < Math.min(100, 110-i); j += 1) rep[i+j] += l[i]*l[j];
  }
  for (d = 109; d > 0; d -= 1) {
    if (rep[d] >= 10) {
      let k = Math.trunc(rep[d] / 10);
      rep[d] %= 10;
      rep[d-1] += k;
    }
  }
  return rep;
}

function lsqrt(n) {
  const l = new Array(100).fill(0);
  let d = 0;
  while (d < 100) {
    let carr = carre(l);
    if (carr[0] < n) {
      if (l[d] !== 9) {
        l[d] += 1;
      } else {
        d += 1;
      }
    } else {
      l[d] -= 1;
      d += 1;
    }
  }
  return l;
}
