var express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/text', function (req, res) {
    res.json({text: 'hello'});
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});        