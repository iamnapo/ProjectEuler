module.exports = () => {
  const big = [1];
  let c = 0;
  for (let i = 2; i < 101; i += 1) {
    for (let j = 0; j < big.length; j += 1) {
      big[j] = (i * big[j]) + c;
      c = 0;
      while (big[j] > 9) {
        c += 1;
        big[j] -= 10;
      }
    }
    while (c !== 0) {
      const j = big.push(c);
      c = 0;
      while (big[j - 1] > 9) {
        c += 1;
        big[j - 1] -= 10;
      }
    }
  }
  return console.log(`Problem 20 solution is: ${big.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10))}`);
};