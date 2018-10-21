import './message-styles.scss';

export const createMessage = ({ name, email, message,id_article } = 
  { name: 'No name', email:'No email' }) => {
    const messages = document.createElement('div');
    messages.classList.add('card-message','col-sm-12','col-xs-12','col-md-6','col-xl-6');
    messages.innerHTML = `
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${message}</p>
          <p class="card-text"><small class="text-muted">${email}</small></p>
        </div>
      </div>`;
    return messages;
};

export default {
    createMessage
};