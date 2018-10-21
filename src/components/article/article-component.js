import './article-style.scss';


export const createArticle = ({ title, author, imageUrl, id , date } = { title: 'No title', author:'No author' }) => {
    const article = document.createElement('div');
    article.classList.add('article','col-sm-12','col-xs-12','col-md-4','col-xl-3');
    article.innerHTML = `
        <a class="song-title" href="/article/?id=${id}">
            <img class="card-img-top" src="${imageUrl}" alt="Card image cap">
        </a>
        <div class="card-body">
            <a class="article-title" href="/article/?id=${id}">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${author}</p>
            </a>
            <a class="comment" href="/article/?id=${id}#message-detail">Comments</a>
            <p class="card-text"><small class="text-muted">${date}</small></p>
        </div>
    `;
    return article;
};

export default {
    createArticle
};