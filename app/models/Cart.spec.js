const expect = require('chai').expect;
const Cart = require('./Cart');

describe('Cart', () => {
    let cart;

    beforeEach(() => {
        cart = new Cart()
    })

    describe('constructor', () => {
        it('should have no items after construction', () => {

        })
    })

    describe('addItem', () => {

        it('should have one item qith a qty of 1 after addItem is called with qty of 1', () => {
            let myPart = {}
            cart.addItem(myPart, 1);

            expect(cart.lineItems.length).to.eq(1);
            expect(cart.lineItems[0].quantity).to.eq(1);
        })

        it('should have one item with a qty of 2 if addItem is called with qty of 1 when qty is already 1 on same item', () => {
            let myPart = {};
            cart.addItem(myPart, 1);

            cart.addItem(myPart, 1);
            
            expect(cart.lineItems).to.have.lengthOf(1);
            expect(cart.lineItems[0].quantity).to.eq(2);
        });

        it('should add quantities together when addItem is called', () => {
            let myPart = {};
            cart.addItem(myPart, 1);

            cart.addItem(myPart, 4);
            
            expect(cart.lineItems).to.have.lengthOf(1);
            expect(cart.lineItems[0].quantity).to.eq(5);
        });

        it('should have 2 items if addItem is called with two different parts', () => {
            let myPart1 = {};
            let myPart2 = {};

            cart.addItem(myPart1, 1);
            cart.addItem(myPart2, 1);

            expect(cart.lineItems).to.have.lengthOf(2);
        })

        it('should add items to the correct existing item', () => {
            let myPart1 = {};
            let myPart2 = {};

            cart.addItem(myPart1, 1);
            cart.addItem(myPart2, 1);

            cart.addItem(myPart2, 3);

            expect(cart.lineItems[1].quantity).to.eq(4);
        })
    })

    describe('getTotalCost', () => {

        it('should be 0 after construction', () => {
            expect(cart.getTotalCost()).to.eq(0)
        })

        it('should be 5 with one item with qty 1 cost of 5', () => {
            let myPart1 = {cost:5};
            cart.addItem(myPart1, 1);
            expect(cart.getTotalCost()).to.eq(5)
        })

        it('should be 15 with one item with qty 1 cost of 5 and aother qty 1 cost 10', () => {
            let myPart1 = {cost:5};
            let myPart2 = {cost:10};
            cart.addItem(myPart1, 1);
            cart.addItem(myPart2, 1);

            expect(cart.getTotalCost()).to.eq(15)
        })

    })

    describe('empty', () => {
        it('should have a length of 0 after empty with items', () => {
            cart.lineItems = [{}, {}]

            cart.empty();

            expect(cart.lineItems).to.have.lengthOf(0);
        })

        it('should have a different object when emptied than the original array', () => {
            let items = []
            cart.lineItems = items;

            cart.empty();

            expect(cart.lineItems).to.eql(items)
            expect(cart.lineItems).to.not.eq(items)
        })
    })
})