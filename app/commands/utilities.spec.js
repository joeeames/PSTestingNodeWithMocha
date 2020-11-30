const utilities = require('./utilities')

const expect = require('chai').expect;

describe('a test', () => {

    it('should be true', () => {
        expect(true).to.be.true;
    })
})

describe('utilities', () => {

    describe('getArgument', () => {
        const line1 = "command first second third"

        it('should return the second word when asked for the first paramter', () => {
            let firstArg = utilities.getArgument(line1, 1);
            expect(firstArg).to.eq("first");
        })

        it('should return the third word when asked for the second paramter', () => {
            let firstArg = utilities.getArgument(line1, 2);
            expect(firstArg).to.eq("second");
        })

        it('should return the third word when asked for the third paramter', () => {
            let firstArg = utilities.getArgument(line1, 3);
            expect(firstArg).to.eq("third");
        })

        it("should return undefined when asked for an argument that doesn't exist", () => {
            let invalidArg = utilities.getArgument(line1, 4);
            expect(invalidArg).to.be.undefined;
        })

        it("should return undefined when asked for an argument from a string with only 1 word", () => {
            let invalidArg = utilities.getArgument("command", 1);
            expect(invalidArg).to.be.undefined;
        })
    })
})