
const http = require('http');

const port = process.argv[2];

// check if port is defined
if (!port) {
  console.log("usage : node e01.js <PORT>");
  process.exit(0)
}


// execute HTTP server
const server = http.createServer ( (req, res) => {
   res.setHeader("Content-Type", "text/html");
   res.write('<h1> Hello World <h1>');
   res.end;
})



server.listen(port, () => {
  console.log('Listening on port ' + port);
});

