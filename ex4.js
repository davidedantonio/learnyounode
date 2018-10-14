var fs = require('fs');
var fileName = process.argv[2];
var lines = undefined;

fs.readFile(fileName, function result(err, fileBuffer){
  if (err) throw err;
  toString = fileBuffer.toString();
  lines = toString.split("\n");
  console.log(lines.length-1);
});