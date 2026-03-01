function minPartitions(n: string): number {
	const set = new Set<string>(n);
	for (const c of "987654321") {
		if (set.has(c)) {
			return parseInt(c);
		}
	}
	return 0;
}

console.log(minPartitions("32"));
console.log(minPartitions("82734"));
console.log(minPartitions("27346209830709182346"));
