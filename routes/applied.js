var express = require('express');
var router = express.Router();

var database = require("../backendService.js");

/* POST insurance application. */
router.post('/', function(req, res, next) {
  var body = req.body;

  database.postMethod(body);

  // res.send(body);
  res.render('index', { title: 'Insurance Application Sent' });
});

module.exports = router;
