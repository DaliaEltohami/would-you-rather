(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{26:function(e,t,s){},40:function(e,t,s){"use strict";s.r(t);var n=s(1),o=s.n(n),a=s(15),i=s.n(a),r=(s(26),s(3));const c="RECEIVE_QUESTIONS",l="UPDATE_QUESTION_ANSWER",d="UPDATE_QUESTIONS";const h="RECEIVE_USERS",u="UPDATE_USER_ANSWERS",j="UPDATE_USER_QUESTIONS";const p="SET_AUTHED_USER";function b(e){return{type:p,id:e}}const m="TOGGLE_LOADING";let x={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://tylermcginnis.com/would-you-rather/sarah.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo",vthrdm985a262al8qx3do:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://tylermcginnis.com/would-you-rather/dan.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},O={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:["sarahedo"],text:"become a superhero"},optionTwo:{votes:["johndoe"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe","sarahedo"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function v(e){return new Promise(((t,s)=>{const n=e.author,o=function(e){let{optionOneText:t,optionTwoText:s,author:n}=e;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:n,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:s}}}(e);setTimeout((()=>{O={...O,[o.id]:o},x={...x,[n]:{...x[n],questions:x[n].questions.concat([o.id])}},t(o)}),1e3)}))}var w=s(10),g=s.n(w);function f(){return e=>(e(Object(w.showLoading)()),Promise.all([new Promise(((e,t)=>{setTimeout((()=>e({...x})),1e3)})),new Promise(((e,t)=>{setTimeout((()=>e({...O})),1e3)}))]).then((e=>{let[t,s]=e;return{users:t,questions:s}})).then((t=>{let{users:s,questions:n}=t;e(function(e){return{type:h,users:e}}(s)),e(function(e){return{type:c,questions:e}}(n)),e(Object(w.hideLoading)()),e({type:m})})))}function y(e,t){return(s,n)=>{const{authedUser:o}=n(),a={authedUser:o,answer:e,qid:t};return s(Object(w.showLoading)()),function(e){let{authedUser:t,qid:s,answer:n}=e;return new Promise(((e,o)=>{setTimeout((()=>{console.log(n,s,t),x={...x,[t]:{...x[t],answers:{...x[t].answers,[s]:n}}},O={...O,[s]:{...O[s],[n]:{...O[s][n],votes:O[s][n].votes.concat([t])}}},e()}),500)}))}(a).then((()=>{s(function(e){return{type:l,answerDetails:e}}(a)),s(function(e){return{type:u,answerDetails:e}}(a)),s(Object(w.hideLoading)())}))}}function N(e,t){return(s,n)=>{const{authedUser:o}=n();return v({optionOneText:e,optionTwoText:t,author:o}).then((e=>{s(Object(w.showLoading)()),s(function(e){return{type:j,formattedQuestion:e}}(e)),s(function(e){return{type:d,formattedQuestion:e}}(e)),s(Object(w.hideLoading)())}))}}var T=s(5),q=s(0);class U extends n.Component{render(){const{questionAuthor:e,avatar:t,optionOne:s,optionTwo:n,id:o,view:a}=this.props;return Object(q.jsxs)("div",{className:"poll-container",children:[Object(q.jsxs)("p",{className:"poll-heading",children:[Object(q.jsx)("span",{children:e})," asks :"]}),Object(q.jsxs)("div",{className:"poll-details",children:[Object(q.jsx)("img",{src:t,alt:"avatar of ".concat(e),className:"avatar"}),Object(q.jsxs)("div",{className:"poll-data ",children:[Object(q.jsx)("p",{className:"",style:{fontWeight:"bolder",fontSize:"20px"},children:"Would You Rather"}),Object(q.jsx)("p",{className:"poll-option ",children:s}),Object(q.jsx)("p",{className:"poll-option ",children:n}),Object(q.jsx)("p",{className:"poll-view",children:Object(q.jsx)(T.b,{to:"/questions/".concat(o),className:"poll-link",children:"View Poll"})})]})]})]})}}var S=Object(r.connect)((function(e,t){let{users:s,questions:n,authedUser:o}=e,{id:a,view:i}=t;const r=n[a].author;return{questionAuthor:r,avatar:s[r].avatarURL,optionOne:n[a].optionOne.text,optionTwo:n[a].optionTwo.text,view:i,id:a}}))(U);class E extends n.Component{constructor(){super(...arguments),this.state={view:"unanswered"},this.viewAnswered=e=>{this.setState((()=>({view:"answered"})))},this.viewUnanswered=e=>{this.setState((()=>({view:"unanswered"})))}}render(){console.log(this.props);const{view:e}=this.state,{answeredQuestions:t,unansweredQuestions:s}=this.props;return Object(q.jsxs)("div",{className:"dashboard-container",children:[Object(q.jsxs)("div",{className:"dashboard-buttons",children:[Object(q.jsx)("p",{className:"unanswered"===e?"questions-view-active":"questions-view",onClick:this.viewUnanswered,children:"Unanswered Questions"}),Object(q.jsx)("p",{className:"answered"===e?"questions-view-active":"questions-view",onClick:this.viewAnswered,children:"Answered Questions"})]}),"answered"===e?t.map((t=>Object(q.jsx)("li",{children:Object(q.jsx)(S,{view:e,id:t})},t))):s.map((t=>Object(q.jsx)("li",{children:Object(q.jsx)(S,{view:e,id:t})},t)))]})}}var C=Object(r.connect)((function(e){let{questions:t,users:s,authedUser:n}=e;const o=s[n].answers;console.log(s[n].answers);const a=Object.keys(o);console.log(a);const i=[];return Object.keys(t).map((e=>{a.includes(e)||i.push(e)})),{answeredQuestions:a.sort(((e,s)=>t[s].timestamp-t[e].timestamp)),unansweredQuestions:i.sort(((e,s)=>t[s].timestamp-t[e].timestamp))}}))(E),k=s(4);class R extends n.Component{constructor(){super(...arguments),this.handleLogout=()=>{this.props.dispatch(b(null)),this.props.history.push("/login")}}render(){return Object(q.jsxs)("nav",{className:"nav",children:[Object(q.jsx)("div",{children:Object(q.jsxs)("ul",{className:"nav-list",children:[Object(q.jsx)("li",{children:Object(q.jsx)(T.c,{to:"/",exact:!0,activeClassName:"active",children:"Home"})}),Object(q.jsx)("li",{children:Object(q.jsx)(T.c,{to:"/add",activeClassName:"active",children:"New Question"})}),Object(q.jsx)("li",{children:Object(q.jsx)(T.c,{to:"/leaderboard",activeClassName:"active",children:"Leader Board"})})]})}),null!==this.props.authedUser&&Object(q.jsx)("div",{children:Object(q.jsxs)("ul",{className:"nav-list",children:[Object(q.jsxs)("li",{className:"nav-greating",children:[Object(q.jsxs)("span",{children:[" Hello, ",this.props.authedUser]}),Object(q.jsx)("img",{src:this.props.avatar,alt:"avatar of ".concat(this.props.authedUser),className:"avatar-thumb"})]}),Object(q.jsx)("li",{onClick:this.handleLogout,className:"logout",children:"Logout"})]})})]})}}var L=Object(k.f)(Object(r.connect)((function(e){let{users:t,authedUser:s}=e;console.log(s);const n=s?t[s].avatarURL:null;return console.log(n),{authedUser:s,avatar:n}}))(R));var A=e=>{const{completed:t}=e,s={height:"100%",width:"".concat(t,"%"),backgroundColor:"#0f5c26",borderRadius:"inherit",textAlign:"right"};return Object(q.jsx)("div",{style:{height:20,width:"75%",backgroundColor:"#e0e0de",borderRadius:50,alignSelf:"center"},children:Object(q.jsx)("div",{style:s,children:Object(q.jsx)("span",{style:{padding:5,color:"white",fontWeight:"bold"},children:"".concat(t,"%")})})})};class Q extends n.Component{render(){const{question:e}=this.props;if(void 0===e)return Object(q.jsx)("p",{children:"This Poll is not Existed"});{const{questionAuthor:t,avatar:s,optionOne:n,optionTwo:o,completed1:a,completed2:i,authedUser:r,totalVotes:c,optionOneVotes:l,optionTwoVotes:d}=this.props;return console.log(a,i),Object(q.jsxs)("div",{className:"answered-poll-container",children:[Object(q.jsxs)("p",{className:"poll-heading",children:[Object(q.jsx)("span",{children:t})," asks :"]}),Object(q.jsxs)("div",{className:"poll-details",children:[Object(q.jsx)("img",{src:s,alt:"avatar of ".concat(t),className:"avatar-answered"}),Object(q.jsxs)("div",{className:"poll-data ",children:[Object(q.jsx)("p",{className:"",style:{fontWeight:"bolder",fontSize:"20px"},children:"Results :-"}),Object(q.jsxs)("div",{className:e.optionOne.votes.includes(r)?"answer-yes":"answer-no",children:[Object(q.jsxs)("div",{className:"poll-data1",children:[Object(q.jsx)("p",{className:"poll-option ",children:n}),e.optionOne.votes.includes(r)&&Object(q.jsx)("p",{className:"your-vote",children:"Your Vote"})]}),Object(q.jsx)(A,{completed:a}),Object(q.jsx)("div",{className:"votes",children:Object(q.jsxs)("p",{children:[l," out of ",c," votes"]})})]}),Object(q.jsxs)("div",{className:e.optionTwo.votes.includes(r)?"answer-yes":"answer-no",children:[Object(q.jsxs)("div",{className:"poll-data1",children:[Object(q.jsx)("p",{className:"poll-option ",children:o}),e.optionTwo.votes.includes(r)&&Object(q.jsx)("p",{className:"your-vote",children:"Your Vote"})]}),Object(q.jsx)(A,{completed:i}),Object(q.jsx)("div",{className:"votes",children:Object(q.jsxs)("p",{children:[d," out of ",c," votes"]})})]})]})]})]})}}}var z=Object(k.f)(Object(r.connect)((function(e,t){let{authedUser:s,users:n,questions:o}=e;const{id:a}=t,i=o[a];if(console.log(i),void 0!==i){const e=o[a].author,t=n[e].avatarURL,r=o[a].optionOne.text,c=o[a].optionTwo.text,l=o[a].optionOne.votes.length+o[a].optionTwo.votes.length,d=o[a].optionOne.votes.length,h=o[a].optionTwo.votes.length;return{questionAuthor:e,question:i,avatar:t,optionOne:r,optionTwo:c,completed1:Math.round(d/l*100),completed2:Math.round(h/l*100),id:a,authedUser:s,totalVotes:l,optionOneVotes:d,optionTwoVotes:h}}return{question:i}}))(Q));class D extends n.Component{constructor(){super(...arguments),this.state={answer:null},this.handleSubmit=e=>{e.preventDefault();let t=null;const{dispatch:s,id:n}=this.props,o=document.getElementsByName("answer");console.log(o);for(let a=0;a<o.length;a++)o[a].checked&&(console.log(o[a]),t=o[a].value);null!==t?(s(y(t,n)),this.props.history.push("/questions/".concat(n))):alert("please choose answer")}}render(){console.log(this.state.answer);const{question:e}=this.props;if(void 0===e)return Object(q.jsx)("p",{children:"This Poll is not Existed"});{const{questionAuthor:e,avatar:t,optionOne:s,optionTwo:n,authedUser:o}=this.props;return Object(q.jsxs)("div",{className:"unanswered-poll-container",children:[Object(q.jsxs)("p",{className:"poll-heading",children:[Object(q.jsx)("span",{children:e})," asks :"]}),Object(q.jsxs)("div",{className:"poll-details",children:[Object(q.jsx)("img",{src:t,alt:"avatar of ".concat(e),className:"avatar-answered"}),Object(q.jsxs)("div",{className:"poll-data ",children:[Object(q.jsx)("h3",{children:"Would You Rather"}),Object(q.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,children:[Object(q.jsx)("input",{type:"radio",id:"radio",name:"answer",value:"optionOne"}),"\xa0 ",Object(q.jsx)("label",{htmlFor:"option-one",children:s}),Object(q.jsx)("br",{}),Object(q.jsx)("input",{type:"radio",id:"radio",name:"answer",value:"optionTwo"}),"\xa0 ",Object(q.jsx)("label",{htmlFor:"option-two",children:n}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{}),Object(q.jsx)("input",{type:"submit",value:"Submit"})]})]})]})]})}}}var P=Object(k.f)(Object(r.connect)((function(e,t){let{questions:s,users:n,authedUser:o}=e;const{id:a}=t,i=s[a];if(void 0!==i){const e=s[a].author;return{question:i,questionAuthor:e,avatar:n[e].avatarURL,optionOne:s[a].optionOne.text,optionTwo:s[a].optionTwo.text,authedUser:o,id:a}}return{question:i}}))(D));class I extends n.Component{constructor(){super(...arguments),this.state={optionOneText:"",optionTwoText:""},this.handleOptionOneText=e=>{e.preventDefault();const t=e.target.value;this.setState((()=>({optionOneText:t})))},this.handleOptionTwoText=e=>{e.preventDefault();const t=e.target.value;this.setState((()=>({optionTwoText:t})))},this.handleSubmit=e=>{e.preventDefault();const{dispatch:t}=this.props,{optionOneText:s,optionTwoText:n}=this.state;""!==s&&""!==n?(t(N(s,n)),this.props.history.push("/")):alert("Please Enter Your Options")}}render(){const{optionOneText:e,optionTwoText:t}=this.state;return Object(q.jsxs)("div",{className:"new-poll-container",children:[Object(q.jsx)("h2",{className:"new-poll-header",children:"Create New Question"}),Object(q.jsx)("p",{children:"Complete the question: "}),Object(q.jsx)("h3",{children:"Would You Rather..."}),Object(q.jsxs)("form",{className:"new-poll-form",onSubmit:this.handleSubmit,children:[Object(q.jsx)("input",{type:"text",placeholder:"Enter Option One Text Here",className:"option-input",value:e,onChange:this.handleOptionOneText}),Object(q.jsx)("p",{className:"center",children:"OR"}),Object(q.jsx)("input",{type:"text",placeholder:"Enter Option Two Text Here",className:"option-input",value:t,onChange:this.handleOptionTwoText}),Object(q.jsx)("br",{}),Object(q.jsx)("br",{}),Object(q.jsx)("input",{type:"submit",value:"Submit ",className:"center"})]})]})}}var V=Object(k.f)(Object(r.connect)((function(){return{}}))(I));class _ extends n.Component{render(){const{leaderBoard:e,sortedLeaderBoard:t,users:s}=this.props;return Object(q.jsx)("div",{className:"leader-board-container",children:t.map(((t,n)=>Object(q.jsx)("li",{children:Object(q.jsxs)("div",{className:"user-container",children:[Object(q.jsx)("h2",{className:"leader-board-header",children:n+1}),Object(q.jsxs)("div",{className:"user-details-container",children:[Object(q.jsx)("div",{children:Object(q.jsx)("img",{src:s[t].avatarURL,alt:"avatar of ".concat(t),className:"avatar"})}),Object(q.jsxs)("div",{className:"user-counts",children:[Object(q.jsx)("h2",{children:s[t].id}),Object(q.jsxs)("div",{className:"count",children:[Object(q.jsx)("p",{children:"Answered questions"}),Object(q.jsx)("p",{children:e[t].answers})]}),Object(q.jsx)("hr",{}),Object(q.jsxs)("div",{className:"count",children:[Object(q.jsx)("p",{children:"Created questions"}),Object(q.jsx)("p",{children:e[t].questions})]})]}),Object(q.jsxs)("div",{className:"center user-score",children:[Object(q.jsx)("h1",{children:"score"}),Object(q.jsx)("h4",{children:e[t].questions+e[t].answers})]})]})]})},t)))})}}var W=Object(r.connect)((function(e){let{users:t,authedUser:s}=e,n={};Object.keys(t).map((e=>{n={...n,[e]:{id:e,answers:Object.keys(t[e].answers).length,questions:t[e].questions.length}}}));const o=Object.keys(n).sort(((e,t)=>n[t].answers+n[t].questions-(n[e].answers+n[e].questions)));return console.log(n),console.log(o),{leaderBoard:n,sortedLeaderBoard:o,users:t}}))(_);class B extends n.Component{constructor(){super(...arguments),this.state={value:""},this.handleChange=e=>{this.setState((()=>({value:e.target.value})))},this.submitChange=()=>{if(""!==this.state.value){let e="/";this.props.dispatch(b(this.state.value)),this.props.location.state&&(e=this.props.location.state.from),console.log(e),this.props.history.push(e)}else alert("Please select User to login")}}render(){return console.log(this.props),null!==this.props.authedUser?Object(q.jsx)("div",{className:"center",children:"You are logged in"}):Object(q.jsxs)("div",{className:"unanswered-poll-container",children:[Object(q.jsxs)("div",{className:"login-heading",children:[Object(q.jsx)("h2",{style:{margin:"10px"},children:"Welcome To The Would You Rather App!"}),Object(q.jsx)("h4",{style:{margin:"5px"},children:"Please sign in to continue"})]}),Object(q.jsxs)("div",{className:"login-details",children:[Object(q.jsx)("p",{className:"sign-in",children:"Sign in"}),Object(q.jsxs)("select",{value:this.state.value,onChange:this.handleChange,placeholder:"select user",className:"login-select",children:[Object(q.jsx)("option",{value:"",defaultValue:!0,disabled:!0,hidden:!0,children:"Select User"}),Object(q.jsx)("option",{value:"sarahedo",children:"Sarah Edo"}),Object(q.jsx)("option",{value:"tylermcginnis",children:"Tyler Mcginnis"}),Object(q.jsx)("option",{value:"johndoe",children:"John Doe"})]}),Object(q.jsx)("button",{className:"login-button",type:"submit",onClick:this.submitChange,children:"Log In"})]})]})}}var Y=Object(k.f)(Object(r.connect)((function(e){let{users:t,authedUser:s}=e;return{users:t,authedUser:s}}))(B));class M extends n.Component{render(){const{answeredQuestionsIds:e,unansweredQuestionsIds:t,id:s}=this.props;return Object(q.jsx)("div",{children:e.includes(s)?Object(q.jsx)(z,{id:s}):Object(q.jsx)(P,{id:s})})}}var H=Object(k.f)(Object(r.connect)((function(e,t){let{authedUser:s,questions:n,users:o}=e;const{id:a}=t.match.params,i=o[s].answers;console.log(o[s].answers);const r=Object.keys(i);console.log(r);const c=[];return Object.keys(n).map((e=>{r.includes(e)||c.push(e)})),{answeredQuestionsIds:r,unansweredQuestionsIds:c,id:a}}))(M));class J extends o.a.Component{componentDidMount(){this.props.dispatch(f()),console.log("mounted")}render(){const{loading:e,authedUser:t}=this.props;return console.log(e),Object(q.jsxs)(T.a,{children:[Object(q.jsx)(g.a,{}),!0===e?null:Object(q.jsx)(n.Fragment,{children:Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)(L,{}),Object(q.jsx)(k.b,{path:"/",exact:!0,render:()=>null!==t?Object(q.jsx)(C,{}):Object(q.jsx)(k.a,{to:"/login"})}),Object(q.jsx)(k.b,{path:"/questions/:id",render:e=>{let{location:s}=e;return null!==t?Object(q.jsx)(H,{}):Object(q.jsx)(k.a,{to:{pathname:"/login",state:{from:s.pathname}}})}}),Object(q.jsx)(k.b,{path:"/add",render:e=>{let{location:s}=e;return null!==t?Object(q.jsx)(V,{}):Object(q.jsx)(k.a,{to:{pathname:"/login",state:{from:s.pathname}}})}}),Object(q.jsx)(k.b,{path:"/leaderboard",render:e=>{let{location:s}=e;return null!==t?Object(q.jsx)(W,{}):Object(q.jsx)(k.a,{to:{pathname:"/login",state:{from:s.pathname}}})}}),Object(q.jsx)(k.b,{path:"/login",render:e=>{let{location:t}=e;return Object(q.jsx)(Y,{})}})]})})]})}}var G=Object(r.connect)((function(e){let{loading:t,authedUser:s}=e;return{loading:t,authedUser:s}}))(J),F=s(12);var $=e=>t=>s=>{console.group(s.type),console.log("Action ",s);const n=t(s);return console.log("The New State: ",e.getState()),console.groupEnd(),n},K=s(21),X=Object(F.a)(K.a,$);var Z=Object(F.b)({users:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{...e,...t.users};case u:const{qid:s,answer:n,authedUser:o}=t.answerDetails;return{...e,[o]:{...e[o],answers:{...e[o].answers,[s]:n}}};case j:const{author:a}=t.formattedQuestion;return{...e,[a]:{...e[a],questions:e[a].questions.concat([t.formattedQuestion.id])}};default:return e}},questions:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return{...e,...t.questions};case l:const{qid:s,answer:n,authedUser:o}=t.answerDetails;return{...e,[s]:{...e[s],[n]:{...e[s][n],votes:e[s][n].votes.concat([o])}}};case d:const{formattedQuestion:a}=t;return{...e,[a.id]:a};default:return e}},authedUser:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===p?t.id:e},loading:function(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return(arguments.length>1?arguments[1]:void 0).type!==m&&e},loadingBar:w.loadingBarReducer});const ee=Object(F.c)(Z,X);i.a.render(Object(q.jsx)(r.Provider,{store:ee,children:Object(q.jsx)(G,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f7f5ef2d.chunk.js.map