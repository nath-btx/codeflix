const path = require('path');
const fs = require('fs');

module.exports = function() {
    filename = process.argv[2];

    fs.unlink(filename, function (err) {
        if (err) throw err
        console.log('File', filename, 'successfully removed!');
      });
    return 0;
}