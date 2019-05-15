var http = require('http');
var url = require('url'); //focus

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query; //focus
  var txt = q.year + " " + q.month; //focus
  res.end(txt);
}).listen(8888);

//?year=2017&month=July