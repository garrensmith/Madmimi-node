Madmimi Client
--------------

A simple client wrapper to be able to send mails using the mad mimi api [Developer api help](http://developer.madmimi.com)

Changelog
---------
## V0.1.8
added addNewList method
## V0.1.7
Add urlencode to listnames
## V0.1.6
* Bug fixes - add locals/options to jade
## V0.1.3

* Support for [Jade](http://github.com/visionmedia/jade) (see examples)

## V0.1.1

* Get list of promotions as json
* Add user to list

## V0.1.0

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


Contributors
------------
* [Steve Cheung](https://github.com/oldcookie)
* [Raman Shalupau](https://github.com/ksaitor)

Copyright
---------

Copyright © 2014 Garren Smith. See LICENSE for details.

