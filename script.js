var string1 = "";

var operator;

var string2 = "";

var displayField = document.querySelector("#output-field");

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

const additionButton = document.querySelector("#add-btn");
additionButton.addEventListener("click", () => {
  var operator = "+";
  displayField.textContent = operator;
  console.log(operator);
});

const subtractionButton = document.querySelector("#sub-btn");
subtractionButton.addEventListener("click", () => {
  var operator = "-";
  displayField.textContent = operator;
});

const multiplicationButton = document.querySelector("#mult-btn");
multiplicationButton.addEventListener("click", () => {
  var operator = "*";
  displayField.textContent = operator;
});

const divisionButton = document.querySelector("#div-btn");
divisionButton.addEventListener("click", () => {
  var operator = "/";
  displayField.textContent = operator;
});

const digit1 = document.querySelector("#digit1");
digit1.addEventListener("click", () => {
  if (operator === undefined) { //works
    string1 += "1";
    displayField.textContent = string1;
  } else if ((operator === "+") || (operator === "-") || (operator === "*") || (operator === "/")) { //broken
    displayField.textContent = "";
    string2 += "1";
    displayField.textContent = string2;
  }
});

const digit2 = document.querySelector("#digit2");
digit2.addEventListener("click", () => {
  if (operator === undefined) { //experiment with "undefined" if "null" doesn't work
    string1 += "2";
    displayField.textContent = string1;
  } else {
    string2 += "2";
    displayField.textContent = string2;
  }
});

const digit3 = document.querySelector("#digit3");
digit3.addEventListener("click", () => {
  if (operator === undefined) { //experiment with "undefined" if "null" doesn't work
    string1 += "3";
    displayField.textContent = string1;
  } else {
    string2 += "3";
    displayField.textContent = string2;
  }
});

const digit4 = document.querySelector("#digit4");
digit4.addEventListener("click", () => {
  if (operator === undefined) { //experiment with "undefined" if "null" doesn't work
    string1 += "4";
    displayField.textContent = string1;
  } else {
    string2 += "4";
    displayField.textContent = string2;
  }
});

const digit5 = document.querySelector("#digit5");
digit5.addEventListener("click", () => {
  if (operator === undefined) { //experiment with "undefined" if "null" doesn't work
    string1 += "5";
    displayField.textContent = string1;
  } else {
    string2 += "5";
    displayField.textContent = string2;
  }
});

const digit6 = document.querySelector("#digit6");
digit6.addEventListener("click", () => {
  if (operator === undefined) { //experiment with "undefined" if "null" doesn't work
    string1 += "6";
    displayField.textContent = string1;
  } else {
    string2 += "6";
    displayField.textContent = string2;
  }
});

const digit7 = document.querySelector("#digit7");
digit7.addEventListener("click", () => {
  if (operator === undefined) { //experiment with "undefined" if "null" doesn't work
    string1 += "7";
    displayField.textContent = string1;
  } else {
    string2 += "7";
    displayField.textContent = string2;
  }
});

const digit8 = document.querySelector("#digit8");
digit8.addEventListener("click", () => {
  if (operator === undefined) { //experiment with "undefined" if "null" doesn't work
    string1 += "8";
    displayField.textContent = string1;
  } else {
    string2 += "8";
    displayField.textContent = string2;
  }
});

const digit9 = document.querySelector("#digit9");
digit9.addEventListener("click", () => {
  if (operator === undefined) { //experiment with "undefined" if "null" doesn't work
    string1 += "9";
    displayField.textContent = string1;
  } else {
    string2 += "9";
    displayField.textContent = string2;
  }
});

const digit0 = document.querySelector("#digit0");
digit0.addEventListener("click", () => {
  if (operator === undefined) { //experiment with "undefined" if "null" doesn't work
    string1 += "0";
    displayField.textContent = string1;
  } else {
    string2 += "0";
    displayField.textContent = string2;
  }
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", () => {
  if (string1 != "" && string2 != "" && operator != undefined) { //experiment with undefined if null doesn't work
    operate();
    displayField.textContent = result;
  } else {
  }
});

const clearButton = document.querySelector("#clear-btn");
clearButton.addEventListener("click", () => {
  var string1 = "";
  var string2 = "";
  var operator = undefined;
  displayField.textContent = "";
});

//to do: test (try pressing = before entering all the numbers or an operator [should do nothing])