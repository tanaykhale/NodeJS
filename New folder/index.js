const exp = require('express')
const mysql = require('mysql2')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Arrow1@123',
    database: 'countryschema'
})

const app = exp();

app.listen(9000, (err) => {
    if (!err)
        console.log("Server created");
    else
        console.log('errror:' + err);
})

con.connect((err) => {
    if (!err)
        console.log('Database connected!!!');
    else
        console.log("errr" + err);
})

app.get('/getform', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/getcountries', (req, res) => {
    let query = 'select * from country';
    con.query(query, (err, data) => {
        if (!err)
            res.send(data);
    })
})