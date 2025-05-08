let h = require('http')
let u = require('url')
let fs = require('fs')
h.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Server Created</h1>');
    let url = u.parse(req.url, true);
    if (url.pathname == '/favicon.ico')
        return;
    console.log(url.pathname);
    let str = url.pathname.substring(1,);
    fs.readFile(`${str}`, (err, data) => {
        if (!err) {
            let str = data.toString()
            console.log(data.toString());
            res.write(str);

            res.end();
        }
        else
            console.log('resource not found.........')
    })
    console.log('data reading');
}).listen(9000, function () { console.log("server created"); })