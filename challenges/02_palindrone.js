// Is the string a palindrone

function isPalindrone(str) {
    return (str === str.split('').reverse().join(''));
}

function isPalindroneWhiteSpace(str) {
    strNoSpace = str.toLowerCase().replace(/ /g, '');
    return (strNoSpace === strNoSpace.split('').reverse().join(''));
}


// Uses the array every method

function isPalindroneEvery(str) {
    return str.split('').every( (char, i) => {
        return char === str[str.length - i - 1];
    });
}

console.log("abba is:");
palindrone0 = isPalindrone("abba");
console.log(palindrone0);

console.log("Never odd or even");
palindrone1 = isPalindrone("Never odd or even");
console.log(palindrone1);

console.log("Never odd or even with whitespace and lower cased: ");
palindrone1B = isPalindroneWhiteSpace("Never odd or even");
console.log(palindrone1B);

console.log("abcba");
palindrone2 = isPalindroneEvery("abcba");
console.log(palindrone2);   