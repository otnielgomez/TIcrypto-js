(function(e,t){"object"==typeof exports?module.exports=exports=t(require("/crypto-js/crypto-js/core"),require("/crypto-js/crypto-js/sha1"),require("/crypto-js/crypto-js/hmac")):"function"==typeof define&&define.amd?define(["/crypto-js/crypto-js/core","/crypto-js/crypto-js/sha1","/crypto-js/crypto-js/hmac"],t):t(e.CryptoJS)})(this,function(e){return function(){var t=e,r=t.lib,n=r.Base,i=r.WordArray,o=t.algo,a=o.MD5,s=o.EvpKDF=n.extend({cfg:n.extend({keySize:4,hasher:a,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var r=this.cfg,n=r.hasher.create(),o=i.create(),a=o.words,s=r.keySize,c=r.iterations;s>a.length;){f&&n.update(f);var f=n.update(e).finalize(t);n.reset();for(var h=1;c>h;h++)f=n.finalize(f),n.reset();o.concat(f)}return o.sigBytes=4*s,o}});t.EvpKDF=function(e,t,r){return s.create(r).compute(e,t)}}(),e.EvpKDF});