(this.webpackJsonphex=this.webpackJsonphex||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":"hex","b":"0.1.2"}')},49:function(e,t,a){e.exports=a(60)},54:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(6),l=a.n(r),o=(a(54),a(29)),c=a(30),s=a(7),h=(a(55),a(90)),d=a(99),u=a(92),f=a(94),g=a(97),m=a(98),E=a(96),v=a(95),W=a(39),y=a.n(W),b=a(40),p=a.n(b),w=a(41),T=a.n(w),x=a(42),O=a.n(x),q=a(43),j=a.n(q);function S(){var e="undefined"===typeof window,t=i.a.useState({windowInnerWidth:e?1200:window.innerWidth,windowInnerHeight:e?800:window.innerHeight}),a=Object(s.a)(t,2),n=a[0],r=a[1];return i.a.useEffect((function(){var e=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isImmediate:!1};return function(){for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];var o=this,c=function(){t=void 0,n.isImmediate||e.apply(o,r)},s=n.isImmediate&&void 0===t;void 0!==t&&clearTimeout(t),t=setTimeout(c,a),s&&e.apply(o,r)}}((function(){r({windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight})}),250);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}var I,z=a(18);!function(e){e[e.Water=0]="Water",e[e.Earth=1]="Earth",e[e.Forest=2]="Forest",e[e.Desert=3]="Desert"}(I||(I={}));var k={id:1,name:"Toute eau",center:I.Water,edges:[I.Water,I.Water,I.Water,I.Water,I.Water,I.Water]},B={id:2,center:I.Water,edges:[I.Earth,I.Water,I.Water,I.Water,I.Water,I.Water]},M={id:3,center:I.Water,edges:[I.Earth,I.Earth,I.Water,I.Water,I.Water,I.Water]},P={id:4,center:I.Water,edges:[I.Earth,I.Water,I.Earth,I.Water,I.Water,I.Water]},C={id:5,center:I.Water,edges:[I.Earth,I.Water,I.Water,I.Earth,I.Water,I.Water]},N={id:6,center:I.Water,edges:[I.Earth,I.Earth,I.Earth,I.Water,I.Water,I.Water]},H={id:7,center:I.Water,edges:[I.Earth,I.Earth,I.Water,I.Earth,I.Water,I.Water]},J={id:8,center:I.Water,edges:[I.Earth,I.Earth,I.Water,I.Water,I.Earth,I.Water]},A={id:9,center:I.Water,edges:[I.Earth,I.Earth,I.Earth,I.Earth,I.Water,I.Water]},D={id:10,center:I.Water,edges:[I.Earth,I.Earth,I.Earth,I.Water,I.Earth,I.Water]},R={id:11,center:I.Water,edges:[I.Earth,I.Earth,I.Water,I.Earth,I.Earth,I.Water]},U={id:12,center:I.Water,edges:[I.Earth,I.Earth,I.Earth,I.Earth,I.Earth,I.Water]},K={id:13,center:I.Water,edges:[I.Earth,I.Earth,I.Earth,I.Earth,I.Earth,I.Earth]},L={id:14,name:"Toute eau simple",center:I.Water},F={id:101,name:"Ilot central",center:I.Earth,edges:[I.Water,I.Water,I.Water,I.Water,I.Water,I.Water]},G={id:102,center:I.Earth,edges:[I.Earth,I.Water,I.Water,I.Water,I.Water,I.Water]},X={id:103,center:I.Earth,edges:[I.Earth,I.Earth,I.Water,I.Water,I.Water,I.Water]},Y={id:104,center:I.Earth,edges:[I.Earth,I.Water,I.Earth,I.Water,I.Water,I.Water]},V={id:105,center:I.Earth,edges:[I.Earth,I.Water,I.Water,I.Earth,I.Water,I.Water]},_={id:106,center:I.Earth,edges:[I.Earth,I.Earth,I.Earth,I.Water,I.Water,I.Water]},Z={id:107,center:I.Earth,edges:[I.Earth,I.Earth,I.Water,I.Earth,I.Water,I.Water]},$={id:108,center:I.Earth,edges:[I.Earth,I.Earth,I.Water,I.Water,I.Earth,I.Water]},Q={id:109,center:I.Earth,edges:[I.Earth,I.Earth,I.Earth,I.Earth,I.Water,I.Water]},ee={id:110,center:I.Earth,edges:[I.Earth,I.Earth,I.Earth,I.Water,I.Earth,I.Water]},te={id:111,center:I.Earth,edges:[I.Earth,I.Earth,I.Water,I.Earth,I.Earth,I.Water]},ae={id:112,center:I.Earth,edges:[I.Earth,I.Earth,I.Earth,I.Earth,I.Earth,I.Water]},ne={id:113,name:"Toute terre",center:I.Earth},ie=["#7dd1ff","#a65a35"],re={tiles:[{tile:k,quantity:3},{tile:L,quantity:1},{tile:B,quantity:1},{tile:M,quantity:1},{tile:P,quantity:1},{tile:C,quantity:1},{tile:N,quantity:1},{tile:H,quantity:1},{tile:J,quantity:1},{tile:A,quantity:1},{tile:D,quantity:1},{tile:R,quantity:1},{tile:U,quantity:1},{tile:K,quantity:1},{tile:F,quantity:3},{tile:G,quantity:1},{tile:X,quantity:1},{tile:Y,quantity:1},{tile:V,quantity:1},{tile:_,quantity:1},{tile:Z,quantity:1},{tile:$,quantity:1},{tile:Q,quantity:1},{tile:ee,quantity:1},{tile:te,quantity:1},{tile:ae,quantity:1},{tile:ne,quantity:1}]},le=a(11);function oe(e,t){if(e.length>t)e.unshift.apply(e,Object(le.a)(e.splice(-t)));else for(var a=0;a<t;)e.unshift(e.splice(-1)),a++;return e}var ce=Math.cos(Math.PI/6),se=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}];function he(e,t,a,n,i){if(n)if(n.edges){var r=a/3,l=t.x,o=t.y,c=a;e.beginPath(),e.moveTo(l-c*ce,o-.5*c),e.lineTo(l-c*ce,o+.5*c),e.lineTo(l-r*ce,o+.5*r),e.lineTo(l-r*ce,o-.5*r),e.closePath(),e.fillStyle=i?i[n.edges[0]]:"red",e.fill(),e.beginPath(),e.moveTo(l-c*ce,o+.5*c),e.lineTo(l,o+c),e.lineTo(l,o+r),e.lineTo(l-r*ce,o+.5*r),e.closePath(),e.fillStyle=i?i[n.edges[1]]:"red",e.fill(),e.beginPath(),e.moveTo(l,o+c),e.lineTo(l+c*ce,o+.5*c),e.lineTo(l+r*ce,o+.5*r),e.lineTo(l,o+r),e.closePath(),e.fillStyle=i?i[n.edges[2]]:"red",e.fill(),e.beginPath(),e.moveTo(l+c*ce,o+.5*c),e.lineTo(l+c*ce,o-.5*c),e.lineTo(l+r*ce,o-.5*r),e.lineTo(l+r*ce,o+.5*r),e.closePath(),e.fillStyle=i?i[n.edges[3]]:"red",e.fill(),e.beginPath(),e.moveTo(l+c*ce,o-.5*c),e.lineTo(l,o-c),e.lineTo(l,o-r),e.lineTo(l+r*ce,o-.5*r),e.closePath(),e.fillStyle=i?i[n.edges[4]]:"red",e.fill(),e.beginPath(),e.lineTo(l,o-c),e.lineTo(l-c*ce,o-.5*c),e.lineTo(l-r*ce,o-.5*r),e.lineTo(l,o-r),e.closePath(),e.fillStyle=i?i[n.edges[5]]:"red",e.fill(),e.beginPath(),e.moveTo(l-r*ce,o-.5*r),e.lineTo(l-r*ce,o+.5*r),e.lineTo(l,o+r),e.lineTo(l+r*ce,o+.5*r),e.lineTo(l+r*ce,o-.5*r),e.lineTo(l,o-r),e.lineTo(l-r*ce,o-.5*r),e.closePath(),e.fillStyle=i?i[n.center]:"red",e.fill()}else fe(e,t,a,i?i[n.center]:"red");else fe(e,t,a,"red")}function de(e,t,a,n,i){!function(e,t,a){var n=t.x,i=t.y,r=a;e.beginPath(),e.moveTo(n-r*ce,i-.5*r),e.lineTo(n-r*ce,i+.5*r),e.lineTo(n,i+r),e.lineTo(n+r*ce,i+.5*r),e.lineTo(n+r*ce,i-.5*r),e.lineTo(n,i-r),e.lineTo(n-r*ce,i-.5*r),e.closePath(),e.shadowBlur=20,e.shadowColor="black",e.strokeStyle="black",e.stroke(),e.fillStyle="",e.fill(),e.shadowBlur=0}(e,t,a),he(e,t,a,n,i)}function ue(e,t,a){var n=t.x,i=t.y,r=a;e.beginPath(),e.moveTo(n-r*ce,i-.5*r),e.lineTo(n-r*ce,i+.5*r),e.lineTo(n,i+r),e.lineTo(n+r*ce,i+.5*r),e.lineTo(n+r*ce,i-.5*r),e.lineTo(n,i-r),e.lineTo(n-r*ce,i-.5*r),e.closePath(),e.strokeStyle="black",e.stroke()}function fe(e,t,a,n){var i=t.x,r=t.y,l=a;e.beginPath(),e.moveTo(i-l*ce,r-.5*l),e.lineTo(i-l*ce,r+.5*l),e.lineTo(i,r+l),e.lineTo(i+l*ce,r+.5*l),e.lineTo(i+l*ce,r-.5*l),e.lineTo(i,r-l),e.lineTo(i-l*ce,r-.5*l),e.closePath(),e.fillStyle=n,e.fill()}function ge(e,t){return{x:t*(Math.sqrt(3)*e.coordinates.q+Math.sqrt(3)/2*e.coordinates.r),y:t*(1.5*e.coordinates.r)}}function me(e,t){return{x:t*(Math.sqrt(3)*e.q+Math.sqrt(3)/2*e.r),y:t*(1.5*e.r)}}function Ee(e,t){var a={min:0,max:0},n=2+1.5*((a=e.tiles.reduce((function(e,t){return{min:Math.min(e.min,t.coordinates.r),max:Math.max(e.max,t.coordinates.r)}}),a)).max+-a.min+1+2-1),i=Math.floor(t.height/n),r=t.width/6/ce;if(r=Math.floor(r),e.tiles.length>0){for(var l={min:Number.MAX_VALUE,max:Number.MIN_VALUE},o=0;o<e.tiles.length;o++){var c=ge(e.tiles[o],10);l.min=Math.min(c.x,l.min),l.max=Math.max(c.x,l.max)}var s=(l.max-l.min+20*ce)/(20*ce)+2;r=t.width/(2*s)/ce,r=Math.floor(r)}return Math.min(i,r)}var ve=function(e){var t=e.size,a=e.patterns,r=e.playfield,l=e.tileSize,o=Object(n.useState)(null),c=Object(s.a)(o,2),h=c[0],d=c[1];return Object(n.useEffect)((function(){var e=document.getElementById("background").getContext("2d");d(e)}),[]),Object(n.useEffect)((function(){r&&h&&(h.clearRect(0,0,t.width,t.height),function(e,t,a,n){for(var i=0;i<t.tiles.length;i++){var r=t.tiles[i],l=ge(r,a);he(e,{x:e.canvas.width/2+l.x,y:e.canvas.height/2+l.y},a,r,n)}}(h,r,l,a))}),[r,h,t,l,a]),i.a.createElement("canvas",{id:"background",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:0}})},We=function(e){var t=e.size,a=e.nextTile,r=e.patterns,l=e.onClick,o=e.onWheel,c=e.tileSize,h=Object(n.useState)({x:0,y:0}),d=Object(s.a)(h,2),u=d[0],f=d[1],g=Object(n.useState)(null),m=Object(s.a)(g,2),E=m[0],v=m[1];Object(n.useEffect)((function(){var e=document.getElementById("foreground").getContext("2d");v(e)}),[]),Object(n.useEffect)((function(){E&&u.x&&u.y&&(E.clearRect(0,0,t.width,t.height),a&&de(E,u,c,a,r))}),[u,t,E,a,r,c]);return i.a.createElement("canvas",{id:"foreground",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:3},onMouseMove:function(e){e.preventDefault(),e.persist();var t={x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY};f(t)},onWheel:function(e){e.preventDefault(),e.persist(),o&&o(e.nativeEvent.deltaY)},onClick:function(e){e.preventDefault(),e.persist();var t={x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY};f(t),l&&l(t)}})},ye=function(e){var t=e.size,a=e.messages,r=Object(n.useState)(null),l=Object(s.a)(r,2),o=l[0],c=l[1];return Object(n.useEffect)((function(){var e=document.getElementById("messages").getContext("2d");e&&(e.font="24px Parisienne"),c(e)}),[]),Object(n.useEffect)((function(){if(a&&o){a.get("name");var e=a.get("remainingTiles");if(console.log("useEffect messages remainingTiles",e),o.clearRect(0,0,t.width,t.height),e){var n=o.measureText(e);o.fillText(e,t.width-n.width,30)}}}),[a,o,t]),i.a.createElement("canvas",{id:"messages",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:1}})},be=function(e){var t=e.size,a=e.playfield,r=e.tileSize,l=e.nextTile,o=e.patterns,c=Object(n.useState)(null),h=Object(s.a)(c,2),d=h[0],u=h[1];return Object(n.useEffect)((function(){var e=document.getElementById("touchHelper").getContext("2d");u(e)}),[]),Object(n.useEffect)((function(){if(a&&d){var e=[{q:0,r:0}];a.tiles.length>0&&(e=[],a.tiles.forEach((function(t){se.forEach((function(n){var i={q:t.coordinates.q+n.q,r:t.coordinates.r+n.r};e.find((function(e){return e.q===i.q&&e.r===i.r}))||(a.tiles.find((function(e){return e.coordinates.q===i.q&&e.coordinates.r===i.r}))||e.push(i))}))}))),console.log("playfieldNeighborhood tileSize",r,e),console.log("context",d);var n=document.getElementById("touchHelper").getContext("2d");n&&(n.clearRect(0,0,t.width,t.height),function(e,t,a,n,i){for(var r=0;r<t.length;r++){var l=me(t[r],a);ue(e,{x:e.canvas.width/2+l.x,y:e.canvas.height/2+l.y},a),n&&de(e,{x:e.canvas.width/2+l.x,y:e.canvas.height/2+l.y},.75*a,n,i)}}(n,e,r,l,o))}}),[a,d,t,r,l,o]),i.a.createElement("canvas",{id:"touchHelper",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:2}})},pe=function(e){var t=e.size,a=e.nextTile,r=e.patterns,l=e.tileSize,o=Object(n.useState)(null),c=Object(s.a)(o,2),h=c[0],d=c[1];return Object(n.useEffect)((function(){var e=document.getElementById("nextTile").getContext("2d");d(e)}),[]),Object(n.useEffect)((function(){h&&(h.clearRect(0,0,t.width,t.height),a&&he(h,{x:t.width/2,y:t.height/2},l,a,r))}),[t,h,a,r,l]),i.a.createElement("canvas",{id:"nextTile",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:0}})},we=Object(h.a)((function(e){return Object(d.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{top:"auto",bottom:0,"& > div":{alignItems:"flex-start"}},grow:{flexGrow:1},canvasesContainer:{position:"absolute"}})})),Te=function(){var e=we(),t=Object(n.useState)(navigator.maxTouchPoints>0),a=Object(s.a)(t,1)[0],r=i.a.useState(null),l=Object(s.a)(r,2),h=l[0],d=l[1],W=S(),b=W.windowInnerWidth,w=W.windowInnerHeight,x=Object(n.useState)({width:0,height:0}),q=Object(s.a)(x,2),I=q[0],k=q[1],B=Object(n.useState)(25),M=Object(s.a)(B,2),P=M[0],C=M[1],N=Object(n.useState)(null),H=Object(s.a)(N,2),J=H[0],A=H[1],D=Object(n.useState)([]),R=Object(s.a)(D,2),U=R[0],K=R[1],L=Object(n.useState)({tiles:[]}),F=Object(s.a)(L,2),G=F[0],X=F[1],Y=Object(n.useState)(null),V=Object(s.a)(Y,2),_=V[0],Z=V[1];Object(n.useEffect)((function(){console.log("Window initial size",window.innerWidth,window.innerHeight);var e=window.innerWidth-2,t=window.innerHeight-2,a=document.getElementById("topBar");a&&(t-=a.scrollHeight);var n=document.getElementById("bottomBar");n&&(t-=n.scrollHeight),console.log("Canvas initial size",e,t),k({width:e,height:t});var i=Ee({tiles:[]},{width:e,height:t}),r=localStorage.getItem("version");if(z.b===r){var l=localStorage.getItem("playfield"),o=localStorage.getItem("remainingTiles");if(l&&o){var c=JSON.parse(l),s=JSON.parse(o);if(c&&s){console.log("restoring old game",l);var h=re.tiles.find((function(e){return e.tile.id===s[0]})),d=h?h.tile:null;A(d),X(c),K(s);var u=Ee(c,{width:e,height:t});return console.log("restoring old game newTileSize",u),void C(u)}}}Q(),C(i)}),[]),Object(n.useEffect)((function(){var e=b-2,t=w-2,a=document.getElementById("topBar");a&&(t-=a.scrollHeight);var n=document.getElementById("bottomBar");n&&(t-=n.scrollHeight),k({width:e,height:t})}),[b,w]),Object(n.useEffect)((function(){var e=Ee(G,I);C(e)}),[I,G]);var $=function(){if(console.log("handleCtrlZ",G.tiles.length),G.tiles.length>0){var e=Object(c.a)({},G,{tiles:Object(o.a)(G.tiles)}),t=e.tiles.pop(),a=[t.id].concat(Object(o.a)(U));A(t),X(e),K(a)}},Q=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e}(re.tiles.map((function(e){for(var t=[],a=0;a<e.quantity;a++)t.push(e.tile.id);return t})).flat()),t=re.tiles.find((function(t){return t.tile.id===e[0]})),a=t?t.tile:null;A(a),X({tiles:[]}),K(e)};Object(n.useEffect)((function(){var e=new Map([["name","".concat(z.a," - ").concat(z.b)],["remainingTiles","".concat(U.length)]]);Z(e)}),[U.length]),Object(n.useEffect)((function(){localStorage.setItem("version",JSON.stringify(z.b)),localStorage.setItem("playfield",JSON.stringify(G)),localStorage.setItem("remainingTiles",JSON.stringify(U))}),[G,U]);var ee=function(){d(null)},te=function(e){if(console.log("handleWheel in app",e),J)if(J.edges){var t=Object(c.a)({},J,{edges:oe(J.edges,e>0?-1:1)});A(t)}else console.log("Tile as no edges");else console.log("No tile to rotate")},ae=function(e){te(e)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:e.root,onKeyUp:function(e){e.preventDefault(),e.persist(),e.stopPropagation(),console.log("handleKeyUp event",e),console.log("handleKeyUp event",e.key);var t=new Map([["name","".concat(e.key)],["remainingTiles","".concat(U.length)]]);Z(t),"z"===e.key&&e.ctrlKey&&$(),"Backspace"===e.key&&$()},tabIndex:0},i.a.createElement(u.a,{id:"topBar",position:"static"},i.a.createElement(f.a,null,i.a.createElement(v.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){d(e.currentTarget)}},i.a.createElement(y.a,null)),i.a.createElement(E.a,{variant:"h6",className:e.title},"".concat(z.a," - ").concat(z.b)),a&&i.a.createElement(v.a,{edge:"end",className:e.menuButton,color:"inherit","aria-label":"touchApp"},i.a.createElement(p.a,null)," ",navigator.maxTouchPoints),!a&&i.a.createElement(v.a,{edge:"end",className:e.menuButton,color:"inherit","aria-label":"mouseApp"},i.a.createElement(T.a,null)))),i.a.createElement(g.a,{id:"simple-menu",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:ee},i.a.createElement(m.a,{onClick:function(){ee(),Q()}},"New game"),i.a.createElement(m.a,{onClick:function(){ee(),$()}},"Undo")),I.width&&I.height&&i.a.createElement("div",{id:"canvasesContainer",className:e.canvasesContainer},i.a.createElement(ve,{size:I,patterns:ie,playfield:G,tileSize:P}),i.a.createElement(ye,{size:I,messages:_}),a&&i.a.createElement(be,{size:I,playfield:G,tileSize:P,nextTile:J,patterns:ie}),!a&&i.a.createElement(be,{size:I,playfield:G,tileSize:P,nextTile:null,patterns:null}),i.a.createElement(We,{size:I,nextTile:a?null:J,patterns:ie,onClick:function(e){if(console.log("handleClick in app",e),J){var t={q:0,r:0};if(0!==G.tiles.length&&(t=function(e,t){var a=(Math.sqrt(3)/3*e.x-1/3*e.y)/t,n=2/3*e.y/t;return{q:Math.round(a),r:Math.round(n)}}({x:e.x-I.width/2,y:e.y-I.height/2},P)),void 0===G.tiles.find((function(e){return e.coordinates.q===t.q&&e.coordinates.r===t.r}))){if(0!==G.tiles.length){var a=0,n=!1,i=function(){var e=t.q+se[a].q,i=t.r+se[a].r;n=void 0!==G.tiles.find((function(t){return t.coordinates.q===e&&t.coordinates.r===i})),a++};do{i()}while(!n&&a<se.length);if(!n)return}var r=Object(c.a)({},G,{tiles:[].concat(Object(o.a)(G.tiles),[Object(c.a)({},J,{coordinates:t})])}),l=Object(o.a)(U);if(l.length>0){var s;l.shift();var h=null===(s=re.tiles.find((function(e){return e.tile.id===l[0]})))||void 0===s?void 0:s.tile;A(h||null)}else A(null);X(r),K(l)}else console.warn("Already something here : ",t)}else console.log("No tile to add")},onWheel:te,tileSize:P})),a&&i.a.createElement(u.a,{id:"bottomBar",position:"fixed",color:"primary",className:e.appBar},i.a.createElement(f.a,null,i.a.createElement(v.a,{edge:"start",color:"inherit","aria-label":"rotate left",onClick:function(){ae(-1)},disabled:!J},i.a.createElement(O.a,null)),i.a.createElement("div",{className:e.grow}),i.a.createElement("div",null,i.a.createElement(pe,{size:{width:48,height:48},nextTile:J,patterns:ie,tileSize:24})),i.a.createElement("div",{className:e.grow}),i.a.createElement(v.a,{edge:"end",color:"inherit","aria-label":"rotate right",onClick:function(){ae(1)},disabled:!J},i.a.createElement(j.a,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,1,2]]]);
//# sourceMappingURL=main.45bf0f8b.chunk.js.map