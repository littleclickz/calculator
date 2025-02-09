let num1 = 4; //change after testing

let operator = "*"; //change after testing

let num2 = 2; //change after testing

function add() {
  let additionTotal = num1 + num2;
  return additionTotal;
}

function subtract() {
  let subtractionTotal = num1 - num2;
  return subtractionTotal;
}

function multiply() {
  let multiplicationTotal = num1 * num2;
  return multiplicationTotal;
}

function divide() {
  let divisionTotal = num1 / num2;
  return divisionTotal;
}

//assuming everything above this line works

function operate() {
  if (operator === "+") {
    return add();
  } else if (operator === "-") {
    return subtract();
  } else if (operator === "*") {
    return multiply();
  } else if (operator === "/" && num2 != 0) {
    return divide();
  } else {
    return "ERROR";
  }
}

operate();

console.log(operate()); //should show 8