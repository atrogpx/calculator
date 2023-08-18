let operand1;
let operator;
let operand2;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator == '+') return add(num1, num2);
    if (operator == '-') return subtract(num1, num2);
    if (operator == '*') return multiply(num1, num2);
    if (operator == '/') return divide(num1, num2);
}

digits = document.querySelectorAll(".digit");

for (i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", (e) => console.log(e.textContent))
}

function populate() {}