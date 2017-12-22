var http = require('http');
var dt = require('./myfirstmodule'); //koneksi ke "myfirstmodule.js" untuk mengambil data 

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Ini Tanggal Sekarang: " + dt.myDateTime());
    res.end();


    console.log('http://localhost:8080 Sukses!!')
}).listen(8080);