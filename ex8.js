var http = require('http'),
    bl = require('bl');

var url = process.argv[2];

http.get(url, function(response){
  response.pipe(bl(function (err, data) {
    if (err) return console.error("Error: " + err);
    console.log(data.toString().length);
    console.log(data.toString());
  }));
}).on('error', function(err) {
  console.error("Error in GET request: "+ err)
});