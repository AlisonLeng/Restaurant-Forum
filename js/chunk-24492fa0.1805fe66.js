(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24492fa0"],{6945:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("AdminRestaurantForm",{attrs:{"initial-restaurant":e.restaurant,"is-Processing":e.isProcessing},on:{"after-submit":e.handleAfterSubmit}})],1)},n=[],s=r("5530"),i=r("1da1"),o=(r("96cf"),r("d9e2"),r("b0c0"),r("a4d3"),r("e01a"),r("12b2")),c=r("be6c"),u=r("2fa3"),d={name:"AdminRestaurantEdit",components:{AdminRestaurantForm:o["a"]},data:function(){return{restaurant:{id:"-1",name:"",tel:"",address:"",openingHours:"",description:"",image:"",categoryId:""},isProcessing:!1}},created:function(){var e=this.$route.params.id;this.fetchRestaurant(e)},beforeRouteUpdate:function(e,t,r){var a=e.params.id;this.fetchRestaurant(a),r()},methods:{fetchRestaurant:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,i,o,d,f,l,p,m,g,b;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,c["a"].restaurants.getDetail({restaurantId:e});case 3:if(a=r.sent,n=a.data,"error"!==n.status){r.next=7;break}throw new Error(n.message);case 7:i=n.restaurant,o=i.id,d=i.name,f=i.tel,l=i.address,p=i.opening_hours,m=i.description,g=i.image,b=i.CategoryId,t.restaurant=Object(s["a"])(Object(s["a"])({},t.restaurant),{},{id:o,name:d,tel:f,address:l,openingHours:p,description:m,image:g,categoryId:b}),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.error(r.t0.message),u["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},handleAfterSubmit:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isProcessing=!0,r.next=4,c["a"].restaurants.update({restaurantId:t.restaurant.id,formData:e});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:t.$router.push({name:"admin-restaurants"}),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),t.isProcessing=!1,u["a"].fire({icon:"error",title:"無法更新餐廳資料，請稍後再試"});case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}},f=d,l=r("2877"),p=Object(l["a"])(f,a,n,!1,null,null,null);t["default"]=p.exports},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("e330"),o=r("1a2d"),c=r("1626"),u=r("3a9b"),d=r("577e"),f=r("9bf2").f,l=r("e893"),p=s.Symbol,m=p&&p.prototype;if(n&&c(p)&&(!("description"in m)||void 0!==p().description)){var g={},b=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),t=u(m,this)?new p(e):void 0===e?p():p(e);return""===e&&(g[t]=!0),t};l(b,p),b.prototype=m,m.constructor=b;var h="Symbol(test)"==String(p("test")),v=i(m.toString),w=i(m.valueOf),R=/^Symbol\((.*)\)[^)]+$/,y=i("".replace),k=i("".slice);f(m,"description",{configurable:!0,get:function(){var e=w(this),t=v(e);if(o(g,e))return"";var r=h?k(t,7,-1):y(t,R,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:b})}}}]);
//# sourceMappingURL=chunk-24492fa0.1805fe66.js.map