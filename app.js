var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("listening at http://%s%s", host, port); 
});
