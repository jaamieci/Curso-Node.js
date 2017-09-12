//ruta del archivo node main.js argv
//ejemplo: node main.js hola hello hallo
for(var i = 0; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}