const addBtn = document.querySelector('#create-btn');
const editBtn = document.querySelector('#edit');
const modalBtns = document.getElementsByClassName('modal-btn');

const createForm = document.querySelector('#create-form');

const coverBlock = document.querySelector('#cover');

const newsList = document.querySelector('#news-list');
const title = document.querySelector('#news-title');
const content = document.querySelector('#news-content');

const newsArr = JSON.parse(localStorage.getItem('news'));

window.onload = function () {
    if (newsArr.length > 0) {
        newsArr.forEach(item => {
            createNewsItemHTML(item.title, item.content);
        });
        localStorage.setItem('news', JSON.stringify(newsArr));
    } else {
        newsList.insertAdjacentHTML('beforebegin', '<h3 style="text-align: center">You do not have news!</h3>');
    }
};

function onAddItem() {
    newsArr.push({
        id: Math.random() * 19,
        title: title.value,
        content: content.value
    });
    localStorage.setItem('news', JSON.stringify(newsArr));
    createNewsItemHTML(title.value, content.value);
}

function onDeleteItem(item) {
    const title = item.parentNode.firstElementChild.firstElementChild.textContent;
    const index = newsArr.findIndex(news => news.title === title);
    newsArr.splice(index, 1);
    item.parentNode.parentNode.removeChild(item.parentNode);
    localStorage.setItem('news', JSON.stringify(newsArr));
}

function createNewsItemHTML(title, content) {
    newsList.insertAdjacentHTML('beforeend', '<li class="news__item">\n' +
        '        <div class="news__item__text">\n' +
        `            <span class="news__item__title">${title}</span>\n` +
        `            <p class="news__item__content">${content}</p>\n` +
        '        </div>\n' +
        '        <div class="news__item__icons">\n' +
        '            <img src="src/img/edit.svg" id="edit" alt="edit" width="35px" height="35px"/>\n' +
        '            <img src="src/img/close.svg" id="delete" alt="delete" onclick="onDeleteItem(parentNode)"/>\n' +
        '        </div>\n' +
        '    </li>');
}

function openModalForm() {
    createForm.style.display = 'flex';
    coverBlock.style.display = 'block';
}

addBtn.addEventListener('click', openModalForm);
editBtn.addEventListener('click', () => {
    openModalForm();
    //Here will be code for editing
});

Array.from(modalBtns).forEach(btn => {
    btn.addEventListener('click', e => {
        createForm.style.display = 'none';
        coverBlock.style.display = 'none';
        title.value = '';
        content.value = '';
        e.preventDefault();
    });
});
