(this.webpackJsonphex=this.webpackJsonphex||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":"hex","b":"0.1.1"}')},49:function(e,t,a){e.exports=a(60)},54:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n,r=a(0),i=a.n(r),l=a(6),o=a.n(l),c=(a(54),a(36)),s=a(34),h=a(7),u=(a(55),a(90)),d=a(99),f=a(92),E=a(94),g=a(97),m=a(98),W=a(96),v=a(95),b=a(39),y=a.n(b),p=a(40),T=a.n(p),x=a(41),q=a.n(x),O=a(42),j=a.n(O),w=a(43),S=a.n(w),M=a(18);!function(e){e[e.Water=0]="Water",e[e.Earth=1]="Earth",e[e.Forest=2]="Forest",e[e.Desert=3]="Desert"}(n||(n={}));var P={id:1,name:"Toute eau",center:n.Water,edges:[n.Water,n.Water,n.Water,n.Water,n.Water,n.Water]},B={id:2,center:n.Water,edges:[n.Earth,n.Water,n.Water,n.Water,n.Water,n.Water]},C={id:3,center:n.Water,edges:[n.Earth,n.Earth,n.Water,n.Water,n.Water,n.Water]},k={id:4,center:n.Water,edges:[n.Earth,n.Water,n.Earth,n.Water,n.Water,n.Water]},N={id:5,center:n.Water,edges:[n.Earth,n.Water,n.Water,n.Earth,n.Water,n.Water]},I={id:6,center:n.Water,edges:[n.Earth,n.Earth,n.Earth,n.Water,n.Water,n.Water]},z={id:7,center:n.Water,edges:[n.Earth,n.Earth,n.Water,n.Earth,n.Water,n.Water]},H={id:8,center:n.Water,edges:[n.Earth,n.Earth,n.Water,n.Water,n.Earth,n.Water]},D={id:9,center:n.Water,edges:[n.Earth,n.Earth,n.Earth,n.Earth,n.Water,n.Water]},A={id:10,center:n.Water,edges:[n.Earth,n.Earth,n.Earth,n.Water,n.Earth,n.Water]},R={id:11,center:n.Water,edges:[n.Earth,n.Earth,n.Water,n.Earth,n.Earth,n.Water]},U={id:12,center:n.Water,edges:[n.Earth,n.Earth,n.Earth,n.Earth,n.Earth,n.Water]},F={id:13,center:n.Water,edges:[n.Earth,n.Earth,n.Earth,n.Earth,n.Earth,n.Earth]},G={id:14,name:"Toute eau simple",center:n.Water},J={id:101,name:"Ilot central",center:n.Earth,edges:[n.Water,n.Water,n.Water,n.Water,n.Water,n.Water]},X={id:102,center:n.Earth,edges:[n.Earth,n.Water,n.Water,n.Water,n.Water,n.Water]},Y={id:103,center:n.Earth,edges:[n.Earth,n.Earth,n.Water,n.Water,n.Water,n.Water]},K={id:104,center:n.Earth,edges:[n.Earth,n.Water,n.Earth,n.Water,n.Water,n.Water]},L={id:105,center:n.Earth,edges:[n.Earth,n.Water,n.Water,n.Earth,n.Water,n.Water]},V={id:106,center:n.Earth,edges:[n.Earth,n.Earth,n.Earth,n.Water,n.Water,n.Water]},_={id:107,center:n.Earth,edges:[n.Earth,n.Earth,n.Water,n.Earth,n.Water,n.Water]},$={id:108,center:n.Earth,edges:[n.Earth,n.Earth,n.Water,n.Water,n.Earth,n.Water]},Q={id:109,center:n.Earth,edges:[n.Earth,n.Earth,n.Earth,n.Earth,n.Water,n.Water]},Z={id:110,center:n.Earth,edges:[n.Earth,n.Earth,n.Earth,n.Water,n.Earth,n.Water]},ee={id:111,center:n.Earth,edges:[n.Earth,n.Earth,n.Water,n.Earth,n.Earth,n.Water]},te={id:112,center:n.Earth,edges:[n.Earth,n.Earth,n.Earth,n.Earth,n.Earth,n.Water]},ae={id:113,name:"Toute terre",center:n.Earth},ne=["#7dd1ff","#a65a35"],re={tiles:[{tile:P,quantity:3},{tile:G,quantity:1},{tile:B,quantity:1},{tile:C,quantity:1},{tile:k,quantity:1},{tile:N,quantity:1},{tile:I,quantity:1},{tile:z,quantity:1},{tile:H,quantity:1},{tile:D,quantity:1},{tile:A,quantity:1},{tile:R,quantity:1},{tile:U,quantity:1},{tile:F,quantity:1},{tile:J,quantity:3},{tile:X,quantity:1},{tile:Y,quantity:1},{tile:K,quantity:1},{tile:L,quantity:1},{tile:V,quantity:1},{tile:_,quantity:1},{tile:$,quantity:1},{tile:Q,quantity:1},{tile:Z,quantity:1},{tile:ee,quantity:1},{tile:te,quantity:1},{tile:ae,quantity:1}]},ie=a(11);function le(e,t){if(e.length>t)e.unshift.apply(e,Object(ie.a)(e.splice(-t)));else for(var a=0;a<t;)e.unshift(e.splice(-1)),a++;return e}var oe=Math.cos(Math.PI/6),ce=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}];function se(e,t,a,n,r){if(n)if(n.edges){var i=a/3,l=t.x,o=t.y,c=a;e.beginPath(),e.moveTo(l-c*oe,o-.5*c),e.lineTo(l-c*oe,o+.5*c),e.lineTo(l-i*oe,o+.5*i),e.lineTo(l-i*oe,o-.5*i),e.closePath(),e.fillStyle=r[n.edges[0]],e.fill(),e.beginPath(),e.moveTo(l-c*oe,o+.5*c),e.lineTo(l,o+c),e.lineTo(l,o+i),e.lineTo(l-i*oe,o+.5*i),e.closePath(),e.fillStyle=r[n.edges[1]],e.fill(),e.beginPath(),e.moveTo(l,o+c),e.lineTo(l+c*oe,o+.5*c),e.lineTo(l+i*oe,o+.5*i),e.lineTo(l,o+i),e.closePath(),e.fillStyle=r[n.edges[2]],e.fill(),e.beginPath(),e.moveTo(l+c*oe,o+.5*c),e.lineTo(l+c*oe,o-.5*c),e.lineTo(l+i*oe,o-.5*i),e.lineTo(l+i*oe,o+.5*i),e.closePath(),e.fillStyle=r[n.edges[3]],e.fill(),e.beginPath(),e.moveTo(l+c*oe,o-.5*c),e.lineTo(l,o-c),e.lineTo(l,o-i),e.lineTo(l+i*oe,o-.5*i),e.closePath(),e.fillStyle=r[n.edges[4]],e.fill(),e.beginPath(),e.lineTo(l,o-c),e.lineTo(l-c*oe,o-.5*c),e.lineTo(l-i*oe,o-.5*i),e.lineTo(l,o-i),e.closePath(),e.fillStyle=r[n.edges[5]],e.fill(),e.beginPath(),e.moveTo(l-i*oe,o-.5*i),e.lineTo(l-i*oe,o+.5*i),e.lineTo(l,o+i),e.lineTo(l+i*oe,o+.5*i),e.lineTo(l+i*oe,o-.5*i),e.lineTo(l,o-i),e.lineTo(l-i*oe,o-.5*i),e.closePath(),e.fillStyle=r[n.center],e.fill()}else ue(e,t,a,r[n.center]);else ue(e,t,a,"red")}function he(e,t,a){var n=t.x,r=t.y,i=a;e.beginPath(),e.moveTo(n-i*oe,r-.5*i),e.lineTo(n-i*oe,r+.5*i),e.lineTo(n,r+i),e.lineTo(n+i*oe,r+.5*i),e.lineTo(n+i*oe,r-.5*i),e.lineTo(n,r-i),e.lineTo(n-i*oe,r-.5*i),e.closePath(),e.strokeStyle="black",e.stroke()}function ue(e,t,a,n){var r=t.x,i=t.y,l=a;e.beginPath(),e.moveTo(r-l*oe,i-.5*l),e.lineTo(r-l*oe,i+.5*l),e.lineTo(r,i+l),e.lineTo(r+l*oe,i+.5*l),e.lineTo(r+l*oe,i-.5*l),e.lineTo(r,i-l),e.lineTo(r-l*oe,i-.5*l),e.closePath(),e.fillStyle=n,e.fill()}function de(e,t){return{x:t*(Math.sqrt(3)*e.coordinates.q+Math.sqrt(3)/2*e.coordinates.r),y:t*(1.5*e.coordinates.r)}}function fe(e,t){return{x:t*(Math.sqrt(3)*e.q+Math.sqrt(3)/2*e.r),y:t*(1.5*e.r)}}function Ee(e,t,a,n){for(var r=0;r<t.tiles.length;r++){var i=t.tiles[r],l=de(i,a);se(e,{x:e.canvas.width/2+l.x,y:e.canvas.height/2+l.y},a,i,n)}}function ge(e,t,a){var n={min:0,max:0},r=2+1.5*((n=e.tiles.reduce((function(e,t){return{min:Math.min(e.min,t.coordinates.r),max:Math.max(e.max,t.coordinates.r)}}),n)).max+-n.min+1+2-1),i=Math.floor(a/r),l=t/6/oe;if(l=Math.floor(l),e.tiles.length>0){for(var o={min:Number.MAX_VALUE,max:Number.MIN_VALUE},c=0;c<e.tiles.length;c++){var s=de(e.tiles[c],10);o.min=Math.min(s.x,o.min),o.max=Math.max(s.x,o.max)}l=t/(2*((o.max-o.min+20*oe)/(20*oe)+2))/oe,l=Math.floor(l)}return Math.min(i,l)}var me=function(e){var t=e.width,a=e.height,n=e.patterns,l=e.playfield,o=e.tileSize,c=Object(r.useState)(null),s=Object(h.a)(c,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){var e=document.getElementById("background").getContext("2d");d(e)}),[]),Object(r.useEffect)((function(){l&&u&&(u.clearRect(0,0,t,a),Ee(u,l,o,n))}),[l,u,t,a,o,n]),i.a.createElement("canvas",{id:"background",width:t,height:a,style:{border:"1px solid #000000",position:"absolute",zIndex:0}})},We=function(e){var t=e.width,a=e.height,n=e.nextTile,l=e.patterns,o=e.onClick,c=e.onWheel,s=e.playfield,u=e.tileSize,d=Object(r.useState)({x:0,y:0}),f=Object(h.a)(d,2),E=f[0],g=f[1],m=Object(r.useState)(null),W=Object(h.a)(m,2),v=W[0],b=W[1];Object(r.useEffect)((function(){var e=document.getElementById("foreground").getContext("2d");b(e)}),[]),Object(r.useEffect)((function(){v&&E.x&&E.y&&(v.clearRect(0,0,t,a),n&&se(v,E,u,n,l))}),[E,t,a,v,n,l,u]),Object(r.useEffect)((function(){s&&v&&(v.clearRect(0,0,t,a),Ee(v,s,u,l))}),[s,v,t,a,u,l]);return i.a.createElement("canvas",{id:"foreground",width:t,height:a,style:{border:"1px solid #000000",position:"absolute",zIndex:3},onMouseMove:function(e){e.preventDefault(),e.persist();var t={x:e.clientX,y:e.clientY};g(t)},onWheel:function(e){e.preventDefault(),e.persist(),c&&c(e.nativeEvent.deltaY)},onClick:function(e){e.preventDefault(),e.persist();var t={x:e.clientX,y:e.clientY};g(t),o&&o(t)}})},ve=function(e){var t=e.width,a=e.height,n=e.messages,l=Object(r.useState)({x:0,y:0}),o=Object(h.a)(l,2),c=(o[0],o[1],Object(r.useState)(null)),s=Object(h.a)(c,2),u=s[0],d=s[1];return Object(r.useEffect)((function(){var e=document.getElementById("messages").getContext("2d");e&&(e.font="24px Parisienne"),d(e)}),[]),Object(r.useEffect)((function(){if(n&&u){var e=n.get("remainingTiles");if(console.log("useEffect messages remainingTiles",e),u.clearRect(0,0,t,a),e){var r=u.measureText(e);u.fillText(e,t-r.width,30)}}}),[n,u,t,a]),i.a.createElement("canvas",{id:"messages",width:t,height:a,style:{border:"1px solid #000000",position:"absolute",zIndex:1}})},be=function(e){var t=e.width,a=e.height,n=e.playfield,l=e.tileSize,o=Object(r.useState)(null),c=Object(h.a)(o,2),s=c[0],u=c[1];return Object(r.useEffect)((function(){var e=document.getElementById("touchHelper").getContext("2d");u(e)}),[]),Object(r.useEffect)((function(){if(n&&s){var e=[{q:0,r:0}];n.tiles.length>0&&(e=[],n.tiles.forEach((function(t){ce.forEach((function(a){var r={q:t.coordinates.q+a.q,r:t.coordinates.r+a.r};e.find((function(e){return e.q===r.q&&e.r===r.r}))||(n.tiles.find((function(e){return e.coordinates.q===r.q&&e.coordinates.r===r.r}))||e.push(r))}))}))),console.log("playfieldNeighborhood tileSize",l,e),console.log("context",s);var r=document.getElementById("touchHelper").getContext("2d");r&&(r.clearRect(0,0,t,a),function(e,t,a){for(var n=0;n<t.length;n++){var r=fe(t[n],a);he(e,{x:e.canvas.width/2+r.x,y:e.canvas.height/2+r.y},a)}}(r,e,l))}}),[n,s,t,a,l]),i.a.createElement("canvas",{id:"touchHelper",width:t,height:a,style:{border:"1px solid #000000",position:"absolute",zIndex:2}})},ye=Object(u.a)((function(e){return Object(d.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},canvasesContainer:{position:"absolute"}})})),pe=function(){var e=ye(),t=Object(r.useState)(navigator.maxTouchPoints>0),a=Object(h.a)(t,2),n=a[0],l=(a[1],i.a.useState(null)),o=Object(h.a)(l,2),u=o[0],d=o[1],b=Object(r.useState)(0),p=Object(h.a)(b,2),x=p[0],O=p[1],w=Object(r.useState)(0),P=Object(h.a)(w,2),B=P[0],C=P[1],k=Object(r.useState)(25),N=Object(h.a)(k,2),I=N[0],z=N[1],H=Object(r.useState)(null),D=Object(h.a)(H,2),A=D[0],R=D[1],U=Object(r.useState)([]),F=Object(h.a)(U,2),G=F[0],J=F[1],X=Object(r.useState)({tiles:[]}),Y=Object(h.a)(X,2),K=Y[0],L=Y[1],V=Object(r.useState)(null),_=Object(h.a)(V,2),$=_[0],Q=_[1];Object(r.useEffect)((function(){console.log("Window initial size",window.innerWidth,window.innerHeight);var e=window.innerWidth-2,t=window.innerHeight-2,a=document.getElementById("topBar");a&&(t-=a.scrollHeight);var n=document.getElementById("bottomBar");n&&(t-=n.scrollHeight),console.log("Canvas initial size",e,t),O(e),C(t);var r=ge({tiles:[]},window.innerWidth,window.innerHeight);z(r)}),[]),Object(r.useEffect)((function(){console.log(re);var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}(re.tiles.map((function(e){for(var t=[],a=0;a<e.quantity;a++)t.push(e.tile.id);return t})).flat());console.log("shuffledDeck",e);var t=re.tiles.find((function(t){return t.tile.id===e[0]})),a=t?t.tile:null,n=new Map([["name","".concat(M.a," - ").concat(M.b)],["remainingTiles","".concat(e.length)]]);console.log("initial messages",n),R(a),Q(n),J(e)}),[]),Object(r.useEffect)((function(){var e=new Map([["name","".concat(M.a," - ").concat(M.b)],["remainingTiles","".concat(G.length)]]);Q(e)}),[G.length]);var Z=function(){d(null)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:e.root},i.a.createElement(f.a,{id:"topBar",position:"static"},i.a.createElement(E.a,null,i.a.createElement("div",null,i.a.createElement(v.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){d(e.currentTarget)}},i.a.createElement(y.a,null)),i.a.createElement(g.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:Z},i.a.createElement(m.a,{onClick:Z},"New game"),i.a.createElement(m.a,{onClick:Z},"Undo"))),i.a.createElement(W.a,{variant:"h6",className:e.title},"".concat(M.a," - ").concat(M.b)),n&&i.a.createElement(v.a,{edge:"end",className:e.menuButton,color:"inherit","aria-label":"touchApp"},i.a.createElement(T.a,null)," ",navigator.maxTouchPoints),!n&&i.a.createElement(v.a,{edge:"end",className:e.menuButton,color:"inherit","aria-label":"mouseApp"},i.a.createElement(q.a,null)))),x&&B&&i.a.createElement("div",{id:"canvasesContainer",className:e.canvasesContainer,onKeyUpCapture:function(e){e.preventDefault(),e.persist(),console.log("handleKeyUpCapture event",e)}},i.a.createElement(me,{width:x,height:B,patterns:ne,playfield:K,tileSize:I}),i.a.createElement(ve,{width:x,height:B,messages:$}),n&&i.a.createElement(be,{width:x,height:B,playfield:K,tileSize:I}),!n&&i.a.createElement(be,{width:x,height:B,playfield:K,tileSize:I}),i.a.createElement(We,{width:x,height:B,nextTile:A,patterns:ne,onClick:function(e){if(console.log("handleClick in app",e),A){var t={q:0,r:0};if(0!==K.tiles.length&&(t=function(e,t){var a=(Math.sqrt(3)/3*e.x-1/3*e.y)/t,n=2/3*e.y/t;return{q:Math.round(a),r:Math.round(n)}}({x:e.x-x/2,y:e.y-B/2},I)),void 0===K.tiles.find((function(e){return e.coordinates.q===t.q&&e.coordinates.r===t.r}))){if(0!==K.tiles.length){var a=0,n=!1,r=function(){var e=t.q+ce[a].q,r=t.r+ce[a].r;n=void 0!==K.tiles.find((function(t){return t.coordinates.q===e&&t.coordinates.r===r})),a++};do{r()}while(!n&&a<ce.length);if(!n)return}var i=Object(s.a)({},K,{tiles:[].concat(Object(c.a)(K.tiles),[Object(s.a)({},A,{coordinates:t})])}),l=Object(c.a)(G);if(l.length>0){var o;l.shift();var h=null===(o=re.tiles.find((function(e){return e.tile.id===l[0]})))||void 0===o?void 0:o.tile;R(h||null)}else R(null);var u=ge(i,x,B);z(u),L(i),J(l)}else console.warn("Already something here : ",t)}else console.log("No tile to add")},onWheel:function(e){if(console.log("handleWheel in app",e),A)if(A.edges){var t=Object(s.a)({},A,{edges:le(A.edges,e>0?-1:1)});R(t)}else console.log("Tile as no edges");else console.log("No tile to rotate")},playfield:null,tileSize:I})),n&&i.a.createElement(f.a,{id:"bottomBar",position:"fixed",color:"primary",className:e.appBar},i.a.createElement(E.a,null,i.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"rotate left"},i.a.createElement(j.a,null)),i.a.createElement("div",{className:e.grow}),"NextTile",i.a.createElement("div",{className:e.grow}),i.a.createElement(v.a,{edge:"end",color:"inherit","aria-label":"rotate right"},i.a.createElement(S.a,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.68a662c0.chunk.js.map