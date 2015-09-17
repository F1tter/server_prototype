var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'content-type': "text/plain"});
    res.end("servers up!...");
}).listen(8080);

console.log("ready for input...");

//setup Fs.
	//var fs = require("fs");