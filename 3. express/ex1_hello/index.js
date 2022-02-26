const http = require('http');   // node_modules 내장 

// listen(3000) 3000번 포트로 createServer 서버를 띄워라
http.createServer( (request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Server');
    response.end();
} ).listen(3000);