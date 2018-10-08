function countBs(string) {
	if(typeof(string) !== "string") return "not a string";
	let countBs = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === "B") countBs++;
	}
	return countBs;
}

function countChar(string, charToCompare) {
	if(typeof(string) !== "string") return "not a string";
	if((typeof(charToCompare) !== "string") || charToCompare.length !== 1) return "charToCompare not a character";
	let countChar = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] === charToCompare) countChar++;
	}
	return countChar;
}

function countBs(string) {
	return countChar(string, "B");
}