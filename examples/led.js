var arduino = require('../');

var board = new arduino.Board({
  debug: true,
  device: 'COM22',
  baudrate: 115200
});

var led = new arduino.Led({
  board: board,
  pin: 2
});

board.on('ready', function(){
  led.blink();
});
