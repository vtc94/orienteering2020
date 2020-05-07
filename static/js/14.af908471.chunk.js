(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14,27,28,44,65],{17:function(e,t,a){"use strict";a.r(t),a.d(t,"showAlert",(function(){return n}));var n=function(e,t){if(document.getElementById("error")){var a=window.sessionStorage.getItem("removeAlert");clearTimeout(a),document.getElementById("error").remove()}var n=document.createElement("div");if(n.id="error",n.innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="text-align:center">'+e+'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>',document.body.appendChild(n),-1!=t){var s=setTimeout((function(){document.getElementById("error")&&document.getElementById("error").remove()}),t);window.sessionStorage.setItem("removeAlert",s)}}},38:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(11),r=a(46),o=a(12),i=a(13),c=a(1),d=a.n(c),l=a(17),u=a(3),m=a(4),p=a(53),b=(a(80),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={username:"",password:""},s.updateState=s.updateState.bind(Object(r.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(r.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){Object(p.default)()}},{key:"componentDidUpdate",value:function(){Object(p.default)()}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement("form",{onSubmit:this.handleSubmit},d.a.createElement("input",{className:"input form-control col-sm-6 mb-2 mx-auto",type:"text",name:"username",value:this.state.username,onChange:this.updateState,placeholder:"Username...",required:!0}),d.a.createElement("input",{className:"input form-control col-sm-6 mb-2 mx-auto",type:"password",name:"password",value:this.state.password,onChange:this.updateState,placeholder:"Password...",required:!0}),d.a.createElement("br",null),d.a.createElement("input",{className:"button btn",type:"submit",value:"Log In"})))}},{key:"updateState",value:function(e){"username"===e.target.name?this.setState({username:e.target.value,password:this.state.password}):this.setState({username:this.state.username,password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.username,n=this.state.password,s="",r=a.match(/[a-z\d._]{4,}/);(a.trim().length<4?s="<p>Valid username contain at least 4 characters</p>":null==r||a.length!=r[0].length?s='<p>user can contain only letters, digits, "." and "_"</p>':n.trim().length<6?s="<p>Valid password contain at least 6 characters<p>":null!=n.match(/[;=\'\"\s]/)&&(s="<p>password cannot contain ; = ' \" and </p>"),""===s)?(new u.default).postData("/authentication/login/",{username:a,password:n}).then((function(e){if(e.error)Object(l.showAlert)(e.error,5e3),t.setState({username:t.state.username,password:t.state.password,error:e.error});else{var a=Date.now(),n=new Date(a+1209600);n=n.toUTCString();var s=new m.default;s.setCookie("username",e.username,n,"/"),s.setCookie("activeId",e.activeId,n,"/"),window.sessionStorage.setItem("username",e.username),window.sessionStorage.setItem("activeId",e.activeId),window.location.href=window.sessionStorage.path+"events/"}})):(Object(l.showAlert)(s,5e3),this.setState({username:this.state.username,password:this.state.password,error:s}))}}]),a}(d.a.Component));t.default=b},53:function(e,t,a){"use strict";a.r(t);var n=a(0);function s(){Object(n.eId)("app").className=Object(n.eId)("app").className.replace("container-fluid","container").replace(" card shadow-lg","")+" card shadow-lg",Object(n.eId)("app").className=Object(n.eId)("app").className.replace(" pt-5","")+" pt-5",Object(n.eId)("app").offsetWidth>Object(n.eId)("app").offsetHeight?Object(n.eId)("main").className=Object(n.eId)("main").className.replace(" mb-5","")+" mb-5":Object(n.eId)("main").className=Object(n.eId)("main").className.replace(" mb-2","")+" mb-2",Object(n.eId)("main").className=Object(n.eId)("main").className.replace(" card-body","")+" card-body",function(e){for(var t=Object(n.eClass)(e),a=0;a<t.length;a++)t[a].style.borderRadius=.03*t[0].offsetWidth+"px"}("input"),function(e){for(var t=Object(n.eClass)(e),a=0;a<t.length;a++)t[a].style.borderRadius=.15*t[0].offsetWidth+"px"}("btn")}t.default=function(){Object(n.darkLightMode)("main"),Object(n.darkLightMode)("input"),Object(n.darkLightMode)("button"),s(),document.getElementsByTagName("body")[0].onresize=function(){s()}}},80:function(e,t,a){}}]);
//# sourceMappingURL=14.af908471.chunk.js.map