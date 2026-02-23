function makeLargestSpecial(s: string): string {
	let res: string[] = [];
	let l = 0;
	let count = 0;
	for (let r = 0; r < s.length; r++) {
		if (s[r] == "1") {
			count += 1;
		} else {
			count -= 1;
		}

		if (count == 0) {
			// We found a special substring s[l:r+1]
			// The middle part is s[l+1:r]
			// Recursively solve for the middle part
			let optimizedMiddle = makeLargestSpecial(s.substring(l + 1, r));
			res.push("1" + optimizedMiddle + "0");
			l = r + 1;
		}
	}
	res.sort((a, b) => {
		if (a > b) return -1;
		if (a < b) return 1;
		return 0;
	});
	return res.join("");
}

console.log(makeLargestSpecial("11011000"));
console.log(makeLargestSpecial("10"));
