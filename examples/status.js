var Madmimi = require('../lib/index');

var madmimi = new Madmimi(process.env['email'],process.env["madmimi_api_key"], true);


madmimi.mailStatus(2861240550, function (msg) {
  console.log("status: " + msg);
});


