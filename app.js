var express = require('express');
var swig = require('swig');
var morgan = require('morgan');
var routes = require('./routes/');
var socketio = require('socket.io');



var app = express();

// var server = app.listen(3000);



app.engine('html', require('swig').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({cache: false});
app.use(morgan('dev'));



app.use(express.static(__dirname + '/public'));








var server = app.listen(3000, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s%s', host ,port);
});

var io = socketio.listen(server);

app.use('/', routes(io));



