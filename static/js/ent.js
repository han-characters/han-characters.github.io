!function(e){function t(t){for(var a,s,i=t[0],o=t[1],l=t[2],m=0,d=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={0:0},c=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window.webpackJsonp=window.webpackJsonp||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;c.push([25,1]),n()}({25:function(e,t,n){n(26),e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchCharacters",(function(){return N})),n.d(a,"fetchCharactersWithSameComponent",(function(){return x})),n.d(a,"saveCharacter",(function(){return k})),n.d(a,"fetchSentences",(function(){return C})),n.d(a,"saveSentences",(function(){return O})),n.d(a,"fetchRelations",(function(){return T})),n.d(a,"saveRelation",(function(){return R})),n.d(a,"fetchCharacter",(function(){return S}));var r={};n.r(r),n.d(r,"getUserPermissions",(function(){return A}));var c={};n.r(c),n.d(c,"fetchFavorites",(function(){return P})),n.d(c,"isFavorite",(function(){return _})),n.d(c,"saveFavorite",(function(){return B}));var s={};n.r(s),n.d(s,"bumpVersion",(function(){return U}));var i=n(0),o=n.n(i),l=n(19),u=n(9),m=function(e,t){switch(t.type){case"UPDATE_CHARACTERS":return Object(u.a)(e,(function(e){e.characters=t.characters}));case"SELECT_RELATIONS":return Object(u.a)(e,(function(e){e.selectedRelations=t.selectedRelations}));case"SELECT_CHARACTER":return Object(u.a)(e,(function(e){e.selectedCharacter=t.selectedCharacter}));case"ERROR":return Object(u.a)(e,(function(e){e.error=t.error}));case"UPDATE_USER_INFO":return Object(u.a)(e,(function(e){e.userInfo=t.userInfo}));default:return e}},d={characters:[]},h=function(){throw new Error("You forgot to wrap your component in <Auth0Provider>.")},p=Object.assign(Object.assign({},d),{dispatch:h,fetchCharacters:h,saveCharacter:h,fetchSentences:h,saveSentences:h,fetchRelations:h,saveRelation:h,fetchCharacter:h,fetchCharactersWithSameComponent:h,getUserPermissions:h,fetchFavorites:h,isFavorite:h,saveFavorite:h,bumpVersion:h}),f="https://app.yiqihanzi.com",v="https://app.yiqihanzi.com",g="".concat("https://app.yiqihanzi.com","/api"),E=("".concat("https://app.yiqihanzi.com","/zi"),"".concat("https://app.yiqihanzi.com/manage/","#/characters"),"".concat("https://cdn.yiqihanzi.com/han-library/static","/images/default.jpg"),f),b="".concat(E,"/signup"),y=("".concat("https://www.yiqihanzi.com","/#/subscription"),Object.freeze({LANDING:"/",LOGIN:"/",CHARACTERS:"/characters",CHARACTER_EDIT:"/character-edit",CHARACTER_EDIT_ZI:"/character-edit/:zi",CHARACTER_TREE:"/character-tree",ECOMMERCE_CATEGORY:"/ecommerce-category",ECOMMERCE_EDIT:"/ecommerce-edit",CHARACTER:"/character",CHARACTER_ZI:"/character/:zi",SUBSCRIPTION:"/subscription",OUR_STORY:"/our-story",ADMIN_MISC:"/admin-misc",SIGNUP:"/signup",THEMES:"/themes",DASHBOARD:"/dashboard"})),w=function(e,t,n,a){return new(n||(n=Promise))((function(r,c){function s(e){try{o(a.next(e))}catch(e){c(e)}}function i(e){try{o(a.throw(e))}catch(e){c(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}o((a=a.apply(e,t||[])).next())}))},N=function(e,t){return w(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=[],n.prev=1,n.next=4,e({audience:v});case 4:return r=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(r)}});case 7:return c=n.sent,n.next=10,c.json();case 10:(s=n.sent)&&s.data&&(a=s.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",a);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},x=function(e,t){return w(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=[],n.prev=1,n.next=4,e({audience:v});case 4:return r=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:r?"Bearer ".concat(r):""}});case 7:return c=n.sent,n.next=10,c.json();case 10:(s=n.sent)&&s.data&&(a=s.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",a);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},k=function(e,t){return w(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=null,n.prev=1,n.next=4,e({audience:v});case 4:return r=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/manage/characters"),{method:"POST",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify(t)});case 7:return c=n.sent,n.next=10,c.json();case 10:(s=n.sent)&&s.message&&(a=s.message),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),a=n.t0;case 17:return n.abrupt("return",a);case 18:case"end":return n.stop()}}),n,null,[[1,14]])})))},C=function(e,t){return w(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=[],n.prev=1,n.next=4,e({audience:v});case 4:return r=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(r)}});case 7:return c=n.sent,n.next=10,c.json();case 10:(s=n.sent)&&s.data&&(a=s.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",a);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},O=function(e,t){return w(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=[],n.prev=1,n.next=4,e({audience:v});case 4:return r=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/manage/sentences"),{method:"POST",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify({sentenceExamples:t})});case 7:return c=n.sent,n.next=10,c.json();case 10:(s=n.sent)&&s.data&&(a=s.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",a);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},T=function(e,t){return w(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=[],n.prev=1,n.next=4,e({audience:v});case 4:return r=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(r)}});case 7:return c=n.sent,n.next=10,c.json();case 10:(s=n.sent)&&s.data&&(a=s.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",a);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},R=function(e,t){return w(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=null,n.prev=1,n.next=4,e({audience:v});case 4:return r=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/manage/relations"),{method:"POST",headers:{Authorization:"Bearer ".concat(r),"Content-Type":"application/json"},body:JSON.stringify(t)});case 7:return c=n.sent,n.next=10,c.json();case 10:(s=n.sent)&&s.message&&(a=s.message),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",a);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},S=function(e,t){return w(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var a,r,c,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a={basicInfo:null,radicalsAndVocabs:[],samePronunciation:[],sentenceExamples:[]},n.prev=1,n.next=4,e({audience:v});case 4:return r=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(r)}});case 7:return c=n.sent,n.next=10,c.json();case 10:(s=n.sent)&&s.data&&(a=s.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",a);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},j=function(e,t,n,a){return new(n||(n=Promise))((function(r,c){function s(e){try{o(a.next(e))}catch(e){c(e)}}function i(e){try{o(a.throw(e))}catch(e){c(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}o((a=a.apply(e,t||[])).next())}))},A=function(e,t,n,a){return j(void 0,void 0,void 0,regeneratorRuntime.mark((function r(){var c,s,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=Object.assign(Object.assign({},n),{userId:null,permissions:[]}),s=null,r.prev=2,r.next=5,e({audience:v});case 5:s=r.sent,r.next=19;break;case 8:if(r.prev=8,r.t0=r.catch(2),"Consent required"!==r.t0.message){r.next=19;break}return r.prev=11,r.next=14,t({audience:v});case 14:s=r.sent,r.next=19;break;case 17:r.prev=17,r.t1=r.catch(11);case 19:return r.prev=19,r.next=22,fetch("".concat(g,"/").concat("v1","/").concat(a),{method:"POST",headers:{Authorization:"Bearer ".concat(s),"Content-Type":"application/json"},body:JSON.stringify(n)});case 22:return i=r.sent,r.next=25,i.json();case 25:(o=r.sent)&&o.data&&(c.userId=o.data.userId||null,c.permissions=o.data.permissions||[]),r.next=31;break;case 29:r.prev=29,r.t2=r.catch(19);case 31:return r.abrupt("return",c);case 32:case"end":return r.stop()}}),r,null,[[2,8],[11,17],[19,29]])})))},I=new Map,z=function(e){var t;return I.has(e)?t=I.get(e):(t=new AbortController,I.set(e,t)),t.signal},q=function(e,t,n,a){return new(n||(n=Promise))((function(r,c){function s(e){try{o(a.next(e))}catch(e){c(e)}}function i(e){try{o(a.throw(e))}catch(e){c(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}o((a=a.apply(e,t||[])).next())}))},P=function e(t,n,a){return q(void 0,void 0,void 0,regeneratorRuntime.mark((function r(){var c,s,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=[],r.prev=1,r.next=4,t({audience:v});case 4:return s=r.sent,r.next=7,fetch("".concat(g,"/").concat("v1","/membership/favorites?userId=").concat(n,"&category=").concat(a),{method:"GET",headers:{Authorization:"Bearer ".concat(s)},signal:z(e)});case 7:return i=r.sent,r.next=10,i.json();case 10:(o=r.sent)&&o.data&&(c=o.data),r.next=16;break;case 14:r.prev=14,r.t0=r.catch(1);case 16:return r.abrupt("return",c);case 17:case"end":return r.stop()}}),r,null,[[1,14]])})))},_=function(e,t,n,a){return q(void 0,void 0,void 0,regeneratorRuntime.mark((function r(){var c,s,i,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=!1,r.prev=1,r.next=4,e({audience:v});case 4:return s=r.sent,r.next=7,fetch("".concat(g,"/").concat("v1","/membership/is-favorite?userId=").concat(t,"&contentId=").concat(n,"&category=").concat(a),{method:"GET",headers:{Authorization:"Bearer ".concat(s)}});case 7:return i=r.sent,r.next=10,i.json();case 10:(o=r.sent)&&o.data&&(c=o.data),r.next=16;break;case 14:r.prev=14,r.t0=r.catch(1);case 16:return r.abrupt("return",c);case 17:case"end":return r.stop()}}),r,null,[[1,14]])})))},B=function(e,t,n,a,r){return q(void 0,void 0,void 0,regeneratorRuntime.mark((function c(){var s,i,o,l;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s=null,c.prev=1,c.next=4,e({audience:v});case 4:return i=c.sent,c.next=7,fetch("".concat(g,"/").concat("v1","/membership/favorites"),{method:"POST",headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},body:JSON.stringify({userId:t,operation:n,contentId:a,category:r})});case 7:return o=c.sent,c.next=10,o.json();case 10:(l=c.sent)&&l.message&&(s=l.message),c.next=17;break;case 14:c.prev=14,c.t0=c.catch(1),s=c.t0;case 17:return c.abrupt("return",s);case 18:case"end":return c.stop()}}),c,null,[[1,14]])})))},F=function(e,t,n,a){return new(n||(n=Promise))((function(r,c){function s(e){try{o(a.next(e))}catch(e){c(e)}}function i(e){try{o(a.throw(e))}catch(e){c(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}o((a=a.apply(e,t||[])).next())}))},U=function(e){return F(void 0,void 0,void 0,regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="",t.prev=1,t.next=4,e({audience:v});case 4:return a=t.sent,t.next=7,fetch("".concat(g,"/").concat("v1","/manage/misc?op=version"),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 7:return r=t.sent,t.next=10,r.json();case 10:(c=t.sent)&&c.data&&(n=c.data||null),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(1);case 16:return t.abrupt("return",n);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var M=o.a.createContext(p),H=function(e){var t=G(Object(i.useReducer)(m,d),2),n=t[0],l=t[1],u=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),{dispatch:l}),a),r),c),s);return o.a.createElement(M.Provider,{value:u},e.children)},Y=n(11),L=n(1),J=n(13),V=n.n(J),W=n(3);function $(){var e=Z(["\n  height: 50px;\n"]);return $=function(){return e},e}function Q(){var e=Z(["\n  background-color: #e7ebef;\n  padding-left: 85px;\n  padding-right: 85px;\n  @media (max-width: 768px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return Q=function(){return e},e}function Z(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var X=W.a.div(Q()),K=W.a.img($()),ee=function(){var e=Object(L.f)();return i.createElement("header",null,i.createElement(X,{className:"navbar navbar-expand-md fixed-top"},i.createElement("a",{className:"navbar-brand",href:"https://www.yiqihanzi.com"},i.createElement(K,{className:"img-fluid",src:"".concat("./static","/images/logo_h.png")})),i.createElement("ul",{className:"navbar-nav"},i.createElement("li",{className:V()("nav-item",{"font-weight-bold":e.pathname===y.OUR_STORY})},i.createElement(Y.b,{className:"nav-link text-dark",to:y.OUR_STORY},"Our story")),i.createElement("li",{className:V()("nav-item",{"font-weight-bold":e.pathname===y.SUBSCRIPTION})},i.createElement(Y.b,{className:"nav-link text-dark",to:y.SUBSCRIPTION},"Subscription"))),i.createElement("ul",{className:"navbar-nav ml-md-auto"},i.createElement("li",{className:"nav-item"},i.createElement("a",{className:"btn nav-link btn-light border-secondary px-4",href:E},"Leaning Center")))))},te=function(){return i.createElement("footer",{className:"container mt-5"},i.createElement("hr",null),i.createElement("p",null,"© SINCE 2018 一起汉字 YiQi Hanzi ·"," ",i.createElement("a",{className:"text-muted",href:"mailto:hello@yiqihanzi.com"},"Contact Us")," ","·"," ",i.createElement("a",{className:"text-muted",href:"#"},"Privacy")))};function ne(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-top: 50px;\n"]);return ne=function(){return e},e}var ae=W.a.main(ne()),re=function(e){return i.createElement(i.Fragment,null,i.createElement(ee,null),i.createElement(ae,{role:"main"},e.children,i.createElement(te,null)))};function ce(){var e=oe(["\n  padding: 50px 0;\n  background-color: ",";\n"]);return ce=function(){return e},e}function se(){var e=oe(["\n  padding-top: 110px;\n  width: 600px;\n  @media (max-width: 576px) {\n    width: 100%;\n  }\n"]);return se=function(){return e},e}function ie(){var e=oe(["\n  margin-top: 76px;\n  height: 500px;\n  background: #ffffff url('","/images/enterprise-bg.png') no-repeat center center;\n"]);return ie=function(){return e},e}function oe(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var le=W.a.div(ie(),"./static"),ue=W.a.h1(se()),me=W.a.div(ce(),(function(e){return e.color})),de=function(){return i.createElement(re,null,i.createElement(i.Fragment,null,i.createElement(le,{className:"jumbotron"},i.createElement(ue,{className:"display-4 font-weight-bold mx-auto text-center"},"The easiest way to learn & memorize Chinese Characters")),i.createElement("div",{className:"container"},i.createElement("div",{className:"row mt-5 mb-5"},i.createElement("div",{className:"col-lg-4 text-center"},i.createElement("img",{src:"".concat("./static","/images/enterprise-ellipse-1.png"),className:"img-fluid"}),i.createElement("h2",{className:"mt-5 mb-4"},"Hand-drawing"),i.createElement("p",null,"All the characters are hand-drawings. It combines Chinese calligraphy and watercolor together to present the meaning of each character.")),i.createElement("div",{className:"col-lg-4 text-center"},i.createElement("img",{src:"".concat("./static","/images/enterprise-ellipse-2.png"),className:"img-fluid"}),i.createElement("h2",{className:"mt-5 mb-4"},"Award-winning"),i.createElement("p",null,"The creative typography won international design award. Including German Design Award.")),i.createElement("div",{className:"col-lg-4 text-center"},i.createElement("img",{src:"".concat("./static","/images/enterprise-ellipse-3.png"),className:"img-fluid"}),i.createElement("h2",{className:"mt-5 mb-4"},"Design thinking"),i.createElement("p",null,"It's art with design thinking. It breaks the traditional Chinese calligraphy forms and adds creative drawings to it harmoniously in order to show the meaning of each Chinese character.")))),i.createElement(me,{color:"#FCF5EB"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-7"},i.createElement("h2",{className:"mt-5 mb-4"},"Associative drawings with meaning presented"),i.createElement("p",{className:"lead"},"The thing with learning Chinese is that it’s very visual.To people who don't know Chinese, Chinese characters always look like complicated drawings to them. We wanna use design thinking and drawings to make the 'character drawings' understandable to everyone to spread Chinese culture and the beauty of Chinese characters.")),i.createElement("div",{className:"col-md-5"},i.createElement("img",{src:"".concat("./static","/images/enterprise-guo.png"),className:"img-fluid"}))))),i.createElement(me,{color:"white"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-7 order-md-2"},i.createElement("h2",{className:"mt-5 mb-4"},"Culture story-telling through the characters"),i.createElement("p",{className:"lead"},"There are stories and history on how Chinese characters were created. By presenting it visually through the characters and supporting with word explanations. You will understand not only characters, but also Chinese cultures.")),i.createElement("div",{className:"col-md-5 order-md-1"},i.createElement("img",{src:"".concat("./static","/images/enterprise-hun.png"),className:"img-fluid"}))))),i.createElement(me,{color:"#e7ebef"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-7"},i.createElement("h2",{className:"mt-5 mb-4"},"Fun and efficient method to learn"),i.createElement("p",{className:"lead"},"Chinese characters are created with redicals and components. It is crucial to learn what redicals means and how they bring different meanings to the same component.")),i.createElement("div",{className:"col-md-5"},i.createElement("img",{src:"".concat("./static","/images/enterprise-qing.png"),className:"img-fluid"})))))))};function he(){var e=ve(["\n  padding: 50px 0;\n  background-color: ",";\n"]);return he=function(){return e},e}function pe(){var e=ve(["\n  padding-top: 110px;\n  padding-left: 100px;\n  width: 600px;\n  @media (max-width: 576px) {\n    width: 100%;\n    padding-left: 20px;\n  }\n"]);return pe=function(){return e},e}function fe(){var e=ve(["\n  margin-top: 76px;\n  height: 500px;\n  background: #ffffff url('","/images/enterprise-story.png') no-repeat center center;\n"]);return fe=function(){return e},e}function ve(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var ge=W.a.div(fe(),"./static"),Ee=W.a.h1(pe()),be=(W.a.div(he(),(function(e){return e.color})),function(e){return i.createElement("aside",{className:e.className},i.createElement("div",{className:"p-4 mb-3 bg-light rounded"},i.createElement("h4",{className:"font-italic"},"About"),i.createElement("p",{className:"mb-0"},"🀄️The easiest way to learn & memorize"," ",i.createElement("a",{href:"https://www.instagram.com/explore/tags/chinesecharacters/"},"#ChineseCharacters")),i.createElement("p",{className:"mb-0"},"👩‍🎨with my associative drawings"),i.createElement("p",{className:"mb-0"},"💕Do NOT repost my art anywhere"),i.createElement("p",{className:"mb-0"},"🎬YouTube Lessons👉 ",i.createElement("a",{href:"https://youtu.be/HfIv1w4Q0q4"},"一起汉字"))),i.createElement("div",{className:"p-4"},i.createElement("h4",{className:"font-italic"},"Social Media"),i.createElement("ol",{className:"list-unstyled mb-0"},i.createElement("li",null,i.createElement("a",{href:"https://www.instagram.com/han_characters/"},"Instagram")),i.createElement("li",null,i.createElement("a",{href:"https://www.youtube.com/channel/UCUIPa3FNEIl_lvviGfEP4Tw"},"YouTube")))))}),ye=function(){return i.createElement(re,null,i.createElement(i.Fragment,null,i.createElement("div",{className:"container"},i.createElement(ge,{className:"jumbotron"},i.createElement(Ee,{className:"font-weight-bold text-light"},"Deliver the beauty of Chinese characters and cultures to the word."))),i.createElement("div",{className:"container"},i.createElement("div",{className:"row mt-4"},i.createElement("div",{className:"col-md-8"},i.createElement("h2",{className:"mb-4"},"Founder’s Story"),i.createElement("p",null,"Yiqi Hanzi started on a dining table. MC, the founder, started to create character drawings as an interest in Chinese cultures and characters. As a Chinese herself, living in a foreign country, she wants to have a closer relationship with her inheritance."),i.createElement("p",null,"She has a design background. At the beginning of her design journey, she learned a lot of Chinese traditional culture. She was taught to have the mission to deliver valuable Chinese traditional cultures to the modern world, to enhance and spread it to the nation and the world."),i.createElement("p",null,"When she had an opportunity to explore her own interest in her career. She dived into Chinese cultures and found out there weren’t many creative creations around Chinese calligraphy compare to English lettering. She has the ability to design and to draw, so she started to explore more possibilities of the traditional assets, Chinese characters."),i.createElement("br",null),i.createElement("div",{className:"embed-responsive embed-responsive-16by9"},i.createElement("iframe",{className:"embed-responsive-item",src:"https://www.youtube.com/embed/2Pm7tLszuP0",allowFullScreen:!0})),i.createElement("br",null),i.createElement("h2",{className:"my-4"},"Your affirmation and support have made it further"),i.createElement("p",null,"It has been over 2 years form the first drawing was posted on Instagram. It was not all smooth. There were times when quitting and doubting appeared. It was all your support and affirmation made it here! All the comments, DMs, and feedback mean everything to push Yiqi Hanzi to push further and keep helping and servicing your need."),i.createElement("br",null),i.createElement("div",{className:"row mb-2"},i.createElement("div",{className:"col"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-body"},i.createElement("blockquote",{className:"blockquote"},i.createElement("p",{className:"mb-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."),i.createElement("footer",{className:"blockquote-footer"},"A friend at ",i.createElement("cite",{title:"Source Title"},"Instagram")))))),i.createElement("div",{className:"col"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-body"},i.createElement("blockquote",{className:"blockquote"},i.createElement("p",{className:"mb-0"},"This approach is really useful because it gives a chance to improve imagination, and learn a language like a child."),i.createElement("footer",{className:"blockquote-footer"},"A friend at ",i.createElement("cite",{title:"Source Title"},"Instagram"))))))),i.createElement("div",{className:"row mb-2"},i.createElement("div",{className:"col"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-body"},i.createElement("blockquote",{className:"blockquote"},i.createElement("p",{className:"mb-0"},"Thank you very much. I am loving this. your account is I think my favorite IG for learning Chinese language and culture. So much info in a character. Thank you!"),i.createElement("footer",{className:"blockquote-footer"},"A friend at ",i.createElement("cite",{title:"Source Title"},"Instagram")))))),i.createElement("div",{className:"col"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-body"},i.createElement("blockquote",{className:"blockquote"},i.createElement("p",{className:"mb-0"},"Your way of teaching is so useful and entertaining... Good luck and thanks! Xie xie❤️❤️"),i.createElement("footer",{className:"blockquote-footer"},"A friend at ",i.createElement("cite",{title:"Source Title"},"Instagram"))))))),i.createElement("div",{className:"row mb-2"},i.createElement("div",{className:"col"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-body"},i.createElement("blockquote",{className:"blockquote"},i.createElement("p",{className:"mb-0"},"This is really helpful and interesting how you explain with your illustrations. Thank you! ☺️"),i.createElement("footer",{className:"blockquote-footer"},"A friend at ",i.createElement("cite",{title:"Source Title"},"Instagram")))))),i.createElement("div",{className:"col"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-body"},i.createElement("blockquote",{className:"blockquote"},i.createElement("p",{className:"mb-0"},"Thank you very much! I really like your illustrations and the way you explain the meanings. 👍☺️"),i.createElement("footer",{className:"blockquote-footer"},"A friend at ",i.createElement("cite",{title:"Source Title"},"Instagram"))))))),i.createElement("div",{className:"row mb-2"},i.createElement("div",{className:"col"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-body"},i.createElement("blockquote",{className:"blockquote"},i.createElement("p",{className:"mb-0"},"Very interesting explanation. Sometimes its really hard to remember hieroglyphs, so better to understand their origin 😁 i am waiting for your explanation another 5000 hieroglyphs 😆😆😁"),i.createElement("footer",{className:"blockquote-footer"},"A friend at ",i.createElement("cite",{title:"Source Title"},"Instagram")))))),i.createElement("div",{className:"col"},i.createElement("div",{className:"card"},i.createElement("div",{className:"card-body"},i.createElement("blockquote",{className:"blockquote"},i.createElement("p",{className:"mb-0"},"Omg the way you teach is amazing. Thanks for sharing your knowledge. ❤️❤️❤️"),i.createElement("footer",{className:"blockquote-footer"},"A friend at ",i.createElement("cite",{title:"Source Title"},"Instagram")))))))),i.createElement(be,{className:"col-md-4"})))))};function we(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-top: 100px;\n  margin-bottom: 50px;\n"]);return we=function(){return e},e}var Ne=W.a.div(we()),xe=function(){return i.createElement(re,null,i.createElement(i.Fragment,null,i.createElement(Ne,{className:"px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},i.createElement("h1",{className:"display-4"},"Subscription"),i.createElement("p",{className:"lead"},"Find a plan here that suits your needs for leaning Chinese characters and Chinese culture in the easiest way.")),i.createElement("div",{className:"container"},i.createElement("div",{className:"card-deck mb-3 text-center"},i.createElement("div",{className:"card mb-4 shadow-sm border-primary"},i.createElement("div",{className:"card-header bg-primary text-light"},i.createElement("h4",{className:"my-0 font-weight-normal"},"Free")),i.createElement("div",{className:"card-body"},i.createElement("h1",{className:"card-title pricing-card-title"},"$0 ",i.createElement("small",{className:"text-muted"},"/ mo")),i.createElement("ul",{className:"list-unstyled mt-3 mb-4"},i.createElement("li",null,"Search characters by pinyin or character"),i.createElement("li",null,"Explore all characters"),i.createElement("li",null,"Relevant vocabularies and components"),i.createElement("li",null,"All sentence examples"),i.createElement("li",null,"Same pronunciation characters"),i.createElement("li",null,"And more...")),i.createElement("p",null,i.createElement("sub",null,"* It's free for ",i.createElement("strong",null,"a limited time ONLY"),". No credit card info asked. The plan is subject to change without further notice.")),i.createElement("a",{className:"btn btn-lg btn-block btn-primary",href:b},"Sign up for free"))),i.createElement("div",{className:"card mb-4 shadow-sm border-info"},i.createElement("div",{className:"card-header bg-info text-light"},i.createElement("h4",{className:"my-0 font-weight-normal"},"Enterprise")),i.createElement("div",{className:"card-body"},i.createElement("h1",{className:"card-title pricing-card-title"},"$? ",i.createElement("small",{className:"text-muted"},"/ mo")),i.createElement("ul",{className:"list-unstyled mt-3 mb-4"},i.createElement("li",null,"Character resources integration to your website and app"),i.createElement("li",null,"Chinese character and Chinese culture related solutions"),i.createElement("li",null,"Discuss your specific needs with us")),i.createElement("a",{href:"mailto:hello@yiqihanzi.com",className:"btn btn-lg btn-block btn-info"},"Contact us")))))))},ke=function(){return i.createElement(Y.a,null,i.createElement(L.c,null,i.createElement(L.a,{exact:!0,path:y.LANDING},i.createElement(de,null)),i.createElement(L.a,{exact:!0,path:y.OUR_STORY},i.createElement(ye,null)),i.createElement(L.a,{exact:!0,path:y.SUBSCRIPTION},i.createElement(xe,null))))};l.render(i.createElement((function(){return i.createElement(H,null,i.createElement(ke,null))}),null),document.getElementById("root"))}});