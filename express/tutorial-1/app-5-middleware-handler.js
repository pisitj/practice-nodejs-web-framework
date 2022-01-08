// https://expressjs.com/en/guide/routing.html

const express = require('express');
const app = express();
const port = 3000;

var handler1 = function (req, res, next) {
  console.log('Handler 1 is processed.');
  next();
}

var handler2 = function (req, res, next) {
  console.log('Handler 2 is processed.');
  next();
}

var finalHandler = function (req, res) {
  res.send({message: 'Hello world - see log handler in terminal.'});
}

app.get('/example/1', [handler1, handler2, finalHandler]);

app.get('/example/2', handler1, handler2, finalHandler);

app.get('/example/3', [handler1, handler2], (req, res) => {
  res.send({message: 'Hello world - see log handler in terminal.'});
})

// start server
app.listen(port, () => {
  console.log(`App listening at ${port}`);
});