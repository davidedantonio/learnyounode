var http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];

var upCase = map(function(string) {
  return string.toString().toUpperCase();
});

var server = http.createServer(function (req, res) {
  if (req.method == 'POST')
    req.pipe(upCase).pipe(res);
});

server.listen(Number(port));