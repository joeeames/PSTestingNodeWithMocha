const PartList = require('./commands/PartLister.js');
const SearchParts = require('./commands/SearchParts.js');
const Exiter = require('./commands/Exiter.js');
const PartDetailer = require('./commands/PartDetailer.js');
const AddToCart = require('./commands/AddToCart.js');
const CartDisplayer = require('./commands/CartDisplayer.js');
const Checkout = require('./commands/Checkout.js');


module.exports = function(line) {
    let firstWord = line.trim().split(' ')[0].toLowerCase();
    switch (firstWord) {
        case 'l':
            return PartList;
        case 'd':
            return PartDetailer;
        case 'x':
            return Exiter;
        case 's':
            return SearchParts;
        case 'a':
            return AddToCart;
        case 'dc':
            return CartDisplayer;
        case 'c':
            return Checkout;
        default:
            break;
    }
}