const fibonacci = function(num) {
    let targetMember;
    if (typeof num != 'number') {
        targetMember = parseInt(num);
    }
    else {
        targetMember = num;
    }

    if (targetMember == 0) {return 0};
    if (targetMember < 0) {return 'OOPS'};

    let fibo = [1, 1];
    for (let i = 2; i < targetMember; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }

    return fibo.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
