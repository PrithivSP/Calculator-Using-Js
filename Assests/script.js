console.log("App started!");

let outPutPannnel = document.getElementById("outputSlide");
let enterBtn = document.getElementById("btn-enter");
// let btnname1 = document.getElementById("btn-1");
// let btnname2 = document.getElementById("btn-2");
// let btnnameEqual = document.getElementById("btn-equal");

enterBtn.addEventListener("click", (e) => {
  let firstNum = prompt("Your first number");
  let secondNum = prompt("Your second number");

  let FirstNumber = parseInt(firstNum);
  let SecondNumber = parseInt(secondNum);

  //   let firstNumber = firstNum.

  function Addition(num1, num2) {
    let result = num1 + num2;
    outPutPannnel.value = result;
    console.log(result);
  }

  Addition(FirstNumber, SecondNumber);
});
