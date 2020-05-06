(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[18,27,28,57,78],{17:function(e,t,a){"use strict";a.r(t),a.d(t,"showAlert",(function(){return s}));var s=function(e,t){if(document.getElementById("error")){var a=window.sessionStorage.getItem("removeAlert");clearTimeout(a),document.getElementById("error").remove()}var s=document.createElement("div");if(s.id="error",s.innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="text-align:center">'+e+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>',document.body.appendChild(s),-1!=t){var n=setTimeout((function(){document.getElementById("error")&&document.getElementById("error").remove()}),t);window.sessionStorage.setItem("removeAlert",n)}}},41:function(e,t,a){"use strict";a.r(t);var s=a(7),n=a.n(s),o=a(27),r=a(4),l=a(14),i=a(2),c=a(11),d=a(46),u=a(12),m=a(13),h=a(1),p=a.n(h),v=a(47),f=a.n(v),b=a(17),g=a(3),w=a(5),C=a(67),E=(a(94),function(e){Object(m.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={name:"",date:"",location:"",status:""},a.updateState=a.updateState.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.addCourse=a.addCourse.bind(Object(d.a)(a)),a.deleteCourse=a.deleteCourse.bind(Object(d.a)(a)),a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var e=this;window.sessionStorage.getItem("eventName")||(window.location.href=window.sessionStorage.path+"events/");var t=window.sessionStorage.getItem("eventName");(new g.default).postData("/events/singleEvent/",{eventName:t}).then((function(a){if(a.error||window.location.hash.replace("/#/","/")!=="/events/"+encodeURI(t)+"/")Object(b.showAlert)(a.error,5e3),e.setState({error:a.error}),window.location.href=window.sessionStorage.path+"events/";else{var s=new Date,n=s.getFullYear()+"-"+(s.getMonth()<9?"0"+(s.getMonth()+1):s.getMonth()+1)+"-"+(s.getDate()<9?"0"+s.getDate():s.getDate());a[0].date>n?a[0].status="Coming":a[0].date==n?a[0].status="Opening":a[0].status="Closed",e.setState(a[0]),e.renderCourses(a[0]),e.showAddCourse(a[0].status)}})),Object(C.default)()}},{key:"componentDidUpdate",value:function(){Object(C.default)()}},{key:"render",value:function(){var e=[],t="seinput col-5 border-bottom pt-2 pb-1 mb-2";return"sebtn"," save"," delete","Coming"==this.state.status?e.push(p.a.createElement("form",{key:"changeEvent",className:" mx-auto"},p.a.createElement("div",{id:"formInput",className:"formInput col-12 col-sm-11 mx-auto py-1"},p.a.createElement("div",{className:"inputWrap col-12 p-0 d-flex flex-row my-3"},p.a.createElement("input",{className:t,type:"text",name:"name",value:this.state.name,disabled:!0}),p.a.createElement("div",{className:" col-2 d-flex justify-content-center align-items-center"},p.a.createElement("i",{id:"saveChange",className:"fas fa-save",onClick:this.handleSubmit})),p.a.createElement("input",{className:t,type:"date",name:"date",value:this.state.date,onChange:this.updateState,placeholder:"Event Date",required:!0})),p.a.createElement("div",{className:"inputWrap col-12 p-0 d-flex flex-row my-3"},p.a.createElement("input",{className:t,type:"text",name:"location",value:this.state.location,onChange:this.updateState,placeholder:"Location",required:!0}),p.a.createElement("div",{className:" col-2 d-flex justify-content-center align-items-center"},p.a.createElement("i",{id:"deleteEvent",className:"fas fa-trash-alt",onClick:this.handleSubmit})),p.a.createElement("input",{className:t,type:"text",name:"status",value:this.state.status,onChange:this.updateState,placeholder:"Status",disabled:!0}))))):e.push(p.a.createElement("form",{key:"changeEvent",className:" mx-auto"},p.a.createElement("div",{id:"formInput",className:"formInput col-12 col-sm-11 mx-auto py-1"},p.a.createElement("div",{className:"inputWrap col-12 p-0 d-flex flex-row my-3"},p.a.createElement("input",{className:t,type:"text",name:"name",value:this.state.name,disabled:!0}),p.a.createElement("div",{className:"col-2"}),p.a.createElement("input",{className:t,type:"date",name:"date",value:this.state.date,onChange:this.updateState,placeholder:"Event Date",disabled:!0})),p.a.createElement("div",{className:"inputWrap col-12 p-0 d-flex flex-row my-3"},p.a.createElement("input",{className:t,type:"text",name:"location",value:this.state.location,onChange:this.updateState,placeholder:"Location",disabled:!0}),p.a.createElement("div",{className:"col-2"},p.a.createElement("i",{id:"deleteEvent",className:"closedEventDeleteBtn fas fa-trash-alt",onClick:this.handleSubmit})),p.a.createElement("input",{className:t,type:"text",name:"status",value:this.state.status,onChange:this.updateState,placeholder:"Status",disabled:!0}))))),p.a.createElement("div",{id:"singleEvent",className:"singleEvent"},p.a.createElement("div",{className:"title pb-3"},p.a.createElement("h2",null,this.state.name)),p.a.createElement("div",{className:"formInputWrap col p-0"},e),p.a.createElement("div",{className:"courseTable mx-auto mt-4 shadow px-2 pt-2 pb-0 border"},p.a.createElement("div",{className:"tcaption text-left pl-1 pt-1 pb-2"},"Courses ( ",this.state.courseList?this.state.courseList.length:"0"," courses )"),p.a.createElement("div",{className:"table mx-auto border"},p.a.createElement("div",{className:"thead col-12"},p.a.createElement("div",{className:"tr row py-3"},p.a.createElement("div",{className:"th col-3"},"Type"),p.a.createElement("div",{className:"th col-3"},"Start"),p.a.createElement("div",{className:"th col-3"},"End"),p.a.createElement("div",{className:"th col-3"},"Status"))),p.a.createElement("div",{className:"tbody col-12 overflow-auto"},this.state.courseList?this.state.courseList:"No courses")),this.state.addCourseButton))}},{key:"updateState",value:function(e){var t=Object(l.a)({},this.state);switch(e.target.name){case"name":t.name=e.target.value,this.setState(t);break;case"date":var a=new Date;a.getFullYear(),a.getMonth()<9?a.getMonth():a.getMonth(),a.getDate()<9?a.getDate():a.getDate();t.date=e.target.value,this.setState(t);break;case"location":t.location=e.target.value,this.setState(t)}}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a="",s=new Date,n=s.getFullYear()+"-"+(s.getMonth()<9?"0"+(s.getMonth()+1):s.getMonth()+1)+"-"+(s.getDate()<9?"0"+s.getDate():s.getDate()),o=s.getTimezoneOffset()/-60+":00:00",r=new g.default;if("saveChange"===e.target.id)if(this.state.date<=n&&(a="Event date cannot be in the past."),""===a){var i=(new w.default).getCookie("username");r.postData("/events/editevent/",{name:this.state.name.toLowerCase(),date:this.state.date,timezone:o,location:this.state.location,status:this.state.status,creator:i}).then((function(e){if(e.error){Object(b.showAlert)(e.error,5e3);var a=Object(l.a)({},t.state);a.error=e.error,t.setState(a)}else window.location.reload()}))}else{Object(b.showAlert)(a,5e3);var c=Object(l.a)({},this.state);c.error=a,this.setState(c)}else"deleteEvent"===e.target.id&&window.confirm("Delete this course...")&&r.postData("/events/deleteevent/",{name:this.state.name.toLowerCase()}).then((function(e){if(e.error){Object(b.showAlert)(e.error,5e3);var a=Object(l.a)({},t.state);a.error=e.error,t.setState(a)}else window.location.href=window.sessionStorage.path+"events/"}))}},{key:"showAddCourse",value:function(e){if("Coming"==e){var t=[];t.push(p.a.createElement("div",{key:"addCourse",className:" addCourse mt-2 mb-0 col-12","data-toggle":"tooltip","data-placement":"top",title:"Add course..."},p.a.createElement("button",{className:" addCourseBtn rounded-circle p-3 border shadow",onClick:this.addCourse},p.a.createElement("i",{className:"fas fa-plus"})))),this.setState(Object(l.a)({},this.state,Object(r.a)({},"addCourseButton",t)))}}},{key:"renderCourses",value:function(e){var t=this;if(e.courses.error)this.setState(Object(l.a)({},this.state,Object(r.a)({},"error",e.courses.error)));else{var a=(new Date).toLocaleTimeString().substring(0,8),s=e.courses;s.forEach((function(t){"Coming"==e.status?t.status="Coming":"Opening"==e.status?t.startTime>a?t.status="Coming":t.startTime<a&&t.endTime>a?t.status="Opening":t.status="Closed":t.status="Closed"}));var n=[];s.forEach((function(e){n.push(p.a.createElement("div",{className:"course tr row py-2",key:e.type,value:e.type,onClick:function(){return t.selectCourse(e.type,e.password)},onContextMenu:function(a){return t.deleteCourse(a,e.type)}},p.a.createElement("div",{className:"td col-3"},e.type),p.a.createElement("div",{className:"td col-3"},e.startTime),p.a.createElement("div",{className:"td col-3"},e.endTime),p.a.createElement("div",{className:"td col-3"},e.status,p.a.createElement("i",{className:"deleteCourse fas fa-minus-circle","data-toggle":"tooltip","data-placement":"top",title:"Delete event...",onMouseDown:function(a){return t.deleteCourse(a,e.type)}}))))})),this.setState(Object(l.a)({},this.state,Object(r.a)({},"courseList",n)))}}},{key:"selectCourse",value:function(e,t){this.state.deletingCourse?this.setState({deletingCourse:!1}):(window.sessionStorage.setItem("courseType",e),window.sessionStorage.setItem("view","creatorView"),window.sessionStorage.setItem("eventDate",this.state.date),window.sessionStorage.setItem("courseAccessKey",t),window.location.href+=e+"/"+t+"/")}},{key:"addCourse",value:function(){var e=Object(o.a)(n.a.mark((function e(){var t,s,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.courseList&&this.state.courseList.length>2)){e.next=4;break}Object(b.showAlert)("All courses have been added, cannot add more courses...",5e3),e.next=16;break;case 4:return e.next=6,a.e(32).then(a.bind(null,22));case 6:return t=e.sent,e.next=9,t.default;case 9:s=e.sent,(o=document.createElement("div")).id="popUpModal",o.className="popUpModal","on"==window.localStorage.getItem("darkThemeMode")&&(o.className+=" dark-popUpModal"),document.body.appendChild(o),f.a.render(p.a.createElement(s,null),document.getElementById("popUpModal"));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteCourse",value:function(e,t){var a=this;if(this.setState({deletingCourse:!0}),e.preventDefault(),window.confirm("Delete this course...")){(new g.default).postData("/courses/deletecourse/",{event:this.state.name.toLowerCase(),type:t}).then((function(e){if(e.error){Object(b.showAlert)(e.error,5e3);var t=Object(l.a)({},a.state);t.error=e.error,a.setState(t)}else window.location.reload()}))}}}]),s}(p.a.Component));t.default=E},67:function(e,t,a){"use strict";a.r(t);var s=a(0);function n(){!function(){for(var e=0;e<Object(s.eClass)("inputWrap").length;e++){var t=Object(s.eClass)("inputWrap")[e];window.innerWidth<=576?t.className=t.className.replace(" my-3",""):t.className=t.className.replace(" my-3","")+" my-3"}}(),Object(s.eClass)("addCourse")[0]?(Object(s.eId)("singleEvent").style.height=Object(s.eId)("nav").offsetTop+"px",Object(s.eClass)("courseTable")[0].style.height=.98*(Object(s.eId)("singleEvent").offsetHeight-Object(s.eClass)("courseTable")[0].offsetTop)+"px",Object(s.eClass)("table")[0].style.height=.9*(Object(s.eId)("nav").offsetTop-Object(s.eClass)("table")[0].offsetTop-Object(s.eClass)("addCourseBtn")[0].offsetHeight)+"px",Object(s.eClass)("tbody")[0].style.height=Object(s.eClass)("table")[0].offsetHeight-Object(s.eClass)("addCourseBtn")[0].offsetHeight+"px"):(Object(s.eId)("singleEvent").style.height=Object(s.eId)("nav").offsetTop+"px",Object(s.eClass)("courseTable")[0].style.height=.98*(Object(s.eId)("singleEvent").offsetHeight-Object(s.eClass)("courseTable")[0].offsetTop)+"px",Object(s.eClass)("table")[0].style.height=.7*(Object(s.eId)("nav").offsetTop-Object(s.eClass)("table")[0].offsetTop)+"px",Object(s.eClass)("tbody")[0].style.height=Object(s.eClass)("table")[0].offsetHeight-Object(s.eClass)("thead")[0].offsetHeight+"px"),Object(s.eClass)("addCourse")[0]&&(Object(s.eClass)("addCourse")[0].style.height=Object(s.eClass)("addCourseBtn")[0].offsetHeight+"px",Object(s.eClass)("addCourseBtn")[0].style.width=Object(s.eClass)("addCourseBtn")[0].offsetHeight+"px",Object(s.eClass)("course").length>2&&(Object(s.eClass)("fa-plus")[0].style.color="rgba(150,150,150,0.8)"))}t.default=function(){Object(s.darkLightMode)("singleEvent"),n();var e=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(e)||window.addEventListener("resize",n)}},94:function(e,t,a){}}]);
//# sourceMappingURL=18.d40473dc.chunk.js.map