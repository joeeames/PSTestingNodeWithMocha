const chalk = require('chalk');
const readline = require('readline');

const display = require('./app/display.js');
const Cart = require('./app/models/Cart.js');
const commandDispatcher = require('./app/commandDispatcher');

let cart = new Cart();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

display.displayHeader(cart);
rl.prompt();
rl.on('line', (line) => {
    let command = commandDispatcher(line);
    let wait = command(rl, cart, line);

    if(!wait) rl.prompt();
    
}).on('close', () => {
    process.exit(0);
})

