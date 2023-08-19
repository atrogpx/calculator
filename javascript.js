let dispVal = "";

function add(num1, num2) {
    dispVal = "";
    return populate(num1 + num2);
}

function subtract(num1, num2) {
    dispVal = "";
    return populate(num1 - num2);
}

function multiply(num1, num2) {
    dispVal = "";
    return populate(num1 * num2);
}

function divide(num1, num2) {
    dispVal = "";
    return populate(num1 / num2);
}

function operate() {
    let op = dispVal.split(" ");
    let num1 = op[0];
    let operator = op[1];
    let num2 = op[2];
    if (operator == '+') return add(num1, num2);
    if (operator == '-') return subtract(num1, num2);
    if (operator == '*') return multiply(num1, num2);
    if (operator == '/') return divide(num1, num2);
}

function populate(str) {
    let populator = document.querySelector(".populator");
    dispVal = dispVal.concat(str);
    populator.textContent = dispVal;
}