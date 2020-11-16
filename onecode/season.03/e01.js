const http = require('http');
const port = process.argv[2];


const server = http.createServer ( (req, res) => {
 if (req.url === '/')
 {
   res.write('<h1> Hello World <h1>');
   res.end;
 }
})



server.listen(port);

console.log('Listening on port ' + port);
