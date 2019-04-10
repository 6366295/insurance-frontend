var express = require('express');
var router = express.Router();

var http = require('http');

/* GET users listing. */
router.post('/', function(req, res, next) {
  // form
  var post = req.body;

  var options = {
    host: "localhost",
    port: "8080",
    path: "/customers",
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
  };

  var req2 = http.request(options, function (res) {
    var responseString = "";

    res.on("data", function (data) {
        responseString += data;
        // save all the data from response
    });
    res.on("end", function () {
        console.log(responseString);
        // print to console when response ends
    });
  });

  req2.write("TEST");

  req2.end()

  res.send(post);
  // console.error(name);
});

module.exports = router;
