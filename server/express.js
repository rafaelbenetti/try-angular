{
    'use strict';

    const express = require('express');    
    const bodyParser = require('body-parser');   

    const root = `${__dirname}/..`;

    const app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });  
     
    app.use(express.static(root));
    app.use(bodyParser.json());   

    app.use('/todos', (req, res, next) => {
        res.send({description: 'homework'});
    });
    
    // TODO: Find a better way to identify when client should care about it.
    app.get("*", (req, res, next) => res.sendFile(`public/index.html`, { root : root }));

    module.exports = app;
}