(self.webpackChunkhan_editor=self.webpackChunkhan_editor||[]).push([[913],{733:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var a=n(294),r=n(381),i=r.ZP.div.withConfig({displayName:"styles__DivShapeWrapper",componentId:"q8v6bw-0"})(["position:absolute;right:0;bottom:0;left:0;pointer-events:none;color:#f1f4f8;& > *{transform-origin:top center;transform:scale(2);}@media (max-width:576px){bottom:-3px;}"]);const c=function(){return a.createElement("section",{className:"position-relative"},a.createElement(i,{className:"overflow-hidden"},a.createElement("svg",{viewBox:"0 0 2880 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{d:"M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z",fill:"currentColor"}))))};var l=n(184),o=n.n(l),s=n(727),m=n(977),u=n(815),d=r.ZP.nav.withConfig({displayName:"styles__NavWrapper",componentId:"sc-1kbnmkh-0"})(["margin:0 -15px;"]),p=r.ZP.header.withConfig({displayName:"styles__HeaderWrapper",componentId:"sc-1kbnmkh-1"})(["background-color:white;"]),f=r.ZP.img.withConfig({displayName:"styles__CharacterWrapper",componentId:"sc-1kbnmkh-2"})(["height:50px;"]);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}const h=function(){var e,t,n=(0,m.TH)(),r=(e=(0,a.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[0],c=r[1];return(0,a.useEffect)((function(){window.scrollTo({top:0})}),[n]),a.createElement(p,{className:"container sticky-top"},a.createElement(d,{className:"navbar navbar-expand-lg navbar-light"},a.createElement("a",{className:"navbar-brand",href:u.$o},a.createElement(f,{className:"img-fluid",src:"".concat(u.bf,"/images/logo_h.png")})),a.createElement("button",{className:"navbar-toggler",type:"button","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){c(!i)}},a.createElement("span",{className:"navbar-toggler-icon"})),a.createElement("div",{className:o()("collapse navbar-collapse",{show:i})},a.createElement("ul",{className:"navbar-nav"},a.createElement("li",{className:"nav-item mx-2"},a.createElement(s.rU,{className:o()("nav-link",{"text-dark":n.pathname===u.Z6.OUR_STORY}),to:u.Z6.OUR_STORY},"Our Story")),a.createElement("li",{className:"nav-item mx-2"},a.createElement(s.rU,{className:o()("nav-link",{"text-dark":n.pathname===u.Z6.AWARDS}),to:u.Z6.AWARDS},"Awards")),a.createElement("li",{className:"nav-item mx-2"},a.createElement(s.rU,{className:o()("nav-link",{"text-dark":n.pathname===u.Z6.PRESS}),to:u.Z6.PRESS},"Press")),a.createElement("li",{className:"nav-item mx-2"},a.createElement(s.rU,{className:o()("nav-link",{"text-dark":n.pathname===u.Z6.SUBSCRIPTION}),to:u.Z6.SUBSCRIPTION},"Subscription")),a.createElement("li",{className:"nav-item mx-2"},a.createElement(s.rU,{className:o()("nav-link",{"text-dark":n.pathname===u.Z6.JOIN_US}),to:u.Z6.JOIN_US},"Join Us")),a.createElement("li",{className:"nav-item mx-2"},a.createElement("a",{className:"nav-link",href:u.cr},"Shop"))),a.createElement("ul",{className:"navbar-nav ml-md-auto"},a.createElement("li",{className:"nav-item"},a.createElement("a",{className:"btn nav-link btn-primary border-light px-4 text-light",href:u.R4},"Learning Center"))))))};var y=r.ZP.section.withConfig({displayName:"styles__FooterContainer",componentId:"sc-1wm6yid-0"})(["background-color:#f1f4f8;"]);const b=function(){return a.createElement(y,{className:"py-5"},a.createElement("footer",{className:"container"},a.createElement("div",{className:"row"},a.createElement("p",{className:"col text-center"},"© SINCE 2018 一起汉字 YiQi Hanzi | Han_Characters ·"," ",a.createElement("a",{className:"text-muted",href:"mailto:hello@yiqihanzi.com"},"Contact Us")," ","· ",a.createElement("span",{className:"text-muted"},"All rights reserved")))))};var E=r.ZP.main.withConfig({displayName:"styles__MainWrapper",componentId:"kz6req-0"})(["@media (min-width:576px){margin-top:0px;}"]);const g=function(e){return a.createElement(E,{role:"main"},a.createElement(h,null),e.children,a.createElement(c,null),a.createElement(b,null))}},913:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var a=n(294),r=n(733),i=n(902),c=n(184),l=n.n(c),o=n(486),s=n(717),m=n(815),u=function(){return function(e,t){return(0,s.x)(t.getItem(btoa(e))||"")}(m.ju,sessionStorage)||{email:"",family_name:"",given_name:"",userId:null,permissions:[]}},d=function(e,t){return"".concat(String(t),"-").concat(e)},p={identify:function(){var e=u();e.userId&&console.log("DevAnalytics.identify",d(e.userId,e.sub))},event:function(e,t){console.log("DevAnalytics.event",e,t||"")}},f={identify:function(){var e=u();if(e.userId){var t=[];e.permissions.includes("read:characters")&&t.push("characters"),e.permissions.includes("read:themes")&&t.push("themes");var n={displayName:e.given_name||e.nickname||e.name||"",email:e.email,timeZone_str:Intl.DateTimeFormat().resolvedOptions().timeZone,subscriber_str:t.join("|")};window.heap&&(window.heap.identify(d(e.userId,e.sub)),window.heap.addUserProperties(n)),window.FS&&window.FS.identify(d(e.userId,e.sub),n)}},event:function(e,t){window.heap&&window.heap.track(e,t),window.FS&&window.FS.event(e,t)}};const v=m.Mw?f:p;var h=n(723);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var E=window.paypal&&window.paypal.Buttons;const g=function(e){var t=y((0,a.useState)(!1),2),n=t[0],r=t[1],i=y((0,a.useState)(null),2),c=i[0],l=i[1],o=(0,a.useRef)(null);if(!E)return null;(0,a.useEffect)((function(){"yiqi-app"===e.plan.product_type&&E({style:{shape:"rect",color:"gold",layout:"vertical",label:"paypal"},createSubscription:function(t,n){return n.subscription.create({plan_id:e.plan.product_id})},onApprove:function(t,n){r(!0),e.onSuccess(t.subscriptionID)},onCancel:function(t){e.onError("cancelled, orderId: ".concat(t.orderID))},onError:function(t){l(t),e.onError(t.toString())}}).render(o.current)}),[]);var s,m,u=!n&&!c;return a.createElement("div",null,a.createElement("hr",null),n&&a.createElement("div",{className:"text-success"},"Payment successful!"),c&&a.createElement("div",{className:"text-danger"},"Error occurred in processing payment! Please refresh the page and try again."),u&&a.createElement(a.Fragment,null,a.createElement("h4",null,"Total Amount: $",(0,m="number"==typeof(s=e.plan.price*e.billInterval)?s:parseFloat(s),Math.floor(100*m)/100)),a.createElement("div",{ref:o})))};var N=n(313);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function c(e){try{o(a.next(e))}catch(e){i(e)}}function l(e){try{o(a.throw(e))}catch(e){i(e)}}function o(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,l)}o((a=a.apply(e,t||[])).next())}))};const I=function(e){var t,n,r,c=w((0,a.useState)([]),2),s=c[0],u=c[1],d=w((0,a.useState)(""),2),p=d[0],f=d[1],y=w((0,a.useState)(""),2),b=y[0],E=y[1],x="";if(e.isMembershipSite){var I=(0,i.D3)().getAccessTokenSilently,k=(0,h.I)(),C=k.userInfo,_=k.dispatch,A=k.subscribeYiQiApp;t=I,x=(null==C?void 0:C.email)||"",n=_,r=A}var R=function(e,a,i){return S(void 0,void 0,void 0,regeneratorRuntime.mark((function c(){var l,o;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return l="",c.next=3,r(t,{email:x,planId:e,subscriptionId:a,useCode:i});case 3:return(o=c.sent).success?n({type:"SUBSCRIBE_RETURN",subscribeResult:o}):l=o.message,c.abrupt("return",l);case 6:case"end":return c.stop()}}),c)})))},Z=function(e){},U=function(){R(1,"I-AG4G9LPK4RGD")};return(0,a.useEffect)((function(){S(void 0,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(m.H,"/").concat(m.Gn,"/plans?productType=yiqi-app"),e.next=3,(0,N.Z)(t,"GET");case 3:(n=e.sent).data&&u(n.data);case 5:case"end":return e.stop()}}),e)})))}),[]),a.createElement(a.Fragment,null,a.createElement("div",{className:"row"},s.map((function(t,n){return a.createElement("div",{key:t.name,className:"col-xs-12 col-sm-6 col-lg-4"},a.createElement("div",{className:l()("card mb-4 shadow-sm",{"border-primary":1===n})},a.createElement("div",{className:l()("card-header",{"bg-primary text-light":1===n})},a.createElement("h4",{className:"my-0 font-weight-normal text-center"},t.name)),a.createElement("div",{className:"card-body"},a.createElement("h1",{className:"card-title text-center"},"$",t.price," ",a.createElement("small",{className:"text-muted"},"/ mo")),a.createElement("ul",{className:"mt-3 mb-4"},(r=t.description,(r||"").split("\n").filter((function(e){return/\S+/.test(e)})).map((function(e){return(0,o.trim)(e)}))).map((function(e){return a.createElement("li",{key:e},e)}))),a.createElement("p",null,a.createElement("sub",null,"* Bill semi-yearly (per ",6," months). Unsubscribe anytime.",a.createElement("br",null),"* If you have any question, please contact"," ",a.createElement("a",{href:"mailto:support@yiqihanzi.com",className:"text-muted"},a.createElement("strong",null,"support@yiqihanzi.com")))),!e.isMembershipSite&&a.createElement("a",{className:"btn btn-lg btn-block btn-primary",href:m.tz},"Sign up to subscribe YiQi App"),e.isMembershipSite&&a.createElement(a.Fragment,null,m.TQ&&a.createElement("button",{onClick:U},"test basic subscription"),a.createElement(g,{plan:t,billInterval:6,onSuccess:function(e){return function(e,t){R(e,t)}(t.id||0,e)},onError:Z})))));var r})),a.createElement("div",{className:"col-xs-12 col-sm-6 col-lg-4"},a.createElement("div",{className:"card mb-4 shadow-sm"},a.createElement("div",{className:"card-header"},a.createElement("h4",{className:"my-0 font-weight-normal text-center"},"For Enterprise")),a.createElement("div",{className:"card-body"},a.createElement("h1",{className:"card-title text-center"},"$? ",a.createElement("small",{className:"text-muted"},"/ mo")),a.createElement("ul",{className:"mt-3 mb-4"},a.createElement("li",null,"Character resources integration to your website and app"),a.createElement("li",null,"Chinese character and Chinese culture related solutions"),a.createElement("li",null,"Discuss your specific needs with us")),a.createElement("a",{href:"mailto:hello@yiqihanzi.com",className:"btn btn-lg btn-block btn-outline-secondary"},"Contact us"))))),e.isMembershipSite&&a.createElement("div",{className:"card"},a.createElement("div",{className:"card-header"},a.createElement("h4",null,"Use Code")),a.createElement("div",{className:"card-body"},a.createElement("p",{className:"card-text"},"You may use a code to get access if you have one. With a one-time code, you can get access for a limited time."),a.createElement("div",{className:"input-group mb-3 pl-0 col-lg-4 col-xs-12"},a.createElement("input",{type:"text",className:"form-control border-success",placeholder:"Code","aria-label":"Code","aria-describedby":"button-addon2",value:p,onChange:function(e){return f(e.currentTarget.value.trim())}}),a.createElement("div",{className:"input-group-append"},a.createElement("button",{className:"btn btn-outline-success",type:"button",id:"button-addon2",onClick:function(){return S(void 0,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E(""),v.event("yiqi app use code",{code_str:p}),!p){e.next=12;break}if(!(t=s.find((function(e){return"yiqi-app"===e.product_type&&e.name.toLowerCase().indexOf("premium")>-1})))||!t.id){e.next=11;break}return e.next=7,R(t.id,void 0,p);case 7:n=e.sent,E(n),e.next=12;break;case 11:E("planId is invalid");case 12:case"end":return e.stop()}}),e)})))}},"Enter"))),a.createElement("p",{className:"text-danger"},b))))};var k=n(381).ZP.div.withConfig({displayName:"styles__PricingHeader",componentId:"xktxen-0"})(["margin-bottom:50px;"]);const C=function(){return a.createElement(r.Z,null,a.createElement(a.Fragment,null,a.createElement(k,{className:"px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},a.createElement("h1",{className:"display-4"},"Subscription"),a.createElement("p",{className:"lead"},"Find a plan here that suits your needs for leaning Chinese characters and Chinese culture in the easiest way.")),a.createElement("div",{className:"container"},a.createElement(I,null))))}}}]);