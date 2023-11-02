let n = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "dot",
];

const ac = document.querySelector("#ac");
const del = document.querySelector("#del");
const opt = document.querySelector("#opt");
const add = document.querySelector("#add");
const sub = document.querySelector("#subt");
const multi = document.querySelector("#multi");
const divi = document.querySelector("#divi");
const equal = document.querySelector("#equal");
let firstNum;
let secondNum;
let result;
let oper;
ac.addEventListener("click", function () {
  opt.value = null;
  firstNum = null;
  secondNum = null;
  result = null;
  oper = null;
});
function addition() {}

add.addEventListener("click", function () {
  firstNum = parseFloat(opt.value);
  oper = "+";
  opt.value = null;
});
del.addEventListener("click", function () {
    opt.value = opt.value.slice(0,opt.value.length - 1);
  });

sub.addEventListener("click", function () {
  firstNum = parseFloat(opt.value);
  oper = "-";
  opt.value = null;
});
multi.addEventListener("click", function () {
  firstNum = parseFloat(opt.value);
  oper = "*";
  opt.value = null;
});
divi.addEventListener("click", function () {
  firstNum = parseFloat(opt.value);
  oper = "/";
  opt.value = null;
});
equal.addEventListener("click", function () {
  secondNum = parseFloat(opt.value);
  switch (oper) {
    case "+":
      result = firstNum + secondNum;
      break;
    case "-":
      result = firstNum - secondNum;
      break;
    case "/":
      result = firstNum / secondNum;
      break;
    case "*":
      result = firstNum * secondNum;
      break;

    default:
      break;
  }
  opt.value = result;
});

for (let i = 0; i <= n.length; i++) {
  const num = document.querySelector(`#${n[i]}`);
  num.addEventListener("click", function () {
    opt.value += num.textContent;
  });
}
