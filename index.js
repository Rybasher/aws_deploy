const express = require("express");
const app = express();
const port = process.env.PORT  || 3000;
const config  = require('config');
console.log(config);


app.get('/', (req, res) => {
    res.send('cicd Sample v1')
})

app.get('/status', (req, res) => {
    console.log(res.statusCode);
    res.send('ok')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})