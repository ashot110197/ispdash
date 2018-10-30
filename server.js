"use strict";

var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');

app.use(compression());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 5000;


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/public/js', express.static(path.join(__dirname, '/public/js')));

app.listen(port);