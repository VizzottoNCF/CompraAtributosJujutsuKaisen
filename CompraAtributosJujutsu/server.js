'use strict';
var http = require('http');
var fs = require('fs');
var path = require('path');
var port = process.env.PORT || 1337;

http.createServer(function (req, res)
{
    // insert HTML file as path
    var filePath = path.join(__dirname, 'pointBuy.html');
    var stat = fs.statSync(filePath);

    res.writeHead(200,
        {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
        });

    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
}).listen(port);

console.log('Server running at http://localhost:' + port + '/');
