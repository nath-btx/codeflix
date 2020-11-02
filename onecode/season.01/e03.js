const path = require('path');
const fs = require('fs');

module.exports = function() {
    return fs.readFileSync(process.argv[2]).toString();
     
}