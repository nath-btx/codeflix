const path = require('path');
const fs = require('fs');


module.exports = function() {
    filename = process.argv[2];
    contenu = process.argv[3];

    fs.appendFile(filename, contenu, function (err) {
        if (err) throw err
        console.log('File', filename, 'successfully created!');
      });
    return 0;
}