const Part = require('./models/Part.js');

module.exports = [
    new Part("101","Ignition", 145, "Starts the engine using electrical energy stored in the battery", 11),
    new Part("102","Radiator", 180, "Radiates heat away from the engine", 8),
    new Part("103","AC Compressor", 230, "Pumps coolant throughout the cooling system", 5),
    new Part("104","Alternator", 125, "Electricity-generating device that converts mechanical energy to electrical energy", 5),
    new Part("105","Axle", 450, "Cross members supporting the vehicle, to which the wheels are attached", 32),
    new Part("106","Shock Absorbers", 199, "Suspension system to make the ride smoother", 8),
    new Part("107","Battery", 55, "stores energy to start the engine", 12),
    new Part("108","Brake Caliper", 15, "Grips brake discs to stop the vehicle", 3),
    new Part("109","Muffler", 135, "Reduces engine noise", 4),
    new Part("110","Tail Pipe", 120, "Vents exhause to the back of the vehicle", 8),
    new Part("111","Fuel Tank", 320, "A storage tank for gasoline", 8)
]