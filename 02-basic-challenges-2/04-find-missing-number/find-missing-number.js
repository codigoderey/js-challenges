function findMissingNumber(arr) {
    let total = 0
    let missingNumber;
    let n = arr.length + 1;

    if(!arr || arr.length === 0){
        return undefined
    }

    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }

    missingNumber = n * (n + 1) / 2

    return missingNumber - total
}

module.exports = findMissingNumber;
