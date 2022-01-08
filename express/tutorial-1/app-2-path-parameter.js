// https://expressjs.com/en/guide/routing.html

const express = require('express');
const app = express();
const port = 3000;

// index
app.get('/', (req, res) => {
  res.send({message: 'Hello World !'});
});

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }
app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params);
});

// Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }
app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params);
});

// Route path: /plantae/:genus.:species
// Request URL: http://localhost:3000/plantae/Prunus.persica
// req.params: { "genus": "Prunus", "species": "persica" }
app.get('/plantae/:genus.:species', (req, res) => {
  res.send(req.params);
});

// Response
// res.download()
// res.end()
// res.json()
// res.jsonp()
// res.redirect()
// res.send()
// res.sendFile()
// res.sendStatus()

// start server
app.listen(port, () => {
  console.log(`App listening at ${port}`);
});