module.exports = () => {
  let count = 0;
  for (let n = 1; n <= (2 ** 30); n += 1) {
    const x = n ^ (2 * n) ^ (3 * n);
    if (x === 0) count += 1;
  }
  return console.log(`Problem 301 solution is: ${count}`);
};