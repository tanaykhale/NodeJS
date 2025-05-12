const exp = require('express')
const app = exp();
const mysql = require('mysql2')
app.listen(9001, function (err) {
    if (!err)
        console.log('Server started succesfully');
    else
        console.log("Error:" + err);
})
const con = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'Arrow1@123',
    database: 'knowitdb',
})
con.connect((err) => {
    if (!err)
        console.log("Connection completed!!!!!");
    else
        console.log("Failed%%%%%%%%%%%%%%")
})
app.get('/emp', (req, res) => {
    con.query('select * from emp', (err, data) => {
        let str = '<table border=1>'
        for (let i = 0; i < data.length; i++) {
            str += '<tr>'
            str += '<td>'
            str += data[i].EMPNO;
            str += '</td>'
            str += '<td>'
            str += data[i].ENAME
            str += '</td>'
            str += '<td>'
            str += data[i].JOB
            str += '</td>'
            str += '<td>'
            str += data[i].MGR
            str += '</td>'
            str += '</tr>'
        }
        str += '</table>'
        res.send(str);
    })
})