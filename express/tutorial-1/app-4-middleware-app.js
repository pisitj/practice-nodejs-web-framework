// https://expressjs.com/en/guide/using-middleware.html

const express = require('express');
const app = express();
const port = 3000;

const requestTime = (req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
};

const logRequestTime = (req, res, next) => {
  if (req.requestTime) {
    console.log(req.requestTime);
  }
  else {
    console.log('no request timestamp !')
  }
  next();
}

app.use(requestTime);
app.use('/log', logRequestTime);

app.get('/', (req, res) => {
  res.send({message: `Hello world @ ${req.requestTime}`});
});

app.get('/log', (req, res) => {
  res.send({message: `Hello world @ ${req.requestTime} - also log to terminal.`});
});

// start server
app.listen(port, () => {
  console.log(`App listening at ${port}`);
});