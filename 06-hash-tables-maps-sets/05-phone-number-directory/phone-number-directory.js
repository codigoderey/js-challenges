function phoneNumberDirectory(strArr) {
	const directory = new Map();

	for (let i = 0; i < strArr.length; i++) {
		let mapValues = strArr[i];
		directory.set(mapValues.split(":")[0], mapValues.split(":")[1]);
	}
	return directory;
}

module.exports = phoneNumberDirectory;
