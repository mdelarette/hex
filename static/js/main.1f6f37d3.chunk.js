(this.webpackJsonphex=this.webpackJsonphex||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var o,i=n(0),l=n.n(i),a=n(7),r=n.n(a),c=(n(13),n(3)),s=n(5),u=n(1);n(14);!function(e){e[e.Water=0]="Water",e[e.Earth=1]="Earth",e[e.Forest=2]="Forest",e[e.Desert=3]="Desert"}(o||(o={}));var f={id:1,name:"Toute eau",center:o.Water,edges:[o.Water,o.Water,o.Water,o.Water,o.Water,o.Water]},d={id:14,name:"Toute eau simple",center:o.Water},h=["#7dd1ff","#a65a35"],g={tiles:[{tile:f,quantity:3},{tile:d,quantity:1}]};var v=Math.cos(Math.PI/6);function b(e,t,n,o,i){var l=n/3,a=t.x,r=t.y,c=n;if(o){if(!o.edges)return e.fillStyle=i[o.center],void T(e,t,n);e.beginPath(),e.moveTo(a-c*v,r-.5*c),e.lineTo(a-c*v,r+.5*c),e.lineTo(a-l*v,r+.5*l),e.lineTo(a-l*v,r-.5*l),e.closePath(),e.fillStyle=i[o.edges[0]],e.fill(),e.beginPath(),e.moveTo(a-c*v,r+.5*c),e.lineTo(a,r+c),e.lineTo(a,r+l),e.lineTo(a-l*v,r+.5*l),e.closePath(),e.fillStyle=i[o.edges[1]],e.fill(),e.beginPath(),e.moveTo(a,r+c),e.lineTo(a+c*v,r+.5*c),e.lineTo(a+l*v,r+.5*l),e.lineTo(a,r+l),e.closePath(),e.fillStyle=i[o.edges[2]],e.fill(),e.beginPath(),e.moveTo(a+c*v,r+.5*c),e.lineTo(a+c*v,r-.5*c),e.lineTo(a+l*v,r-.5*l),e.lineTo(a+l*v,r+.5*l),e.closePath(),e.fillStyle=i[o.edges[3]],e.fill(),e.beginPath(),e.moveTo(a+c*v,r-.5*c),e.lineTo(a,r-c),e.lineTo(a,r-l),e.lineTo(a+l*v,r-.5*l),e.closePath(),e.fillStyle=i[o.edges[4]],e.fill(),e.beginPath(),e.lineTo(a,r-c),e.lineTo(a-c*v,r-.5*c),e.lineTo(a-l*v,r-.5*l),e.lineTo(a,r-l),e.closePath(),e.fillStyle=i[o.edges[5]],e.fill(),e.beginPath(),e.moveTo(a-l*v,r-.5*l),e.lineTo(a-l*v,r+.5*l),e.lineTo(a,r+l),e.lineTo(a+l*v,r+.5*l),e.lineTo(a+l*v,r-.5*l),e.lineTo(a,r-l),e.lineTo(a-l*v,r-.5*l),e.closePath(),e.fillStyle=i[o.center],e.fill()}else T(e,t,n)}function T(e,t,n){var o=t.x,i=t.y,l=n;e.beginPath(),e.moveTo(o-l*v,i-.5*l),e.lineTo(o-l*v,i+.5*l),e.lineTo(o,i+l),e.lineTo(o+l*v,i+.5*l),e.lineTo(o+l*v,i-.5*l),e.lineTo(o,i-l),e.lineTo(o-l*v,i-.5*l),e.closePath(),e.fillStyle="orange",e.fill()}function m(e,t){return{x:t*(Math.sqrt(3)*e.coordinates.q+Math.sqrt(3)/2*e.coordinates.r),y:t*(1.5*e.coordinates.r)}}var y=function(e){var t=e.id,n=e.width,o=e.height,a=e.zIndex,r=e.nextTile,c=e.patterns,s=e.onClick,f=e.playfield,d=e.tileSize,h=Object(i.useState)({x:0,y:0}),g=Object(u.a)(h,2),v=g[0],T=g[1],y=Object(i.useState)(null),w=Object(u.a)(y,2),j=w[0],O=w[1];Object(i.useEffect)((function(){var e=document.getElementById(t).getContext("2d");O(e)}),[]),Object(i.useEffect)((function(){console.log("Canvas size",n,o)}),[n,o]),Object(i.useEffect)((function(){j&&v.x&&v.y&&(j.clearRect(0,0,n,o),r&&b(j,v,25,r,c))}),[v,n,o,j,r]),Object(i.useEffect)((function(){"foreground"===t&&j&&console.log("Pattern initialisation")}),[j]),Object(i.useEffect)((function(){f&&j&&(console.log("Redraw",f),function(e,t,n,o){for(var i=0;i<t.tiles.length;i++){var l=t.tiles[i],a=m(l,n);b(e,{x:e.canvas.width/2+a.x,y:e.canvas.height/2+a.y},n,l,o)}}(j,f,d,c))}),[f]);return l.a.createElement("canvas",{id:t,width:n,height:o,style:{border:"1px solid #000000",position:"absolute",zIndex:a},onMouseMove:function(e){e.preventDefault(),e.persist();var t={x:e.clientX,y:e.clientY};T(t)},onClick:function(e){e.preventDefault(),e.persist();var t={x:e.clientX,y:e.clientY};T(t),s&&s(t)}})},w=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}],j=function(){var e=Object(i.useState)(0),t=Object(u.a)(e,2),n=t[0],o=t[1],a=Object(i.useState)(0),r=Object(u.a)(a,2),f=r[0],d=r[1],v=Object(i.useState)(25),b=Object(u.a)(v,2),T=b[0],m=(b[1],Object(i.useState)(null)),j=Object(u.a)(m,2),O=j[0],x=j[1],p=Object(i.useState)([]),P=Object(u.a)(p,2),S=P[0],q=P[1],E=Object(i.useState)({tiles:[]}),M=Object(u.a)(E,2),W=M[0],k=M[1];Object(i.useEffect)((function(){console.log("Window initial size",window.innerWidth,window.innerHeight),o(window.innerWidth),d(window.innerHeight)}),[]),Object(i.useEffect)((function(){console.log(g);var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[n],e[n]=o}return e}(g.tiles.map((function(e){for(var t=[],n=0;n<e.quantity;n++)t.push(e.tile.id);return t})).flat());console.log("shuffledDeck",e);var t=g.tiles.find((function(t){return t.tile.id===e[0]})),n=t?t.tile:null;x(n),q(e)}),[]),Object(i.useEffect)((function(){var e=navigator.userAgent.toLowerCase().match(/mobile/i);console.log("isMobile ?",navigator.userAgent),console.log("isMobile ?",navigator.userAgent.toLowerCase()),console.log("isMobile ?",navigator.userAgent.toLowerCase().match(/mobile/i)),e?console.log("isMobile",!0):console.log("isMobile",!1),console.log("maxTouchPoints ?",navigator.maxTouchPoints)}),[]);return l.a.createElement(l.a.Fragment,null,n&&f&&l.a.createElement(l.a.Fragment,null,l.a.createElement(y,{id:"background",width:n,height:f,zIndex:0,nextTile:null,patterns:h,onClick:null,playfield:W,tileSize:T}),l.a.createElement(y,{id:"foreground",width:n,height:f,zIndex:1,nextTile:O,patterns:h,onClick:function(e){console.log("handleClick in app",e);var t={q:0,r:0};if(0!==W.tiles.length&&(t=function(e,t){var n=(Math.sqrt(3)/3*e.x-1/3*e.y)/t,o=2/3*e.y/t;return{q:Math.round(n),r:Math.round(o)}}({x:e.x-n/2,y:e.y-f/2},T)),void 0===W.tiles.find((function(e){return e.coordinates.q===t.q&&e.coordinates.r===t.r}))){if(0!==W.tiles.length){var o=0,i=!1,l=function(){var e=t.q+w[o].q,n=t.r+w[o].r;i=void 0===W.tiles.find((function(t){return t.coordinates.q===e&&t.coordinates.r===n})),o++};do{l()}while(!i&&o<w.length);if(!i)return void console.warn("No neighbor : ",t)}var a=Object(s.a)({},W,{tiles:[].concat(Object(c.a)(W.tiles),[Object(s.a)({},O,{coordinates:t})])}),r=Object(c.a)(S);if(r.length>0){var u;r.shift();var d=null===(u=g.tiles.find((function(e){return e.tile.id===r[0]})))||void 0===u?void 0:u.tile;x(d||null)}else x(null);console.log("newRemainingTiles",r),console.log("newPlayfield",a),k(a),q(r)}else console.warn("Already something here : ",t)},playfield:null,tileSize:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1f6f37d3.chunk.js.map