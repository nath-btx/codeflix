const http = require('http');
const port = 4242;

const method = process.argv[2]
if (!method){
    console.log("Wrong method");
    process.exit(0)
}
const req = {
    hostname : "localhost",
    port : port,
    method: method
}

/*
const server = http.createServer ( (optionsget, res) => {
 if (optionsget.url === '/')
 {
   res.write('<h1> Hello World <h1>');
   res.end;
 }
})
*/

const server = http.createServer ( (req, res) => {
    if (method === "POST")
    {
        res.write('Heisenberg');
        res.end;
    }
    else if (method === "GET"){
        res.write('<h1> Hello World <h1>');
        res.end;
    }
   })



server.listen(port);
console.log("Method type : " + req.method);

console.log('Listening on port ' + port);
