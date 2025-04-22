const leapYears = function(year) {
    //take year as input
    //check if year is divisible by 100 AND NOT 400
        //if so - return false
        //if not check if year is divisible by 4
            //if so - return true
            //if not - return false
    if (year % 100 == 0 && year % 400 == 0) {
        return true;
    } else if (year % 100 == 0 && year % 400 != 0) {
        return false;
    } else if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
