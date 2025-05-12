let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
    let { name, pwd } = req.body;
    if (name == "object" && pwd == "knowit") {
        res.send("Login Successfull!")
    } else {
        res.sendFile(__dirname + "/login.html")
    }

})

app.listen("9000", (err) => {
    if (!err) {
        console.log("Server is started at port 9000!");
    } else {
        console.log(err);
    }
})