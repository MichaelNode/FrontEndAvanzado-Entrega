import { appendComponent, getFormData } from '../../utils/utils';
import {  createArticle } from '../../components/article/article-component';
import ArticleService from '../../services/article-service';
import PubSub from 'pubsub-js';
import './articles-style.scss';

// const handleArticleForm = (articlesServiceInstance) => {
//     const articleForm = document.getElementById('article-form');
//     const submitFormButton = document.getElementById('article-form-submit');
//     const formInputs = articleForm.getElementsByClassName('article-input');
  
//     submitFormButton.addEventListener('click', (e) => {
//       e.preventDefault();
//       submitFormButton.disable = true;
//       articlesServiceInstance.postSong(getFormData(formInputs)).then(
//         (response) => {
//           if (response === true) {
//             articleForm.reset();
//             PubSub.publish('reload');
//           }
//         }
//       );
//     });
//   };
  
  const loadarticles = (articlesJson, articles) => {
    const updatedArticles = articles;
    if (articlesJson.length === 0) {
      updatedArticles.innerHTML = '<div id="div-result" class="div-result"><p class="result">No articles</p></div>';
    } else {
      appendComponent(updatedArticles,
        articlesJson.map(articleData =>  createArticle(articleData)));
    }
  };
  
  export const updatearticles = () => {
    const articlesServiceInstance = new ArticleService();
    const articles = document.getElementById('articles');
    articlesServiceInstance.getArticles().then((articlesJson) => {
      articles.innerHTML = '';
      loadarticles(articlesJson, articles);
    }).catch(() => {
      articles.innerHTML = 'There was an error, please reload';
    });
  };
  
  export const createArticles = () => {
    const articlesServiceInstance = new ArticleService();
    const articles = document.getElementById('articles');
    updatearticles();
    return articles;
  };

export const updateForm = () => {
    const submitFormButton = document.getElementById('btn-search');
    const articlesServiceInstance = new ArticleService();
    submitFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        var value = document.getElementById('search').value
        console.log(value);
        articlesServiceInstance.searchArticle(value).then((articlesJson) => {
            articles.innerHTML = '';
            loadarticles(articlesJson, articles);
        }).catch(() => {
            articles.innerHTML = 'There was an error, please reload';
        });

    });
       
  };
  
  export default {
      createArticles,
      updateForm
    }
  
 
  


// import { appendComponent } from '../../utils/utils';
// import { createArticle } from '../../components/article/article-component';

// export const renderArticle = () => {
//     const articles = document.createElement('div');
//     articles.classList.add('row');
//     appendComponent(articles, [
//         createArticle({ title: 'I’d Rather Be a Dad', 
//         author: 'Reyhan Harmanci',
//         imgUrl: 'https://cdn-images-1.medium.com/max/1050/1*99bFtihLk64CVvLKcTiihw.jpeg'}),
//         createArticle({ title: 'I’d Rather Be a Dad', 
//         author: 'Reyhan Harmanci',
//         imgUrl: 'https://cdn-images-1.medium.com/max/1050/1*99bFtihLk64CVvLKcTiihw.jpeg'}),
//         createArticle({ title: 'I’d Rather Be a Dad', 
//         author: 'Reyhan Harmanci',
//         imgUrl: 'https://cdn-images-1.medium.com/max/1050/1*99bFtihLk64CVvLKcTiihw.jpeg'}),
//         createArticle({ title: 'I’d Rather Be a Dad', 
//         author: 'Reyhan Harmanci',
//         imgUrl: 'https://cdn-images-1.medium.com/max/1050/1*99bFtihLk64CVvLKcTiihw.jpeg'})
//     ]);
//     return articles;
// };

// export default  renderArticle;