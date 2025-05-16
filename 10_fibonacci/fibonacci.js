const fibonacci = function(num) {
    if (num == 0) {
        return 0;
    }
    else if (num == 1 || num == 2) {
        return 1;
    }
    let counter = 2;
    let previous = 1;
    let result = 1;
    do {
        result += previous;
        counter++;
    } while (counter < num)
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
