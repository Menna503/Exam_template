const user_email = document.getElementById('email');
const password = document.getElementById('password');
const errorMessages = document.querySelectorAll('.error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const signin_form = document.getElementById('signin');
const inputs = document.querySelectorAll('input');


function validateEmaill(input) {
    const localStorageEmail = window.localStorage.getItem("user_email");
    if (input.value === "") {
        showError(input, "*This field is required");
        return false;
    } else if (!emailRegex.test(input.value)) {
        showError(input, "Invalid email format");
        return false;
    }else if(input.value !== localStorageEmail){
        showError(input, "this email not exist");
        return false;
    }else {
            hideError(input);
            return true;
        }
}

function validate_Password(input) {
    const stored_password = window.localStorage.getItem("password");
    if (input.value === "") {
        showError(input, "*This field is required");
        return false;
    } else if (input.value.length < 8) {
        showError(input, "Password should be 8 or more characters");
        return false;
    }else if(input.value !== stored_password){
        showError(input, "this password is not correct");
        return false;
    } else {
        hideError(input);
        return true;
    }
}
function initHandlers() {
    user_email.addEventListener('input', () => validateEmaill(user_email));
    password.addEventListener('input', () => validate_Password(password));  
}
signin_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateEmaill(user_email)) isValid = false;
    if (!validate_Password(password)) isValid = false;

    if (isValid) {
            inputs.forEach(input => input.value = "");
            console.log("Form submitted successfully!");
            window.location.href = "ready_to_start.html";
 
    }
});
initHandlers();