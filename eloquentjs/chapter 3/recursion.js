function isEven(number) {
	if (!Number.isInteger(number)) return "not an integer";
	if (number === 0) return true;
	if (number === 1) return false;
	if (number < 0) return isEven(-number);
	return isEven(number - 2);
}