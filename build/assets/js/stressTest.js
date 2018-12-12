var stressTest=function(){var d="__STRESSTESTBASELINE__",l=/\s+/,i=Object.keys||function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e},a=Array.prototype.forEach||function(t){for(var e=0,n=this.length;e<n;e++)t.call(this,this[e],e,this)},c=Array.prototype.filter||function(e){var n=[];return a.call(this,function(t){e(t)&&n.push(t)}),n},u=Array.prototype.indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(this[e]===t)return e;return-1};function h(s,r){a.call(i(r),function(t){try{var e=t.replace(/\-([a-z])/gi,function(t,e){return e.toUpperCase()}),n=r[t];s.style[e]="number"==typeof n&&"zIndex"!=e?n+"px":n}catch(t){}})}function f(e,n){if(n||(n="*"),void 0!==e.length){var s=[];return a.call(e,function(t){a.call(f(t,n),function(t){s.push(t)})}),s}var t=n.split(" ");if(1<t.length){s=[];return a.call(t,function(t){a.call(f(e,t),function(t){s.push(t)})}),s}return e.all&&"*"==n?e.all:e.getElementsByTagName(n)}function p(t,e,n){var s=e.split("."),r=t.attachEvent?function(){n.call(t,window.event)}:n;t.__events||(t.__events={}),t.__events[e]||(t.__events[e]=[]),t.__events[e].push(r),t.attachEvent?t.attachEvent("on"+s[0],r):t.addEventListener&&t.addEventListener(s[0],r,!0)}function m(e,n,t){if(!t&&e.__events&&e.__events[n]){var s=[],r=e.__events[n];s.push.apply(s,r),r.slice(r.length),a.call(s,function(t){m(e,n,t)})}else{var o=n.split(".");if(e.detachEvent?e.detachEvent("on"+o[0],t):e.removeEventListener&&e.removeEventListener(o[0],t,!0),e.__events&&e.__events[n]){var l=u.call(e.__events[n],t);-1<l&&e.__events[n].splice(l,1)}}e=null}function o(t){var e={};return a.call(t,function(t){e[t]=!0}),i(e)}function g(t,e){var n,s,r=e.substr(0,1);e=e.substr(1),"."===r?(n=t,s=e,a.call(n,function(t){t&&(t.className=o(c.call((t.className||"").split(l),function(t){return t!=s})).join(" "))})):"#"===r&&a.call(t,function(t){t.attributes.removeNamedItem("id")})}function v(t,e){var n,s,r=e.substr(0,1);e=e.substr(1),"."===r?(n=t,s=e,a.call(n,function(t){if(t){var e=(t.className||"").split(" ");e.push(s),t.className=o(e).join(" ")}})):"#"===r&&a.call(t,function(t){t.id=e})}function b(e,n,s){var t,r,o,l,i,a,c=n.elms[e]||[];g(c,e),n.beforeTest&&n.beforeTest({elms:c,selector:e}),r=(t=n).times,o=function(t){v(c,e),e==d?n.baseTime=t:(n.results[e]={length:c.length,children:f(c).length,time:t,delta:t-n.baseTime},n.afterTest&&n.afterTest({elms:c,selector:e,result:n.results[e]})),s(e,t)},l=+new Date,i=!1,a=t.work||function(){i=!1,window.scrollTo(0,r%2==0?100:0)},r*=2,p(window,"scroll.stressTest",function(){i||(i=!0,0<--r&&!t.cancel?setTimeout(a,0):setTimeout(function(){m(window,"scroll.stressTest"),o(+new Date-l)},0))}),a()}function y(e,n,s){return n=n||{},a.call(i(e),function(t){!s&&n.hasOwnProperty(t)||(n[t]=e[t])}),n}function r(n){var t,e,s;n=y({times:0,beforeTest:null,afterTest:null,elms:(t=n.all,e=t.all||f(document),s={},a.call(e,function(e){e.className&&!e.toString().match(/svg/i)?a.call(c.call(e.className.split(l),function(t){return 0<t.length}),function(t){s["."+t]||(s["."+t]=[]),s["."+t].push(e)}):e.id&&(s["#"+e.id]||(s["#"+e.id]=[]),s["#"+e.id].push(e))}),s),results:{},finish:null},n),window.scrollTo(0,0);var r=n.queue=i(n.elms),o=function(t,e){0<r.length&&!n.cancel?b(r.shift(),n,o):(m(document,"keydown.stressTest"),n.finish&&n.finish())};p(document,"keydown.stressTest",function(t){27==t.keyCode&&(n.cancel=!0)}),n.times=15,b(d,n,function(t,e){n.times=Math.round(45/e*750),b(d,n,o)})}function w(t,e,n){e=e||0,n=n||2;for(var s=(t+".").split(".");s[0].length<e;)s[0]="0"+s[0];if(n<1)s[1]="";else if(s[1].length>n)s[1]=s[1].substr(0,n);else for(;s[1].length<n;)s[1]+="0";return s[0]+(0<s[1].length?"."+s[1]:"")}return r.bind=p,r.unbind=m,r.bookmarklet=function(){r.report&&r.report.close();var o=document.createElement("iframe"),t=document.createElement("iframe");y({scrolling:"no",frameBorder:"no"},o,!0),document.body.appendChild(o),o.doc=o.contentDocument||o.contentWindow.document,o.doc.write("<html><head></head><body></body></html>"),o.doc.close();var l=o.doc.createElement("div"),e=o.doc.createElement("a"),n={finish:function(){var n,t,e,s,r;this.cancel?o.close():(t=l,e="<table><thead><tr><th>Selector</th><th># Elms.</th><th># Child.</th><th> </th><th>Delta</th><th>Total</th></tr></thead>",s=i((n=this).results),r=s.sort(function(t,e){return n.results[t].time-n.results[e].time}).slice(0,20),a.call(r,function(t){e+='<tr><td>Removing <strong style="font:12px monospace">'+t+'</strong></td><td style="text-align:right; font:12px monospace">'+n.results[t].length+'</td><td style="text-align:right; font:12px monospace">'+n.results[t].children+'</td><td style="text-align:right">'+(n.results[t].delta<0?'<span style="color:red">saves</span>':'<span style="color:green">adds</span>')+'</td><td style="text-align:right; font:12px monospace">'+w(Math.abs(n.results[t].delta)/n.times)+'ms</td><td style="text-align:right; font:12px monospace">'+w(n.results[t].time/n.times)+"ms</td></tr>\n"}),e+='</table><hr/><table><tr><td style="text-align:right">Selectors Tested:</td><td style="font:12px monospace">'+s.length+'</td></tr><tr><td style="text-align:right">Baseline Time:</td><td style="font:12px monospace">'+w(n.baseTime/n.times)+'ms</td></tr><tr><td style="text-align:right">Num. Tests:</td><td style="font:12px monospace">'+n.times+"</td></tr>",c.call(s,function(t){return n.results[t].time<=15}).length&&(e+='<tr><td style="color:red; text-align:right;font-weight:bold">Warning:</td><td>Increase the number<br />of tests to get more<br />accurate results</td></tr>'),t.innerHTML=e+"</table>",a.call(f(t,"td th"),function(t){h(t,{padding:1,verticalAlign:"top",whiteSpace:"nowrap",fontSize:12})}))},beforeTest:function(t){var e=this.queue.length;l.innerHTML="Testing <strong>"+t.selector+"</strong><br/>"+e+" test"+(1===e?"":"s")+" remain"},all:f(document)};o.resize=function(){var t=o.doc.body;h(o,{width:t.scrollWidth,height:t.scrollHeight})},setInterval(o.resize,100);var s=0;a.call(n.all,function(t){var e=parseInt(t.style.zIndex,10);!isNaN(e)&&s<e&&(s=e)}),h(o,{position:"fixed",top:10,right:10,zIndex:s+=99999,background:"white",padding:2,border:"solid 2px #aaa",width:200,height:40,borderRadius:4,boxShadow:"0 0 8px #eee"}),h(o.doc.body,{font:"12px Helvetica,Arials,sans-serif",color:"#444"}),h(l,{whiteSpace:"nowrap"}),e.innerHTML="&#215;",h(e,{position:"absolute",top:0,right:0,textDecoration:"none",fontWeight:"bold",cursor:"pointer",color:"red",fontSize:"1.3em",lineHeight:8}),o.close=function(){o.parentNode.removeChild(o),t.parentNode.removeChild(t),m(e,"click"),r.report=null,n.cancel=!0},p(e,"click",o.close),h(t,{height:2*window.screen.height,width:window.screen.width,position:"absolute",top:0,left:0,visible:"hidden",zIndex:s-1}),document.body.appendChild(t),o.doc.body.appendChild(e),o.doc.body.appendChild(l),r.report=o,r(n)},r}();