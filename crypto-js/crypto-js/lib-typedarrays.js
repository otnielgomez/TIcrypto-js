(function(t,n){"object"==typeof exports?module.exports=exports=n(require("/crypto-js/crypto-js/core")):"function"==typeof define&&define.amd?define(["/crypto-js/crypto-js/core"],n):n(t.CryptoJS)})(this,function(t){return function(){if("function"==typeof ArrayBuffer){var n=t,e=n.lib,r=e.WordArray,i=r.init,o=r.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var n=t.byteLength,e=[],r=0;n>r;r++)e[r>>>2]|=t[r]<<24-8*(r%4);i.call(this,e,n)}else i.apply(this,arguments)};o.prototype=r}}(),t.lib.WordArray});