(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(60)},33:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),c=a(13),i=a(6),s=a(7),u=a(9),m=a(8),p=a(10),d=(a(33),a(61));var b={background:"#659dbd",padding:"2%",color:"#eee"},h={color:"#eee"},f=function(){return o.a.createElement("header",{style:b},o.a.createElement("h1",null,"Todo List"),o.a.createElement(d.a,{style:h,to:"/todolistApp/"},"Home")," |  "," ",o.a.createElement(d.a,{style:h,to:"/about"},"About"))},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).getStyle=function(){return{margin:"1%",textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title;return o.a.createElement("div",{class:"card",style:this.getStyle()},o.a.createElement("ul",{className:"list-group list-group-flush"},o.a.createElement("li",{className:"list-group-item"},o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)}),"  ",a,o.a.createElement("input",{type:"button",style:g,className:"btn btn-danger",onClick:this.props.delItem.bind(this,t),value:"X"}))))}}]),t}(n.Component),g={float:"right"},E=y,v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return this.props.todos.map(function(t){return o.a.createElement(E,{key:t.id,todo:t,markComplete:e.props.markComplete,delItem:e.props.delItem})})}}]),t}(n.Component),j=a(23),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},a.onChange=function(e){a.setState(Object(j.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.addTodo(a.state.title),a.setState({title:""})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{margin:"1%",display:"flex"}},o.a.createElement("input",{type:"text",name:"title",value:this.state.title,style:{flex:"10",padding:"5px"},placeholder:"  Add new Todo...",onChange:this.onChange,className:"form-control"}),o.a.createElement("input",{type:"submit",value:"Submit",style:{flex:"1"},className:"btn btn-success"}))}}]),t}(o.a.Component),k=a(24),C=a.n(k),S=a(63),w=a(62);var x=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("h3",null,"About"),o.a.createElement("p",null,"This is app created using react by Moonlight Kim.")))},A=(a(38),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[]},a.markComplete=function(e){a.setState({todo:a.state.todos.map(function(t){t.id===e&&(t.completed=!t.completed)})})},a.delItem=function(e){a.setState({todos:Object(c.a)(a.state.todos.filter(function(t){return t.id!==e}))})},a.addTodo=function(e){if(e){var t={id:C.a.v4(),title:e,completed:!1};a.setState({todos:[t].concat(Object(c.a)(a.state.todos))})}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(S.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement(w.a,{exact:!0,path:"/todolistApp",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{addTodo:e.addTodo}),o.a.createElement(v,{todos:e.state.todos,markComplete:e.markComplete,delItem:e.delItem}))}}),o.a.createElement(w.a,{path:"/about",component:x})))}}]),t}(n.Component));a(59);l.a.render(o.a.createElement(A,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.a66160b6.chunk.js.map