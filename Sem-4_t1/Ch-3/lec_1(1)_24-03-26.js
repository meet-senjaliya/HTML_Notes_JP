var http = require('http')
http.createServer(function(req, res) {
    // HERE handele Requset and response

    //    res.writeHead(200, { 'content-type': 'text/plain' });
    res.writeHead(200, { "content-type": "application/josn" });

    res.write('Hello Jadu')
    res.write("<h1> Hello Jadu </h1>");
    const data = {
        subject: "fsd-2",
        lecture: 4
    }
    res.end(JSON.stringify(data))

    // res.end('\n kam kar Taru');
}).listen(3120, () => {
    console.log('Sever is running at http://localhost:3120');
})