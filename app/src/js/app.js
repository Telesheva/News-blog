const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const loginBtn = document.querySelector('#login-btn');
const closeBtn = document.getElementById('close');

const errorBlock = document.querySelector('#error');
const errorMessage = document.querySelector('#error-message');

const adminEmail = 'admin@email.com';
const userEmail = 'user@email.com';
const adminPassword = '1234567890';
const userPassword = 'user12345';
const charNumForPassword = 8;
const admin = "http://localhost:3000/admin.html";
const user = "http://localhost:3000/user.html";
const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//Event Handlers
loginBtn.addEventListener('click', loginBtnHandler);
closeBtn.addEventListener('click', () => {
    errorBlock.style.display = 'none';
    errorBlock.style.opacity = '0';
});

function loginBtnHandler(event) {
    const email = emailInput.value;
    const password = passwordInput.value;
    if (regexEmail.test(email) && password.length > charNumForPassword) {
        if (email === adminEmail && password === adminPassword) {
            window.location.href = admin;
        } else if (email === userEmail && password === userPassword) {
            window.location.href = user;
        } else {
            displayErrorBlock(event);
        }
    } else {
        displayErrorBlock(event);
    }
    emailInput.value = '';
    passwordInput.value = '';
}

function displayErrorBlock(event) {
    event.preventDefault();
    errorBlock.style.display = 'inline';
    errorBlock.style.opacity = '1';
    errorMessage.textContent = 'Enter the proper email address and password, please! Password should not be less than 8 characters!';
}


