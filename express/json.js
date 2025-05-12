const exp = require('express');
const mysql = require('mysql2')

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Arrow1@123",
    database: "knowitdb"
})

con.connect((err) => {
    if (!err) console.log("Connected to mysql");
    else console.log('Error: ' + err);
})

const app = exp();

app.listen(9000, (err) => {
    if (!err)
        console.log("Server Created...");
    else
        console.log("Error: " + err);
})

app.get('/getForm', (req, res) => {
    res.sendFile(__dirname + '/form1.html');
})

app.get('/getnames', (req, res) => {
    let { from } = req.query;
    let query = `select * from emp where ename != ?`;
    con.query(query, [from], (err, data) => {
        let str = [];
        data.forEach(val => {
            str.push(val.ENAME);
        })

        res.send(str);
    })
});
// app.delete('/getnames/:name',(req,res)=>{
//     let query='select * from emp where ename='
//    // con.query(query,[],)
// })