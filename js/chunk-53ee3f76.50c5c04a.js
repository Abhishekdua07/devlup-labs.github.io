(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53ee3f76"],{"0e8f":function(t,n,a){"use strict";a("20f6");var r=a("e8f2");n["a"]=Object(r["a"])("flex")},"20f6":function(t,n,a){},a3fd:function(t,n,a){"use strict";a.r(n);var r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{align:"center",justify:"center"}},[t.loading?a("div",[a("Preloader")],1):a("div",[a("v-container",[a("v-row",{staticClass:"mt-9"},t._l(t.tutorials,(function(t){return a("v-flex",{key:t.name,staticClass:"mb-6",attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl4:""}},[a("VideoCard",{attrs:{tutorial:t}})],1)})),1),a("v-btn",{attrs:{color:"#1b65c4",dark:"",large:"",href:"https://www.youtube.com/channel/UCFaRxxB8-BB5GXH-wlwGqIw"}},[t._v("Our Channel")])],1)],1)])},e=[],i=(a("d3b7"),function(){return a.e("chunk-96876f46").then(a.bind(null,"829b"))}),o=function(){return a.e("chunk-3564c433").then(a.bind(null,"f152"))},s={name:"Videos",components:{VideoCard:i,Preloader:o},data:function(){return{loading:!0,tutorials:[]}},methods:{fetchTutorials:function(){var t=this;this.loading=!0,fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCFaRxxB8-BB5GXH-wlwGqIw").then((function(n){return n.json().then((function(n){return t.tutorials=n.items}))})).finally((function(){return t.loading=!1}))}},created:function(){this.fetchTutorials()}},c=s,u=a("2877"),d=a("6544"),l=a.n(d),f=a("8336"),p=a("a523"),h=a("0e8f"),v=a("0fd9"),b=Object(u["a"])(c,r,e,!1,null,null,null);n["default"]=b.exports;l()(b,{VBtn:f["a"],VContainer:p["a"],VFlex:h["a"],VRow:v["a"]})},a523:function(t,n,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85");var r=a("e8f2"),e=a("d9f7");n["a"]=Object(r["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var a,r=n.props,i=n.data,o=n.children,s=i.attrs;return s&&(i.attrs={},a=Object.keys(s).filter((function(t){if("slot"===t)return!1;var n=s[t];return t.startsWith("data-")?(i.attrs[t]=n,!1):n||"string"===typeof n}))),r.id&&(i.domProps=i.domProps||{},i.domProps.id=r.id),t(r.tag,Object(e["a"])(i,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(a||[])}),o)}})},e8f2:function(t,n,a){"use strict";a.d(n,"a",(function(){return e}));a("99af"),a("4de4"),a("a15b"),a("b64b"),a("2ca0"),a("498a");var r=a("2b0e");function e(t){return r["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,a){var r=a.props,e=a.data,i=a.children;e.staticClass="".concat(t," ").concat(e.staticClass||"").trim();var o=e.attrs;if(o){e.attrs={};var s=Object.keys(o).filter((function(t){if("slot"===t)return!1;var n=o[t];return t.startsWith("data-")?(e.attrs[t]=n,!1):n||"string"===typeof n}));s.length&&(e.staticClass+=" ".concat(s.join(" ")))}return r.id&&(e.domProps=e.domProps||{},e.domProps.id=r.id),n(r.tag,e,i)}})}}}]);
//# sourceMappingURL=chunk-53ee3f76.50c5c04a.js.map