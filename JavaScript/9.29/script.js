// let number = number => {

// } // ES6
const input = document.querySelector('#input');
const nums = document.querySelectorAll('.num')

function number(number) {
    input.value += number;
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
        nums[i].onclick = function(){
            calculate()
        }
    }
}