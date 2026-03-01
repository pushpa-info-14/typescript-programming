function concatenatedBinary(n: number): number {
	const mod = 1000000007n;
	let res = 0n;
	let bitLength = 0n;

	for (let i = 1n; i <= BigInt(n); i++) {
		if ((i & (i - 1n)) === 0n) {
			bitLength++;
		}
		res = ((res << bitLength) | i) % mod;
	}

	return Number(res);
}

console.log(concatenatedBinary(1));
console.log(concatenatedBinary(3));
console.log(concatenatedBinary(12));
