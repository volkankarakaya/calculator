const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalBtn= document.getElementById('operator-equal-btn');
let display = document.getElementById('display');

let firstNumber = "";
let secondNumber = "";
let operator = "";

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    operator = e.target.innerText;
    console.log(operator);
  });
});


numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator === "") {
      if (firstNumber === "") {
        firstNumber = e.target.innerText;
      } else {
        firstNumber = `${firstNumber}${e.target.innerText}`;
      }
      console.log('firstnumber', firstNumber)
      console.log('operator', operator)
    } else {
      if(secondNumber===""){
        secondNumber = e.target.innerText;
      }else{
        secondNumber = `${secondNumber}${e.target.innerText}`
      }
      console.log('secondnumber', secondNumber)
      console.log('operator', operator)
    }
  });
});

function operate(firstNumber,secondNumber,operator){
  let result
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);
  switch (operator){
    case '+':
      result = firstNumber + secondNumber;
      console.log('result', result);

      firstNumber = parseInt(result);
      secondNumber= ''
      
      break;
    case '-':
      result = firstNumber - secondNumber;
      console.log(result);
      break;
    case '/':
      result = firstNumber / secondNumber;
      console.log(result);
      break;
    case '*':
      result = firstNumber * secondNumber;
      console.log(result);
      break;
  }
  
  

}

equalBtn.addEventListener('click', ()=> operate( firstNumber,secondNumber,operator))

