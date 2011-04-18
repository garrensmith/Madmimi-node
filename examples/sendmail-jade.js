var Madmimi = require('../lib/index');

var madmimi = new Madmimi(process.env['email'],process.env["madmimi_api_key"], true);


var options = {
  promotion_name:"Test Promotion",
  recipient:"Garren <garren.smith@gmail.com>",
  subject:"Test Promotion",
  from:"no-reply@classroom7.com",
  jade: process.cwd() + "/examples/email.jade" 
};

madmimi.sendMail(options, function (msg) {
  console.log("email send, the id is: " + msg);
});

