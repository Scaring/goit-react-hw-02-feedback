(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),c=a.n(l),o=(a(15),a(3)),i=a(4),s=a(5),u=a(9),d=a(8);var b=function(e){var t=e.title,a=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,t),a)};var m=function(e){var t=e.message;return r.a.createElement("span",null,t)},h=a(6),v=a.n(h);var f=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("button",{className:v.a.feedbackBtn,type:"button",name:e,key:t,onClick:a},(n=e).charAt(0).toUpperCase()+n.slice(1));var n})))},k=a(7),g=a.n(k);var p=function(e){var t=e.good,a=e.bad,n=e.neutral,l=e.total,c=e.positivePercentage;return r.a.createElement("ul",{className:g.a.list},r.a.createElement("li",null,"Good: ",t),r.a.createElement("li",null,"Neutral: ",n),r.a.createElement("li",null,"Bad: ",a),r.a.createElement("li",null,"Total: ",l),r.a.createElement("li",null,"Positive feedback: ",t?c:0,"%"))},E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleIncrement=function(t){var a=t.target.name;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e}return Object(s.a)(a,[{key:"countTotalFeedback",value:function(){return this.state.good+this.state.neutral+this.state.bad}},{key:"countPositiveFeedbackPercentage",value:function(){return Math.floor(this.state.good/(this.state.good+this.state.neutral+this.state.bad)*100)}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(b,{title:"Please leave your feedback!"},r.a.createElement(f,{options:Object.keys(this.state),onLeaveFeedback:this.handleIncrement})),r.a.createElement(b,{title:"Statistics"},this.state.good||this.state.neutral||this.state.bad?r.a.createElement(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):r.a.createElement(m,{message:"No feedback given!"})))}}]),a}(n.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))},6:function(e,t,a){e.exports={feedbackBtn:"FeedbackOptions_feedbackBtn__2VCY_"}},7:function(e,t,a){e.exports={list:"Statistics_list__1kl7-"}}},[[10,1,2]]]);
//# sourceMappingURL=main.95758aad.chunk.js.map