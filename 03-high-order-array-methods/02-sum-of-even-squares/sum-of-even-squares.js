// Solution #1
// function sumOfEvenSquares(arr) {

//     // initialize sum
//     let total = 0;

//     // filter the array to get even numbers
//     let squareNumbers = arr.filter(n => n % 2 === 0)

//     // numbers
//     for(var i = 0; i < squareNumbers.length; i++){
//         total = total + squareNumbers[i] ** 2
//     }

//     return total

// }

// Solution #2
function sumOfEvenSquares(arr){

    let squareNumbers = arr.filter(n => n % 2 == 0 )

    let total = squareNumbers.reduce((acc, curr) => acc + curr ** 2 , 0)

    return total
}

module.exports = sumOfEvenSquares;
