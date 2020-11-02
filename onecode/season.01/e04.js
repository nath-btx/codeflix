const path = require('path');
const fs = require('fs');

module.exports = function() {
    return fs.readFile(process.argv[2], function (error, data) {
        console.log(data.toString());
      });
     
}