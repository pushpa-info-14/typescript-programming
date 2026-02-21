function countPrimeSetBits(left: number, right: number): number {
	let primes = [2, 3, 5, 7, 11, 13, 17, 19];
	let res = 0;
	for (let i = left; i <= right; i++) {
		let num = i;
		let bits = 0;
		while (num > 0) {
			bits += 1;
			num = num & (num - 1);
		}
		if (primes.includes(bits)) {
			res += 1;
		}
	}
	return res;
}

console.log(countPrimeSetBits(6, 10));
console.log(countPrimeSetBits(10, 15));
