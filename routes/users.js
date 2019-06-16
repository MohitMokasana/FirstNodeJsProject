var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/home', function(req, res, next) {
  res.send('respond with a home');
});

router.get('/about', function(req, res, next) {
  res.send('respond with a about');
});

module.exports = router;
