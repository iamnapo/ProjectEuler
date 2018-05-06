module.exports = () => {
	const max = 1e6;
	let p1 = 5;
	let sum = [0];
	const sieve = new Array(1 + nextPrime(max - 1)).fill(true);
	for (let a = 0; a < sieve.length; a++) {
		sieve[a] = (a % 2 === 0) ? a === 2 : a % 3 !== 0;
	}
	for (let b = 6; b + b < sieve.length; b += 6) {
		if (sieve[b - 1]) {
			for (let j = b + b - 2; j < sieve.length; j += (b - 1)) {
				sieve[j] = false;
			}
		}
		if (sieve[b + 1]) {
			for (let j = b + b + 2; j < sieve.length; j += (b + 1)) {
				sieve[j] = false;
			}
		}
	}
	while (p1 < max) {
		let p2 = p1 + 2;
		while (!sieve[Math.trunc(p2)]) {
			p2 += 2;
		}
		const head = Math.trunc(Math.pow(10, Math.ceil(Math.log10(p1))));
		const val = (head * (((p2 - p1) * inverseMod2(head, p2)) % p2)) + p1;
		sum = add(sum, val.toString().split('').map(el => parseInt(el, 10)));
		p1 = p2;
	}
	return console.log(`Problem 134 solution is: ${sum.join('')}`);
};

function add(a, b) {
	while (a.length < b.length) {
		a.unshift(0);
	}
	while (a.length > b.length) {
		b.unshift(0);
	}
	let c = 0;
	const sum = [];
	for (let i = a.length - 1; i > -1; i -= 1) {
		let s = a[i] + b[i] + c;
		if (s > 9) {
			s -= 10;
			c = 1;
		} else {
			c = 0;
		}
		sum.unshift(s);
	}
	if (c) {
		sum.unshift(c);
	}
	return sum;
}

function nextPrime(x) {
	for (let d = 2; d * d <= (x + 1); d++) {
		if ((x + 1) % d === 0) {
			return nextPrime(x + 1);
		}
	}
	return x + 1;
}

function inverseMod2(p, q) {
	return ((inverseMod(p, q, 1, 0, 0, 1) % q) + q) % q;
}

function inverseMod(p, q, lastS, lastT, s, t) {
	if (q === 0) {
		return lastS;
	}
	return inverseMod(q, p % q, s, t, lastS - (s * Math.trunc(p / q)), lastT - (t * Math.trunc(p / q)));
}