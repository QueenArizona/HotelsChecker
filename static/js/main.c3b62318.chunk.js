(this.webpackJsonphotels=this.webpackJsonphotels||[]).push([[0],{36:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(19),r=a.n(c),s=(a(36),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))}),o=a(7),i=a(14),l=a(31),u=a(28),d=a(22),j=a(6),h="ADD_FAVORITE",p="REMOVE_FAVORITE",b="SELECT_SORT_ORDER",m={items:[],order:null};var O="HOTEL_LIST_REQUEST",f="HOTEL_LIST_SUCCESS",_="HOTEL_LIST_FAILURE",v="HOTEL_LIST_OPTIONS",g={loading:!1,error:null,data:[],options:null};var C=a(16),x="LOGIN_FIELD_CHANGE",w="LOGIN_USER",N="LOGOUT_USER",y={login:"",password:"",user:JSON.parse(localStorage.getItem("user"))};var L="SEARCH_FIELD_CHANGE",D="EARCH_FIELD_CLEAR",E={location:"",date:"",count:""};var M="ADD_ERROR ",S="REMOVE_ERROR",I={errors:[]};var k=a(13),R=a.n(k),A=a(23);function T(e){return{type:M,payload:{error:e}}}var F=R.a.mark(Z),Y=R.a.mark(U),H=R.a.mark(G);function B(e){var t=e.type;return t===L||t===x}function Z(e){return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(A.b)((a=e.payload.name,{type:S,payload:{error:a}}));case 2:case"end":return t.stop()}var a}),F)}function U(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.a)(1e3,B,Z);case 2:case"end":return e.stop()}}),Y)}function G(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(A.c)(U);case 2:case"end":return e.stop()}}),H)}var P=Object(i.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var a=t.payload,n=a.name,c=a.value;return Object(j.a)(Object(j.a)({},e),{},Object(C.a)({},n,c));case w:var r=t.payload.user;return localStorage.setItem("user",JSON.stringify(r)),Object(j.a)(Object(j.a)({},e),{},{login:"",password:"",user:r});case N:return localStorage.clear(),y;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:var a=t.payload,n=a.name,c=a.value;return Object(j.a)(Object(j.a)({},e),{},Object(C.a)({},n,c));case D:return E;default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(j.a)(Object(j.a)({},e),{},{errors:[].concat(Object(d.a)(e.errors),[t.payload.error])});case S:return Object(j.a)(Object(j.a)({},e),{},{errors:e.errors.filter((function(e){return e!==t.payload.error}))});default:return e}},hotels:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),{},{loading:!0,error:null,data:[]});case _:var a=t.payload.error;return Object(j.a)(Object(j.a)({},e),{},{loading:!1,data:[],error:a});case f:var n=t.payload.data;return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:null,data:n});case v:var c=t.payload.options;return Object(j.a)(Object(j.a)({},e),{},{options:c});default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var a=t.payload.item;return Object(j.a)(Object(j.a)({},e),{},{items:[].concat(Object(d.a)(e.items),[a])});case p:var n=t.payload.id;return Object(j.a)(Object(j.a)({},e),{},{items:e.items.filter((function(e){return e.hotelId!==n}))});case b:var c=t.payload.order;return Object(j.a)(Object(j.a)({},e),{},{order:c});default:return e}}}),V=Object(l.a)(),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,z=Object(i.d)(P,J(Object(i.a)(u.a,V)));V.run(G);var X=z,$=a(21),Q=a(8);a(43);var W=a(1);var q=function(e){var t=Object(o.c)((function(e){return e.login})),a=t.login,n=t.password,c=Object(o.c)((function(e){return e.errors})).errors,r=Object(o.b)(),s=Object(Q.f)(),i=function(e){var t,a;r((t=e.target.name,a=e.target.value,{type:x,payload:{name:t,value:a}}))};return Object(W.jsx)("div",{className:"login",children:Object(W.jsx)("div",{className:"container",children:Object(W.jsx)("div",{className:"login__inner",children:Object(W.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault();var t=function(e){return e.match(/^([A-Za-z0-9_\-])+\@([A-Za-z0-9])+\.([A-Za-z]{2,4})$/)}(a),c=function(e){return e.match(/^([^\u0410-\u042f\u0430-\u044f]{8,})$/)}(n);t||r(T("login")),c||r(T("password")),t&&c&&(r({type:w,payload:{user:{login:a,password:n}}}),s.push("/app"))},children:[Object(W.jsx)("h1",{className:"login__title",children:"Simple Hotel Check"}),Object(W.jsxs)("div",{className:"login__formfield ".concat(c.includes("login")?"login__formfield--error":""),children:[Object(W.jsx)("label",{className:"login__input-title",htmlFor:"login",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(W.jsx)("input",{className:"login__input",id:"login",type:"text",name:"login",autoComplete:"username",value:a,onChange:i}),Object(W.jsx)("p",{className:"login__message",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"})]}),Object(W.jsxs)("div",{className:"login__formfield ".concat(c.includes("password")?"login__formfield--error":""),children:[Object(W.jsx)("label",{className:"login__input-title",htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(W.jsx)("input",{className:"login__input",id:"password",type:"password",autoComplete:"current-password",name:"password",value:n,onChange:i}),Object(W.jsx)("p",{className:"login__message",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u043c\u0443\u043c 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432, \u0431\u0435\u0437 \u043a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u044b"})]}),Object(W.jsx)("button",{className:"login__btn",children:"\u0412\u043e\u0439\u0442\u0438"})]})})})})};function K(e){return{type:f,payload:{data:e}}}a(49);var ee=function(e){var t=Object(o.c)((function(e){return e.search})),a=t.location,n=t.date,c=t.count,r=Object(o.c)((function(e){return e.errors})).errors,s=Object(o.b)(),i=function(e){var t,a;s((t=e.target.name,a=e.target.value,{type:L,payload:{name:t,value:a}}))};return Object(W.jsxs)("form",{className:"search__form",onSubmit:function(e){e.preventDefault();var t=!!a.trim(),r=!!n&&new Date(n)>=new Date,o=!!c&&c>0;t||s(T("location")),r||s(T("date")),o||s(T("count")),t&&r&&o&&(s({type:v,payload:{options:{location:a,date:n,count:c}}}),s({type:D}))},children:[Object(W.jsxs)("div",{className:"search__formfield ".concat(r.includes("location")?"search__formfield--error":""),children:[Object(W.jsx)("label",{className:"search__input-title",htmlFor:"location",children:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f"}),Object(W.jsx)("input",{className:"search__input",id:"location",type:"text",name:"location",value:a,onChange:i}),Object(W.jsx)("p",{className:"search__message",children:"\u041b\u043e\u043a\u0430\u0446\u0438\u044f \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u043e\u0439"})]}),Object(W.jsxs)("div",{className:"search__formfield ".concat(r.includes("date")?"search__formfield--error":""),children:[Object(W.jsx)("label",{className:"search__input-title",htmlFor:"date",children:"\u0414\u0430\u0442\u0430 \u0437\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f"}),Object(W.jsx)("input",{className:"search__input",id:"date",type:"date",name:"date",value:n,onChange:i}),Object(W.jsx)("p",{className:"search__message",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u044f\u0449\u0443\u044e \u0434\u0430\u0442\u0443"})]}),Object(W.jsxs)("div",{className:"search__formfield ".concat(r.includes("count")?"search__formfield--error":""),children:[Object(W.jsx)("label",{className:"search__input-title",htmlFor:"count",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043d\u0435\u0439"}),Object(W.jsx)("input",{className:"search__input",id:"count",type:"number",name:"count",value:c,onChange:i}),Object(W.jsx)("p",{className:"search__message",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u0431\u043e\u043b\u044c\u0448\u0435 0"})]}),Object(W.jsx)("button",{className:"search__btn",children:"\u041d\u0430\u0439\u0442\u0438"})]})},te=a(17),ae=a.n(te);function ne(e){return{type:b,payload:{order:e}}}function ce(e,t){if(e>10&&e<15)return"hotel"===t?"\u043e\u0442\u0435\u043b\u0435\u0439":"\u0434\u043d\u0435\u0439";switch(e.toString().substring(e.length-1)){case"1":return"hotel"===t?"\u043e\u0442\u0435\u043b\u044c":"\u0434\u0435\u043d\u044c";case"2":case"3":case"4":return"hotel"===t?"\u043e\u0442\u0435\u043b\u044f":"\u0434\u043d\u044f";default:return"hotel"===t?"\u043e\u0442\u0435\u043b\u0435\u0439":"\u0434\u043d\u0435\u0439"}}var re=Object(W.jsx)("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsx)("path",{d:"M7.65972 2.0156C7.19345 3.13043 6.62605 4.48741 6.39853 5.03227C6.17242 5.57565 5.98141 6.02601 5.98141 6.02601C5.98141 6.02601 5.54884 6.06293 5.02358 6.10279C4.49972 6.14266 3.54329 6.21501 2.89865 6.26374C2.25401 6.31395 1.37202 6.38039 0.939452 6.41288C0.506883 6.44536 0.117851 6.47637 0.075718 6.4808L-0.00012207 6.48966L0.0686958 6.55906C0.10802 6.59597 0.540589 7.00203 1.02934 7.46125C1.51949 7.92047 2.16132 8.52144 2.45625 8.79756C4.23569 10.4661 4.64719 10.8515 4.66404 10.8648C4.68792 10.884 4.76797 10.5281 3.90283 14.2093C3.54329 15.739 3.25257 17 3.25257 17C3.25257 17 4.47304 16.2632 5.96034 15.3507C7.44625 14.4381 8.67233 13.6939 8.68497 13.6969C8.6962 13.6998 9.24394 14.0542 9.89981 14.4824C10.5571 14.9121 11.536 15.5515 12.0767 15.9044C12.6174 16.2573 13.2157 16.6486 13.4067 16.7726C13.5963 16.8981 13.762 17 13.762 17C13.762 17 13.7677 16.9749 13.762 16.9439C13.7536 16.8937 13.1848 14.1428 12.6722 11.6754C12.55 11.0818 12.4489 10.5857 12.4489 10.5724C12.4489 10.5532 13.3604 9.7411 16.658 6.81894C17.0204 6.49852 17.0246 6.49409 16.981 6.48375C16.9557 6.47785 15.5611 6.33019 13.8814 6.15447C12.2017 5.97876 10.8141 5.82963 10.7973 5.82224C10.7762 5.81338 10.7102 5.65834 10.5178 5.16368C10.3801 4.80635 9.93914 3.6679 9.53887 2.63282C9.1386 1.59773 8.74676 0.583316 8.66811 0.381023C8.58947 0.177255 8.52205 0.00744587 8.51644 6.29425e-05C8.51222 -0.0058434 8.126 0.900782 7.65972 2.0156Z",fill:"#CDBC1E"})}),se=Object(W.jsxs)("svg",{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(W.jsx)("path",{d:"M7.65972 2.0156C7.19345 3.13043 6.62605 4.48741 6.39853 5.03227C6.17242 5.57565 5.98141 6.02601 5.98141 6.02601C5.98141 6.02601 5.54884 6.06293 5.02358 6.10279C4.49972 6.14266 3.54329 6.21501 2.89865 6.26374C2.25401 6.31395 1.37202 6.38039 0.939452 6.41288C0.506883 6.44536 0.117851 6.47637 0.075718 6.4808L-0.00012207 6.48966L0.0686958 6.55906C0.10802 6.59597 0.540589 7.00203 1.02934 7.46125C1.51949 7.92047 2.16132 8.52144 2.45625 8.79756C4.23569 10.4661 4.64719 10.8515 4.66404 10.8648C4.68792 10.884 4.76797 10.5281 3.90283 14.2093C3.54329 15.739 3.25257 17 3.25257 17C3.25257 17 4.47304 16.2632 5.96034 15.3507C7.44625 14.4381 8.67233 13.6939 8.68497 13.6969C8.6962 13.6998 9.24394 14.0542 9.89981 14.4824C10.5571 14.9121 11.536 15.5515 12.0767 15.9044C12.6174 16.2573 13.2157 16.6486 13.4067 16.7726C13.5963 16.8981 13.762 17 13.762 17C13.762 17 13.7677 16.9749 13.762 16.9439C13.7536 16.8937 13.1848 14.1428 12.6722 11.6754C12.55 11.0818 12.4489 10.5857 12.4489 10.5724C12.4489 10.5532 13.3604 9.7411 16.658 6.81894C17.0204 6.49852 17.0246 6.49409 16.981 6.48375C16.9557 6.47785 15.5611 6.33019 13.8814 6.15447C12.2017 5.97876 10.8141 5.82963 10.7973 5.82224C10.7762 5.81338 10.7102 5.65834 10.5178 5.16368C10.3801 4.80635 9.93914 3.6679 9.53887 2.63282C9.1386 1.59773 8.74676 0.583316 8.66811 0.381023C8.58947 0.177255 8.52205 0.00744587 8.51644 6.29425e-05C8.51222 -0.0058434 8.126 0.900782 7.65972 2.0156Z",fill:"#6C6845"}),Object(W.jsx)("path",{d:"M7.65972 2.0156C7.19345 3.13043 6.62605 4.48741 6.39853 5.03227C6.17242 5.57565 5.98141 6.02601 5.98141 6.02601C5.98141 6.02601 5.54884 6.06293 5.02358 6.10279C4.49972 6.14266 3.54329 6.21501 2.89865 6.26374C2.25401 6.31395 1.37202 6.38039 0.939452 6.41288C0.506883 6.44536 0.117851 6.47637 0.075718 6.4808L-0.00012207 6.48966L0.0686958 6.55906C0.10802 6.59597 0.540589 7.00203 1.02934 7.46125C1.51949 7.92047 2.16132 8.52144 2.45625 8.79756C4.23569 10.4661 4.64719 10.8515 4.66404 10.8648C4.68792 10.884 4.76797 10.5281 3.90283 14.2093C3.54329 15.739 3.25257 17 3.25257 17C3.25257 17 4.47304 16.2632 5.96034 15.3507C7.44625 14.4381 8.67233 13.6939 8.68497 13.6969C8.6962 13.6998 9.24394 14.0542 9.89981 14.4824C10.5571 14.9121 11.536 15.5515 12.0767 15.9044C12.6174 16.2573 13.2157 16.6486 13.4067 16.7726C13.5963 16.8981 13.762 17 13.762 17C13.762 17 13.7677 16.9749 13.762 16.9439C13.7536 16.8937 13.1848 14.1428 12.6722 11.6754C12.55 11.0818 12.4489 10.5857 12.4489 10.5724C12.4489 10.5532 13.3604 9.7411 16.658 6.81894C17.0204 6.49852 17.0246 6.49409 16.981 6.48375C16.9557 6.47785 15.5611 6.33019 13.8814 6.15447C12.2017 5.97876 10.8141 5.82963 10.7973 5.82224C10.7762 5.81338 10.7102 5.65834 10.5178 5.16368C10.3801 4.80635 9.93914 3.6679 9.53887 2.63282C9.1386 1.59773 8.74676 0.583316 8.66811 0.381023C8.58947 0.177255 8.52205 0.00744587 8.51644 6.29425e-05C8.51222 -0.0058434 8.126 0.900782 7.65972 2.0156Z",fill:"white",fillOpacity:"0.6"})]}),oe=Object(W.jsx)("svg",{width:"11",height:"20",viewBox:"0 0 11 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsx)("path",{d:"M0.999878 1.33334L9.66654 10L0.999878 18.6667",stroke:"#A7A7A7",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})});a(51);var ie=function(e){var t=e.item,a=e.date,n=e.count,c=e.logo,r=Object(o.c)((function(e){return e.favorites})).items,s=Object(o.b)();return Object(W.jsxs)("li",{className:"hotel",children:[c&&Object(W.jsx)("div",{className:"hotel__logo"}),Object(W.jsxs)("div",{className:"hotel__wrapper",children:[Object(W.jsxs)("div",{className:"hotel__header",children:[Object(W.jsx)("h4",{className:"hotel__title",children:t.hotelName}),Object(W.jsx)("button",{className:"hotel__favorite-btn ".concat(r.filter((function(e){return e.hotelId===t.hotelId})).length?"hotel__favorite-btn--active":""),onClick:function(){var e;r.filter((function(e){return e.hotelId===t.hotelId})).length?s((e=t.hotelId,{type:p,payload:{id:e}})):s(function(e){return{type:h,payload:{item:e}}}(t))},children:Object(W.jsx)("svg",{width:"21",height:"18",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsx)("path",{d:"M19.3806 1.59133C18.8675 1.08683 18.2582 0.686629 17.5877 0.413583C16.9171 0.140537 16.1984 0 15.4726 0C14.7467 0 14.028 0.140537 13.3574 0.413583C12.6869 0.686629 12.0776 1.08683 11.5645 1.59133L10.4996 2.63785L9.4347 1.59133C8.39822 0.572757 6.99246 0.000527962 5.52667 0.000527973C4.06087 0.000527984 2.65511 0.572757 1.61864 1.59133C0.582163 2.6099 -0.000122059 3.99139 -0.00012207 5.43187C-0.000122081 6.87235 0.582163 8.25383 1.61864 9.2724L2.68355 10.3189L10.4996 18L18.3157 10.3189L19.3806 9.2724C19.8939 8.76814 20.3012 8.16942 20.579 7.51045C20.8569 6.85148 20.9999 6.14517 20.9999 5.43187C20.9999 4.71857 20.8569 4.01225 20.579 3.35328C20.3012 2.69431 19.8939 2.09559 19.3806 1.59133Z",fill:"currentColor"})})})]}),Object(W.jsxs)("div",{className:"hotel__info",children:[a," ",Object(W.jsx)("span",{className:"hotel__info-separator",children:"\u2014"})," ",n," ",ce(n,"days")]}),Object(W.jsxs)("div",{className:"hotel__footer",children:[Object(W.jsxs)("div",{className:"hotel__rating",children:[Array(t.stars).fill("").map((function(e,t){return Object(W.jsx)("div",{className:"rating",children:re},"a".concat(t))})),Array(5-t.stars).fill("").map((function(e,t){return Object(W.jsx)("div",{className:"rating",children:se},t)}))]}),Object(W.jsxs)("div",{className:"hotel__price",children:["Price:",Object(W.jsxs)("span",{className:"hotel__price-value",children:[t.priceAvg," \u20bd"]})]})]})]})]})};a(52);var le=function(e){var t=Object(o.c)((function(e){return e.favorites})),a=t.items,c=t.order,r=Object(o.c)((function(e){return e.hotels})).options,s=Object(o.b)(),i=Object(n.useMemo)((function(){return function(e,t){if(!t)return e;var a="price-up"===t||"price-down"===t?"priceAvg":"stars";return"price-up"===t||"rating-up"===t?e.sort((function(e,t){return e[a]>t[a]?1:e[a]<t[a]?-1:0})):e.sort((function(e,t){return e[a]<t[a]?1:e[a]>t[a]?-1:0})),console.log("sort"),e}(a,c)}),[a,c]);return Object(W.jsxs)("div",{className:"favorites",children:[Object(W.jsx)("h3",{className:"favorites__title",children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"}),a.length>0&&Object(W.jsx)("ul",{className:"favorites__sorting-list",children:[{order:"rating",name:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},{order:"price",name:"\u0426\u0435\u043d\u0430"}].map((function(e,t){return Object(W.jsxs)("li",{className:"favorites__sorting-item ".concat(c==="".concat(e.order,"-up")||c==="".concat(e.order,"-down")?"favorites__sorting-item--active":""),id:e.order,onClick:function(){return t=e.order,void(c==="".concat(t,"-up")||c==="".concat(t,"-down")?c==="".concat(t,"-up")?s(ne("".concat(t,"-down"))):s(ne("".concat(t,"-up"))):s(ne("".concat(t,"-down"))));var t},children:[Object(W.jsx)("p",{className:"favorites__sorting-name",children:e.name}),Object(W.jsxs)("div",{className:"favorites__sorting-action",children:[Object(W.jsx)("svg",{className:"favorites__sorting-arrow ".concat(c==="".concat(e.order,"-up")?"favorites__sorting-arrow--active":""),width:"9",height:"6",viewBox:"0 0 9 6",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsx)("path",{d:"M8.49988 4.24264L7.43922 5.3033L4.25724 2.12132L1.07526 5.3033L0.014596 4.24264L4.25724 0L8.49988 4.24264Z"})}),Object(W.jsx)("svg",{className:"favorites__sorting-arrow ".concat(c==="".concat(e.order,"-down")?"favorites__sorting-arrow--active":""),width:"9",height:"7",viewBox:"0 0 9 7",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsx)("path",{d:"M8.49988 1.83245L7.43922 0.77179L4.25724 3.95377L1.07526 0.77179L0.014596 1.83245L4.25724 6.07509L8.49988 1.83245Z"})})]})]},t)}))}),Object(W.jsx)("ul",{className:"favorites__list",children:a.length>0?i.map((function(e){return Object(W.jsx)(ie,{item:e,date:ae()(r?r.date:new Date).locale("en").format("DD MMMM, YYYY"),count:r?r.count:1},e.hotelId)})):Object(W.jsx)("p",{children:"\u0412 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u043d\u0435\u0442 \u043e\u0442\u0435\u043b\u0435\u0439"})})]})};var ue=function(e){return Object(W.jsxs)("aside",{className:"sidebar",children:[Object(W.jsx)(ee,{}),Object(W.jsx)(le,{})]})},de=(a(53),a(30)),je=a.p+"static/media/slide1.c6943c1a.jpg",he=a.p+"static/media/slide2.7b224b2b.jpg",pe=a.p+"static/media/slide3.5e4a257b.jpg";a(54);var be=function(e){return Object(W.jsx)("div",{className:"slider",children:[je,he,pe,je,he,pe].map((function(e,t){return Object(W.jsx)("div",{className:"slider__item",children:Object(W.jsx)("img",{className:"slider__icon",src:e,alt:"slide-img"})},t)}))})};var me=function(e){var t=Object(o.c)((function(e){return e.hotels})),a=t.data,c=t.options,r=Object(o.c)((function(e){return e.favorites})).items,s=Object(o.b)();return Object(n.useEffect)((function(){s(function(e){return function(){var t=Object(de.a)(R.a.mark((function t(a){var n,c,r,s,o;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:O}),t.prev=1,e?(n=new Date(e.date),(c=new Date).setDate(n.getDate()+Number(e.count)),r=e.location):(n=new Date,(c=new Date).setDate(n.getDate()+1),r="Moscow"),t.next=5,fetch("https://engine.hotellook.com/api/v2/cache.json?location=".concat(r,"&currency=rub&checkIn=").concat(n.getFullYear(),"-").concat(n.getMonth()+1>9?n.getMonth()+1:"0".concat(n.getMonth()+1),"-").concat(n.getDate()>9?n.getDate():"0".concat(n.getDate()),"&checkOut=").concat(c.getFullYear(),"-").concat(c.getMonth()+1>9?c.getMonth()+1:"0".concat(c.getMonth()+1),"-").concat(c.getDate()>9?c.getDate():"0".concat(c.getDate()),"&limit=10"));case 5:if((s=t.sent).ok){t.next=8;break}throw new Error(s.statusText);case 8:return t.next=10,s.json();case 10:(o=t.sent)&&a(K(o)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),a((i=t.t0.message,{type:_,payload:{error:i}}));case 17:case"end":return t.stop()}var i}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()}(c))}),[s,c]),Object(W.jsxs)("main",{className:"main",children:[Object(W.jsxs)("div",{className:"main__header",children:[Object(W.jsxs)("h3",{className:"main__title",children:["\u041e\u0442\u0435\u043b\u0438",Object(W.jsx)("span",{className:"main__title-separator",children:oe}),a.length>0?a[0].location.name:"\u041c\u043e\u0441\u043a\u0432\u0430"]}),Object(W.jsx)("p",{className:"main__date",children:ae()(c?c.date:new Date).locale("ru").format("DD MMMM YYYY")})]}),Object(W.jsx)(be,{}),Object(W.jsxs)("p",{className:"main__info",children:["\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435: ",Object(W.jsx)("strong",{children:r.length})," ",ce(r.length,"hotel")]}),Object(W.jsx)("ul",{className:"main__list",children:a.map((function(e){return Object(W.jsx)(ie,{item:e,date:ae()(c?c.date:new Date).locale("en").format("DD MMMM, YYYY"),count:c?c.count:1,logo:!0},e.hotelId)}))})]})};var Oe=function(e){var t=Object(o.c)((function(e){return e.login})).user,a=Object(o.b)(),c=Object(Q.f)();return Object(n.useEffect)((function(){t||c.push("/")}),[c,t]),Object(W.jsx)("div",{className:"app",children:Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{className:"app__inner",children:[Object(W.jsxs)("header",{className:"app__header",children:[Object(W.jsx)("h2",{className:"app__title",children:"Simple Hotel Check"}),Object(W.jsx)("button",{className:"app__logout-btn",onClick:function(e){a({type:N}),c.push("/")},children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(W.jsxs)("div",{className:"wrapper",children:[Object(W.jsx)(ue,{}),Object(W.jsx)(me,{})]})]})})})};a(55);var fe=function(){return Object(W.jsx)($.a,{children:Object(W.jsxs)(Q.c,{children:[Object(W.jsx)(Q.a,{path:"/app",component:Oe}),Object(W.jsx)(Q.a,{path:"/",component:q})]})})};r.a.render(Object(W.jsx)(o.a,{store:X,children:Object(W.jsx)(fe,{})}),document.getElementById("root")),s()}},[[56,1,2]]]);
//# sourceMappingURL=main.c3b62318.chunk.js.map