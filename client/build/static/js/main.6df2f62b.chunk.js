(this["webpackJsonpday-by-diary"]=this["webpackJsonpday-by-diary"]||[]).push([[0],{22:function(e,t,n){e.exports={image:"Home_image__3DuFa",main:"Home_main__UU0fQ"}},28:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(24),s=n.n(r),i=(n(33),n(9)),o=n(10),l=n(17),d=n(12),j=n(11),u=n(6),h=n(2),b=(n(34),n(35),n(0));var m=function(e){return Object(a.useEffect)((function(){e.componentDidMount()}),[]),Object(b.jsx)("div",{children:Object(b.jsx)("div",{className:"container",children:e.diary.map((function(t,n){return Object(b.jsx)("div",{className:"diarylist",children:Object(b.jsx)("ul",{className:"liststyle",children:Object(b.jsxs)("li",{children:[Object(b.jsx)("img",{src:t.canvas}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:t.title}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:t.text}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{children:t.date}),Object(b.jsx)("br",{}),Object(b.jsx)(u.b,{to:"/Diary/update/".concat(t._id),children:"Edit"}),Object(b.jsx)("input",{value:"Delete",className:"deletebtn",onClick:function(n){return e.handleDelete(n,t._id)},type:"submit"})]},n)})})}))})})};n(45);var p=function(e){return e.currentUser?Object(b.jsx)("div",{className:"nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/Diary",children:"Diary List"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/Diary/new",children:"Add Diary"})}),Object(b.jsx)("li",{children:Object(b.jsxs)("span",{className:"user",children:["Welcome ",e.currentUser.name]})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/",onClick:e.handleLogout,activeClassName:"active",children:"Logout"})})]})}):Object(b.jsx)("div",{className:"nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/",activeClassName:"active",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/login",activeClassName:"active",children:"Login"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/signup",activeClassName:"active",children:"Signup"})})]})})},O=n(4),x=n.n(O),f=n(14),g=n(15),v=(n(47),n(27)),y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleAddChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.handleAddDiarysSumbit=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.handleExport();case 2:fetch("/diarys/sumDiary",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(a.state)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleExport=Object(f.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.canvas.current.exportImage();case 2:t=e.sent,a.setState({canvas:t});case 4:case"end":return e.stop()}}),e)}))),a.state={title:"",text:"",date:"",canvas:""},a.canvas=c.a.createRef(),a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"background",children:Object(b.jsx)("div",{className:"newdiary",children:Object(b.jsxs)("form",{onSubmit:this.handleAddDiarysSumbit,children:[Object(b.jsx)("div",{className:"canvas",children:Object(b.jsx)(v.a,{name:"canvas",className:"canvas",style:{width:"520px",height:"350px"},ref:this.canvas,strokeWidth:4,strokeColor:"black"})}),Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("input",{type:"text",placeholder:"Title",name:"title",className:"titlename",onChange:this.handleAddChange})}),Object(b.jsx)("div",{className:"textbox",children:Object(b.jsx)("textarea",{type:"text",rows:"6",cols:"55",placeholder:"What did you do today??",name:"text",onChange:this.handleAddChange})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"date",className:"date",name:"date",onChange:this.handleAddChange})}),Object(b.jsx)("div",{className:"addbtn",children:Object(b.jsx)("input",{value:"Add Diary",type:"Submit",className:"btn"})})]})})})}}]),n}(a.Component),N=y,S=n(13);n(48);function C(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var k={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:C,getUserFromToken:function(){var e=C();return e?JSON.parse(atob(e.split(".")[1])).user:null},removeToken:function(){localStorage.removeItem("token")}},w="https://daybydiary.herokuapp.com/";var D={signup:function(e){return fetch("".concat(w,"/signup"),{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Email already taken")})).then((function(e){var t=e.token;return k.setToken(t)}))},getUser:function(){return k.getUserFromToken()},login:function(e){return fetch("".concat(w,"/login"),{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){if(e.ok)return e.json();throw new Error("Username or password incorrect!")})).then((function(e){var t=e.token;return k.setToken(t)}))},logout:function(){k.removeToken()}},T=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,D.signup(a.state);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",email:"",password:"",confirmPassword:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("h3",{children:"Sign Up"}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",placeholder:"Name",className:"form-control",name:"name",onChange:this.handleChange})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"email",placeholder:"Email",className:"form-control",name:"email",onChange:this.handleChange})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",name:"password",onChange:this.handleChange})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"password",placeholder:"Confirm Pasword",name:"confirmPassword",className:"form-control",onChange:this.handleChange})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("button",{className:"btn btn-default",children:"Sign up"})})]})}}]),n}(a.Component),U=T,L=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).updateMessage=function(e){a.setState({message:e})},a.state={message:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"SignupPage",children:[Object(b.jsx)(U,Object(S.a)(Object(S.a)({},this.props),{},{updateMessage:this.updateMessage})),Object(b.jsx)("p",{children:this.state.message})]})}}]),n}(a.Component),E=(n(49),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(f.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,D.login(a.state);case 4:a.props.handleSignupOrLogin(),a.props.history.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),a.state={email:"",password:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"LoginPage",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("h3",{children:"Log In"}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"email",placeholder:"Email",className:"form-control",name:"email",onChange:this.handleChange})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"password",placeholder:"Password",className:"form-control",name:"password",onChange:this.handleChange})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("button",{className:"btn btn-default",children:"Log in"})})]})})}}]),n}(a.Component)),P=E,H=n(23),M=n(28),A=n.n(M);var J=function(e){Object(h.e)();var t=Object(h.f)().id,n=Object(a.useState)(""),c=Object(H.a)(n,2),r=(c[0],c[1],Object(a.useState)({title:"",text:"",date:""})),s=Object(H.a)(r,2),i=s[0],o=s[1];return Object(b.jsx)("div",{className:A.a.diary,children:Object(b.jsx)("div",{className:"background",children:Object(b.jsx)("div",{className:"newdiary",children:Object(b.jsxs)("form",{onSubmit:function(e){return function(e,t){console.log("update"),console.log(t),fetch("/diarys/update/".concat(t),{method:"PUT",body:JSON.stringify(i),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()}))}(0,t)},children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("input",{type:"text",placeholder:"Title",name:"title",className:"titlename",onChange:function(e){return o(Object(S.a)(Object(S.a)({},i),{},{title:e.target.value}))}})}),Object(b.jsx)("div",{className:"textbox",children:Object(b.jsx)("textarea",{type:"text",rows:"6",cols:"55",placeholder:"What did you do today??",name:"text",onChange:function(e){return o(Object(S.a)(Object(S.a)({},i),{},{text:e.target.value}))}})}),Object(b.jsx)("div",{children:Object(b.jsx)("input",{type:"date",className:"date",name:"date",onChange:function(e){return o(Object(S.a)(Object(S.a)({},i),{},{date:e.target.value}))}})}),Object(b.jsx)("div",{className:"addbtn",children:Object(b.jsx)("button",{type:"submit",className:"btn",children:"Edit Diary"})})]})})})})},I=n(22),_=n.n(I),W=n.p+"static/media/home.0d934d1f.jpg";var F=function(e){return Object(b.jsx)("div",{className:_.a.main,children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:_.a.image,src:W})})})},B=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleSignupOrLogin=function(){a.setState({user:D.getUser()})},a.handleLogout=function(){D.logout(),a.setState({user:null})},a.state={diary:[],user:D.getUser()},a.handleDelete=a.handleDelete.bind(Object(l.a)(a)),a.componentDidMount=a.componentDidMount.bind(Object(l.a)(a)),a.handleUpdateDiary=a.handleUpdateDiary.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/diarys/data").then((function(e){return e.json()})).then((function(t){return e.setState({diary:t})})).then((function(){return console.log(e.state.diary)}))}},{key:"handleDelete",value:function(e,t){var n=this;e.preventDefault(),fetch("/diarys/delete/".concat(t),{method:"DELETE",headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()})).then((function(e){return n.setState({diary:e})}))}},{key:"handleUpdateDiary",value:function(e,t){console.log("update"),fetch("/diarys/update/".concat(t),{method:"PUT",body:JSON.stringify(this.state),headers:new Headers({"Content-Type":"application/json"})}).then((function(e){return e.json()}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(p,{currentUser:this.state.user,handleLogout:this.handleLogout}),Object(b.jsx)(h.a,{path:"/",exact:!0,children:Object(b.jsx)(F,{})}),Object(b.jsx)(h.a,{path:"/Diary",exact:!0,children:Object(b.jsx)(m,{diary:this.state.diary,handleDelete:this.handleDelete,componentDidMount:this.componentDidMount})}),Object(b.jsx)(h.a,{exact:!0,path:"/Diary/update/:id",children:Object(b.jsx)(J,{handleUpdateDiary:this.handleUpdateDiary})}),Object(b.jsx)(h.a,{exact:!0,path:"/Diary/new",children:Object(b.jsx)(N,{})}),Object(b.jsx)(h.a,{path:"/Signup",children:Object(b.jsx)(L,{})}),Object(b.jsx)(h.a,{path:"/login",render:function(t){var n=t.history;return Object(b.jsx)(P,{history:n,handleSignupOrLogin:e.handleSignupOrLogin})}})]})})}}]),n}(a.Component);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.6df2f62b.chunk.js.map