// https://expressjs.com/en/guide/writing-middleware.html

const express = require('express');
const app = express();
const port = 3000;

const requestTime = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};

app.use(requestTime);

// index
app.get('/', (req, res) => {
  res.send({message: `Hello world @ ${req.requestTime}`});
});

// start server
app.listen(port, () => {
  console.log(`App listening at ${port}`);
});