const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


class Display {
        
    displayAppName()  {
        console.log(
            chalk.yellow(
                figlet.textSync("Watto's Parts", { horizontalLayout: 'full' })
            )
        );
        console.log(chalk.redBright('(Republic Credits Not Accepted)\n'))
    }

    displayHeader(cart) {
        clear();
        this.displayAppName();
        console.log(cart.getSummaryDisplay());
        this.displayMainMenu();
    }

    displayMainMenu() {
        console.log(`
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