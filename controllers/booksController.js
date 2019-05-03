const db = require("../models");

module.exports = {
    findAll(req, res){
        db.Books.find(req.query)
            .then(dbBooks => res.json(dbBooks))
            .catch((err) => { 
                console.log(err);
                res.json(err);
            });
    },
    findById(req, res){
        db.Books.findById(req.params.id)
            .then(dbBooks => res.json(dbBooks))
            .catch((err) => { 
                console.log(err);
                res.json(err);
            });
    },
    saveBook(req, res){
        db.Books.create(req.body)
            .then(dbBooks => res.json(dbBooks))
            .catch((err) => { 
                console.log(err);
                res.json(err);
            });
    },
    deleteBook(req, res){
        db.Books.findById(req.params.id)
            .then(dbBooks => dbBooks.remove()) // removes books
            .then(dbBooks => res.json(dbBooks)) //send back as json response
            .catch((err) => { 
                console.log(err);
                res.json(err);
            });
    }
}