var http = require('http');
var url = process.argv[2];

http.get(url, function(response){
  response.on('data', function(data){
    console.log(data.toString());
  });

  response.on('error', function(err){
    console.error("Error: " + err);
  });
}).on('error', function(err) {
  console.error("Error in GET request: "+ err)
});