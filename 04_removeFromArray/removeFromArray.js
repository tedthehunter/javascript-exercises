const removeFromArray = function(inputArray) {

    let removalCharacters = [];

    for (let i = 1; i < arguments.length; i++) {
        removalCharacters.push(arguments[i]);
    }

    for (let i = 0; i < inputArray.length; i++) {
        if (removalCharacters.includes(inputArray[i])) {
            inputArray.splice(i, 1);
            i = -1; //if item removed, loop must restart
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
