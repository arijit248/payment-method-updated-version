(this["webpackJsonpfullthrottle-task"]=this["webpackJsonpfullthrottle-task"]||[]).push([[0],{32:function(t,e,n){t.exports=n(77)},37:function(t,e,n){},38:function(t,e,n){},74:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(22),m=n.n(l),s=(n(37),n(38),n(23)),r=n(24),u=n(30),c=n(25),i=n(31),h=n(26),p=n.n(h),d=n(82),g=n(81),A=n(79),E=n(80),v=n(29),f=n(10),y=n.n(f),b=(n(73),n(74),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(c.a)(e)).call.apply(t,[this].concat(o)))).state={Amount:500,numMonths:6,Interest:"",prevAmount:"",prevnumMonths:"",monAmount:{},priAmount:{}},n.callApi=function(){n.state.Amount===n.state.prevAmount&&n.state.numMonths===n.state.prevnumMonths||p.a.get("https://ftl-frontend-test.herokuapp.com/interest?amount="+n.state.Amount+"&numMonths="+n.state.numMonths).then((function(t){n.setState({Interest:t.data,monAmount:t.data.monthlyPayment,priAmount:t.data.principal,prevAmount:n.state.Amount,prevnumMonths:n.state.numMonths})})).catch((function(t){console.log(t)}))},n}return Object(i.a)(e,t),Object(r.a)(e,[{key:"componentWillMount",value:function(){localStorage.getItem("Amount")&&this.setState({Amount:JSON.parse(localStorage.getItem("Amount"))}),localStorage.getItem("numMonths")&&this.setState({numMonths:JSON.parse(localStorage.getItem("numMonths"))})}},{key:"componentDidMount",value:function(){this.callApi()}},{key:"componentWillUpdate",value:function(t,e){localStorage.setItem("Amount",JSON.stringify(e.Amount)),localStorage.setItem("numMonths",JSON.stringify(e.numMonths))}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement(d.a,{bg:"dark",className:"cardDesign"},o.a.createElement(d.a.Body,{style:{width:"100%"}},o.a.createElement(d.a.Title,{style:{fontSize:"23px",color:"#b3b8bb"}},"Payment Calculator"),o.a.createElement(g.a,{className:"formContent"},o.a.createElement("div",{className:"inputContent"},o.a.createElement(g.a.Label,{style:{marginBottom:"1.5rem"}},"Loan Amount"),o.a.createElement(y.a,{maxValue:5e3,minValue:500,value:this.state.Amount,onChange:function(e){return t.setState({Amount:e})},onChangeComplete:this.callApi})),o.a.createElement("div",{className:"inputContent"},o.a.createElement(g.a.Label,{style:{marginBottom:"1.5rem"}},"Loan Duration"),o.a.createElement(y.a,{maxValue:24,minValue:6,value:this.state.numMonths,onChange:function(e){return t.setState({numMonths:e})},onChangeComplete:this.callApi})),o.a.createElement(A.a,null,o.a.createElement(E.a,null,o.a.createElement(v.a,{lg:7,md:7,sm:12},o.a.createElement("div",{className:"sliderText"},"Amount Value: ",o.a.createElement("b",null,this.state.priAmount.amount," ",this.state.priAmount.currency," "))),o.a.createElement(v.a,{lg:5,md:5,sm:12},o.a.createElement("div",{className:"sliderText"},"Months: ",o.a.createElement("b",null,this.state.Interest.numPayments)))),o.a.createElement(E.a,null,o.a.createElement(v.a,{lg:7,md:7,sm:12},o.a.createElement("div",{className:"sliderText"},"Payment Amount: ",o.a.createElement("b",null,this.state.monAmount.amount," ",this.state.monAmount.currency," "))),o.a.createElement(v.a,{lg:5,md:5,sm:12},o.a.createElement("div",{className:"sliderText"},"Interest Value: ",o.a.createElement("b",null,this.state.Interest.interestRate)))))))))}}]),e}(a.Component)),M=function(){return o.a.createElement("div",{className:"App Bg"},o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.7b79a22c.chunk.js.map