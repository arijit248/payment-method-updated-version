(this["webpackJsonpfullthrottle-task"]=this["webpackJsonpfullthrottle-task"]||[]).push([[0],{29:function(t,e,n){t.exports=n(57)},34:function(t,e,n){},35:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(19),m=n.n(l),r=(n(34),n(35),n(20)),s=n(21),u=n(27),i=n(22),c=n(28),h=n(23),p=n.n(h),d=n(62),f=n(61),v=n(59),E=n(60),A=n(26),g=n(7),y=n.n(g),b=function(t){function e(){var t,n;Object(r.a)(this,e);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(t=Object(i.a)(e)).call.apply(t,[this].concat(o)))).state={Amount:500,numMonths:6,Interest:"",prevAmount:"",prevnumMonths:"",monAmount:{},priAmount:{}},n.callApi=function(){n.state.Amount===n.state.prevAmount&&n.state.numMonths===n.state.prevnumMonths||p.a.get("https://ftl-frontend-test.herokuapp.com/interest?amount="+n.state.Amount+"&numMonths="+n.state.numMonths).then((function(t){n.setState({Interest:t.data,monAmount:t.data.monthlyPayment,priAmount:t.data.principal,prevAmount:n.state.Amount,prevnumMonths:n.state.numMonths})})).catch((function(t){console.log(t)}))},n}return Object(c.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.callApi()}},{key:"componentDidUpdate",value:function(){this.callApi()}},{key:"handleAmountChange",value:function(t){this.setState({Amount:t.target.value})}},{key:"handleDurationChange",value:function(t){this.setState({numMonths:t.target.value})}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement(d.a,{bg:"dark",className:y.a.cardDesign},o.a.createElement(d.a.Body,{style:{width:"100%"}},o.a.createElement(d.a.Title,{style:{fontSize:"23px",color:"#b3b8bb"}},"Payment Calculator"),o.a.createElement(f.a,{className:y.a.formContent},o.a.createElement("div",{className:y.a.inputContent},o.a.createElement("label",null,"Loan Amount"),o.a.createElement("input",{type:"range",name:"amount",className:y.a.formInput,value:this.state.Amount,min:"500",max:"5000",onChange:function(e){return t.handleAmountChange(e)}})),o.a.createElement("div",{className:y.a.inputContent},o.a.createElement("label",null,"Loan Duration"),o.a.createElement("input",{type:"range",name:"duration",className:y.a.formInput,value:this.state.numMonths,min:"6",max:"24",onChange:function(e){return t.handleDurationChange(e)}})),o.a.createElement(v.a,null,o.a.createElement(E.a,null,o.a.createElement(A.a,{lg:7,md:7,sm:12},o.a.createElement("div",{className:y.a.sliderText},"Amount Value: ",o.a.createElement("b",null,this.state.priAmount.amount," ",this.state.priAmount.currency," "))),o.a.createElement(A.a,{lg:5,md:5,sm:12},o.a.createElement("div",{className:y.a.sliderText},"Months: ",o.a.createElement("b",null,this.state.Interest.numPayments)))),o.a.createElement(E.a,null,o.a.createElement(A.a,{lg:7,md:7,sm:12},o.a.createElement("div",{className:y.a.sliderText},"Payment Amount: ",o.a.createElement("b",null,this.state.monAmount.amount," ",this.state.monAmount.currency," "))),o.a.createElement(A.a,{lg:5,md:5,sm:12},o.a.createElement("div",{className:y.a.sliderText},"Interest Value: ",o.a.createElement("b",null,this.state.Interest.interestRate)))))))))}}]),e}(a.Component),C=function(){return o.a.createElement("div",{className:"App Bg"},o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},7:function(t,e,n){t.exports={cardDesign:"main_cardDesign__1lz2Z",formContent:"main_formContent__15jeC",formInput:"main_formInput__12T0d",sliderText:"main_sliderText__HI35V",inputContent:"main_inputContent__lri2s"}}},[[29,1,2]]]);
//# sourceMappingURL=main.e959c2c5.chunk.js.map