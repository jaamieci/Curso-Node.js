var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var bookController = function(bookService, nav) {
    var middleware = function (req, res, next) {
        
        if (!req.user) {
            res.redirect('/');
        }
        next();
    }
    
    var getIndex = function(req, res) {
        var url = 'mongodb://localhost:27017/libraryApp';
        
        /*Me conecto a mi base de datos en Mongodb*/ 
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            
            /*Se consulta por todos los libros en mi colección*/ 
            collection.find({}).toArray(function(err, result) {
                res.render('bookListView', {
                    title: "Books", 
                    nav: nav,
                    book: result
                });
            }); 
        });
    };


    var getById = function(req, res) {
        var id = objectId(req.params.id);
        var url = 'mongodb://localhost:27017/libraryApp';
        
        /*Me conecto a mi base de datos en Mongodb*/ 
        mongodb.connect(url, function(err, db) {
            var collection = db.collection('books');
            
            /*Se consulta por todos los libros en mi colección*/ 
            //findOne({}) me devuelve uno
            collection.findOne({_id: id}, 
                function(err, result) { 
                    bookService.getBookById(result.bookId,
                        function(err, book) {
                            result.book = book;
                            res.render('bookView', {
                            title: "Books", 
                            nav: nav,
                            book: result
                            });
                        })
                    //results.book = book;
                          
            });
             
        });
    }

    return {
        getIndex: getIndex,
        getById: getById,
        middleware: middleware
    };
    
};

module.exports = bookController;