(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-gequxinxi-add-or-update"],{"0166":function(e,r,t){"use strict";t.r(r);var i=t("0f03"),n=t("fcce");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("047d");var o,u=t("f0c5"),l=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"76aa5ab6",null,!1,i["a"],o);r["default"]=l.exports},"047d":function(e,r,t){"use strict";var i=t("c4c6"),n=t.n(i);n.a},"0f03":function(e,r,t){"use strict";var i={"w-picker":t("e2b1").default},n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-form",{staticClass:"app-update-pv"},[t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("歌曲名称")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.gequmingcheng,placeholder:"歌曲名称"},model:{value:e.ruleForm.gequmingcheng,callback:function(r){e.$set(e.ruleForm,"gequmingcheng",r)},expression:"ruleForm.gequmingcheng"}})],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("歌曲类型")]),t("v-uni-picker",{attrs:{value:e.gequleixingIndex,range:e.gequleixingOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.gequleixingChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.gequleixing?e.ruleForm.gequleixing:"请选择歌曲类型"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 20rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.fengmianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("封面")]),t("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.fengmian?t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.fengmian,mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),t("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("歌手")]),t("v-uni-picker",{attrs:{value:e.geshouIndex,range:e.geshouOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.geshouChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.geshou?e.ruleForm.geshou:"请选择歌手"))])],1)],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("专辑")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.zhuanji,placeholder:"专辑"},model:{value:e.ruleForm.zhuanji,callback:function(r){e.$set(e.ruleForm,"zhuanji",r)},expression:"ruleForm.zhuanji"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("时长")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.shizhang,placeholder:"时长"},model:{value:e.ruleForm.shizhang,callback:function(r){e.$set(e.ruleForm,"shizhang",r)},expression:"ruleForm.shizhang"}})],1),t("v-uni-view",{staticClass:"cu-form-group input",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.yinpinTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("音频")]),t("v-uni-view",{staticClass:"right-input",style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.yinpin?e.ruleForm.yinpin:"点击上传音频"))])],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("发行方")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.faxingfang,placeholder:"发行方"},model:{value:e.ruleForm.faxingfang,callback:function(r){e.$set(e.ruleForm,"faxingfang",r)},expression:"ruleForm.faxingfang"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"108rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("版权方")]),t("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0.19)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:e.ro.banquanfang,placeholder:"版权方"},model:{value:e.ruleForm.banquanfang,callback:function(r){e.$set(e.ruleForm,"banquanfang",r)},expression:"ruleForm.banquanfang"}})],1),t("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(51, 153, 153, 1)",margin:"0 0 10rpx 0",borderWidth:"2rpx",borderStyle:"solid",height:"308rpx"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(51, 153, 153, 1)",textAlign:"left"}},[e._v("歌词")]),t("v-uni-textarea",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"16rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"歌词"},model:{value:e.ruleForm.geci,callback:function(r){e.$set(e.ruleForm,"geci",r)},expression:"ruleForm.geci"}})],1),t("v-uni-view",{staticClass:"btn"},[t("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 0px rgba(0,0,0,0) inset",backgroundColor:"rgba(248, 176, 9, 1)",borderColor:"rgba(51, 153, 153, 1)",borderRadius:"8rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),t("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(r){arguments[0]=r=e.$handleEvent(r),e.clicktimeConfirm.apply(void 0,arguments)}}})],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))},"35f1":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("ac6a"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o={data:function(){return{ruleForm:{gequmingcheng:"",gequleixing:"",fengmian:"",geshou:"",zhuanji:"",shizhang:"",yinpin:"",faxingfang:"",banquanfang:"",geci:"",clicktime:"",clicknum:""},gequleixingOptions:[],gequleixingIndex:0,geshouOptions:[],geshouIndex:0,user:{},ro:{gequmingcheng:!1,gequleixing:!1,fengmian:!1,geshou:!1,zhuanji:!1,shizhang:!1,yinpin:!1,faxingfang:!1,banquanfang:!1,geci:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:return i=e.sent,this.user=i.data,e.next=7,this.$api.option("gequleixing","gequleixing",{});case 7:return i=e.sent,this.gequleixingOptions=i.data,e.next=11,this.$api.option("remengeshou","geshouxingming",{});case 11:if(i=e.sent,this.geshouOptions=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=21;break}return this.ruleForm.id=r.id,e.next=19,this.$api.info("gequxinxi",this.ruleForm.id);case 19:i=e.sent,this.ruleForm=i.data;case 21:if(!r.cross){e.next=76;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 24:if((e.t1=e.t0()).done){e.next=76;break}if(a=e.t1.value,"gequmingcheng"!=a){e.next=30;break}return this.ruleForm.gequmingcheng=n[a],this.ro.gequmingcheng=!0,e.abrupt("continue",24);case 30:if("gequleixing"!=a){e.next=34;break}return this.ruleForm.gequleixing=n[a],this.ro.gequleixing=!0,e.abrupt("continue",24);case 34:if("fengmian"!=a){e.next=38;break}return this.ruleForm.fengmian=n[a],this.ro.fengmian=!0,e.abrupt("continue",24);case 38:if("geshou"!=a){e.next=42;break}return this.ruleForm.geshou=n[a],this.ro.geshou=!0,e.abrupt("continue",24);case 42:if("zhuanji"!=a){e.next=46;break}return this.ruleForm.zhuanji=n[a],this.ro.zhuanji=!0,e.abrupt("continue",24);case 46:if("shizhang"!=a){e.next=50;break}return this.ruleForm.shizhang=n[a],this.ro.shizhang=!0,e.abrupt("continue",24);case 50:if("yinpin"!=a){e.next=54;break}return this.ruleForm.yinpin=n[a],this.ro.yinpin=!0,e.abrupt("continue",24);case 54:if("faxingfang"!=a){e.next=58;break}return this.ruleForm.faxingfang=n[a],this.ro.faxingfang=!0,e.abrupt("continue",24);case 58:if("banquanfang"!=a){e.next=62;break}return this.ruleForm.banquanfang=n[a],this.ro.banquanfang=!0,e.abrupt("continue",24);case 62:if("geci"!=a){e.next=66;break}return this.ruleForm.geci=n[a],this.ro.geci=!0,e.abrupt("continue",24);case 66:if("clicktime"!=a){e.next=70;break}return this.ruleForm.clicktime=n[a],this.ro.clicktime=!0,e.abrupt("continue",24);case 70:if("clicknum"!=a){e.next=74;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,e.abrupt("continue",24);case 74:e.next=24;break;case 76:this.styleChange();case 77:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},gequleixingChange:function(e){this.gequleixingIndex=e.target.value,this.ruleForm.gequleixing=this.gequleixingOptions[this.gequleixingIndex]},geshouChange:function(e){this.geshouIndex=e.target.value,this.ruleForm.geshou=this.geshouOptions[this.geshouIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.fengmian=e.$base.url+"upload/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},yinpinTap:function(){var e=this;this.$api.uploadMedia((function(r){e.ruleForm.yinpin=e.$base.url+"upload/"+r.file,e.$forceUpdate()}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.gequmingcheng){e.next=3;break}return this.$utils.msg("歌曲名称不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=6;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("gequxinxi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("gequxinxi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=o},"6aa7":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-76aa5ab6]{padding:%?20?%}.content[data-v-76aa5ab6]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-76aa5ab6]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-76aa5ab6]{width:%?180?%}.avator[data-v-76aa5ab6]{width:%?150?%;height:%?60?%}.right-input[data-v-76aa5ab6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-76aa5ab6]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-76aa5ab6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-76aa5ab6]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-76aa5ab6]{border:0}.cu-form-group uni-input[data-v-76aa5ab6]{padding:0 %?30?%}.uni-input[data-v-76aa5ab6]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-76aa5ab6]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-76aa5ab6]::after{line-height:%?88?%}.select .uni-input[data-v-76aa5ab6]{line-height:%?88?%}.input .right-input[data-v-76aa5ab6]{line-height:%?88?%}',""]),e.exports=r},c4c6:function(e,r,t){var i=t("6aa7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("39d47dce",i,!0,{sourceMap:!1,shadowMode:!1})},fcce:function(e,r,t){"use strict";t.r(r);var i=t("35f1"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a}}]);