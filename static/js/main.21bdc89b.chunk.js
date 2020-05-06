(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[60],{0:function(e,t,s){"use strict";s.r(t),s.d(t,"eId",(function(){return n})),s.d(t,"eClass",(function(){return o})),s.d(t,"darkLightMode",(function(){return c})),s.d(t,"dragButton",(function(){return a})),s.d(t,"randomColor",(function(){return i}));var n=function(e){return document.getElementById(e)},o=function(e){return document.getElementsByClassName(e)},r=function(e){for(var t=document.getElementsByClassName(e),s=0;s<t.length;s++)t[s].className=t[s].className.replace(" dark-"+e,"")+" dark-"+e},c=function(e){var t=document.getElementById("darkThemeSwitch");"on"==window.localStorage.getItem("darkThemeMode")?(t.checked=!0,document.body.style.backgroundColor="rgba(0,0,0,0.7)",r(e)):t.checked=!1,t.addEventListener("click",(function(){t.checked?(document.body.style.backgroundColor="rgba(0,0,0,0.7)",r(e)):(document.body.style.backgroundColor="rgba(0,0,0,0)",function(e){for(var t=document.getElementsByClassName(e),s=0;s<t.length;s++)t[s].className=t[s].className.replace(" dark-"+e,"")}(e))}))};function a(e){!function(e){var t=0,s=0;function n(n){(n=n||window.event).preventDefault(),s=t-n.clientY,t=n.clientY,e.style.top=e.offsetTop-s+"px",e.style.right="0px"}function o(){document.onmouseup=null,document.onmousemove=null}e.onmousedown=function(e){(e=e||window.event).preventDefault(),t=e.clientY,document.onmouseup=o,document.onmousemove=n}}(document.getElementById(e))}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"rgba("+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+Math.round(255*Math.random())+","+e+")"}},10:function(e,t,s){"use strict";s.r(t);var n=s(0);function o(){["/","/login/","/register/","/guest/"].indexOf(window.location.hash.replace("#/","/"))>=0?(Object(n.eId)("app").style.minHeight=.6*Object(n.eId)("app").offsetWidth+"px",window.innerWidth>window.innerHeight?Object(n.eId)("app").style.borderRadius=.07*parseInt(Object(n.eId)("app").offsetHeight)+"px":Object(n.eId)("app").style.borderRadius=.07*parseInt(Object(n.eId)("app").offsetWidth)+"px"):(Object(n.eId)("app").style.minHeight=window.innerHeight+"px",Object(n.eId)("app").style.position="relative",Object(n.eId)("app").style.borderRadius=0,Object(n.eId)("app").className=Object(n.eId)("app").className.replace(" pt-5",""))}t.default=function(){Object(n.darkLightMode)("App"),Object(n.darkLightMode)("shadow"),Object(n.darkLightMode)("shadow-lg"),o();var e=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(e)||window.addEventListener("resize",o)}},15:function(e,t,s){"use strict";s.r(t);var n=s(4),o=s(14),r=s(2),c=s(11),a=s(12),i=s(13),u=s(1),l=s.n(u),p=s(3),d=s(5),h=s(6),m=s(10),f=(s(51),function(e){Object(i.a)(f,e);var t=Object(a.a)(f);function f(e){var s;return Object(r.a)(this,f),(s=t.call(this,e)).state={},s}return Object(c.a)(f,[{key:"componentDidMount",value:function(){this.authenticate(),this.renderHeader(),Object(m.default)()}},{key:"componentDidUpdate",value:function(){Object(m.default)()}},{key:"render",value:function(){var e=this.state.component,t=this.state.render;return l.a.createElement("div",{id:"app",className:"App container-fluid shadow-lg"},l.a.createElement(u.Suspense,{fallback:""},e&&t?l.a.createElement(e,null):"",e&&t?l.a.createElement(h.default,null):""))}},{key:"renderHeader",value:function(){var e;switch(window.location.hash.replace("#/","/")){case"/":case"/login/":case"/register/":case"/guest/":e="./components/Layout/Header";break;default:e="./components/Layout/Nav"}var t=l.a.lazy((function(){return s(78)("".concat(e))}));this.setState(Object(o.a)({},this.state,Object(n.a)({},"component",t)))}},{key:"authenticate",value:function(){var e=this;(new p.default).postData("/authentication/loggedin/",{}).then((function(t){if(!t)return!1;if(!t.error&&"localhost"===window.location.hostname){var s=Date.now(),n=new Date(s+12096e5);n=n.toUTCString();var o=new d.default;o.setCookie("username",t.username,n,"/"),o.setCookie("activeId",t.activeId,n,"/")}if(t.error)if("not logged in"==t.error&&"/"!==window.location.hash.replace("#/","/")){var r=window.location.hash.replace("#/","/");"/login/"===r||"/register/"===r||r.includes("/guest/")||"/logout/"===r?e.setState({render:!0}):window.location.href=window.sessionStorage.path}else e.setState({render:!0});else switch(window.location.hash.replace("#/","/")){case"/":case"/home/":case"/login/":case"/register/":case"/guest/":window.location.href=window.sessionStorage.path+"events/";default:e.setState({render:!0})}}))}}]),f}(l.a.Component));t.default=f},16:function(e,t,s){"use strict";s.r(t),s.d(t,"register",(function(){return o})),s.d(t,"unregister",(function(){return c}));var n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e){if("serviceWorker"in navigator){if(new URL("/orienteering2020",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/orienteering2020","/service-worker.js");n?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(s){var n=s.headers.get("content-type");404===s.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):r(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):r(t,e)}))}}function r(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},3:function(e,t,s){"use strict";s.r(t);var n=s(7),o=s.n(n),r=s(27),c=s(2),a=function e(){Object(c.a)(this,e)};t.default=a,a.prototype.postData=function(){var e=Object(r.a)(o.a.mark((function e(){var t,s,n,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",s=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch("https://orienteering2020.000webhostapp.com/public"+t,{method:"POST",mode:"cors",cache:"no-cache",headers:{},credentials:"include",redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(s)});case 4:return n=e.sent,e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a.prototype.getText=function(){var e=Object(r.a)(o.a.mark((function e(){var t,s,n=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",e.next=3,fetch("http://orienteering2020.000webhostapp.com/public"+t);case 3:return s=e.sent,e.next=6,s.text();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},49:function(e,t,s){},5:function(e,t,s){"use strict";s.r(t);var n=s(2),o=function e(){Object(n.a)(this,e),this.cookies=document.cookie};t.default=o,o.prototype.getCookie=function(e){var t=this.cookies.indexOf(e),s=this.cookies.indexOf("=",t),n=this.cookies.indexOf(";",t);return n>0?this.cookies.substring(s+1,n):this.cookies.substring(s+1)},o.prototype.setCookie=function(e,t,s,n){document.cookie=e+"="+t+"; expires="+s+"; path="+n}},50:function(e,t,s){},51:function(e,t,s){},6:function(e,t,s){"use strict";s.r(t);var n=s(4),o=s(14),r=s(2),c=s(11),a=s(12),i=s(13),u=s(1),l=s.n(u),p=s(9),d=(s(49),function(e){Object(i.a)(d,e);var t=Object(a.a)(d);function d(e){var s;return Object(r.a)(this,d),(s=t.call(this,e)).state={},s}return Object(c.a)(d,[{key:"componentDidMount",value:function(){this.renderMain(),Object(p.default)()}},{key:"componentDidUpdate",value:function(){Object(p.default)()}},{key:"render",value:function(){var e=this.state.component;return l.a.createElement("div",{id:"main",className:"main"},l.a.createElement(u.Suspense,{fallback:""},e?l.a.createElement(e,null):""))}},{key:"renderMain",value:function(){var e;switch(window.location.hash.replace("#/","/")){case"/":e="./authentication/Home";break;case"/login/":e="./authentication/Login";break;case"/register/":e="./authentication/Register";break;case"/guest/":e="./authentication/Guest";break;case"/guest/scan/":e="./guest/Scan";break;case"/guest/result/":e="./guest/Result";break;case"/events/":e="./events/EventList";break;case"/events/new/":e="./events/CreateEvent";break;case"/events/"+encodeURI(window.sessionStorage.getItem("eventName"))+"/":e="./events/SingleEvent";break;case"/courses/new/":e="./courses/CreateCourse";break;case"/events/"+encodeURI(window.sessionStorage.getItem("eventName"))+"/"+window.sessionStorage.getItem("courseType")+"/"+window.sessionStorage.getItem("courseAccessKey")+"/":e="./courses/SingleCourse";break;default:e="./events/EventList"}var t=l.a.lazy((function(){return s(77)("".concat(e))}));this.setState(Object(o.a)({},this.state,Object(n.a)({},"component",t)))}}]),d}(l.a.Component));t.default=d},73:function(e,t,s){e.exports=s(8)},77:function(e,t,s){var n={"./Alert":[17,27],"./Alert.js":[17,27],"./Layout/Header":[34,20],"./Layout/Header.js":[34,20],"./Layout/Nav":[35,19],"./Layout/Nav.js":[35,19],"./Main":[6],"./Main.js":[6],"./authentication/Guest":[36,21],"./authentication/Guest.js":[36,21],"./authentication/Home":[37,22],"./authentication/Home.js":[37,22],"./authentication/Login":[38,14],"./authentication/Login.js":[38,14],"./authentication/Logout":[28,29],"./authentication/Logout.js":[28,29],"./authentication/Register":[39,15],"./authentication/Register.js":[39,15],"./courses/CreateCourse":[22,16],"./courses/CreateCourse.js":[22,16],"./courses/SingleCourse":[29,24],"./courses/SingleCourse.js":[29,24],"./courses/creatorView/CheckPoints":[20,0,1,9],"./courses/creatorView/CheckPoints.js":[20,0,1,9],"./courses/creatorView/CourseInfo":[30,0,1,3,28],"./courses/creatorView/CourseInfo.js":[30,0,1,3,28],"./courses/creatorView/CourseResult":[23,10],"./courses/creatorView/CourseResult.js":[23,10],"./courses/creatorView/CourseScan":[24,11],"./courses/creatorView/CourseScan.js":[24,11],"./courses/creatorView/Participants":[21,17],"./courses/creatorView/Participants.js":[21,17],"./courses/playerView/CourseInfo":[31,4],"./courses/playerView/CourseInfo.js":[31,4],"./courses/playerView/CourseResult":[25,12],"./courses/playerView/CourseResult.js":[25,12],"./courses/playerView/CourseScan":[26,0,2,7],"./courses/playerView/CourseScan.js":[26,0,2,7],"./events/CreateEvent":[32,5],"./events/CreateEvent.js":[32,5],"./events/EventList":[40,23],"./events/EventList.js":[40,23],"./events/PlayerAccess":[33,6],"./events/PlayerAccess.js":[33,6],"./events/SingleEvent":[41,18],"./events/SingleEvent.js":[41,18],"./guest/Result":[42,13],"./guest/Result.js":[42,13],"./guest/Scan":[43,0,2,8],"./guest/Scan.js":[43,0,2,8],"./helpers/CookieHelpers":[5],"./helpers/CookieHelpers.js":[5],"./helpers/SortingHelpers":[18,30],"./helpers/SortingHelpers.js":[18,30],"./helpers/StylingHelpers":[0],"./helpers/StylingHelpers.js":[0],"./helpers/SubmitDataHelpers":[3],"./helpers/SubmitDataHelpers.js":[3],"./helpers/TimeHelpers":[19,31],"./helpers/TimeHelpers.js":[19,31],"./results/creatorView/ResultList":[44,25],"./results/creatorView/ResultList.js":[44,25],"./results/playerView/ResultList":[45,26],"./results/playerView/ResultList.js":[45,26]};function o(e){if(!s.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s(o)}))}o.keys=function(){return Object.keys(n)},o.id=77,e.exports=o},78:function(e,t,s){var n={".":[8,9],"./":[8,9],"./App":[15,9],"./App.css":[51,7],"./App.js":[15,9],"./App.test":[71,9,33,41],"./App.test.js":[71,9,33,41],"./components/Alert":[17,9,27],"./components/Alert.js":[17,9,27],"./components/Layout/Header":[34,9,20],"./components/Layout/Header.js":[34,9,20],"./components/Layout/Nav":[35,9,19],"./components/Layout/Nav.js":[35,9,19],"./components/Main":[6,9],"./components/Main.js":[6,9],"./components/authentication/Guest":[36,9,21],"./components/authentication/Guest.js":[36,9,21],"./components/authentication/Home":[37,9,22],"./components/authentication/Home.js":[37,9,22],"./components/authentication/Login":[38,9,14],"./components/authentication/Login.js":[38,9,14],"./components/authentication/Logout":[28,9,29],"./components/authentication/Logout.js":[28,9,29],"./components/authentication/Register":[39,9,15],"./components/authentication/Register.js":[39,9,15],"./components/courses/CreateCourse":[22,9,16],"./components/courses/CreateCourse.js":[22,9,16],"./components/courses/SingleCourse":[29,9,24],"./components/courses/SingleCourse.js":[29,9,24],"./components/courses/creatorView/CheckPoints":[20,9,0,1,9],"./components/courses/creatorView/CheckPoints.js":[20,9,0,1,9],"./components/courses/creatorView/CourseInfo":[30,9,0,1,3,28],"./components/courses/creatorView/CourseInfo.js":[30,9,0,1,3,28],"./components/courses/creatorView/CourseResult":[23,9,10],"./components/courses/creatorView/CourseResult.js":[23,9,10],"./components/courses/creatorView/CourseScan":[24,9,11],"./components/courses/creatorView/CourseScan.js":[24,9,11],"./components/courses/creatorView/Participants":[21,9,17],"./components/courses/creatorView/Participants.js":[21,9,17],"./components/courses/playerView/CourseInfo":[31,9,4],"./components/courses/playerView/CourseInfo.js":[31,9,4],"./components/courses/playerView/CourseResult":[25,9,12],"./components/courses/playerView/CourseResult.js":[25,9,12],"./components/courses/playerView/CourseScan":[26,9,0,2,7],"./components/courses/playerView/CourseScan.js":[26,9,0,2,7],"./components/events/CreateEvent":[32,9,5],"./components/events/CreateEvent.js":[32,9,5],"./components/events/EventList":[40,9,23],"./components/events/EventList.js":[40,9,23],"./components/events/PlayerAccess":[33,9,6],"./components/events/PlayerAccess.js":[33,9,6],"./components/events/SingleEvent":[41,9,18],"./components/events/SingleEvent.js":[41,9,18],"./components/guest/Result":[42,9,13],"./components/guest/Result.js":[42,9,13],"./components/guest/Scan":[43,9,0,2,8],"./components/guest/Scan.js":[43,9,0,2,8],"./components/helpers/CookieHelpers":[5,9],"./components/helpers/CookieHelpers.js":[5,9],"./components/helpers/SortingHelpers":[18,9,30],"./components/helpers/SortingHelpers.js":[18,9,30],"./components/helpers/StylingHelpers":[0,9],"./components/helpers/StylingHelpers.js":[0,9],"./components/helpers/SubmitDataHelpers":[3,9],"./components/helpers/SubmitDataHelpers.js":[3,9],"./components/helpers/TimeHelpers":[19,9,31],"./components/helpers/TimeHelpers.js":[19,9,31],"./components/results/creatorView/ResultList":[44,9,25],"./components/results/creatorView/ResultList.js":[44,9,25],"./components/results/playerView/ResultList":[45,9,26],"./components/results/playerView/ResultList.js":[45,9,26],"./css/AppStyle":[10,9],"./css/AppStyle.js":[10,9],"./css/Layout/Header.css":[86,7,63],"./css/Layout/HeaderStyle":[59,9,42],"./css/Layout/HeaderStyle.js":[59,9,42],"./css/Layout/Main.css":[49,7],"./css/Layout/MainStyle":[9,9],"./css/Layout/MainStyle.js":[9,9],"./css/Layout/Nav.css":[87,7,64],"./css/Layout/NavStyle":[60,9,43],"./css/Layout/NavStyle.js":[60,9,43],"./css/authentication/Auth.css":[80,7,65],"./css/authentication/AuthStyle":[53,9,44],"./css/authentication/AuthStyle.js":[53,9,44],"./css/authentication/Home.css":[88,7,66],"./css/authentication/HomeStyle":[61,9,45],"./css/authentication/HomeStyle.js":[61,9,45],"./css/courses/CourseResult.css":[79,7,67],"./css/courses/CourseResultStyle":[52,9,46],"./css/courses/CourseResultStyle.js":[52,9,46],"./css/courses/CreateCourse.css":[83,7,68],"./css/courses/CreateCourseStyle":[56,9,47],"./css/courses/CreateCourseStyle.js":[56,9,47],"./css/courses/creatorView/CheckPoints.css":[81,7,69],"./css/courses/creatorView/CheckPointsStyle":[54,9,48],"./css/courses/creatorView/CheckPointsStyle.js":[54,9,48],"./css/courses/creatorView/CourseInfo.css":[89,7,70],"./css/courses/creatorView/CourseInfoStyle":[62,9,49],"./css/courses/creatorView/CourseInfoStyle.js":[62,9,49],"./css/courses/creatorView/CourseScan.css":[84,7,71],"./css/courses/creatorView/CourseScanStyle":[57,9,50],"./css/courses/creatorView/CourseScanStyle.js":[57,9,50],"./css/courses/creatorView/Participants.css":[82,7,72],"./css/courses/creatorView/ParticipantsStyle":[55,9,51],"./css/courses/creatorView/ParticipantsStyle.js":[55,9,51],"./css/courses/playerView/CourseInfo.css":[90,7,73],"./css/courses/playerView/CourseInfoStyle":[63,9,52],"./css/courses/playerView/CourseInfoStyle.js":[63,9,52],"./css/courses/playerView/CourseScan.css":[85,7,74],"./css/courses/playerView/CourseScanStyle":[58,9,53],"./css/courses/playerView/CourseScanStyle.js":[58,9,53],"./css/events/CreateEvent.css":[91,7,75],"./css/events/CreateEventStyle":[64,9,54],"./css/events/CreateEventStyle.js":[64,9,54],"./css/events/EventList.css":[92,7,76],"./css/events/EventListStyle":[65,9,55],"./css/events/EventListStyle.js":[65,9,55],"./css/events/PlayerAccess.css":[93,7,77],"./css/events/PlayerAccessStyle":[66,9,56],"./css/events/PlayerAccessStyle.js":[66,9,56],"./css/events/SingleEvent.css":[94,7,78],"./css/events/SingleEventStyle":[67,9,57],"./css/events/SingleEventStyle.js":[67,9,57],"./css/guest/Scan.css":[95,7,79],"./css/guest/ScanStyle":[68,9,58],"./css/guest/ScanStyle.js":[68,9,58],"./index":[8,9],"./index.css":[50,7],"./index.js":[8,9],"./logo.svg":[96,7,80],"./serviceWorker":[16,9],"./serviceWorker.js":[16,9],"./setupTests":[72,9,34,59],"./setupTests.js":[72,9,34,59]};function o(e){if(!s.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(2).map(s.e)).then((function(){return s.t(o,t[1])}))}o.keys=function(){return Object.keys(n)},o.id=78,e.exports=o},8:function(e,t,s){"use strict";s.r(t);var n=s(1),o=s.n(n),r=s(47),c=s.n(r),a=(s(50),s(15)),i=s(16);"/orienteering2020/"==window.location.pathname?(window.location.href="/orienteering2020/#/",window.sessionStorage.setItem("path","/orienteering2020/#/")):window.sessionStorage.setItem("path","/#/"),c.a.render(o.a.createElement(a.default,null),document.getElementById("root")),i.unregister()},9:function(e,t,s){"use strict";s.r(t);var n=s(0);function o(){["/","/login/","/register/","/guest/"].indexOf(window.location.hash.replace("#/","/"))<0?Object(n.eId)("main").style.margin=0:window.innerWidth>window.innerHeight?Object(n.eId)("main").className=Object(n.eId)("main").className.replace(" mb-3","")+" mb-3":Object(n.eId)("main").className=Object(n.eId)("main").className.replace(" mb-2","")+" mb-2",function(e){for(var t=Object(n.eClass)(e),s=0;s<t.length;s++)t[s].style.borderRadius=.03*t[0].offsetWidth+"px"}("input"),function(e){for(var t=Object(n.eClass)(e),s=0;s<t.length;s++)t[s].style.borderRadius=.15*t[0].offsetWidth+"px"}("btn")}t.default=function(){Object(n.darkLightMode)("main"),Object(n.darkLightMode)("input"),Object(n.darkLightMode)("button"),o();var e=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(e)||window.addEventListener("resize",o)}}},[[73,61,62]]]);
//# sourceMappingURL=main.21bdc89b.chunk.js.map