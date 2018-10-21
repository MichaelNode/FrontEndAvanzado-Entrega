import APIService from './API-service';

class MessageService {
  constructor() {
    this.baseUrl = process.env.API_URL;
    this.APIServiceInstance = new APIService();
    this.model = 'messages';
    this.model_g = 'messages_global';
  }
  async getMessage(id_article) {
    return this.APIServiceInstance.get(`${this.model}?id_article=${id_article}`);
  }
  async postMessage(message) {
    return this.APIServiceInstance.post(message, this.model);
  }
  async getMessage_global() {
    return this.APIServiceInstance.get(`${this.model_g}`);
  }
  async postMessage_global(message) {
    return this.APIServiceInstance.post(message, this.model_g);
  }
}

export default MessageService;
