module.exports = () => {
  const triangles = new Array(1500001).fill(0);
  let result = 0;
  const limit = Math.trunc(Math.sqrt(1500000 / 2));

  for (let m = 2; m < limit; m += 1) {
    for (let n = 1; n < m; n += 1) {
      if (((n + m) % 2) === 1 && gcd(n, m) === 1) {
        const [a, b, c] = [(m ** 2) + (n ** 2), (m ** 2) - (n ** 2), 2 * m * n];
        let p = a + b + c;
        while (p < 1500001) {
          triangles[p] += 1;
          if (triangles[p] === 1) result += 1;
          if (triangles[p] === 2) result -= 1;
          p += a + b + c;
        }
      }
    }
  }

  return console.log(`Problem 75 solution is: ${result}`);
};

function gcd(a, b) {
  let x;
  let y;
  [x, y] = a > b ? [a, b] : [b, a];
  while (x % y !== 0)[x, y] = [y, x % y];
  return y;
}
