var Madmimi = require('../lib/index');
    
var madmimi = new Madmimi(process.env['email'],process.env["madmimi_api_key"], true);

madmimi.promotions(function (promotions) {  
  console.dir(promotions);  
});




