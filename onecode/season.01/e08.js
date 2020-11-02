  
const fs = require("fs")

module.exports = function(filename) {
  fs.access(filename, fs.constants.F_OK | fs.constants.W_OK,(error) => {
      if (error) {
        console.log(`no access to file ${filename}`)
        return
      }

      console.log(`I can read or write the file ${filename}`)
  })
}