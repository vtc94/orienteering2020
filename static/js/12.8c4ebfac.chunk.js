(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[12,27,28,30,31,39,46,67],{17:function(e,t,n){"use strict";n.r(t),n.d(t,"showAlert",(function(){return s}));var s=function(e,t){if(document.getElementById("error")){var n=window.sessionStorage.getItem("removeAlert");clearTimeout(n),document.getElementById("error").remove()}var s=document.createElement("div");if(s.id="error",s.innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="text-align:center">'+e+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>',document.body.appendChild(s),-1!=t){var a=setTimeout((function(){document.getElementById("error")&&document.getElementById("error").remove()}),t);window.sessionStorage.setItem("removeAlert",a)}}},18:function(e,t,n){"use strict";n.r(t);var s=n(2),a=function e(){Object(s.a)(this,e)};function r(e,t,n){var s=e[t];e[t]=e[n],e[n]=s}function o(e,t){var n=t.split("/"),s=e;return n.forEach((function(e){s=s[e]})),s}t.default=a,a.prototype.findMax=function(e,t){var n,s;return e.forEach((function(e){var a=Number(o(e,t));(null==n||n<a)&&(n=a,s=e)})),s},a.prototype.findMin=function(e,t){var n,s=0;return e.forEach((function(e){var a=Number(o(e,t));(null==n||n>a)&&(n=a,s=e)})),s},a.prototype.quickSort=function e(t,n,s,a){var i;return t.length>1&&(n<(i=function(e,t,n,s){var a=e[Math.floor((n+t)/2)],i=t,l=n;for(;i<=l;){for(;o(e[i],s)<o(a,s);)i++;for(;o(e[l],s)>o(a,s);)l--;i<=l&&(r(e,i,l),i++,l--)}return i}(t,n,s,a))-1&&e(t,n,i-1,a),i<s&&e(t,i,s,a)),t}},19:function(e,t,n){"use strict";n.r(t);var s=n(2),a=function e(){Object(s.a)(this,e)};t.default=a,a.prototype.sToHms=function(e){var t={},n=parseInt(e/3600),s=parseInt((e-3600*n)/60),a=e-3600*n-60*s;return(t={h:n=n<10?"0"+n:n,m:s=s<10?"0"+s:s,s:a=a<10?"0"+a:a}).full=n+":"+s+":"+a,n=0==n?"":n+":",s=0==s?"":s+":",t.short=n+s+a,t}},25:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n(11),r=n(12),o=n(13),i=n(1),l=n.n(i),c=n(17),u=n(3),d=n(18),f=n(5),m=n(19),p=n(52),h=(n(79),function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.renderResults(),Object(p.default)(this.props.course.checkPointNo)}},{key:"componentDidUpdate",value:function(){Object(p.default)(this.props.course.checkPointNo)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",{id:"courseResult",className:"courseResult px-sm-5 pt-4 pt-sm-5"},l.a.createElement("h2",{className:"title mt-3 mb-4"},"Results"),this.state.content)}},{key:"renderResults",value:function(){var e=this,t=(new f.default).getCookie("activeId");(new u.default).postData("/results/getResults/",{event:this.props.course.event,type:this.props.course.type}).then((function(n){n.error?Object(c.showAlert)(n.error,5e3):function(){for(var s=[],a=new d.default,r=a.findMax(n,"scanNo").scanNo,o=[],i=function(){var i=[];n.forEach((function(e){e.scanNo==r&&i.push(e)}));for(var c=0,u=function(){var r=a.findMin(i,"timeTaken"),u=[];n.forEach((function(e){e.username===r.username&&u.push(e)})),u=a.quickSort(u,0,u.length-1,"scanNo");var d=[];u.forEach((function(e){d.push(l.a.createElement("div",{key:e.position+e.timeTaken+"checkpoint",className:"checkpoint tooltips d-flex align-items-center"},l.a.createElement("div",{className:""}),l.a.createElement("span",{className:"tooltiptext px-3 py-3"},"Number of Scans: ",e.scanNo,l.a.createElement("br",null),"Score: ",e.score,l.a.createElement("br",null),"Time Taken: ",(new m.default).sToHms(e.timeTaken).short,l.a.createElement("br",null),"Speed: ",(new m.default).sToHms(e.speed).short)))}));for(var f=n.length-1;f>=0;f--){var p=n[f];p.username===r.username&&n.splice(n.indexOf(p),1)}i.splice(i.indexOf(r),1);var h=[];if(h.push(l.a.createElement("div",{key:r.username+"td",id:r.username,className:"td col-10"},l.a.createElement("div",{key:r.username+"label",className:"header text-left py-3 px-3"},l.a.createElement("b",null,r.username)),l.a.createElement("div",{key:r.username+"bar",className:"bar col-12 d-flex align-items-center pb-3"},d),l.a.createElement("div",{key:r.username+"final",className:"finalResult col-12 d-flex justify-content-around pb-2"},"Score"==e.props.course.type?l.a.createElement("div",{className:"score"},window.innerWidth>576?"Points: ":"P: "," ",r.score):"",l.a.createElement("div",{className:"timeTaken"},window.innerWidth>576?"Time Taken: ":"T: "," ",(new m.default).sToHms(r.timeTaken).short),l.a.createElement("div",{className:"speed"},window.innerWidth>576?"Average Speed: ":"AS: "," ",(new m.default).sToHms(r.speed).short)))),h.push(l.a.createElement("div",{key:r.position+"td",className:"td col-2 pt-4"},l.a.createElement("h4",null,r.position),l.a.createElement("span",{className:"label"},window.innerWidth>576?"Position":"Pos"))),o.push(l.a.createElement("div",{key:r.position+"tr",className:"tr col-12 row p-0 mx-0 border"},h)),0==s.length&&0==t.indexOf(r.username)&&s.push(l.a.createElement("div",{key:r.position+"yourtr",className:"tr col-12 row p-0 mx-0"},h)),++c>1e3)return"break"};i.length>0;){if("break"===u())break}r--};r>0;)i();var c=[];c.push(l.a.createElement("div",{key:"yourResult",id:"yourResult",className:"yourResult mb-2"},s)),c.push(l.a.createElement("div",{key:"resultsTable",id:"resultsTable",className:"resultsTable"},l.a.createElement("div",null,l.a.createElement("b",null,"All results")),l.a.createElement("div",{className:"table col-12 p-0 py-1 py-sm-2 border"},l.a.createElement("div",{className:"tbody px-3 px-sm-4"},o)))),e.setState({content:c})}()}))}}]),n}(l.a.Component));t.default=h},52:function(e,t,n){"use strict";n.r(t);var s=n(0);function a(e){if(Object(s.eId)("courseResult").style.height=Object(s.eId)("nav").offsetTop-Object(s.eId)("courseResult").offsetTop+"px",!Object(s.eId)("resultsTable"))return!1;Object(s.eId)("resultsTable").style.height=.99*(Object(s.eId)("nav").offsetTop-Object(s.eId)("resultsTable").offsetTop)+"px",Object(s.eClass)("table")[0].style.height=.97*(Object(s.eId)("resultsTable").offsetTop+Object(s.eId)("resultsTable").offsetHeight-Object(s.eClass)("table")[0].offsetTop)+"px",function(e){if(!Object(s.eClass)("bar"))return!1;for(var t=Object(s.eClass)("bar"),n=function(n){for(var s=t[n].getElementsByClassName("checkpoint"),a=function(a){s[a].style.width=t[n].offsetWidth/(parseInt(e)+1)+"px",s[a].style.height="15px",0==a&&(s[a].style.borderLeft="2px solid #5aa2f9"),a==s.length-1&&(s[a].style.borderRight="2px solid #5aa2f9",s[a].getElementsByTagName("div")[0].style.borderRight=0),s[a].onmouseenter=function(){window.sessionStorage.setItem("showTooltip","1"),r(s[a])},s[a].onmouseleave=function(){window.sessionStorage.removeItem("showTooltip"),r(s[a])}},o=0;o<s.length;o++)a(o)},a=0;a<t.length;a++)n(a)}(e)}function r(e){var t=e.getElementsByClassName("tooltiptext")[0];1==window.sessionStorage.showTooltip?(t.style.top=t.offsetTop-.7*t.offsetHeight-Object(s.eClass)("tbody")[0].scrollTop+"px",t.style.left=t.offsetLeft-.1*t.offsetWidth-Object(s.eClass)("tbody")[0].scrollLeft+"px",t.style.visibility="visible"):(t.style.top="initial",t.style.left="initial",t.style.visibility="hidden")}t.default=function(e){Object(s.darkLightMode)("courseResult"),a(e);var t=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(t)||window.addEventListener("resize",(function(){a(e)}))}},79:function(e,t,n){}}]);
//# sourceMappingURL=12.8c4ebfac.chunk.js.map