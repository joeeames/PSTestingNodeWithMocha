let chalk = require('chalk');

module.exports = class Part {
    name;
    cost;
    partNum;
    description;
    mass;

    constructor(partNum, name, cost, description, mass) {
        this.name = name;
        this.cost = cost;
        this.partNum = partNum;
        this.description = description;
        this.mass = mass;
    }

    getDisplayString() {
        return `${this.partNum}: $${this.cost} - ${this.name} `;
    }

    getDetailedDisplayString() {
        return `${chalk.bgWhite(chalk.blue(' ' + this.name + ' '))}
Part #: ${this.partNum}
Mass:   ${this.mass}kg
Cost:   $${this.cost}
${this.description}
`
    }
}