(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,function(e,t,a){e.exports=a(16)},,,,,,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r);a(12),a(13),a(14),a(15);function o(e){let{value:t,onClick:a,player:n}=e;return l.a.createElement("button",{className:"square",onClick:()=>a(t)}," ",n(t))}function i(e){let{onClickMethod:t,playerFinder:a,nextPlayer:n}=e;return l.a.createElement("div",null,l.a.createElement("div",{className:"status"},n()),l.a.createElement("div",{className:"board-row"},l.a.createElement(o,{value:0,onClick:t,player:a}),l.a.createElement(o,{value:1,onClick:t,player:a}),l.a.createElement(o,{value:2,onClick:t,player:a})),l.a.createElement("div",{className:"board-row"},l.a.createElement(o,{value:3,onClick:t,player:a}),l.a.createElement(o,{value:4,onClick:t,player:a}),l.a.createElement(o,{value:5,onClick:t,player:a})),l.a.createElement("div",{className:"board-row"},l.a.createElement(o,{value:6,onClick:t,player:a}),l.a.createElement(o,{value:7,onClick:t,player:a}),l.a.createElement(o,{value:8,onClick:t,player:a})))}function u(e){const t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let a=0;a<t.length;a++){const[n,l,r]=t[a];if(e[n]&&e[n]===e[l]&&e[n]===e[r])return e[n]}return null}function s(){const[e,t]=Object(n.useState)(Array(9).fill(null)),[a,r]=Object(n.useState)(!0);function c(n){const l=e.slice();l[n]&&alert("already set"),u(l)?alert("Game Over"):(l[n]=a?"X":"O",u(l)&&(t(l),alert("Winner: "+u(l))),r(!a),t(l))}function o(t){return console.log(t),e[t]?e[t]:""}function s(){return"Next player: "+(a?"X":"O")}return console.log("By here "+c+o+s),l.a.createElement(i,{onClickMethod:c,playerFinder:o,nextPlayer:s})}c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)))}],[[3,1,2]]]);
//# sourceMappingURL=main.db00cc5c.chunk.js.map