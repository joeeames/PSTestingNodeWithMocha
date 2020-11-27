const display = require('../display.js');

module.exports = {
    checkForArgument: (line, argNum, errorMessage) => {
        let words = line.split(' ');
        if(words.length < argNum + 1) {
            display.log(errorMessage)
            return undefined;
        } else {
            return words[argNum]
        }
    },

    getArgument: (line, index) => {
        let words = line.split(' ');
        if(words.length > index) {
            return words[index]
        } else {
            return undefined;
        }
    }
}