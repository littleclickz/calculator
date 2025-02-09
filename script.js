let string1 = "";

let operator;

let string2 = "";

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

console.log(operator); //should show "null"; otherwise change the "operator != null" thing below accordingly

const additionButton = document.querySelectory("#addition-button");
additionButton.addEventListener("click", () => {
  let operator = "+";
});

const subtractionButton = document.querySelectory("#subtraction-button");
subtractionButton.addEventListener("click", () => {
  let operator = "-";
});

const multiplicationButton = document.querySelectory("#multiplication-button");
multiplicationButton.addEventListener("click", () => {
  let operator = "*";
});

const divisionButton = document.querySelectory("#division-button");
divisionButton.addEventListener("click", () => {
  let operator = "/";
});

//what to put inside event listener for digit buttons:
  //if (operator === null) { //experiment with "undefined" if "null" doesn't work
    //
  //}

//to do: test (check console log, then click an operator button and check log again)