const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("operator-equal-btn");

let displayFirstNumber = document.getElementById("display-first-number");
let displaySecondNumber = document.getElementById("display-second-number");
let displayOperator = document.getElementById("display-operator");

let firstNumber = "";
let secondNumber = "";
let operator = "";

let shouldClearDisplay = false;

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    if (operator === "") {
      operator = e.target.innerText;
      displayOperator.innerText = operator;
    } else if (operator !== ""){
      operate(firstNumber, secondNumber, operator);
      operator = e.target.innerText;
      displayOperator.innerText = operator;
    }
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator === "") {
      if (firstNumber === "") {
        firstNumber = e.target.innerText;
        displayFirstNumber.innerText = firstNumber;
      } else if (firstNumber !== "" && shouldClearDisplay === false) {
        firstNumber = `${firstNumber}${e.target.innerText}`;
        displayFirstNumber.innerText += e.target.innerText;
      } else if (firstNumber !== "" && shouldClearDisplay === true){
        firstNumber = e.target.innerText;
        displayFirstNumber.innerText = firstNumber;
        shouldClearDisplay = false;
      }
    } else {
      if (secondNumber === "") {
        secondNumber = e.target.innerText;
        displaySecondNumber.innerText = secondNumber;
      } else {
        secondNumber = `${secondNumber}${e.target.innerText}`;
        displaySecondNumber.innerText += e.target.innerText;
      }
    }
  });
});

function operate(firstNumber, secondNumber, operator) {
  let result;
  firstNumber = parseInt(displayFirstNumber.innerText);
  secondNumber = parseInt(displaySecondNumber.innerText);
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;

      displayFirstNumber.innerText = result;
      displaySecondNumber.innerText = "";

      break;
    case "-":
      result = firstNumber - secondNumber;

      displayFirstNumber.innerText = result;
      displaySecondNumber.innerText = "";
      break;
    case "/":
      result = firstNumber / secondNumber;

      displayFirstNumber.innerText = result;
      displaySecondNumber.innerText = "";
      break;
    case "*":
      result = firstNumber * secondNumber;

      displayFirstNumber.innerText = result;
      displaySecondNumber.innerText = "";
      break;
  }
}

equalBtn.addEventListener("click", () => {
  operate(firstNumber, secondNumber, operator);
  displayOperator.innerText = "";
  operator = "";
  shouldClearDisplay = true;
});
