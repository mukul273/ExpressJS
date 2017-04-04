var express = require('express');
var app = express();
var port = 8000;

// if you don't want to server start up error then you can have app.listen(port); also

app.listen(port , function(err, res) {
	if(err)
		console.log('Error Occured while starting the server at port:'+port);
	else
		console.log('Server started Successfully..for ExpressJS at port:'+port)
} );