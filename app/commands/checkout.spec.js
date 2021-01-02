let checkout = require('./Checkout');
let Cart = require('../models/Cart');
const expect = require('chai').expect;

describe('Checkout', () => {

    it('should throw an error with an empty cart', () => {
        let cart = new Cart();
        
        let callCheckout = () => {checkout(null, cart)};
        expect(callCheckout).to.throw();
    })
})