const http = require('http');

const server = http.createServer((req, res) => {
    console.log('istekte bulunuldu');
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    res.write("<b>merhaba</b> dünya");
    res.end();
});

server.listen(3000);