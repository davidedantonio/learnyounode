var fs = require('fs');
var path = require('path');

module.exports = function(directory, extension, callback) {
  extension = '.'+extension;
  fs.readdir(directory, function(err, list) {
    if (err) return callback(err);

    var filteredList = list.filter(function(fileName){
      return path.extname(fileName) === extension;
    });

    callback(null, filteredList);
  });
};