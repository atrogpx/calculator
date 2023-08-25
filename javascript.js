const buttons = document.querySelectorAll("button");
let dispVal = "0";
let num1 = null;
let num2 = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

function populate() {
    const populator = document.querySelector(".populator");
    populator.innerText = dispVal;
}

populate();

function clickButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            if (buttons[i].classList.contains("digit")) {
                inputDigit(buttons[i].value);
                populate();
            }
            else if (buttons[i].classList.contains("operator")) {
                inputOperator(buttons[i].value);
            }
            else if (buttons[i].classList.contains("equals")) {
                equals();
            }
            else if (buttons[i].classList.contains("clear")) {
                clear();
            }
        })
    }
}

clickButton();

function inputDigit(digit) {
    if (!firstOperator) {
        if (dispVal === 0 || dispVal === "0") dispVal = digit;
        else if (dispVal === num1) dispVal = digit;
        else dispVal += digit;
    }
    else {
        if (dispVal === num1) dispVal = digit;
        else dispVal += digit;
    }
}

function inputOperator(operator) {
    if (firstOperator && !secondOperator) {
        secondOperator = operator;
        num2 = dispVal;
        result = operate(Number(num1), Number(num2), firstOperator);
        if (!Number.isInteger(result) && result !== "error") {
            dispVal = result.toFixed(3);
        }
        else dispVal = result;
        populate();
        num1 = dispVal;
        result = null;
    }
    else if (firstOperator && secondOperator) {
        num2 = dispVal;
        result = operate(Number(num1), Number(num2), secondOperator);
        secondOperator = operator;
        if (!Number.isInteger(result) && result !== "error") {
            dispVal = result.toFixed(3);
        }
        else dispVal = result;
        populate();
        num1 = dispVal;
        result = null;
    }
    else {
        firstOperator = operator;
        num1 = dispVal;
    }
}

function operate(x, y, op) {
    if (op === "+") return x + y;
    else if (op === "-") return x - y;
    else if (op === "*") return x * y;
    else if (op === "/") {
        if (y === 0) return "error";
        else return x / y;
    };
}

function equals() {
    if (!firstOperator) dispVal = dispVal;
    else if (!secondOperator) {
        num2 = dispVal;
        result = operate(Number(num1), Number(num2), firstOperator);
        if (!Number.isInteger(result) && result !== "error") {
            dispVal = result.toFixed(3);
        }
        else dispVal = result;
        populate();
        num1 = dispVal;
        result = null;
        num2 = null;
        firstOperator = null;
        secondOperator = null;
    }
    else {
        num2 = dispVal;
        result = operate(Number(num1), Number(num2), secondOperator);
        if (!Number.isInteger(result) && result !== "error") {
            dispVal = result.toFixed(3);
        }
        else dispVal = result;
        populate();
        num1 = dispVal;
        result = null;
        num2 = null;
        firstOperator = null;
        secondOperator = null;
    }
}

function clear() {
    dispVal = "0";
    num1 = null;
    num2 = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    populate();
}