(this.webpackJsonphex=this.webpackJsonphex||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i,l=n(0),o=n.n(l),a=n(7),r=n.n(a),c=(n(13),n(3)),s=n(5),u=n(1);n(14);!function(e){e[e.Water=0]="Water",e[e.Earth=1]="Earth",e[e.Forest=2]="Forest",e[e.Desert=3]="Desert"}(i||(i={}));var f={id:1,name:"Toute eau",center:i.Water,edges:[i.Water,i.Water,i.Water,i.Water,i.Water,i.Water]},d={id:14,name:"Toute eau simple",center:i.Water},h=["#7dd1ff","#a65a35"],g={tiles:[{tile:f,quantity:3},{tile:d,quantity:1}]};var v=Math.cos(Math.PI/6);function T(e,t,n,i,l){var o=n/3,a=t.x,r=t.y,c=n;if(i){if(!i.edges)return e.fillStyle=l[i.center],void b(e,t,n);e.beginPath(),e.moveTo(a-c*v,r-.5*c),e.lineTo(a-c*v,r+.5*c),e.lineTo(a-o*v,r+.5*o),e.lineTo(a-o*v,r-.5*o),e.closePath(),e.fillStyle=l[i.edges[0]],e.fill(),e.beginPath(),e.moveTo(a-c*v,r+.5*c),e.lineTo(a,r+c),e.lineTo(a,r+o),e.lineTo(a-o*v,r+.5*o),e.closePath(),e.fillStyle=l[i.edges[1]],e.fill(),e.beginPath(),e.moveTo(a,r+c),e.lineTo(a+c*v,r+.5*c),e.lineTo(a+o*v,r+.5*o),e.lineTo(a,r+o),e.closePath(),e.fillStyle=l[i.edges[2]],e.fill(),e.beginPath(),e.moveTo(a+c*v,r+.5*c),e.lineTo(a+c*v,r-.5*c),e.lineTo(a+o*v,r-.5*o),e.lineTo(a+o*v,r+.5*o),e.closePath(),e.fillStyle=l[i.edges[3]],e.fill(),e.beginPath(),e.moveTo(a+c*v,r-.5*c),e.lineTo(a,r-c),e.lineTo(a,r-o),e.lineTo(a+o*v,r-.5*o),e.closePath(),e.fillStyle=l[i.edges[4]],e.fill(),e.beginPath(),e.lineTo(a,r-c),e.lineTo(a-c*v,r-.5*c),e.lineTo(a-o*v,r-.5*o),e.lineTo(a,r-o),e.closePath(),e.fillStyle=l[i.edges[5]],e.fill(),e.beginPath(),e.moveTo(a-o*v,r-.5*o),e.lineTo(a-o*v,r+.5*o),e.lineTo(a,r+o),e.lineTo(a+o*v,r+.5*o),e.lineTo(a+o*v,r-.5*o),e.lineTo(a,r-o),e.lineTo(a-o*v,r-.5*o),e.closePath(),e.fillStyle=l[i.center],e.fill()}else b(e,t,n)}function b(e,t,n){var i=t.x,l=t.y,o=n;e.beginPath(),e.moveTo(i-o*v,l-.5*o),e.lineTo(i-o*v,l+.5*o),e.lineTo(i,l+o),e.lineTo(i+o*v,l+.5*o),e.lineTo(i+o*v,l-.5*o),e.lineTo(i,l-o),e.lineTo(i-o*v,l-.5*o),e.closePath(),e.fillStyle="orange",e.fill()}function y(e,t){return{x:t*(Math.sqrt(3)*e.coordinates.q+Math.sqrt(3)/2*e.coordinates.r),y:t*(1.5*e.coordinates.r)}}var m=function(e){var t=e.id,n=e.width,i=e.height,a=e.zIndex,r=e.nextTile,c=e.patterns,s=e.onClick,f=e.playfield,d=e.tileSize,h=Object(l.useState)({x:0,y:0}),g=Object(u.a)(h,2),v=g[0],b=g[1],m=Object(l.useState)(null),w=Object(u.a)(m,2),j=w[0],O=w[1];Object(l.useEffect)((function(){var e=document.getElementById(t).getContext("2d");O(e)}),[]),Object(l.useEffect)((function(){console.log("Canvas size",n,i)}),[n,i]),Object(l.useEffect)((function(){j&&v.x&&v.y&&(j.clearRect(0,0,n,i),r&&T(j,v,25,r,c))}),[v,n,i,j,r]),Object(l.useEffect)((function(){"foreground"===t&&j&&console.log("Pattern initialisation")}),[j]),Object(l.useEffect)((function(){f&&j&&(console.log("Redraw",f),function(e,t,n,i){for(var l=0;l<t.tiles.length;l++){var o=t.tiles[l],a=y(o,n);T(e,{x:e.canvas.width/2+a.x,y:e.canvas.height/2+a.y},n,o,i)}}(j,f,d,c))}),[f]);return o.a.createElement("canvas",{id:t,width:n,height:i,style:{border:"1px solid #000000",position:"absolute",zIndex:a},onMouseMove:function(e){e.preventDefault(),e.persist();var t={x:e.clientX,y:e.clientY};b(t)},onClick:function(e){e.preventDefault(),e.persist();var t={x:e.clientX,y:e.clientY};b(t),s&&s(t)}})},w=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}],j=function(){var e=Object(l.useState)(0),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(l.useState)(0),r=Object(u.a)(a,2),f=r[0],d=r[1],v=Object(l.useState)(25),T=Object(u.a)(v,2),b=T[0],y=(T[1],Object(l.useState)(null)),j=Object(u.a)(y,2),O=j[0],x=j[1],p=Object(l.useState)([]),S=Object(u.a)(p,2),q=S[0],P=S[1],E=Object(l.useState)({tiles:[]}),W=Object(u.a)(E,2),M=W[0],k=W[1];Object(l.useEffect)((function(){console.log("Window initial size",window.innerWidth,window.innerHeight),i(window.innerWidth),d(window.innerHeight)}),[]),Object(l.useEffect)((function(){console.log(g);var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}return e}(g.tiles.map((function(e){for(var t=[],n=0;n<e.quantity;n++)t.push(e.tile.id);return t})).flat());console.log("shuffledDeck",e);var t=g.tiles.find((function(t){return t.tile.id===e[0]})),n=t?t.tile:null;x(n),P(e)}),[]);return o.a.createElement(o.a.Fragment,null,n&&f&&o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{id:"background",width:n,height:f,zIndex:0,nextTile:null,patterns:h,onClick:null,playfield:M,tileSize:b}),o.a.createElement(m,{id:"foreground",width:n,height:f,zIndex:1,nextTile:O,patterns:h,onClick:function(e){console.log("handleClick in app",e);var t={q:0,r:0};if(0!==M.tiles.length&&(t=function(e,t){var n=(Math.sqrt(3)/3*e.x-1/3*e.y)/t,i=2/3*e.y/t;return{q:Math.round(n),r:Math.round(i)}}({x:e.x-n/2,y:e.y-f/2},b)),void 0===M.tiles.find((function(e){return e.coordinates.q===t.q&&e.coordinates.r===t.r}))){if(0!==M.tiles.length){var i=0,l=!1,o=function(){var e=t.q+w[i].q,n=t.r+w[i].r;l=void 0===M.tiles.find((function(t){return t.coordinates.q===e&&t.coordinates.r===n})),i++};do{o()}while(!l&&i<w.length);if(!l)return void console.warn("No neighbor : ",t)}var a=Object(s.a)({},M,{tiles:[].concat(Object(c.a)(M.tiles),[Object(s.a)({},O,{coordinates:t})])}),r=Object(c.a)(q);if(r.length>0){var u;r.shift();var d=null===(u=g.tiles.find((function(e){return e.tile.id===r[0]})))||void 0===u?void 0:u.tile;x(d||null)}else x(null);console.log("newRemainingTiles",r),console.log("newPlayfield",a),k(a),P(r)}else console.warn("Already something here : ",t)},playfield:null,tileSize:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3943d34a.chunk.js.map