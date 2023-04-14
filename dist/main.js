(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),p=new URL(t(721),t.b),l=a()(o()),d=s()(p);l.push([e.id,"@font-face {\n  font-family: creepster;\n  src: url("+d+');\n}\n\nhtml {\n  font: 62.5%;\n}\n\nbody {\n  margin: 0px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n  font-size: 1.7rem;\n  transition: 0.5;\n}\n\nbutton:hover {\n  color: #292524;\n  transition: 0.5;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: 1fr 10fr 5fr;\n  grid-template-columns: 1fr;\n  height: 100vh;\n}\n\nheader {\n  display: flex;\n  position: relative;\n  width: 100vw;\n  height: clamp(40px, 5vw, 50px);\n  padding: 3px 0px;\n  grid-row: 1/2;\n  grid-column: 1/2;\n  background-color: #ef4444;\n  justify-content: center;\n  align-items: center;\n}\n\n.header-image {\n  width: 100vw;\n  height: 420px;\n  object-fit: cover;\n\n  object-position: center;\n}\n\n.background-image {\n  width: 100vw;\n  height: 100vh;\n  object-fit: cover;\n  object-position: top;\n  display: block;\n}\n\n.tab-group {\n  display: flex;\n  position: fixed;\n  flex-direction: row;\n  background-color: #ef4444;\n  width: 100vw;\n  height: clamp(40px, 5vw, 50px);\n  padding: 3px;\n\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  z-index: 7;\n}\n\n.home-button,\n.menu-button,\n.contact-button {\n  z-index: 10;\n  font-weight: 800;\n  font-family: cursive;\n  font-size: clamp(20px, 3.5vw, 40px);\n  background-color: rgba(240, 248, 255, 0);\n  color: #1c1917;\n}\n\n.home-button:active,\n.menu-button:active,\n.contact-button:active {\n  color: #78716c;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  grid-row: 2/3;\n  grid-column: 1/2;\n}\n\n.home-page-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.home-page-contents-text-contents {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  border-radius: 5px;\n  background-color: #40373752;\n}\n\n.home-button,\n.menu-button,\n.contact-button {\n  z-index: 10;\n  font-weight: 800;\n  font-family: cursive;\n  font-size: clamp(20px, 3.5vw, 40px);\n  background-color: rgba(240, 248, 255, 0);\n  color: #1c1917;\n}\n.home-page-contents {\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n.home-page-text-1 {\n  font-size: clamp(30.75px, 8.2vw, 120px);\n  margin: 0px;\n  color: white;\n  font-family: creepster;\n  text-align: center;\n}\n\n.home-page-text-2 {\n  font-size: clamp(16px, 2.2vw, 10rem);\n  margin: 0px;\n  color: white;\n}\n\n.order-button {\n  width: clamp(145px, 25vw, 290px);\n  height: clamp(42px, 3.2vw, 69px);\n  font-size: clamp(16px, 2.2vw, 2.1rem);\n}\n\n/* .order-button {\n    min-width: 158px;\n    min-height: 48px;\n    width: 14vw;\n    height: 3.2vw;\n    font-size: clamp(25px, 50%, 100px);\n    max-height: 80px;\n    max-width: 240px;\n    font-size: 2.6vww;\n} */\n\n.reviews {\n  display: flex;\n  background-color: #ff5959;\n  flex: 2;\n  flex-basis: 300px;\n  width: 100vw;\n  gap: 15px;\n  padding: 20px 0px;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.review-card {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n}\n\n.review-profile-picture {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 100%;\n}\n\n.rating-container {\n  display: flex;\n}\n\nsvg.golden-star,\nsvg.grey-star {\n  display: flex;\n  height: 40px;\n}\n\n.review-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n.review-comment {\n  font-size: clamp(19px, 1.5vw, 50px);\n  width: clamp(190px, 14vw, 269px);\n}\n\n.review-comment,\n.reviewer-name {\n  font-family: "creepster";\n  word-break: break-word;\n  overflow-wrap: anywhere;\n  margin: 0px;\n  text-align: center;\n}\n\n.reviewer-name::before {\n  content: " - ";\n}\n\n.review-profile-holder {\n}\n\nfooter {\n  display: flex;\n\n  width: 100vw;\n\n  justify-self: center;\n  justify-content: center;\n  align-items: flex-end;\n\n  grid-row: 3/4;\n  grid-column: 1/2;\n\n  background-color: lightblue;\n}\n',""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],p=r.base?s[0]+r.base:s[0],l=i[p]||0,d="".concat(p," ").concat(l);i[p]=l+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),p=0;p<i.length;p++){var l=t(i[p]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},721:(e,n,t)=>{e.exports=t.p+"7e29388744fe1602e58c.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const e=(e,n)=>{const t=document.createElement(e);return((e,n)=>{Object.keys(n).forEach((t=>{e.setAttribute(t,n[t])}))})(t,n),t};function n(e,n){const t=document.createElementNS("http://www.w3.org/2000/svg","svg"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("viewBox","0 0 24 24"),r.setAttribute("fill",e),r.setAttribute("d",n),t.appendChild(r),t}const r=n("yellow","M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"),o=n("grey","M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z");function i(n,t,i,a){const c=e("div",{class:"review-card"}),s=e("div",{class:"review-profile-holder"}),p=e("img",{src:n[0],alt:n[1],class:n[2]}),l=e("div",{class:"review-container"}),d=function(n){const t=e("div",{class:"rating-container"}),i=5-n;for(let e=0;e<n;e++){const e=r.cloneNode(!0);e.setAttribute("class","golden-star"),t.appendChild(e)}for(let e=0;e<i;e++){const e=o.cloneNode(!0);e.setAttribute("class","grey-star"),t.appendChild(e)}return t}(t),u=e("p",{class:"review-comment"});u.innerText=i;const f=e("p",{class:"reviewer-name"});return f.innerText=a,s.appendChild(p),l.append(d,u,f),c.append(p,l),c}const a=e,c=(t.p,t.p+"bb2feb60a6a3a391049e.jpg"),s=t.p+"772303c8f7dba63b79c6.jpg",p=t.p+"4d6399fd5cdda38635f8.jpeg",l=t.p+"9b8f984a15fba63465b7.jpg",d=t.p+"7c430f4949baa0d918dc.png",u=a("img",{src:c,alt:"People In Restaurant Dining Area Seated Waiting And Or Eating With Waiters Walking Around",class:"background-image"}),f=a("div",{class:"home-page-section"}),m=a("div",{class:"home-page-contents-text-contents"}),h=a("p",{class:"home-page-text-1"}),g=a("p",{class:"home-page-text-2"}),v=a("div",{class:"home-page-contents"}),x=a("button",{class:"order-button"}),w=a("div",{class:"reviews"});let[b,y,T,j]=[a("div",{class:"review-card"}),a("div",{class:"review-card"}),a("div",{class:"review-card"}),a("div",{class:"review-card"})];function L(){f.append(u,v),k.append(f,w)}h.innerText="Worst food in the world!",g.innerText="- Made by unpaid workers.",x.innerText="Order Now",m.append(h,g),v.append(m,x),b=i([s,"Rat cooking LETHIMCOOK","review-profile-picture"],5,"I died from eating this food 11/10","Rattaouli"),y=i([l,"Bob The Tomato Wearing A Hat Profile Picture","review-profile-picture"],5,"He served me a cucumber for some reason it taste my friend larry idk why","Bob The Tomato"),T=i([p,"Larry The Cucumber","review-profile-picture"],5,"The staff are currently giving me tour of their back kitchen they said they have something special for me we lit","Larry The Cucumber"),j=i([d,"Mr. Potato Head","review-profile-picture"],1,"They served me a literal raw potato bruh. 💀","Mr. Potato Head"),w.append(b,y,T,j);const C=document.querySelector("#content"),E=document.createElement("header"),k=document.createElement("main"),A=document.createElement("footer"),M=document.createElement("div"),S=document.createElement("button"),z=document.createElement("button"),I=document.createElement("button"),N=document.createElement("p");document.addEventListener("click",L);var P=t(379),O=t.n(P),H=t(795),R=t.n(H),Z=t(569),W=t.n(Z),$=t(565),B=t.n($),F=t(216),U=t.n(F),_=t(589),D=t.n(_),q=t(426),G={};G.styleTagTransform=D(),G.setAttributes=B(),G.insert=W().bind(null,"head"),G.domAPI=R(),G.insertStyleElement=U(),O()(q.Z,G),q.Z&&q.Z.locals&&q.Z.locals,M.setAttribute("class","tab-group"),S.setAttribute("class","home-button"),z.setAttribute("class","menu-button"),I.setAttribute("class","contact-button"),S.innerText="Home",z.innerText="Menu",I.innerText="Contacts",N.innerText=`Copyright ${(new Date).getFullYear()} | Contact | Email`,M.appendChild(S),M.appendChild(z),M.appendChild(I),E.appendChild(M),A.appendChild(N),C.appendChild(E),C.appendChild(k),C.appendChild(A),L()})()})();