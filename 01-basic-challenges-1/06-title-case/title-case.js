function titleCase(str) {
	// lowercase the string and convert into an array separated by spaces
	let words = str.toLowerCase().split(" ");

	// loop through array of words
	for (let i = 0; i < words.length; i++) {
		// on each word
		words[i] =
			// select first word and convert uppercase and add the rest of the word using splice method
			words[i][0].toUpperCase() + words[i].slice(1);
	}

	// return array into a string sentence by usinc a space as the word separator
	return words.join(" ");
}

module.exports = titleCase;
