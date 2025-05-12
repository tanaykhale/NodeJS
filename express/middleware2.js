const exp = require('express')
const app = exp();
app.listen(9000, function (err) {
    if (!err)
        console.log('Server started succesfully');
    else
        console.log("Error:" + err);
})
app.use((req, res) => {
    let str = req.url + " " + new Date();
    console.log(str);
    res.send(str);
})