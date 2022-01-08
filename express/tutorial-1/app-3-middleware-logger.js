// https://expressjs.com/en/guide/writing-middleware.html

const express = require('express');
const app = express();
const port = 3000;

const myLogger = (req, res, next) => {
  console.log('Middleware - myLogger');
  next();
};

app.use(myLogger);

// index
app.get('/', (req, res) => {
  res.send({message: 'Hello World !'});
});

// start server
app.listen(port, () => {
  console.log(`App listening at ${port}`);
});