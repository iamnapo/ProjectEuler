module.exports = () => {
	let potentialNumbers = [];
	for (let b = 2; b < 100; b += 1) {
		for (let e = 2; e < 10; e += 1) {
			potentialNumbers.push([b ** e, b]);
		}
	}
	potentialNumbers = potentialNumbers.sort((a, b) => a[0] - b[0]);
	let n = 1;
	for (const [a, b] of potentialNumbers) {
		if (digitSum(a) === b) {
			if (n === 30) {
				return console.log(`Problem 119 solution is: ${a}`);
			}
			n += 1;
		}
	}
};

function digitSum(number) {
	const tmp = number.toString().split('').map(a => parseInt(a, 10));
	return tmp.reduce((a, b) => a + b);
}
