const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");
const { request } = require("express");

const app = express();
const port = 5000;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/ping', function (req, res) {
  console.log('pong')
  res.json('pong')
})



//обслуживание html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port, () => console.log(`Listening on port ${port}`));
