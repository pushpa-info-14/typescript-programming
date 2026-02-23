function countBinarySubstrings(s: string): number {
	let groups = [];
	let prev = s[0];
	let count = 1;
	for (let i = 1; i < s.length; i++) {
		if (s[i] == prev) {
			count += 1;
		} else {
			groups.push(count);
			count = 1;
			prev = s[i];
		}
	}
	groups.push(count);

	let res = 0;
	for (let i = 0; i < groups.length - 1; i++) {
		res += Math.min(groups[i]!, groups[i + 1]!);
	}
	return res;
}

console.log(countBinarySubstrings("00110011"));
console.log(countBinarySubstrings("10101"));
