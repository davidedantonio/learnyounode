var fs = require('fs');
var fileName = process.argv[2];

fileBuffer = fs.readFileSync(fileName);
console.log(fileBuffer.toString().split("\n").length-1);