const buttons = document.querySelectorAll('.id-con');
const display = document.querySelector('#display-input');
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
let numMem = [];
let numTracker = '';
let opMem = '';
let workingTotal = 0;
let clickedEquals = false;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(clickedEquals === false) {
            display.value += button.id;
            numTracker += button.id;
        }
    })
})

operators.forEach((button) => {
    button.addEventListener('click', () => {
        if(clickedEquals === false && display.value != '') {
            if(numMem.length === 0) {
                numMem.push(numTracker);
                display.value += ' ' + button.id + ' ';
                numTracker = '';
                opMem = button.id;
            }
            else if(numMem.length === 1) {
                numMem.push(numTracker);
                workingTotal = operate(opMem, numMem[0], numMem[1]);
                display.value = workingTotal + " " + button.id + " ";
                numTracker = '';
                opMem = button.id;
                numMem = [workingTotal];
            }
        }
    })
})

equals.addEventListener('click', () => {
    if(numMem.length === 1) {
        numMem.push(numTracker);
        workingTotal = operate(opMem, numMem[0], numMem[1]);
        display.value = workingTotal;
        numTracker = '';
        clickedEquals = true;
    }
})

clear.addEventListener('click' , () => {
    display.value = '';
    numMem = [];
    opMem = '';
    numTracker = '';
    clickedEquals = false;
})




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


