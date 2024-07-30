function findMissingLetter(strArr) {
    let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let startIndex = alphabet.indexOf(strArr[0])

    for(let i = 0; i < strArr.length; i++){
        console.log(alphabet[startIndex + i])
        if(strArr[i] !== alphabet[startIndex + i]){
            return alphabet[startIndex + i]
        }
    }

    return "";
}

module.exports = findMissingLetter;
