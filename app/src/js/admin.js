const addBtn = document.querySelector('#create-btn');
const createForm = document.querySelector('#create-form');
const coverBlock = document.querySelector('#cover');
const editBtn = document.querySelector('#edit');

addBtn.addEventListener('click', () => {
    createForm.style.display = 'flex';
    coverBlock.style.display = 'block';
});

editBtn.addEventListener('click', () => {
    createForm.style.display = 'flex';
    coverBlock.style.display = 'block';
});
