const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');
const errorBlock = document.querySelector('#error');
const errorMessage = document.querySelector('#error-message');
const closeBtn = document.getElementById('close');
const adminEmail = 'admin@email.com';
const userEmail = 'user@email.com';
const admin = "http://localhost:3000/admin.html";
const user = "http://localhost:3000/user.html";

//Event Handlers
loginBtn.addEventListener('click', loginBtnHandler);
closeBtn.addEventListener('click', () => {
    errorBlock.style.display = 'none';
    errorBlock.style.opacity = '0';
});

function loginBtnHandler(event) {
    if (emailInput.value === adminEmail && passwordInput.value === '1234567890') {
        window.location.href = admin;
    } else if (emailInput.value === userEmail && passwordInput.value === 'user12345') {
        window.location.href = user;
    } else {
        displayErrorBlock();
        event.preventDefault();
    }
    emailInput.value = '';
    passwordInput.value = '';
}

function displayErrorBlock() {
    errorBlock.style.display = 'inline';
    errorBlock.style.opacity = '1';
    errorMessage.textContent = 'Enter the proper email address and password, please! Password should not be less than 8 characters!';
}


