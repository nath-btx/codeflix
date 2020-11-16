const http = require('http');
const port = 4242;


const server = http.createServer((req, res) => {
    if (req.method === "POST")
    {
        res.write('Heisenberg');
    }
    else if (req.method === "GET"){
        res.write('<h1> Hello World <h1>');
    }
    res.end;

   })

server.listen(port, () => {
    console.log('Listening on port ' + port);
});