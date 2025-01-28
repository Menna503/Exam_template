const user_email = document.getElementById('email');
const first_name = document.getElementById("firstname");
const last_name = document.getElementById("lastname");
const password = document.getElementById('password');
const confirm_pass = document.getElementById('confirm_pass');
const signup_form = document.getElementById('signup');
const inputs = document.querySelectorAll('input');
const errorMessages = document.querySelectorAll('.error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const nameRegex = /^[a-zA-Z]+$/;


function validateName(input) {
    if (input.value === "") {
        showError(input, "*This field is required");
        return false;
    } else if (isFinite(input.value)) {
        showError(input, "*Numbers are not allowed");
        return false;
    }else if (!nameRegex.test(input.value)) {
        showError(input, "*Numbers are not allowed");
        return false; }
    else {
        hideError(input);
        return true;
    }
}


function validateEmail(input) {
    const localStorageEmail = window.localStorage.getItem("user_email");
    if (input.value === "") {
        showError(input, "*This field is required");
        return false;
    } else if (!emailRegex.test(input.value)) {
        showError(input, "Invalid email format");
        return false;
    } else if (input.value === localStorageEmail) {
        showError(input, "This email already exists");
        return false;
    } else {
        hideError(input);
        return true;
    }
}
function validatePassword(input) {
    if (input.value === "") {
        showError(input, "*This field is required");
        return false;
    } else if (input.value.length < 8) {
        showError(input, "Password should be 8 or more characters");
        return false;
    } else {
        hideError(input);
        return true;
    }
}
function validateConfirmPassword(input, password) {
    if (input.value === "") {
        showError(input, "*This field is required");
        return false;
    } else if (input.value !== password.value) {
        showError(input, "Passwords do not match");
        return false;
    } else {
        hideError(input);
        return true;
    }
}

function initHandlers() {
    first_name.addEventListener('input', () => validateName(first_name));
    last_name.addEventListener('input', () => validateName(last_name));
    user_email.addEventListener('input', () => validateEmail(user_email));
    password.addEventListener('input', () => validatePassword(password));
    confirm_pass.addEventListener('input', () => validateConfirmPassword(confirm_pass, password));
}

signup_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateName(first_name)) isValid = false;
    if (!validateName(last_name)) isValid = false;
    if (!validateEmail(user_email)) isValid = false;
    if (!validatePassword(password)) isValid = false;
    if (!validateConfirmPassword(confirm_pass, password)) isValid = false;

    if (isValid) {
        window.localStorage.setItem("name", `${first_name.value} ${last_name.value}`);
        window.localStorage.setItem("user_email", user_email.value);
        window.localStorage.setItem("password", confirm_pass.value);

        inputs.forEach(input => input.value = "");
        console.log("Form submitted successfully!");
        window.location.href = "ready_to_start.html";
    }
});

initHandlers();
