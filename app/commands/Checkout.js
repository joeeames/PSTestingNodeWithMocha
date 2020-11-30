const parts = require('../parts');
const display = require('../display.js');
const order = require('../order.js');

module.exports = function(rl, cart) {
    if(cart.lineItems.length === 0) {
        throw Error('Cannot Checkout With an Empty Cart')
    }

    order(cart, (success) => {
        if(success) {
            cart.empty();
            display.displayHeader(cart);
            display.log('Your Order has been processed and you will receive an invoice shortly through Subspace email')
            rl.prompt();
        } else {
            display.log('There was an error processing your order');
            rl.prompt();
        }
    })

    return true; // force prompt to wait
}