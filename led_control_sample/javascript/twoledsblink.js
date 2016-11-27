var wpi = require('wiring-pi');

// GPIO pin of the led
var configPin = 0;
var configPin2 = 1;
// Blinking interval in usec
var configTimeout = 1000;

wpi.setup('wpi');
wpi.pinMode(configPin, wpi.OUTPUT);
wpi.pinMode(configPin2, wpi.OUTPUT);

var isLedOn = 0;

setInterval(function() {
	isLedOn = +!isLedOn;
	//isLedOn = !isLedOn;
	wpi.digitalWrite(configPin, isLedOn );
	wpi.digitalWrite(configPin2, +!isLedOn );
}, configTimeout);