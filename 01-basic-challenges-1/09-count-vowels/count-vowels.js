function countVowels(str) {
	let vowelsArray = [];
	let vowelRegex = /[aeiou]/i;
	str.split("").forEach((v) => {
		if (vowelRegex.test(v)) {
			vowelsArray.push(v);
		}
	});
	return Number(vowelsArray.length);
}

const numVow = countVowels("chamaleon");

module.exports = countVowels;
