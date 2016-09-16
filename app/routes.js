module.exports = function(app) {

	app.get('/api/leads', function(req, res){
		console.log('called get leads');
	});
	app.post('/api/leads', function(req, res){
		console.log('called post leads');
	});

    app.get('/', function(req, res){
        res.sendFile('./public/index.html');
        // TODO: Move to appropriate location... timer.setTimeout(getDataPoint, DELAY);
    });
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});

};