var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var routes = require('./routes/');


var app = express();


app.engine('html', require('swig').renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');


swig.setDefaults({cache: false});



app.use(morgan('dev'));

app.use('/', routes);

app.use(express.static(__dirname + '/public'));


// app.get('/', function(req, res) {
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of ME', people: people} );
// });




var server = app.listen(3000, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s%s', host ,port);
});





