const parts = require('../parts');
const display = require('../display.js');
const order = require('../order.js');

module.exports = function(rl, cart) {

    order(cart, (status) => {
        if(status) {
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