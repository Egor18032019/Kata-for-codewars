// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
    let result = []
    let arr = str.split("")
    if (arr.length % 2 !== 0) {
        arr.push("_")
    }
    for (let i = 0; i <= arr.length-1; i++) {
        if ((i + 1) % 2 !== 0) {
            let e = arr[i] + arr[i + 1]
            result.push(e)
        }
    }
    console.log(result)
    return result
}

let foo = "abcdef"
solution(foo)
