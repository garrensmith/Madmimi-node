Madmimi Client
--------------

A simple client wrapper to be able to send mails using the mad mimi api [Developer api help](http://developer.madmimi.com)

Changelog
---------

## V1.1

* Get list of promotions as json
* Add user to list

## V1.0

* Send Email
* Get status of transaction email

Usage
-----

Using the library is quite straight forward, for a full example see the examples folder.

## Installation

    npm install madmimi-node

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


Copyright
---------

Copyright © 2011 Garren Smith. See LICENSE for details.

