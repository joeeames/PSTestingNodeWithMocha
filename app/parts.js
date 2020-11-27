const Part = require('./models/Part.js');

module.exports = [
    new Part("101","Flux Capacitor", 45, "Allows time travel. Also allows you to go back to the future.", 2),
    new Part("102","Warp Core", 25, "Stuck in a rut? A brand new Warp Core will get you cruising along. Certified up to Warp 9.", 1500),
    new Part("103","Hyperdrive", 25, "Need to get somehwere in a hurry? Nothing beats speed like lightspeed", 50),
    new Part("104","T-14 Hyperdrive Generator", 25, "Nobody else has these but us!", 50),
    new Part("105","Phaser Coil", 65, "Pesky Ferenghi got you down? Nothing gets rid of unwanted pests like a top notch Phaser Coil.", 12),
    new Part("","", 65, "", 12),
]