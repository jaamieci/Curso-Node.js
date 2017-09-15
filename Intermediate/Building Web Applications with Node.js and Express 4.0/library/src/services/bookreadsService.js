/*var http = require('http');
var xml2js = require('xml2js');
var parser = xml2js.Parser({explicitArray: false});*/

var bookreadsService = function () {
    var getBookById = function(id, cb) {
        
        cb(null, {
            description: "Our description"
        });

        /*
        var options = {
            host: 'www.goodreads.com',
            path: '/book/show/656?format=xml&key=mN1DyVoFS4cfbCMh5HmnpA'
        };

        var callback = function(response){
            var str = '';

            response.on('data', function(chunk){
                str += chunk;
            });

            response.on('end', function() {
                console.log(str);
                parser.parseString(str, 
                    function() {
                        cb(null, result.GoodreadsResponse.book);
                })
            })
        };
        http.request(options, callback).end();*/
    };

    return {
        getBookById: getBookById
    };
};

module.exports = bookreadsService;