function countDown(num) {
	// base
	if (num === 0) {
		return num;
	}
	// return function
	console.log(num);
	return countDown(num - 1);
}

module.exports = countDown;
