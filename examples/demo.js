var Madmimi = require('../lib/index');
    
var madmimi = new Madmimi(process.env['email'],process.env["madmimi_api_key"], true);

/*var options = {
  promotion_name:"Test Promotion",
  recipient:"Jimi Hendrix <jimi@electricladyland.com>",
  subject:"Test Promotion",
  from:"no-reply@guitargear.com",
  raw_html:"<html><head><title>Great promotion!</title></head><body>Cool guitar stuff[[tracking_beacon]]</body></html>"
  };

  madmimi.sendMail(options, function (msg) {
  console.log("email send, the id is: " + msg);
  });

  madmimi.mailStatus(2861240550, function (msg) {
  console.log("status: " + msg);
  });*/


madmimi.promotions(function (promotions) {  
  console.dir(promotions);  
});

/*madmimi.addToList('shelley@actionlight.co.za', "Test", function (output) {
  console.log(output);
});*/
