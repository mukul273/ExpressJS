var express = require('express');
var app = express();
var port = 8000;

app.get('/:id', log, helloExpressJS);


function log(req, res, next) {
	console.log(new Date(), req.method, req.url);
	next();
}

function helloExpressJS(req, res, next) {
		res.write('My First ExpressJS App'+req.params.id);
		res.end();
		next();
}

app.listen(port , function(err, res) {
	if(err)
		console.log('Error Occured while starting the server at port:'+port);
	else
		console.log('Server started Successfully..for ExpressJS at port:'+port)
} );