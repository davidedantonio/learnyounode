var ex6Module = require('./ex6_2.js');
var directory = process.argv[2];
var extension = process.argv[3];

ex6Module(directory, extension, function(err, list){
  if (err) return console.error("Error: " + err);

  list.forEach(function(fileName) {
    console.log(fileName);
  });
});