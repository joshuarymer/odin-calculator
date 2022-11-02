const buttons = document.querySelectorAll('.id-con');
const display = document.querySelector('#display-input');
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');

buttons.forEach((button) => {
button.addEventListener('click', () => {
    display.value += button.id;
    });
});





function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}

function operate(op, a, b) {
    switch(op) {
        case add:
            return add(a, b);
            break;
        case subtract:
            return subtract(a, b);
            break;
        case multiply:
            return multiply(a, b);
            break;
        case divide:
            return divide(a, b);
            break;
    }
}

