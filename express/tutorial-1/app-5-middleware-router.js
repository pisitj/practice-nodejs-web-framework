// https://expressjs.com/en/guide/routing.html

const express = require('express');
const app = express();
const port = 3000;

const bookRouter = require('./routes/book');

const logMessage = (req, res, next) => {
  console.log('Middleware - logMessage');
  next();
}

app.use(logMessage);

app.get('/', (req, res) => {
  res.send({message: `Hello world !`});
});

app.use('/book', bookRouter);

// start server
app.listen(port, () => {
  console.log(`App listening at ${port}`);
});