(this["webpackJsonpquarantine-timer"]=this["webpackJsonpquarantine-timer"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(14),n(1)),i=n(2),u=n(4),l=n(3),m=n(5),h=n(8);var v=function(){var e={count:3,interval:800,colors:["#FFD662FF","#ff6f69","#3CAEA3"],calc:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{x:(t+1)*(window.innerWidth/3)-100*(t+1),y:200+100*Math.random()-50+(2===t?-80:1)})}};return r.a.createElement("div",null,r.a.createElement(h.Fireworks,e),r.a.createElement("h1",null,"Happy New Year!"))},d=16094808e5-Date.now(),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hours:parseInt(d/36e5),minutes:parseInt(d/6e4%60),seconds:parseInt(d/36e5%24)},e.resetTimer=function(){e.setState({hours:0,minutes:0,seconds:0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.myInterval=setInterval((function(){var t=e.state,n=t.seconds,a=t.minutes,r=t.hours;n>0&&e.setState((function(e){return{seconds:e.seconds-1}})),0===n&&(0===a?0===r?clearInterval(e.myInterval):e.setState((function(e){return{hours:e.hours-1,minutes:59,seconds:59}})):e.setState((function(e){return{minutes:e.minutes-1,seconds:59}})))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){var e=this.state,t=e.hours,n=e.minutes,a=e.seconds;return[r.a.createElement("h2",null,"New Year"),r.a.createElement("div",null,0===t&&0===n&&0===a?r.a.createElement(v,null):r.a.createElement("h1",null,t<10?"0".concat(t):t," : ",n<10?"0".concat(n):n," : ",a<10?"0".concat(a):a),r.a.createElement("button",{className:"button2",onClick:this.resetTimer},"./Warp"),r.a.createElement("a",{href:"https://github.com/init-JaeminKim/NewYear-Timer"},r.a.createElement("button",null,"source code")))]}}]),n}(a.Component),p=(n(15),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.247f1781.chunk.js.map