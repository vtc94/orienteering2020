(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[19,29,43,64],{28:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(5);t.default=function(){return(new n.default).postData("/authentication/logout/",{}).then((function(e){if("/"!==window.location.pathname.replace(window.sessionStorage.path,"/")){var t=Date.now(),a=new Date(t-3600);a=a.toUTCString();var n=new c.default;n.setCookie("username",e.username,a,"/"),n.setCookie("activeId",e.activeId,a,"/"),window.sessionStorage.clear(),window.localStorage.clear(),window.location.href=window.sessionStorage.path}})),null}},35:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(11),s=a(12),i=a(13),o=a(1),l=a.n(o),r=a(28),u=a(60),d=(a(87),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){Object(u.default)()}},{key:"componentDidUpdate",value:function(){Object(u.default)()}},{key:"render",value:function(){switch(window.location.pathname.replace(window.sessionStorage.path,"/")){case"/":case"/home/":case"/login/":case"/register/":case"/guest/":return null;default:return this.renderNav()}}},{key:"renderNav",value:function(){return l.a.createElement("div",{id:"nav",className:"Nav"},l.a.createElement("button",{className:"goBack",onClick:function(){return window.history.back()}},l.a.createElement("i",{className:"fas fa-chevron-left"}," Go back")),l.a.createElement("div",{id:"quickScan",className:"quickScan p-1 rounded-circle shadow","data-toggle":"tooltip","data-placement":"top",title:"Quick Scan..."},l.a.createElement("a",{href:window.sessionStorage.path+"guest/scan/"},l.a.createElement("button",{className:"btn quickScanBtn rounded-circle"},l.a.createElement("i",{className:"fas fa-camera"})))),l.a.createElement("button",{className:"logout",onClick:function(){return Object(r.default)()}},l.a.createElement("i",{className:"fas fa-power-off"}," Log out")))}}]),a}(l.a.Component));t.default=d},60:function(e,t,a){"use strict";a.r(t);var n=a(0);function c(){Object(n.eId)("nav").style.height=.12*Object(n.eId)("app").offsetHeight+"px",window.innerWidth<=576?(Object(n.eClass)("Nav")[0].className=Object(n.eClass)("Nav")[0].className.replace(" px-4"," px-3"),Object(n.eClass)("quickScan")[0].style.width=.8*Object(n.eId)("nav").offsetHeight+"px"):(Object(n.eClass)("Nav")[0].className=Object(n.eClass)("Nav")[0].className.replace(" px-3"," px-4"),Object(n.eClass)("quickScan")[0].style.width=.7*Object(n.eId)("nav").offsetHeight+"px"),Object(n.eClass)("quickScan")[0].style.height=Object(n.eClass)("quickScan")[0].offsetWidth+"px",Object(n.eClass)("quickScanBtn")[0].style.width=.85*Object(n.eId)("quickScan").offsetHeight+"px",Object(n.eClass)("quickScanBtn")[0].style.height=Object(n.eClass)("quickScanBtn")[0].offsetWidth+"px"}t.default=function(){Object(n.darkLightMode)("quickScan"),Object(n.darkLightMode)("quickScanBtn"),Object(n.darkLightMode)("logout"),c(),window.addEventListener("resize",c)}},87:function(e,t,a){}}]);
//# sourceMappingURL=19.790eac21.chunk.js.map