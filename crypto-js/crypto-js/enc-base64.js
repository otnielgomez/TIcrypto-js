(function(t,n){"object"==typeof exports?module.exports=exports=n(require("/crypto-js/crypto-js/core")):"function"==typeof define&&define.amd?define(["/crypto-js/crypto-js/core"],n):n(t.CryptoJS)})(this,function(t){return function(){var n=t,r=n.lib,e=r.WordArray,i=n.enc;i.Base64={stringify:function(t){var n=t.words,r=t.sigBytes,e=this._map;t.clamp();for(var i=[],o=0;r>o;o+=3)for(var s=255&n[o>>>2]>>>24-8*(o%4),a=255&n[o+1>>>2]>>>24-8*((o+1)%4),f=255&n[o+2>>>2]>>>24-8*((o+2)%4),c=s<<16|a<<8|f,u=0;4>u&&r>o+.75*u;u++)i.push(e.charAt(63&c>>>6*(3-u)));var h=e.charAt(64);if(h)for(;i.length%4;)i.push(h);return i.join("")},parse:function(t){var n=t.length,r=this._map,i=r.charAt(64);if(i){var o=t.indexOf(i);-1!=o&&(n=o)}for(var s=[],a=0,f=0;n>f;f++)if(f%4){var c=r.indexOf(t.charAt(f-1))<<2*(f%4),u=r.indexOf(t.charAt(f))>>>6-2*(f%4);s[a>>>2]|=(c|u)<<24-8*(a%4),a++}return e.create(s,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64});