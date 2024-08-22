// function areAllCharactersUnique(str) {
//     // convert the string into an interable array
//     const charSet = new Set()

//     // loop through the string
//     for(let i = 0; i < str.length; i++){
//         // current character
//         const char = str[i]
//         if(charSet.has(char)){
//             return false
//         }
//         charSet.add(char)
//     }

//     return true

// }

function areAllCharactersUnique(str) {
    // convert the string into an interable array
    const charSet = []

    // loop through the string
    for(let i = 0; i < str.length; i++){
        // current character
        const char = str[i]
        if(charSet.includes(char)){
            return false
        }
        charSet.push(char)
    }

    return true

}

module.exports = areAllCharactersUnique;
