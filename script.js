const buttons = document.querySelectorAll("button");
const interface = document.querySelector("#buttons");
const display = document.querySelector("#screen");
const dOne = document.createElement("div");
const dTwo = document.createElement("div");
const dOp = document.createElement("div");
const outcome = document.createElement("div");

display.appendChild(dOne);
display.appendChild(dOp);
display.appendChild(dTwo);
display.appendChild(outcome);

let numOne = "";
let operator;
let numTwo = "";
let result;

function floatRounding() {
  if (result % 1 !== 0) {
    let p = Math.pow(10, 6);
    let n = result * p * (1 + Number.EPSILON);
    result = Math.round(n) / p;
  }
}

const operations = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function numberInput(n) {
  if (operator === undefined) {
    numOne = numOne + n;
  } else {
    numTwo = numTwo + n;
  }
}

function decimals() {
  if (operator === undefined) {
    if (!numOne.includes(".")) {
      numOne = numOne + ".";
    } else {
      return;
    }
  } else {
    if (!numTwo.includes(".")) {
      numTwo = numTwo + ".";
    } else {
      return;
    }
  }
}

function updateDiv() {
  dOne.textContent = numOne;
  dOp.textContent = operator;
  dTwo.textContent = numTwo;
  outcome.textContent = result;
}

function backspace() {
  if (numTwo !== "") {
    numTwo.slice(0, -1);
  } else if (numTwo === undefined && operator !== undefined) {
    operator = undefined;
  } else {
    numOne.slice(0, -1);
  }
}

function clear() {
  numOne = "";
  operator = undefined;
  numTwo = "";
  result = undefined;
}

function calculateExpression() {
  if (numOne === "" || operator === undefined || numTwo === "") {
    throw new Error("Please enter an expression");
  } else {
    checks.operatorCheck();
    numOne = "";
    operator = undefined;
    numTwo = "";
  }
}

function calculatorLogic(input) {
  if (/[0-9]/.test(input)) {
    numberInput(input);
  } else if (input === "+" || input === "-" || input === "*" || input === "/") {
    checks.stateCheck(input);
  } else if (input === "=") {
    calculateExpression();
  } else if (input === ".") {
    decimals();
  } else if (input === "Backspace") {
    backspace();
  } else if (input === "clear" || input === "Escape") {
    clear();
  }
}

function clickOrKey() {
  ["keydown", "click"].forEach((type) => {
    addEventListener(type, (e) => {
      let clickInitial = e.target;
      let click = clickInitial.id;
      let key = e.key;

      [click, key].forEach((input) => calculatorLogic(input));
      updateDiv();
    });
  });
}

const checks = {
  operatorCheck: function () {
    switch (operator) {
      case "+":
        result = operations.add(Number(numOne), Number(numTwo));
        break;
      case "-":
        result = operations.subtract(Number(numOne), Number(numTwo));
        break;
      case "*":
        result = operations.multiply(Number(numOne), Number(numTwo));
        break;
      case "/":
        if (numOne === "0" || numTwo === "0") {
          throw Error("Please don't attempt to create black holes");
        } else {
          result = operations.divide(Number(numOne), Number(numTwo));
        }
        break;
    }
    floatRounding();
  },
  stateCheck: function (op) {
    if (result !== undefined && numOne === "") {
      numOne = result;
      result = undefined;
      operator = op;
    } else if (
      result === undefined &&
      numOne !== "" &&
      operator !== undefined &&
      numTwo !== ""
    ) {
      checks.operatorCheck();
      operator = op;
      numTwo = "";
      numOne = result;
      result = undefined;
    } else {
      operator = op;
    }
  },
};

clickOrKey();
