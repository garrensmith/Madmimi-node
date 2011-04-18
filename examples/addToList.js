var Madmimi = require('../lib/index');
    
var madmimi = new Madmimi(process.env['email'],process.env["madmimi_api_key"], true);

madmimi.addToList('shelley@actionlight.co.za', "Test", function (output) {
  console.log(output);
});


