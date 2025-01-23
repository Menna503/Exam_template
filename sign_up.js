const user_email = document.getElementById('email');
const first_name = document.getElementById("firstname");
const las_name = document.getElementById("lastname");
const password = document.getElementById('password');
const confirm_pass = document.getElementById('confirm_pass');
const signup_form = document.getElementById('signup');
const inputs = document.querySelectorAll('input');
const error = document.querySelectorAll('.error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function initHandlers() {
    first_name.addEventListener('input', () => {
        if (first_name.value === "") {
            first_name.nextElementSibling.textContent = "*This field is required";
            first_name.nextElementSibling.classList.remove('hidden');
        } else if (isFinite(first_name.value)) {
            first_name.nextElementSibling.textContent = "*Numbers are not allowed";
            first_name.nextElementSibling.classList.remove('hidden');
        } else {
            first_name.nextElementSibling.classList.add('hidden');
        }
    });

    las_name.addEventListener('input', () => {
        if (las_name.value === "") {
            las_name.nextElementSibling.textContent = "*This field is required";
            las_name.nextElementSibling.classList.remove('hidden');
        } else if (isFinite(las_name.value)) {
            las_name.nextElementSibling.textContent = "*Numbers are not allowed";
            las_name.nextElementSibling.classList.remove('hidden');
        } else {
            las_name.nextElementSibling.classList.add('hidden');
        }
    });

    user_email.addEventListener('input', () => {
        const localStorageEmail = window.localStorage.getItem("user_email");
        if (user_email.value === "") {
            user_email.nextElementSibling.textContent = "*This field is required";
            user_email.nextElementSibling.classList.remove('hidden');
        } else if (!emailRegex.test(user_email.value)) {
            user_email.nextElementSibling.textContent = "Invalid email format";
            user_email.nextElementSibling.classList.remove('hidden');
        } else if (user_email.value === localStorageEmail) {
            user_email.nextElementSibling.textContent = "This email already exists";
            user_email.nextElementSibling.classList.remove('hidden');
        } else {
            user_email.nextElementSibling.classList.add('hidden');
        }
    });

    password.addEventListener('input', () => {
        if (password.value === "") {
            password.nextElementSibling.textContent = "*This field is required";
            password.nextElementSibling.classList.remove('hidden');
        } else if (password.value.length < 8) {
            password.nextElementSibling.textContent = "Password should be 8 or more characters";
            password.nextElementSibling.classList.remove('hidden');
        } else {
            password.nextElementSibling.classList.add('hidden');
        }
    });

    confirm_pass.addEventListener('input', () => {
        if (confirm_pass.value === "") {
            confirm_pass.nextElementSibling.textContent = "*This field is required";
            confirm_pass.nextElementSibling.classList.remove('hidden');
        } else if (confirm_pass.value !== password.value) {
            confirm_pass.nextElementSibling.textContent = "Passwords do not match";
            confirm_pass.nextElementSibling.classList.remove('hidden');
        } else {
            confirm_pass.nextElementSibling.classList.add('hidden');
        }
    });
}

// Form submission handler
signup_form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Check for empty fields
    inputs.forEach((input, index) => {
        if (input.value === "") {
            error[index].textContent = "*This field is required";
            error[index].classList.remove('hidden');
            isValid = false;
        } 
    });

    if (isValid) {
        // Save to localStorage if form is valid
        window.localStorage.setItem("name", `${first_name.value} ${las_name.value}`);
        window.localStorage.setItem("user_email", user_email.value);
        window.localStorage.setItem("password", confirm_pass.value);
        inputs.forEach((input) => {
            input.value="";
        });

        console.log("Form submitted successfully!");
    }
});


initHandlers();



