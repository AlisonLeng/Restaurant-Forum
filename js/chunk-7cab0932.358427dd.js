(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cab0932"],{"0487":function(t,e,s){"use strict";s("b592")},"6fa7":function(t,e,s){"use strict";s("ffd3")},"9cab":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-5"},[s("NavTabs"),t.isLoading?s("Spinner"):[s("h1",{staticClass:"mt-5"},[t._v("最新動態")]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h3",[t._v("最新餐廳")]),s("NewestRestaurants",{attrs:{restaurants:t.restaurants}})],1),s("div",{staticClass:"col-md-6"},[s("h3",[t._v("最新評論")]),s("NewestComments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=s("1da1"),i=(s("96cf"),s("4de4"),s("d3b7"),s("8bb1")),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v(" 最新餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.restaurants,(function(e){return s("div",{key:e.id},[s("h4",[s("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[t._v(" "+t._s(e.name)+" ")]),s("small",[t._v(t._s(e.Category?e.Category.name:"未分類"))])],1),s("p",[t._v(t._s(e.description))]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),s("hr")])})),0)])},u=[],o=s("2708"),d={mixins:[o["c"]],props:{restaurants:{type:Array,required:!0}}},l=d,m=(s("0487"),s("2877")),v=Object(m["a"])(l,c,u,!1,null,"4992132e",null),f=v.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v(" 最新評論 ")]),s("div",{staticClass:"card-body"},t._l(t.comments,(function(e){return s("div",{key:e.id},[s("h4",[s("router-link",{attrs:{to:{name:"restaurant",params:{id:e.Restaurant.id}}}},[t._v(" "+t._s(e.Restaurant.name)+" ")])],1),s("p",[t._v(t._s(e.text))]),t._v("by "),s("a",{attrs:{href:"#"}},[t._v(" "+t._s(e.User.name)+" ")]),t._v(" "+t._s(t._f("fromNow")(e.User.createdAt))+" "),s("hr")])})),0)])},p=[],h={mixins:[o["c"]],props:{comments:{type:Array,required:!0}}},b=h,C=Object(m["a"])(b,_,p,!1,null,null,null),w=C.exports,y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner"},[s("div",{staticClass:"bouncing-loader"},[s("div"),s("div"),s("div")])])}],x=(s("6fa7"),{}),k=Object(m["a"])(x,y,g,!1,null,"1b8ef1c2",null),N=k.exports,R=s("c4c3"),j=s("2fa3"),E={name:"RestaurantFeeds",components:{NavTabs:i["a"],NewestRestaurants:f,NewestComments:w,Spinner:N},data:function(){return{restaurants:[],comments:[],isLoading:!0}},created:function(){this.fetchFeeds()},methods:{fetchFeeds:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,R["a"].getFeeds();case 4:s=e.sent,a=s.data,r=a.restaurants,n=a.comments,t.restaurants=r,t.comments=n.filter((function(t){return t.Restaurant&&t.text})),t.isLoading=!1,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),t.isLoading=!1,j["a"].fire({icon:"error",title:"無法取得最新動態，請稍後再試"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}},L=E,O=Object(m["a"])(L,a,r,!1,null,null,null);e["default"]=O.exports},b592:function(t,e,s){},ffd3:function(t,e,s){}}]);
//# sourceMappingURL=chunk-7cab0932.358427dd.js.map