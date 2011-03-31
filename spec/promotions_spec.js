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


describe("Promotions").
  beforeEach( function () {
    madmimi = new Madmimi("fake@email.com", "fake-api-key");
  }).  
  it("Should create http request for all promotions", function (async) {
    var requestOptions; 
    
    madmimi.request = async(function (requestOptions, body) {
     requestOptions.host.should().beEqual('api.madmimi.com');
      requestOptions.port.should().beEqual('443');
      requestOptions.path.should().beEqual('/promotions.xml?username=fake%40email.com&api_key=fake-api-key');
      requestOptions.method.should().beEqual('GET');
    });

    madmimi.promotions(function () {});
  }).  
  it('Should make xml useful', function (async) {
    var requestOptions; 
    
    madmimi.request = async(function (requestOptions, body, cb) {
      var xmlResponse = ["<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
        ,'<promotions>'
        ,'<promotion thumbnail="/promotion_thumbnails/small/902543.jpg" updated_at="Mon Feb 14 09:59:05 -0500 2011" hidden="false" mimio="f85cd" name="Test Promotion" id="902543">'
        ,'  <mailing subject="Test Promotion" id="22176456">'
        ,'    <started_send>Thu Feb 10 07:53:11 -0500 2011</started_send>'
        ,'    <finished_send>Thu Feb 10 07:53:14 -0500 2011</finished_send>'
        ,'  </mailing>'
        ,'  <mailing subject="Test Promotion" id="22180601">'
        ,'    <started_send></started_send>'
        ,'    <finished_send></finished_send>'
        ,'  </mailing>'
        ,'</promotion>'
        ,'<promotion thumbnail="/promotion_thumbnails/small/902664.jpg" updated_at="Thu Feb 10 08:44:41 -0500 2011" hidden="false" mimio="806cd" name="Welcome to Acme Widgets" id="902664">'
        ,'</promotion>'
        ,'</promotions>'].join('\n');
      

      cb(xmlResponse);

    });
  

    madmimi.promotions(async(function (xmlData) {
      xmlData[0]['@'].id.should().beEqual('902543');
      xmlData[1]['@'].id.should().beEqual('902664');
    }));

});

