var http = require('http')
http.createServer(function(req, res) {
    res.writeHead(200, { "content-type": "text/html" });

    res.write(req.url + '<br>')
    res.end("url fetched")

    // res.end('\n kam kar Taru');
}).listen(8280, () => {
    console.log('Sever is running at http://localhost:8280');
})