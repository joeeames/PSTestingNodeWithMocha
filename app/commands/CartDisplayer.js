const parts = require('../parts');
const display = require('../display.js');

module.exports = function(rl, cart) {
    display.displayHeader(cart);

    if(cart.lineItems.length === 0) {
        display.log('Your Cart is Empty')
    } else {
        display.log(cart.getDetailedDisplay())
    }
    
}