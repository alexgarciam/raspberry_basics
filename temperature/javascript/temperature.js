var fs=require('fs');
var utf8 = require('utf8');

// Vamos a requerir del modulo que provee Node.js 
// llamado child_process
var exec = require('child_process').exec, child;
// Creamos la función y pasamos el string 
// que será nuestro comando a ejecutar
child = exec('sudo modprobe w1-gpio',
// Pasamos los parámetros error, stdout la salida 
// que mostrara el comando
  function (error, stdout, stderr) {
    // Imprimimos en pantalla con console.log
    console.log(stdout);
    // controlamos el error
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});

child = exec('sudo modprobe w1-therm',
// Pasamos los parámetros error, stdout la salida 
// que mostrara el comando
  function (error, stdout, stderr) {
    // Imprimimos en pantalla con console.log
    console.log(stdout);
    // controlamos el error
    if (error !== null) {
      console.log('exec error: ' + error);
    }
});
while(true){
	var contents = fs.readFileSync('/sys/bus/w1/devices/28-000005e333d8/w1_slave')
	var lines = contents.toString().split('n')
	var lineas=lines[0];
	var lineas2=lineas.split(" ");
	var lineasTemp=lineas2[lineas2.length-1];
	var temp=lineasTemp.split("=");
	var temperatura= "Temperatura: "+temp[1]/1000+" ºC";
	console.log(temperatura)
}
