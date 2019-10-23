window.Q=function(t,i,n){"use strict";function e(t,i,n){if(t[er]()){var s=t._f3||t[sr]();if(s){s=s._jr||s;for(var h=0,r=s.length;r>h;h++)if(i[hr](n,s[h])===!1||e(s[h],i,n)===!1)return!1;return!0}}}
    function s(t){if(!t[er]())return t instanceof _W?t:null;for(var i,n=t._f3._jr,e=n[rr]-1;e>=0;){if(i=n[e],i=s(i))return i;e--}
        return null}
    function h(t,i,n,e){return e?r(t,i,n):a(t,i,n)}
    function r(t,i,n){t=t._jr||t;for(var e,s=0,h=t.length;h>s;s++)if(e=t[s],e.hasChildren()&&!r(e.children,i,n)||i.call(n,e)===!1)return!1;return!0}
    function a(t,i,n){t=t._jr||t;for(var e,s=0,h=t[rr];h>s;s++)if(e=t[s],i[hr](n,e)===!1||e[er]()&&!a(e.children,i,n))return!1;return!0}
    function o(t,i,n,e){return e?f(t,i,n):u(t,i,n)}
    function f(t,i,n){t=t._jr||t;for(var e,s=t.length,h=s-1;h>=0;h--)if(e=t[h],e.hasChildren()&&!f(e[ar],i,n)||i.call(n,e)===!1)return!1;return!0}
    function u(t,i,n){t=t._jr||t;for(var e,s=t.length,h=s-1;h>=0;h--)if(e=t[h],i[hr](n,e)===!1||e.hasChildren()&&!u(e.children,i,n))return!1;return!0}
    function c(t,i,n){for(var e,s=(t._jr||t)[or](0);s[rr];){e=s[0],s=s[fr](1);var h=i.call(n,e);if(h===!1)return!1;if(e[er]()){var r=e.children;r=r._jr||r,s=s[ur](r)}}
        return!0}
    function _(t,i,n){for(var e,s=(t._jr||t).slice(0);s[rr];){e=s[s[rr]-1],s=s.splice(0,s[rr]-1);var h=i[hr](n,e);if(h===!1)return!1;if(e[er]()){var r=e[ar];r=r._jr||r,s=s[ur](r)}}
        return!0}
    function d(t,i){function n(t,n){for(var e=t[rr],s=n[rr],h=e+s,r=new Array(h),a=0,o=0,f=0;h>f;)r[f++]=a===e?n[o++]:o===s||i(t[a],n[o])<=0?t[a++]:n[o++];return r}
        function e(t){var i=t[rr],s=Math[cr](i/2);return 1>=i?t:n(e(t.slice(0,s)),e(t.slice(s)))}
        return e(t)}
    function l(t,i,n,e){t instanceof UY&&(t=t._jr);for(var s=0,h=(t._jr||t)[rr];h>s;s++){var r=i[hr](n,t[s],s,e);if(r===!1)return!1}
        return!0}
    function v(t,i,n){for(var e=t instanceof UY,s=t._jr||t,h=0,r=s[rr];r>h;h++){var a=s[h];i.call(n,a)&&(e?t[_r](a):t[fr](h,1),h--,r--)}}
    function b(t,i,n,e){t instanceof UY&&(t=t._jr);for(var s=(t._jr||t)[rr]-1;s>=0;s--){var h=i.call(n,t[s],s,e);if(h===!1)return!1}
        return!0}
    function y(t){if(t[dr]instanceof Function)return t[dr](!0);var i,n=[];return l(t,function(t){i=t&&t[dr]instanceof Function?t[dr]():t,n.push(i)},this),n}
    function g(t,i,e){e===n||0>e?t[lr](i):t[fr](e,0,i)}
    function p(t,i){var n=t[vr](i);return 0>n||n>=t[rr]?!1:t.splice(n,1)}
    function m(t,i){var n=!1;return l(t,function(t){return i==t?(n=!0,!1):void 0}),n}
    function x(t,i){var n=t;for(var e in i)if(i.__lookupGetter__){var s=i.__lookupGetter__(e),h=i.__lookupSetter__(e);s||h?(s&&n.__defineGetter__(e,s),h&&n.__defineSetter__(e,h)):n[e]=i[e]}else n[e]=i[e];return n}
    function E(t,i,n){if(!(t instanceof Function))throw new Error("subclass must be type of Function");var e=null;br==typeof i&&(e=i,i=t,t=function(){i.apply(this,arguments)});var s=t.prototype,h=function(){};return h[yr]=i[yr],t[yr]=new h,t[gr]=i.prototype,t[gr].constructor=i,x(t[yr],s),e&&x(t[yr],e),n&&x(t[yr],n),t[yr][pr]=t,t}
    function w(t,i,n){return T(t,i,"constructor",n)}
    function T(t,i,n,e){var s=i.superclass;if(s){var h=s[n];return h?h[mr](t,e):void 0}}
    function k(t,i,n,e){if("constructor"==n)return M(t,i,e);if(i[xr]instanceof Function){var s=i[xr].prototype[n];return s instanceof Function?s.apply(t,e):void 0}}
    function M(t,i,n){return i[xr]instanceof Function?i[xr][mr](t,n):void 0}
    function O(t,i){return t[xr]=i,t.prototype=Object[Er](i[yr],{super_:{value:i,enumerable:!1},constructor:{value:t,enumerable:!1}}),t}
    function S(t,i,n){if(!(t instanceof Function)&&t instanceof Object){i=t[wr];var e;return t.hasOwnProperty("constructor")?(e=t.constructor,delete t.constructor):e=i?function(){i[mr](this,arguments)}:function(){},S(e,i,t)}
        if(i&&!(i instanceof Function)&&i instanceof Object)return S(t,i[wr],i);if(i&&O(t,i),n){var s=t.prototype;for(var h in n)s[h]=n[h]}
        return t}
    function I(t,i,e,s,h){if(s)return void Object.defineProperty(t,i,{value:e,enumerable:!0});var r={configurable:!0,enumerable:!0},a=Tr+i;e!==n&&(t[a]=e),r.get=function(){return this[a]},r.set=function(t){var n=this[a];if(n==t)return!1;var e=new cq(this,i,t,n);return this.beforeEvent(e)?(this[a]=t,h&&h[hr](this,t,n),this.onEvent(e),!0):!1},Object[kr](t,i,r)}
    function P(t,i){for(var n=0,e=i[rr];e>n;n++){var s=i[n];I(t,s.name||s,s[Mr]||s[Or],s[Sr],s[Ir])}}
    function A(t,i,n){return i instanceof Object?t=t.bind(i):i&&!n&&(n=parseInt(i)),i&&!n&&(n=parseInt(i)),n?setTimeout(t,n):setTimeout(t)}
    function C(i,n){return n&&(i=i[Pr](n)),t[Ar](i)}
    function L(t,i){return t.className=i,t}
    function D(t,i){if(!t.hasOwnProperty(Cr)){var n=t.getAttribute(pr);if(!n)return L(t,i);for(var e=n[Lr](Dr),s=0,h=e[rr];h>s;s++)if(e[s]==i)return;return n+=Dr+i,L(t,n)}
        t[Cr].add(i)}
    function j(t,i){if(!t.hasOwnProperty(Cr)){var n=t.getAttribute(pr);if(!n||!n[vr](i))return;for(var e="",s=n[Lr](Dr),h=0,r=s[rr];r>h;h++)s[h]!=i&&(e+=s[h]+Dr);return L(t,e)}
        t[Cr].remove(i)}
    function R(t){return!isNaN(t)&&t instanceof Number||jr==typeof t}
    function N(t){return t!==n&&(t instanceof String||Rr==typeof t)}
    function B(t){return t!==n&&(t instanceof Boolean||Nr==typeof t)}
    function $(t){return Array[Br](t)}
    function F(i){i||(i=t.event),i.preventDefault?i[$r]():i[Fr]=!1}
    function G(i){i||(i=t[Gr]),i[zr]?i.stopPropagation():i.cancelBubble||(i[Yr]=!0)}
    function z(t){F(t),G(t)}
    function Y(t){return Math[qr](Math.random()*t)}
    function q(){return Math.random()>=.5}
    function H(t){var i=!0;for(var n in t){i=!1;break}
        return i}
    function U(t){if(t&&t>0&&1>t){var i=Math[qr](16777215*Math[Hr]());return Ur+(i>>16&255)+Wr+(i>>8&255)+Wr+(255&i)+Wr+t[Vr](2)+Xr}
        return X(Math[qr](16777215*Math.random()))}
    function W(t){return t>0?Math[qr](t):Math[cr](t)}
    function V(t){return t>0?Math.ceil(t):Math[qr](t)}
    function X(t){return 16777216>t?Zr+(Kr+t.toString(16))[or](-6):Ur+(t>>16&255)+Wr+(t>>8&255)+Wr+(255&t)+Wr+((t>>24&255)/255)[Vr](2)+Xr}
    function Z(t,i,n){br!=typeof n||n.hasOwnProperty(Jr)||(n.enumerable=!0),Object.defineProperty(t,i,n)}
    function K(t,i){for(var n in i)if(Qr!=n[0]){var e=i[n];br!=typeof e||e.hasOwnProperty(Jr)||(e[Jr]=!0)}
        Object.defineProperties(t,i)}
    function J(i,n){n||(n=t);for(var e=i.split(ta),s=0,h=e.length;h>s;s++){var r=e[s];n=n[r]}
        return n}
    function Q(t){return t instanceof MouseEvent||t instanceof Object&&t[ia]!==n}
    function ti(){t.console&&console.log[mr](console,arguments)}
    function ii(i){t.console&&console[na](i)}
    function ni(i){t.console&&console[ea](i)}
    function ei(t,i,n){var e,s,h;0==t._n2?(e=-1,h=0,s=i):0==t._n4?(e=0,h=1,s=n):(e=-1/t._n2,s=(t._n2-e)*i+t._n6,h=1);var r=new KY;return r._n2=e,r._n6=s,r._n4=h,r._n0=i,r._my=n,r._le=Math[sa](e,h),r[ha]=Math.cos(r._le),r[ra]=Math.sin(r._le),r}
    function si(t,i,n,e,s){var h,r;i>e?h=-1:e>i&&(h=1),n>s?r=-1:s>n&&(r=1);var a,o;if(!h)return o=0>r?t.y:t.bottom,{x:i,y:o};if(!r)return a=0>h?t.x:t.right,{x:a,y:n};var f=(n-s)/(i-e),u=n-f*i,c=0>h?i-t.x:i-t[aa],_=0>r?n-t.y:n-t[oa];return Math.abs(f)>=Math.abs(_/c)?(o=0>r?t.y:t.bottom,a=(o-u)/f):(a=0>h?t.x:t[aa],o=f*a+u),{x:a,y:o}}
    function hi(t,i,n,e,s,h,r,a){return 0>=r||0>=a||0>=n||0>=e?!1:(r+=s,a+=h,n+=t,e+=i,(s>r||r>t)&&(h>a||a>i)&&(t>n||n>s)&&(i>e||e>h))}
    function ri(t,i,n,e,s,h){return s>=t&&t+n>=s&&h>=i&&i+e>=h}
    function ai(t,i,n,e,s,h,r,a,o){return o&&(t-=o,i-=o,n+=o+o,e+=o+o),s>=t&&h>=i&&t+n>=s+r&&i+e>=h+a}
    function oi(t,i,n,e,s,h,r,a){var o=t;o+=n;var f=i;f+=e;var u=s;u+=r;var c=h;return c+=a,s>t&&(t=s),h>i&&(i=h),o>u&&(o=u),f>c&&(f=c),o-=t,f-=i,0>o||0>f?null:new QY(t,i,o,f)}
    function fi(t){return fa in t&&ua in t}
    function ui(t,i){var n=ci(t,i[ca],i[_a]);return n.x+=i.x||0,n.y+=i.y||0,n}
    function ci(t,i,e){if(!t)return{x:0,y:0};if(N(t)&&(t=iq.fromString(t)),t instanceof iq){var s,h,r=t[da],a=t[la];switch(r){case nq:s=0;break;case sq:s=i;break;default:s=i/2}
        switch(a){case hq:h=0;break;case aq:h=e;break;default:h=e/2}
        return{x:s,y:h}}
        if(t.x!==n)return t[va]?{x:t.x*i,y:t.y*e}:{x:t.x,y:t.y};throw new Error("Position not be supported - "+t)}
    function _i(t,i,n){t[ar].add(i,n),t[ba](i,n)}
    function di(t,i){t._f3&&(t._f3.remove(i),t[ya](i))}
    function li(t){return t.replace(/^-ms-/,ga).replace(/-([\da-z])/gi,function(t,i){return i.toUpperCase()})}
    function vi(t){return t[pa](/[A-Z]/g,function(t){return ma+t[xa]()})[pa](/^ms-/,Ea)}
    function bi(t,i){var n=t[wa];if(!n)return!1;var e,s;for(e in i)i.hasOwnProperty(e)&&(s=Oq(e))&&(n[s]=i[e]);return t}
    function yi(t){var i,n,e="";for(i in t)t.hasOwnProperty(i)&&(n=Oq(i))&&(e+=vi(n)+Ta+t[i]+ka);return e?e.substring(0,e[rr]-1):e}
    function gi(t,i,n){(i=Oq(i))&&(t.style[i]=n)}
    function pi(t,i){return kq?(i&&!N(i)&&(i=yi(i)),kq.insertRule?void kq[Ma](t+Oa+i+Sa,0):void(kq[Ia]&&kq[Ia](t,i,0))):!1}
    function mi(t,i){var n=t[Pa];return n?(i=i||t[Aa](),i[ca]/n):1}
    function xi(i,n){i[ia]&&(i=i[Ca]&&i.changedTouches.length?i[Ca][0]:i[ia][0]);var e=i[La]||0,s=i[Da]||0;YY&&BY&&(t.pageXOffset&&e==i[ja]&&(e-=t[Ra]),t.pageYOffset&&s==i[Na]&&(s-=t[Ba]));var h=n.getBoundingClientRect();e-=h.left,s-=h.top;var r=mi(n,h);return r&&1!==r&&(e/=r,s/=r),{x:e,y:s}}
    function Ei(t,i){var n,e;t.touches?(n=t.cx,e=t.cy):(n=t[La],e=t[Da]);var s=mi(i);return s&&1!==s&&(n/=s,e/=s),{timeStamp:t.timeStamp,x:n,y:e}}
    function wi(t,i,n){this._m9=t,this._scope=n,this._handler=i,this._dragPoints=new ki,this[$a]()}
    function Ti(t){return $Y&&t[Fa]||!$Y&&t[Ga]}
    function ki(){this.points=[]}
    function Mi(t,i,n,e,s){Si(t,function(e){if(i){var s=e.responseXML;if(!s)return void(n||sH)(za+t+Ya);i(s)}},n,e,s)}
    function Oi(t,i,n,e,s){Si(t,function(e){if(i){var s,h=e[qa];if(!h)return(n||sH)(za+t+Ha),s=new Error(za+t+Ha),i(h,s);try{h=JSON[Ua](h)}catch(r){(n||sH)(r),s=r}
        i(h,s)}},n,e,s)}
    function Si(t,i,n,e,s){(n===!1||e===!1)&&(s=!1);try{var h=new XMLHttpRequest,r=encodeURI(t);if(s!==!1){var a;a=r.indexOf(Wa)>0?"&":Wa,r+=a+Va+Date.now()}
        h[Xa](Za,r),h[Ka]=function(){return 4==h[Ja]?h.status&&200!=h.status?void(n||sH)(za+t+Qa):void(i&&i(h)):void 0},h.send(e)}catch(o){(n||sH)(za+t+Qa,o)}}
    function hi(t,i,n,e,s,h,r,a){return 0>=r||0>=a||0>=n||0>=e?!1:(r+=s,a+=h,n+=t,e+=i,(s>r||r>t)&&(h>a||a>i)&&(t>n||n>s)&&(i>e||e>h))}
    function ai(t,i,n,e,s,h,r,a){return s>=t&&h>=i&&t+n>=s+r&&i+e>=h+a}
    function Ii(t,i,n){return t instanceof Object&&t.x?Ai(t,i,0,0):Pi(t,i,n,0,0)}
    function Pi(t,i,n,e,s){var h=Math.sin(n),r=Math.cos(n),a=t-e,o=i-s;return t=a*r-o*h+e,i=a*h+o*r+s,new XY(t,i,n)}
    function Ai(t,i,n,e){n=n||0,e=e||0;var s=Math.sin(i),h=Math.cos(i),r=t.x-n,a=t.y-e;return t.x=r*h-a*s+n,t.y=r*s+a*h+e,t}
    function Ci(t,i,n){return Li(t,i,n,0,0)}
    function Li(t,i,n,e,s){var h=Pi(t.x,t.y,i,e,s),r=Pi(t.x+t[ca],t.y,i,e,s),a=Pi(t.x+t.width,t.y+t[_a],i,e,s),o=Pi(t.x,t.y+t.height,i,e,s);return n?n[to]():n=new QY,n[io](h),n[io](r),n[io](a),n.addPoint(o),n}
    function Di(t,i){var n=this[no]||1;this[wa].width=t+eo,this[wa][_a]=i+eo,this[ca]=t*n,this[_a]=i*n}
    function ji(t){var i=t[so]||t[ho]||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return aH/i}
    function Ri(t,n,e){var s=i[ro](ao);if(s.g=s[oo](fo),t!==!0&&!e)return t&&n&&(s[ca]=t,s.height=n),s;var h=s.g;return h[no]=s.ratio=ji(h),s[uo]=Di,h._kz=function(){this.canvas[ca]=this.canvas[ca]},t&&n&&s[uo](t,n),s}
    function Ni(t,i){return oH||(oH=Ri()),t&&i&&(oH.width=t,oH[_a]=i),oH.g}
    function Bi(t,i,n){return(n||HY[co])+Dr+(i||HY.FONT_SIZE)+_o+(t||HY[lo])}
    function $i(t,i,n,e,s,h,r,a,o,f){if(t[vo](),t[bo](n,e),fH&&uH>r){var u=r/uH;t.scale(u,u),r=uH,f=null}
        o||(o=HY[yo]),r||(r=HY.FONT_SIZE),o*=r,t[go]=f||Bi(h,r,a),t.textAlign=s,t[po]=mo;for(var c=o/2,_=i[Lr](xo),d=0,l=_[rr];l>d;d++){var v=_[d];t[Eo](v,0,c),c+=o}
        t[wo]()}
    function Fi(t,i,n,e,s,h){if(!t)return{width:0,height:0};if(i||(i=HY[To]),fH&&uH>i){var r=i/uH,a=Fi(t,uH,n,e,s);return a[ca]*=r,a[_a]*=r,a}
        var o=Ni();o[go]=h||Bi(n,i,e),s||(s=HY[yo]);for(var f=i*s,u=0,c=0,_=t[Lr](xo),d=0,l=_[rr];l>d;d++){var v=_[d];u=Math.max(o.measureText(v).width,u),c+=f}
        return{width:u,height:c}}
    function Gi(t,i,n,e,s){var h;try{h=t[ko](i,n,e,s)}catch(r){}
        return h}
    function zi(t){return Math.log(t+Math[Mo](t*t+1))}
    function Yi(t,i){i=i||t(1);var n=1/i,e=.5*n,s=Math.min(1,i/100);return function(h){if(0>=h)return 0;if(h>=i)return 1;for(var r=h*n,a=0;a++<10;){var o=t(r),f=h-o;if(Math.abs(f)<=s)return r;r+=f*e}
        return r}}
    function qi(t,i,n){var e=1-t,s=e*e*i[0]+2*e*t*i[2]+t*t*i[4],h=e*e*i[1]+2*e*t*i[3]+t*t*i[5];if(n){var r=(i[0]+i[4]-2*i[2])*t+i[2]-i[0],a=(i[1]+i[5]-2*i[3])*t+i[3]-i[1];return{x:s,y:h,rotate:Math[sa](a,r)}}
        return{t:t,x:s,y:h}}
    function Hi(t,i,n){var e=t-2*i+n;return 0!=e?(t-i)/e:-1}
    function Ui(t,i){i.add(t[4],t[5]);var n=Hi(t[0],t[2],t[4]);if(n>0&&1>n){var e=qi(n,t);i.add(e.x,e.y)}
        var s=Hi(t[1],t[3],t[5]);if(s>0&&1>s){var e=qi(s,t);i.add(e.x,e.y)}
        return i}
    function Wi(t,i){return Math.abs(t-i)<1e-7}
    function Vi(t,i){return Wi(t[0],i[0])&&Wi(t[1],i[1])}
    function Xi(t){if(Vi([t[0],t[1]],[t[2],t[3]])){var i=t[0],n=t[1],e=t[4],s=t[5],h=Math[Mo](cH(i,n,e,s));return function(t){return h*t}}
        if(Vi([t[0],t[1]],[t[4],t[5]])||Vi([t[2],t[3]],[t[4],t[5]])){var i=t[0],n=t[1],e=t[2],s=t[3],h=Math[Mo](cH(i,n,e,s));return function(t){return h*t}}
        var r=t[0],a=t[2],o=t[4],f=r-2*a+o,u=2*a-2*r;r=t[1],a=t[3],o=t[5];var c=r-2*a+o,_=2*a-2*r,d=4*(f*f+c*c),l=4*(f*u+c*_),v=u*u+_*_,h=4*d*v-l*l;if(1e-5>h&&h>-1e-5){var b=ZY(t[0],t[1],t[2],t[3]),y=ZY(t[2],t[3],t[4],t[5]);return function(t){return(2*b+(y-b)*t)*t}}
        var g=1/h,p=.125*Math.pow(d,-1.5),m=2*Math.sqrt(d),x=(h*zi(l/Math[Mo](h))+2*Math[Mo](d)*l*Math[Mo](v))*p;return function(t){var i=l+2*t*d,n=i/Math[Mo](h),e=i*i*g;return(h*Math.log(n+Math[Mo](e+1))+m*i*Math[Mo](v+t*l+t*t*d))*p-x}}
    function Zi(t,i,n){var e=1-t,s=i[0],h=i[2],r=i[4],a=i[6],o=s*e*e*e+3*h*t*e*e+3*r*t*t*e+a*t*t*t;if(n)var f=3*t*t*a+(6*t-9*t*t)*r+(9*t*t-12*t+3)*h+(-3*t*t+6*t-3)*s;s=i[1],h=i[3],r=i[5],a=i[7];var u=s*e*e*e+3*h*t*e*e+3*r*t*t*e+a*t*t*t;if(n){var c=3*t*t*a+(6*t-9*t*t)*r+(9*t*t-12*t+3)*h+(-3*t*t+6*t-3)*s;return{x:o,y:u,rotate:Math.atan2(c,f)}}
        return{x:o,y:u}}
    function Ki(t,i,n,e){var s=-t+3*i-3*n+e;if(0==s)return[(t-i)/(2*n-4*i+2*t)];var h=2*t-4*i+2*n,r=i-t,a=h*h-4*s*r;return 0>a?void 0:0==a?[-h/(2*s)]:(a=Math[Mo](a),[(a-h)/(2*s),(-a-h)/(2*s)])}
    function Ji(t,i){i.add(t[6],t[7]);var n=Ki(t[0],t[2],t[4],t[6]);if(n)for(var e=0;e<n.length;e++){var s=n[e];if(!(0>=s||s>=1)){var h=Zi(s,t);i.add(h.x,h.y)}}
        if(n=Ki(t[1],t[3],t[5],t[7]))for(var e=0;e<n.length;e++){var s=n[e];if(!(0>=s||s>=1)){var h=Zi(s,t);i.add(h.x,h.y)}}}
    function Qi(t){var i={x:t[0],y:t[1]},n={x:t[2],y:t[3]},e={x:t[4],y:t[5]},s={x:t[6],y:t[7]},h=i.x-0,r=i.y-0,a=n.x-0,o=n.y-0,f=e.x-0,u=e.y-0,c=s.x-0,_=s.y-0,d=3*(-h+3*a-3*f+c),l=6*(h-2*a+f),v=3*(-h+a),b=3*(-r+3*o-3*u+_),y=6*(r-2*o+u),g=3*(-r+o),p=function(t){var i=d*t*t+l*t+v,n=b*t*t+y*t+g;return Math[Mo](i*i+n*n)},m=(p(0)+4*p(.5)+p(1))/6;return m}
    function tn(t,i){function n(t,i,n,e){var s=-t+3*i-3*n+e,h=2*t-4*i+2*n,r=i-t;return function(t){return 3*(s*t*t+h*t+r)}}
        function e(t,i){var n=s(t),e=h(t);return Math[Mo](n*n+e*e)*i}
        var s=n(t[0],t[2],t[4],t[6]),h=n(t[1],t[3],t[5],t[7]);i=i||100;var r=1/i;return function(t){if(!t)return 0;for(var i,n=0,s=0;;){if(i=n+r,i>=t)return s+=e(n,i-n);s+=e(n,r),n=i}}}
    function nn(t,i,n){return cH(i,n,t.cx,t.cy)<=t[Oo]+_H}
    function en(t,i,n,e){return n=n||sn(t,i),new hn((t.x+i.x)/2,(t.y+i.y)/2,n/2,t,i,null,e)}
    function sn(t,i){return ZY(t.x,t.y,i.x,i.y)}
    function hn(t,i,n,e,s,h,r){this.cx=t,this.cy=i,this.r=n,this._squareR=n*n,this.p1=e,this.p2=s,this.p3=h,this._otherPoint=r}
    function rn(t,i,n,e){this.cx=t,this.cy=i,this.width=n,this[_a]=e}
    function an(t){var i=t[0],n=t[1],e=t[2],s=hn[So](i,n,e);return fn(t,i,n,e,s)}
    function on(t,i){i=i||un(t);for(var n,e=i[ca]/i[_a],s=[],h=t[rr],r=0;h>r;r++)n=t[r],s[lr]({x:n.x,y:n.y*e});var a=an(s);return a?new rn(a.cx,a.cy/e,2*a.r,2*a.r/e):void 0}
    function fn(t,i,n,e,s){for(var h,r,a=t[rr],o=s[Oo],f=0;a>f;f++)if(h=t[f],h!=i&&h!=n&&h!=e){var u=cH(s.cx,s.cy,h.x,h.y);u-_H>o&&(o=u,r=h)}
        if(!r)return s;var c,_=hn._jxCircle(r,i,n),d=hn[So](r,i,e),l=hn[So](r,e,n);return nn(_,e.x,e.y)&&(c=_),nn(d,n.x,n.y)&&(!c||c.r>d.r)&&(c=d),nn(l,i.x,i.y)&&(!c||c.r>l.r)&&(c=l),i=c.p1,n=c.p2,e=c.p3||c[Io],fn(t,i,n,e,c)}
    function un(t){for(var i,n=t[rr],e=new QY,s=0;n>s;s++)i=t[s],e.add(i.x,i.y);return e}
    function cn(t,i,n,e,s){this._68&&this[Po]();var h=s?this.getBounds(s):this[Ao],r=n/h[ca],a=t-r*h.x,o=e/h[_a],f=i-o*h.y,u=this._fp,c=[];return l(u,function(t){var i=t[dr](),n=i[Co];if(n&&n.length){for(var e=n[rr],s=[],h=0;e>h;h++){var u=n[h];h++;var _=n[h];u=r*u+a,_=o*_+f,s.push(u),s.push(_)}
        i.points=s}
        c[lr](i)},this),new YH(c)}
    function _n(t,i,n,e,s,h){if(s=s||0,n=n||0,!s&&!h)return!1;if(!e){var r=this[Lo](s);if(!r.intersectsPoint(t,i,n))return!1}
        var a=Math.round(2*n)||1,o=Ni(a,a),f=(o[ao],-t+n),u=-i+n;if(o.setTransform(1,0,0,1,f,u),!o[Do]){this._lm(o),s&&o.stroke(),h&&o[jo]();var c=Gi(o,0,0,a,a);if(!c)return!1;c=c.data;for(var _=c[rr]/4;_>0;){if(c[4*_-1]>zH)return!0;--_}
            return!1}
        return o.lineWidth=(s||0)+2*n,this._lm(o),s&&o[Do](n,n)?!0:h?o[Ro](n,n):!1}
    function dn(t,i,n){if(!this._iy||this._fp[rr]<2){if(this._fp[rr]){var e=n!==!1?this._fp[0][No]:this._fp[this._fp[rr]-1][Bo];return i&&(e.y+=i),t&&(e.x+=t),e}
        return null}
        var s=this._fp;n===!1&&(t+=this._iy);var h=s[0];if(0>=t)return Ks(h[Co][0],h.points[1],s[1].points[0],s[1].points[1],t,i);if(t>=this._iy){h=s[s[rr]-1];var r,a,o=h.points,f=o[rr],u=o[f-2],c=o[f-1];if(f>=4)r=o[f-4],a=o[f-3];else{h=s[s[rr]-2];var _=h[Bo];r=_.x,a=_.y}
            return Ks(u,c,u+u-r,c+c-a,t-this._iy,i)}
        for(var d,l=0,v=1,f=s.length;f>v;v++)if(d=s[v],d._iy){if(!(l+d._iy<t)){var b,_=h.lastPoint;if(d[$o]==$H){var y=d[Co];b=ln(t-l,d,_.x,_.y,y[0],y[1],y[2],y[3],d._r)}else{if(!d._lf)return Ks(_.x,_.y,d[Co][0],d.points[1],t-l,i);var g=Yi(d._lf,d._iy)(t-l),y=d.points;b=d[$o]==BH&&6==y.length?Zi(g,[_.x,_.y][ur](y),!0):qi(g,[_.x,_.y][ur](y),!0),b.t=g}
            return i&&(b.x-=i*Math.sin(b[Fo]||0),b.y+=i*Math.cos(b.rotate||0)),b}
            l+=d._iy,h=d}else h=d}
    function ln(t,i,n,e,s,h,r,a){if(t<=i._l1)return Ks(n,e,s,h,t,t);if(t>=i._iy)return t-=i._iy,Ks(i[Go],i._p2y,r,a,t,t);if(t-=i._l1,i._o){var o=t/i._r;i[zo]&&(o=-o);var f=Pi(i._p1x,i[Yo],o,i._o.x,i._o.y);return f.rotate+=i[qo]||0,f.rotate+=Math.PI,f}
        return Ks(i._p1x,i[Yo],i[Go],i[Ho],t,t)}
    function ei(t,i,n){var e,s,h;0==t._n2?(e=-1,h=0,s=i):0==t._n4?(e=0,h=1,s=n):(e=-1/t._n2,s=(t._n2-e)*i+t._n6,h=1);var r=new KY;return r._n2=e,r._n6=s,r._n4=h,r._n0=i,r._my=n,r}
    function vn(t){return t%=2*Math.PI,0>t&&(t+=2*Math.PI),t}
    function bn(t,i,n,e,s,h,r,a){var o=ZY(i,n,e,s),f=ZY(e,s,h,r);if(!o||!f)return t._d=0,t._r=0,t._l1=o,t._l2=f,t._iy=0;var u=gn(e,s,i,n),c=gn(e,s,h,r);t[qo]=u,t[Uo]=c;var _=u-c;_=vn(_),_>Math.PI&&(_=2*Math.PI-_,t[zo]=!0);var d=Math.PI-_,l=Math.tan(_/2),v=a/l,b=Math.min(o,f);v>b&&(v=b,a=l*v);var y,g=e+Math.cos(u)*v,p=s+Math.sin(u)*v,m=e+Math.cos(c)*v,x=s+Math.sin(c)*v,E=new KY(i,n,e,s),w=new KY(e,s,h,r),T=ei(E,g,p),k=ei(w,m,x),M=T._3k(k),O=Math[sa](p-M.y,g-M.x),S=Math[sa](x-M.y,m-M.x);y=t[zo]?S:O;for(var I,P=0;4>P;){var A=P*WY;if(vn(A-y)<=d){var C,L;if(I?I++:I=1,0==P?(C=M.x+a,L=M.y):1==P?(C=M.x,L=M.y+a):2==P?(C=M.x-a,L=M.y):(C=M.x,L=M.y-a),t[Wo+I]={x:C,y:L},2==I)break}
        P++}
        return t._p1x=g,t._p1y=p,t._p2x=m,t[Ho]=x,t._o=M,t._d=v,t._r=a,t._l1=o-v,t._l2=f-v,t._iy=t._l1+d*a}
    function yn(t,i,n,e,s,h,r){var a=gn(n,e,t,i),o=gn(n,e,s,h),f=a-o;return r?f:(0>f&&(f=-f),f>Math.PI&&(f-=Math.PI),f)}
    function gn(t,i,n,e){return Math[sa](e-i,n-t)}
    function pn(t,i){for(var n=t.getImageData(0,0,i.width,i[_a])[Vo],e=!1,s=3,h=n[rr];h>s;s+=4)if(n[s]<255){e=!0;break}
        return e}
    function mn(t){return t=En(t),/^png/i[Xo](t)||/^gif/i[Xo](t)}
    function xn(t,i,n,e,s){if(i&&n){t[Zo]=.5,t[Ko]=Jo,t[Qo](0,0,i,n),e&&(t[tf]=e,t.fillRect(0,0,i,n));var h=2,r=40,a=28,o=10,f=Math.min(i/(r+o),n/(a+o));t[vo](),t.globalAlpha=.6,t[bo](i/2,n/2),t[nf](f,f),t.translate(-r/2,-a/2),t[ef](),t[sf](0,0,r,a),t.clip(),t[tf]=hf,t[jo](),t.globalAlpha=1,t[rf](0,21),t[af](12,12),t.lineTo(26,28),t.moveTo(18,18),t[af](28,8),t[af](40,18),t.lineWidth=h,t.strokeStyle=of,t[ff](),s&&(t.beginPath(),t.moveTo(26,-4),t[af](17,11),t[af](23,17),t[af](14,32),t[Zo]=5,t[Ko]=e||uf,t[ff]()),t.restore()}}
    function En(t){var i=lH[cf](t);if(i)return i[1];var n=t[_f](ta);return n>=0&&n<t[rr]-1?t[df](n+1):void 0}
    function wn(t){if(!t)return null;if(t instanceof YH)return xH;if(t[lf]instanceof Function)return mH;if(N(t)){var i=En(t);if(i){if(!AY&&vH[Xo](i))return pH;if(bH.test(i))return gH}
        return yH}}
    function Tn(t,i,n){if(this._mb=wn(t),!this._mb)throw new Error("the image format is not supported",t);this._lh=t,this._n2b=i,this._8u=n,this.width=i||HY[vf],this[_a]=n||HY.IMAGE_HEIGHT,this._j6={}}
    function kn(t,i,n,e){return i?(kH[t]=new Tn(i,n,e),t):void delete kH[t]}
    function Mn(t){if(t._kq)return t._kq;var i=N(t);if(!i&&!t[bf])return t._kq=new Tn(t);var n=t.name||t;return n in kH?kH[n]:kH[n]=new Tn(t)}
    function On(t){return t in kH}
    function Sn(t,i,n){n=n||{};var e=t[Lo](n.lineWidth);if(!e[ca]||!e[_a])return!1;var s=i[oo](fo),h=i[no]||1,r=n.scaleMode||yf,a=/full/i[Xo](r),o=/uniform/i[Xo](r),f=1,u=1;if(a){var c=i[ca],_=i[_a],d=n.padding,l=0,v=0;if(d){var b,y,g,p;R(d)?b=y=g=p=d:(b=d.top||0,y=d[oa]||0,g=d.left||0,p=d[aa]||0),c-=g+p,_-=b+y,l+=g,v+=b}
        f=c/e.width,u=_/e.height,o&&(f>u?(l+=(c-u*e[ca])/2,f=u):u>f&&(v+=(_-f*e.height)/2,u=f)),(l||v)&&s[bo](l,v)}
        s.translate(-e.x*f,-e.y*u),t[lf](s,h,n,f,u,!0)}
    function In(t,i,n){var e=Mn(t);return e?(e[Po](),(e._mb==pH||e._62())&&e[gf](function(t){t[pf]&&(this[ca]=this[ca],Sn(t[pf],this,n))},i),void Sn(e,i,n)):(hH[ea](mf+t),!1)}
    function Pn(t,i,n,e){var s=t.length;if(s&&!(0>s)){e=e||1;for(var h,r,a=0;a++<s;)if(h=t[xf](a,0),h&&(r=ZY(i,n,h.x,h.y),!(r>e))){for(var o=0;o++<e;)if(h=t[xf](a+o,0)){var f=ZY(i,n,h.x,h.y);if(f>=r){a+=o;break}
        r=f}
        for(var u=a,c=t.length-1,_=0,a=0,d=t._fp.length;d>a;a++)if(_+=t._fp[a]._iy||0,_>u){c=a;break}
        return h.length=u,h.index=c,h}}}
    function An(t,i,n){return{x:t.x+(i.x-t.x)*n,y:t.y+(i.y-t.y)*n}}
    function Cn(t,i,n,e,s){e=e||HY[Ef];var h=Pn(t,i,n,s);if(h){i=h.x,n=h.y;var r=t._fp,a=h[wf],o=a==r[rr]-1,f=r[a],u=r[or](0);if(f[$o]==RH||f[$o]==FH)if(Tf==e)u.splice(a,0,new GH(RH,[h.x,h.y]));else{var c=r[a-1][Bo],_=f.firstPoint,d=ZY(c.x,c.y,i,n)/ZY(c.x,c.y,_.x,_.y),l=An(c,h,d),v=An(h,_,d);u[fr](a,1,new GH(NH,[l.x,l.y,i,n]),new GH(NH,f.invalidTerminal?[v.x,v.y]:[v.x,v.y,_.x,_.y]))}else if(kf in h&&Tf!=e){var d=h.t;if(f[$o]==BH){var c=r[a-1].lastPoint,_={x:f[Co][0],y:f[Co][1]},b={x:f.points[2],y:f.points[3]},y={x:f.points[4],y:f.points[5]},l=An(c,_,d),v=An(_,b,d),g=An(b,y,d),p=An(l,v,d),m=An(v,g,d);u[fr](a,1,new GH(BH,[l.x,l.y,p.x,p.y,i,n]),new GH(BH,f.invalidTerminal?[m.x,m.y,g.x,g.y]:[m.x,m.y,g.x,g.y,y.x,y.y]))}else if(f.type==NH){var c=r[a-1][Bo],_={x:f[Co][0],y:f[Co][1]},b={x:f.points[2],y:f.points[3]},l=An(c,_,d),v=An(_,b,d);u[fr](a,1,new GH(NH,[l.x,l.y,i,n]),new GH(NH,f[Mf]?[v.x,v.y]:[v.x,v.y,b.x,b.y]))}}else{var _=f.lastPoint;u[fr](a,1,new GH(RH,[i,n]),new GH(RH,[_.x,_.y]))}
        return{atEnd:o,index:a,isCurve:Tf!==e,segments:u}}}
    function Ln(t){var i=t[ca],n=t[_a],e=Gi(t.g,0,0,i,n);return e?jn(e[Vo],i,n):void 0}
    function Dn(t,i,n){this._$z(t,i,n)}
    function jn(t,i,n){return new Dn(t,i,n)}
    function Rn(t){if(Zr==t[0]){if(t=t[df](1),3==t[rr])t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2];else if(6!=t[rr])return;return t=parseInt(t,16),[t>>16&255,t>>8&255,255&t]}
        if(/^rgb/i.test(t)){var i=t[vr](Of),n=t[vr](Xr);if(0>i||i>n)return;if(t=t[df](i+1,n),t=t[Lr](Wr),t[rr]<3)return;var e=parseInt(t[0]),s=parseInt(t[1]),h=parseInt(t[2]),r=3==t[rr]?255:parseInt(t[3]);return[e,s,h,r]}
        hH[ea]("color format error, ["+t+Sf)}
    function Nn(t,i,n){return n||(n=HY.BLEND_MODE),n==rH[If]?t*i:n==rH[Pf]?Math.min(t,i):n==rH.BLEND_MODE_COLOR_BURN?1-(1-i)/t:n==rH[Af]?t+i-1:n==rH.BLEND_MODE_LIGHTEN?Math.max(t,i):n==rH.BLEND_MODE_SCREEN?t+i-t*i:i}
    function Bn(t,i,n){var e=Gi(t.g,0,0,t[ca],t[_a]);if(e){var s=e[Vo];if(n instanceof Function)s=n(t,s,i)||s;else{var h=i[0]/255,r=i[1]/255,a=i[2]/255;if(n==rH.BLEND_MODE_GRAY)for(var o=0,f=s[rr];f>o;o+=4){var u=77*s[o]+151*s[o+1]+28*s[o+2]>>8;s[o]=u*h|0,s[o+1]=u*r|0,s[o+2]=u*a|0}else for(var o=0,f=s.length;f>o;o+=4)s[o]=255*Nn(h,s[o]/255,n)|0,s[o+1]=255*Nn(r,s[o+1]/255,n)|0,s[o+2]=255*Nn(a,s[o+2]/255,n)|0}
        var t=Ri(t[ca],t[_a]);return t.g[Cf](e,0,0),t}}
    function $n(t,i,n,e){return 1>n&&(n=1),Fn(t-n,i-n,2*n,2*n,e)}
    function Fn(t,i,n,e,s){n=Math[Lf](n)||1,e=Math[Lf](e)||1;var h=Ni(n,e);h[Df](1,0,0,1,-t,-i),s.draw(h);var r=Gi(h,0,0,n,e);if(!r)return!1;r=r[Vo];for(var a=r[rr]/4;a-->0;)if(r[4*a-1]>zH)return!0;return!1}
    function Gn(t,i,n,e,s,h){t-=s.$x,i-=s.$y;var r=s._f5.intersection(t,i,n,e);if(!r)return!1;t=r.x*h,i=r.y*h,n=r[ca]*h,e=r[_a]*h,n=Math[Lf](n)||1,e=Math[Lf](e)||1;var a=Ni(),o=a.canvas;o.width<n||o.height<e?(o.width=n,o[_a]=e):(a[Df](1,0,0,1,0,0),a[jf](0,0,n,e)),a[Df](1,0,0,1,-t-s.$x*h,-i-s.$y*h),a[nf](h,h),s._jn(a,1);var f=Gi(a,0,0,n,e);if(!f)return!1;f=f[Vo];for(var u=f[rr]/4;u-->0;)if(f[4*u-1]>zH)return!0;return!1}
    function zn(t,i,n,e,s,h,r,a,o){if(ri(t,i,n,e,a,o))return null;var f,u,c,_=new GH(RH,[t+n-s,i]),d=new GH(NH,[t+n,i,t+n,i+h]),l=new GH(RH,[t+n,i+e-h]),v=new GH(NH,[t+n,i+e,t+n-s,i+e]),b=new GH(RH,[t+s,i+e]),y=new GH(NH,[t,i+e,t,i+e-h]),g=new GH(RH,[t,i+h]),p=new GH(NH,[t,i,t+s,i]),m=(new GH(FH),[_,d,l,v,b,y,g,p]),x=new QY(t+s,i+h,n-s-s,e-h-h);t>a?(f=nq,c=5):a>t+n?(f=sq,c=1):(f=eq,c=0),i>o?(u=hq,f==nq&&(c=7)):o>i+e?(u=aq,f==sq?c=3:f==eq&&(c=4)):(u=rq,f==nq?c=6:f==sq&&(c=2));var E=Vn(c,t,i,n,e,s,h,r,a,o,x),w=E[0],T=E[1],k=new YH,M=k._fp;M[lr](new GH(jH,[w.x,w.y])),M[lr](new GH(RH,[a,o])),M[lr](new GH(RH,[T.x,T.y])),T._lp&&(M.push(T._lp),T[Rf]++);for(var O=T[Rf]%8,S=w._lpNO;M[lr](m[O]),++O,O%=8,O!=S;);return w._lp&&M[lr](w._lp),k[Nf](),k}
    function Yn(t,i,e,s,h,r,a,o,f,u,c,_,d,l){var v=new KY(_,d,e,s),b=new KY(i[0],i[1],i[4],i[5]),y=b._3k(v,c),g=y[0],p=y[1];if(g._rest!==n){g[Rf]=(t-1)%8,p[Rf]=(t+1)%8;var m=g[Bf];7==t?(g.y=r+u+Math.min(l[_a],m),p.x=h+f+Math.min(l[ca],m)):5==t?(g.x=h+f+Math.min(l[ca],m),p.y=r+o-u-Math.min(l[_a],m)):3==t?(g.y=r+o-u-Math.min(l[_a],m),p.x=h+a-f-Math.min(l.width,m)):1==t&&(g.x=h+a-f-Math.min(l[ca],m),p.y=r+u+Math.min(l.height,m))}else{v._mq(v._n0,v._my,g.x,g.y),g=v._$b(i),v._mq(v._n0,v._my,p.x,p.y),p=v._$b(i);var x=Xn(i,[g,p]),E=x[0],w=x[2];g[Rf]=t,p[Rf]=t,g._lp=new GH(NH,E[or](2)),p._lp=new GH(NH,w.slice(2))}
        return[g,p]}
    function qn(t,i,n,e,s,h,r,a,o,f){var u,c;if(o-a>=i+h)u={y:n,x:o-a},u[Rf]=0;else{u={y:n+r,x:Math.max(i,o-a)};var _=[i,n+r,i,n,i+h,n],d=new KY(o,f,u.x,u.y);if(u=d._$b(_)){$(u)&&(u=u[0].t>u[1].t?u[0]:u[1]);var l=Xn(_,[u]);l=l[0],l&&(u._lp=new GH(NH,l.slice(2))),u[Rf]=7}else u={y:n,x:i+h},u._lpNO=0}
        if(i+e-h>=o+a)c={y:n,x:o+a},c._lpNO=0;else{c={y:n+r,x:Math.min(i+e,o+a)};var v=[i+e-h,n,i+e,n,i+e,n+r],d=new KY(o,f,c.x,c.y);if(c=d._$b(v)){$(c)&&(c=c[0].t<c[1].t?c[0]:c[1]);var l=Xn(v,[c]);l&&l[l[rr]-1]&&(c._lp=new GH(NH,l[l.length-1].slice(2))),c[Rf]=1}else c={y:n,x:i+e-h},c[Rf]=0}
        return[u,c]}
    function Hn(t,i,n,e,s,h,r,a,o,f){var u,c;if(f-a>=n+r)u={x:i+e,y:f-a},u._lpNO=2;else{u={x:i+e-h,y:Math.max(n,f-a)};var _=[i+e-h,n,i+e,n,i+e,n+r],d=new KY(o,f,u.x,u.y);if(u=d._$b(_)){$(u)&&(u=u[0].t>u[1].t?u[0]:u[1]);var l=Xn(_,[u]);l=l[0],l&&(u._lp=new GH(NH,l[or](2))),u[Rf]=1}else u={x:i+e,y:n+r},u[Rf]=2}
        if(n+s-r>=f+a)c={x:i+e,y:f+a},c[Rf]=2;else{c={x:i+e-h,y:Math.min(n+s,f+a)};var v=[i+e,n+s-r,i+e,n+s,i+e-h,n+s],d=new KY(o,f,c.x,c.y);if(c=d._$b(v)){$(c)&&(c=c[0].t<c[1].t?c[0]:c[1]);var l=Xn(v,[c]);l[1]&&(c._lp=new GH(NH,l[1].slice(2))),c[Rf]=3}else c={x:i+e,y:n+s-r},c._lpNO=2}
        return[u,c]}
    function Un(t,i,n,e,s,h,r,a,o,f){var u,c;if(o-a>=i+h)c={y:n+s,x:o-a},c._lpNO=4;else{c={y:n+s-r,x:Math.max(i,o-a)};var _=[i+h,n+s,i,n+s,i,n+s-r],d=new KY(o,f,c.x,c.y);if(c=d._$b(_)){$(c)&&(c=c[0].t<c[1].t?c[0]:c[1]);var l=Xn(_,[c]);l=l[l[rr]-1],l&&(c._lp=new GH(NH,l[or](2))),c[Rf]=5}else c={y:n+s,x:i+h},c[Rf]=4}
        if(i+e-h>=o+a)u={y:n+s,x:o+a},u._lpNO=4;else{u={y:n+s-r,x:Math.min(i+e,o+a)};var v=[i+e,n+s-r,i+e,n+s,i+e-h,n+s],d=new KY(o,f,u.x,u.y);if(u=d._$b(v)){$(u)&&(u=u[0].t>u[1].t?u[0]:u[1]);var l=Xn(v,[u]);l[0]&&(u._lp=new GH(NH,l[0].slice(2))),u[Rf]=3}else u={y:n+s,x:i+e-h},u[Rf]=4}
        return[u,c]}
    function Wn(t,i,n,e,s,h,r,a,o,f){var u,c;if(f-a>=n+r)c={x:i,y:f-a},c._lpNO=6;else{c={x:i+h,y:Math.max(n,f-a)};var _=[i,n+r,i,n,i+h,n],d=new KY(o,f,c.x,c.y);if(c=d._$b(_)){$(c)&&(c=c[0].t<c[1].t?c[0]:c[1]);var l=Xn(_,[c]);l=l[l[rr]-1],l&&(c._lp=new GH(NH,l[or](2)))}else c={x:i,y:n+r};c._lpNO=7}
        if(n+s-r>=f+a)u={x:i,y:f+a},u[Rf]=6;else{u={x:i+h,y:Math.min(n+s,f+a)};var v=[i+h,n+s,i,n+s,i,n+s-r],d=new KY(o,f,u.x,u.y);if(u=d._$b(v)){$(u)&&(u=u[0].t>u[1].t?u[0]:u[1]);var l=Xn(v,[u]);l[0]&&(u._lp=new GH(NH,l[0].slice(2))),u._lpNO=5}else u={x:i,y:n+s-r},u[Rf]=6}
        return[u,c]}
    function Vn(t,i,n,e,s,h,r,a,o,f,u){var c=a/2;switch(h=h||1e-4,r=r||1e-4,t){case 7:var _=[i,n+r,i,n,i+h,n],d=i+h,l=n+r;return Yn(t,_,d,l,i,n,e,s,h,r,a,o,f,u);case 5:return _=[i+h,n+s,i,n+s,i,n+s-r],d=i+h,l=n+s-r,Yn(t,_,d,l,i,n,e,s,h,r,a,o,f,u);case 3:return _=[i+e,n+s-r,i+e,n+s,i+e-h,n+s],d=i+e-h,l=n+s-r,Yn(t,_,d,l,i,n,e,s,h,r,a,o,f,u);case 1:return _=[i+e-h,n,i+e,n,i+e,n+r],d=i+e-h,l=n+r,Yn(t,_,d,l,i,n,e,s,h,r,a,o,f,u);case 0:return qn(t,i,n,e,s,h,r,c,o,f,u);case 2:return Hn(t,i,n,e,s,h,r,c,o,f,u);case 4:return Un(t,i,n,e,s,h,r,c,o,f,u);case 6:return Wn(t,i,n,e,s,h,r,c,o,f,u)}}
    function Xn(t,i){for(var e,s,h,r,a,o,f=t[0],u=t[1],c=t[2],_=t[3],d=t[4],l=t[5],v=[],b=0;b<i.length;b++)a=i[b],o=a.t,0!=o&&1!=o?(e=f+(c-f)*o,s=u+(_-u)*o,h=c+(d-c)*o,r=_+(l-_)*o,v.push([f,u,e,s,a.x,a.y]),f=a.x,u=a.y,c=h,_=r):v[lr](null);return h!==n&&v[lr]([a.x,a.y,h,r,d,l]),v}
    function Zn(t){return this[$f]&&this[Ff]&&(t.x-=this[Ff].x,t.y-=this[Ff].y),this[Gf]&&Ai(t,this[Gf]),t.x+=this[zf]||0,t.y+=this[Yf]||0,this[qf]&&this[Hf]?Ai(t,this[Hf]):t}
    function Kn(t){return this.$rotatable&&this[Hf]&&Ai(t,-this.$_hostRotate),t.x-=this.$offsetX||0,t.y-=this.$offsetY||0,this[Gf]&&Ai(t,-this[Gf]),this.$layoutByAnchorPoint&&this._n2x&&(t.x+=this[Ff].x,t.y+=this[Ff].y),t}
    function Jn(){var t=this.$invalidateSize;this[Uf]&&(this[Uf]=!1,this.$invalidateAnchorPoint=!0,this._7v.setByRect(this._jd),this.$padding&&this._7v.grow(this.$padding),this[Wf]&&this._7v[Vf](this.$border));var i=this._$s();if(i)var n=this.showPointer&&this[Xf];return this.$invalidateAnchorPoint&&this[$f]&&(this[Zf]=!1,n&&(t=!0),this[Ff]=ci(this[Kf],this._7v[ca],this._7v.height),this._n2x.x+=this._7v.x,this._n2x.y+=this._7v.y),i?(t&&(this[Jf]=!0,Qn.call(this,n)),this[Jf]&&(this[Jf]=!1,this[Qf]=this.backgroundGradient&&this._m5Shape&&this[tu][Ao]?MH[yr].generatorGradient[hr](this.backgroundGradient,this[tu][Ao]):null),t):(this[iu]=!1,t)}
    function Qn(t){var i=this._7v.x+this[Wf]/2,n=this._7v.y+this[Wf]/2,e=this._7v.width-this[Wf],s=this._7v[_a]-this.$border,h=0,r=0;if(this[nu]&&(R(this[nu])?h=r=this[nu]:(h=this.$borderRadius.x||0,r=this.$borderRadius.y||0),h=Math.min(h,e/2),r=Math.min(r,s/2)),t&&(this._pointerX=this[Ff].x-this[zf]+this[eu],this[su]=this[Ff].y-this[Yf]+this[hu],!this._7v[ru](this[au],this[su]))){var a=new HH(i,n,e,s,h,r,this.$pointerWidth,this[au],this[su]);return this[tu]=a._lp,this[tu][Ao].set(i,n,e,s),void(this[iu]=!0)}
        this._m5Shape&&this[tu][to](),this._m5Shape=lW[ou](i,n,e,s,h,r,this._m5Shape),this[tu][Ao].set(i,n,e,s)}
    function te(t,i,n,e){return e&&(t[ca]<0||t[_a]<0)?(t.x=i,t.y=n,void(t.width=t[_a]=0)):(i<t.x?(t[ca]+=t.x-i,t.x=i):i>t.x+t[ca]&&(t.width=i-t.x),void(n<t.y?(t[_a]+=t.y-n,t.y=n):n>t.y+t[_a]&&(t[_a]=n-t.y)))}
    function ie(t,i,e){var s,h=t[fu],r=t.layoutByPath===n?this[uu]:t[uu];return this.$data instanceof YH&&r?(s=dH._n63(h,this.$data,this[Zo],i,e),s.x*=this._jf,s.y*=this._jh):(s=ci(h,this._7v.width,this._7v[_a]),s.x+=this._7v.x,s.y+=this._7v.y),Zn.call(this,s)}
    function ne(t,i){if(i)if(i._7v.isEmpty())t.$x=i.$x,t.$y=i.$y;else{var n=ie[hr](i,t);t.$x=n.x,t.$y=n.y,t._hostRotate=n[Fo]}else t.$x=0,t.$y=0;t[cu]&&VH[hr](t)}
    function ee(t){if(t.lineDash===n){var i,e;if(t[_u])i=t.getLineDash,e=t[_u];else{var s;if(t.mozDash!==n)s=du;else{if(t[lu]===n)return!1;s=lu}
        e=function(t){this[s]=t},i=function(){return this[s]}}
        Z(t,vu,{get:function(){return i[hr](this)},set:function(t){e[hr](this,t)}})}
        if(t[bu]===n){var h;if(t[yu]!==n)h=yu;else{if(t.webkitLineDashOffset===n)return;h=gu}
            Z(t,bu,{get:function(){return this[h]},set:function(t){this[h]=t}})}}
    function se(t,i,n,e,s){var h,r,a,o,f,u,c,_,d=function(t){return function(i){t(i)}},l=function(){r=null,a=null,o=f,f=null,u=null},v=function(t){h=t,c||(c=Ri()),c[ca]=h[ca],c[_a]=h.height,i[ca]=h.width,i[_a]=h.height},b=function(t){y(),l(),r=t.transparencyGiven?t[pu]:null,a=10*t[mu],f=t[xu]},y=function(){if(u){var t=u[ko](0,0,h[ca],h.height),n={data:t,_pixels:jn(t[Vo],h[ca],h.height),delay:a};s[hr](i,n)}},g=function(t){u||(u=c[oo](fo));var i=t.lctFlag?t.lct:h.gct,n=u[ko](t[Eu],t[wu],t[ca],t[_a]);t[Tu].forEach(function(t,e){r!==t?(n[Vo][4*e+0]=i[t][0],n.data[4*e+1]=i[t][1],n.data[4*e+2]=i[t][2],n[Vo][4*e+3]=255):(2===o||3===o)&&(n[Vo][4*e+3]=0)}),u[Cf](n,t[Eu],t[wu])},p=function(){},m={hdr:d(v),gce:d(b),com:d(p),app:{NETSCAPE:d(p)},img:d(g,!0),eof:function(){y(),n.call(i)}},x=new XMLHttpRequest;AY||x[ku]("text/plain; charset=x-user-defined"),x[Mu]=function(){_=new QH(x[qa]);try{iU(_,m)}catch(t){e[hr](i,Ua)}},x[Ou]=function(){e[hr](i,Su)},x.open(Za,t,!0),x[Iu]()}
    function he(t){var i=[51,10,10,100,101,109,111,46,113,117,110,101,101,46,99,111,109,44,109,97,112,46,113,117,110,101,101,46,99,111,109,44,99,110,46,113,117,110,101,101,46,99,111,109,10,50,46,48,10,49,52,57,50,54,55,54,49,48,53,50,50,48,10,10,10];return i.forEach(function(n,e){i[e]=t(n)}),i.join("")}
    function re(t,i){try{if(null==t||t[rr]<8)return;if(null==i||i[rr]<=0)return;for(var n="",e=0;e<i[rr];e++)n+=i[Pu](e).toString();var s=Math[qr](n[rr]/5),h=parseInt(n.charAt(s)+n.charAt(2*s)+n.charAt(3*s)+n[Au](4*s)+n.charAt(5*s),10),r=Math[Lf](i[rr]/2),a=Math.pow(2,31)-1,o=parseInt(t[df](t[rr]-8,t[rr]),16);for(t=t[df](0,t[rr]-8),n+=o;n[rr]>10;)n=(parseInt(n.substring(0,10),10)+parseInt(n[df](10,n.length),10)).toString();n=(h*n+r)%a;for(var f="",u="",e=0;e<t[rr];e+=2)f=parseInt(parseInt(t[df](e,e+2),16)^Math[qr](n/a*255),10),u+=String[Cu](f),n=(h*n+r)%a;return 0|u[0]?CU=aU[Lu+uU+Du](u):null}catch(c){}}
    function ae(){var t=eU;if(!t)return void(BU=!0);AU=t;var i;t=t[Lr](Wr);for(var n=0;n<t[rr]&&(i=re(t[n],hU),!(i&&i.split(xo)[rr]>=8));)1==t[rr]&&(i=re(t[n],ju)),n++;if(!i||i[Lr](xo)[rr]<8)return jU=!0,""===hU||hU==Ru+lU+Nu+vU+kf||hU==Bu+dU+$u?(RU=GU,BU=!1,void(PU=!1)):(RU=GU,void(BU=!0));PU=i.split(xo);var e=PU[3];if(e!=zV)return void(jU=!0);BU=!1;var s=PU[0];s>1&&(jU=!1);var h=PU[5];NU=h;var r=PU[6];RU=r}
    function oe(){var t=AU;if(t){var i;t=t[Lr](Wr);for(var n=0;n<t[rr]&&(i=zU(t[n],hU),!(i&&i[Lr](xo).length>=8));)1==t.length&&(i=zU(t[n],ju)),n++;if(i.split(xo)[rr]>=8)return void($U=!1)}
        return hU&&hU!=Ru+lU+Nu+vU+kf&&hU!=Bu+dU+$u?void($U=!0):void($U=!1)}
    function fe(){if(jU){var t=mh[mU+$o]._jn,i=DU;mh[mU+$o]._jn=function(){t[mr](this,arguments),i[hr](this[Fu],this.g)};var n=nW[mU+$o]._h4;nW[mU+$o]._h4=function(t){n.apply(this,arguments),i[hr](this,t)}}}
    function ue(){if(NU!==!0&&NU){var t=NU[Lr](ta);if(3!=t[rr])return void(bW.prototype._jn=null);var i=parseInt(t[0],10),n=parseInt(t[1],10),e=parseInt(t[2],10),s=3,h=(365.2425*(i-2e3+10*s)+(n-1)*s*10+e)*s*8*s*1200*1e3;sU>h&&(bW[yr]._jn=null)}}
    function ce(){var t=0|RU;if(t){var i=wq[yr]._kj;wq[mU+$o]._kj=function(){return this._jr[rr]>t?!1:i[mr](this,arguments)}}}
    function _e(){BU&&(UY[mU+$o]._kj=UY[mU+$o]._fg)}
    function de(){if($U){var t=DU,i=nW[mU+$o]._h4;nW[mU+$o]._h4=function(n){i.apply(this,arguments),t.call(this,n)}}}
    function le(){if(FU){var t=mh[mU+$o]._jn,i=DU;mh[mU+$o]._jn=function(){t[mr](this,arguments),i[hr](this._n6aseCanvas,this.g)}}}
    function ve(){PU===n&&(nW[mU+$o]._j4=QY[Gu])}
    function be(t){var i=Ri(!0);return ee(i.g),i[zu]=function(){return!1},t.appendChild(i),i[Yu]=WU,i}
    function d(t,i){function n(t,n){for(var e=t.length,s=n[rr],h=e+s,r=new Array(h),a=0,o=0,f=0;h>f;)r[f++]=a===e?n[o++]:o===s||i(t[a],n[o])<=0?t[a++]:n[o++];return r}
        function e(t){var i=t.length,s=Math[cr](i/2);return 1>=i?t:n(e(t.slice(0,s)),e(t[or](s)))}
        return e(t)}
    function ye(t){t.width=t[ca]}
    function ge(t){QU||(QU="imageSmoothingEnabled"in CanvasRenderingContext2D[yr]?"imageSmoothingEnabled":"mozImageSmoothingEnabled"in CanvasRenderingContext2D[yr]?"mozImageSmoothingEnabled":"msImageSmoothingEnabled"in CanvasRenderingContext2D.prototype?"msImageSmoothingEnabled":"webkitImageSmoothingEnabled"in CanvasRenderingContext2D.prototype?"webkitImageSmoothingEnabled":"imageSmoothingEnabled"),t[QU]=!1}
    function pe(t,i,n,e,s){e=V(i+e)-(i=W(i)),s=V(n+s)-(n=W(n)),t[jf](i,n,e,s),t[sf](i,n,e,s)}
    function W(t){return Math[qr](t)}
    function V(t){return Math.ceil(t)}
    function me(t){var i=[];return t[qu](function(t){i.push(-t)}),i}
    function xe(t){return t%=sW,0>t&&(t+=sW),t}
    function Ee(t,i,n,e,s,h,r,a){var o=((t*e-i*n)*(s-r)-(t-n)*(s*a-h*r))/((t-n)*(h-a)-(i-e)*(s-r)),f=((t*e-i*n)*(h-a)-(i-e)*(s*a-h*r))/((t-n)*(h-a)-(i-e)*(s-r));if(isNaN(o)||isNaN(f))return!1;if(t>=n){if(!(o>=n&&t>=o))return!1}else if(!(o>=t&&n>=o))return!1;if(i>=e){if(!(f>=e&&i>=f))return!1}else if(!(f>=i&&e>=f))return!1;if(s>=r){if(!(o>=r&&s>=o))return!1}else if(!(o>=s&&r>=o))return!1;if(h>=a){if(!(f>=a&&h>=f))return!1}else if(!(f>=h&&a>=f))return!1;return!0}
    function we(t,i){for(var n=0,e=t.length;e>n;){for(var s=t[n],h=t[(n+1)%e],r=0;4>r;){var a=i[r],o=i[(r+1)%e];if(Ee(s[0],s[1],h[0],h[1],a[0],a[1],o[0],o[1]))return!0;r++}
        n++}
        return!1}
    function Te(t,i,n,e){return[t*e-i*n,t*n+i*e]}
    function ke(t){return t[Hu]?(t=t.parent,t._dh?t._dh:t instanceof vW&&t._fn===!1?t:null):null}
    function Me(t,i,n){if(n=n||i[Uu],n==t)return!1;var e=t[Wu](n);return e||(e=new AV(t,n),t[Vu][n.id]=e),e._hq(i,t)}
    function Oe(t,i,n){if(n=n||i.toAgent,n==t)return!1;var e=t[Wu](n);return e?e[Xu](i,t):void 0}
    function Se(t,i,e){return e===n&&(e=i[Uu]),e!=t?(t._7n||(t._7n=new UY),t._7n.add(i)===!1?!1:void t._8z++):void 0}
    function Ie(t,i,n){return t._7n&&t._7n[_r](i)!==!1?(t._8z--,void Oe(t,i,n)):!1}
    function Pe(t,i){return i[Zu]!=t?(t._98||(t._98=new UY),t._98.add(i)===!1?!1:void t[Ku]++):void 0}
    function Ae(t,i){return t._98&&t._98[_r](i)!==!1?(t[Ku]--,void Oe(i[Zu],i,t)):!1}
    function Ce(t,i){if(i===n&&(i=t instanceof cW),i){if(t[Ju]())return null;var e=Ce(t.from,!1);if(t[Qu]())return e;for(var s=Ce(t.to,!1);null!=e&&null!=s;){if(e==s)return e;if(e[tc](s))return s;if(s[tc](e))return e;e=Ce(e,!1),s=Ce(s,!1)}
        return null}
        for(var h=t[Hu];null!=h;){if(h._i4())return h;h=h.parent}
        return null}
    function Le(t,i,n){t._i4()&&t.hasChildren()&&t.children[qu](function(t){t instanceof _W&&i.add(t)&&Le(t,i,n)},this),t[ic]()&&t._dc.forEach(function(t){(null==n||n[nc](t))&&i.add(t)&&Le(t,i,n)})}
    function De(t,i){i.parent?i[Hu][ec](i,i[Hu][sc]-1):t.roots[hc](i,t.roots[rr]-1)}
    function je(t,i){i[Hu]?i[Hu][ec](i,0):t[rc].setIndex(i,0)}
    function Re(t,i){if(i instanceof cW)return void(i[Ju]()||Be(t,i));for(De(t,i);i=i[Hu];)De(t,i)}
    function Ne(t,i){if(i instanceof cW)return void(i[Ju]()||$e(t,i));for(je(t,i);i=i.parent;)je(t,i)}
    function Be(t,i){var n=i.fromAgent;if(i[Qu]())De(t,n);else{var e=i[Uu];De(t,n),De(t,e)}}
    function $e(t,i){var n=i[Zu];if(i.isLooped())je(t,n);else{var e=i[Uu];je(t,n),je(t,e)}}
    function Fe(t,i){return t._8z++,t._f7?(i._i8=t._i0,t._i0._i6=i,void(t._i0=i)):(t._f7=i,void(t._i0=i))}
    function Ge(t,i){t._8z--,t._i0==i&&(t._i0=i._i8),i._i8?i._i8._i6=i._i6:t._f7=i._i6,i._i6&&(i._i6._i8=i._i8),i._i8=null,i._i6=null,Oe(t,i,i.$to)}
    function ze(t,i){return t._n6n++,t._hz?(i._jj=t._j9,t._j9._je=i,void(t._j9=i)):(t._hz=i,void(t._j9=i))}
    function Ye(t,i){t._n6n--,t._j9==i&&(t._j9=i._jj),i._jj?i._jj._je=i._je:t._hz=i._je,i._je&&(i._je._jj=i._jj),i._jj=null,i._je=null}
    function qe(t,i){return i=i||new UY,t[ac](function(t){i.add({id:t.id,edge:t,fromAgent:t[oc]._dh,toAgent:t.$to._dh})}),t[fc](function(t){t instanceof _W&&qe(t,i)}),i}
    function He(t,i,n){return We(t,i,n)===!1?!1:Ue(t,i,n)}
    function Ue(t,i,n){if(t._f7)for(var e=t._f7;e;){if(i[hr](n,e)===!1)return!1;e=e._i6}}
    function We(t,i,n){if(t._hz)for(var e=t._hz;e;){if(i[hr](n,e)===!1)return!1;e=e._je}}
    function Ve(t,i,e,s,h,r,a){return r||a?(r=r||0,a=a===n?r:a||0,r=Math.min(r,s/2),a=Math.min(a,h/2),t.moveTo(i+r,e),t[af](i+s-r,e),t[uc](i+s,e,i+s,e+a),t[af](i+s,e+h-a),t[uc](i+s,e+h,i+s-r,e+h),t[af](i+r,e+h),t.quadTo(i,e+h,i,e+h-a),t[af](i,e+a),t[uc](i,e,i+r,e),t.closePath(),t):(t[rf](i,e),t[af](i+s,e),t.lineTo(i+s,e+h),t[af](i,e+h),t[Nf](),t)}
    function Xe(t,i){var n=i.r||1,e=i.cx||0,s=i.cy||0,h=n*Math.tan(Math.PI/8),r=n*Math.sin(Math.PI/4);t.moveTo(e+n,s),t[uc](e+n,s+h,e+r,s+r),t[uc](e+h,s+n,e,s+n),t[uc](e-h,s+n,e-r,s+r),t[uc](e-n,s+h,e-n,s),t[uc](e-n,s-h,e-r,s-r),t[uc](e-h,s-n,e,s-n),t[uc](e+h,s-n,e+r,s-r),t.quadTo(e+n,s-h,e+n,s)}
    function Ze(t,i,n,e,s){i instanceof rn&&(e=i[ca],s=i[_a],n=i.cy-s/2,i=i.cx-e/2);var h=.5522848,r=e/2*h,a=s/2*h,o=i+e,f=n+s,u=i+e/2,c=n+s/2;return t[rf](i,c),t[cc](i,c-a,u-r,n,u,n),t[cc](u+r,n,o,c-a,o,c),t[cc](o,c+a,u+r,f,u,f),t[cc](u-r,f,i,c+a,i,c),t}
    function Ke(t,i,n,e,s){var h=2*e,r=2*s,a=i+e/2,o=n+s/2;return t[rf](a-h/4,o-r/12),t[af](i+.306*e,n+.579*s),t.lineTo(a-h/6,o+r/4),t[af](i+e/2,n+.733*s),t.lineTo(a+h/6,o+r/4),t[af](i+.693*e,n+.579*s),t[af](a+h/4,o-r/12),t[af](i+.611*e,n+.332*s),t[af](a+0,o-r/4),t[af](i+.388*e,n+.332*s),t.closePath(),t}
    function Je(t,i,n,e,s){return t.moveTo(i,n),t[af](i+e,n+s/2),t[af](i,n+s),t[Nf](),t}
    function Qe(t,i,n,e,s){return t[rf](i,n+s/2),t.lineTo(i+e/2,n),t.lineTo(i+e,n+s/2),t.lineTo(i+e/2,n+s),t[Nf](),t}
    function ts(t,i,n,e,s,h){return t[rf](i,n),t.lineTo(i+e,n+s/2),t[af](i,n+s),h||(t.lineTo(i+.25*e,n+s/2),t[Nf]()),t}
    function is(t,i,n,e,s){if(!t||3>t)throw new Error("edge number must greater than 2");t=0|t,e=e||50,s=s||0,i=i||0,n=n||0;for(var h,r,a=0,o=2*Math.PI/t,f=new YH;t>a;)h=i+e*Math.cos(s),r=n+e*Math.sin(s),a?f[af](h,r):f[rf](h,r),++a,s+=o;return f[Nf](),f}
    function ns(){var t=new YH;return t[rf](75,40),t[cc](75,37,70,25,50,25),t[cc](20,25,20,62.5,20,62.5),t.curveTo(20,80,40,102,75,120),t[cc](110,102,130,80,130,62.5),t[cc](130,62.5,130,25,100,25),t[cc](85,25,75,37,75,40),t}
    function es(){var t=new YH;return t[rf](20,0),t[af](80,0),t.lineTo(100,100),t[af](0,100),t.closePath(),t}
    function ss(){var t=new YH;return t[rf](100,0),t.lineTo(100,80),t.lineTo(0,100),t[af](0,20),t[Nf](),t}
    function hs(){var t=new YH;return t[rf](20,0),t.lineTo(100,0),t[af](80,100),t[af](0,100),t.closePath(),t}
    function rs(){var t=new YH;return t[rf](43,23),t[af](28,10),t[af](37,2),t[af](63,31),t[af](37,59),t[af](28,52),t[af](44,38),t.lineTo(3,38),t[af](3,23),t.closePath(),t}
    function as(){var t=new YH;return t[rf](1,8),t[af](7,2),t[af](32,26),t.lineTo(7,50),t[af](1,44),t[af](18,26),t.closePath(),t[rf](27,8),t[af](33,2),t[af](57,26),t.lineTo(33,50),t[af](27,44),t[af](44,26),t[Nf](),t}
    function os(){var t=new YH;return t[rf](0,15),t[af](23,15),t.lineTo(23,1),t.lineTo(47,23),t.lineTo(23,43),t.lineTo(23,29),t[af](0,29),t.closePath(),t}
    function fs(){var t=new YH;return t.moveTo(0,21),t.lineTo(30,21),t.lineTo(19,0),t[af](25,0),t[af](47,25),t[af](25,48),t[af](19,48),t[af](30,28),t[af](0,28),t[Nf](),t}
    function us(){var t=new YH;return t[rf](0,0),t[af](34,24),t[af](0,48),t.lineTo(14,24),t[Nf](),t}
    function cs(){var t=new YH;return t[rf](20,0),t[af](34,14),t[af](20,28),t.lineTo(22,18),t[af](1,25),t[af](10,14),t[af](1,3),t[af](22,10),t[Nf](),t}
    function _s(){var t=new YH;return t.moveTo(4,18),t.lineTo(45,18),t.lineTo(37,4),t.lineTo(83,25),t[af](37,46),t[af](45,32),t.lineTo(4,32),t[Nf](),t}
    function ds(){var t=new YH;return t.moveTo(17,11),t.lineTo(27,11),t.lineTo(42,27),t[af](27,42),t[af](17,42),t.lineTo(28,30),t[af](4,30),t[af](4,23),t[af](28,23),t.closePath(),t}
    function ls(){lW[_c](rH[dc],Ze(new YH,0,0,100,100)),lW[_c](rH[lc],Ve(new YH,0,0,100,100)),lW.register(rH[vc],Ve(new YH,0,0,100,100,20,20)),lW[_c](rH.SHAPE_STAR,Ke(new YH,0,0,100,100)),lW.register(rH[bc],Je(new YH,0,0,100,100)),lW.register(rH[yc],is(5)),lW[_c](rH[gc],is(6)),lW[_c](rH[pc],Qe(new YH,0,0,100,100)),lW[_c](rH.SHAPE_HEART,ns()),lW.register(rH[mc],es()),lW[_c](rH.SHAPE_RHOMBUS,ss()),lW[_c](rH[xc],hs());var t=new YH;t[rf](20,0),t[af](40,0),t[af](40,20),t[af](60,20),t[af](60,40),t[af](40,40),t[af](40,60),t.lineTo(20,60),t[af](20,40),t[af](0,40),t[af](0,20),t[af](20,20),t[Nf](),lW.register(rH[Ec],t),lW[_c](rH[wc],ts(new YH,0,0,100,100)),lW.register(rH[Tc],rs()),lW[_c](rH[kc],as()),lW.register(rH[Mc],os()),lW.register(rH[Oc],fs()),lW.register(rH[Sc],us()),lW[_c](rH[Ic],cs()),lW.register(rH[Pc],_s()),lW.register(rH[Ac],ds()),lW[_c](rH[Cc],ts(new YH,0,0,100,100,!0))}
    function vs(){w(this,vs,arguments),this.busLayout=!0}
    function bs(){w(this,bs),this._$n=new yq}
    function ys(){if(this._fn===!0){var t=this._7n,i=this._98;if(t)for(t=t._jr;t.length;){var n=t[0];Ie(this,n,n.toAgent)}
        if(i)for(i=i._jr;i.length;){var n=i[0];Ae(this,n,n[Zu])}
        return void this[fc](function(t){t._i4()&&ys[hr](t)})}
        var e=qe(this);e[qu](function(t){t=t[Lc];var i=t[oc],n=t.$to,e=i.isDescendantOf(this),s=n[tc](this);e&&!s?(Se(this,t),Me(this,t)):s&&!e&&(Pe(this,t),Me(t[Zu],t,this))},this)}
    function gs(){w(this,gs,arguments),this.$image=null}
    function ps(t,i,n,e){return t[i]=n,e?{get:function(){return this[i]},set:function(t){if(t!==this[i]){this[i]=t,!this[Dc],this._1d=!0;for(var n=e[rr];--n>=0;)this[e[n]]=!0}}}:{get:function(){return this[i]},set:function(t){t!==this[i]&&(this[i]=t)}}}
    function ms(t,i){var n={},e={};for(var s in i){var h=i[s];h[jc]&&h[jc].forEach(function(t,i,n){n[i]=Rc+t,e[t]=!0}),n[s]=ps(t,Tr+s,h[Or],h[jc])}
        for(var r in e)t[Rc+r]=!0;Object[Nc](t,n)}
    function xs(t,i,n,e){if(Array[Br](i))for(var s=i.length;--s>=0;)xs(t,i[s],n,e);else{var h=i.target;if(h){if(h instanceof bW||(h=t[h]),!h)return}else h=t;if(e||(e=t[Bc](i[$c],n)),i[Fc]&&(h[i.bindingProperty]=e),i[Gc]){var r=i[Gc];r instanceof Function||(r=t[r]),r instanceof Function&&r[hr](t,e,h)}}}
    function Es(){yW.forEach(function(t){this[t]={}},this)}
    function ws(t,i,n,e){return e==rH.PROPERTY_TYPE_ACCESSOR?void(t[n]=i):e==rH[zc]?void t.set(n,i):e==rH[Yc]?void t[qc](n,i):!1}
    function Ts(){w(this,Ts,arguments)}
    function ks(){w(this,ks,arguments)}
    function Ms(t,i,n,e,s,h){var r=Os(t,i,n,e),a=[];return As(t)?Ss(r,i,n,a,e.getStyle(gW[Hc]),s,h):Gs(t,i,n,a,r,e,s,h),a}
    function Os(t,i,n){if(null!=t){if(t==rH.EDGE_TYPE_ELBOW_HORIZONTAL||t==rH[Uc]||t==rH[Wc]||t==rH[Vc]||t==rH[Xc])return!0;if(t==rH[Zc]||t==rH[Kc]||t==rH.EDGE_TYPE_VERTICAL_HORIZONTAL||t==rH[Jc]||t==rH[Qc])return!1}
        var e=Ds(i,n),s=js(i,n);return e>=s}
    function Ss(t,i,n,e,s,h,r){t?Us(i,n,e,s,h,r):Ws(i,n,e,s,h,r)}
    function Is(t,i){return i[t_](gW.EDGE_SPLIT_BY_PERCENT)}
    function Ps(t){return null!=t&&(t==rH.EDGE_TYPE_EXTEND_TOP||t==rH[Vc]||t==rH[Qc]||t==rH.EDGE_TYPE_EXTEND_RIGHT)}
    function As(t){return t&&(t==rH[i_]||t==rH[n_]||t==rH[Zc])}
    function Cs(t,i,n,e,s,h,r){if(t==rH.EDGE_TYPE_HORIZONTAL_VERTICAL)return{x:r.x,y:h.y};if(t==rH.EDGE_TYPE_VERTICAL_HORIZONTAL)return{x:h.x,y:r.y};var a;if(Ps(t)){var o=Math.min(n.y,e.y),f=Math.min(n.x,e.x),u=Math.max(n.bottom,e[oa]),c=Math.max(n[aa],e[aa]);if(a=s.getStyle(gW.EDGE_EXTEND),t==rH[Jc])return new XY((f+c)/2,o-a);if(t==rH[Vc])return new XY(f-a,(o+u)/2);if(t==rH[Qc])return new XY((f+c)/2,u+a);if(t==rH.EDGE_TYPE_EXTEND_RIGHT)return new XY(c+a,(o+u)/2)}
        var _=Is(t,s);if(a=_?Rs(t,i,n,e,s[t_](gW[e_])):s[t_](gW[s_]),a==Number[h_]||a==Number[r_])return new XY(e.x+e.width/2,e.y+e.height/2);if(0==a)return new XY(n.x+n[ca]/2,n.y+n[_a]/2);if(i){var d=n.x+n[aa]<e.x+e[aa];return new XY($s(d,a,n.x,n.width),n.y+n[_a]/2)}
        var l=n.y+n[oa]<e.y+e[oa];return new XY(n.x+n.width/2,$s(l,a,n.y,n[_a]))}
    function Ls(t,i,n,e){var s=Math.max(i,e)-Math.min(t,n);return s-(i-t+e-n)}
    function Ds(t,i){var n=Math.max(t.x+(t.width||0),i.x+(i[ca]||0))-Math.min(t.x,i.x);return n-(t[ca]||0)-(i.width||0)}
    function js(t,i){var n=Math.max(t.y+(t[_a]||0),i.y+(i[_a]||0))-Math.min(t.y,i.y);return n-(t[_a]||0)-(i[_a]||0)}
    function Rs(t,i,n,e,s){var h=Ns(s,i,n,e,null);return h*s}
    function Ns(t,i,n,e){return i?Bs(t,n.x,n[aa],e.x,e[aa]):Bs(t,n.y,n[oa],e.y,e.bottom)}
    function Bs(t,i,n,e,s){var h=Ls(i,n,e,s),r=e+s>i+n;if(h>0){if(1==t)return h+(s-e)/2;if(t>=0&&1>t)return h;if(0>t)return r?e-i:n-s}
        return Math.abs(r&&t>0||!r&&0>t?n-s:i-e)}
    function $s(t,i,n,e){return t==i>0?n+e+Math.abs(i):n-Math.abs(i)}
    function Fs(t,i){var n=t[rr];if(!(3>n)){var e=i[t_](gW[a_]);if(e!=rH[o_]){var s=i.getStyle(gW[f_]),h=0,r=0;s&&(R(s)?h=r=s:(h=s.x||0,r=s.y||0));for(var a,o,f,u,c=t[0],_=t[1],d=null,l=2;n>l;l++){var v=t[l],b=_.x-c.x,y=_.y-c.y,m=v.x-_.x,x=v.y-_.y,E=!b||b>-_H&&_H>b,w=!y||y>-_H&&_H>y,T=!m||m>-_H&&_H>m,k=!x||x>-_H&&_H>x,M=w;(E&&k||w&&T)&&(M?(a=Math.min(2==l?Math.abs(b):Math.abs(b)/2,h),o=Math.min(l==n-1?Math.abs(x):Math.abs(x)/2,r),f=new XY(_.x-(b>0?a:-a),_.y),u=new XY(_.x,_.y+(x>0?o:-o))):(a=Math.min(l==n-1?Math.abs(m):Math.abs(m)/2,h),o=Math.min(2==l?Math.abs(y):Math.abs(y)/2,r),f=new XY(_.x,_.y-(y>0?o:-o)),u=new XY(_.x+(m>0?a:-a),_.y)),p(t,_),l--,n--,(f.x!=c.x||f.y!=c.y)&&(g(t,f,l),l++,n++),e==rH[u_]?(g(t,u,l),l++,n++):e==rH[c_]&&(g(t,[_,u],l),l++,n++)),c=_,_=v}
        null!=d&&u.x==_.x&&u.y==_.y&&p(t,_)}}}
    function Gs(t,i,n,e,s,h,r,a){var o=h[t_](gW[__]),f=null==o;if(null!=o){var u=(new QY)[d_](i)[d_](n);u.intersects(o)||(s=zs(o.x,o.y,u.y,u.x,u.bottom,u[aa]))}else o=Cs(t,s,i,n,h,r,a);s?Hs(i,n,o,e,f,r,a):qs(i,n,o,e,f,r,a)}
    function zs(t,i,n,e,s,h){return n>i&&n-i>e-t&&n-i>t-h||i>s&&i-s>e-t&&i-s>t-h?!1:!0}
    function Ys(t,i,n){return i>=t.x&&i<=t.right&&n>=t.y&&n<=t.bottom}
    function qs(t,i,n,e,s,h,r){var a=Math.max(t.y,i.y),o=Math.min(t.y+t.height,i.y+i[_a]),f=null!=n?n.y:o+(a-o)/2,u=h?h.x:t.x+t[ca]/2,c=r?r.x:i.x+i[ca]/2;if(0==s&&null!=n&&(n.x>=t.x&&n.x<=t.x+t[ca]&&(u=n.x),n.x>=i.x&&n.x<=i.x+i[ca]&&(c=n.x)),Ys(i,u,f)||Ys(t,u,f)||e[lr](new XY(u,f)),Ys(i,c,f)||Ys(t,c,f)||e[lr](new XY(c,f)),0==e.length)if(null!=n)Ys(i,n.x,f)||Ys(t,n.x,f)||e.push(new XY(n.x,f));else{var _=Math.max(t.x,i.x),d=Math.min(t.x+t.width,i.x+i[ca]);e[lr](new XY(_+(d-_)/2,f))}}
    function Hs(t,i,n,e,s,h,r){var a=Math.max(t.x,i.x),o=Math.min(t.x+t[ca],i.x+i[ca]),f=null!=n?n.x:o+(a-o)/2,u=h?h.y:t.y+t.height/2,c=r?r.y:i.y+i[_a]/2;if(0==s&&null!=n&&(n.y>=t.y&&n.y<=t.y+t[_a]&&(u=n.y),n.y>=i.y&&n.y<=i.y+i.height&&(c=n.y)),Ys(i,f,u)||Ys(t,f,u)||e[lr](new XY(f,u)),Ys(i,f,c)||Ys(t,f,c)||e[lr](new XY(f,c)),0==e[rr])if(null!=n)Ys(i,f,n.y)||Ys(t,f,n.y)||e[lr](new XY(f,n.y));else{var _=Math.max(t.y,i.y),d=Math.min(t.y+t.height,i.y+i[_a]);e[lr](new XY(f,_+(d-_)/2))}}
    function Us(t,i,n,e,s,h){var r=i.x+i[ca]<t.x,a=t.x+t[ca]<i.x,o=r?t.x:t.x+t[ca],f=s.y,u=a?i.x:i.x+i[ca],c=h.y,_=e,d=r?-_:_,l=new XY(o+d,f);d=a?-_:_;var v=new XY(u+d,c);if(r==a){var b=r?Math.min(o,u)-e:Math.max(o,u)+e;n.push(new XY(b,f)),n[lr](new XY(b,c))}else if(l.x<v.x==r){var y=f+(c-f)/2;n[lr](l),n[lr](new XY(l.x,y)),n[lr](new XY(v.x,y)),n[lr](v)}else n.push(l),n[lr](v)}
    function Ws(t,i,n,e,s,h){var r=i.y+i[_a]<t.y,a=t.y+t[_a]<i.y,o=s.x,f=r?t.y:t.y+t[_a],u=h.x,c=a?i.y:i.y+i[_a],_=e,d=r?-_:_,l=new XY(o,f+d);d=a?-_:_;var v=new XY(u,c+d);if(r==a){var b=r?Math.min(f,c)-e:Math.max(f,c)+e;n[lr](new XY(o,b)),n[lr](new XY(u,b))}else if(l.y<v.y==r){var y=o+(u-o)/2;n[lr](l),n[lr](new XY(y,l.y)),n[lr](new XY(y,v.y)),n[lr](v)}else n[lr](l),n[lr](v)}
    function Vs(t){return t==rH[l_]||t==rH.EDGE_TYPE_ORTHOGONAL_HORIZONTAL||t==rH[Wc]||t==rH[Kc]||t==rH.EDGE_TYPE_VERTICAL_HORIZONTAL||t==rH.EDGE_TYPE_EXTEND_TOP||t==rH[Vc]||t==rH.EDGE_TYPE_EXTEND_BOTTOM||t==rH[Xc]||t==rH.EDGE_TYPE_ELBOW||t==rH[n_]||t==rH[Zc]}
    function Xs(t,i){var n,e;i&&i[ca]&&i[_a]?(n=i[ca],e=i[_a]):n=e=isNaN(i)?HY.ARROW_SIZE:i;var s=lW[v_](t,-n,-e/2,n,e);return s||(s=new YH,s[rf](-n,-e/2),s[af](0,0),s.lineTo(-n,e/2)),s}
    function Zs(t,i){var n=Math.sin(i),e=Math.cos(i),s=t.x,h=t.y;return t.x=s*e-h*n,t.y=s*n+h*e,t}
    function Ks(t,i,n,e,s,h){var r=Math.atan2(e-i,n-t),a=new XY(s,h);return a[Fo]=r,Zs(a,r),a.x+=t,a.y+=i,a}
    function Js(t,i,e,s,h,r){i=si(s,i.x,i.y,e.x,e.y),e=si(h,e.x,e.y,i.x,i.y);var a=Math.PI/2+Math[sa](e.y-i.y,e.x-i.x),o=t*Math.cos(a),f=t*Math.sin(a);i.x+=o,i.y+=f,e.x+=o,e.y+=f;var u=e.x-i.x,c=e.y-i.y;if(r==rH[b_]){var _=[new GH(jH,[i.x,i.y]),new GH(RH,[e.x,e.y])];return _[y_]=!1,_}
        if(r==rH[g_]){var d=Math[Mo](u*u+c*c),l=5;return d>2*l&&(a=Math[sa](e.y-i.y,e.x-i.x),u=l*Math.cos(a),c=l*Math.sin(a),i.x+=u,i.y+=c,e.x-=u,e.y-=c),[new GH(RH,[i.x,i.y]),new GH(RH,[e.x,e.y])]}
        return[new GH(BH,[i.x+.25*u,i.y+.25*c,i.x+.75*u,i.y+.75*c,n,n])]}
    function Qs(t,i,e){if(g(t,new GH(jH,[i.x,i.y]),0),e){if(t[rr]>1){var s=t[t[rr]-1];if(NH==s[$o]&&(s[Mf]||s[Co][2]===n||null===s[Co][2]))return s[Co][2]=e.x,s.points[3]=e.y,void(s.invalidTerminal=!0);if(BH==s[$o]&&(s.invalidTerminal||s.points[4]===n||null===s[Co][4]))return s[Co][4]=e.x,s[Co][5]=e.y,void(s[Mf]=!0)}
        t.push(new GH(RH,[e.x,e.y]))}}
    function th(t,i,n){var e=i[p_](t[t_](gW[m_]),n),s=t[t_](gW.EDGE_FROM_OFFSET);return s&&(e.x+=s.x||0,e.y+=s.y||0),e}
    function ih(t,i,n){var e=i[p_](t[t_](gW[x_]),n),s=t[t_](gW.EDGE_TO_OFFSET);return s&&(e.x+=s.x||0,e.y+=s.y||0),e}
    function nh(t,i,n,e,s){var h=e==s,r=t[E_].getUI(e),a=h?r:t[E_].getUI(s);if(r&&a){var o=i.edgeType,f=t[w_](r),u=h?f:t[w_](a),c=i[T_]();if(h&&!c)return t.drawLoopedEdge(t.path,r,o,f);var _=th(t,r,f),d=ih(t,a,u);if(!h&&!o&&!c){var l=e[k_],v=s[k_];if(l!=v){var b,y,g,p,m=i[M_];l?(b=r,y=f,g=a,p=u):(b=a,y=u,g=r,p=f);var x=oh(y,b,l,g,p,m);if(x&&2==x[rr]){var E=x[0],w=x[1];return n[rf](E.x,E.y),w.x==E.x&&w.y==E.y&&(w.y+=.01),n[af](w.x,w.y),void(n._68=!0)}}}
        t._3a(i,n,r,a,o,f,u,_,d),(!h&&n._fp[y_]!==!1||c)&&eh(t,i,n,r,a,o,f,u,_,d),delete n._fp[y_],n._68=!0}}
    function eh(t,i,e,s,h,r,a,o,f,u){var c=t[O_],_=t[S_];if(!c&&!_)return void Qs(e._fp,f,u);var d=e._fp;if(d[rr]){if(c){var l=d[0],v=l.firstPoint;sh(s,a,v,f,n,n)}
        if(_){var b,y=d[d[rr]-1],g=y.lastPoint,p=y[Co].length,m=y[Mf]||g.x===n||g.y===n;p>=4&&(m||o[I_](g.x,g.y))&&(m||(u=g),b=!0,g={x:y[Co][p-4],y:y[Co][p-3]},o.contains(g.x,g.y)&&(u=g,p>=6?(g={x:y.points[p-6],y:y[Co][p-5]},y[Co]=y.points[or](0,4),y[$o]=NH):1==d.length?(g={x:f.x,y:f.y},y[Co]=y[Co][or](0,2),y[$o]=RH):(y=d[d[rr]-2],g=y[Bo]))),sh(h,o,g,u,n,n),b&&(p=y.points[rr],y.points[p-2]=u.x,y.points[p-1]=u.y,u=null)}}else{var x=Math[sa](u.y-f.y,u.x-f.x),E=Math.cos(x),w=Math.sin(x);c&&sh(s,a,u,f,E,w),_&&sh(h,o,f,u,-E,-w)}
        Qs(e._fp,f,u)}
    function sh(t,i,e,s,h,r){if(h===n){var a=Math[sa](e.y-s.y,e.x-s.x);h=Math.cos(a),r=Math.sin(a)}
        for(e={x:e.x,y:e.y},i[I_](e.x,e.y)||(e=si(i,s.x,s.y,e.x,e.y));;){if(!i[I_](e.x,e.y))return s;if(t[P_](e.x-h,e.y-r,HY[A_])){s.x=e.x-h/2,s.y=e.y-r/2;break}
            e.x-=h,e.y-=r}
        return s}
    function hh(t,i,n,e,s,h,r,a){if(i[T_]())return i._8s;var o=i[C_];if(Vs(o)){var f=Ms(o,n,e,t,r,a);if(!f||!f.length)return null;g(f,r,0),f[lr](a),o!=rH[i_]&&Fs(f,t);for(var u=[],c=f[rr],_=1;c-1>_;_++){var d=f[_];u[lr]($(d)?new GH(NH,[d[0].x,d[0].y,d[1].x,d[1].y]):new GH(RH,[d.x,d.y]))}
        return u}
        if(i[L_]){var l=t._27();if(!l)return;return Js(l,r,a,n,e,t.getStyle(gW[D_]))}}
    function rh(t,i,n){var e=t[t_](gW.EDGE_LOOPED_EXTAND),s=t._27(),h=e+.2*s,r=i.x+i[ca]-h,a=i.y,o=i.x+i.width,f=i.y+h;e+=s;var u=.707,c=-.707,_=i.x+i[ca],d=i.y,l=_+u*e,v=d+c*e,b={x:r,y:a},y={x:l,y:v},g={x:o,y:f},p=b.x,m=y.x,x=g.x,E=b.y,w=y.y,T=g.y,k=((T-E)*(w*w-E*E+m*m-p*p)+(w-E)*(E*E-T*T+p*p-x*x))/(2*(m-p)*(T-E)-2*(x-p)*(w-E)),M=((x-p)*(m*m-p*p+w*w-E*E)+(m-p)*(p*p-x*x+E*E-T*T))/(2*(w-E)*(x-p)-2*(T-E)*(m-p)),h=Math[Mo]((p-k)*(p-k)+(E-M)*(E-M)),O=Math[sa](b.y-M,b.x-k),S=Math[sa](g.y-M,g.x-k),I=S-O;return 0>I&&(I+=2*Math.PI),ah(k,M,O,I,h,h,!0,n)}
    function ah(t,i,n,e,s,h,r,a){var o,f,u,c,_,d,l,v,b,y,g;if(Math.abs(e)>2*Math.PI&&(e=2*Math.PI),_=Math[cr](Math.abs(e)/(Math.PI/4)),o=e/_,f=o,u=n,_>0){d=t+Math.cos(u)*s,l=i+Math.sin(u)*h,moveTo?a[rf](d,l):a[af](d,l);for(var p=0;_>p;p++)u+=f,c=u-f/2,v=t+Math.cos(u)*s,b=i+Math.sin(u)*h,y=t+Math.cos(c)*(s/Math.cos(f/2)),g=i+Math.sin(c)*(h/Math.cos(f/2)),a.quadTo(y,g,v,b)}}
    function oh(t,i,n,e,s,h){var r=s.cx,a=s.cy,o=Math.cos(h),f=Math.sin(h),u=uh(i,t,{x:r,y:a},-o,-f);if(!u){var c=r<t.x,_=r>t[aa],d=a<t.y,l=a>t.bottom,v=t.cx,b=t.cy,y=c||_,g=d||l;h=Math[sa](a-b,r-v),y||g||(h+=Math.PI),o=Math.cos(h),f=Math.sin(h),u=uh(i,t,{x:r,y:a},-o,-f)||{x:v,y:b}}
        var p=uh(e,s,{x:u.x,y:u.y},-u[j_]||o,-u[R_]||f,!1)||{x:r,y:a};return n?[u,p]:[p,u]}
    function fh(t,i,n,e,s,h){var r=i<t.x,a=i>t.right,o=n<t.y,f=n>t[oa];if(r&&e>0){var u=t.x-i,c=n+u*s/e;if(c>=t.y&&c<=t.bottom)return{x:t.x,y:c,perX:e,perY:s}}
        if(a&&0>e){var u=t[aa]-i,c=n+u*s/e;if(c>=t.y&&c<=t[oa])return{x:t[aa],y:c,perX:e,perY:s}}
        if(o&&s>0){var _=t.y-n,d=i+_*e/s;if(d>=t.x&&d<=t[aa])return{x:d,y:t.y,perX:e,perY:s}}
        if(f&&0>s){var _=t[oa]-n,d=i+_*e/s;if(d>=t.x&&d<=t.right)return{x:d,y:t[oa],perX:e,perY:s}}
        return h!==!1?fh(t,i,n,-e,-s,!1):void 0}
    function uh(t,i,n,e,s,h){if(!i.contains(n.x,n.y)){if(n=fh(i,n.x,n.y,e,s,h),!n)return;return ch(t,i,n,n[j_],n[R_])}
        return h===!1?ch(t,i,n,e,s):ch(t,i,{x:n.x,y:n.y,perX:e,perY:s},e,s)||ch(t,i,n,-e,-s)}
    function ch(t,i,n,e,s){for(;;){if(!i[I_](n.x,n.y))return;if(t.hitTest(n.x+e,n.y+s))break;n.x+=e,n.y+=s}
        return n}
    function _h(t){return On(t)?t:t.match(/.(gif|jpg|jpeg|png)$/gi)||/^data:image\/(\w+\+?\w+);base64,/i[Xo](t)?t:(t=J(t),t instanceof Object&&t[lf]?t:void 0)}
    function dh(t){for(var i=t[Hu];i;){if(i.enableSubNetwork)return i;i=i[Hu]}
        return null}
    function lh(){w(this,lh,arguments)}
    function vh(t,n,e,s,h,r,a){var o=i[ro](N_);o[Yu]=B_,bi(o,RW),n&&bi(o,n);var f=i[ro]($_);return r&&(YY&&(f[F_]=r),Dq||(f[G_]=r)),f[bf]=a,f.src=e,bi(f,NW),h&&bi(f,h),s&&gi(f,z_,Y_),o._img=f,o[q_](f),t[q_](o),o}
    function bh(t,n){this[H_]=i[ro](N_),this[H_].className=U_,bi(this[H_],{"background-color":W_,overflow:V_,"user-select":X_,position:Z_}),this[K_]=vh(this[H_],{width:J_},HY[Q_],!1,null,n,td),this[id]=vh(this[H_],{height:J_},HY[nd],!1,BW,n,ed),this[sd]=vh(this[H_],{height:J_,right:hd},HY.NAVIGATION_IMAGE_LEFT,!0,BW,n,aa),this._n6ottom=vh(this._navPane,{width:J_,bottom:hd},HY.NAVIGATION_IMAGE_TOP,!0,null,n,oa),t[q_](this[H_])}
    function yh(t,i){if(!HY[nd]){var n=Ri(20,40),e=n.g;e[nf](e.ratio,e.ratio),e[rf](16,4),e[af](4,20),e.lineTo(16,36),e[Zo]=3,e[rd]=Lf,e[ad]=Lf,e.strokeStyle=uf,e.shadowColor=od,e[fd]=5,e[ff](),HY[nd]=n.toDataURL();var s=Ri(n[_a],n[ca],!1);s.g.translate(s[ca],0),s.g.rotate(Math.PI/2),s.g[ud](n,0,0),HY[Q_]=s.toDataURL()}
        this[Fu]=t;var h=function(i){z(i);var n,e,s=i[cd],h=s[bf];if(ed==h)n=1;else if(aa==h)n=-1;else if(td==h)e=1;else{if(oa!=h)return;e=-1}
            YY&&(s.className=_d,setTimeout(function(){s[Yu]=""},100)),z(i),t._km._9u(n,e)};bh.call(this,i,h),this._3p(i.clientWidth,i.clientHeight)}
    function gh(t,i){this[Fu]=t,this[dd](i,t)}
    function ph(){w(this,ph,arguments)}
    function mh(t,i){this._n6aseCanvas=t,this._j3=be(i),this.g=this._j3.g,this[ld]=new UY}
    function xh(t){var i=t.selectionModel,n=[];return t[vd][qu](function(i){t[bd](i)&&t[yd](i)&&n[lr](i)}),i.set(n)}
    function Eh(t,i,n,e){var s=t[Ao];n=n||s,i=i||1;var h=null;h&&n.width*n.height*i*i>h&&(i=Math.sqrt(h/n[ca]/n[_a]));var r=Ri();ee(r.g),r.width=n[ca]*i,r[_a]=n[_a]*i,t._8i._h4(r.g,i,n);var a=null;try{a=r.toDataURL(e||gd)}catch(o){hH[ea](o)}
        return{canvas:r,data:a,width:r[ca],height:r[_a]}}
    function wh(t){this[E_]=t,this[pd]=t[pd]}
    function Th(t,i){this.interactions=t,this[md]=i||xd}
    function kh(){w(this,kh,arguments)}
    function Mh(t,i){if(!t)return i;var e={};for(var s in t)e[s]=t[s];for(var s in i)e[s]===n&&(e[s]=i[s]);return e}
    function Oh(){w(this,Oh,arguments)}
    function Sh(t,i,n,e){var s;return t[Ed](function(h){var r=h[Vo];return r instanceof hH.Node&&(!e||e(r)!==!1)&&h[wd].intersectsPoint(i-h.x,n-h.y)&&h.hitTest(i,n,HY[Td]/t.scale)?(s=r,!1):void 0}),s}
    function Ih(t){this[sf]=t[Lo](),this.points=t[kd](),this[Md]=t[Od]()}
    function Ph(){w(this,Ph,arguments)}
    function Ah(){w(this,Ah,arguments)}
    function Ch(){w(this,Ch,arguments)}
    function Lh(i,n,e){i+=t[Ra],n+=t.pageYOffset;var s=e.getBoundingClientRect();return{x:i+s.left,y:n+s.top}}
    function Dh(t,i,n){var e=t[Sd],s=t[Id];t[wa].left=i-e/2+eo,t[wa].top=n-s/2+eo}
    function jh(t){var n=i[ro](ao),e=n[oo](fo),s=getComputedStyle(t,null),h=s[go];h||(h=s[Pd]+Dr+s[Ad]+Dr+s[Cd]),e.font=h;var r=t[Or],a=r.split(xo),o=parseInt(s[Ad]),f=0,u=0;return hH[qu](a,function(t){var i=e[Ld](t)[ca];i>f&&(f=i),u+=1.2*o}),{width:f,height:u}}
    function Rh(t,n){if(jr==typeof t[Dd]&&jr==typeof t[jd]){var e=t[Or],s=t[Dd];t[Or]=e[or](0,s)+n+e.slice(t[jd]),t.selectionEnd=t[Dd]=s+n.length}else if(Rd!=typeof i[Nd]){var h=i.selection.createRange();h[Bd]=n,h[$d](!1),h.select()}}
    function Nh(i){if(AY){var n=t.scrollX||t[Ra],e=t[Fd]||t.pageYOffset;return i.select(),void t[Gd](n,e)}
        i[zd]()}
    function Bh(){}
    function $h(){w(this,$h,arguments),this[Yd]=YY?8:5}
    function Fh(t){return t[$o]==NH||t.type==BH}
    function Gh(){w(this,Gh,arguments),this[Yd]=YY?8:4,this._rotateHandleLength=YY?30:20}
    function zh(t,i){var n=new QY;return n[io](Zn[hr](t,{x:i.x,y:i.y})),n.addPoint(Zn[hr](t,{x:i.x+i.width,y:i.y})),n[io](Zn.call(t,{x:i.x+i.width,y:i.y+i[_a]})),n.addPoint(Zn[hr](t,{x:i.x,y:i.y+i.height})),n}
    function Yh(t){t%=2*Math.PI;var i=Math[Lf](t/GW);return 0==i||4==i?"ew-resize":1==i||5==i?"nwse-resize":2==i||6==i?"ns-resize":qd}
    function qh(){}
    function Hh(n,e,s){var h=i[Hd],r=new QY(t[Ra],t[Ba],h[Pa]-2,h.clientHeight-2),a=n.offsetWidth,o=n[Id];e+a>r.x+r[ca]&&(e=r.x+r[ca]-a),s+o>r.y+r.height&&(s=r.y+r.height-o),e<r.x&&(e=r.x),s<r.y&&(s=r.y),n[wa][ed]=e+eo,n[wa].top=s+eo}
    function Uh(t){this[Ud]=t,this[Wd]=function(t){return this._kh&&(this._isFrameTimer?(cancelAnimationFrame(this._kh),this._isFrameTimer=null):clearTimeout(this._kh),this._kh=null),t===!0||t===!1?void this[Ud]():t?void(this._kh=setTimeout(function(){this[Ud](),this._kh=null}[Pr](this),t)):(this[Vd]=!0,void(this._kh=requestAnimationFrame(function(){this[Ud](),this._kh=null,this[Vd]=null}[Pr](this))))}}
    function Wh(t,i,n,e,s){this[pf]=t,this[$o]=Xd,this.kind=i,this[Gr]=n,this.data=e,this[Zd]=s}
    function Vh(t){this._4l={},this._km=t,this._km._1f[Kd](this._9l,this),this[Jd]=rH.INTERACTION_MODE_DEFAULT}
    function Xh(t){return t>=100&&200>t}
    function Zh(t){return t==eV||t==cV||t==uV||t==rV||t==lV||t==vV}
    function Kh(){var t,i,n={},e=[],s=0,h={},r=0;this.graph[qu](function(a){if(this.isLayoutable(a))if(a instanceof _W){var o={node:a,id:a.id,x:a.x,y:a.y};for(this[Qd]&&this.appendNodeInfo(a,o),n[a.id]=o,e[lr](o),s++,i=a[Hu];i instanceof vW;){t||(t={});var f=t[i.id];f||(f=t[i.id]={id:i.id,children:[]}),f[ar].push(o),i=i.parent}}else if(a instanceof cW&&!a[Qu]()&&a[Zu]&&a[Uu]){var o={edge:a};h[a.id]=o,r++}},this);var a={};for(var o in h){var f=h[o],u=f.edge,c=u.fromAgent,_=u.toAgent,d=c.id+ma+_.id,l=_.id+ma+c.id;if(n[c.id]&&n[_.id]&&!a[d]&&!a[l]){var v=n[c.id],b=n[_.id];f[tl]=v,f.to=b,a[d]=f,this[il]&&this[il](u,f)}else delete h[o],r--}
        return{groups:t,nodesArray:e,nodes:n,nodeCount:s,edges:h,edgeCount:r,minEnergy:this[nl](s,r)}}
    function Jh(t){this[E_]=t,this.currentMovingNodes={}}
    function Qh(){w(this,Qh,arguments)}
    function tr(t,i,n,e,s){e?t.forEachEdge(function(e){var h=e.otherNode(t);h!=n&&h[el]!=s&&i(h,t)},this,!0):t[sl](function(e){var h=e[Uu];h!=n&&h[el]!=s&&i(h,t)})}
    var ir="3fe3a9f80b209e263e1a35434ab3177b127c916dd3975c272a52d1da87f78f803fb51f780ac429b70a72af03a723208175512869bf05e9bbc63ff995737fb12f451cc20d1e862a7c618dca3f8935db2f2a8f83a2b853ce5adcbdbd7d13a6e7179d47ec6cdd9e9028ef05cbd957d436a1cabe7bbdd506152e4eeb93904c8d7782cb1ed56d381c287be7ae48004eb6da874234a7bd216ede93bc7a3b0f905836a37f084fb1480ff92800d74d4b2cbc4e223b7caa7afff354471a2e9fb7bee6e9eb43bc49cd953ae0fafc0d29364f8ef7cd23d40675b4742b4f74203ac465f2427aa4f9c41cb4889b3df3edf2d30d267d120ca4e9ebc4ca6ba94feb77abb21224681f056931e17e47727e18bbb81ffefcaf9fd5dcda01b6a58d0770905dae86e8a112e8c9aaead47628209b4aca147031c1c3ed45b6c732fffed9f7d4c20d6020fd6b78ed08d08f792ce99432a980f7f3dccd08561fbcf24cedf534a06bc9801fe94464d2673637e301296b5f3f48a5e4dad7fc9e5abfe24c93633ea611e1e2a721396233125d5fbffdd0ac8ee72045a803e9a5daaac2889c456bfc8db9c03802ca99341eb9d287de911fafc9fdb48fa4bd15f2b0cb715d2f644844ba8d4a1fd9886b9863c59623b75f4d44f46e26ea14e519186d02e9b65e0652889907b2adb4c7ab4eb6f4f7fb13309e9a662bff2f9d2db153582729eaa3ec2f8a51efd17bae8f1bc9c87126e0bf487268ccc55508e4de5c86fd0d2d95023b24aafdecaed06a1fedb2c504942d0e9f182ad2543a880d1b89b4f4ac7e5f6ff650ccf144820fb23fa051dfb3cf661224904d32ff362bf04835283c3b6ef740ada996545af06fb6acaa3324d8525d9fd9098ce096f7c5d27d78d2dfc2fa2d8ecb21f18a1a64349d0bdfa449712c1a7c3b6a7a4ce458072b0efecc45fbaca67943483e500d20a808278b328841503c5f6a6512563a62802f85fbef5a9ae9343433caafc26d72be060565c80cdf17fee41be1894748898e0769503aff36986d1f30c27feb7f8be63f74d96cd20511747d4262dae134e8f1579f5c73bed27a229e01b5ba886052f41b4cc15d2478b4abd7896e78d622adf15c7d26c6753fbf7f8b92b840948763701663142877bd569f31dfa2b84b58d821d64b4182bf8848fc1c933ce6add482fe2532202dc7fea05d3198a9ed12a725a78a3fa1ed00f440fe0c86b03a576f8cbf970f2bc02e91bd56cd94a5d56b68fdaa708ea57f2f2f360f539f1092388abb4b6e14b3d6b6691630648f87b182019e39317a731119bdf61c5464b4e71645f2c820248d59666ae2e1538bdb95d2cabfeaa9dfc2350c539dbe31ab003bb5dba4728fba2a6eec4c100d9b7fed22be14bba7091e547a3821f7d2863568f798f09921299f5dcaaafd999f276d9b75b0354bb701279e29f8afcc86d2e5d965586e02176defd683d4777fffdc337145248fec448cd7468a7679614945194e223fab762688d3256a4e4c98d6eb824540ff3896e160c0c04845de30b9dedb9b4fbbc0ac86ad698d6ef002b4d1a191a94b00806ee6bf5f7825402040099c54bbd3d59cf2ffacbb27309732c4cf082f7c002f74e631d9a65c463e0c5042ce19d78691268ef29eee97af474665204df6fb0954365106b800c5429e66a9741a909c3e26d7c3be5b00af06c27e804b941abb23020fe7fa56d5de9097ef347fe3fbf0fb2e90ed1ef9d9ab576ae038a937d7ea2e6754b05f35f4c63afec9693c7d4742ebd5c916f11d5d516c8989e53d7ae28f3601815fd59ec3c981c679e8390e582c4bfa9a56acec6dc995afcb47c3c54ebb132d2b0b4f73edc4523a169489ed3b71f6f763891ce328a72d5afeb0f69b0e533feb959458ee2a6fe2880c601e8fb7687e43df033c1fdf82462029a70da2d5773cf0040a31c2e7abccab9cdab5b06cb258222ef58e0ff0c371e2a90e540196df278ea5d0642693c79826cfa0f570c52d6d086e27f5a373553a655fe4d478da2e13c79968d3ab92b9c79536816bcd969b1507471e46efb0f0a0a807c2f677de3b4b0df37befc428e1a2e88c51813b5c2d949daeb00244ecde4878b4fdbcd6d9107bbfc9a98267a70c9267e80016427af40bedc3e11ce1c6ad33fe79aefab4e256017362ae6fa891a40170e17b6dff8ad2ebd0f8a64c3639dfef53bc4d22faa433e8ce4b3d82189bbcc662e34b4a4d0eaf4151ed5eedefb225f55941256fc98f494f8f955ae8a8fd2f3c488f6d528cc8b8d29767d55316079e7a982a76fbdf4ac2cb51cc1f16a2887da83b23a3ada96dec9279e618de3f16bf7810856d6c21ab393b5f5cd51a2098187af60c89ae7a58d4a67400f0bc9ca33bdccd379ecb75f0761d002142badbb3111490270594f537082cbf0ee4bc12e4501f7408a69422d51b35fcb1b1467f9b9f56c99f0bdcf4d343bf694779dd041cbdb05b33fdf82655f13dafa63590d3022cdc5aa70a63010588b0d3ded051a3724a9ca4588c91e83ec877f7f31bbbab0ae75fd9c5c6d17a6ca1ea85f67c4243d12f3800454d2774ac04128877450eba30e84d73bf30f8e6d04775260b99b56270c9f2c252836c62df2ec8905d48f52bfec72970c245b0b0b507996920f09e242759769a368d73fb7c72523234e708e9eb67985a7d94bab1ca27f286348501b40ccbb946c7fe7eb178558db7197e139e8a247686d8e846741d02067aa84da01a8b2744901542b4846a7bcc4c6aa56dbacb7560c535ad50f188702cba5b1e2d7f366926cb6c871edc51fc91bcfc8afb8a624173ecdf7866f71497433b4cf28d5107ee36a3a695e3929c04bc8e4816bbe0497dec5f9c5c1bd5fc120ebcfff8b41f287e8c5a346e1f031589d13bb82ec70efe3832a57e0821ad409f4b92602baeb022bf0fe52b712099927b04ac2cee68d77d4c3b2d427f003266ef0364bafe5a5b02d727fbdac8717b7e0400c18ba996086d9ee8112acff56f4420fed0bc26f5760301a74b5d86e367bb584ee3a11974fef09dc768cebc0a01bb4cf113f75eafcccb3e86f12c8473eca5e0d86edb12266213345ad32f91aa43a47411f36439f6de93b128cde72cf4b04c4983ff183108c2515d8c5ae6ab28c70e6676a319ee0e917af3387194610bb935d6d328363bd0ed48ccafd8a9185a54d51def62554fe9902baaf8d027e720f414d049e56fef95763ba559856ee813ca9361a2696c1d5fc00266875471c2785e14fd1f2e22360a2499685a4f0a1c0364970c3fdaded7d1aeaf79db28a6f6f0d1144e8a3ec002ea2f86a561459a141f802a5048880ab146ebd8650ca0663193abc6924c5e3f0ba64f8704c7e83a69d3f7926e7fcd2f6fca376f6cb97a1789d36d7e73e4b5b18b41645ffd2cedf3b39596433d5d718c091b840fe05bf26b8a0b632c6ca530b21fcd85455e45e91db206c6ed137715f5aca9563f9bfee94aaf0df20ae567fee8dad4ad2778e506037b2dce748947834d8ddf6229a4c9f8c4b56ca2ce174de9e662b6517e7e3857e2b7fe064b3eea4b55e589eb39c9fe3fa66c21ab1df686148944586387af19b6bcfb1f81260c2fac252a514997539c0afda6f94d5bdd8dd71d08476b4bb89689d4807210538c78c2733bdde64b6cbe0c45989193dc80cae623308dadd18cb3265c2fe1e7e7f411ee3035292881279b57ca3a4a57df6d9f9dc6618c279c4ade7e0aa08a3538614da5e3264b771c81fd4d6f854ae3f00e4db4dc1e2dc15c9276940e37c59a9fcb551b75583101d4aef781a5604a72313cdf02c24ebcea29eacbbb2b9472bea477d928e38afeacd61f6a92b6724786e103af9e0140e25748ce823309131bb8189031fb9e602f246e02d1cf93b8525a70f78a834934f51944b09da1b20d4f0041d9e1c2c7b38a5e92e0603defa1d9d6fd967ef68b4412de95f69377fda8d8fe348d7ff24fc88490e32bc77cd22111ba57608c18d85e68b2c750502c7d01b04001afefeb2578bbab0d3ff75df99b2a052bd8a33e1ae4fe3420e8618cc97e8beff5c27054624500e486329379d3328e5010c8f168db55852f936a0e7dd54fa36036b0dc54c8c38afe96a00ef47a42f7dfa38ef5100e19e5b81da42a2a97be7ffe7260440677fe3b16b3a41978dbf850a1e48e583cb141e31e55235e0033b8e097525a670b659a7cdb434efd937769fc514caea8f1aec0a25f5f39a1f1f81b4bc473994d73ea5e47d1cf11e378f3a3596a56ef460697b1c99fc85686b6d4cd6e4fe5d49eecc99754addf90cf5bc9c4776fe6af590d2b20b8c831a02bbf13f5ef0f8303dbee43b1acc26e4b15cf3263b04228fb1f62291ce0b96290f9126f060962c0633dcffa59097f6f9e029b6d70fc85d33169dfc6f24570f802f6127bb50ae07fa5dac9f908558883e2d4605850a27b0dc7dbde7ee43495c5669ca4ab273678711861970b5d58ad802366c8a336196702ec01493dcc1973549e98f663c1d6b906401ea1207cfe0a34e432a8aeb2341d429095c8f13bdfd0e1e559c20f8985d0b8964ad8443571b478b919f8268aa4447e0cd8d1b2010dc164482452044161d0df87c588011fa5641e44fdd70a473d6865157a0a2eee61b63f94dbdd2db6e7d7a40293cd531ef2e330779edf8a7b1ea937c9fd2deeb6aa1384b2b7321fa213e17cb0e21f1b9e1631af3014071cdf36991ac54f6720ee89638a2d1c6f2c4ce0c615fc57b8ac8a34822633ff7235d1d9a4f24bc7887d24f1c2d423fcce64cea2e80bd1d7533784186a315b70fcb42af750df1aee4fbd28bf659dc9b69cf2788eb4f3ea0a4431920ea411cc6cc3d864d1caca121409091cad229bcc1e60e763bb921901d0398de25173ec81fc22cde96cb2bba10b78875a7e93c08d5cd124aa880e7925859ac3aaefc341af18c9df36e084531fe799153f6de5435d5b99fb7d5632b8b3d697171af03f7eda0964d6b97c7f54225c83b6ceefa583e64c944b6d4d8d67cbe1c4b45f9d210fb4ff14a2dba82f428dba7826da4094614cddc7661e2e9e3820a34ec097707cde7bf3275ff6a559c0ef543027300cf4fd04a045bb471e1491f044c25b90dcbd8b75117fda1c6741bf0f8094efc6d1810e3df05baa0b46921e41219017d607d9fd56a62eae45d3e7b13b88e415f9964bf08aa8d5b64a1f0f65fd967c48e0985b6ae7eaf6bc6c95253cd3aa3c9bed6a6a9bbb794b11fc2964a24a5c51b6d79bf472ee9fc71e49f3db479f119a67b0caee5fd21a3d3b3fc446c2fbb831e3d5b23b9216a02e2fa89fe6b521d7c2c1c45b9ac7c7d8ff07cc7254108cbe660ae9286281303e49c66d62e31465366efc453846aa05bc27164f96067241075d6b0ef4d7731e26c52bfeb2fa81bb0d2ff35f2c4e201529d24e6912ee9fdac58a95884fb1a305bf920ef8de4305465673dbf24a24ccdc92e50bc26882daffd03f902f1c1a3c527b8eda751f5a4546cf97263da2b9c8e2dc7ba4be35f7c1ec94625325e74b48d23e3eeab5e432af4566ba6bdfaa4f4063f6fd27d11516e248025f6fca867a542c6f818257c1ac66b4b289b663f745527015317920b3076bb4a3319371d1469c705873c3a07fab6d4890b6903556bf365fab89667eb0ca66d67be6c40116bf20f19dd4b3cba7a3c49d7da77812e53732133965dd37d5561fb1c6449847721156001323d5fee37678385962611f1ff9d2a50e0cd55f684a64bcfa01199c01d07691e033ecc0028db28b7db30a9a4ca5b4810b7ecefa60465707732bb46fad7785f1a8a91019ab7a11044669a325e1840843253880621fd9f5fda93b21002ebd8b5bf37472fa42a14865d8821f8d30ac6db7440b58102d222985449a29f462aee69982ec82edfc7c5ec315404d57c2b18e0b96794ec4eb8b427bd8dcef5ab6580ce588c254a8a12622fdb02da207e2a65a485327d3bbb04e3d026eaf9369788e0ce519f256358f397328856236770b8780725f89ec3ef716cd69f5f9723696c48ca3b5a374bf03f4dcab0fe1bf42f80aba5aee65cd0b41ef52aab8b4d21f231f330ebac9860482bdf3344b09675b817d43e4905137e88508d912933077f07db8a8c9e41c5733983f23ea9e912cd48e133f56f46ac59fdb6546597a846ab21ce12a075366734ee44c1ce6ba3d78ec430a75ff6e946a58e347dd1bb097de8e2e98588afa9cb075d69998ff8ee7c770053fd2dead6ebeb4a3136b0560a8885bc1a64cf6fc079a5c4c8e84cd74035235cf8727b18db30ef05f5e958be21b36cf95d6d1dfde7a8c6dbb4dd2f7f40de22597950e3f5b1f430b69ef1ab349cdf38a1aac8b11233c93d48cee6a9ae0796f138bd5bd7f52c6721265687111059a938482a05fea5e7a14d5b4186ee26e5c54c339a0f1c7bd1472949005f69d1381eb2788b77fcc256f26b0819946a8b710a389bb04db323cb3b2a1012e694507e9025a43c454bc58a3f115458ab1ddbade2013a27837becd4fb4928908726b02fb4b8750ba515fb3ac4db9f3147259b933a835f0904d82074a5e6b39c2a8e2ca7d52a6db5eb67471c325fca83b727df5b6af023f70e5e8b2a4133b0727af911a9386f618adce7be6f42ffb4c1f10bc31a30571f4b1dd6a56a0dcac8140a10b323e66fbffedb022592833308cd383f264be99421904794936927fedf38f3ca363d594c616e5bab15fd1374db5fba61a23a1f470d751f2781ee9ea27895376c92759ae369a1edcb7d526a894fdcec90b226f6b15f66afccba73a68d412788ba5c981e82005d93e09952fc4d624db19ac4da6f4182bd18e7c8a0fe4ff0d4413e89cb28632a55ff74b4ae64247598d4afb5f5a29fa20969d29e8f6e02d55ccfa045f707678bedee5943a8bd7d4927789726664a7c09735224bfa2d8156cca0cd6bf8d7a5d12e69f0f5d483b0ee4f53475a27b4b17ff16fb80e4da522bb36c7d95dfa5652cfe94db67fb4409df052d41aeff048307547dcff320b22bc7431fcde2ad11b6904a0983b4ef6f3a40341ed27eb0a51bc8e354045405f0a6cd1bd9b4c75df8e7955641078d54856f2686453d1c89823a3ff198c545a7a788b33310818f161d8216ee047101bb176d41be0750e559bcb0a4d3b91ac7c10f2239fe96df9d9252a57673faf93202c05220d271001edb2b7e2855844860a7687b8cd075b0bb56af88223f4e1be4f0cff8357c05444b428f9c3f817f48293ea846258c5d44a6cbc508ce7a05dcc59f2e37c188622216ed5d25ce0429fe41633bbec33749f3a3ae51ae61d481ed21702e73e83ecfdd43aae47acba257b81a56f0c376ca2b72fa7f97368ef0aa63ead4c44b80a29182f6de3952adc795989f0c1b521d81648cbee44a22a40e9892b9a183908f3761eaf85b990e3fa52ac693a36eed053d80205620a37a9e72570dab980e9f282051423bd011d13ee32f54e0ab0480798b839096dedc369d27c6b5cf6bff685a101abe77eb0394a14986f3440bb89974e6a1db795792c682dc17058d49d4d5343bfb487029d1ca8126e278264ee3576b57dfd3a8c62b91a5881e5dc44bf5a5f2430e7dca44e75c4f7524157eaccbb63367610f446e78e78ee4736fb6e5f8cd95ea914061a537d46382a6ec60738765188ebcf363d96e895c0e9c21c41cb5e88e6e774c4d10d3be95fddef174ab20bea652f8c052a73f08a2dc642e0d892cd08e35d843c5e43b3b456418601a31fd0607af8552e748fd2fc574c5fae1d069b7bf72ed134cce23ccdf03f60709b43683d77e383cd0777e3d84ce2de3777e6b350aa430e17e5d86d3667b53756fb7b56c6401a926a415f80bfc1e3cc31809e8aea1d7f54eabdcec1eff5b1904466b95c87ea0f4dbd7d29f4100f5c039a129e995c775a086a54eb6b9e35c01e47f1a4ee4b7355e50a4c70df90f344e22937a8ca98aa33b91a9fe1ba7ee6993baa389511499f6aeab0de2308ba54665daef14e954afecbe2f84f230c74bab61c439a93fdca10418aa8789f1d8517d9d854c0630feed84db09082189348cb1bedc1baba911ad0807a976043b5097a5dddc25a2aa196e65174913637af208ad6902b4c5a2e31c2f92a19398017fe266031edd260d434e15a4b0586a5ba123ca431efa9f8752f8a2c974e0046bab5faccd184464559b0da2b7bb1d437bd814c5423bfe38301206d75ad17d57ef133d3613ddc22c15929d73136c2a8d8bb77e3084216d21d00d5e52d6da5bc35eacf5a0fe41722e11e44aabd535cb63773f2a155c26e1c5fea4eb2cfabbf39c5859894f54dd3c69380b8e75f1546aa16592f47f335ae66355db5ae06c7a9bdb633d2dbeb6d18d45fb7945a6f928c98c97210489fc49119207c61c45e6ff402cabc248b0d3639e721f298d7d2e0c4ef27e96b70db82b074ee5519fb0c704666682091e89f0db675a8bd7203251c26210b526f4767af28432a4204ce230e03a0a09f710e2fa67326a5f4d811aa0a6bd49efd68f6819ff812b53edae069d016201cddfeb5b4e157d768d4eb279790ac6efba354b55d143021cff66fc62cb0110b5e97b09d39df3b27c90d8d0534a51d356aa1d586501235b0b13452cea2814785e3cf444b8b9db10b20c313edb0f532d233bde4335f4be135a8c08f81ac36af8b85e486dc0ad246ec0660dbc7307e797bd9d589503371624680c69128911bd81e416c47f72ac4ff1fd51711f5307a0284f08456d9dcac9ffb02c9c6b2f525cc58ec13da4352832e16165e2f3200a73f87e7b46581cd6630eeb23907fe305cf624cca2101d910838206e801ff64084942f130c15cfb4e5fedf2fe7c97ecfa10357970c6545f0d993764823325811bde6b692714bd474b404f809966d5161bb95ee9b69a56f583fd29f830026e6b18fe66bffa19c5f26f3a72fc9ccbaa252bb4c57c09f517fc8ffeba38beaee3c03ac9a4b30d490ae188378ea8da8302a64f0409baf4a87e7a97372fb5691b8356fa4f4ed534c3d2a93c4b5638e73aaeb055973f35be462684fd5177475f0e2bb1875c0265229ceedef62c570a24f02650877d83664666871aeeacaf5c8e88cd91964768d330a621cf029dc9570372bc87c7454648fc68aa166b3a74c9a1830483a73fbdbdbdd85f6ffe4784e52e7f285a7b48db72b2e9c5a98cc2cf55c2ae77b2f0c8ad86cdf5a8eb6aa28d37fde3eaac66d95fcd926b0aa8e83b46209006303cd669612c833294150212db0e550f80ef4b336485cb50071b932d506087336f3c38fe09601408941d4130d61314d93a8ff7f303f3b31a2437150352b73dad4cd286a02bb91582857d4b5967ff220236b849b19592bf4870a977c728be88b153bdaf776acd6e63892f9b4885684f9596b137346f6e178f60fac595c80de818ec2c2cb625ecdbcc8278727ce9f7eefcd0ff78802ccac3fbfada3978fe5be85c5189b70f08640a13839cebd721763d806e0770f521dd8a9d0f30489d34a1b0b33684b01cc4d7ff2787b861b7486b5d69ee7869dae92ac4bc90af3604a9d658f9850c422b82138d3722bb16311aef83d0b3346b7555a0db8231f82944b0147551a619a56f1a9ed16954770230dca19ea4d0493e2cc04f3e390c357e6d69ffe06bd352354023d3a1c15afad62d528c2200d54856ecb9f3e6c8863e0a62c323a5ffe8d1419713d6828cf2decb7f421162d20749c6eff3671c67357a32af328bf9074841ad95ea98324a7b96f0ae8dd4c61ca85975d3e4b4b3dc0302f48566f7d7ad94854100b567c1c5527ebe593a8c96b15c46b1b2e09279740170a050ce736e87c05bd2e72c911ee5eccdaa52bef0b462fb7883a615bc6c9efd872e9bf727c3341d3aba5894d4b0ca15bfe6bac13872e11ecf1141f2e48cb0a5d301d5098efb71b80a353209ca7401707f252855759bfd12b42ee61848c49e57a9579dfb4547bdaa436b7799c104546d9c73b81f086c224ff3a4a2b692e524f2a966f7a8b067d08adc7cb5f600ff11b20e7c955f65cf905d5e6260314b0bbc4d442ae407ebea18384f74db3e20113cfbf3e99e2e8b86c99c38bb253b518e5d933541bab18bfd54989355607950f7e63ba37ab6561eb8c27495016d840be7b8d5f01f5e29a16c08ea6a8841b11af1a7f773879f4bd89f2e98fee8b24380cf547490d992bfdac5dd09ffeb643fdb04fa29c641a9a2f09197f266f2d9adae3ac36dabf61d647aee0694395a5d73318e279c88a6776de461b0516bbea5cdb5edff85c34129db8b03a51894c73d8ab7894ada03f0caadaef15f940b898017ee1a72447542b9546ff092e18c86a2126f94d7c9880cdd51f9b1a9b9a17bb16ad07edfbffd3b74178f135c6d9db21c995b0f988a57207165e6508d189646e12561a436ab5e454d7b5e7fd643039720be79901ec9d1ef6182851783d1c37fcec056a7ce391811242bd5295eea711434a145e12608511d75c7e894dffc60eada1838f2d92c6358612dce7cc6f170284f60cfab5968eca3aae88ad23c9d0ff07a024bdc6b5ef64870d4b879b0070f0f6f18506d0344043fa68d5d0a80c540efbed77bcb03225a0deb84cfa5742bf7b97d09fe5f08cf2d1e895032600a0e0f7a2ede7a45a876b8a3258486cdbdc94dd9aaaefcdea6c55858df1b7a9432c6d1e61949f0219ff1a9da66dd08dd451a6a494cd05593e9f95d099fdce5e3cc1bb60a07f1639971205065ab8e80c2583437ee8ef528ac1679b20b3c2c2537eb3dab2558c936edb726b6d831f48cd3224959b3010c130f3cb4513222e854a3a6c4b127001d38b49a70370463ce8576c995abdc130af37c44590401b8b8d314451a87ee27572288277024d6f085730963ae6221e5fcd518bf2a733899f3b18345a4ea288b1b6cbb2679cdbed840fb59d1c1b474e9b714d3219c20e5fc1cfddcc209bf0883a5d26b48da7d3926b47ed333fe52ca8571a7225ffdc6bbaba9e46443d155d5ff552233659e26eb9a8187e8728629152466a3dc011ec22a52d37440e4366be7fb5101e54f52d1ea1b91a9b9c8379b225849a68a10b5d339de9a579aafeb140bd22c1c27d6a59a32a8df2822df3874d495a078f8dff5033b14effa41450bcfd87c4bab13a4fb22723aa511705ce0965cc0bff615e63c04e753407448194a8228d1d8fc2eacc089883e23c647d237814f88dc8346444d184286cf5ce7d09d32a54bf30d3c82ed183c0de8e8c37967f8bec7e0634208a8fd268ecf2659c75c56ff1e8f7347aee026df2e097a8c97eb8fb4aa46770a8909f0ccdb781b8a2f19656dfcc9e7082736edb85b0b55b28cc77d5b46bf5fcceefe6f5f516ab3ba1845594b97f38bb9e913fe6b4af9e55183e92de054c4f4d851bf2de52e37db210b400a5f34221610550870b80433c2c9b74b57a0ac39c5d4c439564f293f622c252ffcc5e99fbb2eb4f49294b62ce07f2953434525a739fed484da577592a0237ae629570653ca9fac33526d1fe30fff551157087f0cbf36d7331fa8e36719f8f23e45460b4fa2ac641eb79457d7e7658bcf9d50beb9724f040578aa64489bd7e7c4b5c01d651be387a7a051cb7806842373f8951256a90b0aa9d1058efacaeeba569070798f9fde0e241e42e3c76bbf7bd3a1b3a2554c45fc2bb6b3d446326825fc58c69846bdc54eb482c39b69d198f96fb29428974fb8fa9f0812002b861cc3408f66fb92fdd125c217a2456d42ad5ea83d1fa3022b626872f10bc2da807794975c56902472e189109c21978fbda620410169864d3ac01e5d564f9500f7040eee83079886372ed387d6e9084723c4d11814711d0a4eae84ebe03f0c8c1b546b196092772322dbeae18cd14257c1b9efb6cb9006c551f0c9887b1bd19919747b43b1d6b747f718daf1ea13d557385532996968d93fb6089b87af66ff3d096ef8790cc3208fea1601d52d65362665f21f4f3722e964cca863b1e8bed09bb486ae00386e953d5daac95968c6f6cc32e108c4e2063b9d880aa3b9c98def44bd9611f317b434527ee4bd3766a57d48f3398f477bb0c05a2f359258905987eca7e85bf4baf095fa7a19e84c6c74449dd847d0b78322aed4d5a608253938867fd95b2fbd3e56a99f15e8d78a847df9831d4123039c63e9306df107e5bf95bf030b3f997ef392239e96e991d55aa7a676a41e370b592903c79429704f02f3916c3ce186af618354e7eb4da2faef9605ffc7da84fe0e927d74e73294056532dfa139ce25e3c186e438cb4ec74d439212292813f2a08c9b4a329222e1201e8b13b22e46dc11d8fbaf71a60ff42a2f89aa16796a04376a8930a963550073375559f06f2d967888a65001b360f50915bae66d4e32bf81005ec7af477da9ec9f8a4a353f0ebe9eccc0682e25b424756e1228e15de390c81cbbc8aefc9e7e77cd2429fabd8cf6acc336f409ee07abd939196c166d75113e1fcb6c135f17f6d29115b753c9eec517e8bd813055be7c1fa51aa92af44085dc088b606b3a5fcb51374f32adbcc317f21888153c66ede1e31dce3aac371f0bbe914d26b7c11e1e27ff274aa9c11bb264b1e77f963963e0b45248880e5d930f3896976a0b9a530dab04a830c46488ec891f68465ef6f03dd875cad652f267f6ef09e0f50c6ca4c49a118154a92be015d69f12574e5a2b1abeca5fce88d4638f6065cf3a33bb9fbb5a579ab8ab6e454721cecd5ad493478a588b69e4d3a0b8cc0a8e4c875cd53e5cc27fd15874949145f158de3169e391229e027f23c11e70bbf6ce62ffcefd3641aba830acf6b1ae320bf2abd0d8e5babe875413abb14cb79b3af0b382b8d90fdd49bdffddfb9e550b9f23ab9e3448cf2b2d63c4d7822b3625d00ceb5df296487453b88fc7451192194f278169173e3f3253e5396d8c3d0ebfbc748912e5f149a6b84c72773d4c03e990d4cba933bc02db71c382346e74a714c27d387cb7ec2a9c625820cb4f84ad140f3c3c5e2342d648af7a77a7161c2213a53ecdb5a63dd6a58e075e46fe3b05aeba8dcd2d4fa6cbdb74ae76ba3d42ebc6c4f630ce963885b19e9acf686ec479361c8602eafbfed5521d943dd4373b61ad90f62e39060a1da65751ea3a3ed0698e43aa22ae97bbb90053d3c4461d0f0f70bad39b680ac6213cadef035d2fa300eca19ae496a304afb871abc5efc014d37b414969a8f52fc28f4829a917052ec6dd4211ddf73358f8b3273a263abdb007d15f258357c16d039a7a439f197f0cac7a5db866a58d187f9dce4967367a68208a445fcbed64ddc09138a6cb7341a384752ce11f5d3c8ed3775f1ee2e3d54be1fd96cf0ff65101e83b722e5dad91ec934ccad387bfe827254280753e98dc799f0d04d6a6de6aaa3dcfdcc6507c466dff46c660546cfb10c1f7ec211d93f97028c011521e8ed7ebfc15a9f4b8f5ebf04e86da84c36190c63d495e8729af73a63ec220afdd8ba3cf44c26c4c9b9ae3c65449285675e6767f788262ac5dd416624ad64bd7117bb21843024c706d4ac1c237f03aa36d746006355321abceef79f76500794b3be198c7a6b3ed0b63fe2b89ceacb9a50369e7671e1389299557699abe2c8860d20f8446eaa45dac9a1c5a3e80a81012668df855efabcb906508ebe4cbfebcff6f7ed408c9797a4d9d3768daa98c851bad57db08812145cde638b3727e1ebfb74f14a917bacc36f1459f11b961f6ccec42a5bd22e46c66802335e786f93149df212f685b0fc4829c6b069c2b764e288c324f15f205cd5f8593d3f062b7f9501988b8884b7038c6b063f59bd2c6ca786c74ebe21bffb1ddbf66f79fe8a6ea436e7c53f414c8645f9d5efb4b4246cc67abaf3f7391be1c256ba3bb921ae098eef1b8da8095f86cbb6eb0ca8cfc70134d86f7f7e6f1c4005a8993bbe1c1e8df1bc24c85b0d4a2d4284cff18b3ce8935f536b1779f9d65176ee2fa8fee13e0edf0853237a6f453409d69f8b38cb1c8c34b842a6611c0b3b2c749603308bd77e2afd82a835363b9b4c5dfc6e925b7b07e794fa544df09ca750aeb80fe05b41dfb109eea7072be955375e155abfbfe2537d5a1aa06e922d9658011e6093091d304fc74521f3c86732bc9a12f702bfc431ddafde0909ae775f1b635e2dfae0710c3669b07c39e1a9a4e2dccdea778ad6722f7e5a17347040e72880df2c750567982fd30977b2e69f14aa5303397c3590b880a1c0426af0186b1f0c36f9c2286ce65e612e87aa0beaa13f21c28df2c5f5a9b998dc6299612ca3f2dcb8d44c03dd082b596222c138fb60e1c12ac43311475ed20793013ac4d817da8549e8d772cae31c45ce2f1f3e72c7ad1a0f83a70bb03af160f615564ebdaeb7bf53b0a11828be0e18a488b708c08334aa2d21458743992a6969a602b8e61bf5310c2c87f7a1a8f49e7e5c6371613d6f771911a71638a7feaf05a49a8c15fccd3fcfbf8473fec8fb9f40a94065a769c291c37e4f25f3c1994fd0207eb83dd70c03d43c1e9caf882baf0f1f3158b0ff71e5c016c0daa9a5c9a3c7192214cda8b34c34188ea165e39bdbc4ebaa2879403d891eaccdb079d69b3d09be94ad2b1a2799634a04bd0e4cfc85afb2eebcbf1dca01982599a5cebc8d762cb18e1ecaa65660913c8a62e49856058d8104a19c909410b8e39c16b2058de5dec7254bfea33c16a0f820c158bf182fceeddb8fb2a6700a5ed9cd93892452e3e6c4a3aa7b838630cbcd3124a954c92dde0723a43c49dedb4d248d209190de0794e76d31b93d9d70acb02a2fb3b797063cbf4be7cd4738408187bd0ac4ca36d8e6fc4d0e47cf73537e71c9cd8f110f03a1fe35e0a853051858656c3fd5c45e58e99589c3be258cc2093a2493a566ddf043233bcad31ae23bcd8b8ebc3f43061f1075973e8702554e9afd5fc9952c362e9e77a78c65623065356e07a7060675a9c9b3aa97a98acbb12eeb9f9e364f1718a524f610ab1e3fd9a25199158da12fce07a385606dd14f724096a9e04770c7b8cf3f8f649b040dc19df3243d5f14d1f650114c6c8b4c9054dac1e968b53e28c7299e455189ea2b3eb24a2824f4e468a8b7dd8069be0d694ddd7f31b8b11fd95d48d4508891ebc79f74c1445aae0d262557614dd143d8eadb59e0b17577ada3b95643bd5a50a5cc55a92ce86a60f83c31d2ad6e344a630e118ebfd95e53a22ee36c7d186fc0b09b6a56cfab12e6fe599031b3aac231bd04d7f589adf96290957f9c71940144819b8a55c6ca2c38a565f09ae074ad761ae6189419ac9e484e03b95dde886181cc624eb0660dd842d72ff9e8b83f4eb96a24d7400317ba2c235a8d713f72fe4852139c6a719eafa947f0e987dc05eb4e8169d20c21f8ef922fbba741167cb599172176a382b21204039ae555371a093d20be6cb673953f84e25d94cf884d409d207f4228c5610f6e3548600bb7b3d7cb51fb3afd17d0b882b51179a5ed3976c7126db6123435adc8fb54170bdb95d991b8dd952c9607202d2243bb09fe84319f6c8d2fda504710ddcb0ae6450d481737191c8a273d37cde8471c10c13d6d15a9eb1d5c258132f99c06b569ab6643feae35b27e5b8a4592380a39f67e5d1100e8afb0b9f350350e5bedea52d113142e6725ce283bb40da61e4b080cbe4074fe1bb6a8b72ae8828b580d98cf12f1b6e6af266df26c6bbb04b0f44cc51d215354c3232981cb067eee63aa01758027d1306f8624ea5dc070006abe204cc1022193d9a5ed35dfa569b8bfda6de5f24c55906ce67a1a2d5804687e0c5ef99f3ff219ed601b0d8ac54ad45d48f828aae7a773cd7484d3b05d4df64ca1dc038af00c56d6f053b034f71d43f213368910965f239129ac660bf5d33d74b206c1a08735b77f393efb093aa18800dfc4e4b71d4926a0ed083e65ddd7f6853c3f16ef62367cbceb512a0822cf45987aed30a7b77d04bea5413c229a4e1a438365c91a4475720b8d5d73b815349091effbe2d52df63965780a71a1ead945ee773ad6e22f6b64fbb98862cbb5be590ebcf708919cc6b54e795553a92140fe9e49eff5aee277d1f677916c265c26dbec0e4b53d18ebccbeadc016d07110115c89a75e9059c9b1ca386d969fdabc72c54439ab0b602305f6535e8ce7b8171300ed1ce04a537a3556be8d1ffa0749b99026866e25a501b5daaf99cccbbddf3cde5f2ba7e12ae0425039c",nr="[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";!function(t){function i(t,i){for(var n="",e=0;e<i.length;e++)n+=i.charCodeAt(e).toString();var s=Math.floor(n.length/5),h=parseInt(n.charAt(s)+n.charAt(2*s)+n.charAt(3*s)+n.charAt(4*s)+n.charAt(5*s)),r=Math.round(i.length/2),a=Math.pow(2,31)-1,o=parseInt(t.substring(t.length-8,t.length),16);for(t=t.substring(0,t.length-8),n+=o;n.length>10;)n=(parseInt(n.substring(0,10))+parseInt(n.substring(10,n.length))).toString();n=(h*n+r)%a;for(var f="",u="",e=0;e<t.length;e+=2)f=parseInt(parseInt(t.substring(e,e+2),16)^Math.floor(n/a*255)),u+=String.fromCharCode(f),n=(h*n+r)%a;return u}
        t=i(t,"QUNEE"),nr=JSON.parse(String.fromCharCode(91)+t+String.fromCharCode(93))}(ir);var er=nr[0]+nr[1]+nr[2],sr=nr[3]+nr[1]+nr[2],hr=nr[4],rr=nr[5],ar=nr[6],or=nr[7],fr=nr[8],ur=nr[9],cr=nr[10],_r=nr[11],dr=nr[12],lr=nr[13],vr=nr[14]+nr[15]+nr[16],br=nr[17],yr=nr[18],gr=nr[19]