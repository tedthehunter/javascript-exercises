const reverseString = function(string) {

    let result = '';
    let forwardArray = string.split('');
    let reversedArray = [];

    for (let i = 0; i < forwardArray.length; i++) {
        reversedArray.unshift(forwardArray[i]);
    }

    result = reversedArray.join('');

    return result
};

// Do not edit below this line
module.exports = reverseString;
