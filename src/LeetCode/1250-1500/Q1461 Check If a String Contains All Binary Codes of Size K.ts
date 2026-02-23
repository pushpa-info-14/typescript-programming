function hasAllCodes(s: string, k: number): boolean {
	let seen = new Set<number>();
	for (let i = 0; i <= s.length - k; i++) {
		seen.add(parseInt(s.substring(i, i + k), 2));
	}

	return seen.size == 2 ** k;
}

console.log(hasAllCodes("00110110", 2));
console.log(hasAllCodes("0110", 1));
console.log(hasAllCodes("0110", 2));
