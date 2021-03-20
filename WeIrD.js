// WeIrD StRiNg CaSe
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:

// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
function toWeirdCase(string) {
    let stringResult = ""
    let arr = string.split(" ")
    for (let i = 0; i < arr.length; i++) {
        let weird = arr[i].split("")
        if (i > 0) {
            stringResult = stringResult + " "
        }
        for (let j = 0; j < weird.length; j++) {
            let e = weird[j]
            if ((j + 1) % 2 !== 0) {
                stringResult = stringResult + e.toUpperCase()
            } else {
                stringResult = stringResult + e
            }
        }
    }
    console.log(stringResult, "stringResult")
    return stringResult
}

// Вот это решение понравилось
function toWeirdCase(string){
    return string.split(' ').map(function(word){
      return word.split('').map(function(letter, index){
        return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
      }).join('');
    }).join(' ');
  }

toWeirdCase("This is a test")
