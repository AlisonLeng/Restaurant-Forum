(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2357"],{"22ab":function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},e._l(e.users,(function(e){return r("UserTopCards",{key:e.id,attrs:{"initial-user":e}})})),1)],1)},n=[],a=r("1da1"),o=(r("96cf"),r("8bb1")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-3"},[e._m(0),r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(e.user.FollowerCount))]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.unFollowUser(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.followUser(e.user.id)}}},[e._v(" 追蹤 ")])])])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"#"}},[r("img",{attrs:{src:"http://via.placeholder.com/300x300?text=No+Image",width:"140px",height:"140px"}})])}],i=r("5530"),l=(r("d9e2"),r("4cce")),p=r("2fa3"),f={props:{initialUser:{type:Object,required:!0}},data:function(){return{user:this.initialUser}},methods:{followUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].followUser({userId:e});case 3:if(s=r.sent,n=s.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:t.user=Object(i["a"])(Object(i["a"])({},t.user),{},{FollowerCount:t.user.FollowerCount+1,isFollowed:!0}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),p["default"].fire({icon:"error",title:"無法追蹤使用者，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()},unFollowUser:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var s,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,l["a"].unFollowUser({userId:e});case 3:if(s=r.sent,n=s.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:t.user=Object(i["a"])(Object(i["a"])({},t.user),{},{FollowerCount:t.user.FollowerCount-1,isFollowed:!1}),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),p["default"].fire({icon:"error",title:"無法取消追蹤使用者，請稍後再試"});case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}}},d=f,w=r("2877"),h=Object(w["a"])(d,c,u,!1,null,null,null),b=h.exports,v={components:{NavTabs:o["a"],UserTopCards:b},data:function(){return{users:[]}},methods:{fetchUsers:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l["a"].getTopUsers();case 3:r=t.sent,s=r.data,e.users=s.users,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),p["a"].fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},created:function(){this.fetchUsers()}},m=v,x=Object(w["a"])(m,s,n,!1,null,null,null);t["default"]=x.exports}}]);
//# sourceMappingURL=chunk-2d0b2357.f88a47cb.js.map