(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6,27,28,56,77],{17:function(e,t,a){"use strict";a.r(t),a.d(t,"showAlert",(function(){return s}));var s=function(e,t){if(document.getElementById("error")){var a=window.sessionStorage.getItem("removeAlert");clearTimeout(a),document.getElementById("error").remove()}var s=document.createElement("div");if(s.id="error",s.innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="text-align:center">'+e+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>',document.body.appendChild(s),-1!=t){var r=setTimeout((function(){document.getElementById("error")&&document.getElementById("error").remove()}),t);window.sessionStorage.setItem("removeAlert",r)}}},33:function(e,t,a){"use strict";a.r(t);var s=a(4),r=a(14),c=a(2),o=a(11),n=a(46),i=a(12),d=a(13),l=a(1),u=a.n(l),m=a(17),p=a(3),b=a(5),f=a(66),h=(a(93),function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={},s.checkKey=s.checkKey.bind(Object(n.a)(s)),s.removeModal=s.removeModal.bind(Object(n.a)(s)),s.clickedForm=s.clickedForm.bind(Object(n.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;return Object(f.default)(),document.getElementById("popUpModal").onclick=this.removeModal,(new p.default).postData("/courses/getCourseType",{eventName:this.props.eventName.toLowerCase()}).then((function(t){t.error?Object(m.showAlert)(t.error,5e3):e.setState(Object(r.a)({},e.state,Object(s.a)({},"courseTypes",t)))}))}},{key:"componentDidUpdate",value:function(){Object(f.default)()}},{key:"render",value:function(){var e,t=this.state.courseTypes;return t&&(e=t.map((function(e){return u.a.createElement("option",{value:e.type,key:e.type},e.type)}))),u.a.createElement("div",{id:"playerAccess",className:"playerAccess card shadow-lg pt-5",onMouseDown:this.clickedForm,onMouseUp:this.clickedForm},u.a.createElement("h2",{className:"card-title mt-3"},this.props.eventName),u.a.createElement("form",{id:"accessForm",className:"card-body px-0",autoComplete:"off",onSubmit:function(e){return e.preventDefault()}},u.a.createElement("select",{name:"type",className:"custom-select-sm input my-3"},u.a.createElement("option",{defaultChecked:!0},"Choose courses..."),e),u.a.createElement("br",null),u.a.createElement("input",{className:"input px-2 py-1",type:"text",name:"accessKey",maxLength:"4",placeholder:"Enter access key",onChange:this.checkKey,required:!0,autoFocus:!0})))}},{key:"clickedForm",value:function(){this.setState(Object(r.a)({},this.state,Object(s.a)({},"clickedForm",!0)))}},{key:"removeModal",value:function(){this.state.clickedForm?this.setState(Object(r.a)({},this.state,Object(s.a)({},"clickedForm",null))):document.getElementById("popUpModal").remove()}},{key:"checkKey",value:function(e){var t=this;this.setState(Object(r.a)({},this.state,Object(s.a)({},"error",null)));var a=e.target.value;if(4==a.length){var c=e.target.parentNode.type.value;return(new p.default).postData("/courses/requestAccess",{courseAccessKey:a,courseType:c,eventName:this.props.eventName.toLowerCase()}).then((function(e){if(e.error)Object(m.showAlert)(e.error,5e3),t.setState(Object(r.a)({},t.state,Object(s.a)({},"error",e.error)));else{window.sessionStorage.setItem("eventName",t.props.eventName),window.sessionStorage.setItem("courseType",c),window.sessionStorage.setItem("courseAccessKey",a),window.sessionStorage.setItem("view","playerView"),window.sessionStorage.setItem("eventDate",t.props.eventDate);var o=new b.default;(new p.default).postData("/participants/addParticipant",{eventName:t.props.eventName,courseType:c,parName:o.getCookie("username")}),window.location.href=e.url}}))}}}]),a}(u.a.Component));t.default=h},66:function(e,t,a){"use strict";a.r(t);var s=a(0);function r(){Object(s.eId)("playerAccess").style.minHeight=.6*Object(s.eId)("playerAccess").offsetWidth+"px",window.innerWidth>window.innerHeight?Object(s.eId)("playerAccess").style.borderRadius=.07*parseInt(Object(s.eId)("playerAccess").offsetHeight)+"px":Object(s.eId)("playerAccess").style.borderRadius=.07*parseInt(Object(s.eId)("playerAccess").offsetWidth)+"px",Object(s.eId)("playerAccess").offsetWidth>Object(s.eId)("playerAccess").offsetHeight?Object(s.eId)("accessForm").className=Object(s.eId)("accessForm").className.replace(" mb-5","")+" mb-5":Object(s.eId)("accessForm").className=Object(s.eId)("accessForm").className.replace(" mb-2","")+" mb-2",Object(s.eId)("accessForm").className=Object(s.eId)("accessForm").className.replace(" card-body","")+" card-body",function(e){for(var t=Object(s.eClass)(e),a=0;a<t.length;a++)t[a].style.borderRadius=.025*t[0].offsetWidth+"px"}("input"),function(e){for(var t=Object(s.eClass)(e),a=0;a<t.length;a++)t[a].style.borderRadius=.15*t[0].offsetWidth+"px"}("btn")}t.default=function(){Object(s.darkLightMode)("playerAccess"),Object(s.darkLightMode)("input"),Object(s.darkLightMode)("button"),r();var e=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(e)||window.addEventListener("resize",r)}},93:function(e,t,a){}}]);
//# sourceMappingURL=6.19cf7d57.chunk.js.map