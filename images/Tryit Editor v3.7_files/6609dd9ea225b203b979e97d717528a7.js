(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var n=this||self;function aa(a){a=a.s;const b=encodeURIComponent;let c="";a.platform&&(c+="&uap="+b(a.platform));a.platformVersion&&(c+="&uapv="+b(a.platformVersion));a.uaFullVersion&&(c+="&uafv="+b(a.uaFullVersion));a.architecture&&(c+="&uaa="+b(a.architecture));a.model&&(c+="&uam="+b(a.model));a.bitness&&(c+="&uab="+b(a.bitness));a.fullVersionList&&(c+="&uafvl="+b(a.fullVersionList.map(d=>b(d.brand)+";"+b(d.version)).join("|")));"undefined"!==typeof a.wow64&&(c+="&uaw="+Number(a.wow64));return c}
function p(a,b){return a.g?a.l.slice(0,a.g.index)+b+a.l.slice(a.g.index):a.l+b}function ba(a){let b="&act=1&ri=1";a.h&&a.s&&(b+=aa(a));return p(a,b)}function ca(a,b){return a.h&&a.i||a.o?1==b?a.h?a.i:p(a,"&dct=1"):2==b?p(a,"&ri=2"):p(a,"&ri=16"):a.l}
var da=class{constructor({url:a,R:b}){this.l=a;this.s=b;b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){let c;try{c=decodeURIComponent(this.g[1])}catch(d){c=null}this.i=c}}};function q(a){var b;a:{if(b=n.navigator)if(b=b.userAgent)break a;b=""}return-1!=b.indexOf(a)};var t=class{constructor(a,b){this.g=b===r?a:""}toString(){return this.g.toString()}};t.prototype.i=!0;t.prototype.h=function(){return this.g.toString()};function ea(a){return a instanceof t&&a.constructor===t?a.g:"type_error:SafeUrl"}var fa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,r={},ha=new t("about:invalid#zClosurez",r);function ia(a,b){a:{const c=a.length,d="string"===typeof a?a.split(""):a;for(let e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]};/*

 SPDX-License-Identifier: Apache-2.0
*/
class ka{constructor(a){this.Y=a}}function u(a){return new ka(b=>b.substr(0,a.length+1).toLowerCase()===a+":")}const la=new ka(a=>/^[^:]*([/?#]|$)/.test(a));var ma=u("http"),na=u("https"),oa=u("ftp"),pa=u("mailto"),qa=u("intent"),ra=u("market"),sa=u("itms"),ta=u("itms-appss");const ua=[u("data"),ma,na,pa,oa,la];function wa(a,b=ua){for(let c=0;c<b.length;++c){const d=b[c];if(d instanceof ka&&d.Y(a))return new t(a,r)}}function xa(a,b=ua){return wa(a,b)||ha};function ya(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}};function za(a,b){b instanceof t||b instanceof t||(b="object"==typeof b&&b.i?b.h():String(b),fa.test(b)||(b="about:invalid#zClosurez"),b=new t(b,r));a.href=ea(b)};var Aa={};function Ba(){return q("iPhone")&&!q("iPod")&&!q("iPad")};function Ca(a){Ca[" "](a);return a}Ca[" "]=function(){};var Da=Ba(),Ea=q("iPad");var Fa=Ba()||q("iPod"),Ga=q("iPad");var Ha={},Ia=null;
function Ja(a,b){void 0===b&&(b=0);if(!Ia){Ia={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ha[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ia[h]&&(Ia[h]=g)}}}b=Ha[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=g+l+k+h}g=0;h=d;switch(a.length-f){case 2:g=
a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")};var Ka="undefined"!==typeof Uint8Array,La={};let Ma;var Na=class{constructor(a){if(La!==La)throw Error("illegal external caller");this.T=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}};const w=Symbol(void 0);function Oa(a,b){Object.isFrozen(a)||(w?a[w]|=b:void 0!==a.v?a.v|=b:Object.defineProperties(a,{v:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}function Pa(a){let b;w?b=a[w]:b=a.v;return null==b?0:b}function x(a){Oa(a,1);return a}function y(a){return Array.isArray(a)?!!(Pa(a)&2):!1}function A(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Oa(a,2)}
function Qa(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?Oa(a,8):Object.isFrozen(a)||(w?a[w]&=-9:void 0!==a.v&&(a.v&=-9))};function Ra(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}let Sa;var B=Object.freeze(x([]));function Ta(a){if(y(a.j))throw Error("Cannot mutate an immutable Message");}function Ua(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}};function Va(a,b,c=!1){if(Array.isArray(a))return new b(a);if(c)return new b};function E(a){a=a.map;const b=[];for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function F(a,b){let c=b[1];const d=a.i;if(d){{let f=!1;var e=null!=c&&"object"===typeof c&&!(f=Array.isArray(c))&&Array.isArray(c.j)&&c.constructor!==Object?c:f?new d(c):new d}e!==c&&(b[1]=e,y(a.g)&&A(e.j));return e}return c}function $a(a,b){const c=a.i,d=new G(x([]),c);for(let e in a.map){const f=a.map[e];c?d.set(f[0],b(F(a,f))):d.set(f[0],f[1])}return d}
var G=class{constructor(a,b){this.g=a;this.i=b;this.map={};this.h=!1;this.size=0;for(a=0;a<this.g.length;a++){b=this.g[a];const c=b[0].toString(),d=this.map[c];this.map[c]=b;void 0===d&&this.size++}}m(){if(!this.h){const a=E(this);a.sort();for(let b=0;b<a.length;b++)this.g[b]=this.map[a[b]];a.length<this.g.length&&(this.g.length=a.length);this.h=!0;this.size=this.g.length}return this.g}entries(){const a=[],b=E(this);b.sort();for(let c=0;c<b.length;c++){const d=this.map[b[c]];a.push([d[0],F(this,d)])}return new ab(a)}keys(){const a=
[],b=E(this);b.sort();for(let c=0;c<b.length;c++)a.push(this.map[b[c]][0]);return new ab(a)}values(){const a=[],b=E(this);b.sort();for(let c=0;c<b.length;c++)a.push(F(this,this.map[b[c]]));return new ab(a)}forEach(a,b){const c=E(this);c.sort();for(let d=0;d<c.length;d++){const e=this.map[c[d]];a.call(b,F(this,e),e[0],this)}}set(a,b){if(y(this.g))throw Error("Cannot mutate an immutable Map");const c=a.toString(),d=this.map[c];d?d[1]=b:(a=[a,b],this.map[c]=a,this.g.push(a),this.h=!1,this.size++);return this}get(a){if(a=
this.map[a.toString()])return F(this,a)}has(a){return a.toString()in this.map}[Symbol.iterator](){return this.entries()}};class ab{constructor(a){this.h=0;this.g=a}next(){return this.h<this.g.length?{done:!1,value:this.g[this.h++]}:{done:!0,value:void 0}}[Symbol.iterator](){return this}};function bb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Ka&&null!=a&&a instanceof Uint8Array)return Ja(a);if(a instanceof Na){var b=a.T;b=null==b||"string"===typeof b?b:Ka&&b instanceof Uint8Array?Ja(b):null;return null==b?"":a.T=b}if(a instanceof G)return a.m()}}return a};function cb(a,b=db){return eb(a,b)}function fb(a,b){if(null!=a){if(Array.isArray(a))a=eb(a,b);else if(Ra(a)){const c={};for(let d in a)c[d]=fb(a[d],b);a=c}else a=b(a);return a}}function eb(a,b){const c=a.slice();for(let d=0;d<c.length;d++)c[d]=fb(c[d],b);Array.isArray(a)&&Pa(a)&1&&x(c);return c}function gb(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=bb(a);return Array.isArray(a)?cb(a,gb):a}function ib(a){return jb(a)}
function db(a){return Ka&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a instanceof G?$a(a,ib):a};function kb(a){return a.h||(a.h=a.j[a.i+a.u]={})}function H(a,b,c=!1){return-1===b?null:b>=a.i?a.h?a.h[b]:void 0:c&&a.h&&(c=a.h[b],null!=c)?c:a.j[b+a.u]}function I(a,b,c,d=!1,e=!1){e||Ta(a);b<a.i&&!d?a.j[b+a.u]=c:kb(a)[b]=c;return a}function lb(a,b,c=!0,d){let e=H(a,b,d);Array.isArray(e)||(e=B);if(y(a.j))c&&(A(e),Object.freeze(e));else if(e===B||y(e))e=x(e.slice()),I(a,b,e,d);return e}function J(a,b,c){a=H(a,b);return null==a?c:a}function N(a,b){a=H(a,b);a=null==a?a:!!a;return null==a?!1:a}
function O(a,b,c){a:{var d=H(a,b);if(null==d)d=[];else if(d.constructor===G){a=d;break a}const e=y(a.j),f=y(d);if(!e&&f){const g=d.slice();for(let h=0;h<d.length;h++)if(Array.isArray(g[h])){const l=g[h].slice();g[h]=l;c&&1<l.length&&Array.isArray(l[1])&&A(l[1])}d=g}c=new G(d,c);e&&!f&&A(c.g);I(a,b,c,!1,!0);a=c}return a}
function P(a,b,c,d,e=!1){if(-1===c)d=null;else{a.g||(a.g={});var f=a.g[c];if(f)d=f;else{var g=H(a,c,e);b=Va(g,b,d);void 0==b?d=f:(d&&b.m()!==g&&I(a,c,b.m(),e,!0),a.g[c]=b,y(a.j)&&A(b.j),d=b)}}if(null==d)return d;y(d.j)&&!y(a.j)&&(d=d.H(Aa),I(a,c,d.m(),e),a.g[c]=d);return d}
function nb(a,b,c,d,e=!0){a.g||(a.g={});var f=y(a.j);let g=a.g[c];d=lb(a,c,!0,d);const h=f||y(d);if(!g){g=[];f=f||h;for(let k=0;k<d.length;k++){var l=d[k];f=f||y(l);l=Va(l,b);void 0!==l&&(g.push(l),h&&A(l.j))}a.g[c]=g;Qa(d,!f)}b=h||e;e=y(g);b&&!e&&(Object.isFrozen(g)&&(a.g[c]=g=g.slice()),A(g),Object.freeze(g));!b&&e&&(a.g[c]=g=g.slice());return g}
function ob(a,b,c,d=!1){const e=y(a.j);b=nb(a,b,c,d,e);a=lb(a,c,d);if(!(c=e)&&(c=a)){if(!Array.isArray(a))throw Error("cannot check mutability state of non-array");c=!(Pa(a)&8)}if(c){for(c=0;c<b.length;c++)(d=b[c])&&y(d.j)&&!e&&(b[c]=b[c].H(Aa),a[c]=b[c].m());Qa(a,!0)}return b}function pb(a,b,c){Ta(a);let d;if(null!=c){d=x([]);let e=!1;for(let f=0;f<c.length;f++)d[f]=c[f].m(),e=e||y(d[f]);a.g||(a.g={});a.g[b]=c;Qa(d,!e)}else a.g&&(a.g[b]=void 0),d=B;return I(a,b,d)}
function Q(a,b){return J(a,b,"")};function jb(a){var b=cb(a.m());qb=b;b=new a.constructor(b);qb=null;rb(b,a);return b}function sb(a){Sa=!0;try{return JSON.stringify(a.toJSON(),tb)}finally{Sa=!1}}
var ub=class{constructor(a,b,c){a||(a=qb);qb=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.u=(d?0:-1)-(this.constructor.g||0);this.g=void 0;this.j=a;a:{d=this.j.length;a=d-1;if(d&&(d=this.j[a],Ra(d))){this.i=a-this.u;this.h=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.u),this.h=void 0):this.i=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.u,(d=this.j[a])?Array.isArray(d)&&x(d):this.j[a]=B;else{d=kb(this);let e=d[a];e?Array.isArray(e)&&x(e):d[a]=B}}toJSON(){const a=
this.m();return Sa?a:cb(a,gb)}m(){return this.j}};ub.prototype.toString=function(){return this.m().toString()};function tb(a,b){return bb(b)}function rb(a,b){b.C&&(a.C=b.C.slice());const c=b.g;if(c){b=b.h;for(let f in c){const g=c[f];if(g){var d=!(!b||!b[f]),e=+f;if(Array.isArray(g)){if(g.length)for(d=ob(a,g[0].constructor,e,d),e=0;e<Math.min(d.length,g.length);e++)rb(d[e],g[e])}else(d=P(a,g.constructor,e,void 0,d))&&rb(d,g)}}}}let qb;var vb=class extends ub{H(){return this}};Object.defineProperties(vb,{[Symbol.hasInstance]:Ua(()=>{throw Error("Cannot perform instanceof checks for MutableMessage");})});const wb=a=>a;function xb(a,b,c,d,e,f){(a=a.g&&a.g[c])?Array.isArray(a)?(e=f.A?x(a.slice()):a,pb(b,c,e)):(Ta(b),b.g||(b.g={}),e=null!=a?a.m():a,b.g[c]=a,I(b,c,e)):(Ka&&d instanceof Uint8Array?e=d.length?new Na(new Uint8Array(d)):Ma||(Ma=new Na(null)):d instanceof G?e=$a(d,wb):(Array.isArray(d)&&(e?A(d):Array.isArray(d)&&Pa(d)&1&&f.A&&(d=d.slice())),e=d),I(b,c,e))};class R extends vb{H(a){if(a!==Aa)throw Error("requires a valid immutable API token");if(y(this.j)){({A:a}={A:!0});a={A:a};const c=y(this.j);if(c&&!a.A)throw Error("copyRepeatedFields must be true for frozen messages");const d=new this.constructor;this.C&&(d.C=this.C.slice());const e=this.m();for(let f=0;f<e.length;f++){const g=e[f];if(f===e.length-1&&Ra(g))for(b in g){const h=+b;Number.isNaN(h)?kb(d)[b]=g[b]:xb(this,d,h,g[b],c,a)}else xb(this,d,f-this.u,g,c,a)}var b=d}else b=this;return b}}
Object.defineProperties(R,{[Symbol.hasInstance]:Ua(Object[Symbol.hasInstance])});var yb=class extends R{constructor(a){super(a)}},zb=class extends R{constructor(a){super(a)}};var Bb=class extends R{constructor(a){super(a,-1,Ab)}},Cb=class extends R{constructor(a){super(a)}B(){return Q(this,3)}P(a){I(this,5,a)}},Db=class extends R{constructor(a){super(a)}B(){return Q(this,1)}P(a){I(this,2,a)}},Eb=class extends R{constructor(a){super(a)}},Ab=[6,7];var Gb=class extends R{constructor(a){super(a,-1,Fb)}},Fb=[17];var Hb=class extends R{constructor(a){super(a)}};var Ib={capture:!0},Jb={passive:!0},Kb=ya(function(){let a=!1;try{const b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(b){}return a});function Lb(a){return a?a.passive&&Kb()?a:a.capture||!1:!1}function S(a,b,c,d){a.addEventListener&&a.addEventListener(b,c,Lb(d))};function Mb(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)};var Nb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ob(a){var b=a.indexOf("#");0>b&&(b=a.length);var c=a.indexOf("?");if(0>c||c>b){c=b;var d=""}else d=a.substring(c+1,b);return[a.slice(0,c),d,a.slice(b)]}function Pb(a,b){return b?a?a+"&"+b:b:a}function Qb(a,b){if(!b)return a;a=Ob(a);a[1]=Pb(a[1],b);return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function Rb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Rb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}function Sb(a){var b=[],c;for(c in a)Rb(c,a[c],b);return b.join("&")}function Tb(){var a=Mb();a=null!=a?"="+encodeURIComponent(String(a)):"";return Qb("https://pagead2.googlesyndication.com/pagead/gen_204","zx"+a)}var Ub=/#|$/;
function Vb(a,b){a=Ob(a);var c=a[1],d=[];c&&c.split("&").forEach(function(e){var f=e.indexOf("=");b.hasOwnProperty(0<=f?e.slice(0,f):e)||d.push(e)});a[1]=Pb(d.join("&"),Sb(b));return a[0]+(a[1]?"?"+a[1]:"")+a[2]};function Wb(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}let Xb=[];const Yb=()=>{const a=Xb;Xb=[];for(const b of a)try{b()}catch(c){}};
var Zb=a=>{Xb.push(a);1==Xb.length&&(window.Promise?Promise.resolve().then(Yb):window.setImmediate?setImmediate(Yb):setTimeout(Yb,0))},$b=a=>{var b=T;"complete"===b.readyState||"interactive"===b.readyState?Zb(a):b.addEventListener("DOMContentLoaded",a)},ac=a=>{var b=window;"complete"===b.document.readyState?Zb(a):b.addEventListener("load",a)};function bc(a=document){return a.createElement("img")};function gc(a,b,c=null,d=!1){hc(a,b,c,d)}function hc(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);const e=bc(a.document);if(c||d){const f=g=>{c&&c(g);if(d){g=a.google_image_requests;const h=Array.prototype.indexOf.call(g,e,void 0);0<=h&&Array.prototype.splice.call(g,h,1)}e.removeEventListener&&e.removeEventListener("load",f,Lb());e.removeEventListener&&e.removeEventListener("error",f,Lb())};S(e,"load",f);S(e,"error",f)}e.src=b;a.google_image_requests.push(e)}
function ic(a,b){var c;if(c=a.navigator)c=a.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&a.navigator.sendBeacon?a.navigator.sendBeacon(b):gc(a,b,void 0,!1)};let jc=0;function kc(a){return(a=lc(a,document.currentScript))&&a.getAttribute("data-jc-version")||"unknown"}function lc(a,b=null){return b&&b.getAttribute("data-jc")===String(a)?b:document.querySelector(`[${"data-jc"}="${a}"]`)}
function mc(a){if(!(.01<Math.random())){const b=lc(a,document.currentScript);a=`https://${b&&"true"===b.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${a}&version=${kc(a)}&sample=${.01}`;ic(window,a)}};var T=document,U=window;function nc(a){return ea(a)};const oc=[ma,na,pa,oa,la,ra,sa,qa,ta];function pc(a,b){if(a instanceof t)return a;const c=xa(a,oc);c===ha&&b(a);return new t(nc(c),r)}var qc=a=>{var b=`${"http:"===U.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return c=>{c=Sb({id:"unsafeurl",ctx:a,url:c});c=Qb(b,c);navigator.sendBeacon&&navigator.sendBeacon(c,"")}};var rc=a=>{var b=T;try{return b.querySelectorAll("*["+a+"]")}catch(c){return[]}};class sc{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};const tc=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");var uc=class{constructor(a,b){this.g=a;this.h=b}},vc=class{constructor(a,b){this.url=a;this.O=!!b;this.depth=null}};function wc(a,b){const c={};c[a]=b;return[c]}function xc(a,b,c,d,e){const f=[];Wb(a,function(g,h){(g=yc(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)}
function yc(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(yc(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(xc(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function zc(a){let b=1;for(const c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1}
function Ac(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;let d=zc(a)-c.length;if(0>d)return"";a.g.sort(function(f,g){return f-g});c=null;let e="";for(let f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let l=0;l<h.length;l++){if(!d){c=null==c?g:c;break}let k=xc(h[l],a.i,",$");if(k){k=e+k;if(d>=k.length){d-=k.length;b+=k;e=a.i;break}c=null==c?g:c}}}a="";null!=c&&(a=e+"trn="+c);return b+a}class Bc{constructor(){this.i="&";this.h={};this.l=0;this.g=[]}};function Cc(){var a=Dc,b=window.google_srt;0<=b&&1>=b&&(a.g=b)}function Ec(a,b,c,d,e){if((d?a.g:Math.random())<(e||.01))try{let f;c instanceof Bc?f=c:(f=new Bc,Wb(c,(h,l)=>{var k=f;const m=k.l++;h=wc(l,h);k.g.push(m);k.h[m]=h}));const g=Ac(f,a.h,"/pagead/gen_204?id="+b+"&");g&&gc(n,g)}catch(f){}}class Fc{constructor(){this.h="http:"===U.location.protocol?"http:":"https:";this.g=Math.random()}};let Gc=null;var Hc=()=>{const a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()},Ic=()=>{const a=n.performance;return a&&a.now?a.now():null};class Jc{constructor(a,b){var c=Ic()||Hc();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.taskId=this.slotId=void 0}};const V=n.performance,Kc=!!(V&&V.mark&&V.measure&&V.clearMarks),W=ya(()=>{var a;if(a=Kc){var b;if(null===Gc){Gc="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(Gc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=Gc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Lc(a){a&&V&&W()&&(V.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),V.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class Mc{constructor(){var a=window;this.h=[];this.i=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=W()||(null!=b?b:1>Math.random())}start(a,b){if(!this.g)return null;a=new Jc(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;V&&W()&&V.mark(b);return a}end(a){if(this.g&&"number"===typeof a.value){a.duration=(Ic()||Hc())-a.value;var b=`goog_${a.label}_${a.uniqueId}_end`;V&&W()&&V.mark(b);!this.g||2048<
this.h.length||this.h.push(a)}}};function Nc(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);let d;for(;a!=d;)d=a,a=a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"),"$1");b=a.replace(RegExp("\n *","g"),"\n")}catch(d){b=c}}return b}
function Oc(a,b,c){let d,e;try{a.g&&a.g.g?(e=a.g.start(b.toString(),3),d=c(),a.g.end(e)):d=c()}catch(f){c=!0;try{Lc(e),c=a.s(b,new sc(f,{message:Nc(f)}),void 0,void 0)}catch(g){a.o(217,g)}if(c){let g,h;null==(g=window.console)||null==(h=g.error)||h.call(g,f)}else throw f;}return d}function Pc(a,b){var c=Qc;return(...d)=>Oc(c,a,()=>b.apply(void 0,d))}
class Rc{constructor(a=null){this.i=Dc;this.h=null;this.s=this.o;this.g=a;this.l=!1}pinger(){return this.i}o(a,b,c,d,e){e=e||"jserror";let f;try{const K=new Bc;var g=K;g.g.push(1);g.h[1]=wc("context",a);b.error&&b.meta&&b.id||(b=new sc(b,{message:Nc(b)}));if(b.msg){g=K;var h=b.msg.substring(0,512);g.g.push(2);g.h[2]=wc("msg",h)}var l=b.meta||{};b=l;if(this.h)try{this.h(b)}catch(C){}if(d)try{d(b)}catch(C){}d=K;l=[l];d.g.push(3);d.h[3]=l;d=n;l=[];let va;b=null;do{var k=d;try{var m;if(m=!!k&&null!=k.location.href)b:{try{Ca(k.foo);
m=!0;break b}catch(C){}m=!1}var z=m}catch(C){z=!1}z?(va=k.location.href,b=k.document&&k.document.referrer||null):(va=b,b=null);l.push(new vc(va||""));try{d=k.parent}catch(C){d=null}}while(d&&k!=d);for(let C=0,cc=l.length-1;C<=cc;++C)l[C].depth=cc-C;k=n;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==l.length-1)for(z=1;z<l.length;++z){var D=l[z];D.url||(D.url=k.location.ancestorOrigins[z-1]||"",D.O=!0)}var v=l;let Wa=new vc(n.location.href,!1);k=null;const Xa=v.length-
1;for(D=Xa;0<=D;--D){var L=v[D];!k&&tc.test(L.url)&&(k=L);if(L.url&&!L.O){Wa=L;break}}L=null;const ld=v.length&&v[Xa].url;0!=Wa.depth&&ld&&(L=v[Xa]);f=new uc(Wa,L);if(f.h){v=K;var M=f.h.url||"";v.g.push(4);v.h[4]=wc("top",M)}var Ya={url:f.g.url||""};if(f.g.url){var Za=f.g.url.match(Nb),X=Za[1],dc=Za[3],ec=Za[4];M="";X&&(M+=X+":");dc&&(M+="//",M+=dc,ec&&(M+=":"+ec));var fc=M}else fc="";X=K;Ya=[Ya,{url:fc}];X.g.push(5);X.h[5]=Ya;Ec(this.i,e,K,this.l,c)}catch(K){try{Ec(this.i,e,{context:"ecmserr",rctx:a,
msg:Nc(K),url:f&&f.g.url},this.l,c)}catch(va){}}return!0}};var Sc=a=>{var b="D";if(a.D&&a.hasOwnProperty(b))return a.D;b=new a;return a.D=b};class Tc{constructor(){this.g=()=>[]}};let Dc,Qc;const Y=new Mc;var Uc=()=>{window.google_measure_js_timing||(Y.g=!1,Y.h!=Y.i.google_js_reporting_queue&&(W()&&Array.prototype.forEach.call(Y.h,Lc,void 0),Y.h.length=0))};(a=>{Dc=null!=a?a:new Fc;"number"!==typeof window.google_srt&&(window.google_srt=Math.random());Cc();Qc=new Rc(Y);Qc.h=b=>{const c=jc;0!==c&&(b.jc=String(c),b.shv=kc(c))};Qc.l=!0;"complete"==window.document.readyState?Uc():Y.g&&S(window,"load",()=>{Uc()})})();
var Vc=(a,b)=>Pc(a,b),Wc=a=>{const b=Sc(Tc).g();!a.eid&&b.length&&(a.eid=b.toString());Ec(Dc,"gdn-asoch",a,!0)};var Xc=(a,b)=>{b=Q(a,2)||b;if(!b)return"";if(N(a,13))return b;const c=/[?&]adurl=([^&]+)/.exec(b);if(!c)return b;const d=[b.slice(0,c.index+1)];O(a,4).forEach((e,f)=>{d.push(encodeURIComponent(f)+"="+encodeURIComponent(e)+"&")});d.push(b.slice(c.index+1));return d.join("")},Yc=(a,b=[])=>{b=0<b.length?b:rc("data-asoch-targets");a=O(a,1,Bb);const c=[];for(let h=0;h<b.length;++h){var d=b[h].getAttribute("data-asoch-targets"),e=d.split(","),f=!0;for(let l of e)if(!a.has(l)){f=!1;break}if(f){f=a.get(e[0]);
for(d=1;d<e.length;++d){var g=a.get(e[d]);f=jb(f).toJSON();g=g.toJSON();const l=Math.max(f.length,g.length);for(let k=0;k<l;++k)null==f[k]&&(f[k]=g[k]);f=new Bb(f)}e=O(f,4);null!=H(f,5)&&e.set("nb",J(f,5,0).toString());c.push({element:b[h],data:f})}else Wc({type:1,data:d})}return c},$c=(a,b,c,d)=>{c=Xc(b,c);if(0<c.length){var e=c;var f=e.search(Ub),g;b:{for(g=0;0<=(g=e.indexOf("ase",g))&&g<f;){var h=e.charCodeAt(g-1);if(38==h||63==h)if(h=e.charCodeAt(g+3),!h||61==h||38==h||35==h)break b;g+=4}g=-1}if(0>
g)e=null;else{h=e.indexOf("&",g);if(0>h||h>f)h=f;e=decodeURIComponent(e.slice(g+4,-1!==h?h:0).replace(/\+/g," "))}"1"==e&&(e=609===d?4:"attributionReporting"in U?6:5,f=Zc(c,"asr","1"),a.setAttribute("attributionsrc",f),c=Zc(c,"nis",e.toString()));za(a,pc(c,qc(d)));a.target||(a.target=null!=H(b,11)?Q(b,11):"_top")}},ad=a=>{for(const b of a)if(a=b.data,"A"==b.element.tagName&&!N(a,1)){const c=b.element;$c(c,a,c.href,609)}},bd=a=>{const b=n.oneAfmaInstance;if(b)for(const c of a)if((a=c.data)&&Array.isArray(H(a,
8))){const d=Q(P(a,Eb,8),4);if(d){b.fetchAppStoreOverlay(d,void 0,Q(P(a,Eb,8),6));break}}},cd=(a,b=500)=>{const c=[],d=[];for(var e of a)(a=e.data)&&Array.isArray(H(a,12))&&(d.push(P(a,Db,12)),c.push(P(a,Db,12).B()));e=(f,g)=>{if(g)for(const h of d)g[h.B()]&&h.P(!0)};a=n.oneAfmaInstance;for(const f of c){let g;null==(g=a)||g.canOpenAndroidApp(f,e,()=>{},b)}},ed=(a,b,c,d,e)=>{if(a||!b||!Array.isArray(H(b,12)))return!1;const f=P(b,Db,12).B();a="";if(0<ob(b,Cb,7).length)for(const g of ob(b,Cb,7))a+=
Q(g,2)+" "+g.B()+" ";if(N(P(b,Db,12),2))return dd({id:"gmob-apps",event:"och-open-android-app-before-click",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e}),d.click(c),d.openAndroidApp(f),setTimeout(()=>{var g={id:"gmob-apps",event:"och-open-android-app",appId:f,isDeepLinkPath:!1,exptIds:e};Z(Vb(Tb(),g))},1E3),!0;dd({id:"gmob-apps",event:"och-open-android-app-validated-false",deepLinks:a,appId:f,isDeepLinkPath:!1,exptIds:e});return!1},gd=(a,b,c,d,e,f,g)=>{if(!c||!Array.isArray(H(c,8)))return!1;const h=
P(c,Eb,8);let l=Q(h,2);O(c,10).forEach((k,m)=>{var z=l;m=encodeURIComponent(m);const D=encodeURIComponent(k);k=new RegExp("[?&]"+m+"=([^&]+)");const v=k.exec(z);console.log(v);m=m+"="+D;l=v?z.replace(k,v[0].charAt(0)+m):z.replace("?","?"+m+"&")});dd({id:"gmob-apps",event:"och-try-u2-redirect",appId:Q(h,4)||"",isIos:a,isDeepLinkPath:!1,exptIds:f});fd(c)&&N(c,15)&&!/[?&]label=/.test(d)&&(d=Zc(d,"label","deep_link_fallback"));a=k=>e.openStoreOverlay(k,void 0,Q(h,6));c=k=>ic(U,k);return e.redirectForStoreU2({clickUrl:d,
trackingUrl:Q(h,3),finalUrl:l,pingFunc:g?c:e.click,openFunc:(null==b?0:N(b,1))?a:e.openIntentOrNativeApp})},id=(a,b,c,d,e,f,g,h,l=!1)=>{const k=N(e,15),m=!/[?&]dsh=1(&|$)/.test(f)&&/[?&]ae=1(&|$)/.test(f);!a||!b||k&&m||(f=l?hd(f):hd(f,g.click));f&&f.startsWith("intent:")?(g.openIntentOrNativeApp(f),a={id:"gmob-apps",event:"och-open-intent-or-native-app",appId:Array.isArray(H(e,8))&&Q(P(e,Eb,8),4)||"",isIos:d,isDeepLinkPath:!1,exptIds:h},Z(Vb(Tb(),a))):c?d?g.openBrowser(f):g.openChromeCustomTab(f):
g.openSystemBrowser(f,{useFirstPackage:!0,useRunningProcess:!0})},hd=(a,b=null)=>{if(null!==b){const c=new da({url:a});if(c.h&&c.i||c.o)return b(ba(c)),ca(c,1)}else return{R:b}={},b=new da({url:a,R:b}),b.h&&b.i||b.o?navigator.sendBeacon?navigator.sendBeacon(ba(b),"")?ca(b,1):ca(b,2):ca(b,0):a;return a},dd=a=>{Z(Vb(Tb(),a))},Z=(a,b=!0)=>{b&&U.fetch?U.fetch(a,{method:"GET",keepalive:!0,mode:"no-cors"}).then(c=>{c.ok||gc(U,a)}):gc(U,a)},Zc=(a,b,c)=>{b=encodeURIComponent(String(b));c=encodeURIComponent(String(c));
return a.replace("?","?"+b+"="+c+"&")},fd=a=>{for(const b of ob(a,Cb,7))if(3===J(b,1,0)&&Q(b,2))return!0;return!1};var jd=new class{constructor(a,b=!1){this.g=a;this.defaultValue=b}}(434462125,!0);var kd=class{constructor(){const a={};this.g=()=>{var b=jd.g,c=jd.defaultValue;return null!=a[b]?a[b]:c}}};function md(a,b){return I(a,2,b)}function nd(a,b){return I(a,3,b)}function od(a,b){return I(a,4,b)}function pd(a,b){return I(a,5,b)}function qd(a,b){return I(a,9,b)}function rd(a,b){return pb(a,10,b)}function sd(a,b){return I(a,11,b)}function td(a,b){return I(a,1,b)}var vd=class extends R{constructor(){super(void 0,-1,ud)}},wd=class extends R{constructor(){super(void 0)}},ud=[10,6];const xd="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function yd(a){let b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function zd(a){let b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;const d=yd(a);if(d.uach_promise)return d.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(xd).then(e=>{null!=d.uach||(d.uach=e);return e});return d.uach_promise=a}
function Ad(a){let b;return sd(rd(qd(pd(od(nd(md(td(new vd,a.platform||""),a.platformVersion||""),a.architecture||""),a.model||""),a.uaFullVersion||""),a.bitness||""),(null==(b=a.fullVersionList)?void 0:b.map(c=>{var d=new wd;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}
function Bd(){var a=window;if(Sc(kd).g()){let e,f;return null!=(f=null==(e=zd(a))?void 0:e.then(g=>Ad(g)))?f:null}let b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;let d;return null!=(d=a.navigator.userAgentData.getHighEntropyValues(xd).then(e=>Ad(e)))?d:null};function Cd(a){for(const b of a)if("A"==b.element.tagName){a=b.element;const c=b.data;null==H(c,2)&&I(c,2,a.href)}}function Dd(a,b){return ia(a,c=>c.element===b)}function Ed(a){$b(Vc(556,()=>{new Fd(a||{})}))}
function Gd(a,b,c,d){if(!N(d,13)){var e=c.href;var f=/[?&]adurl=([^&]+)/.exec(e);e=f?[e.slice(0,f.index),e.slice(f.index)]:[e,""];for(za(c,pc(e[0],qc(557)));!c.id;)if(f="asoch-id-"+Mb(),!T.getElementById(f)){c.id=f;break}f=c.id;"function"===typeof window.xy&&window.xy(b,c,T.body);"function"===typeof window.mb&&window.mb(c);"function"===typeof window.bgz&&window.bgz(f);"function"===typeof window.ja&&window.ja(f,d?J(d,5,0):0);a.i&&"function"===typeof window.ss&&(a.M?window.ss(f,1,a.i):window.ss(a.i,
1));0<e.length&&(a=0<a.I.length?c.href+"&uach="+encodeURIComponent(a.I)+e[1]:c.href+e[1],za(c,pc(a,qc(557))))}}async function Hd(a,b,c,d){let e="";var f=n.oneAfmaInstance;if(f&&(e=await f.appendClickSignalsAsync(c.href)||"",a.J&&(f=await f.getNativeClickMeta()))){if(f.customClickGestureEligible)return;e=Zc(e,"nas",f.encodedNas)}Id(a,b,c,d,e)}
function Id(a,b,c,d,e){const f=N(a.h,2),g=f&&300<Date.now()-a.L,h=n.oneAfmaInstance;h?(b.preventDefault?b.preventDefault():b.returnValue=!1,c=h.logScionEventAndAddParam(e),ed(a.o,d,c,h,a.s)||gd(a.o,a.l,d,c,h,a.s,a.U)||id(f,g,a.W,a.o,d,c,h,a.s,a.V)):(d=window,d.pawsig&&"function"===typeof d.pawsig.clk?d.pawsig.clk(c):g&&(d=hd(c.href),d!==c.href&&za(c,pc(d,qc(599)))));g&&(a.L=Date.now());mc(a.K)}
var Fd=class{constructor(a){this.o=Fa||Da||Ga||Ea;var b=rc("data-asoch-meta");if(1!==b.length)Wc({type:2,data:b.length});else{this.K=70;this.h=new Gb(JSON.parse(b[0].getAttribute("data-asoch-meta"))||[]);this.S=a["extra-meta"]?new Gb(JSON.parse(a["extra-meta"])):null;this.J="true"===a["is-fsn"];this.l=a["ios-store-overlay-config"]?new Hb(JSON.parse(a["ios-store-overlay-config"])):null;this.W="true"===a["use-cct-over-browser"];this.s=a["expt-ids"]||"";this.U="true"===a["send-ac-click-ping-by-js"];
this.N="true"===a["correct-redirect-url-for-och-15-click"];this.V="true"===a["send-click-ping-by-js-in-och"];this.I="";b=Bd();null!=b&&b.then(d=>{d=sb(d);for(var e=[],f=0,g=0;g<d.length;g++){var h=d.charCodeAt(g);255<h&&(e[f++]=h&255,h>>=8);e[f++]=h}this.I=Ja(e,3)});this.g=Yc(this.h);this.X=Number(a["deeplink-and-android-app-validation-timeout"])||500;this.L=-Infinity;this.i=Q(this.h,5)||"";this.M=N(this.h,11);this.S&&(this.M=N(this.S,11));this.G=this.F=null;N(this.h,3)||(ad(this.g),I(this.h,3,!0));
Cd(this.g);a=n.oneAfmaInstance;!this.o&&a&&cd(this.g,this.X);var c;if(a&&(null==(c=this.l)?0:N(c,2)))switch(c=()=>{const d=J(this.l,4,0);0<d?n.setTimeout(()=>{bd(this.g)},d):bd(this.g)},J(this.l,3,0)){case 1:a.runOnOnShowEvent(c);break;case 2:ac(c);break;default:bd(this.g)}S(T,"click",Vc(557,d=>{a:if(!d.defaultPrevented||this.F===d){for(var e,f,g=d.target;(!e||!f)&&g;){f||"A"!=g.tagName||(f=g);var h=g.hasAttribute("data-asoch-targets"),l=g.hasAttribute("data-asoch-fixed-value");if(!e)if(l)e=new Bb(JSON.parse(g.getAttribute("data-asoch-fixed-value"))||
[]);else if("A"==g.tagName||h)if(h=h&&"true"===g.getAttribute("data-asoch-is-dynamic")?Yc(this.h,[g]):this.g,h=Dd(h,g))e=h.data;g=g.parentElement}if(g=e&&!N(e,1)){if(d.defaultPrevented){var k=f,m=e;if(this.F===d&&this.G){e=new yb(this.G);f=Q(m,9);g="";switch(J(e,4,1)){case 2:if(J(e,2,0))g="blocked_fast_click";else if(Q(e,1)||Q(e,7))g="blocked_border_click";break;case 3:g=T,g=g.getElementById?g.getElementById("common_15click_anchor"):null,"function"===typeof window.copfcChm&&g&&(m=jb(m),I(m,5,12),
O(m,4).set("nb",(12).toString()),(h=Dd(this.g,g))?h.data=m:this.g.push({element:g,data:m}),!this.N&&k&&(Gd(this,d,k,m),I(m,2,k.href)),window.copfcChm(d,Xc(m,g.href),null,Array.isArray(H(e,10))?sb(P(e,zb,10)):null),this.N&&Gd(this,d,g,m)),g="onepointfiveclick_first_click"}f&&g&&Z(f+"&label="+g,!1);mc(this.K)}break a}h=e;for(m of lb(h,6))Z(m)}if(f&&g){e=g?e:null;(m=Dd(this.g,f))?m=m.data:(m=new Bb,I(m,2,f.href),I(m,11,f.target||"_top"),this.g.push({element:f,data:m}));$c(f,e||m,Q(m,2),557);Gd(this,
d,f,e);for(k of lb(this.h,17))m=k,g=T.body,h={},"function"===typeof window.CustomEvent?l=new CustomEvent(m,h):(l=document.createEvent("CustomEvent"),l.initCustomEvent(m,!!h.bubbles,!!h.cancelable,h.detail)),g.dispatchEvent(l);N(this.h,16)||this.J?Hd(this,d,f,e):(k="",(m=n.oneAfmaInstance)&&(k=m.appendClickSignals(f.href)),Id(this,d,f,e,k))}}}),Ib);this.i&&"function"===typeof window.ss&&S(T.body,"mouseover",Vc(626,()=>{window.ss(this.i,0)}),Jb);c=window;c.googqscp&&"function"===typeof c.googqscp.registerCallback&&
c.googqscp.registerCallback((d,e)=>{this.F=d;this.G=e})}}};var Jd=Vc(555,a=>Ed(a));jc=70;const Kd=lc(70,document.currentScript);if(null==Kd)throw Error("JSC not found 70");const Ld={},Md=Kd.attributes;for(let a=Md.length-1;0<=a;a--){const b=Md[a].name;0===b.indexOf("data-jcp-")&&(Ld[b.substring(9)]=Md[a].value)}Jd(Ld);}).call(this);
