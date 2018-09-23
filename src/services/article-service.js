import APIService from './API-service';

class ArticleService {
  constructor() {
    this.APIServiceInstance = new APIService();
    this.model = 'articles';
  }

  async getArticles() {
    return this.APIServiceInstance.get(this.model);
  }

  async getArticle(id) {
    return this.APIServiceInstance.get(`${this.model}/${id}`);
  }

  async searchArticle(value) {
    return this.APIServiceInstance.get(`${this.model}?q=${value}`);
  }

  async postArticle(article) {
    return this.APIServiceInstance.post(article, this.model);
  }
}

export default ArticleService;
