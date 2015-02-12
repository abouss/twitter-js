var express = require('express');
var swig = require('swig');
var morgan = require('morgan');

var app = express();


app.engine('html', require('swig').renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + './views');


swig.setDefaults({cache: false});



app.use(morgan('dev'));

app.get('/', function(req, res) {
	res.send('gosh damned!');
});


var server = app.listen(3000, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s%s', host ,port);
});





