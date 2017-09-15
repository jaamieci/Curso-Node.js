var request = require('request');

//se invoca la request function, recibe 3 parámetros 
request('http://www.pluralsight.com/', function (error, response, body) {
    
    if (!error && response.statusCode === 200) {
        console.log(body);
    } 
});