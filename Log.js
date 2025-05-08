let h = require('http')
let u = require('url')
let fs = require('fs');

h.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    let url = u.parse(req.url, true);
    if (url.pathname == '/favicon.ico')
        return;
    let path = url.pathname;
    let date = new Date();
    let str = `File path:${path} Time:${date.toString()}`;
    fs.appendFile('sample.txt', str, (err) => {
        if (err) {
            console.log('error..........')
        }
        else {
            console.log("File added successfully")
        }
    })
    res.write(str);
    console.log(str);
    res.end();
}).listen(9000, () => console.log('server started'))