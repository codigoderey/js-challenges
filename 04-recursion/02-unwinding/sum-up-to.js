function sumUpTo(num) {
	console.log(num);
	// base
	if (num === 24) {
		return num;
	}

	// return function calling itself
	return sumUpTo(num + num);
}

module.exports = sumUpTo;
