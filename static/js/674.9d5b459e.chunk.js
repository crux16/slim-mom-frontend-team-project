"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{9951:function(e,r,a){a.d(r,{Z:function(){return m}});a(2791);var o=a(6060),n=a(8096),t=a(7133),l=a(2889),i=a(5523),d=a(4479),c=a(4294),s={formFields:"CalculatorForm_formFields__bone1",input:"CalculatorForm_input__B44kP",bloodType:"CalculatorForm_bloodType__8YbUF",radioGroup:"CalculatorForm_radioGroup__1Qo00",button:"CalculatorForm_button__jx5Hv",bgGrayVector:"CalculatorForm_bgGrayVector__YxgTi",bgBanana:"CalculatorForm_bgBanana__2Xnlm",bgStrawBerry:"CalculatorForm_bgStrawBerry__n4xQ5",bgLeaves:"CalculatorForm_bgLeaves__IhjD8",container:"CalculatorForm_container__RXWkw"},u=a(184),m=function(e){var r=e.displayModal;return(0,u.jsxs)("form",{className:s.form,onSubmit:function(e){e.preventDefault();var a=e.target,o=new FormData(a),n=Object.fromEntries(o.entries());r&&r(),console.log(n)},children:[(0,u.jsxs)("div",{className:s.formFields,children:[(0,u.jsx)(o.Z,{id:"height",name:"height",label:"Height",variant:"standard",placeholder:"Height",className:s.input,type:"number",color:"warning",required:!0}),(0,u.jsx)(o.Z,{id:"age",name:"age",label:"Age",variant:"standard",placeholder:"Age",className:s.input,type:"number",color:"warning",required:!0}),(0,u.jsx)(o.Z,{id:"currentWeight",name:"currentWeight",label:"Current Weight",variant:"standard",placeholder:"Current Weight",className:s.input,type:"number",color:"warning",required:!0}),(0,u.jsx)(o.Z,{id:"desiredWeight",name:"desiredWeight",label:"Desired Weight",variant:"standard",placeholder:"Desired Weight",className:s.input,type:"number",color:"warning",required:!0}),(0,u.jsxs)(n.Z,{className:s.bloodType,children:[(0,u.jsx)(t.Z,{required:!0,id:"blood-type",children:"Blood Type"}),(0,u.jsxs)(l.Z,{className:s.radioGroup,row:!0,"aria-label":"blood-type",name:"bloodType",defaultValue:"1",children:[(0,u.jsx)(i.Z,{value:"1",control:(0,u.jsx)(d.Z,{color:"warning"}),label:"1",labelPlacement:"end"}),(0,u.jsx)(i.Z,{value:"2",control:(0,u.jsx)(d.Z,{color:"warning"}),label:"2",labelPlacement:"end"}),(0,u.jsx)(i.Z,{value:"3",control:(0,u.jsx)(d.Z,{color:"warning"}),label:"3",labelPlacement:"end"}),(0,u.jsx)(i.Z,{value:"4",control:(0,u.jsx)(d.Z,{color:"warning"}),label:"4",labelPlacement:"end"})]})]})]}),(0,u.jsx)("div",{className:s.button,children:(0,u.jsx)(c.Z,{variant:"contained",color:"warning",type:"submit",size:"large",sx:{borderRadius:"30px",textTransform:"capitalize",padding:"10px 30px",letterSpacing:"1.5px",fontWeight:"bold",fontSize:"18px"},children:"Start Losing Weight"})})]})}},9321:function(e,r,a){a.d(r,{Z:function(){return c}});var o={modalBackground:"Modal_modalBackground__+ThO3",modalContainer:"Modal_modalContainer__QjqZb",modalCloseBtn:"Modal_modalCloseBtn__+it9y",modalHeader:"Modal_modalHeader__ipZSv",modalTotalCalories:"Modal_modalTotalCalories__VJsa9",modalCaloriesLabel:"Modal_modalCaloriesLabel__e3oab",modalProhibitedFoodContainer:"Modal_modalProhibitedFoodContainer__EsCGK",modalProhibitedFoodTitle:"Modal_modalProhibitedFoodTitle__Z70hI",modalProhibitedFoodList:"Modal_modalProhibitedFoodList__jY1+-",modalStartBtn:"Modal_modalStartBtn__FFfAN"},n=a(2791),t=a(3855),l=a(7689),i=a(2605),d=a(184);var c=function(e){var r=e.closeModal,a=(0,t.v9)(i.b5),c=(0,t.I0)(),s=(0,l.s0)();return(0,n.useEffect)((function(){var e=function(e){e.code,r()};window.addEventListener("keydown",e);var a=document.querySelector("body");return a.style.overflow="hidden",function(){window.removeEventListener("keydown",e),a.style.overflow="auto"}}),[r]),(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:o.modalBackground,onClick:r}),(0,d.jsxs)("div",{className:o.modalContainer,children:[(0,d.jsx)("h1",{className:o.modalHeader,children:"Your recommended daily calorie intake is"}),(0,d.jsxs)("p",{className:o.modalTotalCalories,children:[a," ",(0,d.jsx)("span",{className:o.modalCaloriesLabel,children:"KCal"})]}),(0,d.jsxs)("div",{className:o.modalProhibitedFoodContainer,children:[(0,d.jsx)("h2",{className:o.modalProhibitedFoodTitle,children:"Foods you should not eat"}),(0,d.jsx)("ol",{className:o.modalProhibitedFoodList,children:(0,d.jsx)("li",{className:o.modalProhibitedFoodItem,children:"List Number 1"})})]}),(0,d.jsx)("button",{onClick:function(){s("/RegisterPage"),c((0,i.b5)(null))},className:o.modalStartBtn,children:"Start Losing Weight"})]})]})}},8674:function(e,r,a){a.r(r),a.d(r,{default:function(){return s}});var o=a(9439),n=a(3050),t={container:"HomePage_container__uNu-e",formFields:"HomePage_formFields__Q8ZJc",input:"HomePage_input__9ckwH",bloodType:"HomePage_bloodType__qsG3X",radioGroup:"HomePage_radioGroup__RyZ38",button:"HomePage_button__C9l6N"},l=a(9321),i=a(2791),d=a(9951),c=a(184),s=function(){var e=(0,i.useState)(!1),r=(0,o.Z)(e,2),a=r[0],s=r[1];return(0,c.jsxs)(n.B6,{children:[(0,c.jsx)(n.ql,{children:(0,c.jsx)("title",{children:"Slim Mom"})}),(0,c.jsxs)("div",{className:t.container,children:[(0,c.jsx)("h1",{className:t.title,children:"Calculate your daily calorie intake right now"}),(0,c.jsx)(d.Z,{displayModal:function(){s(!a)}}),a&&(0,c.jsx)(l.Z,{closeModal:function(){s(!a)}})]})]})}},2605:function(e,r,a){a.d(r,{D3:function(){return u},KD:function(){return m},Oz:function(){return s},Xe:function(){return n},Xw:function(){return o},b5:function(){return d},iM:function(){return b},kU:function(){return i},nj:function(){return l},oT:function(){return _},u$:function(){return t},v6:function(){return c}});var o=function(e){return e.user.diary.diaryList},n=function(e){return e.user.diary.allFoodsSearchList},t=function(e){return e.user.diary.diaryBackBtn},l=function(e){return e.user.diary.calendarDate},i=function(e){return e.user.diary.diaryDailyRate},d=function(e){return e.user.calculator.calculatorDailyRate},c=function(e){return e.user.diary.diaryIsLoading},s=function(e){return e.user.calculator.calculatorIsLoading},u=function(e){return e.user.diary.diaryError},m=function(e){return e.user.calculator.calculatorError},_=function(e){return e.user.calculator},b=function(e){return e.user.badFoodSearcList}}}]);
//# sourceMappingURL=674.9d5b459e.chunk.js.map