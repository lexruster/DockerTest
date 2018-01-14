var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var message = "Express!"
  res.render('index', { title: message });
});

module.exports = router;
