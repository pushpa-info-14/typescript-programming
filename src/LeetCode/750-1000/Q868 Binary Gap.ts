function binaryGap(n: number): number {
	let res = 0;
	let setBits = 0;
	let count = 0;
	while (n) {
		count += 1;
		if (n % 2) {
			setBits += 1;
			if (setBits > 1) {
				res = Math.max(res, count);
			}
			count = 0;
		}
		n >>= 1;
	}

	return res;
}

console.log(binaryGap(22));
console.log(binaryGap(8));
console.log(binaryGap(5));
