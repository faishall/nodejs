var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hallo Nama saya Faishal Abrari');
    console.log('faishal'); // untuk menampilakan pada terminal "console.log"
}).listen(8080);