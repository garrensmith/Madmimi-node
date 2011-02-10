var https = require('https'),
    sys = require('sys'),
    querystring = require('querystring');
    params = {
      username:"garren.smith@gmail.com",
        api_key:"d152284b309e8bb771524e88d7772b9e",
        promotion_name:"Test Promotion",
  recipient:"Garren Smith <garren.smith@gmail.com>",
  subject:"Test Promotion",
  //bcc:"admin@example.com",
  from:"no-reply@classroom7.com",
  raw_html:"<html><head><title>My great promotion!</title></head><body>Body stuff[[tracking_beacon]]</body></html>"
    },
   
    body = querystring.stringify(params, "&", "=");

/*
username=YourMadMimiEmailAddress
  api_key=YourMadMimiApiKey
  promotion_name=Welcome to Acme Widgets
  recipient=Dave Hoover <dave@example.com>
  subject=Welcome to Acme Widgets
  bcc=admin@example.com
  from=no-reply@example.com
  raw_html=yourhtml
 
 *
 */ 


console.log("my query: " + body); 

var options = {
  host: 'api.madmimi.com',
  port: '443',
  path: '/mailer',
  method: 'POST',
  headers: {'content-type': 'application/x-www-form-urlencoded'}
};

var req = https.request(options, function(res) {
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
      });
});
  
  req.write(body);
  req.end();


