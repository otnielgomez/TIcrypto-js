(function(e,t){"object"==typeof exports?module.exports=exports=t(require("/crypto-js/crypto-js/core"),require("/crypto-js/crypto-js/cipher-core")):"function"==typeof define&&define.amd?define(["/crypto-js/crypto-js/core","/crypto-js/crypto-js/cipher-core"],t):t(e.CryptoJS)})(this,function(e){return e.pad.ZeroPadding={pad:function(e,t){var r=4*t;e.clamp(),e.sigBytes+=r-(e.sigBytes%r||r)},unpad:function(e){for(var t=e.words,r=e.sigBytes-1;!(255&t[r>>>2]>>>24-8*(r%4));)r--;e.sigBytes=r+1}},e.pad.ZeroPadding});