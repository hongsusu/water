/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d1a2c1af0fd4e732295cc97402d8446a"
  },
  {
    "url": "affix.html",
    "revision": "5c443790e34f11841a9edc0237813d31"
  },
  {
    "url": "assets/css/0.styles.ea9d624a.css",
    "revision": "d71e510c270f487271941df71c1cfe29"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6cba8b87.js",
    "revision": "c3b113003951bd99172f71ac95e1684b"
  },
  {
    "url": "assets/js/10.2d0b625f.js",
    "revision": "c1c429a50c09a4d4753ddbc03fbe2365"
  },
  {
    "url": "assets/js/11.1804a7a7.js",
    "revision": "203b030f157127e0b0a67c0ba4bf14a0"
  },
  {
    "url": "assets/js/12.9cab7652.js",
    "revision": "0f91584bdcbd5809ce949f978f4c08a0"
  },
  {
    "url": "assets/js/13.58612e73.js",
    "revision": "71f0d72290ddb1b3419341a1348df1a1"
  },
  {
    "url": "assets/js/14.94fc1474.js",
    "revision": "70152a10926f24c9bec93aead3cd182c"
  },
  {
    "url": "assets/js/15.7d187147.js",
    "revision": "aadd413dbd3ec6d73a1ad35a46050742"
  },
  {
    "url": "assets/js/16.9504acac.js",
    "revision": "5e5c1b73307de4f117dab3f22fc65270"
  },
  {
    "url": "assets/js/17.26da54bf.js",
    "revision": "2f313a6a50c58c28ac32d15853517a14"
  },
  {
    "url": "assets/js/18.bfe8c94c.js",
    "revision": "d7a61ec89d1f8685c33d9be23b148480"
  },
  {
    "url": "assets/js/19.457330ef.js",
    "revision": "e3fe41899df5b21417329cd553b33345"
  },
  {
    "url": "assets/js/2.9853381a.js",
    "revision": "266933134c9d0309115bf6cf40afaba0"
  },
  {
    "url": "assets/js/20.0a428fe5.js",
    "revision": "2f63ea44377843c8f302af762b4743ea"
  },
  {
    "url": "assets/js/21.b966e1fb.js",
    "revision": "431e3417111fdee1e234ab8efe92e5e8"
  },
  {
    "url": "assets/js/22.ebb5d182.js",
    "revision": "ebea4a6f9c9242b2585b365873e35bd2"
  },
  {
    "url": "assets/js/23.4044b1a5.js",
    "revision": "8cc8d7be05bc5a79257b456d222533f0"
  },
  {
    "url": "assets/js/24.b61de9e4.js",
    "revision": "f0b0eabfbb2d9daf19341a4b5ef6cf52"
  },
  {
    "url": "assets/js/25.8c759fea.js",
    "revision": "48fbfdee4ca77d3375212c690394b7f5"
  },
  {
    "url": "assets/js/26.ef1c71a8.js",
    "revision": "fb1dc493ba4352779cabb576db507b7f"
  },
  {
    "url": "assets/js/27.973b2141.js",
    "revision": "5831abcd86959ed678d9ab9554edf2be"
  },
  {
    "url": "assets/js/28.b2c7524f.js",
    "revision": "e7ebae4caa13283ed19841e516396426"
  },
  {
    "url": "assets/js/29.69d54aa9.js",
    "revision": "d28748ce550498dbba98b503b1ec772c"
  },
  {
    "url": "assets/js/30.6403bedc.js",
    "revision": "96ebdfb0ca5e94787f74dd0ca59601b6"
  },
  {
    "url": "assets/js/31.8e26c5a0.js",
    "revision": "efba54bf9f3b5da1c9354adcdd9910f5"
  },
  {
    "url": "assets/js/32.a216f31a.js",
    "revision": "68648ab7f9640bc2c033c2719080395b"
  },
  {
    "url": "assets/js/33.4f3e892d.js",
    "revision": "bdbc70b1e535e7d21a03ad835ca3839e"
  },
  {
    "url": "assets/js/34.6f385a43.js",
    "revision": "4eb212962a3c4053cd0803a926abfa2c"
  },
  {
    "url": "assets/js/35.047f3ba6.js",
    "revision": "331db477f19058db235039cfe6bafd74"
  },
  {
    "url": "assets/js/4.b013de3f.js",
    "revision": "ff4cef4d4a051ab9951edbdda764428c"
  },
  {
    "url": "assets/js/5.b7f37b14.js",
    "revision": "523fb2aa815da7eea74240e442e90cf5"
  },
  {
    "url": "assets/js/6.e296770c.js",
    "revision": "92be986e4237a52011c95f2416614082"
  },
  {
    "url": "assets/js/7.8ca4991a.js",
    "revision": "585e0cbe2d9246ca3198a8a1be2e02d1"
  },
  {
    "url": "assets/js/8.5cd59aa9.js",
    "revision": "c0833da0ff8e352d660f9c1402d4b3ab"
  },
  {
    "url": "assets/js/9.273d5767.js",
    "revision": "82e00549c9c2aaa14d6cf3b2eae49e26"
  },
  {
    "url": "assets/js/app.9706a5b7.js",
    "revision": "7fa91d2c25f8f4d94a58166f1da5b2fb"
  },
  {
    "url": "badge.html",
    "revision": "21c06580fe8644298ce806653afcd2bb"
  },
  {
    "url": "breadcrumb.html",
    "revision": "94001f2cae66a1aa915ee9631776876f"
  },
  {
    "url": "button.html",
    "revision": "8d75605132db2152ea92c8bdc45e35f3"
  },
  {
    "url": "cascader.html",
    "revision": "1a35978ced01dbc6104694c125dc00ac"
  },
  {
    "url": "checkbox.html",
    "revision": "6c0355bf84ed8f496a20df00c693299b"
  },
  {
    "url": "grid.html",
    "revision": "d241862bf7293b6c7862d4736e61b946"
  },
  {
    "url": "icon.html",
    "revision": "1edbf4e91186260e5b10cebfc2ddff8e"
  },
  {
    "url": "index.html",
    "revision": "f136f4ab32b143daec2d0d71160e9a07"
  },
  {
    "url": "input.html",
    "revision": "a91d9bcf8ca1223387c8fb8b4d3fba52"
  },
  {
    "url": "link.html",
    "revision": "3370550515b95e82a755e47b74447492"
  },
  {
    "url": "loadbar.html",
    "revision": "b0787b5c50be820d97b821f227e57086"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "message.html",
    "revision": "f72df0291f32876567b493be1a9d2316"
  },
  {
    "url": "modal.html",
    "revision": "1cfda90d0e23324158996fd66ce29b33"
  },
  {
    "url": "notification.html",
    "revision": "8190d92bd49d605090dce613db317888"
  },
  {
    "url": "number.html",
    "revision": "2a2bd5634abe5b0d8ddc8725a5c58879"
  },
  {
    "url": "page.html",
    "revision": "27721a7f21fc7a08e482280832d3e287"
  },
  {
    "url": "popconfirm.html",
    "revision": "9fea07d7780af0e21ab2da6feea6cfbf"
  },
  {
    "url": "popover.html",
    "revision": "818f6e2fb4fbd57e35abfca76111cfac"
  },
  {
    "url": "radio.html",
    "revision": "fd506ec82a894e200781aea774137411"
  },
  {
    "url": "rate.html",
    "revision": "9be59c0ff11b8f83fa5df50b77ba7143"
  },
  {
    "url": "select.html",
    "revision": "89094b70a92beb4d911bb0d2ee36d387"
  },
  {
    "url": "spin.html",
    "revision": "4783e6c65b71ef03610bc494c6e0a475"
  },
  {
    "url": "switch.html",
    "revision": "43ecc448adfbaba6e2fbc17b5a268987"
  },
  {
    "url": "table.html",
    "revision": "94044667097686a1fed35d143f12d1ce"
  },
  {
    "url": "tag.html",
    "revision": "cbdafc14b4a6caa2626fdb8f2f8c27bb"
  },
  {
    "url": "tooltip.html",
    "revision": "f87a26d60c5fd3ef8457f19bb166ed62"
  },
  {
    "url": "tree.html",
    "revision": "23eb1b693d0d5236660cb4be3fffbe17"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
