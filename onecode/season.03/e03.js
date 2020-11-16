const http = require('http');
const fs = require('fs');
var port = process.argv[2];

// check if port is defined
if (!port) {
  port = 4242;
}


// execute HTTP server
const server = http.createServer ((req, res) => {

  res.setHeader("Content-Type", "text/html");
  res.write(fs.readFileSync('index.html'));
  res.end;
})

server.listen(port, () => {
  console.log('Listening on port ' + port);
});
