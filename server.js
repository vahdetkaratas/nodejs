var express = require('express');
var middleware = require('./middleware');

var app = express();
var PORT = 3000;

app.use(middleware.logger);

/*app.get('/', function(req, res) {
	res.send('Merhaba Express');
});*/

app.get('/hakkimda', middleware.requireAuthentication, function(req, res) {
	res.send('hakkimda sayfasina ulastiniz');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('express server ' + PORT + ' baslatildi');
});
