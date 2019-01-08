const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    if (req.method ==='GET') {
        if (req.url === '/')
            res.write('index sayfasındasınız');
        else if (req.url === '/iletisim')
            res.write('iletisim sayfasındasınız');
        else
            res.write('sayfa bulunamadı');
    }

    res.end();
});

server.listen(3000);