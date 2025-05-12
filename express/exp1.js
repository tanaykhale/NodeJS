const exp = require('express')
const app = exp();
app.listen(9000, function (err) {
    if (!err)
        console.log('Server started succesfully');
    else
        console.log("Error:" + err);
})
app.get('/greet', function (req, res) {
    res.send('<h1>Welcome to Web App</h1>');
})