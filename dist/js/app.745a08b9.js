(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,m=[];u<o.length;u++)r=o[u],n[r]&&m.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vueGram/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"14d4":function(e,t,s){e.exports=s.p+"img/vue_gram_logo_cp.6eb5553c.png"},"2eb7":function(e,t,s){"use strict";var a=s("fc57"),n=s.n(a);n.a},"32a8":function(e,t,s){"use strict";var a=s("bdd9"),n=s.n(a);n.a},4452:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"app-phone"},[a("div",{staticClass:"phone-header"},[a("img",{attrs:{src:s("14d4"),alt:""}}),2==e.step||3==e.step?a("a",{staticClass:"cancel-cta",on:{click:function(t){e.step--}}},[e._v("Cancel")]):e._e(),2==e.step?a("a",{staticClass:"next-cta",on:{click:function(t){e.step++}}},[e._v("Next")]):e._e(),3==e.step?a("a",{staticClass:"next-cta",on:{click:e.shareFun}},[e._v("Share")]):e._e()]),a("app-body",{attrs:{filters:e.filters,posts:e.posts,step:e.step,image:e.image,selectedFilter:e.selectedFilter},model:{value:e.caption,callback:function(t){e.caption=t},expression:"caption"}}),a("div",{staticClass:"phone-footer"},[a("div",{staticClass:"home-cta"},[a("i",{staticClass:"fas fa-home fa-lg",on:{click:e.goHome}})]),a("div",{staticClass:"upload-cta"},[a("input",{attrs:{type:"file",name:"file",id:"upload"},on:{change:e.uploadFun}}),e._m(0)])])],1)])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{attrs:{for:"upload"}},[s("i",{staticClass:"fas fa-plus-square fa-lg"})])}],r=[{name:"normal"},{name:"clarendon"},{name:"gingham"},{name:"moon"},{name:"lark"},{name:"reyes"},{name:"juno"},{name:"slumber"},{name:"aden"},{name:"perpetua"},{name:"mayfair"},{name:"rise"},{name:"hudson"},{name:"valencia"},{name:"xpro2"},{name:"willow"},{name:"lofi"},{name:"inkwell"},{name:"nashville"}],o=[{username:"liuluwei",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",likes:36,hasBeenLiked:!1,caption:"When you're ready for summer '18 ☀️",filter:"perpetua"},{username:"cc",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",likes:20,hasBeenLiked:!1,caption:"Views from the six...",filter:"clarendon"},{username:"ice",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,hasBeenLiked:!1,caption:"Current mood 🐶",filter:"lofi"},{username:"ice",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",likes:49,hasBeenLiked:!1,caption:"Current mood 🐶",filter:"lofi"}],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"phone-body"},[1===e.step?s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"feed"},e._l(e.posts,function(e,t){return s("app-post",{key:t,attrs:{post:e}})}),1):e._e(),2===e.step?s("div",[s("div",{staticClass:"selected-image",class:e.selectedFilter,style:{backgroundImage:"url("+e.image+")"}}),s("div",{directives:[{name:"dragscroll",rawName:"v-dragscroll"}],staticClass:"filter-container"},e._l(e.filters,function(t,a){return s("app-filter",{key:a,attrs:{image:e.image,filter:t}})}),1)]):e._e(),3===e.step?s("div",[s("div",{staticClass:"selected-image",class:e.selectedFilter,style:{backgroundImage:"url("+e.image+")"}}),s("div",{staticClass:"caption-container"},[s("textarea",{attrs:{placeholder:"Write a caption..."},domProps:{value:e.value},on:{input:e.inputText}})])]):e._e()])},c=[],p=(s("c5f6"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vuegram-post"},[s("div",{staticClass:"header level"},[s("div",{staticClass:"level-left"},[s("div",{staticClass:"image is-32x32"},[s("img",{attrs:{src:e.post.userImage}})]),s("span",{staticClass:"username"},[e._v(e._s(e.post.username))])])]),s("div",{staticClass:"image-container",class:e.post.filter,style:{backgroundImage:"url("+e.post.postImage+")"},on:{dblclick:e.likeFun}}),s("div",{staticClass:"content"},[s("div",[s("i",{staticClass:"far fa-heart",class:{fas:e.post.hasBeenLiked},on:{click:e.likeFun}})]),s("div",{staticClass:"likes"},[e._v(e._s(e.post.likes)+" likes")]),s("div",{staticClass:"caption"},[s("span",[e._v(e._s(e.post.username))]),e._v("\n      "+e._s(e.post.caption)+"\n    ")])])])}),u=[],m={name:"appPost",props:{post:Object},methods:{likeFun:function(){this.post.hasBeenLiked?this.post.likes--:this.post.likes++,this.post.hasBeenLiked=!this.post.hasBeenLiked}}},d=m,f=(s("a2a1"),s("2877")),g=Object(f["a"])(d,p,u,!1,null,null,null),h=g.exports,v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"filter-type"},[s("p",[e._v(e._s(e.filter.name))]),s("div",{staticClass:"img",class:e.filter.name,style:{backgroundImage:"url("+e.image+")"},on:{click:e.selectFilter}})])},_=[],b=(s("7f7f"),new a["a"]),k={name:"appFilter",props:{filter:Object,image:String},methods:{selectFilter:function(){b.$emit("selectFilterApp",this.filter.name)}}},w=k,y=(s("bf76"),Object(f["a"])(w,v,_,!1,null,null,null)),C=y.exports,j={name:"appBody",props:{posts:Array,filters:Array,image:String,step:Number,selectedFilter:String,value:String},components:{appPost:h,appFilter:C},methods:{inputText:function(e){this.$emit("input",e.target.value)}}},F=j,x=(s("2eb7"),Object(f["a"])(F,l,c,!1,null,null,null)),I=x.exports,O={name:"app",data:function(){return{posts:o,filters:r,step:1,image:"",selectedFilter:"",caption:""}},created:function(){var e=this;b.$on("selectFilterApp",function(t){e.selectedFilter=t})},components:{appBody:I},methods:{goHome:function(){this.step=1},uploadFun:function(e){var t=this,s=e.target.files;if(s.length){var a=new FileReader;a.readAsDataURL(s[0]),a.onload=function(e){t.image=e.target.result,t.step=2}}},shareFun:function(){var e={username:"Eynus",userImage:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",postImage:this.image,likes:0,hasBeenLiked:!1,caption:this.caption,filter:this.selectedFilter};this.posts.unshift(e),this.caption="",this.goHome()}}},B=O,L=(s("32a8"),Object(f["a"])(B,n,i,!1,null,null,null)),S=L.exports,z=s("5b6c"),P=s.n(z);a["a"].use(P.a),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(S)}}).$mount("#app")},"5d0a":function(e,t,s){},a2a1:function(e,t,s){"use strict";var a=s("5d0a"),n=s.n(a);n.a},bdd9:function(e,t,s){},bf76:function(e,t,s){"use strict";var a=s("4452"),n=s.n(a);n.a},fc57:function(e,t,s){}});
//# sourceMappingURL=app.745a08b9.js.map