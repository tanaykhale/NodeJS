const exp = require('express')
const app = exp();
app.listen(9000, function (err) {
    if (!err)
        console.log('Server started succesfully');
    else
        console.log("Error:" + err);
})
// app.use((req, res) => {
//     res.status(404).send("Invalid URLllll");
// })
app.all('/*splat', (req, res) => { res.send("Invalid url") })