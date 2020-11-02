const path = require('path');
const fs = require('fs');

module.exports = function(fileName) {
    return path.extname(process.argv[2].toString())
}