import '../../utils/main'
import './index.scss';
import '../../styles/main.scss';
import 'styles/main.scss';
import { createArticles, updateMessageForm_global, updateForm,  updateMesageDetail_global } from '../../components/articles/articles-component';
import  MessageService from '../../services/message-service';

const MessageServiceInstance = new MessageService();

MessageServiceInstance.getMessage_global().then((messageJSON) => {
    updateMesageDetail_global(messageJSON);
});
  
createArticles();
updateMessageForm_global();
updateForm();


