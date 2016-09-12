#!/bin/env node
var express = require('express');
var app = express();
var path = require('path');

var port = 3000;
const psi = require('psi');

app.use(express.static(__dirname + '/public'));


app.listen(port);

console.log('Server started at localhost:3000');

app.get('/', function(req, res){

	res.sendFile(path.join(__dirname, '/index.html'));

});


// get the PageSpeed Insights report 
psi('theverge.com').then(data => {
  console.log(data.ruleGroups.SPEED.score);
  console.log(data.pageStats);
});
 
// output a formatted report to the terminal 
psi.output('theverge.com').then(() => {
  console.log('done');
});
 
// Supply options to PSI and get back speed and usability scores 
psi('theverge.com', {nokey: 'true', strategy: 'mobile'}).then(data => {
  console.log('Speed score: ' + data.ruleGroups.SPEED.score);
  console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
});