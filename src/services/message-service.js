import APIService from './API-service';

class MessageService {
  constructor() {
    this.baseUrl = process.env.API_URL;
    this.APIServiceInstance = new APIService();
    this.model = 'messages';
  }

  async getMessage(id_article) {
    return this.APIServiceInstance.get(`${this.model}?id_article=${id_article}`);
  }

  async postMessage(message) {
    return this.APIServiceInstance.post(message, this.model);
  }
}

export default MessageService;
