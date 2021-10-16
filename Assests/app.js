console.log("Heee");

let outPutPannnel = document.getElementById("outputSlide");
let btnname1 = document.getElementById("btn-1");
let btnname2 = document.getElementById("btn-2");
// let btnname3 = document.getElementById("btn-3");
// let btnname4 = document.getElementById("btn-4");
// let btnname5 = document.getElementById("btn-5");
// let btnname6 = document.getElementById("btn-6");
// let btnname7 = document.getElementById("btn-7");
// let btnname8 = document.getElementById("btn-8");
// let btnname9 = document.getElementById("btn-9");
// let btnname10 = document.getElementById("btn-10");
let btnnameEqual = document.getElementById("btn-equal");
// let btnnamePeriod = document.getElementById("btn-period");
let btnnameAddition = document.getElementById("btn-addition");

btnname1.addEventListener("click", (e) => {
  outPutPannnel.value = btnname1.innerHTML;
  console.log(btnname1.innerHTML);
});
btnname2.addEventListener("click", (e) => {
  outPutPannnel.value = btnname2.innerHTML;
  console.log(btnname2.innerHTML);
});

btnnameEqual.addEventListener("click", (e) => {});
// btnname3.addEventListener("click", (e) => {
//   console.log(btnname3.innerHTML);
// });
// btnname4.addEventListener("click", (e) => {
//   console.log(btnname4.innerHTML);
// });
// btnname5.addEventListener("click", (e) => {
//   console.log(btnname5.innerHTML);
// });
// btnname6.addEventListener("click", (e) => {
//   console.log(btnname6.innerHTML);
// });
// btnname7.addEventListener("click", (e) => {
//   console.log(btnname7.innerHTML);
// });
// btnname8.addEventListener("click", (e) => {
//   console.log(btnname8.innerHTML);
// });
// btnname9.addEventListener("click", (e) => {
//   console.log(btnname9.innerHTML);
// });
// btnname10.addEventListener("click", (e) => {
//   console.log(btnname10.innerHTML);
// });

// btnnamePeriod.addEventListener("click", (e) => {
//   console.log(btnnamePeriod.innerHTML);
// });

// ----------- Code from script.js -----------
// let outPutPannnel = document.getElementById("outputSlide");
// let enterBtn = document.getElementById("btn-enter");
// // let btnname1 = document.getElementById("btn-1");
// // let btnname2 = document.getElementById("btn-2");
// // let btnnameEqual = document.getElementById("btn-equal");

// enterBtn.addEventListener("click", (e) => {
//   let firstNum = prompt("Your first number");
//   let secondNum = prompt("Your second number");

//   let FirstNumber = parseInt(firstNum);
//   let SecondNumber = parseInt(secondNum);

//   //   let firstNumber = firstNum.

//   function Addition(num1, num2) {
//     let result = num1 + num2;
//     outPutPannnel.value = result;
//     console.log(result);
//   }

//   Addition(FirstNumber, SecondNumber);
// });
