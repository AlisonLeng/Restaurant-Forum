(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c50812"],{"73a3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/restaurants/new"}},[t._v(" New Restaurant ")]),a("AdminRestaurantsTable")],1)},n=[],s=a("e04c"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.restaurants,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),a("td",[t._v(t._s(e.Category?e.Category.name:"未分類"))]),a("td",[t._v(t._s(e.name))]),a("td",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant",params:{id:e.id}}}},[t._v("Show")]),a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-restaurant-edit",params:{id:e.id}}}},[t._v("Edit")]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteRestaurant(e.id)}}},[t._v(" Delete ")])],1)])})),0)])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category")]),a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col",width:"300"}},[t._v("操作")])])])}],i=a("1da1"),o=(a("96cf"),a("d9e2"),a("4de4"),a("d3b7"),a("be6c")),l=a("2fa3"),d={data:function(){return{restaurants:[]}},created:function(){this.fetchRestaurants()},methods:{fetchRestaurants:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o["a"].restaurants.get();case 3:if(a=e.sent,r=a.data,"error"!==r.status){e.next=7;break}throw new Error(r.message);case 7:t.restaurants=r.restaurants,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),l["a"].fire({icon:"error",title:"無法取得餐廳，請稍後再試"});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()},deleteRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,o["a"].restaurants.delete({restaurantId:t});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.messahe);case 7:e.restaurants=e.restaurants.filter((function(e){return e.id!==t})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),l["a"].fire({icon:"error",title:"無法刪除餐廳，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},m=d,f=a("2877"),v=Object(f["a"])(m,c,u,!1,null,null,null),b=v.exports,p={name:"AdminRestaurants",components:{AdminNav:s["a"],AdminRestaurantsTable:b}},h=p,_=Object(f["a"])(h,r,n,!1,null,null,null);e["default"]=_.exports},be6c:function(t,e,a){"use strict";a("b0c0");var r=a("2fa3");e["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e))},update:function(t){var e=t.categoryId,a=t.name;return r["b"].put("admin/categories/".concat(e),{name:a})}},restaurants:{getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e))},get:function(){return r["b"].get("/admin/restaurants")},create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e)},delete:function(t){var e=t.restaurantId;return r["b"].delete("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,a=t.formData;return r["b"].put("/admin/restaurants/".concat(e),a)}}}},e04c:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),a("a",{attrs:{href:"#"}},[t._v("Users")])],1)},n=[],s={name:"AdminNav"},c=s,u=a("2877"),i=Object(u["a"])(c,r,n,!1,null,null,null);e["a"]=i.exports}}]);
//# sourceMappingURL=chunk-71c50812.7f3ffcf6.js.map