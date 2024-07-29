function wordFrequencyCounter(str) {
	// convert str into an array of words
	const words = str.toLowerCase().split(/\W+/);

	// create a map to store the frequency of each word
	const frequencyCounter = new Map();

	// iterate over the words array
	for (let word of words) {
		// if the word is already in the map, increment its value
		if (frequencyCounter.has(word)) {
			frequencyCounter.set(word, frequencyCounter.get(word) + 1);
		} else {
			// if the word is not in the map, add it with a value of 1
			frequencyCounter.set(word, 1);
		}
	}

	console.log(frequencyCounter);

	return frequencyCounter;
}

module.exports = wordFrequencyCounter;
