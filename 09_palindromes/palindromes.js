const palindromes = function (string) {
    let modifiedString = string.replaceAll(' ', '');
    modifiedString = modifiedString.replaceAll('!', '');
    modifiedString = modifiedString.replaceAll(',', '');
    modifiedString = modifiedString.replaceAll('.', '');
    modifiedString = modifiedString.toLowerCase();
    let inputArray = modifiedString.split('');
    let reversedArray = inputArray.reverse();
    //return array == reverse
};

// Do not edit below this line
module.exports = palindromes;
