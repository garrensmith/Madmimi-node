var describe = require('Jody').describe,
    Madmimi = require('../lib/index.js');

var madmimi = "";
var email_options = {
      promotion_name:"Test Promotion",
      recipient:"Jimi Hendrix <jimi@electricladyland.com>",
      subject:"Test Promotion",
    from:"no-reply@guitargear.com",
    raw_html:"<html><head><title>Great promotion!</title></head><body>Cool guitar stuff[[tracking_beacon]]</body></html>"
};


describe("List").
  beforeEach( function () {
    madmimi = new Madmimi("fake@email.com", "fake-api-key");
  }).  
  it("Should add member to list", function (atEnd) {
      var requestOptions, httpBody; 
    
    madmimi.request = function (options, body) {
     requestOptions = options;
     httpBody = body;
    };

    madmimi.addToList('fake@mail.com','test',function () {});

    atEnd(function () {
      requestOptions.host.should().beEqual('api.madmimi.com');
      requestOptions.port.should().beEqual('80');
      requestOptions.path.should().beEqual('/audience_lists/test/add');
      requestOptions.method.should().beEqual('POST');

      httpBody.should().beEqual("username=fake%40email.com&api_key=fake-api-key&email=fake%40mail.com");
    })
  });

