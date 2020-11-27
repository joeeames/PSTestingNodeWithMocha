const parts = require('../parts');
const display = require('../display.js');
const utilities = require('./utilities.js');


module.exports = function(rl, cart, line) {

    let partNumber = utilities.checkForArgument(line, 1, 'you must provide a part number');
    if(!partNumber) return;
    let qty = utilities.getArgument(line, 2) || 1;

    let match = parts.find(part => {
        return part.partNum === partNumber;
    })
    if(match) {
        cart.addItem(match, qty);
        display.displayHeader(cart);
        console.log(`Added ${qty} ${match.name}(s) to cart!`)
    } else {
        display.displayHeader(cart);
        console.log('No part with that Part Number was found');
    }
}