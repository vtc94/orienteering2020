(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[39,30,31,46,67],{18:function(e,t,n){"use strict";n.r(t);var s=n(2),a=function e(){Object(s.a)(this,e)};function o(e,t,n){var s=e[t];e[t]=e[n],e[n]=s}function r(e,t){var n=t.split("/"),s=e;return n.forEach((function(e){s=s[e]})),s}t.default=a,a.prototype.findMax=function(e,t){var n,s;return e.forEach((function(e){var a=Number(r(e,t));(null==n||n<a)&&(n=a,s=e)})),s},a.prototype.findMin=function(e,t){var n,s=0;return e.forEach((function(e){var a=Number(r(e,t));(null==n||n>a)&&(n=a,s=e)})),s},a.prototype.quickSort=function e(t,n,s,a){var l;return t.length>1&&(n<(l=function(e,t,n,s){var a=e[Math.floor((n+t)/2)],l=t,i=n;for(;l<=i;){for(;r(e[l],s)<r(a,s);)l++;for(;r(e[i],s)>r(a,s);)i--;l<=i&&(o(e,l,i),l++,i--)}return l}(t,n,s,a))-1&&e(t,n,l-1,a),l<s&&e(t,l,s,a)),t}},19:function(e,t,n){"use strict";n.r(t);var s=n(2),a=function e(){Object(s.a)(this,e)};t.default=a,a.prototype.sToHms=function(e){var t={},n=parseInt(e/3600),s=parseInt((e-3600*n)/60),a=e-3600*n-60*s;return(t={h:n=n<10?"0"+n:n,m:s=s<10?"0"+s:s,s:a=a<10?"0"+a:a}).full=n+":"+s+":"+a,n=0==n?"":n+":",s=0==s?"":s+":",t.short=n+s+a,t}},25:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(11),o=n(12),r=n(13),l=n(1),i=n.n(l),c=n(17),u=n(3),f=n(18),d=n(5),p=n(19),m=n(52),h=(n(79),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.renderResults(),Object(m.default)(this.props.course.checkPointNo)}},{key:"componentDidUpdate",value:function(){Object(m.default)(this.props.course.checkPointNo)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{id:"courseResult",className:"courseResult px-sm-5 pt-4 pt-sm-5"},i.a.createElement("h2",{className:"title mt-3 mb-4"},"Results"),this.state.content)}},{key:"renderResults",value:function(){var e=this,t=(new d.default).getCookie("activeId");(new u.default).postData("/results/getResults/",{event:this.props.course.event,type:this.props.course.type}).then((function(n){console.log(n),n.error?(Object(c.showAlert)(n.error,5e3),console.log(n.error)):function(){for(var s=[],a=new f.default,o=a.findMax(n,"scanNo").scanNo,r=[],l=function(){var l=[];n.forEach((function(e){e.scanNo==o&&l.push(e)}));for(var c=0,u=function(){var o=a.findMin(l,"timeTaken"),u=[];n.forEach((function(e){e.username===o.username&&u.push(e)})),u=a.quickSort(u,0,u.length-1,"scanNo");var f=[];u.forEach((function(e){f.push(i.a.createElement("div",{key:e.position+e.timeTaken+"checkpoint",className:"checkpoint tooltips d-flex align-items-center"},i.a.createElement("div",{className:""}),i.a.createElement("span",{className:"tooltiptext px-3 py-3"},"Number of Scans: ",e.scanNo,i.a.createElement("br",null),"Score: ",e.score,i.a.createElement("br",null),"Time Taken: ",(new p.default).sToHms(e.timeTaken).short,i.a.createElement("br",null),"Speed: ",(new p.default).sToHms(e.speed).short)))}));for(var d=n.length-1;d>=0;d--){var m=n[d];m.username===o.username&&n.splice(n.indexOf(m),1)}l.splice(l.indexOf(o),1);var h=[];if(h.push(i.a.createElement("div",{key:o.username+"td",id:o.username,className:"td col-10"},i.a.createElement("div",{key:o.username+"label",className:"header text-left py-3 px-3"},i.a.createElement("b",null,o.username)),i.a.createElement("div",{key:o.username+"bar",className:"bar col-12 d-flex align-items-center pb-3"},f),i.a.createElement("div",{key:o.username+"final",className:"finalResult col-12 d-flex justify-content-around pb-2"},"Score"==e.props.course.type?i.a.createElement("div",{className:"score"},window.innerWidth>576?"Points: ":"P: "," ",o.score):"",i.a.createElement("div",{className:"timeTaken"},window.innerWidth>576?"Time Taken: ":"T: "," ",(new p.default).sToHms(o.timeTaken).short),i.a.createElement("div",{className:"speed"},window.innerWidth>576?"Average Speed: ":"AS: "," ",(new p.default).sToHms(o.speed).short)))),h.push(i.a.createElement("div",{key:o.position+"td",className:"td col-2 pt-4"},i.a.createElement("h4",null,o.position),i.a.createElement("span",{className:"label"},window.innerWidth>576?"Position":"Pos"))),r.push(i.a.createElement("div",{key:o.position+"tr",className:"tr col-12 row p-0 mx-0 border"},h)),0==s.length&&0==t.indexOf(o.username)&&s.push(i.a.createElement("div",{key:o.position+"yourtr",className:"tr col-12 row p-0 mx-0"},h)),++c>1e3)return console.log("end"),"break"};l.length>0;){if("break"===u())break}o--};o>0;)l();var c=[];c.push(i.a.createElement("div",{id:"yourResult",className:"yourResult mb-2"},s)),c.push(i.a.createElement("div",{key:"resultsTable",id:"resultsTable",className:"resultsTable"},i.a.createElement("div",null,i.a.createElement("b",null,"All results")),i.a.createElement("div",{className:"table col-12 p-0 py-1 py-sm-2 border"},i.a.createElement("div",{className:"tbody px-3 px-sm-4"},r)))),e.setState({content:c})}()}))}}]),n}(i.a.Component));t.default=h},52:function(e,t,n){"use strict";n.r(t);var s=n(0);function a(e){if(Object(s.eId)("courseResult").style.height=Object(s.eId)("nav").offsetTop-Object(s.eId)("courseResult").offsetTop+"px",!Object(s.eId)("resultsTable"))return!1;Object(s.eId)("resultsTable").style.height=.99*(Object(s.eId)("nav").offsetTop-Object(s.eId)("resultsTable").offsetTop)+"px",Object(s.eClass)("table")[0].style.height=.97*(Object(s.eId)("resultsTable").offsetTop+Object(s.eId)("resultsTable").offsetHeight-Object(s.eClass)("table")[0].offsetTop)+"px",function(e){if(!Object(s.eClass)("bar"))return!1;for(var t=Object(s.eClass)("bar"),n=function(n){for(var s=t[n].getElementsByClassName("checkpoint"),a=function(a){s[a].style.width=t[n].offsetWidth/(parseInt(e)+1)+"px",s[a].style.height="15px",0==a&&(s[a].style.borderLeft="2px solid #5aa2f9"),a==s.length-1&&(s[a].style.borderRight="2px solid #5aa2f9",s[a].getElementsByTagName("div")[0].style.borderRight=0),s[a].onmouseenter=function(){window.sessionStorage.setItem("showTooltip","1"),o(s[a])},s[a].onmouseleave=function(){window.sessionStorage.removeItem("showTooltip"),o(s[a])}},r=0;r<s.length;r++)a(r)},a=0;a<t.length;a++)n(a)}(e)}function o(e){var t=e.getElementsByClassName("tooltiptext")[0];1==window.sessionStorage.showTooltip?(t.style.top=t.offsetTop-.7*t.offsetHeight-Object(s.eClass)("tbody")[0].scrollTop+"px",t.style.left=t.offsetLeft-.1*t.offsetWidth-Object(s.eClass)("tbody")[0].scrollLeft+"px",t.style.visibility="visible"):(t.style.top="initial",t.style.left="initial",t.style.visibility="hidden")}t.default=function(e){Object(s.darkLightMode)("courseResult"),a(e);var t=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(t)||window.addEventListener("resize",(function(){a(e)}))}},79:function(e,t,n){}}]);
//# sourceMappingURL=39.27ce604e.chunk.js.map