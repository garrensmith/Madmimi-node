var describe = require('Jody').describe,
    Madmimi = require('../lib/index.js');

var madmimi = "";

describe("Mail Status").
  beforeEach(function () {
    madmimi = new Madmimi("fake@email.com", "fake-api-key");
  }).
  it("Should create correct html request", function (async) {
    
    madmimi.request = async(function (requestOptions, body) {
     requestOptions.host.should().beEqual('madmimi.com');
      requestOptions.port.should().beEqual('443');
      requestOptions.path.should().beEqual('/mailers/status/1234?username=fake%40email.com&api_key=fake-api-key');
      requestOptions.method.should().beEqual('GET');
    });

    madmimi.mailStatus('1234', function  () {});

   
  });
