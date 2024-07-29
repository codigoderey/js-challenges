function displayLikes(arr) {
	let arrLength = arr.length;

	if (arrLength === 0) {
		console.log("no one likes this");
		return "no one likes this";
	}

	if (arrLength === 3) {
		console.log(`${arr[0]}, ${arr[1]} and ${arr[2]} like this`);
		return;
	}

	if (arrLength > 3) {
		console.log(`${arr[0]}, ${arr[1]} and ${arrLength - 2} others like this`);
		return;
	}
}

displayLikes(["Joseph", "Maria", "Carlos", "Joseph", "Maria", "Carlos"]);

module.exports = displayLikes;
