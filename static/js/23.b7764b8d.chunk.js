(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[23,55,76],{40:function(e,t,a){"use strict";a.r(t);var n=a(7),s=a.n(n),c=a(27),l=a(2),o=a(11),r=a(46),i=a(12),d=a(13),u=a(1),p=a.n(u),m=a(47),v=a.n(m),h=a(3),b=a(65),f=(a(49),a(92),function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(e){var a;Object(l.a)(this,n);a=t.call(this,e);return a.state={searchEvents:[],myEvents:[]},a.searchEvents=a.searchEvents.bind(Object(r.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;if("/events/"!==window.location.search.replace("?/","/"))return window.location.href=window.sessionStorage.path+"events/",!1;var t=new Date,a=t.getFullYear()+"-"+(t.getMonth()<9?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<9?"0"+t.getDate():t.getDate()),n=new CookieHelpers;(new h.default).postData("/events/index/",{username:n.getCookie("username")?n.getCookie("username"):""}).then((function(t){if(!t)return!1;if(t.error||"/events/"!==window.location.search.replace("?/","/"))e.setState({error:t.error});else{var n=[];t.forEach((function(e){e.date>a?e.status="Coming...":e.date==a?e.status="Opening...":e.status="Closed...",n.push(e)})),e.setState({myEvents:n})}})),Object(b.default)()}},{key:"componentDidUpdate",value:function(){Object(b.default)()}},{key:"render",value:function(){var e,t=this;e=0==this.state.searchEvents.length?this.state.myEvents:this.state.searchEvents;var a=[];return e.forEach((function(e){a.push(p.a.createElement("div",{className:"tr row py-2",value:e.name,key:e.name,onClick:function(){return t.selectEvent(e.name,e.date).then((function(e){}))}},p.a.createElement("div",{className:"td col-3","data-toggle":"tooltip","data-placement":"top",title:window.innerWidth>567?"":e.name},window.innerWidth>567?e.name:e.name.substring(0,5)+"..."),p.a.createElement("div",{className:"td col-3"},window.innerWidth>567?e.date:e.date.substring(5).replace(/-/g,"/")),p.a.createElement("div",{className:"td col-3"},window.innerWidth>567?e.location:e.location.substring(0,5)+"..."),p.a.createElement("div",{className:"td col-3"},e.status.replace("...",""))))})),p.a.createElement("div",{id:"events",className:"events mx-auto pt-3"},p.a.createElement("div",{className:"title pt-5 pb-3"},p.a.createElement("h2",null,"My Events"),p.a.createElement("h6",null,"( ",e.length<10?"0"+e.length:e.length," events )")),p.a.createElement("div",{className:"search input-group mb-4"},p.a.createElement("div",{className:"input-group-prepend"},p.a.createElement("span",{className:"input-group-text"},p.a.createElement("i",{className:"fas fa-search"}))),p.a.createElement("input",{className:"form-control",type:"text",name:"searchInfo",autoComplete:"off",onChange:this.searchEvents,placeholder:"Search events..."}),p.a.createElement("div",{className:" input-group-append","data-toggle":"tooltip","data-placement":"top",title:"Search from all events..."},p.a.createElement("button",{className:"allEvents input-group-text custom-control custom-checkbox"},p.a.createElement("input",{id:"allEvents",className:"custom-control-input",type:"checkbox",name:"allEvents",value:"true",defaultChecked:!0}),p.a.createElement("label",{className:"custom-control-label",htmlFor:"allEvents"})))),p.a.createElement("div",{className:"eventTable mx-auto shadow p-2 border"},p.a.createElement("div",{className:"table mx-auto border"},p.a.createElement("div",{className:"thead col-12"},p.a.createElement("div",{className:"tr row py-3"},p.a.createElement("div",{className:"th col-3"},"Name"),p.a.createElement("div",{className:"th col-3"},"Date"),p.a.createElement("div",{className:"th col-3"},"Location"),p.a.createElement("div",{className:"th col-3"},"Status"))),p.a.createElement("div",{className:"tbody col-12 overflow-auto"},a.length>0?a:"No events"))),p.a.createElement("div",{className:"addEvent rounded-circle shadow","data-toggle":"tooltip","data-placement":"top",title:"Add event..."},p.a.createElement("button",{className:" addEventBtn rounded-circle p-3 border",onClick:this.addEvent},p.a.createElement("i",{className:"fas fa-plus"}))))}},{key:"searchEvents",value:function(e){var t=this,a=e.target.value.toLowerCase(),n=document.getElementById("allEvents").checked;if(""==a)return this.setState({searchEvents:[]}),!1;if(n){var s=new Date,c=s.getFullYear()+"-"+(s.getMonth()<9?"0"+(s.getMonth()+1):s.getMonth()+1)+"-"+(s.getDate()<9?"0"+s.getDate():s.getDate());(new h.default).postData("/events/searchEvents/",{searchInfo:a}).then((function(e){if(e.error||"/events/"!==window.location.search.replace("?/","/")){var a=[];a.push({name:"N/A",date:"N/A",location:"N/A",status:"N/A"}),t.setState({searchEvents:a})}else{var n=[];e.forEach((function(e){e.date>c?e.status="Coming...":e.date==c?e.status="Opening...":e.status="Closed...",n.push(e)})),t.setState({searchEvents:n})}}))}else{var l=this.state.myEvents.slice(),o=[];l.forEach((function(e){(e.name.toLowerCase().includes(a)||e.date.toLowerCase().includes(a)||e.location.toLowerCase().includes(a)||e.status.toLowerCase().includes(a))&&o.push(e)})),0==o.length&&o.push({name:"N/A",date:"N/A",location:"N/A",status:"N/A"}),this.setState({searchEvents:o})}}},{key:"selectEvent",value:function(){var e=Object(c.a)(s.a.mark((function e(t,a){var n,c=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("popUpModal")&&document.getElementById("popUpModal").remove(),n=new h.default,e.abrupt("return",n.postData("/events/checkCreator/",{eventName:t.toLowerCase()}).then((function(e){e.url?(window.sessionStorage.setItem("eventName",t),window.location.href=window.sessionStorage.path+e.url):e.isPlayer&&c.renderPlayerAccess(t,a)})));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"renderPlayerAccess",value:function(){var e=Object(c.a)(s.a.mark((function e(t,n){var c,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(6).then(a.bind(null,33));case 2:return c=e.sent,e.next=5,c.default;case 5:l=e.sent,(o=document.createElement("div")).id="popUpModal",o.className="popUpModal","on"==window.localStorage.getItem("darkThemeMode")&&(o.className+=" dark-popUpModal"),document.body.appendChild(o),v.a.render(p.a.createElement(l,{eventName:t,eventDate:n}),document.getElementById("popUpModal"));case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"addEvent",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(5).then(a.bind(null,32));case 2:return t=e.sent,e.next=5,t.default;case 5:n=e.sent,(c=document.createElement("div")).id="popUpModal",c.className="popUpModal","on"==window.localStorage.getItem("darkThemeMode")&&(c.className+=" dark-popUpModal"),document.body.appendChild(c),v.a.render(p.a.createElement(n,null),document.getElementById("popUpModal"));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),n}(p.a.Component));t.default=f},65:function(e,t,a){"use strict";a.r(t);var n=a(0);function s(){if(!Object(n.eId)("events"))return!1;Object(n.eId)("events").style.height=Object(n.eId)("nav").offsetTop+"px",Object(n.eId)("events").style.padding=.02*Object(n.eId)("events").offsetWidth+"px",Object(n.eClass)("eventTable")[0].style.height=.98*(Object(n.eId)("events").offsetHeight-Object(n.eClass)("eventTable")[0].offsetTop)+"px",Object(n.eClass)("table")[0].style.height=.96*(Object(n.eClass)("addEvent")[0].offsetTop-Object(n.eClass)("table")[0].offsetTop)+"px",Object(n.eClass)("tbody")[0].style.height=Object(n.eClass)("table")[0].offsetHeight-(Object(n.eClass)("tbody")[0].offsetTop-Object(n.eClass)("table")[0].offsetTop)+"px",window.innerWidth>=1024?Object(n.eClass)("input-group")[0].style.borderRadius=.012*Object(n.eClass)("input-group")[0].offsetWidth+"px":window.innerWidth>=768&&(Object(n.eClass)("input-group")[0].style.borderRadius=.015*Object(n.eClass)("input-group")[0].offsetWidth+"px"),window.innerWidth<=576?(Object(n.eId)("events").className=Object(n.eId)("events").className.replace("pt-3","pt-1"),Object(n.eClass)("title")[0].className=Object(n.eClass)("title")[0].className.replace("pb-3","pb-2"),Object(n.eClass)("search")[0].className=Object(n.eClass)("search")[0].className.replace("mb-3","mb-2"),Object(n.eClass)("eventTable")[0].className=Object(n.eClass)("eventTable")[0].className.replace(" table "," table-sm ")):(Object(n.eId)("events").className=Object(n.eId)("events").className.replace("pt-1","pt-3"),Object(n.eClass)("title")[0].className=Object(n.eClass)("title")[0].className.replace("pb-2","pb-3"),Object(n.eClass)("search")[0].className=Object(n.eClass)("search")[0].className.replace("mb-2","mb-3"),Object(n.eClass)("eventTable")[0].className=Object(n.eClass)("eventTable")[0].className.replace(" table-sm "," table ")),Object(n.eClass)("addEvent")[0].style.width=Object(n.eClass)("addEvent")[0].offsetHeight+"px",Object(n.eClass)("addEventBtn")[0].style.width=Object(n.eClass)("addEventBtn")[0].offsetHeight+"px"}t.default=function(){Object(n.darkLightMode)("events"),Object(n.darkLightMode)("form-control"),s();var e=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(e)||window.addEventListener("resize",s)}},92:function(e,t,a){}}]);
//# sourceMappingURL=23.b7764b8d.chunk.js.map