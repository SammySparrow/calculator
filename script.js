const buttons = document.querySelectorAll("button");
const interface = document.querySelector("#buttons");
const display = document.querySelector("#screen");
const dOne = document.createElement("div");
const dTwo = document.createElement("div");
const op = document.createElement("div");

const input = {
  numOne: [],
  operator: [],
  numTwo: [],
};

interface.addEventListener("click", (e) => {
  let target = e.target;

  switch (target.id) {
    case "1":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(1);
      } else {
        input.numOne.push(1);
      }
      break;
    case "2":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(2);
      } else {
        input.numOne.push(2);
      }
      break;
    case "3":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(3);
      } else {
        input.numOne.push(3);
      }
      break;
    case "4":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(4);
      } else {
        input.numOne.push(4);
      }
      break;
    case "5":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(5);
      } else {
        input.numOne.push(5);
      }
      break;
    case "6":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(6);
      } else {
        input.numOne.push(6);
      }
      break;
    case "7":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(7);
      } else {
        input.numOne.push(7);
      }
      break;
    case "8":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(8);
      } else {
        input.numOne.push(8);
      }
      break;
    case "9":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(9);
      } else {
        input.numOne.push(9);
      }
      break;
    case "0":
      if (
        input.operator.some((o) => o == "+" || o == "-" || o == "*" || o == "/")
      ) {
        input.numTwo.push(0);
      } else {
        input.numOne.push(0);
      }
      break;
    case "+":
      input.operator.push("+");
      break;
    case "-":
      input.operator.push("-");
      break;
    case "*":
      input.operator.push("*");
      break;
    case "/":
      input.operator.push("/");
      break;
    case "=":
      input.push("=");
      break;
    case "clear":
      input.numOne = [];
      input.operator = [];
      input.numTwo = [];
      break;
  }
  console.log(input);

  dOne.textContent = input.numOne.join("");
  op.textContent = input.operator.join("");
  dTwo.textContent = input.numTwo.join("");

  display.appendChild(dOne);
  display.appendChild(op);
  display.appendChild(dTwo);
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
