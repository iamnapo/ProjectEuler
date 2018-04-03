module.exports = () => {
	let bouncy = 0;
	for (let n = 1; ; n += 1) {
		if (!isLeft(n) && !isRight(n)) {
			bouncy += 1;
		}
		if (bouncy / n >= 0.99) {
			return console.log(`Problem 112 solution is: ${n}`);
		}
	}
};

function isLeft(n) {
	const tmp = n.toString().split('');
	for (const [index, el] of tmp.entries()) {
		if (tmp[index + 1] && parseInt(el, 10) > parseInt(tmp[index + 1], 10)) {
			return false;
		}
	}
	return true;
}

function isRight(n) {
	const tmp = n.toString().split('');
	const res = [];
	tmp.reverse();
	for (const i of tmp) {
res.push(parseInt(i, 10));
	}
	return isLeft(res.join(''));
}
