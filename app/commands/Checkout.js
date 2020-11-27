const parts = require('../parts');
const display = require('../display.js');

module.exports = function(rl, cart) {
    display.displayHeader(cart);

    console.log('Your Order has been processed and you will receive an invoice shortly through Subspace email')
}