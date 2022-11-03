const buttons = document.querySelectorAll('.id-con');
const display = document.querySelector('#display-input');
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
let numMem = [];
let opMem = '';
let workingTotal = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        display.value += button.id + ' ';
        numMem.push(button.id);
        })
})

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(numMem.length === 1) {
            display.value += button.id + ' ';
            opMem = button.id
        }
        else if(numMem.length === 2) {
            workingTotal = operate(opMem, numMem[0], numMem[1]);
            display.value = workingTotal + " " + button.id + " ";
            opMem = button.id;
            numMem = [workingTotal];
        }
    })
})

clear.addEventListener('click' , () => {
    display.value = '';
    numMem = [];
    opMem = '';})




function add(a, b) {
    outA = parseInt(a);
    outB = parseInt(b);
    return outA + outB;
}

function subtract(a, b) {
    outA = parseInt(a);
    outB = parseInt(b);
    return outA - outB;
}

function multiply(a, b) {
    outA = parseInt(a);
    outB = parseInt(b);
    return outA * outB;
}


function divide(a, b) {
    outA = parseInt(a);
    outB = parseInt(b);
    return outA / outB;
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


