// solution #1
function countOccurrences(str, char) {
	let sArr = Array.from(str);
	let charInstances = [];
	sArr.forEach((c) => {
		if (c === char) {
			charInstances.push(c);
		}
	});
	return charInstances.length;
}

// solution #2
// function countOccurrences(str, char) {
// 	let count = 0;

// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] === char) {
// 			count++;
// 		}
// 	}

// 	return count;
// }

// solution #3
// const countOccurrences = (str, char) => str.split(char).length - 1;

module.exports = countOccurrences;
