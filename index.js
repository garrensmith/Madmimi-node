var https = require('https'),
    querystring = require('querystring');



var Madmimi = module.exports = function (username, api_key) {

  if (!username || !api_key) {
    throw("need to specify username and api key")
  }

  var self = this;
  
  self.username = username,
  self.api_key = api_key;


  self.sendMail = function (options, cb) {
    /*params = {
      username:  "garren.smith@gmail.com",
      api_key:"d152284b309e8bb771524e88d7772b9e",
      promotion_name:"Test Promotion",
      recipient:"Garren Smith <garren.smith@gmail.com>",
      subject:"Test Promotion",
    //bcc:"admin@example.com",
    from:"no-reply@classroom7.com",
    raw_html:"<html><head><title>My great promotion!</title></head><body>Body stuff[[tracking_beacon]]</body></html>"
    }*/

    options.username = self.username;
    options.api_key = self.api_key;


    optionsParameterized = querystring.stringify(options, "&", "=");



    var request_options = {
      host: 'api.madmimi.com',
      port: '443',
      path: '/mailer',
      method: 'POST',
      headers: {'content-type': 'application/x-www-form-urlencoded'}
    };

    var req = https.request(request_options, function(res) {
      res.body = "";

      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));

      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        res.body += chunk;
      });

      res.on('end', function () {
        console.log('end');        
        cb(res.body);
      });
    });

    req.write(optionsParameterized);
    req.end();

  };

  self.mailStatus = function(id, cb) {
    options = {
       username: self.username,
      api_key: self.api_key
     };

    optionsParameterized = querystring.stringify(options, "&", "=");
    transactionPath =  '/mailers/status/'+ id +'?' + optionsParameterized;

     var request_options = {
      host: 'madmimi.com',
      port: '443',
      path: transactionPath,
      method: 'GET',
      //headers: {'content-type': 'application/x-www-form-urlencoded'}
    };
    
     

    var req = https.request(request_options, function(res) {
      res.body = "";

      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));

      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        res.body += chunk;
      });

      res.on('end', function () {
        console.log('end');        
        cb(res.body);
      });
    });
  
    req.end();


  };

  return self;

};


