webpackJsonp([1],{"3TbS":function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("xd7I"),s=o("3cXf"),i=o.n(s),a={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}},c={name:"list",data:function(){return{msg:"hello",newtodo:"",todos:[],editTodoed:null,editCache:"",hashName:"all"}},methods:{addTodo:function(t){this.newtodo&&(this.todos.push({content:this.newtodo,completed:!1}),this.newtodo="")},remove:function(t){this.todos.splice(t,1)},editTodo:function(t){this.editCache=t.content,this.editTodoed=t},doneEdit:function(t,e){this.editTodoed=null,t.content||this.remove(e)},cancleEdit:function(t){this.editTodoed=null,t.content=this.editCache},clear:function(){this.todos=a.active(this.todos)},hashChange:function(){var t=location.hash.replace(/#\/?/,"");a[t]?this.hashName=t:(location.hash="",this.hashName="all")}},watch:{todos:{handler:function(){localStorage.setItem("todos",i()(this.todos))},deep:!0}},directives:{focus:function(t,e){t.focus()}},computed:{remain:function(){return a.active(this.todos).length},isAll:{get:function(){return 0===this.remain},set:function(t){this.todos.forEach(function(e){e.completed=t})}},filterTodos:function(){return a[this.hashName](this.todos)},getStorage:function(){var t=JSON.parse(localStorage.getItem("todos"));t&&(this.todos=t)}},mounted:function(){this.getStorage,this.hashChange(),window.addEventListener("hashchange",this.hashChange)}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list"},[t._m(0),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"add-todo"},[o("h3",[t._v("添加任务")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newtodo,expression:"newtodo",modifiers:{trim:!0}}],attrs:{placeholder:"请输入待办任务",autofocus:""},domProps:{value:t.newtodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newtodo=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),t.todos.length?t._e():o("div",{staticClass:"remind"},[o("p",[t._v("祝您拥有愉快的一天!")])]),t._v(" "),t.todos.length?o("nav",{staticClass:"nav-count"},[o("span",{staticClass:"todo-count"},[o("strong",[t._v(t._s(t.remain))]),t._v("个任务未完成\n      ")]),t._v(" "),o("div",{staticClass:"mark"},[o("div",{staticClass:"all"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.isAll,expression:"isAll"}],staticClass:"toggle-all",attrs:{id:"todo-list",type:"checkbox"},domProps:{checked:Array.isArray(t.isAll)?t._i(t.isAll,null)>-1:t.isAll},on:{change:function(e){var o=t.isAll,n=e.target,s=!!n.checked;if(Array.isArray(o)){var i=t._i(o,null);n.checked?i<0&&(t.isAll=o.concat([null])):i>-1&&(t.isAll=o.slice(0,i).concat(o.slice(i+1)))}else t.isAll=s}}}),t._v(" "),o("label",{attrs:{for:"todo-list"}},[t._v("标记全部")])]),t._v(" "),o("button",{on:{click:t.clear}},[t._v("清理完成任务")])])]):t._e(),t._v(" "),t.todos.length?o("section",{staticClass:"main"},[o("div",{staticClass:"nav"},[o("h3",[t._v("任务列表")]),t._v(" "),o("ul",{staticClass:"filters"},[o("li",{class:{selected:"all"==t.hashName}},[o("a",{attrs:{href:"#/"}},[t._v("全部任务")]),t._v(" "),o("a",{staticClass:"small",attrs:{href:"#/"}},[t._v("全部")])]),t._v(" "),o("li",{class:{selected:"active"==t.hashName}},[o("a",{attrs:{href:"#/active"}},[t._v("待办任务")]),t._v(" "),o("a",{staticClass:"small",attrs:{href:"#/active"}},[t._v("待办")])]),t._v(" "),o("li",{class:{selected:"completed"==t.hashName}},[o("a",{attrs:{href:"#/completed"}},[t._v("完成任务")]),t._v(" "),o("a",{staticClass:"small",attrs:{href:"#/completed"}},[t._v("完成")])])])]),t._v(" "),o("transition-group",{staticClass:"todo-list",attrs:{tag:"ul"}},t._l(t.filterTodos,function(e,n){return o("li",{key:n+1,class:{completed:e.completed,editing:e===t.editTodoed}},[o("div",{staticClass:"view"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],attrs:{id:"toggle"+n,type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(o){var n=e.completed,s=o.target,i=!!s.checked;if(Array.isArray(n)){var a=t._i(n,null);s.checked?a<0&&t.$set(e,"completed",n.concat([null])):a>-1&&t.$set(e,"completed",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(e,"completed",i)}}}),t._v(" "),o("label",{attrs:{for:"toggle"+n}},[o("i",{staticClass:"fa fa-check-square-o"})]),t._v(" "),o("span",{on:{dblclick:function(o){return t.editTodo(e)}}},[t._v(t._s(e.content))]),t._v(" "),o("i",{staticClass:"fa fa-trash-o",on:{click:function(e){return t.remove(n)}}})]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.content,expression:"todo.content",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],staticClass:"edit",domProps:{value:e.content},on:{blur:[function(o){return t.doneEdit(e,n)},function(e){return t.$forceUpdate()}],keyup:[function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"esc",27,o.key,["Esc","Escape"])?null:t.cancleEdit(e)},function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.doneEdit(e,n)}],input:function(o){o.target.composing||t.$set(e,"content",o.target.value.trim())}}})])}),0)],1):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"container"},[e("h1",[this._v("任务计划列表")])])])}]};var r={name:"App",components:{List:o("C7Lr")(c,l,!1,function(t){o("3TbS")},"data-v-7ed318cd",null).exports}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("List",{staticClass:"layout"})],1)},staticRenderFns:[]};var u=o("C7Lr")(r,d,!1,function(t){o("jNuS")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:u},template:"<App/>"})},jNuS:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5812c88eb66ae6a84b8f.js.map