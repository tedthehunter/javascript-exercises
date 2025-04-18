const sumAll = function(num1, num2) {
    //if either input typeof, return 'ERROR'
    //if either input % 1 != 0, return 'ERROR'
    //order args from small to large
    //plug into for loop

    for (const arg of arguments) {
        if (typeof arg != 'number') {
            return 'ERROR';
        }
        else if (arg < 0) {
            return 'ERROR';
        }
        else if (arg % 1 != 0) {
            return 'ERROR';
        }
    }

    let smallNum = 0;
    let largeNum = 0;

    if (num1 > num2) {
        largeNum = num1;
        smallNum = num2;
    }
    else {
        largeNum = num2;
        smallNum = num1;
    }
    
    let sum = 0;
    for (let i = smallNum; i <= largeNum; i++) {
        sum += i;
    }
    return sum;
};

sumAll(2, 4);
// Do not edit below this line
module.exports = sumAll;
