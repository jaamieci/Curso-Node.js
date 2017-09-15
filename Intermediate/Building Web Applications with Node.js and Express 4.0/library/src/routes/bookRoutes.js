var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID; //Llama al objeto ObjectId para obtener el id de los datos de nuestra colección

var router = function(nav) {
    
    var bookService = require('../services/bookreadsService')();
    var bookController = require('../controllers/bookController')(bookService, nav);
    /**Arreglo de libros usado inicialmente para comprobar funcionalidades, luego se usa una bd en mongodb */
   /* var books = [
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
    ];*/
    
    bookRouter.use(bookController.middleware);

    bookRouter.route('/')
        .get(bookController.getIndex);  
    
    bookRouter.route('/:id')
        .get(bookController.getById);

    return bookRouter;
};

module.exports = router;
