const exp = require('express')
const app = exp();
app.listen(9000, function (err) {
    if (!err)
        console.log('Server started succesfully');
    else
        console.log("Error:" + err);
})
app.get('/login', function (req, res) {
    let uid = req.query.uid;
    let pass = req.query.password
    if (uid && pass) {
        res.send(`UserId:${uid} Password:${pass}`)
    }
    else
        res.send("Data not found")
})