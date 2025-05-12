const exp = require('express')
const app = exp();
app.use(exp.static('images'))
app.use(exp.static('css'))
app.listen(9000, function (err) {
    if (!err)
        console.log('Server started succesfully');
    else
        console.log("Error:" + err);
})
app.use('/login', (req, res) => {
    res.sendFile(__dirname + '/form.html');
})