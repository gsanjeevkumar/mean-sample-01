#!/bin/env node
var express = require('express');
var http = require('http');
var app = express();
var path = require('path');
var reload = require('reload');
var timer = require('timers');
var grunt = require('grunt');
var util = require('util')
var exec = require('child_process').exec;
var mongodb = require('mongodb')
var mongoose = require('mongoose');


var database = require('./config/database');
mongoose.connect(database.url);
// db.on('error', console.error.bind(console, 'connect.db'));

var db = mongoose.connection;
db.once('open', function(){
  console.log('connected');
});

const port = 3000;
const DELAY = 5000;

const psi = require('psi');

// Start grunt
grunt.initConfig({
    growl : {
    	myMessage : {
    		message : "NodeMon - Custom just started",
    		title : "Local Notification"
    	}
    }	
});
grunt.loadNpmTasks('grunt-growl');
grunt.registerTask('default', 'growl:myMessage');

// get the PageSpeed Insights report 

const API_KEY = 'AIzaSyDZRuVba6U65IT_8o-2_8Ochjm2wUjLRog';

app.use(express.static(__dirname + '/public'));

console.log('Server started at localhost:3000');

var https = require('https');

function saveDataPoint(d){
  console.log(d);
}



function getDataPoint(){

  // call grung
  function puts(error, stdout, stderr) { console.log(stdout); }
  exec("grunt", puts);

  // get the PageSpeed Insights report
  psi('https://www.bluegreenvacations.com', {key: API_KEY, strategy: 'mobile'}).then(data => {
    console.log('Speed score: ' + data);
    // console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
  });

  var url = 'https://www.bluegreenvacations.com';
  var strategy = 'desktop';

  console.log('calling');

  https.get({
    host: 'www.googleapis.com', 
    path: '/pagespeedonline/v1/runPagespeed?url='+encodeURIComponent(url)+'&key='+API_KEY+'&strategy='+strategy}, function(res) {
      if(res.statusCode==200){
        console.log("res:");
        res.on('data', function(d) {
          
          //process.stdout.write(d);
          //saveDataPoint(JSON.stringify(d));
        });
      }

    }).on('error', function(e) {
    
    console.error(e);

  });

  timer.setTimeout(getDataPoint, DELAY);
}

require('./app/routes')(app);

// to reload
var server = http.createServer(app);
reload(server, app);
server.listen(port);