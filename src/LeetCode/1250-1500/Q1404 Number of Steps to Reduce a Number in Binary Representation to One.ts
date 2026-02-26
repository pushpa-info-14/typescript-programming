function numSteps(s: string): number {
	let num = BigInt("0b" + s);
	let res = 0;
	while (num > 1) {
		res += 1;
		if (num % 2n == 1n) {
			num += 1n;
		} else {
			num /= 2n;
		}
	}
	return res;
}

function numSteps2(s: string): number {
	let res = 0;
	let carry = 0;
	for (let i = s.length - 1; i > 0; i--) {
		let bit = parseInt(s[i]!) + carry;
		if (bit % 2 == 1) {
			res += 2;
			carry = 1;
		} else {
			res += 1;
		}
	}
	return res + carry;
}

console.log(numSteps("1101"));
console.log(numSteps("10"));
console.log(numSteps("1"));
console.log(
	numSteps("1111011110000011100000110001011011110010111001010111110001"),
);
console.log("----------------------------");
console.log(numSteps2("1101"));
console.log(numSteps2("10"));
console.log(numSteps2("1"));
console.log(
	numSteps2("1111011110000011100000110001011011110010111001010111110001"),
);
