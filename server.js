#!/bin/env node
var express        = require('express');
var http           = require('http');
var app            = express();
var reload         = require('reload');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
// config
var database = require('./config/database');
mongoose.connect(database.url);
var db = mongoose.connection;
db.once('open', function(){
  console.log('connected');
});

const port = 3000;

app.use(bodyParser.json()); // parsing as application/json for since this is the api part of the entire application
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({ extended:true}));
app.use(methodOverride('X-HTTP-Method-Override')); // Simulate DELETE/PUT
app.use(express.static(__dirname + '/public'));

console.log('Server started at localhost:3000');

var https = require('https');

// All Api Routes
require('./app/routes')(app);

// to reload
var server = http.createServer(app);
reload(server, app);
server.listen(port);