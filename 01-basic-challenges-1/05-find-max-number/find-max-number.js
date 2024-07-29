// solution #1
function findMaxNumber(arrOfNum) {
	let maxNumber = 0;

	arrOfNum.forEach((num) => {
		if (num > maxNumber) {
			maxNumber = num;
		}
	});

	return maxNumber;
}

// solution #2
// function findMaxNumber(arr) {
// 	return Math.max(...arr);
// }

// solution #3
// function findMaxNumber(arr) {
// 	let max = arr[0];

// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] > max) {
// 			max = arr[i];
// 		}
// 	}

// 	return max;
// }

module.exports = findMaxNumber;
