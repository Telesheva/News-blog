const newsList = document.querySelector('#news-list');
const newsArr = JSON.parse(localStorage.getItem('news'));

window.onload = renderNews;

function renderNews() {
    localStorage.setItem('news', JSON.stringify(newsArr));
    if (newsArr.length > 0) {
        newsArr.forEach(item => {
            createUserNewsHTML(item);
        });
    } else {
        newsList.insertAdjacentHTML('afterbegin', '<h3 style="text-align: center">No news..(</h3>');
    }
}

function createUserNewsHTML(item) {
    newsList.insertAdjacentHTML('beforeend',
        `<li class="news__item">
                <div class="news__item__text  user__news">
                    <span class="news__item__title">${item.title}</span>
                    <p class="news__item__content">${item.content}</p>
               </div>
            </li>`);
}

function logout() {
    window.location.href = 'http://localhost:3000/'
}
