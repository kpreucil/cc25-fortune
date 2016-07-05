;
(function () {
    "use strict";

    var fs = require('fs');
    var express = require('express');
    var handlebars = require('express-handlebars');
    var fortunes = require('./fortunes.js');
    var bodyParser = require('body-parser');

    
    var app = express();

    
    app.engine('handlebars', handlebars({
        defaultLayout: "main"
    }));
    
    
    app.set('view engine', 'handlebars');
    
    
    app.use(express.static("public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    
    app.get("/", function (req, res) {
            fortunes.getFortune(function (fortune) {
                res.render('index', {
                    name: "Katie",
                    fortune: fortune
                });
            });
        });
    
    
    app.post("/new", function(req, res){
        var newFortune = req.body.newFortune;
        fortunes.addFortune(newFortune);
        res.redirect("/");
    });

    
    app.listen(3000, function () {
        console.log("server started");
    });


}());