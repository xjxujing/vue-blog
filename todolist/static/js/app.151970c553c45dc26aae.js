webpackJsonp([1],{DiH5:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("xd7I"),n=s("pRbd"),o={name:"log-reg",data:function(){return{selected:!1,username:"",pass1:"",pass2:"",btntext:"注册"}},methods:{isSelected:function(e){this.selected=1==e,this.btntext=this.selected?"登录":"注册"},submit:function(){var e=new n.User;if("注册"==this.btntext){if(!(this.username&&this.pass1&&this.pass2))return void alert("请输入有效信息!");if(this.pass1!=this.pass2)return void alert("两次密码不一致!");e.setUsername(this.username),e.setPassword(this.pass1),e.signUp().then(function(e){},function(e){202!=e.code||"Username has already been taken."!=e.rawMessage||alert("用户名已被注册!")})}n.User.logIn(this.username,this.pass1).then(function(e){},function(e){210!=e||"The username and password mismatch."!=e.rawMessage?211!=e||"Could not find user."!=e.rawMessage||alert("用户名不存在"):alert("密码错误")})}},computed:{}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"log-reg"},[s("div",{staticClass:"main"},[s("ul",{staticClass:"top"},[s("li",[s("a",{class:{selected:e.selected},attrs:{href:"javascript:;"},on:{click:function(t){return e.isSelected(1)}}},[e._v("登录")])]),e._v(" "),s("span",[e._v("|")]),e._v(" "),s("li",[s("a",{class:{selected:!e.selected},attrs:{href:"javascript:;"},on:{click:function(t){return e.isSelected(-1)}}},[e._v("注册")])])]),e._v(" "),s("form",{attrs:{action:""}},[s("div",{staticClass:"email"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"用户名",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pass1,expression:"pass1"}],attrs:{type:"password",placeholder:"密码",required:""},domProps:{value:e.pass1},on:{input:function(t){t.target.composing||(e.pass1=t.target.value)}}})]),e._v(" "),e.selected?e._e():s("div",{staticClass:"password2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.pass2,expression:"pass2"}],attrs:{type:"password",placeholder:"确认密码",required:""},domProps:{value:e.pass2},on:{input:function(t){t.target.composing||(e.pass2=t.target.value)}}})])]),e._v(" "),s("input",{staticClass:"btn",attrs:{type:"submit"},domProps:{value:e.btntext},on:{click:function(t){return t.preventDefault(),e.submit()}}})])])},staticRenderFns:[]};var r=s("C7Lr")(o,i,!1,function(e){s("uE9Z")},"data-v-c4cc426c",null).exports,l=s("3cXf"),c=s.n(l),d={all:function(e){return e},active:function(e){return e.filter(function(e){return!e.completed})},completed:function(e){return e.filter(function(e){return e.completed})}},u={name:"list",data:function(){return{msg:"hello",newtodo:"",todos:[],editTodoed:null,editCache:"",hashName:"all",right:""}},watch:{todos:{handler:function(){localStorage.setItem("todos",c()(this.todos))},deep:!0}},methods:{addTodo:function(e){this.newtodo&&(this.todos.push({content:this.newtodo,completed:!1}),this.newtodo="")},remove:function(e){this.todos.splice(e,1)},saveStates:function(){},editTodo:function(e){this.editCache=e.content,this.editTodoed=e},doneEdit:function(e,t){this.editTodoed=null,e.content||this.remove(t)},cancleEdit:function(e){this.editTodoed=null,e.content=this.editCache},clear:function(){this.todos=d.active(this.todos)},hashChange:function(){var e=location.hash.replace(/#\/?/,"");d[e]?this.hashName=e:(location.hash="",this.hashName="all")},apear:function(){this.right=0}},directives:{focus:function(e,t){e.focus()}},computed:{remain:function(){return d.active(this.todos).length},isAll:{get:function(){return 0===this.remain},set:function(e){this.todos.forEach(function(t){t.completed=e})}},filterTodos:function(){return d[this.hashName](this.todos)},getStorage:function(){var e=JSON.parse(localStorage.getItem("todos"));e&&(this.todos=e)}},mounted:function(){var e=this;this.getStorage,window.addEventListener("hashchange",function(){var t=location.hash.replace(/#\/?/,"");d[t]?e.hashName=t:(location.hash="",e.hashName="all")})}},p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list"},[s("div",{staticClass:"status",style:{right:e.right+"px"},on:{click:function(t){return e.apear()}}},[e._v("已登录")]),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"add-todo"},[s("h3",[e._v("添加任务")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.newtodo,expression:"newtodo",modifiers:{trim:!0}}],attrs:{placeholder:"请输入待办任务",autofocus:""},domProps:{value:e.newtodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.newtodo=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),e.todos.length?s("nav",{staticClass:"nav"},[s("span",{staticClass:"todo-count"},[s("strong",[e._v(e._s(e.remain))]),e._v("个任务未完成\n      ")]),e._v(" "),s("ul",{staticClass:"filters"},[s("li",{class:{selected:"all"==e.hashName}},[s("a",{attrs:{href:"#/"}},[e._v("全部任务")]),e._v(" "),s("a",{staticClass:"small",attrs:{href:"#/"}},[e._v("全部")])]),e._v(" "),s("li",{class:{selected:"active"==e.hashName}},[s("a",{attrs:{href:"#/active"}},[e._v("待办任务")]),e._v(" "),s("a",{staticClass:"small",attrs:{href:"#/active"}},[e._v("待办")])]),e._v(" "),s("li",{class:{selected:"completed"==e.hashName}},[s("a",{attrs:{href:"#/completed"}},[e._v("完成任务")]),e._v(" "),s("a",{staticClass:"small",attrs:{href:"#/completed"}},[e._v("完成")])])])]):e._e(),e._v(" "),e.todos.length?s("section",{staticClass:"main"},[s("h3",[e._v("任务列表")]),e._v(" "),s("ul",{staticClass:"todo-list"},e._l(e.filterTodos,function(t,a){return s("li",{key:t.index,class:{completed:t.completed,editing:t===e.editTodoed}},[s("div",{staticClass:"view"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],attrs:{id:"toggle"+a,type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:[function(s){var a=t.completed,n=s.target,o=!!n.checked;if(Array.isArray(a)){var i=e._i(a,null);n.checked?i<0&&e.$set(t,"completed",a.concat([null])):i>-1&&e.$set(t,"completed",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(t,"completed",o)},e.saveStates]}}),e._v(" "),s("label",{attrs:{for:"toggle"+a}}),e._v(" "),s("span",{on:{dblclick:function(s){return e.editTodo(t)}}},[e._v(e._s(t.content))]),e._v(" "),s("button",{staticClass:"destroy",on:{click:function(t){return e.remove(a)}}},[s("span",[e._v("X")])])]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.content,expression:"todo.content",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],staticClass:"edit",attrs:{value:"Rule the web"},domProps:{value:t.content},on:{blur:[function(s){return e.doneEdit(t,a)},function(t){return e.$forceUpdate()}],keyup:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"esc",27,s.key,["Esc","Escape"])?null:e.cancleEdit(t)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.doneEdit(t,a)}],change:e.saveStates,input:function(s){s.target.composing||e.$set(t,"content",s.target.value.trim())}}})])}),0),e._v(" "),s("br"),e._v(" "),s("footer",[s("div",{staticClass:"all"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.isAll,expression:"isAll"}],staticClass:"toggle-all",attrs:{id:"todo-list",type:"checkbox"},domProps:{checked:Array.isArray(e.isAll)?e._i(e.isAll,null)>-1:e.isAll},on:{change:[function(t){var s=e.isAll,a=t.target,n=!!a.checked;if(Array.isArray(s)){var o=e._i(s,null);a.checked?o<0&&(e.isAll=s.concat([null])):o>-1&&(e.isAll=s.slice(0,o).concat(s.slice(o+1)))}else e.isAll=n},e.saveStates]}}),e._v(" "),s("label",{attrs:{for:"todo-list"}},[e._v("全部标记完成")])]),e._v(" "),s("button",{staticClass:"clear-completed",on:{click:function(t){return e.clear()}}},[e._v("清理完成任务")])])]):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("div",{staticClass:"container"},[t("h1",[this._v("任务计划列表")])])])}]};var v={name:"App",components:{list:s("C7Lr")(u,p,!1,function(e){s("jrPB")},"data-v-5fc7e1d9",null).exports,"log-reg":r}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("log-reg"),this._v(" "),t("list")],1)},staticRenderFns:[]};var m=s("C7Lr")(v,h,!1,function(e){s("DiH5")},null,null).exports;a.a.config.productionTip=!1;s("pRbd").init({appId:"XQlut690CCSYBbUgtGh4LFwI-gzGzoHsz",appKey:"tkxoyTifYWHkfzrVjA37TjL7"}),new a.a({el:"#app",components:{App:m},template:"<App/>"})},jrPB:function(e,t){},uE9Z:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.151970c553c45dc26aae.js.map