(this.webpackJsonpzadanie3react=this.webpackJsonpzadanie3react||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(4),r=n.n(o),i=(n(9),n(2)),s=(n(10),n(0)),u=function(e){var t=e.title;return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:t})})},b=function(e){var t=e.quote;return Object(s.jsx)("h2",{className:"quote",children:t})},l=function(e){var t=e.onClick,n=e.text,c=e.active;return Object(s.jsx)("button",{className:c?"btn active":"btn inactive",onClick:t,children:n})};l.defaultProps={active:!0};var h,j=l,f=[],d=function(){var e=Object(c.useState)("Click button to generate quote!"),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)("#b8aeae"),r=Object(i.a)(o,2),l=r[0],d=(r[1],Object(c.useState)(!1)),g=Object(i.a)(d,2),O=g[0],v=g[1];fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(e){return e.json()})).then((function(e){h=e})).catch((function(e){console.error(e)}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(u,{className:"header",title:"Random quote from API generator"}),Object(s.jsxs)("div",{className:"main-wrapper",children:[Object(s.jsx)(b,{className:"quote",quote:n}),Object(s.jsx)(j,{bgColor:l,active:O,onClick:function(){f.length>1&&(f.splice(f.length-1,1),a(h[f[f.length-1]].quote),f.length<=1&&v(!1))},text:"Get previous quote!"}),Object(s.jsx)(j,{onClick:function(){for(var e,t=h.length;e=Math.floor(Math.random()*t),!(f.length>=t)&&f.includes(e););f.push(e),a(h[e].quote),f.length>1&&v(!0)},text:"Generate new quote!"})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),g()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.fb9fc259.chunk.js.map