(this.webpackJsonphex=this.webpackJsonphex||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"a":"hex","b":"0.1.10"}')},51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var i=a(3),n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=(a(51),a(12)),s=a(9),h=a(5),d=(a(52),a.p+"static/media/ocean.b8757f09.jpg"),u=a.p+"static/media/herbe.45ccdaf8.jpg",f=a(87),g=a(96),b=a(89),v=a(91),m=a(94),j=a(95),x=a(93),E=a(92),y=a(36),O=a.n(y),W=a(37),p=a.n(W),w=a(38),T=a.n(w),q=a(39),S=a.n(q),z=a(40),P=a.n(z);function C(){var e="undefined"===typeof window,t=r.a.useState({windowInnerWidth:e?1200:window.innerWidth,windowInnerHeight:e?800:window.innerHeight}),a=Object(h.a)(t,2),i=a[0],n=a[1];return r.a.useEffect((function(){var e=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isImmediate:!1};return function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var l=this,c=function(){t=void 0,i.isImmediate||e.apply(l,r)},s=i.isImmediate&&void 0===t;void 0!==t&&clearTimeout(t),t=setTimeout(c,a),s&&e.apply(l,r)}}((function(){n({windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight})}),250);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),i}var I={image:null,status:"loading"};function M(e,t){var a=r.a.useState(I),i=a[0].image,n=a[0].status,o=a[1];return r.a.useEffect((function(){if(e){var a=document.createElement("img");return a.addEventListener("load",i),a.addEventListener("error",n),t&&(a.crossOrigin=t),a.src=e,function(){a.removeEventListener("load",i),a.removeEventListener("error",n),o(I)}}function i(){o({image:a,status:"loaded"})}function n(){o({image:null,status:"failed"})}}),[e,t,o]),[i,n]}var k,B=a(19);!function(e){e[e.Water=0]="Water",e[e.Earth=1]="Earth",e[e.Forest=2]="Forest",e[e.Desert=3]="Desert"}(k||(k={}));var N=["#7dd1ff","#a65a35","green","yellow"],L=(k.Forest,k.Desert,{tiles:[{tile:{id:1,name:"Toute eau",center:k.Water},quantity:3},{tile:{id:2,center:k.Water,edges:[k.Earth,k.Water,k.Water,k.Water,k.Water,k.Water]},quantity:1},{tile:{id:3,center:k.Water,edges:[k.Earth,k.Earth,k.Water,k.Water,k.Water,k.Water]},quantity:1},{tile:{id:4,center:k.Water,edges:[k.Earth,k.Water,k.Earth,k.Water,k.Water,k.Water]},quantity:1},{tile:{id:5,center:k.Water,edges:[k.Earth,k.Water,k.Water,k.Earth,k.Water,k.Water]},quantity:1},{tile:{id:6,center:k.Water,edges:[k.Earth,k.Earth,k.Earth,k.Water,k.Water,k.Water]},quantity:1},{tile:{id:7,center:k.Water,edges:[k.Earth,k.Earth,k.Water,k.Earth,k.Water,k.Water]},quantity:1},{tile:{id:8,center:k.Water,edges:[k.Earth,k.Earth,k.Water,k.Water,k.Earth,k.Water]},quantity:1},{tile:{id:9,center:k.Water,edges:[k.Earth,k.Earth,k.Earth,k.Earth,k.Water,k.Water]},quantity:1},{tile:{id:10,center:k.Water,edges:[k.Earth,k.Earth,k.Earth,k.Water,k.Earth,k.Water]},quantity:1},{tile:{id:11,center:k.Water,edges:[k.Earth,k.Earth,k.Water,k.Earth,k.Earth,k.Water]},quantity:1},{tile:{id:12,center:k.Water,edges:[k.Earth,k.Earth,k.Earth,k.Earth,k.Earth,k.Water]},quantity:1},{tile:{id:13,center:k.Water,edges:[k.Earth,k.Earth,k.Earth,k.Earth,k.Earth,k.Earth]},quantity:1},{tile:{id:101,name:"Ilot central",center:k.Earth,edges:[k.Water,k.Water,k.Water,k.Water,k.Water,k.Water]},quantity:3},{tile:{id:102,center:k.Earth,edges:[k.Earth,k.Water,k.Water,k.Water,k.Water,k.Water]},quantity:1},{tile:{id:103,center:k.Earth,edges:[k.Earth,k.Earth,k.Water,k.Water,k.Water,k.Water]},quantity:1},{tile:{id:104,center:k.Earth,edges:[k.Earth,k.Water,k.Earth,k.Water,k.Water,k.Water]},quantity:1},{tile:{id:105,center:k.Earth,edges:[k.Earth,k.Water,k.Water,k.Earth,k.Water,k.Water]},quantity:1},{tile:{id:106,center:k.Earth,edges:[k.Earth,k.Earth,k.Earth,k.Water,k.Water,k.Water]},quantity:1},{tile:{id:107,center:k.Earth,edges:[k.Earth,k.Earth,k.Water,k.Earth,k.Water,k.Water]},quantity:1},{tile:{id:108,center:k.Earth,edges:[k.Earth,k.Earth,k.Water,k.Water,k.Earth,k.Water]},quantity:1},{tile:{id:109,center:k.Earth,edges:[k.Earth,k.Earth,k.Earth,k.Earth,k.Water,k.Water]},quantity:1},{tile:{id:110,center:k.Earth,edges:[k.Earth,k.Earth,k.Earth,k.Water,k.Earth,k.Water]},quantity:1},{tile:{id:111,center:k.Earth,edges:[k.Earth,k.Earth,k.Water,k.Earth,k.Earth,k.Water]},quantity:1},{tile:{id:112,center:k.Earth,edges:[k.Earth,k.Earth,k.Earth,k.Earth,k.Earth,k.Water]},quantity:1},{tile:{id:113,name:"Toute terre",center:k.Earth},quantity:1}]});function H(e,t){if(e.length>t)e.unshift.apply(e,Object(s.a)(e.splice(-t)));else for(var a=0;a<t;)e.unshift(e.splice(-1)),a++;return e}var A=Math.cos(Math.PI/6),U=.5,J=[{q:1,r:0},{q:1,r:-1},{q:0,r:-1},{q:-1,r:0},{q:-1,r:1},{q:0,r:1}];function D(e,t,a,i,n){if(i)if(i.edges){var r=a/3,o=t.x,l=t.y,c=a;e.beginPath(),e.moveTo(o-c*A,l-c*U),e.lineTo(o-c*A,l+c*U),e.lineTo(o-r*A,l+r*U),e.lineTo(o-r*A,l-r*U),e.closePath(),e.fillStyle=n?n[i.edges[0]]:"red",e.fill(),e.beginPath(),e.moveTo(o-c*A,l+c*U),e.lineTo(o,l+c),e.lineTo(o,l+r),e.lineTo(o-r*A,l+r*U),e.closePath(),e.fillStyle=n?n[i.edges[1]]:"red",e.fill(),e.beginPath(),e.moveTo(o,l+c),e.lineTo(o+c*A,l+c*U),e.lineTo(o+r*A,l+r*U),e.lineTo(o,l+r),e.closePath(),e.fillStyle=n?n[i.edges[2]]:"red",e.fill(),e.beginPath(),e.moveTo(o+c*A,l+c*U),e.lineTo(o+c*A,l-c*U),e.lineTo(o+r*A,l-r*U),e.lineTo(o+r*A,l+r*U),e.closePath(),e.fillStyle=n?n[i.edges[3]]:"red",e.fill(),e.beginPath(),e.moveTo(o+c*A,l-c*U),e.lineTo(o,l-c),e.lineTo(o,l-r),e.lineTo(o+r*A,l-r*U),e.closePath(),e.fillStyle=n?n[i.edges[4]]:"red",e.fill(),e.beginPath(),e.lineTo(o,l-c),e.lineTo(o-c*A,l-c*U),e.lineTo(o-r*A,l-r*U),e.lineTo(o,l-r),e.closePath(),e.fillStyle=n?n[i.edges[5]]:"red",e.fill(),e.beginPath(),e.moveTo(o-r*A,l-r*U),e.lineTo(o-r*A,l+r*U),e.lineTo(o,l+r),e.lineTo(o+r*A,l+r*U),e.lineTo(o+r*A,l-r*U),e.lineTo(o,l-r),e.lineTo(o-r*A,l-r*U),e.closePath(),e.fillStyle=n?n[i.center]:"red",e.fill(),i.edges[0]!==i.edges[1]&&X(e,{x:o-c*A,y:l+c*U},{x:o-r*A,y:l+r*U},a),i.edges[1]!==i.edges[2]&&X(e,{x:o,y:l+c},{x:o,y:l+r},a),i.edges[2]!==i.edges[3]&&X(e,{x:o+c*A,y:l+c*U},{x:o+r*A,y:l+r*U},a),i.edges[3]!==i.edges[4]&&X(e,{x:o+c*A,y:l-c*U},{x:o+r*A,y:l-r*U},a),i.edges[4]!==i.edges[5]&&X(e,{x:o,y:l-c},{x:o,y:l-r},a),i.edges[5]!==i.edges[0]&&X(e,{x:o-c*A,y:l-c*U},{x:o-r*A,y:l-r*U},a),i.center!==i.edges[0]&&X(e,{x:o-r*A,y:l+r*U},{x:o-r*A,y:l-r*U},a),i.center!==i.edges[1]&&X(e,{x:o,y:l+r},{x:o-r*A,y:l+r*U},a),i.center!==i.edges[2]&&X(e,{x:o+r*A,y:l+r*U},{x:o,y:l+r},a),i.center!==i.edges[3]&&X(e,{x:o+r*A,y:l-r*U},{x:o+r*A,y:l+r*U},a),i.center!==i.edges[4]&&X(e,{x:o,y:l-r},{x:o+r*A,y:l-r*U},a),i.center!==i.edges[5]&&X(e,{x:o-r*A,y:l-r*U},{x:o,y:l-r},a)}else _(e,t,a,n?n[i.center]:"red");else _(e,t,a,"red")}function R(e,t,a,i,n){!function(e,t,a){var i=t.x,n=t.y,r=a;e.beginPath(),e.moveTo(i-r*A,n-r*U),e.lineTo(i-r*A,n+r*U),e.lineTo(i,n+r),e.lineTo(i+r*A,n+r*U),e.lineTo(i+r*A,n-r*U),e.lineTo(i,n-r),e.lineTo(i-r*A,n-r*U),e.closePath(),e.shadowBlur=20,e.shadowColor="black",e.strokeStyle="black",e.stroke(),e.fillStyle="",e.fill(),e.shadowBlur=0}(e,t,a),D(e,t,a,i,n)}function V(e,t,a){var i=t.x,n=t.y,r=a;e.beginPath(),e.moveTo(i-r*A,n-r*U),e.lineTo(i-r*A,n+r*U),e.lineTo(i,n+r),e.lineTo(i+r*A,n+r*U),e.lineTo(i+r*A,n-r*U),e.lineTo(i,n-r),e.lineTo(i-r*A,n-r*U),e.closePath(),e.strokeStyle="black",e.stroke()}function _(e,t,a,i){var n=t.x,r=t.y,o=a;e.beginPath(),e.moveTo(n-o*A,r-o*U),e.lineTo(n-o*A,r+o*U),e.lineTo(n,r+o),e.lineTo(n+o*A,r+o*U),e.lineTo(n+o*A,r-o*U),e.lineTo(n,r-o),e.lineTo(n-o*A,r-o*U),e.closePath(),e.fillStyle=i,e.fill()}function X(e,t,a,i){e.save(),e.beginPath(),e.lineTo(t.x,t.y),e.lineTo(a.x,a.y),e.closePath(),e.strokeStyle="#c2b280",e.lineWidth=i/12,e.lineCap="round",e.stroke(),e.restore()}function F(e,t){return{x:t*(Math.sqrt(3)*e.coordinates.q+Math.sqrt(3)/2*e.coordinates.r),y:t*(1.5*e.coordinates.r)}}function K(e,t){return{x:t*(Math.sqrt(3)*e.q+Math.sqrt(3)/2*e.r),y:t*(1.5*e.r)}}function G(e,t,a){var i={x:e.width/2,y:e.height/2};if(t.length>0){for(var n={min:Number.MAX_VALUE,max:Number.MIN_VALUE},r={min:Number.MAX_VALUE,max:Number.MIN_VALUE},o=0;o<t.length;o++){var l=K(t[o],a);n.min=Math.min(l.x,n.min),n.max=Math.max(l.x,n.max),r.min=Math.min(l.y,r.min),r.max=Math.max(l.y,r.max)}i.x=i.x-(n.max+n.min)/2,i.y=i.y-(r.max+r.min)/2}return i}function Y(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i={min:0,max:0},n=a?2:0,r=(i=e.tiles.reduce((function(e,t){return{min:Math.min(e.min,t.coordinates.r),max:Math.max(e.max,t.coordinates.r)}}),i)).max+-i.min+1+n,o=2+1.5*(r-1),l=Math.floor(t.height/o),c=t.width/6/A;if(c=Math.floor(c),e.tiles.length>0){for(var s={min:Number.MAX_VALUE,max:Number.MIN_VALUE},h=0;h<e.tiles.length;h++){var d=F(e.tiles[h],10);s.min=Math.min(d.x,s.min),s.max=Math.max(d.x,s.max)}var u=(s.max-s.min+20*A)/(20*A)+n;c=t.width/(2*u)/A,c=Math.floor(c)}return Math.min(l,c)}var Z=function(e){var t=e.size,a=e.defaultPatterns,r=e.playfield,o=e.tileSize,l=e.images,c=Object(n.useState)(null),d=Object(h.a)(c,2),u=d[0],f=d[1],g=Object(n.useState)(a),b=Object(h.a)(g,2),v=b[0],m=b[1];return Object(n.useEffect)((function(){var e=document.getElementById("background").getContext("2d");f(e)}),[]),Object(n.useEffect)((function(){if(u){var e=Object(s.a)(v),t=l[k.Earth];if(t){var a=u.createPattern(t,"repeat");a&&(e[k.Earth]=a)}var i=l[k.Water];if(i){var n=u.createPattern(i,"repeat");n&&(e[k.Water]=n)}m(e)}}),[l]),Object(n.useEffect)((function(){r&&u&&(u.clearRect(0,0,t.width,t.height),function(e,t,a,i){for(var n=G({width:e.canvas.width,height:e.canvas.height},t.tiles.map((function(e){return e.coordinates})),a),r=0;r<t.tiles.length;r++){var o=t.tiles[r],l=F(o,a);D(e,{x:n.x+l.x,y:n.y+l.y},a,o,i)}}(u,r,o,v))}),[r,u,t,o,v]),Object(i.jsx)("canvas",{id:"background",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:0}})},$=function(e){var t=e.size,a=e.nextTile,r=e.defaultPatterns,o=e.onClick,l=e.onWheel,c=e.tileSize,d=e.images,u=Object(n.useState)({x:0,y:0}),f=Object(h.a)(u,2),g=f[0],b=f[1],v=Object(n.useState)(null),m=Object(h.a)(v,2),j=m[0],x=m[1],E=Object(n.useState)(r),y=Object(h.a)(E,2),O=y[0],W=y[1];Object(n.useEffect)((function(){var e=document.getElementById("foreground").getContext("2d");x(e)}),[]),Object(n.useEffect)((function(){if(j){var e=Object(s.a)(O),t=d[k.Earth];if(t){var a=j.createPattern(t,"repeat");a&&(e[k.Earth]=a)}var i=d[k.Water];if(i){var n=j.createPattern(i,"repeat");n&&(e[k.Water]=n)}W(e)}}),[d]),Object(n.useEffect)((function(){j&&g.x&&g.y&&(j.clearRect(0,0,t.width,t.height),a&&R(j,g,c,a,O))}),[g,t,j,a,O,c]);return Object(i.jsx)("canvas",{id:"foreground",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:3},onMouseMove:function(e){e.preventDefault(),e.persist();var t={x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY};b(t)},onWheel:function(e){e.preventDefault(),e.persist(),l&&l(e.nativeEvent.deltaY)},onClick:function(e){e.preventDefault(),e.persist();var t={x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY};b(t),o&&o(t)}})},Q=function(e){var t=e.size,a=e.messages,r=Object(n.useState)(null),o=Object(h.a)(r,2),l=o[0],c=o[1];return Object(n.useEffect)((function(){var e=document.getElementById("messages").getContext("2d");e&&(e.font="24px Parisienne"),c(e)}),[]),Object(n.useEffect)((function(){if(a&&l){a.get("name");var e=a.get("remainingTiles");if(l.clearRect(0,0,t.width,t.height),e){var i=l.measureText(e);l.fillText(e,t.width-i.width,30)}}}),[a,l,t]),Object(i.jsx)("canvas",{id:"messages",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:1}})},ee=function(e){var t=e.size,a=e.playfield,r=e.tileSize,o=e.nextTile,l=e.defaultPatterns,c=e.images,d=Object(n.useState)(null),u=Object(h.a)(d,2),f=u[0],g=u[1],b=Object(n.useState)(l||null),v=Object(h.a)(b,2),m=v[0],j=v[1];return Object(n.useEffect)((function(){var e=document.getElementById("touchHelper").getContext("2d");g(e)}),[]),Object(n.useEffect)((function(){if(f&&m&&c){var e=Object(s.a)(m),t=c[k.Earth];if(t){var a=f.createPattern(t,"repeat");a&&(e[k.Earth]=a)}var i=c[k.Water];if(i){var n=f.createPattern(i,"repeat");n&&(e[k.Water]=n)}j(e)}}),[c]),Object(n.useEffect)((function(){if(a&&f){var e=[{q:0,r:0}];a.tiles.length>0&&(e=[],a.tiles.forEach((function(t){J.forEach((function(i){var n={q:t.coordinates.q+i.q,r:t.coordinates.r+i.r};e.find((function(e){return e.q===n.q&&e.r===n.r}))||(a.tiles.find((function(e){return e.coordinates.q===n.q&&e.coordinates.r===n.r}))||e.push(n))}))}))),f&&(f.clearRect(0,0,t.width,t.height),o&&function(e,t,a,i,n){for(var r=G({width:e.canvas.width,height:e.canvas.height},t,a),o=0;o<t.length;o++){var l=t[o],c=K(l,a);if(V(e,{x:r.x+c.x,y:r.y+c.y},a),i&&!i.hasOwnProperty("coordinates")&&R(e,{x:r.x+c.x,y:r.y+c.y},.75*a,i,n),i&&i.hasOwnProperty("coordinates")){var s=i.coordinates;s.q===l.q&&s.r===l.r&&R(e,{x:r.x+c.x,y:r.y+c.y},a,i,n)}}}(f,e,r,o,m))}}),[a,f,t,r,o,m]),Object(i.jsx)("canvas",{id:"touchHelper",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:2}})},te=function(e){var t=e.size,a=e.nextTile,r=e.patterns,o=e.tileSize,l=Object(n.useState)(null),c=Object(h.a)(l,2),s=c[0],d=c[1];return Object(n.useEffect)((function(){var e=document.getElementById("nextTile").getContext("2d");d(e)}),[]),Object(n.useEffect)((function(){s&&(s.clearRect(0,0,t.width,t.height),a&&(D(s,{x:t.width/2,y:t.height/2},o,a,r),function(e,t,a,i){e.save(),e.translate(t.x-a/2,t.y-a/2),e.scale(a/100,a/100),e.fillStyle=i,e.strokeStyle="black",e.lineWidth=2,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=4,e.beginPath(),e.moveTo(99.992,43.019),e.bezierCurveTo(100.57,29.262,67.638,22.564,66.211,20.996),e.bezierCurveTo(65.5,20.216,67.861,-.015,50,0),e.bezierCurveTo(32.139,-.015,34.499,20.216,33.788,20.996),e.bezierCurveTo(32.361,22.564,-.569,29.262,.008,43.019),e.bezierCurveTo(.584,56.777,18.059,49.711,21.786,53.76),e.bezierCurveTo(25.046,57.304,6.507,79.989,4.433,94.394),e.bezierCurveTo(3.757,99.089,5.077,100,9.64,100),e.bezierCurveTo(17.916,100,25.817,99.995,33.093,99.995),e.bezierCurveTo(36.38,99.995,37.549,98.106,39.245,95.503),e.bezierCurveTo(42.999,89.741,47.533,80.479,50,80.48),e.bezierCurveTo(52.466,80.479,57.001,89.741,60.755,95.502),e.bezierCurveTo(62.451,98.106,63.619,99.994,66.906,99.994),e.bezierCurveTo(74.181,99.994,82.083,99.999,90.359,99.999),e.bezierCurveTo(94.922,99.999,96.243,99.088,95.566,94.393),e.bezierCurveTo(93.493,79.988,74.955,57.303,78.213,53.7595),e.bezierCurveTo(81.94,49.711,99.417,56.777,99.992,43.019),e.closePath(),e.fill(),e.stroke(),e.restore()}(s,{x:t.width/2,y:t.height/2},o,"green")))}),[t,s,a,r,o]),Object(i.jsx)("canvas",{id:"nextTile",width:t.width,height:t.height,style:{border:"1px solid #000000",position:"absolute",zIndex:0}})},ae=Object(f.a)((function(e){return Object(g.a)({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{top:"auto",bottom:0,"& > div":{alignItems:"flex-start"}},grow:{flexGrow:1},canvasesContainer:{position:"absolute"}})})),ie=function(){var e=ae(),t=Object(n.useState)(navigator.maxTouchPoints>0),a=Object(h.a)(t,1)[0],o=r.a.useState(null),l=Object(h.a)(o,2),f=l[0],g=l[1],y=C(),W=y.windowInnerWidth,w=y.windowInnerHeight,q=Object(n.useState)({width:0,height:0}),z=Object(h.a)(q,2),I=z[0],A=z[1],U=Object(n.useState)(25),D=Object(h.a)(U,2),R=D[0],V=D[1],_=Object(n.useState)(null),X=Object(h.a)(_,2),F=X[0],K=X[1],ie=Object(n.useState)([]),ne=Object(h.a)(ie,2),re=ne[0],oe=ne[1],le=Object(n.useState)({tiles:[]}),ce=Object(h.a)(le,2),se=ce[0],he=ce[1],de=Object(n.useState)(new Map),ue=Object(h.a)(de,2),fe=ue[0],ge=ue[1],be=Object(n.useState)(N.map((function(e){return null}))),ve=Object(h.a)(be,2),me=ve[0],je=ve[1],xe=M(d),Ee=Object(h.a)(xe,2),ye=Ee[0],Oe=Ee[1],We=M(u),pe=Object(h.a)(We,2),we=pe[0],Te=pe[1];Object(n.useEffect)((function(){if("loaded"===Oe&&!me[k.Water]){var e=Object(s.a)(me);e[k.Water]=ye,je(e)}}),[ye,Oe,me]),Object(n.useEffect)((function(){if("loaded"===Te&&!me[k.Earth]){var e=Object(s.a)(me);e[k.Earth]=we,je(e)}}),[we,Te,me]),Object(n.useEffect)((function(){console.log("Window initial size",window.innerWidth,window.innerHeight);var e=window.innerWidth-2,t=window.innerHeight-2,a=document.getElementById("topBar");a&&(t-=a.scrollHeight);var i=document.getElementById("bottomBar");i&&(t-=i.scrollHeight),console.log("Canvas initial size",e,t),A({width:e,height:t});var n=Y({tiles:[]},{width:e,height:t},!0),r=localStorage.getItem("version");if(r&&B.b===JSON.parse(r)){var o=localStorage.getItem("playfield"),l=localStorage.getItem("remainingTiles");if(o&&l){var c=JSON.parse(o),s=JSON.parse(l);if(c&&s){console.log("restoring old game",o);var h=L.tiles.find((function(e){return e.tile.id===s[0]})),d=h?h.tile:null;K(d),he(c),oe(s);var u=Y(c,{width:e,height:t},s.length>0);return console.log("restoring old game newTileSize",u),void V(u)}}}else console.log("Not same version",B.b,r);Se(),V(n)}),[]),Object(n.useEffect)((function(){var e=W-2,t=w-2,a=document.getElementById("topBar");a&&(t-=a.scrollHeight);var i=document.getElementById("bottomBar");i&&(t-=i.scrollHeight),A({width:e,height:t})}),[W,w]),Object(n.useEffect)((function(){var e=Y(se,I,re.length>0);V(e)}),[I,se]);var qe=function(){if(console.log("handleCtrlZ",se.tiles.length),se.tiles.length>0){var e=Object(c.a)(Object(c.a)({},se),{},{tiles:Object(s.a)(se.tiles)}),t=e.tiles.pop(),a=[t.id].concat(Object(s.a)(re));K(t),he(e),oe(a)}},Se=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[a],e[a]=i}return e}(L.tiles.map((function(e){for(var t=[],a=0;a<e.quantity;a++)t.push(e.tile.id);return t})).flat()),t=L.tiles.find((function(t){return t.tile.id===e[0]})),a=t?t.tile:null;K(a),he({tiles:[]}),oe(e)};Object(n.useEffect)((function(){var e=new Map([["name","".concat(B.a," - ").concat(B.b)],["remainingTiles","".concat(re.length)]]);ge(e)}),[re.length]),Object(n.useEffect)((function(){localStorage.setItem("version",JSON.stringify(B.b)),localStorage.setItem("playfield",JSON.stringify(se)),localStorage.setItem("remainingTiles",JSON.stringify(re))}),[se,re]);var ze=function(){g(null)},Pe=function(e){if(F&&F.edges){var t=Object(c.a)(Object(c.a)({},F),{},{edges:H(F.edges,e>0?-1:1)});K(t)}},Ce=function(e){Pe(e)};return Object(i.jsx)(r.a.Fragment,{children:Object(i.jsxs)("div",{className:e.root,onKeyUp:function(e){e.preventDefault(),e.persist(),e.stopPropagation(),console.log("handleKeyUp event",e),console.log("handleKeyUp event",e.key);var t=new Map([["name","".concat(e.key)],["remainingTiles","".concat(re.length)]]);ge(t),"z"===e.key&&e.ctrlKey&&qe(),"Backspace"===e.key&&qe()},tabIndex:0,children:[Object(i.jsx)(b.a,{id:"topBar",position:"static",children:Object(i.jsxs)(v.a,{children:[Object(i.jsx)(E.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){g(e.currentTarget)},children:Object(i.jsx)(O.a,{})}),Object(i.jsx)(x.a,{variant:"h6",className:e.title,children:"".concat(B.a," - ").concat(B.b)}),a&&Object(i.jsxs)(E.a,{edge:"end",className:e.menuButton,color:"inherit","aria-label":"touchApp",children:[Object(i.jsx)(p.a,{})," ",navigator.maxTouchPoints]}),!a&&Object(i.jsx)(E.a,{edge:"end",className:e.menuButton,color:"inherit","aria-label":"mouseApp",children:Object(i.jsx)(T.a,{})})]})}),Object(i.jsxs)(m.a,{id:"simple-menu",anchorEl:f,keepMounted:!0,open:Boolean(f),onClose:ze,children:[Object(i.jsx)(j.a,{onClick:function(){ze(),Se()},children:"New game"}),Object(i.jsx)(j.a,{onClick:function(){ze(),qe()},children:"Undo"}),Object(i.jsx)(j.a,{onClick:function(){ze(),function(){for(var e=L.tiles.map((function(e){return e.tile})).flat(),t=I.height/I.width,a=1,i=a/(e.length/a);i<t;)i=++a/(e.length/a);for(var n=Math.ceil(e.length/a),r={tiles:[]},o=0,l=0,s=0;s<e.length;s++){var h=Object(c.a)(Object(c.a)({},e[s]),{},{coordinates:{q:o,r:l}});((o+=2)+l/2)/2%n===0&&(o=-(l+=2)/2),r.tiles.push(h)}K(null),he(r),oe([])}()},children:"Show tiles"}),Object(i.jsx)(j.a,{onClick:function(e){ze(),function(e){var t=document.getElementById("background");window.location.href=t.toDataURL("image/png")}()},children:"Capture"})]}),I.width&&I.height&&Object(i.jsxs)("div",{id:"canvasesContainer",className:e.canvasesContainer,children:[Object(i.jsx)(Z,{size:I,defaultPatterns:N,playfield:se,tileSize:R,images:me}),Object(i.jsx)(Q,{size:I,messages:fe}),a&&Object(i.jsx)(ee,{size:I,playfield:se,tileSize:R,nextTile:F,defaultPatterns:N,images:me}),!a&&Object(i.jsx)(ee,{size:I,playfield:se,tileSize:R,nextTile:null,defaultPatterns:null,images:null}),Object(i.jsx)($,{size:I,nextTile:a?null:F,defaultPatterns:N,onClick:function(e){if(F){var t={q:0,r:0};if(0!==se.tiles.length){var i=G(I,se.tiles.map((function(e){return e.coordinates})),R);t=function(e,t){var a=(Math.sqrt(3)/3*e.x-1/3*e.y)/t,i=2/3*e.y/t;return{q:Math.round(a),r:Math.round(i)}}({x:e.x-i.x,y:e.y-i.y},R)}if(void 0===se.tiles.find((function(e){return e.coordinates.q===t.q&&e.coordinates.r===t.r}))){if(0!==se.tiles.length){var n=0,r=!1,o=function(){var e=t.q+J[n].q,a=t.r+J[n].r;r=void 0!==se.tiles.find((function(t){return t.coordinates.q===e&&t.coordinates.r===a})),n++};do{o()}while(!r&&n<J.length);if(!r)return}if(a){if(!F.hasOwnProperty("coordinates")){var l=Object(c.a)(Object(c.a)({},F),{},{coordinates:t});return void K(l)}var h=F.coordinates;if(h.q!==t.q||h.r!==t.r){var d=Object(c.a)(Object(c.a)({},F),{},{coordinates:t});return void K(d)}}var u=Object(c.a)(Object(c.a)({},se),{},{tiles:[].concat(Object(s.a)(se.tiles),[Object(c.a)(Object(c.a)({},F),{},{coordinates:t})])}),f=Object(s.a)(re);if(f.length>0){var g;f.shift();var b=null===(g=L.tiles.find((function(e){return e.tile.id===f[0]})))||void 0===g?void 0:g.tile;K(b||null)}else K(null);he(u),oe(f)}}},onWheel:Pe,tileSize:R,images:me})]}),a&&Object(i.jsx)(b.a,{id:"bottomBar",position:"fixed",color:"primary",className:e.appBar,children:Object(i.jsxs)(v.a,{children:[Object(i.jsx)(E.a,{edge:"start",color:"inherit","aria-label":"rotate left",onClick:function(){Ce(-1)},disabled:!F,children:Object(i.jsx)(S.a,{})}),Object(i.jsx)("div",{className:e.grow}),Object(i.jsx)("div",{children:Object(i.jsx)(te,{size:{width:48,height:48},nextTile:F,patterns:N,tileSize:24})}),Object(i.jsx)("div",{className:e.grow}),Object(i.jsx)(E.a,{edge:"end",color:"inherit","aria-label":"rotate right",onClick:function(){Ce(1)},disabled:!F,children:Object(i.jsx)(P.a,{})})]})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,1,2]]]);
//# sourceMappingURL=main.2fcb1101.chunk.js.map