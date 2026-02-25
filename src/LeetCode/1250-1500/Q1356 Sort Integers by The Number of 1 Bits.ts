function sortByBits(arr: number[]): number[] {
	const countBits = (n: number): number => {
		let count = 0;
		while (n) {
			n &= n - 1;
			count++;
		}
		return count;
	};

	return arr.sort((a, b) => {
		const bitDiff = countBits(a) - countBits(b);
		return bitDiff !== 0 ? bitDiff : a - b;
	});
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
