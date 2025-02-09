let string1 = "12"; //change to empty string after testing

let operator;

let string2 = "100"; //change to empty string after testing

function convert() {
  let num1 = Number(string1);
  let num2 = Number(string2);
  return num1;
}

//assuming everything below this line works

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

console.log(convert()); //should show 12

//to do: test (check console log)