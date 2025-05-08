var h = require("http");
var u = require("url");
var server = h.createServer(function (req, res) {
    var parts = u.parse(req.url, true)
    var nm = parts.query.name;
    res.writeHead(200, { "content-type": "text/html" })
    res.write("<h1> Welcome " + nm + "</h1>")
    res.end();
}).listen(9000, function () {
    console.log("Server started 900");
})