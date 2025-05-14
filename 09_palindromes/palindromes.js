const palindromes = function (string) {
    let modifiedString = string.replaceAll(' ', '');
    modifiedString = modifiedString.replaceAll('!', '');
    modifiedString = modifiedString.replaceAll(',', '');
    modifiedString = modifiedString.replaceAll('.', '');
    //tolowercase
    //split to array
    //copy array and reverse
    //return array == reverse
};

// Do not edit below this line
module.exports = palindromes;
