
import { appendComponent, getFormData, reportValidity } from '../../utils/utils';
import { createMessage } from '../../components/message/message-component';
import  MessageService  from '../../services/message-service';


const isLiked = id => localStorage.getItem(`article-${id}`);

const toggleLike = (id) => {
  const likeValue = isLiked(id) === 'true' ? 'false' : 'true';
  localStorage.setItem(`article-${id}`, likeValue);
};

const setInitialLikeValue = (likeButton, liked) => {
  if (liked === 'true') likeButton.children[0].classList.add('fas');
};

export const updateArticleDetail = ({
  title, author, imageUrl, description, id,date
} = { title: 'No title', author: 'No author' }) => {
  const article = document.getElementById('article-detail');
  const descriptionDiv = description ? (
    `<div class="article-detail-description">
      ${description}
    </div>`
  ) : '';
  const image = imageUrl;
  article.innerHTML = `
    <div class="title-container row">
        <div class="col-md-10 col-xl-10 col-xs-12">
            <h2 title="Article title" class="article-title">${title}</h2>
        </div>
        <div class="col-md-2 col-xl-2 col-xs-12 like-container">
            <button id="like-button" class="like-button">
                <i class="far fa-heart"></i>
            </button>
        </div>
    </div>
    <p title="Author" class="article-author">Editor: ${author} <br>Date: ${date}</p>
    
    <img src="${image}" class="article-image" ></img>
   
    <div>
    ${descriptionDiv}
    </div>

    <div class="back-container">
    <a title="back" class="back" href='/'><i class="fas fa-arrow-alt-circle-left"></i> Go Back</a>
    </div>
  `;

  const likeButton = document.getElementById('like-button');

  setInitialLikeValue(likeButton, isLiked(id));

  likeButton.addEventListener('click', () => {
    likeButton.children[0].classList.toggle('fas');
    toggleLike(id);
  });
};



export const updateMesageDetail = (data)  => {
    const messages = document.getElementById('message-detail');
    const messageArticles = messages;
        if (data.length === 0) {
            console.log('noo')
          } else{
            appendComponent(messageArticles,
                data.map(messageData => createMessage(messageData)));
              
          }
  
};


const addCustomValidation = (input) => {
    
    if (input.value === input.value.toUpperCase()) {
      input.setCustomValidity('No introduzcas todo el texto en mayúsculas');
    } else {
      input.setCustomValidity('');
    }
  };

  const addErrorClass = (input) => {
    if (!input.checkValidity()) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  };
  
  


  const handleValidation = (formInputs) => {
    for (let i = 0; i < formInputs.length; i += 1) {
      const input = formInputs[i];
  
      input.addEventListener('focus', () => {
        input.classList.add('focus');
      });
  
      input.addEventListener('blur', () => {
        input.classList.remove('focus');
        addCustomValidation(input);
        addErrorClass(input);
      });
    }
  };
  


  export const updateMessageForm = (articleId) => {
    const messageForm = document.getElementById('message-form');
    const submitFormButton = document.getElementById('btn-message');
    const formInputs = messageForm.getElementsByClassName('message-input');
    const MessageServiceInstance = new MessageService();
    const id_article = document.getElementById('id_article');
    id_article.value = articleId
    handleValidation(formInputs);
  
    submitFormButton.addEventListener('click', (e) => {
      e.preventDefault();
      submitFormButton.disable = true;
      reportValidity(messageForm);
      if (messageForm.checkValidity()) {
        MessageServiceInstance.postMessage(getFormData(formInputs)).then(
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
  updateArticleDetail,
  updateMesageDetail,
  updateMessageForm,
  updateForm
};
