(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-615af780"],{"348f":function(t,e,r){"use strict";r("87ac")},"50c1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div")},n=[]},"5ce0":function(t,e,r){"use strict";r("cab1")},"66f1":function(t,e,r){"use strict";r("ac2f")},"87ac":function(t,e,r){},"8fce":function(t,e,r){"use strict";var a=r("f140"),n=r.n(a);e["default"]=n.a},ac2f:function(t,e,r){},ad68:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComment}}),r("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})],1)},n=[],s=r("1da1"),i=r("5530"),o=(r("96cf"),r("d9e2"),r("b0c0"),r("a4d3"),r("e01a"),r("4de4"),r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:"https://loremflickr.com/320/240/food,dessert,restaurant/"}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.unLike(t.restaurant.id)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.like(t.restaurant.id)}}},[t._v(" Like ")])],1)])}),c=[],u=r("4cce"),l=r("2fa3"),m={name:"RestaurantDetail",props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant}},watch:{initialRestaurant:function(t){this.restaurant=Object(i["a"])(Object(i["a"])({},this.restaurant),t)}},methods:{addFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].addFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!0}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},removeFavorite:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].deleteFavorite({restaurantId:t});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isFavorited:!1}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法將餐廳從最愛中移除，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},like:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].addLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!0}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法對餐廳按讚，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},unLike:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].deleteLike({restaurantId:t});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurant=Object(i["a"])(Object(i["a"])({},e.restaurant),{},{isLiked:!1}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),l["a"].fire({icon:"error",title:"無法對餐廳移除按讚，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},d=m,f=(r("5ce0"),r("2877")),p=Object(f["a"])(d,o,c,!1,null,"12e72ab4",null),b=p.exports,v=r("afb6"),h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit"}},[t._v("Submit")])])])},g=[],x=(r("a9e3"),{createComments:function(t){var e=t.restaurantId,r=t.text;return l["b"].post("/comments",{restaurantId:e,text:r})},deleteComments:function(t){var e=t.commentId;return l["b"].delete("/comments/".concat(e))}}),k={name:"CreateComment",props:{restaurantId:{type:Number,requires:!0}},data:function(){return{text:""}},methods:{handleSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.text){e.next=4;break}return l["a"].fire({icon:"warning",title:"您尚未填寫任何評論"}),e.abrupt("return");case 4:return e.next=6,x.createComments({restaurantId:t.restaurantId,text:t.text});case 6:if(r=e.sent,a=r.data,"error"!==a.status){e.next=10;break}throw new Error(a.message);case 10:t.$emit("after-create-comment",{commentId:a.commentId,restaurantId:t.restaurantId,text:t.text}),t.text="",e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),l["a"].fire({icon:"error",title:"無法新增評論，請稍後再試"});case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}},w=k,C=Object(f["a"])(w,h,g,!1,null,null,null),_=C.exports,y=r("c4c3"),R=r("2f62"),O={name:"Restaurant",components:{RestaurantDetail:b,RestaurantComments:v["default"],CreateComment:_},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[]}},computed:Object(i["a"])({},Object(R["b"])(["currentUser"])),beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},methods:{fetchRestaurant:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n,s,i,o,c,u,m,d,f,p,b,v,h;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,y["a"].getRestaurant({restaurantId:t});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:s=n.restaurant,i=n.isFavorited,o=n.isLiked,c=s.id,u=s.name,m=s.Category,d=s.image,f=s.opening_hours,p=s.tel,b=s.address,v=s.description,h=s.Comments,e.restaurant={id:c,name:u,categoryName:m?m.name:"未分類",image:d,openingHours:f,tel:p,address:b,description:v,isFavorited:i,isLiked:o},e.restaurantComments=h,r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),console.log(r.t0),l["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))()},afterDeleteComment:function(t){console.log("afterDeleteComment",t),this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},afterCreateComment:function(t){console.log("payload",t);var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,User:{id:this.currentUser.id,name:this.currentUser.name},text:a,createdAt:new Date})}}},j=O,I=Object(f["a"])(j,a,n,!1,null,null,null);e["default"]=I.exports},afb6:function(t,e,r){"use strict";var a=r("50c1"),n=r("8fce"),s=(r("66f1"),r("348f"),r("2877")),i=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"67052310",null);e["default"]=i.exports},cab1:function(t,e,r){},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("e330"),o=r("1a2d"),c=r("1626"),u=r("3a9b"),l=r("577e"),m=r("9bf2").f,d=r("e893"),f=s.Symbol,p=f&&f.prototype;if(n&&c(f)&&(!("description"in p)||void 0!==f().description)){var b={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(p,this)?new f(t):void 0===t?f():f(t);return""===t&&(b[e]=!0),e};d(v,f),v.prototype=p,p.constructor=v;var h="Symbol(test)"==String(f("test")),g=i(p.toString),x=i(p.valueOf),k=/^Symbol\((.*)\)[^)]+$/,w=i("".replace),C=i("".slice);m(p,"description",{configurable:!0,get:function(){var t=x(this),e=g(t);if(o(b,t))return"";var r=h?C(e,7,-1):w(e,k,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:v})}},f140:function(t,e){}}]);
//# sourceMappingURL=chunk-615af780.ffd11969.js.map