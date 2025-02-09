let string1 = "";

let operator;

let string2 = "";

const displayField = document.getElementById("#display-field");

function convert() {
  let num1 = Number(string1);
  let num2 = Number(string2);
}

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

const additionButton = document.querySelectory("#addition-button");
additionButton.addEventListener("click", () => {
  let operator = "+";
  displayField.textContent = operator;
});

const subtractionButton = document.querySelectory("#subtraction-button");
subtractionButton.addEventListener("click", () => {
  let operator = "-";
  displayField.textContent = operator;
});

const multiplicationButton = document.querySelectory("#multiplication-button");
multiplicationButton.addEventListener("click", () => {
  let operator = "*";
  displayField.textContent = operator;
});

const divisionButton = document.querySelectory("#division-button");
divisionButton.addEventListener("click", () => {
  let operator = "/";
  displayField.textContent = operator;
});

const digit1 = document.querySelector("#digit1");
digit1.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "1";
    displayField.textContent = string1;
  } else {
    string2 += "1";
    displayField.textContent = string2;
  }
});

const digit2 = document.querySelector("#digit2");
digit2.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "2";
    displayField.textContent = string1;
  } else {
    string2 += "2";
    displayField.textContent = string2;
  }
});

const digit3 = document.querySelector("#digit3");
digit3.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "3";
    displayField.textContent = string1;
  } else {
    string2 += "3";
    displayField.textContent = string2;
  }
});

const digit4 = document.querySelector("#digit4");
digit4.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "4";
    displayField.textContent = string1;
  } else {
    string2 += "4";
    displayField.textContent = string2;
  }
});

const digit5 = document.querySelector("#digit5");
digit5.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "5";
    displayField.textContent = string1;
  } else {
    string2 += "5";
    displayField.textContent = string2;
  }
});

const digit6 = document.querySelector("#digit6");
digit6.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "6";
    displayField.textContent = string1;
  } else {
    string2 += "6";
    displayField.textContent = string2;
  }
});

const digit7 = document.querySelector("#digit7");
digit7.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "7";
    displayField.textContent = string1;
  } else {
    string2 += "7";
    displayField.textContent = string2;
  }
});

const digit8 = document.querySelector("#digit8");
digit8.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "8";
    displayField.textContent = string1;
  } else {
    string2 += "8";
    displayField.textContent = string2;
  }
});

const digit9 = document.querySelector("#digit9");
digit9.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "9";
    displayField.textContent = string1;
  } else {
    string2 += "9";
    displayField.textContent = string2;
  }
});

const digit0 = document.querySelector("#digit0");
digit0.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "0";
    displayField.textContent = string1;
  } else {
    string2 += "0";
    displayField.textContent = string2;
  }
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
  if (string1 != "" && string2 != "" && operator != null) { //experiment with undefined if null doesn't work
    operate();
    displayField.textContent = result;
  } else {
    pass;
  }
});

const clearButton = document.querySelector("#refresh");
clearButton.addEventListener("click", () => {
  let string1 = "";
  let string2 = "";
  let operator; //if this doesn't work, try let operator = ""; here and change if operator === null to if operator === "" above
  displayField.textContent = "";
});

//to do: test (try pressing = before entering all the numbers or an operator [should do nothing])