(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(7),l=n.n(i),r=(n(13),n(4)),s=n(2),o=n(8),d=(n(14),n(0));var u=function(e){return"btn-line"===e.flair?Object(d.jsxs)("button",{type:e.type,id:e.id,className:"btn "+e.size+" "+e.color+" btn-nodrop btn-line",onClick:e.trigger,children:[Object(d.jsx)("span",{children:e.text}),Object(d.jsx)("div",{className:e.className})]}):void 0===e.icon?Object(d.jsx)("button",{type:e.type,id:e.id,className:"btn "+e.size+" "+e.color+" "+e.flair,onClick:e.trigger,children:Object(d.jsx)("span",{children:e.text})}):Object(d.jsxs)("button",{type:e.type,id:e.id,className:"btn "+e.size+" "+e.color+" "+e.flair,onClick:e.trigger,children:[Object(d.jsx)("i",{className:"material-icons material-icons-outlined",children:e.icon}),Object(d.jsx)("span",{children:e.text})]})};var j=function(e){return void 0==typeof e.id?"Loading...":Object(d.jsxs)("li",{id:e.id,className:"active"===e.status?"todo-row unfinished":"todo-row complete",children:[Object(d.jsx)("input",{type:"checkbox",onChange:function(){e.handleStatus(e.id)},defaultChecked:"active"!==e.status}),Object(d.jsx)("label",{children:e.text}),Object(d.jsx)("div",{className:"complete"===e.currentGroup?"":"hidden",children:Object(d.jsx)(u,{size:"btn-sm",trigger:function(){e.handleDelete(e.id)},icon:"delete",flair:"btn-nodrop",text:""})})]})};n(16);var b=function(e){return Object(d.jsx)("input",{className:"input-box "+e.className,placeholder:e.placeholder,onChange:e.trigger,value:e.value,autoComplete:"off"})};n(17);var h=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1];return Object(d.jsxs)("form",{className:"complete"!==e.currentGroup?"new-todo":"new-todo hidden",onSubmit:function(t){t.preventDefault(),""!==a&&(e.handleSubmit(a),i(""))},children:[Object(d.jsx)(b,{className:"new-todo",placeholder:"add details",trigger:function(e){i(e.target.value)},value:a}),Object(d.jsx)(u,{type:"submit",size:"btn-md",color:"btn-blue",text:"Add"})]})};n(18);var p=function(e){var t=e.masterList.map((function(t){return t.ID>=0?Object(d.jsx)(j,{handleStatus:e.handleStatus,handleDelete:e.handleDelete,currentGroup:e.currentGroup,id:t.ID,text:t.text,status:t.status},t.ID):Object(d.jsx)("li",{className:"hidden"},t.ID)}));return Object(d.jsxs)("div",{className:"list",children:[Object(d.jsx)(h,{currentGroup:e.currentGroup,handleSubmit:e.addToDo}),Object(d.jsx)("ul",{children:t})]})},f=(n(19),"all");var m=function(e){var t=Object(c.useState)(f),n=Object(s.a)(t,2),a=(n[0],n[1]);return Object(d.jsxs)("form",{className:"label-bar",onSubmit:function(t){t.preventDefault(),e.setFilter(f),a(f)},children:[Object(d.jsx)(u,{type:"submit",flair:"btn-line",className:"all"===f?"active":"transparent",trigger:function(){return f="all"},text:"All"}),Object(d.jsx)(u,{type:"submit",flair:"btn-line",className:"active"===f?"active":"transparent",trigger:function(){return f="active"},text:"Active"}),Object(d.jsx)(u,{type:"submit",flair:"btn-line",className:"complete"===f?"active":"transparent",trigger:function(){return f="complete"},text:"Completed"})]})},x=(n(20),function e(t,n){Object(o.a)(this,e),this.ID=t,this.text=n,this.status="active"}),O=new x(-1,"Placeholder Plan"),v=new x(-2,"Placeholder Plan");v.status="complete";var g=0,N=[],S=[],D="all",y=0,w=0;function C(){localStorage.setItem("toDoList",JSON.stringify(N)),localStorage.setItem("allTimeAdded",g)}var I=function(){var e=Object(c.useState)(S),t=Object(s.a)(e,2),n=(t[0],t[1]);function a(){S.splice(0,S.length+1),w=0;for(var e=0;e<N.length;e++)"all"!==D&&N[e].status!==D||(S=[].concat(Object(r.a)(S),[N[e]]),e>1&&w++);return n(S),S}function i(e){for(var t=2;t<N.length;t++)if("all"===e&&"complete"===N[t].status||N[t].ID===e&&e>=0){if(N.splice(t,1),"all"!==e)break;t-=1}C(),a()}return 0===y&&(null===JSON.parse(localStorage.getItem("toDoList"))?(N=[].concat(Object(r.a)(N),[O]),N=[].concat(Object(r.a)(N),[v])):(N=JSON.parse(localStorage.getItem("toDoList")),g=localStorage.getItem("allTimeAdded")),a(),n(S),y=1),Object(d.jsxs)("div",{children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"#todo"})}),Object(d.jsx)(m,{setFilter:function(e){D=e,a()},currentGroup:D}),Object(d.jsx)(p,{addToDo:function(e){var t=new x(g++,e);N=[].concat(Object(r.a)(N),[t]),C(),a()},handleStatus:function(e){for(var t=2;t<N.length;t++)if(N[t].ID===e&&e>=0){N[t].status="active"===N[t].status?"complete":"active";break}C(),a()},handleDelete:i,masterList:S,currentGroup:D}),Object(d.jsx)("div",{id:"delete-all-cont",className:"complete"===D?w>0?"":"boosted":"hidden",children:Object(d.jsx)(u,{type:"button",id:"delete-all",color:"btn-red",trigger:function(){return i("all")},icon:"delete",text:"delete all"})}),Object(d.jsxs)("div",{className:w>0?"hidden":"empty-sign",children:[Object(d.jsx)("div",{}),Object(d.jsxs)("span",{children:["Nothing to see here, just an empty to-do list.",Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://www.freepik.com/vectors/people",children:"People vector created by pch.vector - www.freepik.com"})]})]}),Object(d.jsxs)("footer",{children:["Created by\xa0",Object(d.jsx)("a",{href:"https://github.com/josejovian",title:"Jose Jovian",children:"josejovian"}),"\xa0-\xa0",Object(d.jsx)("a",{href:"https://devchallenges.io/",title:"Dev Challenges",children:"devChallenges.io"})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),a(e),i(e),l(e)}))};l.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),k()}],[[21,1,2]]]);
//# sourceMappingURL=main.45af764e.chunk.js.map