module.exports = () => {
	let [fn1, fn2] = [1, 1];
	for (let n = 3; ; n += 1) {
		[fn1, fn2] = [(fn1 + fn2) % 1e9, fn1];
		if (isPandigital(fn1.toString())) {
			const tmp = (n * 0.20898764024997873) - 0.3494850021680094;
			if (isPandigital((Math.trunc(10 ** (tmp - Math.trunc(tmp) + 8))).toString())) return console.log(`Problem 104 solution is: ${n}`);
		}
	}
};

function isPandigital(n) {
	const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
	for (const d of digits) {
		if (!n.includes(d)) return false;
	}
	return n.length === 9;
}
