(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3aa7ae64"],{"0adb":function(t,e,s){t.exports=s.p+"img/chooseplone.7080497e.png"},"1f67":function(t,e,s){t.exports=s.p+"img/hotel_img2.5e95816a.png"},4836:function(t,e,s){},"655e":function(t,e,s){"use strict";s("4836")},7319:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"calendar_fix"},[a("van-row",{staticClass:"calendar_fix_flex",attrs:{type:"flex",align:"center",justify:"center"}},[a("div",[a("div",[a("img",{staticClass:"calendar_img"})]),a("div",{staticClass:"calendar_text"},[t._v("日历")]),a("div",[a("img",{staticClass:"calendar_arrow"})])])])],1),a("title-bar",{attrs:{title:"西部航空-机+酒特惠",fixed:"","go-back":"",shadow:""}}),a("div",{staticClass:"main"},[a("div",{staticClass:"m_30"},[a("van-tabs",{attrs:{type:"card","title-active-color":"#ffffff","title-inactive-color":"#000000","title-class":"my_tab",swipeable:"",ellipsis:!1},on:{click:t.handleTabClick,disabled:t.showCalendar},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[t._l(t.list,(function(e,i){return[a("van-tab",{key:i,scopedSlots:t._u([{key:"title",fn:function(){return[a("div",{staticClass:"tab_date"},[t._v("\n                "+t._s(t.moment(e.date).format("MM-DD"))+"\n              ")]),a("div",{staticClass:"tab_week"},[t._v(t._s(t._f("formatWeek")(e.week)))]),a("div",{staticClass:"tab_price"},[t._v("¥"+t._s(t._f("numFormat")(e.mixPrice)))])]},proxy:!0}],null,!0)},[a("div",{staticClass:"hotel"},[a("div",{staticClass:"flight"},[a("div",{staticStyle:{display:"flex"}},[a("div",{staticClass:"hotel_img2"},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:s("0adb"),alt:""}})]),a("div",{staticClass:"choose_hotel"},[t._v("选机票")])]),a("div",{staticClass:"hangban"},[a("van-row",{attrs:{type:"flex",justify:"space-between",align:"center"}},[a("van-row",{attrs:{type:"flex",justify:"space-between",align:"center"}},[a("span",{},[a("img",{staticClass:"fitem_logo"})]),a("span",{staticClass:"fitem_name"},[t._v("西部航空")]),a("span",{staticClass:"fitem_flight_name"},[t._v(t._s(t.flightInfo.flightName))]),a("span",{staticClass:"fitem_date"},[t._v(t._s(t.moment(t.currentItem.date).format("MM-DD")))]),a("span",{staticClass:"fitem_week"},[t._v(t._s(t._f("formatWeek")(t.currentItem.week)))])]),a("span",{on:{click:t.toggelFlight}},[a("img",{staticClass:"toggle"})])],1),a("div",{staticClass:"fitem_content"},[a("van-row",{staticClass:"fitem_row2",attrs:{type:"flex",align:"bottom",justify:"space-between"}},[a("div",[a("div",{staticClass:"fitem_time"},[t._v("\n                          "+t._s(t.moment(t.flightInfo.startTime).format("HH:mm"))+"\n                        ")]),a("div",{staticClass:"fitem_city"},[t._v("\n                          "+t._s(t.flightInfo.startCity)+"\n                        ")])]),a("div",[a("div",{staticClass:"fitem_hours"},[t._v("\n                          "+t._s(t.flightInfo.diffTime)+"\n                        ")]),a("div",{staticClass:"fitem_arrow"},[a("img",{staticClass:"fitem_arrow_img"})]),a("div",{staticClass:"fitem_hours2"},[t._v("无餐食、无行李")])]),a("div",[a("div",{staticClass:"fitem_time"},[t._v("\n                          "+t._s(t.moment(t.flightInfo.endTime).format("HH:mm"))+"\n                        ")]),a("div",{staticClass:"fitem_city"},[t._v(t._s(t.flightInfo.endCity))])])]),a("van-row",{directives:[{name:"show",rawName:"v-show",value:!t.hasStock,expression:"!hasStock"}],staticClass:"fitem_row3",attrs:{type:"flex",justify:"start",align:"center"}},[a("div",[a("span",{staticClass:"fitem_residue_text"},[t._v("剩余数量：")]),a("span",{staticClass:"fitem_residue_num"},[t._v(t._s(t.flightInfo.stock))])])])],1)],1),a("div",{staticStyle:{display:"flex","margin-top":"35px"}},[a("div",{staticClass:"hotel_img2"},[a("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:s("1f67"),alt:""}})]),a("div",{staticClass:"choose_hotel"},[t._v("选酒店")])]),t._l(t.hotelInfo,(function(e,s){return a("div",{key:s,staticClass:"hangban"},[a("div",{staticClass:"hotel_info"},[a("van-row",{attrs:{type:"flex",justify:"space-between",align:"center"}},[a("div",{staticClass:"hotel_name"},[t._v("\n                        "+t._s(e.name)+"（"+t._s(e.storeName)+"）\n                      ")]),a("div",{staticClass:"hotel_detail_text",on:{click:function(s){return t.handleHotelDetailClick(e)}}},[t._v("\n                        详情\n                      ")])]),a("van-row",{staticClass:"hotel_address",attrs:{type:"flex",align:"center"}},[a("van-col",{attrs:{span:24}},[a("img",{staticClass:"hotel_address_ico"}),a("span",{staticClass:"hotel_address_text"},[t._v(t._s(e.address))])])],1),a("van-row",{staticClass:"hotel_img_list",attrs:{type:"flex",align:"center",justify:"space-between"}},[t._l(e.images,(function(s,i){return[a("van-image",{key:i,staticClass:"hotel_img",attrs:{src:s},on:{click:function(s){return t.sceneImg(e.images,i)}}})]}))],2),a("van-row",{staticClass:"hotel_base",attrs:{type:"flex",align:"center",justify:"space-between"}},[a("van-col",{attrs:{span:24}},[a("span",{staticClass:"hotel_base_title"},[t._v("基础信息：")]),t._l(e.baseInfo,(function(e,s){return[a("span",{key:s},[a("span",{staticClass:"hotel_has"},[a("img",{staticClass:"hotel_has_img"})]),a("span",{staticClass:"hotel_base_desc"},[t._v(t._s(e))])])]}))],2)],1),a("van-row",{staticClass:"hotel_base",attrs:{type:"flex",align:"center",justify:"space-between"}},[a("van-col",{attrs:{span:24}},[a("span",{staticClass:"hotel_base_title"},[t._v("便利设施：")]),t._l(e.amenities,(function(e,s){return[a("span",{key:s},[a("span",{staticClass:"hotel_has"},[a("img",{staticClass:"hotel_has_img"})]),a("span",{staticClass:"hotel_base_desc"},[t._v(t._s(e))])])]}))],2)],1),a("van-row",{staticClass:"hotel_room_date",attrs:{type:"flex",align:"bottom",justify:"space-between"}},[a("div",[a("div",{staticClass:"hotel_room_date_title"},[t._v("入住日期")]),a("div",{staticClass:"hotel_room_date_text"},[t._v("\n                          "+t._s(t.moment(t.currentItem.date).format("MM-DD"))+"\n                          "+t._s(t._f("formatWeek")(t.currentItem.week))+"\n                        ")])]),a("div",[a("div",{staticClass:"hotel_room_date_day"},[t._v("1晚")]),a("div",{staticClass:"hotel_room_date_arrow"},[a("img",{staticClass:"hotel_room_date_arrow_img"})]),a("div",{staticClass:"hotel_room_date_day2"},[t._v("不可取消")])]),a("div",[a("div",{staticClass:"hotel_room_date_title"},[t._v("退房时间")]),a("div",{staticClass:"hotel_room_date_text"},[t._v("\n                          "+t._s(t.moment(t.currentItem.date).add(1,"d").format("MM-DD"))+"\n                          "+t._s(t._f("formatWeek")(t.currentItem.week<7?t.currentItem.week+1:1))+"\n                        ")])])]),a("van-row",{staticClass:"hotel_total_money",attrs:{type:"flex",align:"center",justify:"end"}},[a("div",{staticStyle:{display:"flex"}},[a("div",[a("div",[a("span",{staticClass:"jijiu"},[t._v("机酒")]),a("span",{staticClass:"momey_hotel"},[t._v("￥")]),a("span",{staticClass:"person_hotel"},[t._v(t._s(t.allprice+parseFloat(e.price))+"/人")])]),a("div",{staticClass:"yisheng_hotel"},[t._v("\n                            已省￥"+t._s(e.discountAmount)+"\n                          ")])]),a("div",{staticClass:"ding",on:{click:function(s){return t.ding(e)}}},[t._v("订")])])])],1)])}))],2)])])]})),a("van-tab",{attrs:{disabled:"","title-class":t.calendarSelectShow?"calendar":""}})],2)],1)]),a("van-popup",{style:{height:"50%"},attrs:{closeable:"","close-icon":"close",position:"bottom"},model:{value:t.flightListShow,callback:function(e){t.flightListShow=e},expression:"flightListShow"}},[a("div",{staticClass:"flist"},[t._l(t.flightList,(function(e,s){return[a("div",{key:s,staticClass:"fitem",on:{click:function(s){return t.handleFlightItemClick(e)}}},[a("div",{staticClass:"fitem_content"},[a("van-row",{attrs:{type:"flex",justify:"space-between",align:"center"}},[a("span",{},[a("img",{staticClass:"fitem_logo"})]),a("span",{staticClass:"fitem_name"},[t._v("西部航空")]),a("span",{staticClass:"fitem_flight_name"},[t._v(t._s(e.flightName))]),a("span",{staticClass:"fitem_date"},[t._v(t._s(t.moment(t.currentItem.date).format("MM-DD")))]),a("span",{staticClass:"fitem_week"},[t._v(t._s(t._f("formatWeek")(t.currentItem.week)))])]),a("van-row",{staticClass:"fitem_row2",attrs:{type:"flex",align:"bottom",justify:"space-between"}},[a("div",[a("div",{staticClass:"fitem_time"},[t._v("\n                  "+t._s(t.moment(e.startTime).format("HH:mm"))+"\n                ")]),a("div",{staticClass:"fitem_city"},[t._v(t._s(e.startCity))])]),a("div",[a("div",{staticClass:"fitem_hours"},[t._v(t._s(e.diffTime))]),a("div",{staticClass:"fitem_arrow"},[a("img",{staticClass:"fitem_arrow_img"})]),a("div",{staticClass:"fitem_hours2"},[t._v("无餐食、无行李")])]),a("div",[a("div",{staticClass:"fitem_time"},[t._v("\n                  "+t._s(t.moment(e.endTime).format("HH:mm"))+"\n                ")]),a("div",{staticClass:"fitem_city"},[t._v(t._s(e.endCity))])])]),a("van-row",{staticClass:"fitem_row3",attrs:{type:"flex",justify:"space-between",align:"center"}},[a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.stock<=5,expression:"item.stock <= 5"}]},[a("span",{staticClass:"fitem_residue_text"},[t._v("剩余数量：")]),a("span",{staticClass:"fitem_residue_num"},[t._v(t._s(e.stock))])])]),a("div",[a("span",{staticClass:"fitem_flight_total_title"},[t._v("机酒总价")]),a("span",{staticClass:"fitem_price_ico"},[t._v("¥")]),a("span",{staticClass:"fitem_price"},[t._v(t._s(t._f("numFormat")(e.price)))])])])],1),a("div",{staticClass:"fitem_line"})])]}))],2)]),a("van-popup",{style:{height:"100%"},attrs:{position:"bottom"},model:{value:t.hotelShow,callback:function(e){t.hotelShow=e},expression:"hotelShow"}},[t.hotel_detail?a("div",[a("van-nav-bar",{attrs:{title:"酒店详情","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),a("div",{staticClass:"hotel_modal"},[a("van-row",{staticClass:"bg_title",staticStyle:{"margin-top":"0"},attrs:{type:"flex",justify:"space-between",align:"center"}},[a("van-col",{staticClass:"title",attrs:{span:24}},[a("span",[t._v("酒店信息")])])],1),a("div",{domProps:{innerHTML:t._s(t.hotel_detail.details.info)}}),a("van-row",{staticClass:"bg_title",attrs:{type:"flex",justify:"space-between",align:"center"}},[a("van-col",{staticClass:"title",attrs:{span:24}},[a("span",[t._v("注意事项")])])],1),a("div",t._l(t.hotel_detail.details.notice,(function(e,s){return a("div",{key:s},[a("div",[a("span",[a("img",{staticClass:"notice_img"})]),a("span",[t._v(t._s(e))])])])})),0)],1)],1):t._e()]),a("van-popup",{style:{height:"100%"},attrs:{position:"bottom"},model:{value:t.travelShow,callback:function(e){t.travelShow=e},expression:"travelShow"}},[a("div",[a("van-nav-bar",{attrs:{title:"新增旅客","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),a("van-form",{on:{submit:t.handleTravelSubmit}},[a("van-field",{attrs:{name:"姓名",label:"姓名",placeholder:"姓名",rules:[{required:!0,message:"请填写姓名"},{pattern:/^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z\s\.]+$/,message:"姓名格式错误"}]},model:{value:t.formModel.username,callback:function(e){t.$set(t.formModel,"username",e)},expression:"formModel.username"}}),a("van-field",{attrs:{name:"身份证",label:"身份证",placeholder:"身份证",rules:[{required:!0,message:"请填写身份证"},{pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,message:"证件号格式不对"}]},model:{value:t.formModel.idcard_no,callback:function(e){t.$set(t.formModel,"idcard_no",e)},expression:"formModel.idcard_no"}}),a("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号",rules:[{required:!0,message:"请填写手机号"},{pattern:/^[1][0-9]{10}$/,message:"手机号格式不对"}]},model:{value:t.formModel.phone,callback:function(e){t.$set(t.formModel,"phone",e)},expression:"formModel.phone"}}),a("div",{staticClass:"add_submit"},[a("van-button",{staticClass:"btn_add_submit",attrs:{block:"",type:"info","native-type":"submit",disabled:t.stockZero}},[t._v("确定")])],1)],1)],1)]),a("van-popup",{model:{value:t.resultShow,callback:function(e){t.resultShow=e},expression:"resultShow"}},[a("div",{staticClass:"result"},[a("div",{staticClass:"result_title"},[t._v("已提交成功")]),a("van-row",{attrs:{type:"flex",justify:"center",align:"center"}},[a("div",{staticClass:"result_text"},[t._v("\n          我们的工作人员会及时通过电话联系您， 请保持手机畅通\n        ")])]),a("div",[a("van-button",{staticClass:"btn_primary result_btn",on:{click:function(){return t.resultShow=!1}}},[t._v("确定")])],1)],1)]),a("van-popup",{style:{height:"100%"},attrs:{closeable:"",position:"bottom"},model:{value:t.calendarShow,callback:function(e){t.calendarShow=e},expression:"calendarShow"}},[a("van-calendar",{attrs:{title:"日历",poppable:!1,"show-confirm":!1,formatter:t.calendarFormatter},on:{select:t.calendarSelect}})],1)],1)},i=[],n=(s("8e6e"),s("456d"),s("ac6a"),s("4662"),s("28a2")),l=s("ade3"),o=(s("7f7f"),s("20d6"),s("96cf"),s("1da1")),r=s("1e1d");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function f(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){Object(l["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={data:function(){return{list:[],currentTab:0,flightInfo:{},currentItem:{},flightList:[],travellerList:[],allprice:0,flightListShow:!1,travelShow:!1,hotelShow:!1,resultShow:!1,calendarShow:!1,calendarSelectShow:!0,defaultTraveInfo:{username:"",ename:"",idcard_no:"",phone:""},formModel:{username:"",ename:"",idcard_no:"",phone:""},contactInfo:{username:"",ename:"",idcard_no:"",phone:""},hotelInfo:{},submiting:!1,hotel_detail:""}},components:{TitleBar:r["default"]},computed:{hasStock:function(){try{return this.flightInfo.stock>5}catch(t){return!0}},stockZero:function(){try{return this.flightInfo.stock<=0}catch(t){return!1}}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s,a,i,n,l,o,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(this.$route.query),e=this.$route.query,s=e.id,a=e.air_ports,console.log("air_ports",a),t.next=5,this.apis.home.hotelDetail({air_ports:a});case 5:if(i=t.sent,n=i.data,n&&(this.hotelInfo=n,console.log("ddad",n)),!s){t.next=13;break}return t.next=11,this.apis.home.detail({id:s});case 11:l=t.sent,0==l.code&&(this.list=l.data,this.list.length&&(o=this.list.findIndex((function(t){return t.checked})),r=o>=0?o:0,this.currentTab=r,this.currentItem=this.list[r],c=this.list[r].item,this.flightList=c,c.length&&(this.flightInfo=c[0],this.allprice=parseFloat(c[0].price))));case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),beforeCreate:function(){document.querySelector("body").setAttribute("style","background:#ffffff")},beforeDestroy:function(){document.querySelector("body").setAttribute("style","")},beforeRouteEnter:function(t,e,s){document.querySelector("body").setAttribute("style","background:#ffffff"),s()},beforeRouteLeave:function(t,e,s){document.querySelector("body").setAttribute("style",""),s()},mounted:function(){window.addEventListener("scroll",this.handleScroll)},methods:{ding:function(t){console.log(t),this.$router.push({path:"/pay_BEHIND",query:{schedule:this.flightInfo.schedule,startTime:this.flightInfo.startTime,startCity:this.flightInfo.startCity,endCity:this.flightInfo.endCity,price:this.flightInfo.price,hotel_price:t.price,id:this.flightInfo.id,hotel_id:t.id}})},handleScroll:function(){var t=this;this.$nextTick((function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;console.log(e),t.calendarSelectShow=!(e>20)}))},handleTabClick:function(t,e){if("日历"!=e){this.currentItem=this.list[t];var s=this.list[t].item;this.flightList=s,s.length&&(this.flightInfo=s[0]),console.log(this.flightInfo),this.allprice=parseFloat(this.flightInfo.price)}else alert()},toggelFlight:function(){this.flightListShow=!0},handleFlightItemClick:function(t){this.flightInfo=t,this.allprice=parseFloat(t.price),console.log(this.allprice),this.flightListShow=!1},handleTravelAddClick:function(){this.formModel=f({},this.defaultTraveInfo),this.travelShow=!0},onClickLeft:function(){this.travelShow=!1,this.hotelShow=!1,this.flightListShow=!1},handleTravelSubmit:function(){this.travellerList.push(this.formModel),this.contactInfo.username||(this.contactInfo=f({},this.formModel)),this.travelShow=!1},handleSubmit:function(){var t=this,e=localStorage.getItem("wxUserInfo");if(e){var s=JSON.parse(e),a=this.$refs.contactForm[0];a.validate().then(Object(o["a"])(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={uid:s.id,id:t.flightInfo.id,username:t.contactInfo.username,idcard_no:t.contactInfo.idcard_no,phone:t.contactInfo.phone,user_info:t.travellerList},e.prev=1,t.submiting=!0,e.next=5,t.apis.home.createOrder(a);case 5:i=e.sent,0==i.code?(n=i.data.orderNo,t.toast("提交成功,3秒后跳转至支付页面"),setTimeout((function(){t.$router.push({path:"/pay",query:{orderNo:n}})}),3e3)):(t.submiting=!1,t.toast(i.msg)),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),t.submiting=!1,t.toast("提交失败");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).catch((function(){}))}else this.toast("缺少用户授权信息，请先授权用户信息")},handleTravellerDel:function(t){this.travellerList.splice(t,1)},handleHotelDetailClick:function(t){this.hotelShow=!0,console.log(t),this.hotel_detail=t},sceneImg:function(t,e){Object(n["a"])({images:t,showIndex:!0,loop:!1,startPosition:e})},showCalendar:function(){this.calendarShow=!0},calendarFormatter:function(t){var e=this.moment(t.date).format("YYYY-MM-DD");return this.list.forEach((function(s){s.date==e&&(t.bottomInfo="¥ ".concat(s.mixPrice),t.className="testcolor")})),t},calendarSelect:function(t){var e=this.moment(t).format("YYYY-MM-DD"),s=this.list.findIndex((function(t){return t.date==e}));if(s>=0){this.currentItem=this.list[s];var a=this.list[s].item;this.flightList=a,a.length&&(this.currentTab=s,this.flightInfo=a[0],this.allprice=this.flightInfo.price),this.calendarShow=!1}}}},h=d,m=(s("655e"),s("2877")),_=Object(m["a"])(h,a,i,!1,null,"78e14c8c",null);e["default"]=_.exports}}]);