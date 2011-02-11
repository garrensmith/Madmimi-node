Madmimi Client
--------------

A simple client wrapper to be able to send mails using the mad mimi api [Developer api help](http://developer.madmimi.com)

Usage
-----

Using the library is quite straight forward, for a full example see the examples folder.

##Creating

    var describe('madmimi');
    var madmimi = new Madmimi("useremail","api-key");

##Send mail
    
    var email_options = {
      promotion_name:"Test Promotion",
      recipient:"Jimi Hendrix <jimi@electricladyland.com>",
      subject:"Test Promotion",
      from:"no-reply@guitargear.com",
      raw_html:"<html><head><title>Great promotion!</title></head><body>Cool guitar stuff[[tracking_beacon]]</body></html>"
    };

    madmimi.sendMail(email_options, function (transaction_id) {
      console.log("Email transaction is: " + transaction_id)
    });

##Email Status

    madmimi.mailStatus("email_id", function (msg) {
      console.log("status: " + msg);
    });


Todo
----

  * Add send to list
  * match ruby gem usage
