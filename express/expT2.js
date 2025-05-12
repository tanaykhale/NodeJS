
let express = require("express");
let mysql = require("mysql2");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "userlogin"
})

app.post("/login", (req, res) => {
    let { name, pwd } = req.body;
    con.query("select * from login", (err, result) => {
        if (!err) {
            result.map((r) => {
                if (name == r.name && pwd == r.password) {
                    res.send(`<h1>Welcome ${name}</h1>`)
                } else {
                    res.sendFile(__dirname + "/login.html")
                }
            })
        }
    })

})

app.listen("9000", (err) => {
    if (!err) {
        console.log("Server is started at port 9000!");
        con.connect((err) => {
            if (!err) {
                console.log("Mysql is connected......");
            } else {
                console.log(err);

            }
        })
    } else {
        console.log(err);
    }
})