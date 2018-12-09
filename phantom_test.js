var url = 'http://www.metro.tokyo.jp/'

// headlessブラウザを作る
var page = require('webpage').create();

page.viewportSize = { width: 1200, height: 600 };
page.clipRect = {
  top: 0,
  left: 0,
  width: 1200,
  height: 600
};

// 指定したURLを開く
page.open(url, function(status) {
  console.log("Status: " + status);
  if (status === "success") {
    page.render('./image_phantomjs.png');
  }
  phantom.exit();
  //
});
