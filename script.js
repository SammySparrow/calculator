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
      if (input.operator === undefined) {
        input.numOne.push(1);
      } else {
        input.numTwo.push(1);
      }
      break;
    case "2":
      if (input.operator === undefined) {
        input.numOne.push(2);
      } else {
        input.numTwo.push(2);
      }
      break;
    case "3":
      if (input.operator === undefined) {
        input.numOne.push(3);
      } else {
        input.numTwo.push(3);
      }
      break;
    case "4":
      if (input.operator === undefined) {
        input.numOne.push(4);
      } else {
        input.numTwo.push(4);
      }
      break;
    case "5":
      if (input.operator === undefined) {
        input.numOne.push(5);
      } else {
        input.numTwo.push(5);
      }
      break;
    case "6":
      if (input.operator === undefined) {
        input.numOne.push(6);
      } else {
        input.numTwo.push(6);
      }
      break;
    case "7":
      if (input.operator === undefined) {
        input.numOne.push(7);
      } else {
        input.numTwo.push(7);
      }
      break;
    case "8":
      if (input.operator === undefined) {
        input.numOne.push(8);
      } else {
        input.numTwo.push(8);
      }
      break;
    case "9":
      if (input.operator === undefined) {
        input.numOne.push(9);
      } else {
        input.numTwo.push(9);
      }
      break;
    case "0":
      if (input.operator === undefined) {
        input.numOne.push(0);
      } else {
        input.numTwo.push(0);
      }
      break;
    case "+":
      input.operator = "+";
      break;
    case "-":
      input.operator = "-";
      break;
    case "*":
      input.operator = "*";
      break;
    case "/":
      input.operator = "/";
      break;
    case "=":
      if (
        input.numOne == [] ||
        input.operator == undefined ||
        input.numTwo == []
      ) {
        break;
      } else {
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
            result = operations.divide(Number(tempOne), Number(tempTwo));
            break;
        }
        input.numOne = [];
        input.operator = undefined;
        input.numTwo = [];
      }
      break;
    case "clear":
      input.numOne = [];
      input.operator = undefined;
      input.numTwo = [];
      result = "";
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
