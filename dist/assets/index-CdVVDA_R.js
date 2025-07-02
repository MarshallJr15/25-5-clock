(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function un(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ft={exports:{}},ut={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke;function ar(){if(ke)return ut;ke=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,a,o){var s=null;if(o!==void 0&&(s=""+o),a.key!==void 0&&(s=""+a.key),"key"in a){o={};for(var f in a)f!=="key"&&(o[f]=a[f])}else o=a;return a=o.ref,{$$typeof:t,type:r,key:s,ref:a!==void 0?a:null,props:o}}return ut.Fragment=e,ut.jsx=n,ut.jsxs=n,ut}var _e;function or(){return _e||(_e=1,Ft.exports=ar()),Ft.exports}or();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ir(t,e,n){return(e=fr(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Te(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Te(Object(n),!0).forEach(function(r){ir(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function fr(t){var e=sr(t,"string");return typeof e=="symbol"?e:e+""}const Ce=()=>{};let de={},dn={},mn=null,pn={mark:Ce,measure:Ce};try{typeof window<"u"&&(de=window),typeof document<"u"&&(dn=document),typeof MutationObserver<"u"&&(mn=MutationObserver),typeof performance<"u"&&(pn=performance)}catch{}const{userAgent:Ie=""}=de.navigator||{},K=de,P=dn,Re=mn,At=pn;K.document;const B=!!P.documentElement&&!!P.head&&typeof P.addEventListener=="function"&&typeof P.createElement=="function",gn=~Ie.indexOf("MSIE")||~Ie.indexOf("Trident/");var lr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,cr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,hn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ur={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},yn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],L="classic",_t="duotone",dr="sharp",mr="sharp-duotone",bn=[L,_t,dr,mr],pr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},gr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},hr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),yr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},br=["fak","fa-kit","fakd","fa-kit-duotone"],Ne={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},vr=["kit"],xr={kit:{"fa-kit":"fak"}},Ar=["fak","fakd"],Er={kit:{fak:"fa-kit"}},Le={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Sr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],wr=["fak","fa-kit","fakd","fa-kit-duotone"],Pr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Or={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},kr={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Gt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},_r=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Xt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Sr,..._r],Tr=["solid","regular","light","thin","duotone","brands"],vn=[1,2,3,4,5,6,7,8,9,10],Cr=vn.concat([11,12,13,14,15,16,17,18,19,20]),Ir=[...Object.keys(kr),...Tr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Et.GROUP,Et.SWAP_OPACITY,Et.PRIMARY,Et.SECONDARY].concat(vn.map(t=>"".concat(t,"x"))).concat(Cr.map(t=>"w-".concat(t))),Rr={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const $="___FONT_AWESOME___",Vt=16,xn="fa",An="svg-inline--fa",nt="data-fa-i2svg",Kt="data-fa-pseudo-element",Nr="data-fa-pseudo-element-pending",me="data-prefix",pe="data-icon",Me="fontawesome-i2svg",Lr="async",Mr=["HTML","HEAD","STYLE","SCRIPT"],En=(()=>{try{return!0}catch{return!1}})();function yt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[L]}})}const Sn=l({},hn);Sn[L]=l(l(l(l({},{"fa-duotone":"duotone"}),hn[L]),Ne.kit),Ne["kit-duotone"]);const Fr=yt(Sn),Jt=l({},yr);Jt[L]=l(l(l(l({},{duotone:"fad"}),Jt[L]),Le.kit),Le["kit-duotone"]);const Fe=yt(Jt),Qt=l({},Gt);Qt[L]=l(l({},Qt[L]),Er.kit);const ge=yt(Qt),Zt=l({},Or);Zt[L]=l(l({},Zt[L]),xr.kit);yt(Zt);const jr=lr,wn="fa-layers-text",Dr=cr,zr=l({},pr);yt(zr);const Yr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jt=ur,Ur=[...vr,...Ir],mt=K.FontAwesomeConfig||{};function Hr(t){var e=P.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Wr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}P&&typeof P.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=Wr(Hr(n));a!=null&&(mt[r]=a)});const Pn={styleDefault:"solid",familyDefault:L,cssPrefix:xn,replacementClass:An,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mt.familyPrefix&&(mt.cssPrefix=mt.familyPrefix);const lt=l(l({},Pn),mt);lt.autoReplaceSvg||(lt.observeMutations=!1);const m={};Object.keys(Pn).forEach(t=>{Object.defineProperty(m,t,{enumerable:!0,set:function(e){lt[t]=e,pt.forEach(n=>n(m))},get:function(){return lt[t]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){lt.cssPrefix=t,pt.forEach(e=>e(m))},get:function(){return lt.cssPrefix}});K.FontAwesomeConfig=m;const pt=[];function $r(t){return pt.push(t),()=>{pt.splice(pt.indexOf(t),1)}}const X=Vt,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qr(t){if(!t||!B)return;const e=P.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=P.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return P.head.insertBefore(e,r),t}const Br="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gt(){let t=12,e="";for(;t-- >0;)e+=Br[Math.random()*62|0];return e}function ct(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function he(t){return t.classList?ct(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function On(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Gr(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(On(t[n]),'" '),"").trim()}function Tt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ye(t){return t.size!==U.size||t.x!==U.x||t.y!==U.y||t.rotate!==U.rotate||t.flipX||t.flipY}function Xr(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),f="rotate(".concat(e.rotate," 0 0)"),d={transform:"".concat(o," ").concat(s," ").concat(f)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:d,path:u}}function Vr(t){let{transform:e,width:n=Vt,height:r=Vt,startCentered:a=!1}=t,o="";return a&&gn?o+="translate(".concat(e.x/X-n/2,"em, ").concat(e.y/X-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/X,"em), calc(-50% + ").concat(e.y/X,"em)) "):o+="translate(".concat(e.x/X,"em, ").concat(e.y/X,"em) "),o+="scale(".concat(e.size/X*(e.flipX?-1:1),", ").concat(e.size/X*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Kr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function kn(){const t=xn,e=An,n=m.cssPrefix,r=m.replacementClass;let a=Kr;if(n!==t||r!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),f=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(f,".".concat(r))}return a}let je=!1;function Dt(){m.autoAddCss&&!je&&(qr(kn()),je=!0)}var Jr={mixout(){return{dom:{css:kn,insertCss:Dt}}},hooks(){return{beforeDOMElementCreation(){Dt()},beforeI2svg(){Dt()}}}};const q=K||{};q[$]||(q[$]={});q[$].styles||(q[$].styles={});q[$].hooks||(q[$].hooks={});q[$].shims||(q[$].shims=[]);var H=q[$];const _n=[],Tn=function(){P.removeEventListener("DOMContentLoaded",Tn),Pt=1,_n.map(t=>t())};let Pt=!1;B&&(Pt=(P.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(P.readyState),Pt||P.addEventListener("DOMContentLoaded",Tn));function Qr(t){B&&(Pt?setTimeout(t,0):_n.push(t))}function bt(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?On(t):"<".concat(e," ").concat(Gr(n),">").concat(r.map(bt).join(""),"</").concat(e,">")}function De(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var zt=function(e,n,r,a){var o=Object.keys(e),s=o.length,f=n,d,u,p;for(r===void 0?(d=1,p=e[o[0]]):(d=0,p=r);d<s;d++)u=o[d],p=f(p,e[u],u,e);return p};function Zr(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function te(t){const e=Zr(t);return e.length===1?e[0].toString(16):null}function ta(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ze(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function ee(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=ze(e);typeof H.hooks.addPack=="function"&&!r?H.hooks.addPack(t,ze(e)):H.styles[t]=l(l({},H.styles[t]||{}),a),t==="fas"&&ee("fa",e)}const{styles:ht,shims:ea}=H,Cn=Object.keys(ge),na=Cn.reduce((t,e)=>(t[e]=Object.keys(ge[e]),t),{});let be=null,In={},Rn={},Nn={},Ln={},Mn={};function ra(t){return~Ur.indexOf(t)}function aa(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!ra(a)?a:null}const Fn=()=>{const t=r=>zt(ht,(a,o,s)=>(a[s]=zt(o,r,{}),a),{});In=t((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(f=>typeof f=="number").forEach(f=>{r[f.toString(16)]=o}),r)),Rn=t((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(f=>typeof f=="string").forEach(f=>{r[f]=o}),r)),Mn=t((r,a,o)=>{const s=a[2];return r[o]=o,s.forEach(f=>{r[f]=o}),r});const e="far"in ht||m.autoFetchSvg,n=zt(ea,(r,a)=>{const o=a[0];let s=a[1];const f=a[2];return s==="far"&&!e&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Nn=n.names,Ln=n.unicodes,be=Ct(m.styleDefault,{family:m.familyDefault})};$r(t=>{be=Ct(t.styleDefault,{family:m.familyDefault})});Fn();function ve(t,e){return(In[t]||{})[e]}function oa(t,e){return(Rn[t]||{})[e]}function tt(t,e){return(Mn[t]||{})[e]}function jn(t){return Nn[t]||{prefix:null,iconName:null}}function ia(t){const e=Ln[t],n=ve("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function J(){return be}const Dn=()=>({prefix:null,iconName:null,rest:[]});function sa(t){let e=L;const n=Cn.reduce((r,a)=>(r[a]="".concat(m.cssPrefix,"-").concat(a),r),{});return bn.forEach(r=>{(t.includes(n[r])||t.some(a=>na[r].includes(a)))&&(e=r)}),e}function Ct(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=L}=e,r=Fr[n][t];if(n===_t&&!t)return"fad";const a=Fe[n][t]||Fe[n][r],o=t in H.styles?t:null;return a||o||null}function fa(t){let e=[],n=null;return t.forEach(r=>{const a=aa(m.cssPrefix,r);a?n=a:r&&e.push(r)}),{iconName:n,rest:e}}function Ye(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function It(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const a=Xt.concat(wr),o=Ye(t.filter(v=>a.includes(v))),s=Ye(t.filter(v=>!Xt.includes(v))),f=o.filter(v=>(r=v,!yn.includes(v))),[d=null]=f,u=sa(o),p=l(l({},fa(s)),{},{prefix:Ct(d,{family:u})});return l(l(l({},p),da({values:t,family:u,styles:ht,config:m,canonical:p,givenPrefix:r})),la(n,r,p))}function la(t,e,n){let{prefix:r,iconName:a}=n;if(t||!r||!a)return{prefix:r,iconName:a};const o=e==="fa"?jn(a):{},s=tt(r,a);return a=o.iconName||s||a,r=o.prefix||r,r==="far"&&!ht.far&&ht.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const ca=bn.filter(t=>t!==L||t!==_t),ua=Object.keys(Gt).filter(t=>t!==L).map(t=>Object.keys(Gt[t])).flat();function da(t){const{values:e,family:n,canonical:r,givenPrefix:a="",styles:o={},config:s={}}=t,f=n===_t,d=e.includes("fa-duotone")||e.includes("fad"),u=s.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!f&&(d||u||p)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ca.includes(n)&&(Object.keys(o).find(y=>ua.includes(y))||s.autoFetchSvg)){const y=hr.get(n).defaultShortPrefixId;r.prefix=y,r.iconName=tt(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=J()||"fas"),r}class ma{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]=l(l({},this.definitions[o]||{}),a[o]),ee(o,a[o]);const s=ge[L][o];s&&ee(s,a[o]),Fn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:s,icon:f}=r[a],d=f[2];e[o]||(e[o]={}),d.length>0&&d.forEach(u=>{typeof u=="string"&&(e[o][u]=f)}),e[o][s]=f}),e}}let Ue=[],ot={};const ft={},pa=Object.keys(ft);function ga(t,e){let{mixoutsTo:n}=e;return Ue=t,ot={},Object.keys(ft).forEach(r=>{pa.indexOf(r)===-1&&delete ft[r]}),Ue.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(s=>{n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(s=>{ot[s]||(ot[s]=[]),ot[s].push(o[s])})}r.provides&&r.provides(ft)}),n}function ne(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(ot[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function rt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(ot[t]||[]).forEach(o=>{o.apply(null,n)})}function Q(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ft[t]?ft[t].apply(null,e):void 0}function re(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||J();if(e)return e=tt(n,e)||e,De(zn.definitions,n,e)||De(H.styles,n,e)}const zn=new ma,ha=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,rt("noAuto")},ya={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(rt("beforeI2svg",t),Q("pseudoElements2svg",t),Q("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Qr(()=>{va({autoReplaceSvgRoot:e}),rt("watch",t)})}},ba={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:tt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ct(t[0]);return{prefix:n,iconName:tt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(jr))){const e=It(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||J(),iconName:tt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=J();return{prefix:e,iconName:tt(e,t)||t}}}},F={noAuto:ha,config:m,dom:ya,parse:ba,library:zn,findIconDefinition:re,toHtml:bt},va=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=P}=t;(Object.keys(H.styles).length>0||m.autoFetchSvg)&&B&&m.autoReplaceSvg&&F.dom.i2svg({node:e})};function Rt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>bt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!B)return;const n=P.createElement("div");return n.innerHTML=t.html,n.children}}),t}function xa(t){let{children:e,main:n,mask:r,attributes:a,styles:o,transform:s}=t;if(ye(s)&&n.found&&!r.found){const{width:f,height:d}=n,u={x:f/d/2,y:.5};a.style=Tt(l(l({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Aa(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:o}=t;const s=o===!0?"".concat(e,"-").concat(m.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},a),{},{id:s}),children:r}]}]}function xe(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:o,symbol:s,title:f,maskId:d,titleId:u,extra:p,watchable:v=!1}=t,{width:y,height:k}=n.found?n:e,N=Ar.includes(r),M=[m.replacementClass,a?"".concat(m.cssPrefix,"-").concat(a):""].filter(A=>p.classes.indexOf(A)===-1).filter(A=>A!==""||!!A).concat(p.classes).join(" ");let w={children:[],attributes:l(l({},p.attributes),{},{"data-prefix":r,"data-icon":a,class:M,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(k)})};const T=N&&!~p.classes.indexOf("fa-fw")?{width:"".concat(y/k*16*.0625,"em")}:{};v&&(w.attributes[nt]=""),f&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(u||gt())},children:[f]}),delete w.attributes.title);const O=l(l({},w),{},{prefix:r,iconName:a,main:e,mask:n,maskId:d,transform:o,symbol:s,styles:l(l({},T),p.styles)}),{children:C,attributes:j}=n.found&&e.found?Q("generateAbstractMask",O)||{children:[],attributes:{}}:Q("generateAbstractIcon",O)||{children:[],attributes:{}};return O.children=C,O.attributes=j,s?Aa(O):xa(O)}function He(t){const{content:e,width:n,height:r,transform:a,title:o,extra:s,watchable:f=!1}=t,d=l(l(l({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});f&&(d[nt]="");const u=l({},s.styles);ye(a)&&(u.transform=Vr({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const p=Tt(u);p.length>0&&(d.style=p);const v=[];return v.push({tag:"span",attributes:d,children:[e]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function Ea(t){const{content:e,title:n,extra:r}=t,a=l(l(l({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Tt(r.styles);o.length>0&&(a.style=o);const s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:Yt}=H;function ae(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(jt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(jt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const Sa={found:!1,width:512,height:512};function wa(t,e){!En&&!m.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function oe(t,e){let n=e;return e==="fa"&&m.styleDefault!==null&&(e=J()),new Promise((r,a)=>{if(n==="fa"){const o=jn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Yt[e]&&Yt[e][t]){const o=Yt[e][t];return r(ae(o))}wa(t,e),r(l(l({},Sa),{},{icon:m.showMissingIcons&&t?Q("missingIconAbstract")||{}:{}}))})}const We=()=>{},ie=m.measurePerformance&&At&&At.mark&&At.measure?At:{mark:We,measure:We},dt='FA "6.7.2"',Pa=t=>(ie.mark("".concat(dt," ").concat(t," begins")),()=>Yn(t)),Yn=t=>{ie.mark("".concat(dt," ").concat(t," ends")),ie.measure("".concat(dt," ").concat(t),"".concat(dt," ").concat(t," begins"),"".concat(dt," ").concat(t," ends"))};var Ae={begin:Pa,end:Yn};const St=()=>{};function $e(t){return typeof(t.getAttribute?t.getAttribute(nt):null)=="string"}function Oa(t){const e=t.getAttribute?t.getAttribute(me):null,n=t.getAttribute?t.getAttribute(pe):null;return e&&n}function ka(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(m.replacementClass)}function _a(){return m.autoReplaceSvg===!0?wt.replace:wt[m.autoReplaceSvg]||wt.replace}function Ta(t){return P.createElementNS("http://www.w3.org/2000/svg",t)}function Ca(t){return P.createElement(t)}function Un(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ta:Ca}=e;if(typeof t=="string")return P.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(Un(o,{ceFn:n}))}),r}function Ia(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const wt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Un(n),e)}),e.getAttribute(nt)===null&&m.keepOriginalSource){let n=P.createComment(Ia(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~he(e).indexOf(m.replacementClass))return wt.replace(t);const r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((s,f)=>(f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>bt(o)).join(`
`);e.setAttribute(nt,""),e.innerHTML=a}};function qe(t){t()}function Hn(t,e){const n=typeof e=="function"?e:St;if(t.length===0)n();else{let r=qe;m.mutateApproach===Lr&&(r=K.requestAnimationFrame||qe),r(()=>{const a=_a(),o=Ae.begin("mutate");t.map(a),o(),n()})}}let Ee=!1;function Wn(){Ee=!0}function se(){Ee=!1}let Ot=null;function Be(t){if(!Re||!m.observeMutations)return;const{treeCallback:e=St,nodeCallback:n=St,pseudoElementsCallback:r=St,observeMutationsRoot:a=P}=t;Ot=new Re(o=>{if(Ee)return;const s=J();ct(o).forEach(f=>{if(f.type==="childList"&&f.addedNodes.length>0&&!$e(f.addedNodes[0])&&(m.searchPseudoElements&&r(f.target),e(f.target)),f.type==="attributes"&&f.target.parentNode&&m.searchPseudoElements&&r(f.target.parentNode),f.type==="attributes"&&$e(f.target)&&~Yr.indexOf(f.attributeName))if(f.attributeName==="class"&&Oa(f.target)){const{prefix:d,iconName:u}=It(he(f.target));f.target.setAttribute(me,d||s),u&&f.target.setAttribute(pe,u)}else ka(f.target)&&n(f.target)})}),B&&Ot.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Ra(){Ot&&Ot.disconnect()}function Na(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const o=a.split(":"),s=o[0],f=o.slice(1);return s&&f.length>0&&(r[s]=f.join(":").trim()),r},{})),n}function La(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=It(he(t));return a.prefix||(a.prefix=J()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=oa(a.prefix,t.innerText)||ve(a.prefix,te(t.innerText))),!a.iconName&&m.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Ma(t){const e=ct(t.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return m.autoA11y&&(n?e["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(r||gt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Fa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ge(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=La(t),o=Ma(t),s=ne("parseNodeAttributes",{},t);let f=e.styleParser?Na(t):[];return l({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:f,attributes:o}},s)}const{styles:ja}=H;function $n(t){const e=m.autoReplaceSvg==="nest"?Ge(t,{styleParser:!1}):Ge(t);return~e.extra.classes.indexOf(wn)?Q("generateLayersText",t,e):Q("generateSvgReplacementMutation",t,e)}function Da(){return[...br,...Xt]}function Xe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();const n=P.documentElement.classList,r=p=>n.add("".concat(Me,"-").concat(p)),a=p=>n.remove("".concat(Me,"-").concat(p)),o=m.autoFetchSvg?Da():yn.concat(Object.keys(ja));o.includes("fa")||o.push("fa");const s=[".".concat(wn,":not([").concat(nt,"])")].concat(o.map(p=>".".concat(p,":not([").concat(nt,"])"))).join(", ");if(s.length===0)return Promise.resolve();let f=[];try{f=ct(t.querySelectorAll(s))}catch{}if(f.length>0)r("pending"),a("complete");else return Promise.resolve();const d=Ae.begin("onTree"),u=f.reduce((p,v)=>{try{const y=$n(v);y&&p.push(y)}catch(y){En||y.name==="MissingIcon"&&console.error(y)}return p},[]);return new Promise((p,v)=>{Promise.all(u).then(y=>{Hn(y,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),d(),p()})}).catch(y=>{d(),v(y)})})}function za(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$n(t).then(n=>{n&&Hn([n],e)})}function Ya(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:re(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:re(a||{})),t(r,l(l({},n),{},{mask:a}))}}const Ua=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=U,symbol:r=!1,mask:a=null,maskId:o=null,title:s=null,titleId:f=null,classes:d=[],attributes:u={},styles:p={}}=e;if(!t)return;const{prefix:v,iconName:y,icon:k}=t;return Rt(l({type:"icon"},t),()=>(rt("beforeDOMElementCreation",{iconDefinition:t,params:e}),m.autoA11y&&(s?u["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(f||gt()):(u["aria-hidden"]="true",u.focusable="false")),xe({icons:{main:ae(k),mask:a?ae(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:v,iconName:y,transform:l(l({},U),n),symbol:r,title:s,maskId:o,titleId:f,extra:{attributes:u,styles:p,classes:d}})))};var Ha={mixout(){return{icon:Ya(Ua)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Xe,t.nodeCallback=za,t}}},provides(t){t.i2svg=function(e){const{node:n=P,callback:r=()=>{}}=e;return Xe(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:o,prefix:s,transform:f,symbol:d,mask:u,maskId:p,extra:v}=n;return new Promise((y,k)=>{Promise.all([oe(r,s),u.iconName?oe(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[M,w]=N;y([e,xe({icons:{main:M,mask:w},prefix:s,iconName:r,transform:f,symbol:d,maskId:p,title:a,titleId:o,extra:v,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:o,styles:s}=e;const f=Tt(s);f.length>0&&(r.style=f);let d;return ye(o)&&(d=Q("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(d||a.icon),{children:n,attributes:r}}}},Wa={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Rt({type:"layer"},()=>{rt("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},$a={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=e;return Rt({type:"counter",content:t},()=>(rt("beforeDOMElementCreation",{content:t,params:e}),Ea({content:t.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(m.cssPrefix,"-layers-counter"),...r]}})))}}}},qa={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=U,title:r=null,classes:a=[],attributes:o={},styles:s={}}=e;return Rt({type:"text",content:t},()=>(rt("beforeDOMElementCreation",{content:t,params:e}),He({content:t,transform:l(l({},U),n),title:r,extra:{attributes:o,styles:s,classes:["".concat(m.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:o}=n;let s=null,f=null;if(gn){const d=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/d,f=u.height/d}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,He({content:e.innerHTML,width:s,height:f,transform:a,title:r,extra:o,watchable:!0})])}}};const Ba=new RegExp('"',"ug"),Ve=[1105920,1112319],Ke=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),gr),Rr),Pr),fe=Object.keys(Ke).reduce((t,e)=>(t[e.toLowerCase()]=Ke[e],t),{}),Ga=Object.keys(fe).reduce((t,e)=>{const n=fe[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Xa(t){const e=t.replace(Ba,""),n=ta(e,0),r=n>=Ve[0]&&n<=Ve[1],a=e.length===2?e[0]===e[1]:!1;return{value:te(a?e[0]:e),isSecondary:r||a}}function Va(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(fe[n]||{})[a]||Ga[n]}function Je(t,e){const n="".concat(Nr).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const s=ct(t.children).filter(y=>y.getAttribute(Kt)===e)[0],f=K.getComputedStyle(t,e),d=f.getPropertyValue("font-family"),u=d.match(Dr),p=f.getPropertyValue("font-weight"),v=f.getPropertyValue("content");if(s&&!u)return t.removeChild(s),r();if(u&&v!=="none"&&v!==""){const y=f.getPropertyValue("content");let k=Va(d,p);const{value:N,isSecondary:M}=Xa(y),w=u[0].startsWith("FontAwesome");let T=ve(k,N),O=T;if(w){const C=ia(N);C.iconName&&C.prefix&&(T=C.iconName,k=C.prefix)}if(T&&!M&&(!s||s.getAttribute(me)!==k||s.getAttribute(pe)!==O)){t.setAttribute(n,O),s&&t.removeChild(s);const C=Fa(),{extra:j}=C;j.attributes[Kt]=e,oe(T,k).then(A=>{const vt=xe(l(l({},C),{},{icons:{main:A,mask:Dn()},prefix:k,iconName:O,extra:j,watchable:!0})),Z=P.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Z,t.firstChild):t.appendChild(Z),Z.outerHTML=vt.map(Nt=>bt(Nt)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ka(t){return Promise.all([Je(t,"::before"),Je(t,"::after")])}function Ja(t){return t.parentNode!==document.head&&!~Mr.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Kt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Qe(t){if(B)return new Promise((e,n)=>{const r=ct(t.querySelectorAll("*")).filter(Ja).map(Ka),a=Ae.begin("searchPseudoElements");Wn(),Promise.all(r).then(()=>{a(),se(),e()}).catch(()=>{a(),se(),n()})})}var Qa={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Qe,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=P}=e;m.searchPseudoElements&&Qe(n)}}};let Ze=!1;var Za={mixout(){return{dom:{unwatch(){Wn(),Ze=!0}}}},hooks(){return{bootstrap(){Be(ne("mutationObserverCallbacks",{}))},noAuto(){Ra()},watch(t){const{observeMutationsRoot:e}=t;Ze?se():Be(ne("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const tn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let s=a.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var to={mixout(){return{parse:{transform:t=>tn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=tn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:o}=e;const s={transform:"translate(".concat(a/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(f," ").concat(d," ").concat(u)},v={transform:"translate(".concat(o/2*-1," -256)")},y={outer:s,inner:p,path:v};return{tag:"g",attributes:l({},y.outer),children:[{tag:"g",attributes:l({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),y.path)}]}]}}}};const Ut={x:0,y:0,width:"100%",height:"100%"};function en(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function eo(t){return t.tag==="g"?t.children:[t]}var no={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?It(n.split(" ").map(a=>a.trim())):Dn();return r.prefix||(r.prefix=J()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:o,maskId:s,transform:f}=e;const{width:d,icon:u}=a,{width:p,icon:v}=o,y=Xr({transform:f,containerWidth:p,iconWidth:d}),k={tag:"rect",attributes:l(l({},Ut),{},{fill:"white"})},N=u.children?{children:u.children.map(en)}:{},M={tag:"g",attributes:l({},y.inner),children:[en(l({tag:u.tag,attributes:l(l({},u.attributes),y.path)},N))]},w={tag:"g",attributes:l({},y.outer),children:[M]},T="mask-".concat(s||gt()),O="clip-".concat(s||gt()),C={tag:"mask",attributes:l(l({},Ut),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,w]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:eo(v)},C]};return n.push(j,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(T,")")},Ut)}),{children:n,attributes:r}}}},ro={provides(t){let e=!1;K.matchMedia&&(e=K.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=l(l({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:l(l({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:l(l({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:l(l({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:l(l({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:l(l({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},ao={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},oo=[Jr,Ha,Wa,$a,qa,Qa,Za,to,no,ro,ao];ga(oo,{mixoutsTo:F});F.noAuto;F.config;F.library;F.dom;const le=F.parse;F.findIconDefinition;F.toHtml;const io=F.icon;F.layer;F.text;F.counter;var Ht={exports:{}},Wt,nn;function so(){if(nn)return Wt;nn=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Wt=t,Wt}var $t,rn;function fo(){if(rn)return $t;rn=1;var t=so();function e(){}function n(){}return n.resetWarningCache=e,$t=function(){function r(s,f,d,u,p,v){if(v!==t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}r.isRequired=r;function a(){return r}var o={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:a,element:r,elementType:r,instanceOf:a,node:r,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:e};return o.PropTypes=o,o},$t}var an;function lo(){return an||(an=1,Ht.exports=fo()()),Ht.exports}var co=lo();const x=un(co);var qt={exports:{}},b={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var on;function uo(){if(on)return b;on=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),s=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function y(i){return i===null||typeof i!="object"?null:(i=v&&i[v]||i["@@iterator"],typeof i=="function"?i:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,M={};function w(i,c,g){this.props=i,this.context=c,this.refs=M,this.updater=g||k}w.prototype.isReactComponent={},w.prototype.setState=function(i,c){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,c,"setState")},w.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function T(){}T.prototype=w.prototype;function O(i,c,g){this.props=i,this.context=c,this.refs=M,this.updater=g||k}var C=O.prototype=new T;C.constructor=O,N(C,w.prototype),C.isPureReactComponent=!0;var j=Array.isArray,A={H:null,A:null,T:null,S:null,V:null},vt=Object.prototype.hasOwnProperty;function Z(i,c,g,h,S,_){return g=_.ref,{$$typeof:t,type:i,key:c,ref:g!==void 0?g:null,props:_}}function Nt(i,c){return Z(i.type,c,void 0,void 0,void 0,i.props)}function Lt(i){return typeof i=="object"&&i!==null&&i.$$typeof===t}function Zn(i){var c={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(g){return c[g]})}var we=/\/+/g;function Mt(i,c){return typeof i=="object"&&i!==null&&i.key!=null?Zn(""+i.key):c.toString(36)}function Pe(){}function tr(i){switch(i.status){case"fulfilled":return i.value;case"rejected":throw i.reason;default:switch(typeof i.status=="string"?i.then(Pe,Pe):(i.status="pending",i.then(function(c){i.status==="pending"&&(i.status="fulfilled",i.value=c)},function(c){i.status==="pending"&&(i.status="rejected",i.reason=c)})),i.status){case"fulfilled":return i.value;case"rejected":throw i.reason}}throw i}function at(i,c,g,h,S){var _=typeof i;(_==="undefined"||_==="boolean")&&(i=null);var E=!1;if(i===null)E=!0;else switch(_){case"bigint":case"string":case"number":E=!0;break;case"object":switch(i.$$typeof){case t:case e:E=!0;break;case p:return E=i._init,at(E(i._payload),c,g,h,S)}}if(E)return S=S(i),E=h===""?"."+Mt(i,0):h,j(S)?(g="",E!=null&&(g=E.replace(we,"$&/")+"/"),at(S,c,g,"",function(rr){return rr})):S!=null&&(Lt(S)&&(S=Nt(S,g+(S.key==null||i&&i.key===S.key?"":(""+S.key).replace(we,"$&/")+"/")+E)),c.push(S)),1;E=0;var G=h===""?".":h+":";if(j(i))for(var I=0;I<i.length;I++)h=i[I],_=G+Mt(h,I),E+=at(h,c,g,_,S);else if(I=y(i),typeof I=="function")for(i=I.call(i),I=0;!(h=i.next()).done;)h=h.value,_=G+Mt(h,I++),E+=at(h,c,g,_,S);else if(_==="object"){if(typeof i.then=="function")return at(tr(i),c,g,h,S);throw c=String(i),Error("Objects are not valid as a React child (found: "+(c==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":c)+"). If you meant to render a collection of children, use an array instead.")}return E}function xt(i,c,g){if(i==null)return i;var h=[],S=0;return at(i,h,"","",function(_){return c.call(g,_,S++)}),h}function er(i){if(i._status===-1){var c=i._result;c=c(),c.then(function(g){(i._status===0||i._status===-1)&&(i._status=1,i._result=g)},function(g){(i._status===0||i._status===-1)&&(i._status=2,i._result=g)}),i._status===-1&&(i._status=0,i._result=c)}if(i._status===1)return i._result.default;throw i._result}var Oe=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var c=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(c))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function nr(){}return b.Children={map:xt,forEach:function(i,c,g){xt(i,function(){c.apply(this,arguments)},g)},count:function(i){var c=0;return xt(i,function(){c++}),c},toArray:function(i){return xt(i,function(c){return c})||[]},only:function(i){if(!Lt(i))throw Error("React.Children.only expected to receive a single React element child.");return i}},b.Component=w,b.Fragment=n,b.Profiler=a,b.PureComponent=O,b.StrictMode=r,b.Suspense=d,b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,b.__COMPILER_RUNTIME={__proto__:null,c:function(i){return A.H.useMemoCache(i)}},b.cache=function(i){return function(){return i.apply(null,arguments)}},b.cloneElement=function(i,c,g){if(i==null)throw Error("The argument must be a React element, but you passed "+i+".");var h=N({},i.props),S=i.key,_=void 0;if(c!=null)for(E in c.ref!==void 0&&(_=void 0),c.key!==void 0&&(S=""+c.key),c)!vt.call(c,E)||E==="key"||E==="__self"||E==="__source"||E==="ref"&&c.ref===void 0||(h[E]=c[E]);var E=arguments.length-2;if(E===1)h.children=g;else if(1<E){for(var G=Array(E),I=0;I<E;I++)G[I]=arguments[I+2];h.children=G}return Z(i.type,S,void 0,void 0,_,h)},b.createContext=function(i){return i={$$typeof:s,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null},i.Provider=i,i.Consumer={$$typeof:o,_context:i},i},b.createElement=function(i,c,g){var h,S={},_=null;if(c!=null)for(h in c.key!==void 0&&(_=""+c.key),c)vt.call(c,h)&&h!=="key"&&h!=="__self"&&h!=="__source"&&(S[h]=c[h]);var E=arguments.length-2;if(E===1)S.children=g;else if(1<E){for(var G=Array(E),I=0;I<E;I++)G[I]=arguments[I+2];S.children=G}if(i&&i.defaultProps)for(h in E=i.defaultProps,E)S[h]===void 0&&(S[h]=E[h]);return Z(i,_,void 0,void 0,null,S)},b.createRef=function(){return{current:null}},b.forwardRef=function(i){return{$$typeof:f,render:i}},b.isValidElement=Lt,b.lazy=function(i){return{$$typeof:p,_payload:{_status:-1,_result:i},_init:er}},b.memo=function(i,c){return{$$typeof:u,type:i,compare:c===void 0?null:c}},b.startTransition=function(i){var c=A.T,g={};A.T=g;try{var h=i(),S=A.S;S!==null&&S(g,h),typeof h=="object"&&h!==null&&typeof h.then=="function"&&h.then(nr,Oe)}catch(_){Oe(_)}finally{A.T=c}},b.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},b.use=function(i){return A.H.use(i)},b.useActionState=function(i,c,g){return A.H.useActionState(i,c,g)},b.useCallback=function(i,c){return A.H.useCallback(i,c)},b.useContext=function(i){return A.H.useContext(i)},b.useDebugValue=function(){},b.useDeferredValue=function(i,c){return A.H.useDeferredValue(i,c)},b.useEffect=function(i,c,g){var h=A.H;if(typeof g=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return h.useEffect(i,c)},b.useId=function(){return A.H.useId()},b.useImperativeHandle=function(i,c,g){return A.H.useImperativeHandle(i,c,g)},b.useInsertionEffect=function(i,c){return A.H.useInsertionEffect(i,c)},b.useLayoutEffect=function(i,c){return A.H.useLayoutEffect(i,c)},b.useMemo=function(i,c){return A.H.useMemo(i,c)},b.useOptimistic=function(i,c){return A.H.useOptimistic(i,c)},b.useReducer=function(i,c,g){return A.H.useReducer(i,c,g)},b.useRef=function(i){return A.H.useRef(i)},b.useState=function(i){return A.H.useState(i)},b.useSyncExternalStore=function(i,c,g){return A.H.useSyncExternalStore(i,c,g)},b.useTransition=function(){return A.H.useTransition()},b.version="19.1.0",b}var sn;function mo(){return sn||(sn=1,qt.exports=uo()),qt.exports}var po=mo();const qn=un(po);function fn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fn(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fn(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kt(t){"@babel/helpers - typeof";return kt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kt(t)}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function go(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ho(t,e){if(t==null)return{};var n=go(t,e),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ce(t){return yo(t)||bo(t)||vo(t)||xo()}function yo(t){if(Array.isArray(t))return ue(t)}function bo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vo(t,e){if(t){if(typeof t=="string")return ue(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ue(t,e)}}function ue(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function xo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ao(t){var e,n=t.beat,r=t.fade,a=t.beatFade,o=t.bounce,s=t.shake,f=t.flash,d=t.spin,u=t.spinPulse,p=t.spinReverse,v=t.pulse,y=t.fixedWidth,k=t.inverse,N=t.border,M=t.listItem,w=t.flip,T=t.size,O=t.rotation,C=t.pull,j=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":s,"fa-flash":f,"fa-spin":d,"fa-spin-reverse":p,"fa-spin-pulse":u,"fa-pulse":v,"fa-fw":y,"fa-inverse":k,"fa-border":N,"fa-li":M,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},it(e,"fa-".concat(T),typeof T<"u"&&T!==null),it(e,"fa-rotate-".concat(O),typeof O<"u"&&O!==null&&O!==0),it(e,"fa-pull-".concat(C),typeof C<"u"&&C!==null),it(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(j).map(function(A){return j[A]?A:null}).filter(function(A){return A})}function Eo(t){return t=t-0,t===t}function Bn(t){return Eo(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var So=["style"];function wo(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Po(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Bn(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?e[wo(a)]=o:e[a]=o,e},{})}function Gn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(d){return Gn(t,d)}),a=Object.keys(e.attributes||{}).reduce(function(d,u){var p=e.attributes[u];switch(u){case"class":d.attrs.className=p,delete e.attributes.class;break;case"style":d.attrs.style=Po(p);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?d.attrs[u.toLowerCase()]=p:d.attrs[Bn(u)]=p}return d},{attrs:{}}),o=n.style,s=o===void 0?{}:o,f=ho(n,So);return a.attrs.style=Y(Y({},a.attrs.style),s),t.apply(void 0,[e.tag,Y(Y({},a.attrs),f)].concat(ce(r)))}var Xn=!1;try{Xn=!0}catch{}function Oo(){if(!Xn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ln(t){if(t&&kt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(le.icon)return le.icon(t);if(t===null)return null;if(t&&kt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Bt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?it({},t,e):{}}var cn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Vn=qn.forwardRef(function(t,e){var n=Y(Y({},cn),t),r=n.icon,a=n.mask,o=n.symbol,s=n.className,f=n.title,d=n.titleId,u=n.maskId,p=ln(r),v=Bt("classes",[].concat(ce(Ao(n)),ce((s||"").split(" ")))),y=Bt("transform",typeof n.transform=="string"?le.transform(n.transform):n.transform),k=Bt("mask",ln(a)),N=io(p,Y(Y(Y(Y({},v),y),k),{},{symbol:o,title:f,titleId:d,maskId:u}));if(!N)return Oo("Could not find icon",p),null;var M=N.abstract,w={ref:e};return Object.keys(n).forEach(function(T){cn.hasOwnProperty(T)||(w[T]=n[T])}),ko(M[0],w)});Vn.displayName="FontAwesomeIcon";Vn.propTypes={beat:x.bool,border:x.bool,beatFade:x.bool,bounce:x.bool,className:x.string,fade:x.bool,flash:x.bool,mask:x.oneOfType([x.object,x.array,x.string]),maskId:x.string,fixedWidth:x.bool,inverse:x.bool,flip:x.oneOf([!0,!1,"horizontal","vertical","both"]),icon:x.oneOfType([x.object,x.array,x.string]),listItem:x.bool,pull:x.oneOf(["right","left"]),pulse:x.bool,rotation:x.oneOf([0,90,180,270]),shake:x.bool,size:x.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:x.bool,spinPulse:x.bool,spinReverse:x.bool,symbol:x.oneOfType([x.bool,x.string]),title:x.string,titleId:x.string,transform:x.oneOfType([x.string,x.object]),swapOpacity:x.bool};var ko=Gn.bind(null,qn.createElement);let z=25,W=5,R=z*60,Se=W*60,D=!0,st="Session",Kn;function V(t){let e;t<=0&&(document.querySelector(".display").innerHTML="00:00");let n=Math.floor(t/60),r=t%60,a=n<10?"0"+n+":":n+":",o=r<10?"0"+r:r;e=`${a}${o}`,document.querySelector(".display").innerHTML=e}function et(){let t="";t+=`
    <main>
      <p class="clock-title">25 + 5 Clock</p>

      
        <div class="sb-control">
          <div class="sl-control">
            <p id="session-label">Session Length</p>
            <div class="arrow-func">
              <button  id="session-decrement" class="adSL">⇩</button>
              <div class="value" id="session-length">${z}</div>
              <button id="session-increment" class="auSL">⇧
              
              </button>
            </div>
          </div>



          <div class="bl-control">
          <p id="break-label">Break Length</p>
          <div class="arrow-func">
            <button id="break-decrement" class="aDBS">⇩</button>
            <div class="value" id="break-length">${W}</div>
            <button id="break-increment" class="aUBS">⇧</button>
          </div>
        </div>
        </div>

      <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
      <div class="timer">
        <p id="timer-label">${st}</p>
        <p id="time-left" class="display"></p>
      </div>
      <div class="functionButtons">
        <div id="start_stop">
        <button id="start_stop" class="fB play">Play | Pause</button>
        </div>
        <button id="reset" class="fB reset">Reset</button>
      </div>
    </main>
  `,document.querySelector("main").innerHTML=t,Lo(),V(R)}et();function _o(){if(!D)return;D=!1;function t(){D||(R-=1,R<=0?(beep.play(),R=0,V(R),setTimeout(()=>{Qn(R),V(R),setTimeout(t,1e3)},2e3)):(V(R),setTimeout(t,1e3)))}setTimeout(t,1e3)}function To(){z<=1||(z-=1,R=z*60)}function Co(){D&&(z>=60||(z+=1,R=z*60))}function Io(){W>=60||(W+=1,Se=W*60)}function Ro(){W<=1||(W-=1,Se=W*60)}function No(){D=!0,Jn(Kn),W=5,z=25,R=z*60,st="Session",beep.pause(),beep.currentTime=0,Qn(R),et()}function Jn(t){clearTimeout(t),D=!0}function Qn(t){t===0&&st==="Session"?(st="Break",R=Se):t===0&&st==="Break"&&(st="Session",R=z*60),et()}function Lo(){document.querySelector(".adSL").addEventListener("click",()=>{D&&(To(),et(),V(R))}),document.querySelector(".auSL").addEventListener("click",()=>{D&&(Co(),et(),V(R))}),document.querySelector(".aUBS").addEventListener("click",()=>{D&&(Io(),et(),V(R))}),document.querySelector(".aDBS").addEventListener("click",()=>{D&&(Ro(),et(),V(R))}),document.querySelector(".reset").addEventListener("click",()=>{No()}),document.querySelector("#start_stop").addEventListener("click",()=>{D?_o():D||Jn(Kn)})}
