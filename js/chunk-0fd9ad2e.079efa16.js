(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0fd9ad2e"],{"1a16":function(t,e,r){"use strict";r("23e0")},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,i)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var a=t.apply(e,r);function s(t){n(a,i,o,s,c,"next",t)}function c(t){n(a,i,o,s,c,"throw",t)}s(void 0)}))}}r.d(e,"a",(function(){return i}))},"23e0":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(A){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new R(n||[]);return o._invoke=E(t,r,a),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};w[o]=function(){return this};var x=Object.getPrototypeOf,b=x&&x(x(S([])));b&&b!==r&&n.call(b,o)&&(w=b);var _=g.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(i,o,a,s){var c=l(t[i],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var i;function o(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=h;return function(i,o){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===i)throw o;return N()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var s=C(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?d:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=_.constructor=g,g.constructor=m,m.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new k(u(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(_),c(_,s,"Generator"),_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},b3d7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[t._m(0),r("div",{staticClass:"main"},[r("div",{staticClass:"container"},[t._m(1),r("div",{staticClass:"list"},[r("div",{staticClass:"content"},[r("van-row",{attrs:{type:"flex",justify:"space-between"}},[t._l(t.list,(function(e,n){return[r("van-col",{key:n,attrs:{span:"12"},on:{click:function(r){return t.goto(e)}}},[r("div",{class:"box "+(n%2==0?"box_left":"box_right")},[r("div",{staticClass:"row1"},[r("van-row",{attrs:{type:"flex",justify:"center",align:"center"}},[r("div",{staticClass:"title"},[t._v(t._s(e.startCity))]),r("div",[r("img",{staticClass:"division"})]),r("div",{staticClass:"title"},[t._v(t._s(e.endCity))])])],1),r("div",{staticClass:"row2"},[r("van-row",{staticStyle:{width:"100%"},attrs:{type:"flex",justify:"space-between",align:"bottom"}},[r("div",{staticClass:"date"},[t._v(t._s(e.startTime)+t._s(t._f("formatWeek")(e.week)))]),r("div",{staticClass:"price"},[r("span",{staticClass:"icon"},[t._v("¥")]),r("span",{staticClass:"text"},[t._v(t._s(e.price))])])])],1)])])]}))],2),r("van-row",[r("van-col",{attrs:{span:"24"}},[r("div",{staticClass:"expand",on:{click:t.handleExpand}},[r("span",[t._v(t._s(t.moreText))]),r("img",{class:"down_arrow "+(t.noMore?"down_arrow_nomore":"")})])])],1)],1)])])])])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("img")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"t-c"},[r("div",{staticClass:"title"},[r("div",[r("img",{staticClass:"left_arrow"})]),r("div",{staticClass:"text"},[t._v("西部航空·机票+酒店套餐")]),r("div",[r("img",{staticClass:"right_arrow"})])]),r("div",{staticClass:"summary"},[t._v("含单程机票及酒店一晚")])])}];r("4917");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return o(t)}function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function c(t,e){if(t){if("string"===typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return a(t)||s(t)||c(t)||u()}r("96cf");var h=r("1da1"),f=(r("01ea"),{name:"Home",data:function(){return{list:[],page:1,size:6,noMore:!1}},methods:{init:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getList();case 2:return t.next=4,this.checkHistoryOrder();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),checkHistoryOrder:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e,r,n,i,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e=localStorage.getItem("wxUserInfo"),!e){t.next=9;break}return r=JSON.parse(e),n={uid:r.id},t.next=7,this.apis.home.historyOrder(n);case 7:i=t.sent,0==i.code&&i.data&&i.data.orderNo&&this.$dialog.confirm({title:"提示",message:"你有未完成支付的订单：".concat(i.data.orderNo,"，是否继续支付？"),confirmButtonText:"是",cancelButtonText:"否"}).then((function(){o.$router.push({path:"/pay",query:{orderNo:i.data.orderNo}})}));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),this.toast(t.t0.message);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));function e(){return t.apply(this,arguments)}return e}(),getList:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,this.noMore){t.next=7;break}return t.next=4,this.apis.home.list({page:this.page,size:this.size});case 4:e=t.sent,r=e.data,0==e.code&&(this.list=[].concat(l(this.list),l(r.data)),this.list.length>=r.total&&(this.noMore=!0));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),this.toast(t.t0.message);case 12:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),handleExpand:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.noMore){t.next=4;break}return this.page++,t.next=4,this.getList();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),goto:function(t){this.$router.push({path:"/detail",query:{id:t.id,air_ports:t.endAirportsCode}})}},created:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=window.navigator.userAgent.toLowerCase(),"micromessenger"==e.match(/MicroMessenger/i)?console.log("微信浏览器"):(console.log("不是微信浏览器"),this.$router.push({path:"/wxurl"})),t.next=4,this.init();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mounted:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),computed:{moreText:function(){return this.noMore?"没有更多了":"点击加载"}}}),p=f,d=(r("1a16"),r("2877")),v=Object(d["a"])(p,n,i,!1,null,"506c4820",null);e["default"]=v.exports}}]);