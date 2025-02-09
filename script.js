let string1 = "";

let operator;

let string2 = "";

const displayField = document.getElementById("#output-field");

function convert() {
  let num1 = Number(string1);
  let num2 = Number(string2);
}

function add() {
  let result = num1 + num2;
  return result;
}

function subtract() {
  let result = num1 - num2;
  return result;
}

function multiply() {
  let result = num1 * num2;
  return result;
}

function divide() {
  let result = num1 / num2;
  return result.toFixed(6);
}

function operate() {
  if (operator === "+") {
    return add();
  } else if (operator === "-") {
    return subtract();
  } else if (operator === "*") {
    return multiply();
  } else if ((operator === "/") && (num2 != 0)) {
    return divide();
  } else if ((operator === "/") && (num2 === 0)) {
    return "NICE TRY";
  } else {
    return "ERROR";
  }
}

const additionButton = document.getElementById("#add-btn");
additionButton.addEventListener("click", () => {
  let operator = "+";
  const displayField = document.getElementById("#output-field");
  displayField.textContent = operator;
});

const subtractionButton = document.getElementById("#sub-btn");
subtractionButton.addEventListener("click", () => {
  let operator = "-";
  displayField.textContent = operator;
});

const multiplicationButton = document.getElementById("#mult-btn");
multiplicationButton.addEventListener("click", () => {
  let operator = "*";
  displayField.textContent = operator;
});

const divisionButton = document.getElementById("#div-btn");
divisionButton.addEventListener("click", () => {
  let operator = "/";
  displayField.textContent = operator;
});

const digit1 = document.getElementById("#digit1");
digit1.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "1";
    displayField.textContent = string1;
  } else {
    string2 += "1";
    displayField.textContent = string2;
  }
});

const digit2 = document.getElementById("#digit2");
digit2.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "2";
    displayField.textContent = string1;
  } else {
    string2 += "2";
    displayField.textContent = string2;
  }
});

const digit3 = document.getElementById("#digit3");
digit3.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "3";
    displayField.textContent = string1;
  } else {
    string2 += "3";
    displayField.textContent = string2;
  }
});

const digit4 = document.getElementById("#digit4");
digit4.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "4";
    displayField.textContent = string1;
  } else {
    string2 += "4";
    displayField.textContent = string2;
  }
});

const digit5 = document.getElementById("#digit5");
digit5.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "5";
    displayField.textContent = string1;
  } else {
    string2 += "5";
    displayField.textContent = string2;
  }
});

const digit6 = document.getElementById("#digit6");
digit6.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "6";
    displayField.textContent = string1;
  } else {
    string2 += "6";
    displayField.textContent = string2;
  }
});

const digit7 = document.getElementById("#digit7");
digit7.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "7";
    displayField.textContent = string1;
  } else {
    string2 += "7";
    displayField.textContent = string2;
  }
});

const digit8 = document.getElementById("#digit8");
digit8.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "8";
    displayField.textContent = string1;
  } else {
    string2 += "8";
    displayField.textContent = string2;
  }
});

const digit9 = document.getElementById("#digit9");
digit9.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "9";
    displayField.textContent = string1;
  } else {
    string2 += "9";
    displayField.textContent = string2;
  }
});

const digit0 = document.getElementById("#digit0");
digit0.addEventListener("click", () => {
  if (operator === null) { //experiment with "undefined" if "null" doesn't work
    string1 += "0";
    displayField.textContent = string1;
  } else {
    string2 += "0";
    displayField.textContent = string2;
  }
});

const equalsButton = document.getElementById("#equals");
equalsButton.addEventListener("click", () => {
  if (string1 != "" && string2 != "" && operator != null) { //experiment with undefined if null doesn't work
    operate();
    displayField.textContent = result;
  } else {
    pass;
  }
});

const clearButton = document.getElementById("#clear-btn");
clearButton.addEventListener("click", () => {
  let string1 = "";
  let string2 = "";
  let operator; //if this doesn't work, try let operator = ""; here and change if operator === null to if operator === "" above
  displayField.textContent = "";
});

//to do: test (try pressing = before entering all the numbers or an operator [should do nothing])