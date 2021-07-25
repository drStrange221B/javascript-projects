const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkPasswordsMatch(input1, input2) {
    if (input1.value === (input2.value)) {
        showSuccess(input);
    } else {
        showError(input1, `Passwords does match !`);
        showError(input2, `Passwords does match !`);
    }
}

function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value.trim())) {
        showSuccess(email);
    } else {
        showError(email, "Email is not valied");
    }
    return re.test(String(email).toLowerCase());
}

// Check required fields
function checkReuired(inputArr) {
    inputArr.forEach(function (input) {

        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        }
        else {
            showSuccess(input);
        }
    });
}

//Get fieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
     
    console.log('hello');
    const inputValue = input.value;
    
    console.log(input.value.length);

    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be more than ${min} characters in length`);
    } else if (input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters in length`);
    } else if (input.value =="undefined"){
        showError(input, `The field ${inputValue.id} is empty`)
    } else{
        showSuccess(input);
    }
}

//Event Listeners
form.addEventListener('submit', function (e){
    e.preventDefault();

    checkReuired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
});



