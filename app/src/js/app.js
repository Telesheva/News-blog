const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const link = document.querySelector('#form-link');
const loginBtn = document.querySelector('#login-btn');
const errorBlock = document.querySelector('#error');
const errorMessage = document.querySelector('#error-message');
const closeBtn = document.getElementById('close');

loginBtn.addEventListener('click', event => {
    if (emailInput.value === 'admin@email.com' && passwordInput.value.length > 8) {
        link.setAttribute('href', "admin.html");
    } else if (emailInput.value === 'user@email.com' && passwordInput.value.length > 8) {
        link.setAttribute('href', "user.html");
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
