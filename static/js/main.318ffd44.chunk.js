(this["webpackJsonpmirumodapon.github.io"]=this["webpackJsonpmirumodapon.github.io"]||[]).push([[0],{44:function(e,t,c){},45:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(12),s=c(7),i=c(2),r=c(17),o=c(10),l=c(31),j=c(32),d=(c(35),c(4)),u="add_option",b="init_ooption",h={options:[{label:"Home",url:"/"},{label:"About",url:"/about"},{label:"Works",url:"/works"},{label:"Tools",url:"/tools"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{options:t.payload});case b:return Object(d.a)(Object(d.a)({},e),{},{options:h.options});default:return e}},m=Object(o.combineReducers)({Navbar:O}),v=[j.a],x=Object(o.createStore)(m,{},Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,v))),f=(c(44),c(3)),p=(c(45),c(0));var g=function(e){var t=Object(a.useState)(!1),c=Object(f.a)(t,2),n=c[0],s=c[1];return Object(a.useEffect)((function(){e.callback(n)}),[]),Object(p.jsx)("button",{id:"__hamburger__",className:"".concat(e.className," __hamburger__"),onClick:function(t){var c;c=void 0!==e.active?e.active:n,s(!c),e.callback&&e.callback(!c)},children:void 0===e.active?Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("div",{className:"item".concat(n?" active":"")}),Object(p.jsx)("div",{className:"item".concat(n?" active":"")}),Object(p.jsx)("div",{className:"item".concat(n?" active":"")})]}):Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)("div",{className:"item".concat(e.active?" active":"")}),Object(p.jsx)("div",{className:"item".concat(e.active?" active":"")}),Object(p.jsx)("div",{className:"item".concat(e.active?" active":"")})]})})};c(47);var _=function(){var e=Object(a.useState)(!0),t=Object(f.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(!1),o=Object(f.a)(i,2),l=o[0],j=o[1];Object(a.useLayoutEffect)((function(){function e(){window.innerWidth<=600?n(!0):n(!1)}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var d=function(e){return j(!1)},u=Object(r.b)((function(e){return e.Navbar.options}));return Object(p.jsxs)("nav",{id:"navbar",children:[Object(p.jsx)(g,{className:"navbar__hamburger",callback:function(e){return j(e)},active:l}),Object(p.jsx)("ul",{className:"navbar__nav ".concat(!c||l?"show":""),children:u.map((function(e,t){return Object(p.jsx)("li",{className:"navbar__nav--item",children:Object(p.jsx)(s.b,{to:e.url,onClick:d,children:e.label})},t)}))})]})};c(49);var N=function(){return Object(p.jsxs)("header",{id:"header",children:[Object(p.jsx)("div",{className:"header__logo",children:Object(p.jsx)("span",{className:"header__logo--text",children:"Mirumo"})}),Object(p.jsx)(_,{})]})},w=c.p+"static/media/Icon.af44acbc.jpg";c(50);var k=function(){return Object(p.jsx)("main",{id:"home",children:Object(p.jsxs)("div",{className:"home__center",children:[Object(p.jsx)("div",{className:"home__center--icon",children:Object(p.jsx)("img",{src:w,alt:"icon"})}),Object(p.jsx)("h1",{children:"Welcome To Mirumo's Website"})]})})};c(51);var S=function(){return Object(p.jsx)("main",{id:"about",children:Object(p.jsxs)("div",{className:"about",children:[Object(p.jsxs)("div",{className:"about__left",children:[Object(p.jsx)("h2",{className:"about__left--name",children:"\u6797\u51a0\u6e1d"}),Object(p.jsxs)("ul",{className:"about__left--info",children:[Object(p.jsx)("li",{children:"Kuan-Yu Lin"}),Object(p.jsx)("li",{children:"UI/UX Learner"}),Object(p.jsx)("li",{children:"Full Stack Developer"}),Object(p.jsx)("li",{children:"NPTU Student, CS Major"})]}),Object(p.jsxs)("table",{className:"about__left--contact",children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Email"}),Object(p.jsx)("td",{children:": "}),Object(p.jsx)("td",{children:Object(p.jsx)("a",{href:"mailto:mail@mirumo.org",children:"mail@mirumo.org"})})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Telegram"}),Object(p.jsx)("td",{children:": "}),Object(p.jsx)("td",{href:"https://t.me/Mirumodapon",children:"@Mirumodapon"})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"Instagram"}),Object(p.jsx)("td",{children:": "}),Object(p.jsx)("td",{children:Object(p.jsx)("a",{href:"https://www.instagram.com/mirumo_0915/",children:"@mirumo_0915"})})]})]})]}),Object(p.jsx)("div",{className:"about__right",children:Object(p.jsx)("img",{src:w,alt:"icon"})})]})})};c(52);var z=function(e){var t=e.data;return Object(p.jsxs)("div",{className:"workcard",children:[Object(p.jsx)("h2",{className:"workcard__name",children:Object(p.jsx)("a",{href:t.html_url,children:t.name})}),Object(p.jsx)("p",{className:"workcard__description",children:t.description}),Object(p.jsxs)("span",{title:t.homepage,className:"workcard__homepage",children:[t.homepage?Object(p.jsx)(C,{}):"",Object(p.jsx)("a",{href:t.homepage,children:t.homepage})]}),Object(p.jsxs)("div",{className:"workcard__info",children:[Object(p.jsxs)("div",{className:"workcard__info--issue",title:"issue",children:[Object(p.jsx)(q,{})," ",t.open_issues]}),Object(p.jsxs)("div",{className:"workcard__info--fork",title:"fork",children:[Object(p.jsx)(M,{})," ",t.forks_count]}),Object(p.jsxs)("div",{className:"workcard__info--star",title:"star",children:[Object(p.jsx)(y,{})," ",t.stargazers_count]})]}),Object(p.jsx)("div",{className:"workcard__language",children:t.language})]})};function M(){return Object(p.jsx)("svg",{className:"octicon octicon-repo-forked",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})})}function y(){return Object(p.jsx)("svg",{className:"octicon octicon-star mr-1",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"})})}function q(){return Object(p.jsx)("svg",{className:"octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"})})}function C(){return Object(p.jsx)("svg",{className:"octicon octicon-link flex-shrink-0 mr-2",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","aria-hidden":"true",children:Object(p.jsx)("path",{fillRule:"evenodd",d:"M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"})})}c(53);var L=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://api.github.com/users/Mirumodapon/repos").then((function(e){return e.json()})).then((function(e){var t=[];e.forEach((function(e){var c=e.name,a=e.id,n=e.html_url,s=e.description,i=e.language,r=e.forks_count,o=e.open_issues,l=e.stargazers_count,j=e.homepage;t.push({name:c,id:a,html_url:n,description:s,language:i,forks_count:r,open_issues:o,stargazers_count:l,homepage:j})})),n(t)}))}),[]),Object(p.jsx)("main",{id:"works",children:Object(p.jsx)("div",{className:"works",children:c.map((function(e){return Object(p.jsx)(z,{data:e},e.id)}))})})};var E=function(){return new URLSearchParams(Object(i.f)().search)};c(54),c(55);var R=function(e){return Object(p.jsxs)("div",{id:e.id,className:"popup",style:{visibility:e.active?"visible":"hidden"},children:[Object(p.jsx)("div",{className:"popup-bg",onClick:function(){return e.close()}}),Object(p.jsx)("div",{className:"popup-container ".concat(e.className),style:e.style,children:e.children})]})};var F=function(){var e,t,c,n,s,i,r=E().get("t"),o=Object(a.useRef)(null),l=Object(a.useState)(r||"mirumo"),j=Object(f.a)(l,2),u=j[0],b=j[1],h=Object(a.useState)({}),O=Object(f.a)(h,2),m=O[0],v=O[1],x=Object(a.useState)(!1),g=Object(f.a)(x,2),_=g[0],N=g[1],w=window.innerWidth-5,k=window.innerHeight-75;function S(){var a=o.current,r=a.offsetHeight,l=a.offsetWidth;window.history.replaceState(null,null,"?t=".concat(encodeURI(u))),e=w/l,t=k/r,c=Math.min(e,t),n=Math.floor(30*c)+"px",s=Math.ceil(o.current.offsetHeight*c),i=Math.ceil(o.current.offsetWidth*c),v(Object(d.a)(Object(d.a)({},m),{},{paddingTop:Math.floor((k-s)/2)+"px",paddingBottom:Math.floor((k-s)/2)+"px",paddingLeft:Math.max(0,Math.floor((w-i)/2))+"px",paddingRight:Math.max(0,Math.floor((w-i)/2))+"px",width:i+"px",height:s+"px",top:Math.floor((k-s)/2)+"px",fontSize:n})),o.current.innerHTML=s+" "+window.innerHeight+" "+n}return Object(a.useEffect)((function(){S()}),[r,u]),Object(p.jsxs)(a.Fragment,{children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{id:"test",ref:o,children:u}),Object(p.jsx)("textarea",{id:"textarea",onChange:function(e){return b(e.target.value)},value:u,style:m,onLoad:S})]}),Object(p.jsx)(R,{className:"sm-setting",id:"sm-setting",close:function(){N(!1)},active:_,children:Object(p.jsxs)("div",{className:"sm-setting",children:["Font Family: ",Object(p.jsx)("input",{type:"text",onChange:function(e){v(Object(d.a)(Object(d.a)({},m),{},{fontFamily:e.target.value}))}}),"Color: ",Object(p.jsx)("input",{type:"text",onChange:function(e){v(Object(d.a)(Object(d.a)({},m),{},{color:e.target.value}))}}),"other: ",Object(p.jsx)("textarea",{onChange:function(e){try{v(Object(d.a)(Object(d.a)({},m),JSON.parse(e.target.value)))}catch(e){}}})]})}),Object(p.jsx)("button",{className:"sm-setting-btn",onClick:function(){N(!0)},children:Object(p.jsxs)("svg",{id:"Layer_1","enable-background":"new 0 0 512 512",height:"20",viewBox:"0 0 512 512",width:"20",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("path",{d:"m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"}),Object(p.jsx)("path",{d:"m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"})]})})]})},W=c(33),B=c.n(W);var H=function(){var e=Object(a.useState)(1e3),t=Object(f.a)(e,1)[0],c=Object(a.useState)("No Result"),n=Object(f.a)(c,2),s=n[0],i=n[1],r=Object(a.useState)(!1),o=Object(f.a)(r,2),l=o[0],j=o[1];return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(B.a,{className:"qrScanner",delay:t,onError:function(e){console.log(e)},onScan:function(e){if(e){i(e);j(!!/^(https)|(http)/.exec(e))}}}),Object(p.jsxs)("p",{className:"qrResult",children:[s,Object(p.jsx)("br",{}),l&&Object(p.jsx)("a",{href:s,children:"Go to Link"})]})]})},T=c(23),U=c.n(T);var A=function(){var e,t=Object(a.useState)("https://mirumo.org"),c=Object(f.a)(t,2),n=c[0],s=c[1],i=Object(a.useState)(!1),r=Object(f.a)(i,2),o=r[0],l=r[1],j=Object(a.useState)({inputValue:10,qrSize:80}),d=Object(f.a)(j,2),u=d[0],b=u.inputValue,h=u.qrSize,O=d[1],m=function(e){var t=b;(t+=e)>10&&(t=10),(t<0||!t)&&(t=0),O({inputValue:t,qrSize:5*t+30})};return Object(p.jsxs)(a.Fragment,{children:[Object(p.jsx)(U.a,{value:n,className:"qrgenetate",onClick:function(){return l(!0)}}),Object(p.jsx)("textarea",{value:n,onChange:function(e){s(e.target.value)},className:"qr-gen-set-vlaue"}),Object(p.jsxs)(R,{className:"qr-gen-setting",id:"qr-gen-setting",close:function(){return l(!1)},active:o,style:(e=h,{maxWidth:"".concat(e,"vh"),maxHeight:"".concat(e,"vw"),width:"".concat(e,"vw"),height:"".concat(e,"vh")}),children:[Object(p.jsx)(U.a,{value:n,className:"qrgenetate"}),Object(p.jsxs)("div",{className:"setqrsize",children:[Object(p.jsx)("button",{onClick:function(){return m(-1)},children:"<"}),Object(p.jsx)("input",{onChange:function(e){var t=e.target.value;t>10&&(t=10),(t<0||!t)&&(t=0),O({inputValue:e.target.value,qrSize:5*t+30})},type:"number",max:"10",value:b}),Object(p.jsx)("button",{onClick:function(){return m(1)},children:">"})]})]})]})};c(65);var I=function(){var e=Object(a.useState)(null),t=Object(f.a)(e,2),c=t[0],n=t[1],r=Object(i.f)(),o=Object(i.e)(r.pathname,"/tools/qr/:mode");return Object(a.useEffect)((function(){n(o?o.params.mode:"scan")}),[o]),Object(p.jsxs)(a.Fragment,{children:["scan"===c&&Object(p.jsx)(H,{}),"gen"===c&&Object(p.jsx)(A,{}),Object(p.jsxs)("div",{className:"qr-mode-btn",children:[Object(p.jsx)(s.b,{to:"/tools/qr/scan",className:"scan"===c?"active":"",children:"Scanner"}),Object(p.jsx)(s.b,{to:"/tools/qr/gen",className:"gen"===c?"active":"",children:"Genetate"})]})]})};var V=function(){return Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/tools/qr",component:I}),Object(p.jsx)(i.a,{path:"/tools/sm",component:F})]})};var J=function(){return Object(p.jsx)(r.a,{store:x,children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(N,{}),Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/",component:k,exact:!0}),Object(p.jsx)(i.a,{path:"/about",component:S}),Object(p.jsx)(i.a,{path:"/works",component:L}),Object(p.jsx)(i.a,{path:"/tools",component:V})]})]})})},D=document.getElementById("root");D.hasChildNodes()?Object(n.hydrate)(Object(p.jsx)(J,{}),D):Object(n.render)(Object(p.jsx)(J,{}),D)}},[[66,1,2]]]);
//# sourceMappingURL=main.318ffd44.chunk.js.map