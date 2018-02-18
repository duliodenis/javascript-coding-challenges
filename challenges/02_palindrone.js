// Is the string a palindrone

function isPalindrone(str) {
    return (str === str.split('').reverse().join(''));
}

palindrone0 = isPalindrone("abba");
console.log(palindrone0);

palindrone1 = isPalindrone("Never odd or even");
console.log(palindrone1);