const parts = require('../parts');
const display = require('../display.js');
const utilities = require('./utilities.js');

module.exports = function(rl, cart, line) {
    display.displayHeader(cart);

    let searchPhrase = utilities.checkForArgument(line, 1, 'You must include a search string')
    if(!searchPhrase) return;

    let matches = parts.filter(part => {
        return part.name.toLowerCase().includes(searchPhrase.toLowerCase())
    })
    if(matches.length > 0) {
        matches.forEach(match => {
            display.log(match.getDisplayString())
        } )
    } else {
        display.log('that search returned no results');
    }
}