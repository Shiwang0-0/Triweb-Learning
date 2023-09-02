const Choice = "multiply";
const num1 = 10;
const num2 = 2;
let result;

function add(num1, num2) {
  result = num1 + num2;
  return result;
}

function subtract(num1, num2) {
  result = num1 - num2;
  return result;
}

function multiply(num1, num2) {
  result = num1 * num2;
  return result;
}

function divide(num1, num2) {
  result = num1 / num2;
  return result;
}

if (Choice === "add" || Choice === "subtract" || Choice === "multiply" || Choice === "division") 
  console.log(`First number: ${num1}`);
  console.log(`Second number: ${num2}`);
  console.log(`User wants to ${Choice} two number`);

if (Choice === "add") {
  console.log(`Sum = ${add(num1, num2)}`);
} else if (Choice === "subtract") {
  console.log(`Subtraction = ${subtract(num1, num2)}`);
} else if (Choice === "multiply") {
  console.log(`Product = ${multiply(num1, num2)}`);
} else if (Choice === "division") {
  console.log(`Division = ${divide(num1, num2)}`);
} else console.log("Please Select a valid choice");