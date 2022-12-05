const http = require('node:http');

const server = http.createServer(function (request, response) {
    response.write('Hello World');
    response.end();
});

server.listen(8080);