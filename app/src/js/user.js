
const newsList = document.querySelector('#news-list');
const newsArr = JSON.parse(localStorage.getItem('news'));

window.onload = function () {
    if (newsArr.length > 0) {
        newsArr.forEach(item => {
            createNewsItemHTML(item.title, item.content);
        });
        localStorage.setItem('news', JSON.stringify(newsArr));
    } else {
        newsList.insertAdjacentHTML('beforebegin', '<h3 style="text-align: center">No news..(</h3>');
    }
};

function createNewsItemHTML(title, content) {
    newsList.insertAdjacentHTML('beforeend',
        '<li class="news__item">\n' +
        '        <div class="news__item__text  user__news">\n' +
        `            <span class="news__item__title">${title}</span>\n` +
        `            <p class="news__item__content">${content}</p>\n` +
        '        </div>\n' +
        '    </li>');
}
