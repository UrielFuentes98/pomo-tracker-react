(this["webpackJsonppomo-tracker-react"]=this["webpackJsonppomo-tracker-react"]||[]).push([[0],{28:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),o=n.n(s),c=n(18),r=n.n(c),i=n(3),l=n(12),u=n(10),d=n(7),j=n(8),b=function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.name,t.value))},h=function(e){var t=e.stateToRegister,n=e.stateToStats,o=Object(s.useReducer)(b,{}),c=Object(i.a)(o,2),r=c[0],l=c[1],u=Object(s.useState)(""),h=Object(i.a)(u,2),m=h[0],p=h[1];Object(s.useEffect)((function(){document.cookie&&n()}));var O=function(e){l({name:e.target.name,value:e.target.value})};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"mb-4",children:"Login"}),Object(a.jsxs)(d.a,{onSubmit:function(e){e.preventDefault(),fetch("https://pomo-tracker-app.herokuapp.com/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r),credentials:"include"}).then((function(e){return e.text()})).then((function(e){"User logged in"===e?(n(),p("")):(console.log("\ud83d\ude80 ~ file: Login.js ~ line 35 ~ message",e),p(e))})).catch((function(e){p("Couldn't log in."),console.error(e)}))},children:[Object(a.jsxs)(d.a.Group,{controlId:"EmailUsername",children:[Object(a.jsx)(d.a.Label,{children:"Username/Email"}),Object(a.jsx)(d.a.Control,{onChange:O,value:r.username,name:"user_id",type:"text",placeholder:"Enter username or email"})]}),Object(a.jsxs)(d.a.Group,{controlId:"LoginPassword",children:[Object(a.jsx)(d.a.Label,{children:"Password"}),Object(a.jsx)(d.a.Control,{onChange:O,value:r.username,name:"password",type:"password",placeholder:"Enter password"})]}),Object(a.jsx)("p",{className:"text-danger font-weight-bold",children:m}),Object(a.jsxs)("div",{style:{position:"relative"},children:[Object(a.jsx)(j.a,{variant:"primary",type:"submit",style:{boxShadow:"none"},children:"Login"}),Object(a.jsx)(j.a,{variant:"link",onClick:t,style:{boxShadow:"none",position:"absolute",bottom:-10,right:0,color:"darkslategray"},children:"Register"})]})]})]})},m=function(e,t){return Object(u.a)(Object(u.a)({},e),{},Object(l.a)({},t.name,t.value))},p=function(e){var t=e.stateToStats,n=e.stateToLogin,o=Object(s.useReducer)(m,{}),c=Object(i.a)(o,2),r=c[0],l=c[1],u=Object(s.useState)(!1),b=Object(i.a)(u,2),h=b[0],p=b[1],O=Object(s.useState)(""),f=Object(i.a)(O,2),x=f[0],g=f[1];var v=function(e){l({name:e.target.name,value:e.target.value})};return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"mb-4",children:"Register"}),Object(a.jsxs)(d.a,{onSubmit:function(e){e.preventDefault(),r.password&&r.username&&r.email?fetch("https://pomo-tracker-app.herokuapp.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r),credentials:"include"}).then((function(e){return e.text()})).then((function(e){"User registered."===e?(console.log("\ud83d\ude80 ~ file: Register.js ~ line 28 ~ message",e),p(!1),t()):(console.log("\ud83d\ude80 ~ file: Register.js ~ line 28 ~ message",e),e.search(/unique/)>-1?g("Username or email already exists."):g(e),p(!0))})).catch((function(e){console.error("\ud83d\ude80 ~ file: Register.js ~ line 35 ~ error",e),p(!0)})):(g("Missing field in register form."),p(!0))},children:[Object(a.jsxs)(d.a.Group,{controlId:"Username",children:[Object(a.jsx)(d.a.Label,{children:"Username"}),Object(a.jsx)(d.a.Control,{onChange:v,value:r.username,type:"text",name:"username",placeholder:"Type a username"})]}),Object(a.jsxs)(d.a.Group,{controlId:"Email",children:[Object(a.jsx)(d.a.Label,{children:"Email"}),Object(a.jsx)(d.a.Control,{onChange:v,value:r.email,type:"email",name:"email",placeholder:"Type your email"})]}),Object(a.jsxs)(d.a.Group,{controlId:"Password",children:[Object(a.jsx)(d.a.Label,{children:"Password"}),Object(a.jsx)(d.a.Control,{onChange:v,value:r.password,type:"password",name:"password",placeholder:"Type a password"})]}),h&&Object(a.jsx)("p",{className:"text-danger font-weight-bold",children:x}),Object(a.jsxs)("div",{style:{position:"relative"},children:[Object(a.jsx)(j.a,{variant:"primary",type:"submit",style:{boxShadow:"none"},children:"Register"}),Object(a.jsx)(j.a,{variant:"link",onClick:n,style:{boxShadow:"none",position:"absolute",bottom:-10,right:0,color:"darkslategray"},children:"Login"})]})]})]})},O=function(e){return e<10?"0"+e.toString():e.toString()},f=function(e){var t="";return e>0&&(t=e.toString()+":"),t},x=function(e){var t=e.stats,n=e.stateToLogin,o=e.setStats,c=Object(s.useState)(""),r=Object(i.a)(c,2),l=r[0],u=r[1],d=Object(s.useState)(!1),b=Object(i.a)(d,2),h=b[0],m=b[1];Object(s.useEffect)((function(){var e=!0;return fetch("https://pomo-tracker-app.herokuapp.com/main-stats",{credentials:"include"}).then((function(e){return e.json()})).then((function(t){e&&o((function(){return t}))})).catch((function(e){u("Sorry. There was a problem getting the stats."),m(!0)})),function(){e=!1}}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"mb-1 mt-xl-5",children:"Stats"}),!h&&t.username?Object(a.jsxs)("h3",{className:"mb-5",children:["Hello, ",t.username,"."]}):null,Object(a.jsx)("p",{className:"text-danger font-weight-bold",children:h?l:""}),Object(a.jsx)("h4",{children:"Today."}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"font-weight-bold",children:"Pomodoros: "}),Object(a.jsx)("span",{children:t.pomoToday})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"font-weight-bold",children:"Time: "}),Object(a.jsxs)("span",{children:[f(Math.floor(t.secToday/3600)),O(Math.floor(t.secToday/60%60)),":",O(Math.floor(t.secToday%60))]})]}),Object(a.jsx)("h4",{className:"mt-3",children:"This week."}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"font-weight-bold",children:"Pomodoros: "}),Object(a.jsx)("span",{children:t.pomoWeek})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"font-weight-bold",children:"Time: "}),Object(a.jsxs)("span",{children:[f(Math.floor(t.secWeek/3600)),O(Math.floor(t.secWeek/60%60)),":",O(Math.floor(t.secWeek%60))]})]}),Object(a.jsx)("h4",{className:"mt-3",children:"This month."}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"font-weight-bold",children:"Pomodoros: "}),Object(a.jsx)("span",{children:t.pomoMonth})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"font-weight-bold",children:"Time: "}),Object(a.jsxs)("span",{children:[f(Math.floor(t.secMonth/3600)),O(Math.floor(t.secMonth/60%60)),":",O(Math.floor(t.secMonth%60))]})]}),Object(a.jsx)(j.a,{variant:"outline-secondary",className:"btn-sm mt-3 float-right",style:{boxShadow:"none"},onClick:function(){fetch("https://pomo-tracker-app.herokuapp.com/logout",{method:"DELETE",credentials:"include"}).then((function(e){return e.text()})).then((function(e){"Session finished."===e?(u(""),m(!1),n()):(m(!0),u("Sorry. Couldn't log out."))})).catch((function(e){m(!0),u("Sorry. Couldn't log out."),console.error("\ud83d\ude80 ~ file: Register.js ~ line 35 ~ error",e.message)}))},children:"Logout"})]})};var g=function(e,t){var n=Object(s.useRef)();Object(s.useEffect)((function(){n.current=e}),[e]),Object(s.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},v=n.p+"static/media/alarm_sound.b2009aa7.mp3",k=function(e){var t=e.isRunning,n=e.resetTimer,o=e.resetValue,c=e.resetedFunc,r=e.sessionOver,i=e.setSessionOver,l=e.mode,u=e.minutes,d=e.seconds,j=e.setMinutes,b=e.setSeconds;g((function(){r?d<59?b(d+1):u<60&&(b(0),j(u+1)):d>0?b((function(e){return e-1})):u>0?(b(59),j((function(e){return e-1}))):(console.log("Setting extra state"),i(!0),h.play())}),t?1e3:null),Object(s.useEffect)((function(){var e="";if(r)e+="Extra - ";else switch(l){case"pomodoro":e+="Pomodoro - ";break;case"break":e+="Break - ";break;case"long-break":e+="Long Break - "}document.title=e+"".concat(m(u),":").concat(m(d))}),[u,d,l]),Object(s.useEffect)((function(){n&&(j(o),b(0),c())}),[n]);var h=new Audio(v);var m=function(e){return e<10?"0"+e.toString():e.toString()};return Object(a.jsxs)("div",{className:"display-2 font-weight-bold mb-2",children:[m(u),":",m(d)]})};var S=function(e){var t=e.updateState,n=e.sessionState,o=e.resetContinue,c=e.setResetContinue,r=Object(s.useState)("Stop"),l=Object(i.a)(r,2),u=l[0],d=l[1];Object(s.useEffect)((function(){o&&(d("Stop"),c(!1))}),[o]);var b=function(e){"wait"!==n&&(d(e),t("Continue"===e?"stop":"continue"))};return Object(a.jsxs)("div",{className:"ml-3",children:[Object(a.jsxs)(j.a,{variant:"secondary",className:"mr-2",style:{border:"1px solid black",boxShadow:"none"},onClick:function(){return t("run")},children:[" ","Start"]}),Object(a.jsx)(j.a,{variant:"secondary",className:"mr-2",style:{border:"1px solid black",boxShadow:"none"},onClick:function(){return b("Stop"===u?"Continue":"Stop")},children:u}),Object(a.jsx)(j.a,{variant:"secondary",className:"mr-2",style:{border:"1px solid black",boxShadow:"none"},onClick:function(){return t("wait")},children:"End"})]})};var y=function(e){var t=e.changeMode,n=e.radioName,s=e.inputName,o=e.inputValue,c=e.setInputValue,r=e.inputChecked,i=e.invalidInput,l=e.setInvalidInput;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("span",{style:{width:"110px",display:"inline-block"},children:[Object(a.jsx)("input",{type:"radio",className:"mr-1",id:n,name:"session-type",value:n,onClick:function(){return t(n)},checked:r}),Object(a.jsx)("label",{className:"input-label",children:s})]}),Object(a.jsx)("input",{className:"input-field",type:"text",value:o,onChange:function(e){return function(e){if(r){var t=Number(e.target.value);isNaN(t)?l(!0):t>0&&t<60&&Number.isInteger(t)?l(!1):l(!0),c(e.target.value)}}(e)},size:"5"}),Object(a.jsx)("span",{children:" min"}),i?Object(a.jsx)("span",{className:"ml-2 text-danger font-weight-bold",children:"Invalid Input"}):null]})};var T=function(e){var t=e.changeMode,n=e.mode,o=e.setNextTimer,c=e.setResetTimer,r=e.checkTextInput,l=e.setCheckTextInput,u=Object(s.useState)("25"),d=Object(i.a)(u,2),j=d[0],b=d[1],h=Object(s.useState)("5"),m=Object(i.a)(h,2),p=m[0],O=m[1],f=Object(s.useState)("15"),x=Object(i.a)(f,2),g=x[0],v=x[1],k=Object(s.useState)({pomodoro:!0,break:!1,longBreak:!1}),S=Object(i.a)(k,2),T=S[0],w=S[1],N=Object(s.useState)(!1),C=Object(i.a)(N,2),I=C[0],M=C[1],L=Object(s.useState)(!1),E=Object(i.a)(L,2),R=E[0],P=E[1],B=Object(s.useState)(!1),V=Object(i.a)(B,2),W=V[0],U=V[1];return Object(s.useEffect)((function(){switch(n){case"pomodoro":w({pomodoro:!0,break:!1,longBreak:!1}),o(I?25:parseInt(j));break;case"break":w({pomodoro:!1,break:!0,longBreak:!1}),o(R?5:parseInt(p));break;case"long-break":w({pomodoro:!1,break:!1,longBreak:!0}),o(W?15:parseInt(g))}l(!1),r&&c(!0)}),[n,r]),Object(a.jsxs)("div",{className:"mt-5",children:[Object(a.jsx)(y,{changeMode:t,radioName:"pomodoro",inputName:"Pomodoro",inputValue:j,setInputValue:b,inputChecked:T.pomodoro,invalidInput:I,setInvalidInput:M}),Object(a.jsx)(y,{changeMode:t,radioName:"break",inputName:"Break",inputValue:p,setInputValue:O,inputChecked:T.break,invalidInput:R,setInvalidInput:P}),Object(a.jsx)(y,{changeMode:t,radioName:"long-break",inputName:"Long Break",inputValue:g,setInputValue:v,inputChecked:T.longBreak,invalidInput:W,setInvalidInput:U})]})},w=n(13),N=n(11),C=n(9),I=n.p+"static/media/click.07b2086f.mp3";var M=function(e){var t=e.userState,n=e.minutes,o=e.seconds,c=e.setMinutes,r=e.setSeconds,l=e.stats,d=e.setStats,j=Object(s.useState)(25),b=Object(i.a)(j,2),h=b[0],m=b[1],p=Object(s.useState)("pomodoro"),O=Object(i.a)(p,2),f=O[0],x=O[1],g=Object(s.useState)(!0),v=Object(i.a)(g,2),y=v[0],M=v[1],L=Object(s.useState)(!1),E=Object(i.a)(L,2),R=E[0],P=E[1],B=Object(s.useState)(!1),V=Object(i.a)(B,2),W=V[0],U=V[1],F=Object(s.useState)("wait"),G=Object(i.a)(F,2),J=G[0],D=G[1],A=Object(s.useState)(!1),_=Object(i.a)(A,2),q=_[0],z=_[1],H=Object(s.useState)(0),K=Object(i.a)(H,2),Q=K[0],X=K[1],Y=Object(s.useState)(!1),Z=Object(i.a)(Y,2),$=Z[0],ee=Z[1],te=Object(s.useState)("Pomodoro"),ne=Object(i.a)(te,2),ae=ne[0],se=ne[1],oe=new Audio(I),ce=function(){var e=0,t=0;q?(e=60*(h+n)+o,t=1):e=60*(h-n-1)+(60-o),d(Object(u.a)(Object(u.a)({},l),{},{secToday:l.secToday+e,pomoToday:l.pomoToday+t,secWeek:l.secWeek+e,pomoWeek:l.pomoWeek+t,secMonth:l.secMonth+e,pomoMonth:l.pomoMonth+t}));var a=t?"true":"false";fetch("https://pomo-tracker-app.herokuapp.com/sendRecord",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({time:e,pomodoro:a}),credentials:"include"}).then((function(e){return e.text()})).then((function(e){})).catch((function(e){return console.log("error",e)}))},re=function(){"pomodoro"===f?Q<3?(x("break"),ie("break"),X((function(e){return e+1}))):(x("long-break"),ie("long-break"),X(0)):(x("pomodoro"),ie("pomodoro")),z(!1)},ie=function(e){switch(e){case"pomodoro":se("Pomodoro");break;case"break":se("Break");break;case"long-break":se("Long Break")}};return Object(a.jsxs)(w.a,{fluid:!0,children:[Object(a.jsx)(N.a,{children:Object(a.jsx)(C.a,{md:{offset:2},children:Object(a.jsx)(k,{isRunning:W,resetTimer:y,resetValue:h,resetedFunc:function(){M(!1)},sessionOver:q,setSessionOver:z,mode:f,minutes:n,setMinutes:c,seconds:o,setSeconds:r})})}),Object(a.jsx)(N.a,{children:Object(a.jsx)(C.a,{md:{offset:1},children:q?Object(a.jsxs)("h3",{className:"text-danger",children:[ae," session finished."]}):null})}),Object(a.jsx)(N.a,{children:Object(a.jsx)(C.a,{md:{offset:2},children:Object(a.jsx)(S,{updateState:function(e){switch(e){case"run":"wait"===J&&(P(!0),U(!0),D(e),oe.play());break;case"continue":"stop"===J&&(U(!0),D(e),oe.play());break;case"stop":"run"!==J&&"continue"!==J||(U(!1),D(e),oe.play());break;case"wait":"wait"!==J&&(U(!1),"stop"===J&&ee(!0),"stats"===t&&"pomodoro"===f&&ce(),(q||"pomodoro"!==f)&&re(),P(!0),oe.play(),D(e))}},sessionState:J,resetContinue:$,setResetContinue:ee})})}),Object(a.jsx)(N.a,{children:Object(a.jsx)(C.a,{md:{offset:2},children:Object(a.jsx)(T,{changeMode:function(e){"wait"===J&&(x(e),ie(e))},mode:f,setNextTimer:m,setResetTimer:M,checkTextInput:R,setCheckTextInput:P})})})]})};var L=function(){var e=Object(s.useState)("login"),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(s.useState)(""),r=Object(i.a)(c,2),l=r[0],u=r[1],d=Object(s.useState)(0),j=Object(i.a)(d,2),b=j[0],m=j[1],O=Object(s.useState)(0),f=Object(i.a)(O,2),g=f[0],v=f[1],k=Object(s.useState)({secToday:0,pomoToday:0,secWeek:0,pomoWeek:0,secMonth:0,pomoMonth:0}),S=Object(i.a)(k,2),y=S[0],T=S[1];return Object(a.jsx)(w.a,{fluid:!0,children:Object(a.jsxs)(N.a,{children:[Object(a.jsx)(C.a,{xl:4,md:3}),Object(a.jsx)(C.a,{xl:5,md:6,style:{marginTop:"25vh"},children:Object(a.jsx)(M,{userState:n,minutes:b,setMinutes:m,seconds:g,setSeconds:v,stats:y,setStats:T})}),Object(a.jsxs)(C.a,{xl:2,md:3,style:{marginTop:"10vh"},children:["login"===n&&Object(a.jsx)(h,{stateToRegister:function(){return o("register")},stateToStats:function(){return o("stats")},setUserName:u}),"register"===n&&Object(a.jsx)(p,{stateToStats:function(){return o("stats")},stateToLogin:function(){return o("login")}}),"stats"===n&&Object(a.jsx)(x,{userName:l,setUserName:u,stats:y,stateToLogin:function(){return o("login")},setStats:T})]})]})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),o(e),c(e)}))};n(27);r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),E()}},[[28,1,2]]]);
//# sourceMappingURL=main.00d8bd2f.chunk.js.map