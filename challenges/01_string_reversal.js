// Returns a reversed string
// by converting the string to an array
// reversing the array
// joining the array back into a string
// returning the result 

function reverseLongForm(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

function reverse(str) {
    return str.split('').reverse().join('');
}

// Second solution takes an empty string called reversed
// for each character in the provided string
// take a character and add it to the start of the reversed string 
// return the reversed string

function reverseWithFor(str) {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

// Third solution uses the array reduce helper method

function reverseReduce(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');
}

function reverseReduceOneLine(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

reversed_string = reverse("apple");
console.log(reversed_string);

reversed_string2 = reverseWithFor("google");
console.log(reversed_string2);

reversed_string3 = reverseReduce("amazon");
console.log(reversed_string3);

reversed_string4 = reverseReduceOneLine("facebook");
console.log(reversed_string4);