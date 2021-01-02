const expect = require('chai').expect;
const utilities = require('./utilities');

describe('utilities', () => {

    describe('getArgument', () => {
        
        it('should return the second word when asked for the first parameter', () => {
            let firstArg = utilities.getArgument("command argument", 1);
            expect(firstArg).to.eq("argument")
        })

        it('should return the third word when asked for the second parameter', () => {
            let secondArg = utilities.getArgument("command argument1 argument2", 2);

            expect(secondArg).to.eq("argument2")
        })

        it("should return undefined when asked for a parameter that doesn't exist", () => {
            let thirdArg = utilities.getArgument("command argument1 argument2", 3);

            expect(thirdArg).to.be.undefined;
        })

        it("should return undefined when asked for a parameter from a string with only 1 word", () => {
            let secondArg = utilities.getArgument("command", 2);

            expect(secondArg).to.be.undefined;
        })
    })
})