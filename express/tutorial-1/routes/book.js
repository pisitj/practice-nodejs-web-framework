// https://expressjs.com/en/guide/routing.html

const express = require('express');
const router = express.Router();

const logBook = (req, res, next) => {
  console.log('Middleware - logBook');
  next();
}

router.use(logBook);

router.get('/', (req, res) => {
  res.send({message: 'Get a Book'});
});

module.exports = router;