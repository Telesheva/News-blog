const coverBlock = document.querySelector('#cover');

const newsList = document.querySelector('#news-list');
const title = document.querySelector('#news-title');
const content = document.querySelector('#news-content');

const modalForm = document.querySelector('#create-form');
const closeModalBtn = document.querySelector('#close-form-btn');

const newsArr = JSON.parse(localStorage.getItem('news'));

window.onload = renderAllNews;

function renderAllNews() {
    newsList.innerHTML = '';
    localStorage.setItem('news', JSON.stringify(newsArr));
    if (newsArr.length > 0) {
        newsArr.forEach(item => {
            createNewsItemHTML(item);
        });
    } else {
        newsList.insertAdjacentHTML('afterbegin', '<h3 style="text-align: center">You have no news!</h3>');
    }
}

const onSubmitForm = (event, {id, type}) => type === 'create' ? onAddItem(event) : onEditItem(event, id);

function onAddItem(event) {
    if (title.value && content.value) {
        newsArr.push({
            id: (Math.random() * 10).toFixed(3),
            title: title.value,
            content: content.value
        });
        renderAllNews();
    } else {
        event.preventDefault();
    }
}

function onEditItem(event, id) {
    if (title.value && content.value) {
        const newItem = {
            id,
            title: title.value,
            content: content.value
        };
        const index = newsArr.findIndex(el => el.id === id);
        newsArr.splice(index, 1, newItem);
        renderAllNews();
    } else {
        event.preventDefault();
    }
}

function onDeleteItem(id) {
    const index = newsArr.findIndex(el => el.id === id);
    newsArr.splice(index, 1);
    renderAllNews();
}

function createNewsItemHTML(item) {
    newsList.insertAdjacentHTML('beforeend',
        `<li class="news__item">
                <div class="news__item__text">
                    <span class="news__item__title">${item.title}</span>
                    <p class="news__item__content">${item.content}</p>
                </div>
                <div class="news__item__icons">
                    <img src="src/img/edit.svg"  data-id=${item.id} alt="edit" width="35px" height="35px" onclick="showModalForm(event.target.dataset.id, 'edit')"/>
                    <img src="src/img/close.svg" data-id=${item.id} alt="delete" onclick="onDeleteItem(event.target.dataset.id)"/>
                </div>
            </li>`);
}

function showModalForm(id, type) {
    modalForm.style.display = 'flex';
    coverBlock.style.display = 'block';
    setModalFormDataAttributes(id, type);
    fillInputsWithNewsDataIfEdit(id, type);
}

function hideModalForm() {
    modalForm.style.display = 'none';
    coverBlock.style.display = 'none';
    title.value = '';
    content.value = '';
}

function setModalFormDataAttributes(id, type) {
    modalForm.setAttribute('data-id', id);
    modalForm.setAttribute('data-type', type);
}

function fillInputsWithNewsDataIfEdit(id, type) {
    if (type === 'edit') {
        const newsItem = newsArr.find(el => el.id === id);
        title.value = newsItem.title;
        content.value = newsItem.content;
    }
}

function logout() {
    window.location.href = 'http://localhost:3000/'
}

//Event Listeners
closeModalBtn.addEventListener('click', hideModalForm);

