var net = require('net'),
    moment = require('moment');

var port = process.argv[2];

var server = net.createServer(function (socket) {
  socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n');
}).on('error', function(err) {
  throw err;
});

server.listen(Number(port));