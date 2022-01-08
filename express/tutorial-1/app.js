// http://expressjs.com/en/5x/api.html#req

const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json()) // for parsing application/json

app.get('/:name', (req, res) => {
  console.log("hostname >> ", req.hostname);
  console.log("original url >> ", req.originalUrl);
  console.log("url path >> ", req.path);
  console.log("query parameter >> ", req.query);
  console.log("path parameter >> ", req.params);
  console.log("request body >> ", req.body);

  console.log("header - Host >> ", req.get('Host'));
  console.log("header - Content-Type >> ", req.get('Content-Type'));
  console.log("header - Content-Length >> ", req.get('Content-Length'));

  res.send({message: `request successfully - log request detail in terminal.`});
});

// start server
app.listen(port, () => {
  console.log(`App listening at ${port}`);
});