const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');
const errorBlock = document.querySelector('#error');
const errorMessage = document.querySelector('#error-message');
const closeBtn = document.getElementById('close');
const admin = "http://localhost:3000/admin.html";
const user = "http://localhost:3000/user.html";

loginBtn.addEventListener('click', event => {
    if (emailInput.value === 'admin@email.com' && passwordInput.value === '1234567890') {
        window.location.href = admin;
    } else if (emailInput.value === 'user@email.com' && passwordInput.value === 'user12345') {
        window.location.href = user;
    } else {
        errorBlock.style.display = 'inline';
        errorBlock.style.opacity = '1';
        errorMessage.textContent = 'Enter the proper email address and password, please!';
        event.preventDefault();
    }
    emailInput.value = '';
    passwordInput.value = '';
});

closeBtn.addEventListener('click', () => {
    errorBlock.style.display = 'none';
    errorBlock.style.opacity = '0';
});
