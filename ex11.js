var http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    file = process.argv[3];

var server = http.createServer(function (req, res) {
  var stream = fs.createReadStream(file);

  stream.on('open', function(){
    stream.pipe(res);
  });

  stream.on('error', function(){
    res.end(err);
  });
});

server.listen(Number(port));