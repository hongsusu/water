(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{174:function(t,e,a){"use strict";var i={name:"WIcon",data:function(){return{}},props:{spin:Boolean,color:{type:String,default:"#333"},prefix:String,className:[String,Object]}},s=a(1),n=Object(s.a)(i,function(){var t,e=this.$createElement,a=this._self._c||e;return a("i",{class:["w-font",(t={},t[this.prefix+"-font"]=!!this.prefix,t),{"w-spin":!!this.spin},this.className]},[this.$slots.default?this._t("default"):[a("svg",{staticClass:"icon",attrs:{t:"1523942491823",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1492","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"}},[a("path",{attrs:{d:"M981.3248 469.3248H768c-23.4752 0-42.6752 19.2-42.6752 42.6752s19.2 42.6752 42.6752 42.6752h213.3248c23.4752 0 42.6752-19.2 42.6752-42.6752s-19.2-42.6752-42.6752-42.6752zM298.6752 512c0-23.4752-19.2-42.6752-42.6752-42.6752H42.6752C19.2 469.3248 0 488.5248 0 512s19.2 42.6752 42.6752 42.6752H256c23.4752 0 42.6752-19.2 42.6752-42.6752zM512 725.3248c-23.4752 0-42.6752 19.2-42.6752 42.6752v213.3248c0 23.4752 19.2 42.6752 42.6752 42.6752s42.6752-19.2 42.6752-42.6752V768c0-23.4752-19.2-42.6752-42.6752-42.6752zM512 0c-23.4752 0-42.6752 19.2-42.6752 42.6752V256c0 23.4752 19.2 42.6752 42.6752 42.6752s42.6752-19.2 42.6752-42.6752V42.6752C554.6752 19.2 535.4752 0 512 0zM696.8064 405.3248a42.752 42.752 0 0 0 58.3936 15.744l184.8064-106.6752A42.752 42.752 0 0 0 955.7248 256a42.752 42.752 0 0 0-58.368-15.744l-184.832 106.6752a42.8032 42.8032 0 0 0-15.7184 58.3936zM327.1936 618.6752a42.752 42.752 0 0 0-58.3936-15.744L83.9936 709.632A42.752 42.752 0 0 0 68.2752 768a42.752 42.752 0 0 0 58.368 15.744l184.832-106.6752a42.8032 42.8032 0 0 0 15.7184-58.3936zM677.0688 712.2688a42.752 42.752 0 0 0-58.3936-15.744 42.752 42.752 0 0 0-15.744 58.4192l106.6752 184.7808a42.752 42.752 0 0 0 58.3936 15.744 42.752 42.752 0 0 0 15.744-58.3936l-106.6752-184.832zM314.3936 84.2752A42.752 42.752 0 0 0 256 68.5312a42.752 42.752 0 0 0-15.744 58.3936l106.6752 184.832a42.752 42.752 0 0 0 58.3936 15.7184 42.752 42.752 0 0 0 15.744-58.4192L314.368 84.2752zM618.6752 327.1936a42.8032 42.8032 0 0 0 58.368-15.7184l106.7008-184.832a42.8032 42.8032 0 0 0-74.1376-42.6496L602.9312 268.8a42.752 42.752 0 0 0 15.744 58.3936zM405.3248 696.8064a42.8032 42.8032 0 0 0-58.368 15.7184l-106.7008 184.832a42.8032 42.8032 0 0 0 74.1376 42.6496l106.6752-184.8064a42.752 42.752 0 0 0-15.744-58.3936zM939.7248 709.6064l-184.7808-106.6752a42.8032 42.8032 0 0 0-42.6752 74.1376l184.8064 106.6752a42.8032 42.8032 0 0 0 42.6496-74.1376zM84.2752 314.3936l184.7808 106.6752a42.8032 42.8032 0 0 0 58.4192-15.744 42.5728 42.5728 0 0 0-15.744-58.368L126.9248 240.2304a42.8032 42.8032 0 0 0-42.6496 74.1376z",fill:this.color}})])]],2)},[],!1,null,null,null);n.options.__file="Icon.vue";e.a=n.exports},177:function(t,e,a){"use strict";var i=a(174),s="".concat("w-button","-"),n={name:"WButton",data:function(){var t=this.$parent,e=this.$vnode.data.key,a=void 0===e?0:e,i=t.index,n=void 0===i?0:i,r=t.$options;return{name:"w-button",prefixCls:s,clicked:!1,index:n,status:n===a&&r._componentTag==="".concat(s,"group")}},props:{type:String,size:String,loading:Boolean,circle:Boolean,ghost:Boolean,disabled:Boolean,htmlType:{type:String,default:"button"},prefix:String,className:[String,Object],click:{type:Function,default:function(){}},mouseover:{type:Function,default:function(){}},mouseout:{type:Function,default:function(){}}},computed:{iconColor:function(){var t="";switch(this.type){case"danger":t="#f5222d";break;case"primary":case"ghost":t="#fff";break;default:t="rgba(0, 0, 0, 0.65)"}return t}},methods:{clickFn:function(t){this.clicked=!0;var e=this.$vnode.data.key;this.click(t,e),this.$emit("click",t,e)},mouseoverFn:function(t){var e=this.$vnode.data.key;this.mouseover(t,e),this.$emit("mouseover",t,e)},mouseoutFn:function(t){var e=this.$vnode.data.key;this.mouseout(t,e),this.$emit("mouseout",t,e)},removeClickName:function(){this.clicked=!1},updateIndex:function(){var t=this.$parent.index,e=void 0===t?0:t,a=this.$vnode.data.key,i=void 0===a?0:a;this.index=e,this.status=e===i}},components:{WIcon:i.a}},r=a(1),l=Object(r.a)(n,function(){var t,e,a=this,i=a.$createElement,s=a._self._c||i;return s("button",{class:[a.name,(t={},t[a.prefixCls+"primary"]="primary"===a.type,t[a.prefixCls+"dashed"]="dashed"===a.type,t[a.prefixCls+"danger"]="danger"===a.type,t[a.prefixCls+"ghost"]=a.ghost,t[a.prefixCls+"lg"]="large"===a.size,t[a.prefixCls+"sm"]="small"===a.size,t[a.prefixCls+"loading"]=a.loading,t[a.prefixCls+"circle"]=a.circle,t[a.prefixCls+"click"]=a.clicked,t[a.prefixCls+"disabled"]=a.disabled,t[a.prefixCls+"on"]=a.status,t[a.prefixCls+"primary-on"]="primary"===a.type&&a.status,t[a.prefixCls+"dashed-on"]="dashed"===a.type&&a.status,t[a.prefixCls+"danger-on"]="danger"===a.type&&a.status,t[a.prefixCls+"ghost-on"]="ghost"===a.type&&a.status,t),a.prefix?a.prefix+"-button":"",a.prefix&&a.status?a.prefix+"-button-on":"",a.className],attrs:{type:a.htmlType,disabled:a.disabled},on:{animationend:a.removeClickName,click:function(t){a.clickFn(t)},mouseover:function(t){a.mouseoverFn(t)},mouseout:function(t){a.mouseoutFn(t)}}},[a.loading||a.$slots.icon?s("w-icon",{directives:[{name:"show",rawName:"v-show",value:a.loading||!!a.$slots.icon,expression:"loading || !!$slots.icon"}],class:[a.prefix?a.prefix+"-button-icon":""],attrs:{color:a.iconColor,spin:a.loading}},[a._t("icon")],2):a._e(),a._v(" "),a.$slots.default?s("span",{class:(e={},e[a.prefixCls+"text"]=a.loading,e[a.prefix+"-button-text"]=a.prefix,e[a.prefixCls+"primary-text"]="primary"===a.type,e[a.prefixCls+"text-lg"]=a.loading&&"large"===a.size,e[a.prefixCls+"text-sm"]=a.loading&&"small"===a.size,e)},[a._t("default")],2):a._e()],1)},[],!1,null,null,null);l.options.__file="Button.vue";e.a=l.exports},191:function(t,e,a){"use strict";var i={name:"WInputTag",data:function(){return{inputValue:""}},model:{prop:"value",event:"model"},computed:{classList:function(){return[{"w-input-lg":"large"===this.size,"w-input-sm":"small"===this.size,"w-input-disabled":this.disabled}]},placeholderValue:function(){return this.placeholder},typeValue:function(){return this.type}},props:{placeholder:String,value:String,size:String,disabled:Boolean,type:{type:String,default:"text"},change:{type:Function,default:function(){}}},mounted:function(){this.setValue(this.value)},methods:{changeValue:function(t){var e=t.target.value;this.setValue(e),this.$emit("model",this.inputValue),this.$emit("change",this.inputValue,t),this.change(this.inputValue,t)},setValue:function(t){this.inputValue=t}},watch:{value:function(t){this.setValue(t)}}},s=a(1),n=Object(s.a)(i,function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{staticClass:"w-input",class:[t.classList],attrs:{type:t.typeValue,placeholder:t.placeholderValue},domProps:{value:t.inputValue},on:{input:function(e){t.changeValue(e)}}})},[],!1,null,null,null);n.options.__file="Input.vue";e.a=n.exports},218:function(t,e,a){},219:function(t,e,a){},232:function(t,e,a){"use strict";a(12),a(173);var i={name:"WButtonGroup",props:{prefix:String,className:String,on:{type:Number,default:0}},data:function(){return{name:"w-button-group",index:this.on}},mounted:function(){this.updateChild()},methods:{updateChild:function(){this.$children.forEach(function(t){t.updateIndex()})}},watch:{on:function(t){this.index=t,this.updateChild()}}},s=a(1),n=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:[this.name,this.prefix?this.prefix+"-button-group":"",this.className]},[this._t("default")],2)},[],!1,null,null,null);n.options.__file="ButtonGroup.vue";e.a=n.exports},256:function(t,e,a){"use strict";var i=a(218);a.n(i).a},257:function(t,e,a){"use strict";var i=a(219);a.n(i).a},277:function(t,e,a){"use strict";a.r(e);var i=a(177),s=a(232),n=a(191),r=(a(173),a(183)),l={name:"WPage",data:function(){return{current:1}},model:{prop:"value",event:"model"},props:{value:Number,total:{type:Number,default:50},simple:Boolean,size:String,midleSize:{type:Number,default:5},pageSize:{type:Number,default:10},change:{type:Function,default:r.a},showTotal:{type:Function,default:r.a},prevText:{type:String,default:"上一页"},nextText:{type:String,default:"下一页"}},computed:{isNormalMode:function(){return!this.simple},isSmallSize:function(){return this.isNormalMode&&"small"===this.size},totalNumber:function(){return this.total},pageNumber:function(){return Math.ceil(this.total/this.pageSize)},nextDisable:function(){return this.current>=this.pageNumber},prevDisable:function(){return this.current<2},midleSizeValue:function(){var t=this.midleSize%2==0?this.midleSize+1:this.midleSize;return t=Math.min(t,7),t=Math.max(t,3),t=Math.min(t,this.pageNumber)},midleNumber:function(){for(var t=[],e=Math.ceil((this.midleSizeValue-1)/2),a=Math.min(this.current>e?this.current-e:1,this.pageNumber-this.midleSizeValue+1);t.length<this.midleSizeValue;)t.push(a++);return t},itemEnd:function(){return this.pageSize*(this.current-1)+(Math.ceil(this.total/this.pageSize)===this.current?this.total%this.pageSize:this.pageSize)},totalText:function(){return this.showTotal(this.total,[1+this.pageSize*(this.current-1),this.itemEnd])}},mounted:function(){this.setNow(this.value)},methods:{setNow:function(t){this.current=Math.min(t||1,this.pageNumber),this.current=Math.max(this.current,1),this.$emit("model",this.current,this.midleSize),this.$emit("change",this.current,this.midleSize),this.change(this.current,this.midleSize)},nextPage:function(){this.setNow(++this.current)},prevPage:function(){this.setNow(--this.current)},simpleChange:function(t){this.setNow(t.target.value)}},components:{WButton:i.a,WButtonGroup:s.a,WInput:n.a},watch:{value:function(t){this.setNow(t)}}},o=a(1),u=Object(o.a)(l,function(){var t,e,a,i,s,n,r,l,o,u,c=this,v=c.$createElement,_=c._self._c||v;return c.isNormalMode?_("div",{staticClass:"w-page"},[c.totalText?_("span",{staticClass:"w-page-text"},[c._v(c._s(c.totalText))]):c._e(),c._v(" "),_("w-button",{class:["w-page-button w-page-prev",(t={},t["w-page-prev-sm"]=c.isSmallSize,t)],attrs:{size:c.size,disabled:c.prevDisable},on:{click:c.prevPage}},[c._v(c._s(c.prevText))]),c._v(" "),c.midleNumber[0]>1&&c.current>c.midleSizeValue-(c.midleSizeValue-1)/2?_("w-button",{class:["w-page-button",(e={},e["w-page-button-sm"]=c.isSmallSize,e),"w-page-first"],attrs:{size:c.size},nativeOn:{click:function(t){c.setNow(1)}}},[c._v("1")]):c._e(),c._v(" "),c.midleNumber[0]>2?_("div",{staticClass:"w-page-over",class:[(a={},a["w-page-over-sm"]=c.isSmallSize,a),"w-page-over-prev",(i={},i["w-page-over-prev-sm"]=c.isSmallSize,i)],on:{click:function(t){c.setNow(c.current-5)}}}):c._e(),c._v(" "),_("w-button-group",{class:["w-page-button-group"],attrs:{on:c.current}},c._l(c.midleNumber,function(t){return _("w-button",{key:t,class:["w-page-button",(e={},e["w-page-button-sm"]=c.isSmallSize,e)],attrs:{size:c.size},nativeOn:{click:function(e){c.setNow(t)}}},[c._v(c._s(t))]);var e})),c._v(" "),c.midleNumber[c.midleNumber.length-1]<c.pageNumber&&c.current<c.pageNumber-(c.midleSizeValue-1)/2-1?_("div",{staticClass:"w-page-over",class:[(s={},s["w-page-over-sm"]=c.isSmallSize,s),"w-page-over-next",(n={},n["w-page-over-next-sm"]=c.isSmallSize,n)],on:{click:function(t){c.setNow(c.current+5)}}}):c._e(),c._v(" "),c.midleNumber[c.midleNumber.length-1]<c.pageNumber&&c.current<c.pageNumber-(c.midleSizeValue-1)/2?_("w-button",{class:["w-page-button",(r={},r["w-page-button-sm"]=c.isSmallSize,r),"w-page-last"],attrs:{size:c.size},nativeOn:{click:function(t){c.setNow(c.pageNumber)}}},[c._v(c._s(c.pageNumber))]):c._e(),c._v(" "),_("w-button",{class:["w-page-button w-page-next",(l={},l["w-page-next-sm"]=c.isSmallSize,l)],attrs:{size:c.size,disabled:c.nextDisable},on:{click:c.nextPage}},[c._v(c._s(c.nextText))])],1):_("div",{staticClass:"w-page"},[_("a",{staticClass:"w-page-simple-button w-page-simple-prev",class:(o={},o["w-page-simple-button-disabled"]=c.prevDisable,o),attrs:{href:"javascript:;"},on:{click:function(t){c.setNow(c.current-1)}}},[_("i",{staticClass:"w-page-simple-arrow w-page-simple-arrow-prev"})]),c._v(" "),_("w-input",{staticClass:"w-page-now",attrs:{size:"small",value:String(c.current)},nativeOn:{keyup:function(t){if(!("button"in t)&&c._k(t.keyCode,"enter",13,t.key,"Enter"))return null;c.simpleChange(t)}}}),c._v(" "),_("i",{staticClass:"w-page-italic"},[c._v("/")]),c._v(" "),_("span",{staticClass:"w-page-total"},[c._v("5")]),c._v(" "),_("a",{staticClass:"w-page-simple-button w-page-simple-next",class:(u={},u["w-page-simple-button-disabled"]=c.nextDisable,u),attrs:{href:"javascript:;"},on:{click:function(t){c.setNow(c.current+1)}}},[_("i",{staticClass:"w-page-simple-arrow w-page-simple-arrow-next"})])],1)},[],!1,null,null,null);u.options.__file="Page.vue";var c=u.exports,v={name:"WPageJump",model:{prop:"value",event:"model"},props:{value:Number,prefix:{type:String,default:"跳转"},suffix:{type:String,default:"页"}},methods:{jumpPage:function(t){this.$emit("model",parseInt(t.target.value,2)),t.target.value=""}},components:{WInput:n.a}},_=(a(256),Object(o.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-page-jumper"},[a("span",{staticClass:"w-page-jumper-text"},[t._v(t._s(t.prefix))]),t._v(" "),a("w-input",{staticClass:"w-page-jumper-input",nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.jumpPage(e)}}}),t._v(" "),a("span",{staticClass:"w-page-jumper-text"},[t._v(t._s(t.suffix))])],1)},[],!1,null,"59c406d8",null));_.options.__file="PageJump.vue";var p=_.exports,h=a(236),d=a(197),m={data:function(){return{base:1,more:5,change:1,sizeData:4,jump:2,changeSize:"10",totalData:1,totalPageSize:20,totalAll:125,mini:2}},methods:{jumpPage:function(t){this.jump=parseInt(t.target.value),t.target.value=""}},components:{WPage:c,WPageJump:p,WSelect:h.a,WOption:d.a,WInput:n.a}},f=(a(257),Object(o.a)(m,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-page",{attrs:{total:50},model:{value:t.base,callback:function(e){t.base=e},expression:"base"}})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(3),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-page",{attrs:{total:100},model:{value:t.more,callback:function(e){t.more=e},expression:"more"}})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(4),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-page",{staticClass:"demo-page",attrs:{pageSize:Number(t.changeSize),total:100},model:{value:t.change,callback:function(e){t.change=e},expression:"change"}}),t._v(" "),a("w-select",{staticClass:"demo-select",attrs:{suffix:" 条/页"},model:{value:t.changeSize,callback:function(e){t.changeSize=e},expression:"changeSize"}},[a("w-option",{attrs:{value:"10"}},[t._v("10 条/页")]),t._v(" "),a("w-option",{attrs:{value:"20"}},[t._v("20 条/页")]),t._v(" "),a("w-option",{attrs:{value:"30"}},[t._v("30 条/页")]),t._v(" "),a("w-option",{attrs:{value:"40"}},[t._v("40 条/页")])],1)],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-page",{staticClass:"demo-page",attrs:{total:100},model:{value:t.jump,callback:function(e){t.jump=e},expression:"jump"}}),t._v(" "),a("w-page-jump",{model:{value:t.jump,callback:function(e){t.jump=e},expression:"jump"}})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(7),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("span",[t._v("正常")]),t._v(" "),a("w-page",{staticClass:"demo-page",attrs:{total:100},model:{value:t.sizeData,callback:function(e){t.sizeData=e},expression:"sizeData"}})],1),t._v(" "),a("br"),t._v(" "),a("div",[a("span",[t._v("小版")]),t._v(" "),a("w-page",{staticClass:"demo-page",attrs:{total:100,size:"small"},model:{value:t.sizeData,callback:function(e){t.sizeData=e},expression:"sizeData"}})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(8),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("span",[t._v("Total 85 items")]),t._v(" "),a("w-page",{staticClass:"demo-page",attrs:{total:85,pageSize:20}})],1),t._v(" "),a("br"),t._v(" "),a("div",[a("w-page",{staticClass:"demo-page",attrs:{total:t.totalAll,pageSize:t.totalPageSize,showTotal:function(t,e){return e[0]+"-"+e[1]+" of "+t+" items"}},model:{value:t.totalData,callback:function(e){t.totalData=e},expression:"totalData"}})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(9),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-page",{attrs:{prevText:"Previous",nextText:"Next"}})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(10),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-page",{attrs:{simple:""},model:{value:t.mini,callback:function(e){t.mini=e},expression:"mini"}})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"page-分页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page-分页","aria-hidden":"true"}},[this._v("#")]),this._v(" page 分页")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("采用分页的形式分隔长列表，每次只加载一个页面。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"基本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"更多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多","aria-hidden":"true"}},[this._v("#")]),this._v(" 更多")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"改变"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改变","aria-hidden":"true"}},[this._v("#")]),this._v(" 改变")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"跳转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跳转","aria-hidden":"true"}},[this._v("#")]),this._v(" 跳转")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("结合 "),e("code",[this._v("w-page-jump")]),this._v(" 组件使用效果更佳， "),e("code",[this._v("w-page-jump")]),this._v(" 只需 "),e("strong",[this._v("v-model")]),this._v(" 即可")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#大小","aria-hidden":"true"}},[this._v("#")]),this._v(" 大小")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总数","aria-hidden":"true"}},[this._v("#")]),this._v(" 总数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"上一步和下一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上一步和下一步","aria-hidden":"true"}},[this._v("#")]),this._v(" 上一步和下一步")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"简洁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简洁","aria-hidden":"true"}},[this._v("#")]),this._v(" 简洁")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"w-page-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#w-page-属性","aria-hidden":"true"}},[this._v("#")]),this._v(" w-page 属性")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必须")]),t._v(" "),a("th",[t._v("默认")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("total")]),t._v(" "),a("td",[t._v("数据总数")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("50")])]),t._v(" "),a("tr",[a("td",[t._v("simple")]),t._v(" "),a("td",[t._v("当添加该属性时，显示为简单分页")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("size")]),t._v(" "),a("td",[t._v("当为「small」时，是小尺寸分页")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("nextText")]),t._v(" "),a("td",[t._v("下一页文案")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("下一页")])]),t._v(" "),a("tr",[a("td",[t._v("prevText")]),t._v(" "),a("td",[t._v("上一页文案")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("上一页")])]),t._v(" "),a("tr",[a("td",[t._v("midleSize")]),t._v(" "),a("td",[t._v("数据过多的时候省略号中间的个数")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("pageSize")]),t._v(" "),a("td",[t._v("每页条数")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("改变的时候触发，返回 当前状态")]),t._v(" "),a("td",[t._v("Function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("() => {}")])]),t._v(" "),a("tr",[a("td",[t._v("showTotal")]),t._v(" "),a("td",[t._v("用于显示数据总量和当前数据顺序")]),t._v(" "),a("td",[t._v("Function(total, range)")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("() => {}")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"w-page-事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#w-page-事件","aria-hidden":"true"}},[this._v("#")]),this._v(" w-page 事件")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("改变的时候触发")]),t._v(" "),a("td",[t._v("当前状态")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"w-page-jump-属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#w-page-jump-属性","aria-hidden":"true"}},[this._v("#")]),this._v(" w-page-jump 属性")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必须")]),t._v(" "),a("th",[t._v("默认")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("prefix")]),t._v(" "),a("td",[t._v("前缀文案")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("跳转")])]),t._v(" "),a("tr",[a("td",[t._v("suffix")]),t._v(" "),a("td",[t._v("前缀文案")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("页")])])])])}],!1,null,null,null));f.options.__file="page.md";e.default=f.exports}}]);