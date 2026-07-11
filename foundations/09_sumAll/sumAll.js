const sumAll = function(upper, lower) {
    if (upper > 0 && lower > 0 && Number.isInteger(upper)
        && Number.isInteger(lower)
    ) {
        if (upper > lower) {
            let result = lower;
            for (let i = lower + 1; i < upper + 1; i++) {
                result += i;
            }
            return result;
        } else if (upper < lower) {
            let result = upper;
            for (let i = upper + 1; i < lower + 1; i++) {
                result += i;
            }
            return result;
        } else {
            return upper;
        }
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
