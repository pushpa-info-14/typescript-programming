function minPartitions(n: string): number {
	const set = new Set<string>(n);
	for (const c of "987654321") {
		if (set.has(c)) {
			return parseInt(c);
		}
	}
	return 0;
}

function minPartitions2(n: string): number {
	return Math.max(...n.split("").map(Number));
}

console.log(minPartitions("32"));
console.log(minPartitions("82734"));
console.log(minPartitions("27346209830709182346"));
console.log("----------");
console.log(minPartitions2("32"));
console.log(minPartitions2("82734"));
console.log(minPartitions2("27346209830709182346"));
