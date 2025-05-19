const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Arrow1@123',
    database: 'knowitdb',
})

con.connect((err) => {
    if (!err) console.log("Connected to SQL.....");
    else console.log('Failed..');
})

const app = express();
app.use(cors());
app.use(express.json());
app.listen(9000, () => {
    console.log("Server started!!!");
})

app.get('/emp/:no', (req, res) => {
    let query = 'select * from emp where deptno=' + req.params.no;
    con.query(query, (err, data) => {
        if (!err)
            res.send(data);
    })
})
app.get('/dept', (req, res) => {
    con.query('select * from dept', (err, data) => {
        if (!err)
            res.send(data);
    })
})

app.get('/cust', (req, res) => {

    con.query('select * from customer', (err, data) => {
        if (!err) {
            res.setHeader('content-type', 'application/json')
            res.send(data);
        }
    })
})
app.post('/cust', (req, res) => {

    let id = req.body.id;
    let name = req.body.name;
    let loc = req.body.loc;
    console.log(id + '  ' + name + '  ' + loc);
    let query = 'insert into customer values(?,?,?)';
    con.query(query, [id, name, loc], (err, data) => {
        if (!err)
            console.log('data inserted ....');
        res.send({ "msg": "data inserted" })
    })
})
app.put('/cust/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let newName = req.body.name;
    let newLoc = req.body.loc;
    console.log(id + " " + newName + " " + newLoc);
    let query = 'update customer set cname=?, loc=? where custid=?';
    con.query(query, [newName, newLoc, id], (err, data) => {
        if (!err) {
            if (data.affectedRows >= 1)
                res.send({ 'msg': 'Data updated!!' });
            else
                res.send({ 'msg': 'No data updated.' });
        } else {
            res.status(500).send({ 'msg': 'Error updating data.' });
            console.log(err);
        }
    })
})
app.delete('/cust/:val', (req, res) => {
    let val = req.params.val;
    console.log(val);
    let query = `delete from customer where custid=${val}`;
    con.query(query, (err, data) => {
        if (!err) {
            console.log('Data deleted !!!')
            res.send({ "msg": "data deleted" })
        }
    })
})

