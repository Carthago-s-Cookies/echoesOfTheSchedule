const express = require("express");
const path = require("path");
const admin = require("firebase-admin");

const bodyParser = require("body-parser");
const { request } = require("express");
const { clearScreenDown } = require("readline");

const app = express();
const port = 5000;

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

require("dotenv").config({ path: __dirname + "/variables.env" });

const google = JSON.parse(process.env.GOOGLE);
const serviceAccount = google;


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();


app.get('/api/ping', function (req, res) {
  console.log('pong')
  res.json('pong')
})


app.get("/api/getAll", async (request, response) => {

 
  let events = [];
  
  db.collection("listOfStudents").get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      console.log(`Found document at ${documentSnapshot.ref.path}`);
    });
  });
    return response.json(events)
    
});


//обслуживание html
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port, () => console.log(`Listening on port ${port}`));
