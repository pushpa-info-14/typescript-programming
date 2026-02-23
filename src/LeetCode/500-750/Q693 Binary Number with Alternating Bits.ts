function hasAlternatingBits(n: number): boolean {
	let prev = -1;
	while (n) {
		const bit = n % 2;
		n >>= 1;
		if (prev == bit) {
			return false;
		}
		prev = bit;
	}
	return true;
}

console.log(hasAlternatingBits(5));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
