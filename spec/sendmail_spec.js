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


describe("Send mail").
  beforeEach( function () {
    madmimi = new Madmimi("fake@email.com", "fake-api-key");
  }).  
  it("Should create http request for api", function (async) {
    
    madmimi.request = async(function (requestOptions, body) {
     requestOptions.host.should().beEqual('api.madmimi.com');
      requestOptions.port.should().beEqual('443');
      requestOptions.path.should().beEqual('/mailer');
      requestOptions.method.should().beEqual('POST');
    });

    madmimi.sendMail(email_options, function () {});

}).
  it("Should format email parameters", function (atEnd) {
    
   madmimi.request = async(function (requestOptions, body) {
     body.should().beEqual('promotion_name=Test%20Promotion&recipient=Jimi%20Hendrix%20%3Cjimi%40electricladyland.com%3E&subject=Test%20Promotion&from=no-reply%40guitargear.com&raw_html=%3Chtml%3E%3Chead%3E%3Ctitle%3EGreat%20promotion!%3C%2Ftitle%3E%3C%2Fhead%3E%3Cbody%3ECool%20guitar%20stuff%5B%5Btracking_beacon%5D%5D%3C%2Fbody%3E%3C%2Fhtml%3E&username=fake%40email.com&api_key=fake-api-key'); 

    });

    madmimi.sendMail(email_options, function () {});

  });
