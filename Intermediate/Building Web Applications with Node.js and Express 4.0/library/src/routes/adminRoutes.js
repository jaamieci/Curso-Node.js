var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: "War and Peace",
        genre: "Historical Fiction",
        author: 'Lev .. ',
        read: false
    },
    {
        title: "Second Book",
        genre: "Historical Fiction",
        author: 'lee ',
        read: false
    },
    {
        title: "Last Book",
        genre: "Science Fiction",
        author: 'Raymon',
        read: false
    }
];

var router = function (nav) {
    
    adminRouter.route('/addBooks')
        .get(function(req, res) {
            
            var url = 'mongodb://localhost:27017/libraryApp';

            /*Me conecto a mi bd libraryApp en mongodb  */
            /*
            mongodb.connect(url, function(err, db) {

                //Recibo una instancia de coleccines de books
                var collection = db.collection('books');

                //Utilizo el arreglo books para realizar muchas inserciones en mi colección de books
                
                collection.insertMany(books, 
                    function(err, results) {
                        res.send(results);
                        db.close();
                    }
                );
                
            });*/

            //res.send('inserting books');
        });
        
        
    return adminRouter;
    

    
};

module.exports = router;