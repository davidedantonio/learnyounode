var http = require('http'),
    bl = require('bl'),
    responses = [],
    urls = process.argv.slice(2);

function print() {
  responses.forEach(function(data) {
    console.log(data);
  });
}

function getUrlResult(url, index) {
  http.get(url, function(response){
    response.pipe(bl(function (err, data) {
      if (err) return console.error("Error: " + err);

      responses[index] = data.toString();
      if (responses.length === urls.length)
        print();
    }));
  }).on('error', function(err) {
    console.error("Error in GET request: "+ err)
  });
}

for (var i = 0; i < urls.length; i++)
  getUrlResult(urls[i], i);