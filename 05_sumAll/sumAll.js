const sumAll = function(num1, num2) {
    //if either input typeof, return 'ERROR'
    //if either input % 1 != 0, return 'ERROR'
    //order args from small to large
    //plug into for loop

    for (arg in arguments) {
        if (arg % 1 != 0) {
            return 'ERROR';
        }
    }
    
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
