function anagramGrouping(strArr) {
	// Create a Map to store anagram groups
	// Key: Sorted word (e.g., "aet" for "eat", "tea", "ate")
	// Value: Array of words belonging to the anagram group
	const group = new Map();

	// Iterate over each word in the input array
	for (let i = 0; i < strArr.length; i++) {
		// Normalize the word to lowercase and sort its characters
		// This creates a unique key for each anagram group
		let sortedWord = strArr[i].toLowerCase().split("").sort().join("");

		// If the anagram group doesn't exist yet, create an empty array for it
		if (!group.has(sortedWord)) {
			group.set(sortedWord, []);
		}

		// Add the original word to its corresponding anagram group
		group.get(sortedWord).push(strArr[i]);
	}

	// Extract the values (anagram groups) from the Map and return them as an array
	return Array.from(group.values());
}

module.exports = anagramGrouping;
