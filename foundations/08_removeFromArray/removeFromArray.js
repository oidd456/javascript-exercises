const removeFromArray = function(input, ...conds) {
    return input.filter(x => !conds.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
