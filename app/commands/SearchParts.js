const parts = require('../parts');
const display = require('../display.js');

module.exports = function(rl, cart, line) {
    display.displayHeader(cart);

    let searchPhrase = line.split(' ').slice(1).join(' ');

    let matches = parts.filter(part => {
        return part.name.toLowerCase().includes(searchPhrase.toLowerCase())
    })
    if(matches.length > 0) {
        matches.forEach(match => {
            console.log(match.getDisplayString())
        } )
    } else {
        console.log('that search returned no results');
    }
}