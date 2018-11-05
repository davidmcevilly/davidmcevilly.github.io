const express = require('express'),
app = express(),
port = process.env.PORT || 8080;

app.use(express.static(__dirname));
app.listen(port);
console.log('Server running at http://127.0.0.1:8080/');