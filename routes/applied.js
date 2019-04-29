var express = require('express');
var router = express.Router();

var _ = require("../backendService.js");

/* POST insurance application. */
router.post('/', function(req, res, next) {
  var body = req.body;

  _.postMethod(body, function(responseBody) {
      var responseJson = JSON.parse(responseBody);

      if (responseJson['code'] == '422') {
        res.render('index', { title: 'Invalid Fields', response: JSON.stringify(responseJson['details'])});
      } else {
        res.render('sent', { title: 'Insurance Application Sent' });
      }
  });

});

module.exports = router;
