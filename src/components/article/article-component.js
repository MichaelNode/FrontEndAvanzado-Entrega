import './article-style.scss';

export const createArticle = ({ title, author, imageUrl, id , date } = { title: 'No title', author:'No author' }) => {
    const article = document.createElement('div');
    article.classList.add('article','col-sm-12','col-xs-12','col-md-4','col-xl-3');
    article.innerHTML = `
    <a class="song-title" href="/article/?id=${id}">
        <img class="card-img-top" src="${imageUrl}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        </a>
        <p class="card-text">${author}</p>
   
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    `;
    return article;
};

export default {
    createArticle
};