function calculator(num1, num2, op) {
	let result;

	switch (op) {
		case "+":
			result = num1 + num2;
			break;

		case "-":
			result = num1 - num2;
			break;

		case "/":
			result = num1 / num2;
			break;

		case "*":
			result = num1 * num2;
			break;
	}

	return result;
}

module.exports = calculator;
