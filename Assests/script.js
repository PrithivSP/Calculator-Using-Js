console.log("App started!");
alert(
  "Remainder: \n Project is under development, complete functional project will be released soon ..."
);

let outPutPannnel = document.getElementById("outputPannel");
const btnname1 = document.getElementById("btn-1");
const btnname2 = document.getElementById("btn-2");
const btnname3 = document.getElementById("btn-3");
const btnname4 = document.getElementById("btn-4");
const btnname5 = document.getElementById("btn-5");
const btnname6 = document.getElementById("btn-6");
const btnname7 = document.getElementById("btn-7");
const btnname8 = document.getElementById("btn-8");
const btnname9 = document.getElementById("btn-9");
const btnname0 = document.getElementById("btn-0");
const btnnameEqual = document.getElementById("btn-equal");
const btnnamePeriod = document.getElementById("btn-period");
const btnnameAddition = document.getElementById("btn-addition");
const btnnameSubraction = document.getElementById("btn-subraction");
const btnnameMultiplication = document.getElementById("btn-multiplication");
const btnnameDivision = document.getElementById("btn-division");
let Result;

btnname1.addEventListener("click", () => {
  console.log("btnName1", btnname1.innerText);
  Result = outPutPannnel.value + "1";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnname2.addEventListener("click", () => {
  console.log("btnname2");
  Result = outPutPannnel.value + "2";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnname3.addEventListener("click", () => {
  console.log("btnname3");
  Result = outPutPannnel.value + "3";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnname4.addEventListener("click", () => {
  console.log("btnname4");
  Result = outPutPannnel.value + "4";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnname5.addEventListener("click", () => {
  console.log("btnname5");
  Result = outPutPannnel.value + "5";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnname6.addEventListener("click", () => {
  console.log("btnname6");
  Result = outPutPannnel.value + "6";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnname7.addEventListener("click", () => {
  console.log("btnname7");
  Result = outPutPannnel.value + "7";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnname8.addEventListener("click", () => {
  console.log("btnname8");
  Result = outPutPannnel.value + "8";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnname9.addEventListener("click", () => {
  console.log("btnname9");
  Result = outPutPannnel.value + "9";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnname0.addEventListener("click", () => {
  console.log("btnname0");
  Result = outPutPannnel.value + "0";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnnameEqual.addEventListener("click", () => {
  console.log("btnnameEqual");
  // let BeforeSign = parseInt(outPutPannnel.value);
  // console.log(BeforeSign);
  // let AfterSign = BeforeSign;
  // console.log(AfterSign);
});
btnnamePeriod.addEventListener("click", () => {
  console.log("btnnamePeriod");
  Result = outPutPannnel.value + ".";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnnameAddition.addEventListener("click", () => {
  console.log("btnnameAddition");
  Result = outPutPannnel.value + "+";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnnameSubraction.addEventListener("click", () => {
  console.log("btnnameSubraction");
  Result = outPutPannnel.value + "-";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnnameMultiplication.addEventListener("click", () => {
  console.log("btnnameMultiplication");
  Result = outPutPannnel.value + "*";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
btnnameDivision.addEventListener("click", () => {
  console.log("btnnameDivision");
  Result = outPutPannnel.value + "%";
  outPutPannnel.value = Result;
  console.log(outPutPannnel.value);
});
