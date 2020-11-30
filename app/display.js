const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


class Display {

    log(...args) {
        console.log(...args)
    }
        
    displayAppName()  {
        this.log(
            chalk.yellow(
                figlet.textSync("Joe's Parts", { horizontalLayout: 'full' })
            )
        );
    }

    displayHeader(cart) {
        clear();
        this.displayAppName();
        this.log(cart.getSummaryDisplay());
        this.displayMainMenu();
    }

    displayMainMenu() {
        this.log(`
    ${chalk.blue('Main Menu')}
"L": list parts
"S query": search parts
"D partNum": Show details for specific part
"A partNum [qty]": Add part to Cart
"DC": Display Cart
"C": Checkout
"X": Exit
`)
    }
}

module.exports = new Display();