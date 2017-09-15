var os = require('os'); //Requiere el módulo os, dará alguna información del sistema operativo

var toMb = function(f) {
    return (Math.round((f/1024/1024)*100)/100);
}

console.log('Host: ' + os.hostname());
console.log('15 min. load average: ' + os.loadavg()[2]);
console.log(toMb(os.freemem()) + ' of ' + toMb(os.totalmem()));

/*
Salida:

Host: DESKTOP-UOF2L37
15 min. load average: 0
6405.36 of 12168.36

 * / 