// solution #1
// function displayLikes(arr) {
// 	let arrLength = arr.length;
// 	let response;

// 	if (arrLength === 0) {
// 		response = "no one likes this";
// 		return response
// 	}

// 	if (arrLength === 1) {
// 		response = `${arr[0]} likes this`;
// 		return response;
// 	}

// 	if (arrLength === 2) {
// 		response = `${arr[0]} and ${arr[1]} like this`;
// 		return response;
// 	}

// 	if (arrLength === 3) {
// 		response = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
// 		return response;
// 	}

// 	if (arrLength > 3) {
// 		response = `${arr[0]}, ${arr[1]} and ${arrLength - 2} others like this`;
// 		return response
// 	}
// }

// solution #2
function displayLikes(arr){
	switch(arr.length){
		case 0:
			return "no one likes this";
		case 1:
			return `${arr[0]} likes this`;
		case 2:
			return `${arr[0]} and ${arr[1]} like this`;
		case 3:
			return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
		default:
			return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
	}
}

displayLikes(["Jacob", "Alex"]);

module.exports = displayLikes;
