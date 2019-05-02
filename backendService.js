var stringify = require('json-stringify-safe');
var https = require('https');
var fs = require('fs');

// Test agent for testing https connection with rest api
var agentOptions = {
  host: 'localhost',
  port: '8443',
  path: '/',
  rejectUnauthorized: false
};

var agent = new https.Agent(agentOptions);

var options = {
  host: "web",
  port: "8443",
  ca: fs.readFileSync('cert/keystore.p12'),
  requestCert: true,
  agent: agent,
  headers: {
      "Content-Type": "application/json"
  }
};

function postMethod(body, callback) {
  options["method"] = "POST";
  options["path"] = "/customers";

  // console.log(options);
  // console.log(body)

  var request = https.request(options, function(response) {
    var responseString = "";

    response.on("data", function (data) {
        // save all the data from response
        responseString += data;
    });
    response.on("end", function () {
        // print to console when response ends
        // console.log(responseString);
        return callback(responseString);
    });
  });

  request.write(stringify(body));

  request.end();
}

module.exports.postMethod = postMethod
