var Madmimi = require('./index');

var madmimi = new Madmimi("garren.smith@gmail.com","d152284b309e8bb771524e88d7772b9e");

var options = {
      promotion_name:"Test Promotion",
      recipient:"Garren Smith <garren.smith@gmail.com>",
      subject:"Test Promotion",
    //bcc:"admin@example.com",
    from:"no-reply@classroom7.com",
    raw_html:"<html><head><title>My great promotion!</title></head><body>Body stuff[[tracking_beacon]]</body></html>"
};

/*madmimi.sendMail(options, function (msg) {
  console.log("the id is: " + msg);
});*/

madmimi.mailStatus(2861240550, function (msg) {
  console.log("status: " + msg);
});
