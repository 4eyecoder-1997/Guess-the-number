const result = document.querySelector('.result'); 
const btn = document.querySelector('#btn'); 

const randomNum = Math.round((Math.random() * 100) + 1);

btn.addEventListener('click', checkAns);

function checkAns() {
    const input = document.querySelector('#number');
    const inputVal = input.value; 
    const answer = randomNum;
    
    if (inputVal === '') {
        alert('input field must have a number');
    } else if (inputVal > 100) {
        alert('number must be between 0 & 100');
    }else if (inputVal == answer) {
        result.innerHTML = `${inputVal} is the correct answer`;
    } else if (inputVal > answer) {
        result.innerHTML = `It's greater than answer`;
    } else {
        result.innerHTML = `It's lower than answer`;
    }

    input.value = '';
}


