webpackJsonp([2],{578:function(t,e,i){function n(t){i(620)}var s=i(9)(i(597),i(632),n,"data-v-de0da82a",null);t.exports=s.exports},582:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i(63),s=i.n(n),o=i(56),a={computed:s()({},i.i(o.c)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}}},590:function(t,e,i){"use strict";function n(){var t=a()({},l.a,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,g_tk:1576475597,hostUin:0,platform:"yqq",needNewCode:0});return i.i(r.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.b)}function s(t){var e=a()({},l.a,{g_tk:1576475597,hostUin:0,platform:"yqq",needNewCode:0,order:"listen",begin:0,num:100,songstatus:1,singermid:t});return i.i(r.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,l.b)}e.b=n,e.a=s;var o=i(86),a=i.n(o),r=i(197),l=i(127)},597:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(63),s=i.n(n),o=i(590),a=i(202),r=i(622),l=i.n(r),A=i(56),c=i(582);e.default={mixins:[c.a],components:{MyPhoneList:l.a},data:function(){return{singers:[]}},props:{},watch:{},methods:s()({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.singerRef.style.bottom=e,this.$refs.listRef.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;i.i(o.b)().then(function(e){0===e.code&&(t.singers=t._formatSingers(e.data.list))})},_formatSingers:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,n){n<10&&e.hot.items.push(i.i(a.b)(t));var s=t.Findex;e[s]||(e[s]={title:s,items:[]}),e[s].items.push(i.i(a.b)(t))});var n=[],s=[];for(var o in e){var r=e[o];r.title.match(/[a-zA-Z]/)?s.push(r):"热门"===r.title&&n.push(r)}return s.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),n.concat(s)}},i.i(A.a)({setSinger:"SET_SINGER"})),created:function(){this._getSingerList()},mounted:function(){},destroyed:function(){}}},600:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(64),s=i.n(n),o=i(198),a=i.n(o),r=i(65);e.default={components:{MyScroll:s.a,MyLoading:a.a},data:function(){return{scrollY:-1,currentIndex:0,diff:-1}},props:{data:{type:Array,default:[]}},watch:{data:function(){var t=this;setTimeout(function(){t._caclHeight()},20)},scrollY:function(t){var e=this.leftListHeight;if(t>0)return void(this.currentIndex=0);for(var i=0;i<e.length-1;i++){var n=e[i],s=e[i+1];if(-t>=n&&-t<s)return this.currentIndex=i,void(this.diff=s+t)}this.currentIndex=e.length-2},diff:function(t){var e=t>0&&t<29?t-29:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fixedTitleRef.style.transform="translate3d(0, "+e+"px, 0)")}},methods:{refresh:function(){this.$refs.scrollRef.refresh()},selectItem:function(t){this.$emit("select",t)},onShortcutTouchstart:function(t){var e=t.touches[0];this.touch.y1=e.pageY;var i=r.c.customAttribute(t.target,"index");this.touch.nowIndex=i,this._scrollTo(i)},onShortcutTouchmove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var i=Math.floor((this.touch.y2-this.touch.y1)/18),n=Number(this.touch.nowIndex)+i;this._scrollTo(n)},scroll:function(t){this.scrollY=t.y},_scrollTo:function(t){t&&(t<0?t=0:t>this.leftListHeight.length-2&&(t=this.leftListHeight.length-2),this.currentIndex=Number(t),this.$refs.scrollRef.scrollToElement(this.$refs.leftRef[t],0))},_caclHeight:function(){var t=0;this.leftListHeight=[],this.leftListHeight.push(t);for(var e=this.$refs.leftRef,i=0;i<e.length;i++)t+=e[i].clientHeight,this.leftListHeight.push(t)}},computed:{shortcut:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},created:function(){this.touch={},this.listenScroll=!0,this.leftListHeight=[],this.probeType=3},mounted:function(){},destroyed:function(){}}},610:function(t,e,i){e=t.exports=i(571)(!0),e.push([t.i,".my-singer[data-v-de0da82a]{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["E:/git/vue/vue-music-webapp-master/src/components/MySinger/MySinger.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"MySinger.vue",sourcesContent:["\n.my-singer[data-v-de0da82a] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}\n"],sourceRoot:""}])},611:function(t,e,i){e=t.exports=i(571)(!0),e.push([t.i,".my-phone-list[data-v-e2edeeb2]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.my-phone-list .list-group[data-v-e2edeeb2]{padding-bottom:30px}.my-phone-list .list-group .list-group-title[data-v-e2edeeb2]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.my-phone-list .list-group .list-group-item[data-v-e2edeeb2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.my-phone-list .list-group .list-group-item .avatar[data-v-e2edeeb2]{width:50px;height:50px;border-radius:50%}.my-phone-list .list-group .list-group-item .name[data-v-e2edeeb2]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.my-phone-list .list-shortcut[data-v-e2edeeb2]{position:absolute;z-index:30;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.my-phone-list .list-shortcut .item[data-v-e2edeeb2]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.my-phone-list .list-shortcut .item.current[data-v-e2edeeb2]{color:#ffcd32}.my-phone-list .list-fixed[data-v-e2edeeb2]{position:absolute;top:-1px;left:0;width:100%}.my-phone-list .list-fixed .fixed-title[data-v-e2edeeb2]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.my-phone-list .loading-container[data-v-e2edeeb2]{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["E:/git/vue/vue-music-webapp-master/src/components/base/MyPhoneList/MyPhoneList.vue"],names:[],mappings:"AACA,gCACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,4CACI,mBAAqB,CACxB,AACD,8DACM,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAAgC,AAChC,eAAiB,CACtB,AACD,6DACM,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,qBAAuB,CAC5B,AACD,qEACQ,WAAY,AACZ,YAAa,AACb,iBAAmB,CAC1B,AACD,mEACQ,iBAAkB,AAClB,yBAAgC,AAChC,cAAgB,CACvB,AACD,+CACI,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,mCAAoC,AAC5B,2BAA4B,AACpC,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA+B,AAC/B,qBAAuB,CAC1B,AACD,qDACM,YAAa,AACb,cAAe,AACf,yBAAgC,AAChC,cAAgB,CACrB,AACD,6DACQ,aAAe,CACtB,AACD,4CACI,kBAAmB,AACnB,SAAU,AACV,OAAQ,AACR,UAAY,CACf,AACD,yDACM,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAAgC,AAChC,eAAiB,CACtB,AACD,mDACI,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACvC",file:"MyPhoneList.vue",sourcesContent:["\n.my-phone-list[data-v-e2edeeb2] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.my-phone-list .list-group[data-v-e2edeeb2] {\n    padding-bottom: 30px;\n}\n.my-phone-list .list-group .list-group-title[data-v-e2edeeb2] {\n      height: 30px;\n      line-height: 30px;\n      padding-left: 20px;\n      font-size: 12px;\n      color: rgba(255, 255, 255, 0.5);\n      background: #333;\n}\n.my-phone-list .list-group .list-group-item[data-v-e2edeeb2] {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 20px 0 0 30px;\n}\n.my-phone-list .list-group .list-group-item .avatar[data-v-e2edeeb2] {\n        width: 50px;\n        height: 50px;\n        border-radius: 50%;\n}\n.my-phone-list .list-group .list-group-item .name[data-v-e2edeeb2] {\n        margin-left: 20px;\n        color: rgba(255, 255, 255, 0.5);\n        font-size: 14px;\n}\n.my-phone-list .list-shortcut[data-v-e2edeeb2] {\n    position: absolute;\n    z-index: 30;\n    right: 0;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    width: 20px;\n    padding: 20px 0;\n    border-radius: 10px;\n    text-align: center;\n    background: rgba(0, 0, 0, 0.3);\n    font-family: Helvetica;\n}\n.my-phone-list .list-shortcut .item[data-v-e2edeeb2] {\n      padding: 3px;\n      line-height: 1;\n      color: rgba(255, 255, 255, 0.5);\n      font-size: 12px;\n}\n.my-phone-list .list-shortcut .item.current[data-v-e2edeeb2] {\n        color: #ffcd32;\n}\n.my-phone-list .list-fixed[data-v-e2edeeb2] {\n    position: absolute;\n    top: -1px;\n    left: 0;\n    width: 100%;\n}\n.my-phone-list .list-fixed .fixed-title[data-v-e2edeeb2] {\n      height: 30px;\n      line-height: 30px;\n      padding-left: 20px;\n      font-size: 12px;\n      color: rgba(255, 255, 255, 0.5);\n      background: #333;\n}\n.my-phone-list .loading-container[data-v-e2edeeb2] {\n    position: absolute;\n    width: 100%;\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n"],sourceRoot:""}])},620:function(t,e,i){var n=i(610);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(572)("15453e0e",n,!0,{})},621:function(t,e,i){var n=i(611);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(572)("7199d290",n,!0,{})},622:function(t,e,i){function n(t){i(621)}var s=i(9)(i(600),i(633),n,"data-v-e2edeeb2",null);t.exports=s.exports},632:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"singerRef",staticClass:"my-singer"},[i("my-phone-list",{ref:"listRef",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),i("router-view")],1)},staticRenderFns:[]}},633:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("my-scroll",{ref:"scrollRef",staticClass:"my-phone-list",attrs:{data:t.data,probeType:t.probeType,"listen-scroll":t.listenScroll},on:{scroll:t.scroll}},[i("ul",t._l(t.data,function(e){return i("li",{ref:"leftRef",refInFor:!0,staticClass:"list-group"},[i("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),i("ul",t._l(e.items,function(e){return i("li",{staticClass:"list-group-item",on:{click:function(i){t.selectItem(e)}}},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar"}),t._v(" "),i("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])})),t._v(" "),i("div",{staticClass:"list-shortcut",on:{touchstart:t.onShortcutTouchstart,touchmove:function(e){return e.stopPropagation(),e.preventDefault(),t.onShortcutTouchmove(e)}}},[i("ul",t._l(t.shortcut,function(e,n){return i("li",{staticClass:"item",class:{current:t.currentIndex===n},attrs:{"data-index":n}},[t._v(t._s(e))])}))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixedTitleRef",staticClass:"list-fixed"},[i("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.data.length,expression:"!data.length"}],staticClass:"loading-container"},[i("my-loading")],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=2.c1a6e2de59391be3e7d7.js.map