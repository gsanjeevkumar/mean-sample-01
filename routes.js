module.exports = function(app){

    app.get('/api/leads', function(req, res){
        appData = [
            { FirstName: 'John', LastName: 'lname', Email:'0email' },
            { FirstName: 'fname01', LastName: 'lname', Email:'1email' },
            { FirstName: 'fname01', LastName: 'lname', Email:'21email' },
            { FirstName: 'fname01', LastName: 'lname', Email:'3email' }
        ];
        res.send(appData);
        console.log('called leads get');
    });
    app.post('/api/leads', function(req, res){});
    app.delete('/api/leads', function(req, res){});
    app.get('/api/leads', function(req, res){});

}
