const repeatString = function(word, rep) {
    let exit = word;
    if (typeof rep === 'number' && rep >= 1) {
        for (let i = 1; i < rep; i++) {
            exit += word;
        }
        return exit;
    } else if (typeof rep === 'number' && rep < 0){
        return 'ERROR';
    }
    else {
        return ''
    }
};

// Do not edit below this line
module.exports = repeatString;
