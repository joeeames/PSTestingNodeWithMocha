const parts = require('../parts');
const display = require('../display.js');

module.exports = function(rl, cart) {
    display.displayHeader(cart);

    parts.forEach(part => {
        display.log(part.getDisplayString())
    });
    
}