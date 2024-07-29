function isPalindrome(str) {
	let reversedStr = [];

	let strToArr = str.split("").reverse();

	for (let i = 0; i < str.length; i++) {
		reversedStr.push(strToArr[i]);
	}

	if (
		str.toLowerCase().replaceAll(/\W/gi, "") ===
		reversedStr.join("").toLowerCase().trim().replaceAll(/\W/gi, "")
	) {
		return true;
	} else {
		return false;
	}
}

isPalindrome("A man, a plan, a canal, Panama");

module.exports = isPalindrome;
