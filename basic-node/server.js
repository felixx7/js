//include module
var http = require('http');

//my own module
var dt = require('./mymodule');

//create a server object:
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!<br>'); //write a response to the client
    res.write("The date and time are currently: " + dt.myDateTime() + "<br>");
    res.end('Hello World!'); //end the response
}).listen(8888); //the server object listens on port 8888