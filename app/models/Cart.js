const chalk = require('chalk');

class Cart {
    lineItems = [];

    constructor() {

    }

    addItem(part, qty) {
        let foundLineItem = this.lineItems.find(i => i.part === part);
        if(foundLineItem) {
            foundLineItem.quantity += qty;
        } else {
            this.lineItems.push({part: part, quantity: qty})
        }
    }

    getTotalCost() {
        return this.lineItems.reduce((p, c) => {
            return p + c.part.cost * c.quantity;
        }, 0);
    }

    getSummaryDisplay() {
        return `Your Cart Total: ${chalk.green('$' + this.getTotalCost())}`;
    }

    getDetailedDisplay() {
        return this.lineItems.map(item => {
            return `${item.quantity} ${item.part.name}(s)  $${item.part.cost * item.quantity} `
        }).join('\n')
    }

    empty() {
        this.lineItems = []
    }
    
}

module.exports = Cart;