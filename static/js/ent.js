!function(e){function t(t){for(var r,i,s=t[0],o=t[1],l=t[2],m=0,d=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var o=n[s];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=o;c.push([28,1]),n()}({28:function(e,t,n){n(29),e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchCharacters",(function(){return w})),n.d(r,"fetchCharactersWithSameComponent",(function(){return N})),n.d(r,"saveCharacter",(function(){return O})),n.d(r,"fetchSentences",(function(){return C})),n.d(r,"saveSentences",(function(){return R})),n.d(r,"fetchRelations",(function(){return j})),n.d(r,"saveRelation",(function(){return S})),n.d(r,"fetchCharacter",(function(){return T}));var a={};n.r(a),n.d(a,"getUserPermissions",(function(){return A}));var c={};n.r(c),n.d(c,"fetchFavorites",(function(){return z})),n.d(c,"saveFavorite",(function(){return P}));var i=n(0),s=n.n(i),o=n(22),l=n(13),u=n(11),m=function(e,t){switch(t.type){case"UPDATE_CHARACTERS":return Object(u.a)(e,(function(e){e.characters=t.characters}));case"SELECT_RELATIONS":return Object(u.a)(e,(function(e){e.selectedRelations=t.selectedRelations}));case"SELECT_CHARACTER":return Object(u.a)(e,(function(e){e.selectedCharacter=t.selectedCharacter}));case"ERROR":return Object(u.a)(e,(function(e){e.error=t.error}));default:return e}},d={characters:[]},h=function(){throw new Error("You forgot to wrap your component in <Auth0Provider>.")},p=Object.assign(Object.assign({},d),{dispatch:h,fetchCharacters:h,saveCharacter:h,fetchSentences:h,saveSentences:h,fetchRelations:h,saveRelation:h,fetchCharacter:h,fetchCharactersWithSameComponent:h,getUserPermissions:h,fetchFavorites:h,saveFavorite:h}),f="https://app.yiqihanzi.com",v="https://app.yiqihanzi.com",g="".concat("https://app.yiqihanzi.com","/api"),b=("".concat("https://app.yiqihanzi.com","/zi"),"".concat("https://app.yiqihanzi.com/manage","/#/characters"),"".concat("./static","/images/default.jpg"),f),E=f,x=("".concat("https://www.yiqihanzi.com","/#/subscription"),Object.freeze({LANDING:"/",LOGIN:"/",CHARACTERS:"/characters",CHARACTER_EDIT:"/character-edit",CHARACTER_EDIT_ZI:"/character-edit/:zi",CHARACTER_TREE:"/character-tree",ECOMMERCE_CATEGORY:"/ecommerce-category",ECOMMERCE_EDIT:"/ecommerce-edit",CHARACTER:"/character",CHARACTER_ZI:"/character/:zi",SUBSCRIPTION:"/subscription",OUR_STORY:"/our-story"})),y=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function i(e){try{o(r.next(e))}catch(e){c(e)}}function s(e){try{o(r.throw(e))}catch(e){c(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}o((r=r.apply(e,t||[])).next())}))},w=function(e,t){return y(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=[],n.prev=1,n.next=4,e({audience:v});case 4:return a=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 7:return c=n.sent,n.next=10,c.json();case 10:(i=n.sent)&&i.data&&(r=i.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",r);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},N=function(e,t){return y(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=[],n.prev=1,n.next=4,e({audience:v});case 4:return a=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:a?"Bearer ".concat(a):""}});case 7:return c=n.sent,n.next=10,c.json();case 10:(i=n.sent)&&i.data&&(r=i.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",r);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},O=function(e,t){return y(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=null,n.prev=1,n.next=4,e({audience:v});case 4:return a=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/manage/characters"),{method:"POST",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},body:JSON.stringify(t)});case 7:return c=n.sent,n.next=10,c.json();case 10:(i=n.sent)&&i.message&&(r=i.message),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),r=n.t0;case 17:return n.abrupt("return",r);case 18:case"end":return n.stop()}}),n,null,[[1,14]])})))},C=function(e,t){return y(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=[],n.prev=1,n.next=4,e({audience:v});case 4:return a=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 7:return c=n.sent,n.next=10,c.json();case 10:(i=n.sent)&&i.data&&(r=i.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",r);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},R=function(e,t){return y(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=[],n.prev=1,n.next=4,e({audience:v});case 4:return a=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/manage/sentences"),{method:"POST",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},body:JSON.stringify({sentenceExamples:t})});case 7:return c=n.sent,n.next=10,c.json();case 10:(i=n.sent)&&i.data&&(r=i.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",r);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},j=function(e,t){return y(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=[],n.prev=1,n.next=4,e({audience:v});case 4:return a=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 7:return c=n.sent,n.next=10,c.json();case 10:(i=n.sent)&&i.data&&(r=i.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",r);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},S=function(e,t){return y(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=null,n.prev=1,n.next=4,e({audience:v});case 4:return a=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/manage/relations"),{method:"POST",headers:{Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},body:JSON.stringify(t)});case 7:return c=n.sent,n.next=10,c.json();case 10:(i=n.sent)&&i.message&&(r=i.message),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",r);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},T=function(e,t){return y(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r={basicInfo:null,radicalsAndVocabs:[],samePronunciation:[],sentenceExamples:[]},n.prev=1,n.next=4,e({audience:v});case 4:return a=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 7:return c=n.sent,n.next=10,c.json();case 10:(i=n.sent)&&i.data&&(r=i.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",r);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},k=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function i(e){try{o(r.next(e))}catch(e){c(e)}}function s(e){try{o(r.throw(e))}catch(e){c(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}o((r=r.apply(e,t||[])).next())}))},A=function(e,t,n,r){return k(void 0,void 0,void 0,regeneratorRuntime.mark((function a(){var c,i,s,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=Object.assign(Object.assign({},n),{userId:null,permissions:[]}),i=null,a.prev=2,a.next=5,e({audience:v});case 5:i=a.sent,a.next=19;break;case 8:if(a.prev=8,a.t0=a.catch(2),"Consent required"!==a.t0.message){a.next=19;break}return a.prev=11,a.next=14,t({audience:v});case 14:i=a.sent,a.next=19;break;case 17:a.prev=17,a.t1=a.catch(11);case 19:return a.prev=19,a.next=22,fetch("".concat(g,"/").concat("v1","/").concat(r),{method:"POST",headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},body:JSON.stringify(n)});case 22:return s=a.sent,a.next=25,s.json();case 25:(o=a.sent)&&o.data&&(c.userId=o.data.userId||null,c.permissions=o.data.permissions||[]),a.next=31;break;case 29:a.prev=29,a.t2=a.catch(19);case 31:return a.abrupt("return",c);case 32:case"end":return a.stop()}}),a,null,[[2,8],[11,17],[19,29]])})))},I=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function i(e){try{o(r.next(e))}catch(e){c(e)}}function s(e){try{o(r.throw(e))}catch(e){c(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}o((r=r.apply(e,t||[])).next())}))},z=function(e,t){return I(void 0,void 0,void 0,regeneratorRuntime.mark((function n(){var r,a,c,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=[],n.prev=1,n.next=4,e({audience:v});case 4:return a=n.sent,n.next=7,fetch("".concat(g,"/").concat("v1","/membership/favorites?category=").concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(a)}});case 7:return c=n.sent,n.next=10,c.json();case 10:(i=n.sent)&&i.data&&(r=i.data),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(1);case 16:return n.abrupt("return",r);case 17:case"end":return n.stop()}}),n,null,[[1,14]])})))},P=function(e,t,n,r){return I(void 0,void 0,void 0,regeneratorRuntime.mark((function a(){var c,i,s,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=null,a.prev=1,a.next=4,e({audience:v});case 4:return i=a.sent,a.next=7,fetch("".concat(g,"/").concat("v1","/manage/characters"),{method:"POST",headers:{Authorization:"Bearer ".concat(i),"Content-Type":"application/json"},body:JSON.stringify({userId:t,contentId:n,category:r})});case 7:return s=a.sent,a.next=10,s.json();case 10:(o=a.sent)&&o.message&&(c=o.message),a.next=17;break;case 14:a.prev=14,a.t0=a.catch(1),c=a.t0;case 17:return a.abrupt("return",c);case 18:case"end":return a.stop()}}),a,null,[[1,14]])})))};function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,c=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var F=s.a.createContext(p),U=function(e){var t=B(Object(i.useReducer)(m,d),2),n=t[0],o=t[1],l=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},n),{dispatch:o}),r),a),c);return s.a.createElement(F.Provider,{value:l},e.children)},H=n(10),q=n(1),G=n(15),L=n.n(G),D=n(6);function M(){var e=J(["\n  height: 50px;\n"]);return M=function(){return e},e}function Y(){var e=J(["\n  background-color: #e7ebef;\n  padding-left: 85px;\n  padding-right: 85px;\n  @media (max-width: 768px) {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return Y=function(){return e},e}function J(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var W=D.a.div(Y()),Q=D.a.img(M()),Z=function(){var e=Object(q.f)();return i.createElement("header",null,i.createElement(W,{className:"navbar navbar-expand-md fixed-top"},i.createElement("a",{className:"navbar-brand",href:"https://www.yiqihanzi.com"},i.createElement(Q,{className:"img-fluid",src:"".concat("./static","/images/logo_h.png")})),i.createElement("ul",{className:"navbar-nav"},i.createElement("li",{className:L()("nav-item",{"font-weight-bold":e.pathname===x.OUR_STORY})},i.createElement(H.b,{className:"nav-link text-dark",to:x.OUR_STORY},"Our story")),i.createElement("li",{className:L()("nav-item",{"font-weight-bold":e.pathname===x.SUBSCRIPTION})},i.createElement(H.b,{className:"nav-link text-dark",to:x.SUBSCRIPTION},"Subscription"))),i.createElement("ul",{className:"navbar-nav ml-md-auto"},i.createElement("li",{className:"nav-item"},i.createElement("a",{className:"btn nav-link btn-light border-secondary px-4",href:b},"Leaning Center")))))},$=function(){return i.createElement("footer",{className:"container mt-5"},i.createElement("hr",null),i.createElement("p",null,"© SINCE 2018 一起汉字 ·"," ",i.createElement("a",{className:"text-muted",href:"mailto:hello@yiqihanzi.com"},"Contact Us")," ","·"," ",i.createElement("a",{className:"text-muted",href:"#"},"Privacy")))};function V(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-top: 50px;\n"]);return V=function(){return e},e}var K=D.a.main(V()),X=function(e){return i.createElement(i.Fragment,null,i.createElement(Z,null),i.createElement(K,{role:"main"},e.children,i.createElement($,null)))};function ee(){var e=re(["\n  padding: 50px 0;\n  background-color: ",";\n"]);return ee=function(){return e},e}function te(){var e=re(["\n  padding-top: 110px;\n  width: 600px;\n"]);return te=function(){return e},e}function ne(){var e=re(["\n  margin-top: 76px;\n  height: 500px;\n  background: #ffffff url('","/images/enterprise-bg.png') no-repeat center center;\n"]);return ne=function(){return e},e}function re(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var ae=D.a.div(ne(),"./static"),ce=D.a.h1(te()),ie=D.a.div(ee(),(function(e){return e.color})),se=function(){return i.createElement(X,null,i.createElement(i.Fragment,null,i.createElement(ae,{className:"jumbotron"},i.createElement(ce,{className:"display-4 font-weight-bold mx-auto text-center"},"The easiest way to learn & memorize Chinese Characters")),i.createElement("div",{className:"container"},i.createElement("div",{className:"row mt-5 mb-5"},i.createElement("div",{className:"col-lg-4 text-center"},i.createElement("img",{src:"".concat("./static","/images/enterprise-ellipse-1.png"),className:"img-fluid"}),i.createElement("h2",{className:"mt-5 mb-4"},"Hand-drawing"),i.createElement("p",null,"All the characters are hand-drawings. It combines Chinese calligraphy and watercolor together to present the meaning of each character.")),i.createElement("div",{className:"col-lg-4 text-center"},i.createElement("img",{src:"".concat("./static","/images/enterprise-ellipse-2.png"),className:"img-fluid"}),i.createElement("h2",{className:"mt-5 mb-4"},"Award-winning"),i.createElement("p",null,"The creative typography won international design award. Including German Design Award.")),i.createElement("div",{className:"col-lg-4 text-center"},i.createElement("img",{src:"".concat("./static","/images/enterprise-ellipse-3.png"),className:"img-fluid"}),i.createElement("h2",{className:"mt-5 mb-4"},"Design thinking"),i.createElement("p",null,"It's art with design thinking. It breaks the traditional Chinese calligraphy forms and adds creative drawings to it harmoniously in order to show the meaning of each Chinese character.")))),i.createElement(ie,{color:"#FCF5EB"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-7"},i.createElement("h2",{className:"mt-5 mb-4"},"Associative drawings with meaning presented"),i.createElement("p",{className:"lead"},"The thing with learning Chinese is that it’s very visual.To people who don't know Chinese, Chinese characters always look like complicated drawings to them. We wanna use design thinking and drawings to make the 'character drawings' understandable to everyone to spread Chinese culture and the beauty of Chinese characters.")),i.createElement("div",{className:"col-md-5"},i.createElement("img",{src:"".concat("./static","/images/enterprise-guo.png"),className:"img-fluid"}))))),i.createElement(ie,{color:"white"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-7 order-md-2"},i.createElement("h2",{className:"mt-5 mb-4"},"Culture story-telling through the characters"),i.createElement("p",{className:"lead"},"There are stories and history on how Chinese characters were created. By presenting it visually through the characters and supporting with word explanations. You will understand not only characters, but also Chinese cultures.")),i.createElement("div",{className:"col-md-5 order-md-1"},i.createElement("img",{src:"".concat("./static","/images/enterprise-hun.png"),className:"img-fluid"}))))),i.createElement(ie,{color:"#FCF5EB"},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},i.createElement("div",{className:"col-md-7"},i.createElement("h2",{className:"mt-5 mb-4"},"Fun and efficient method to learn"),i.createElement("p",{className:"lead"},"Chinese characters are created with redicals and components. It is crucial to learn what redicals means and how they bring different meanings to the same component.")),i.createElement("div",{className:"col-md-5"},i.createElement("img",{src:"".concat("./static","/images/enterprise-qing.png"),className:"img-fluid"})))))))},oe=function(e){var t=Object(l.b)().loginWithRedirect;return s.a.createElement("button",{className:e.className,onClick:function(){return t()}},e.children)};function le(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-top: 100px;\n  margin-bottom: 50px;\n"]);return le=function(){return e},e}var ue=D.a.div(le()),me=function(){return i.createElement(X,null,i.createElement(i.Fragment,null,i.createElement(ue,{className:"px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},i.createElement("h1",{className:"display-4"},"Subscription"),i.createElement("p",{className:"lead"},"Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.")),i.createElement("div",{className:"container"},i.createElement("div",{className:"card-deck mb-3 text-center"},i.createElement("div",{className:"card mb-4 shadow-sm"},i.createElement("div",{className:"card-header"},i.createElement("h4",{className:"my-0 font-weight-normal"},"Free")),i.createElement("div",{className:"card-body"},i.createElement("h1",{className:"card-title pricing-card-title"},"$0 ",i.createElement("small",{className:"text-muted"},"/ mo")),i.createElement("ul",{className:"list-unstyled mt-3 mb-4"},i.createElement("li",null,"Search characters by pinyin or character"),i.createElement("li",null,"Explore all characters"),i.createElement("li",null,"Relevant vocabularies and components"),i.createElement("li",null,"All sentence examples"),i.createElement("li",null,"Same pronunciation characters")),i.createElement("p",null,i.createElement("sub",null,"* It's free for a limited time only. The plan is subject to change without further notice.")),i.createElement(oe,{className:"btn btn-lg btn-block btn-outline-secondary"},i.createElement(i.Fragment,null,"Sign up for free")))),i.createElement("div",{className:"card mb-4 shadow-sm border-info"},i.createElement("div",{className:"card-header bg-info text-light"},i.createElement("h4",{className:"my-0 font-weight-normal"},"Enterprise")),i.createElement("div",{className:"card-body"},i.createElement("h1",{className:"card-title pricing-card-title"},"$? ",i.createElement("small",{className:"text-muted"},"/ mo")),i.createElement("ul",{className:"list-unstyled mt-3 mb-4"},i.createElement("li",null,"Character resources integration to your website and app"),i.createElement("li",null,"Character and Chinese culture related lessons"),i.createElement("li",null,"Discuss your specific needs with us")),i.createElement("a",{href:"mailto:hello@yiqihanzi.com",className:"btn btn-lg btn-block btn-info"},"Contact us")))))))},de=function(){return i.createElement(H.a,null,i.createElement(q.c,null,i.createElement(q.a,{exact:!0,path:x.LANDING},i.createElement(se,null)),i.createElement(q.a,{exact:!0,path:x.OUR_STORY},i.createElement(se,null)),i.createElement(q.a,{exact:!0,path:x.SUBSCRIPTION},i.createElement(me,null))))},he=function(){return i.createElement(U,null,i.createElement(de,null))};o.render(i.createElement((function(){return i.createElement(l.a,{domain:"han-characters.us.auth0.com",clientId:"I8PvLtvZPg3YkH6WEQxLlHFHWLHTSS5Q",redirectUri:E},i.createElement(he,null))}),null),document.getElementById("root"))}});