function arrayIntersection(arr1, arr2) {
	let arrInter = [];

	arr1.forEach((a) => {
		arr2.forEach((b) => {
			if (a === b) {
				arrInter.push(b);
			}
		});
	});

	return arrInter;
}

arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]);

module.exports = arrayIntersection;
