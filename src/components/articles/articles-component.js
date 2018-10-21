import { appendComponent, getFormData, reportValidity } from 'utils/utils';
import {  createArticle } from 'components/article/article-component';
import ArticleService from 'services/article-service';
import { createMessage } from 'components/message/message-component';
import  MessageService  from 'services/message-service';
import {handleValidation} from 'components/article-detail/article-detail-component'
import './articles-style.scss';
 
const loadarticles = (articlesJson, articles) => {
  const updatedArticles = articles;
  if (articlesJson.length === 0) {
    updatedArticles.innerHTML = 
      `<div id="div-result" class="div-result">
        <p class="result">No articles</p>
      </div>`;
  }else{
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
    articlesServiceInstance.searchArticle(value).then((articlesJson) => {
      articles.innerHTML = '';
        loadarticles(articlesJson, articles);
    }).catch(() => {
        articles.innerHTML = 'There was an error, please reload';
    });
  });
};

export const updateMesageDetail_global = (data)  => {
  console.log('netro pos', data)
  const messages = document.getElementById('message-detail');
  const messageArticles = messages;
    if (data.length === 0) {
    } else{
        appendComponent(messageArticles,
        data.map(messageData => createMessage(messageData)));     
    } 
};

export const updateMessageForm_global = () => {
  const messageForm = document.getElementById('message-form');
  const submitFormButton = document.getElementById('btn-message');
  const formInputs = messageForm.getElementsByClassName('message-input');
  const MessageServiceInstance = new MessageService();
  handleValidation(formInputs);
  submitFormButton.addEventListener('click', (e) => {
    e.preventDefault();
    submitFormButton.disable = true;
    reportValidity(messageForm);
    if (messageForm.checkValidity()) {
      MessageServiceInstance.postMessage_global(getFormData(formInputs)).then(
        (response) => {
          if (response === true) {
            console.log('ok')
            location.reload();
          }
        }
      );
      submitFormButton.disable = false;
    }
  });
};
  
export default {
  createArticles,
  updateForm,
  updateMesageDetail_global,
  updateMessageForm_global
}
  