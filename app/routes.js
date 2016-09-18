var express = require('express');
var Lead = require('./models/leads');

module.exports = function(app) {

	var router = express.Router();

	router.use(function(req, res, next){
		console.log('Middleware router started');
		next();
	});

	router.route('/leads')
		.post(function(req, res){
			console.log('called get leads, from Middleware');
			var lead = new Lead();
			console.log('created a new lead' + lead);
		}).get(function(req, res){
			console.log('get called');
			Lead.find(function(err, leads){
				if(err)
					res.send(err);
				
				res.json(leads);
			});
		});

	// router.get('/api/leads', function(req, res){
	// 	console.log('called get leads');
	// 	res.json({ message: 'Welcome to our api!' }); 
	// });
	// app.get('/api/leads/:lead_id', function(req, res){
	// 	console.log('called get leads' + lead_id);
	// 	res.json({ message: 'Welcome to our api!' }); 
	// });
	// router.post('/api/leads', function(req, res){
	// 	console.log('called post leads');
	// });

    // router.get('/', function(req, res){
    //     res.sendFile('./public/index.html');
    //     // TODO: Move to appropriate location... timer.setTimeout(getDataPoint, DELAY);
    // });
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	// app.get('*', function(req, res) {
	// 	res.sendfile('./public/views/index.html');
	// });

	app.use('/api', router);

};