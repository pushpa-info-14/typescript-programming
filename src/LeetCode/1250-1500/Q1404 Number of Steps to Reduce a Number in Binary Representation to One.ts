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

console.log(numSteps("1101"));
console.log(numSteps("10"));
console.log(numSteps("1"));
console.log(
	numSteps("1111011110000011100000110001011011110010111001010111110001"),
);
