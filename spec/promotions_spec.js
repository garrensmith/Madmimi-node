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
  it("Should create http request for all promotions", function (atEnd) {
    var requestOptions; 
    
    madmimi.request = function (options, body) {
     requestOptions = options;
    };

    madmimi.promotions(function () {});

    atEnd(function () {
      requestOptions.host.should().beEqual('api.madmimi.com');
      requestOptions.port.should().beEqual('443');
      requestOptions.path.should().beEqual('/promotions.xml?username=fake%40email.com&api_key=fake-api-key');
      requestOptions.method.should().beEqual('GET');
    })
  }).  
  it('Should make xml useful', function (atEnd) {
    var requestOptions; 
    
    madmimi.request = function (options, body, cb) {
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

    };
  
    var id1,id2;

    madmimi.promotions(function (xmlData) {
      id1 = xmlData[0]['@'].id;
      id2 = xmlData[1]['@'].id;


    });

    atEnd(function () {
      id1.should().beEqual('902543');
      id2.should().beEqual('902664');

    })

    

    atEnd(function () {

    });
  });

