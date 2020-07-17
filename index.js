var express = require('express')
var app = express()

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animales', {
  useUnifiedTopology: true,
}).then((client) => {
  console.log('Connected to Database')
  const db = client.db('animales')
  const mm = db
    .collection('mamiferos')
    .find()
    .toArray()
    .then((results) => {
      console.log(results)
    })
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
