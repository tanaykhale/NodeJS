let h = require('http')
let u = require('url')
let fs = require('fs');

let count = 0;
fs.readFile('sample.txt', (err, data) => {
    if (!err) {
        count = Number(data);
    }
    else
        console.log('Data not found')
})
h.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    let url = u.parse(req.url, true);
    if (url.pathname == '/favicon.ico')
        return;
    count++;
    fs.writeFile('sample.txt', count.toString(), (err) => { });
    console.log(count);
    res.end();
}).listen(9000, () => { console.log('server started') })