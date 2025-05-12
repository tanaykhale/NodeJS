const exp = require('express')
const app = exp();
app.use(exp.static('images'))
app.listen(9000, function (err) {
    if (!err)
        console.log('Server started succesfully');
    else
        console.log("Error:" + err);
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/form.html');
})