const buttons = document.querySelectorAll('.id-con');
const display = document.querySelector('#display-input');
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
let numMem = [];


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.value += button.id;
        })
})

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(numMem.length === 0) {
            let num = removeOp(display.value);
            numMem.push(num);
            display.value = button.id + ' ';
        }
        else if(numMem.length > 0) {
            let num = removeOp(display.value);
            numMem.push(num);
            let workingTotal = operate(button.id, numMem[numMem.length-2], numMem[numMem.length-1]);
            display.value = workingTotal + " " + button.id + " ";
        }
    })
})

clear.addEventListener('click' , () => {
    display.value = '';
    numMem = [];
    opMem = '';})




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
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
}

function removeOp(string) {
    let array = string.split(' ');
    for(i = 0; i < array.length; i++) {
        if(array[i] === '+' || array[i] === '-' || array[i] === '*'|| array[i] === '/') {
            array.splice(i, 1);
        };
    }
    const output = array.join('');
    return output;
}


