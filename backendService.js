var stringify = require('json-stringify-safe');
var http = require('http');

// Insurance API back-end
var options = {
  host: "localhost",
  port: "8080",
  headers: {
      "Content-Type": "application/json"
  }
};

function postMethod(body) {
  options["method"] = "POST";
  options["path"] = "/customers";

  console.log(options);
  console.log(body)

  var request = http.request(options, function (response) {
    var responseString = "";

    response.on("data", function (data) {
        // save all the data from response
        responseString += data;
    });
    response.on("end", function () {
        // print to console when response ends
        console.log(responseString);
    });
  });

  request.write(stringify(body));

  request.end();
}

module.exports.postMethod = postMethod
