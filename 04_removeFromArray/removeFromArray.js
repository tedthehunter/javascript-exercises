const removeFromArray = function(inputArray) {
    //LOOK up how to handle multiple optional arguments
    //look up how to modify array in place
    //take input array and remove any instances of other arguments

    //for each character in array, if removals.includes(character), remove from inputArray
    //return modified array

    let removalCharacters = [];

    for (let i = 1; i < arguments.length; i++) {
        removalCharacters.push(arguments[i]);
    }

    for (const item in inputArray) {
        if (removalCharacters.includes(item)) {
            inputArray.
        }
    }


};

// Do not edit below this line
module.exports = removeFromArray;
