const parts = require('../parts');
const display = require('../display.js');
const utilities = require('./utilities.js');


module.exports = function(rl, cart, line) {
    display.displayHeader(cart);

    let partNumber = utilities.checkForArgument(line, 1, 'you must provide a part number');
    if(!partNumber) return;

    let match = parts.find(part => {
        return part.partNum === partNumber;
    })
    if(match) {
        console.log(match.getDetailedDisplayString())
    } else {
        console.log('No part with that Part Number was found');
    }
}