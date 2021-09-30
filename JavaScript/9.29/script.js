// let number = number => {

// } // ES6
const input = document.querySelector('#input');
const nums = document.querySelectorAll('.num');
const sanah = document.querySelector('.sana');

let isPressed = false;
let memorize = 0;

function number(number) {
    if (input.value[input.value.length - 1] === number && (number === '+' || number === '-' || number === '*' || number === '/' || number === '.')) {
        input.value = input.value.slice(0, -1);
        input.value += number
    } else if(
        (number === '+' && (
        input.value[input.value.length - 1] === '-' ||
        input.value[input.value.length - 1] === '*' ||
        input.value[input.value.length - 1] === '/' )) ||
        (number === '-' && (
        input.value[input.value.length - 1] === '+' ||
        input.value[input.value.length - 1] === '*' ||
        input.value[input.value.length - 1] === '/' )) ||
        (number === '*' && (
        input.value[input.value.length - 1] === '-' ||
        input.value[input.value.length - 1] === '+' ||
        input.value[input.value.length - 1] === '/' )) ||
        (number === '/' && (
        input.value[input.value.length - 1] === '-' ||
        input.value[input.value.length - 1] === '*' ||
        input.value[input.value.length - 1] === '+' ))
    ){
        input.value = input.value.slice(0, -1);
        input.value += number
    } else if(number === '<='){
        input.value = input.value.slice(0, -1);
    } else if(number === 'AC'){
        input.value = ''
    } else {
        if(!isPressed){
            input.value += number;
        } else {
            if(number === '+' || number === '-' || number === '*' || number === '/'){
                isPressed = false;
                input.value += number;
            } else {
                input.value = '';
                isPressed = false;
                input.value += number;
            }
        }
    }
}

function calculate() {
    input.value = eval(input.value)
}


// innerText
// innerHTML

// nums[3].innerHTML = "<h1>123</h1>"

for (let i = 0; i < nums.length; i++) {
    if (nums[i].innerText !== '=') {
        nums[i].onclick = function () {
            number(nums[i].innerText)
        }
    } else {
        nums[i].onclick = function () {
            calculate();
            isPressed = true;
        }
    }
}

sanah.onclick = function(){
    if(isPressed){
        memorize = input.value;
        input.value = '';
        isPressed = false
    } else {
        if(memorize !== 0){
            input.value += memorize;
            memorize = 0
        } else {
            alert('too hadgalaagui bna')
        }
    }
}