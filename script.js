const buttons = document.querySelectorAll("button");
const interface = document.querySelector("#buttons");
const display = document.querySelector("#screen");
const dOne = document.createElement("div");
const dTwo = document.createElement("div");
const op = document.createElement("div");
const outcome = document.createElement("div");
let result;

const input = {
  numOne: [],
  operator: undefined,
  numTwo: [],
};

interface.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "1":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(1);
      } else {
        input.numTwo.push(1);
      }
      break;
    case "2":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(2);
      } else {
        input.numTwo.push(2);
      }
      break;
    case "3":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(3);
      } else {
        input.numTwo.push(3);
      }
      break;
    case "4":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(4);
      } else {
        input.numTwo.push(4);
      }
      break;
    case "5":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(5);
      } else {
        input.numTwo.push(5);
      }
      break;
    case "6":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(6);
      } else {
        input.numTwo.push(6);
      }
      break;
    case "7":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(7);
      } else {
        input.numTwo.push(7);
      }
      break;
    case "8":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(8);
      } else {
        input.numTwo.push(8);
      }
      break;
    case "9":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(9);
      } else {
        input.numTwo.push(9);
      }
      break;
    case "0":
      result = undefined;
      if (input.operator === undefined) {
        input.numOne.push(0);
      } else {
        input.numTwo.push(0);
      }
      break;
    case ".":
      result = undefined;
      if (input.operator === undefined) {
        if (!input.numOne.includes(".")) {
          input.numOne.push(".");
        } else {
          return;
        }
      } else {
        if (!input.numTwo.includes(".")) {
          input.numTwo.push(".");
        } else {
          return;
        }
      }
      break;
    case "+":
      checks.stateCheck("+");
      break;
    case "-":
      checks.stateCheck("-");
      break;
    case "*":
      checks.stateCheck("*");
      break;
    case "/":
      checks.stateCheck("/");
      break;
    case "=":
      if (
        input.numOne[0] == undefined ||
        input.operator == undefined ||
        input.numTwo[0] == undefined
      ) {
        throw new Error("Please enter an expression");
      } else {
        checks.operatorCheck();
        input.numOne = [];
        input.operator = undefined;
        input.numTwo = [];
      }
      break;
    case "clear":
      input.numOne = [];
      input.operator = undefined;
      input.numTwo = [];
      result = undefined;
      break;
  }
  console.log(input);

  dOne.textContent = input.numOne.join("");
  op.textContent = input.operator;
  dTwo.textContent = input.numTwo.join("");
  outcome.textContent = result;

  display.appendChild(dOne);
  display.appendChild(op);
  display.appendChild(dTwo);
  display.appendChild(outcome);
});

const checks = {
  operatorCheck: function () {
    let tempOne = input.numOne.join("");
    let tempTwo = input.numTwo.join("");
    switch (input.operator) {
      case "+":
        result = operations.add(Number(tempOne), Number(tempTwo));
        break;
      case "-":
        result = operations.subtract(Number(tempOne), Number(tempTwo));
        break;
      case "*":
        result = operations.multiply(Number(tempOne), Number(tempTwo));
        break;
      case "/":
        if (tempOne === "0" || tempTwo === "0") {
          throw Error("Please don't attempt to create black holes");
        } else {
          result = operations.divide(Number(tempOne), Number(tempTwo));
          result = checks.floatRounding(result);
        }
        break;
    }
  },
  stateCheck: function (op) {
    if (result !== undefined && input.numOne[0] === undefined) {
      input.numOne.push(result);
      result = undefined;
      input.operator = op;
    } else if (
      result === undefined &&
      input.numOne[0] !== undefined &&
      input.operator !== undefined &&
      input.numTwo[0] !== undefined
    ) {
      checks.operatorCheck();
      input.operator = op;
      input.numOne = [];
      input.numTwo = [];
      input.numOne.push(result);
      result = undefined;
    } else {
      input.operator = op;
    }
  },
  floatRounding: function (r) {
    if (r % 1 == 0) {
      return r;
    } else {
      let p = Math.pow(10, 6);
      let n = r * p * (1 + Number.EPSILON);
      return Math.round(n) / p;
    }
  },
};

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

console.log(operations.add(2, 3));
