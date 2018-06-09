import Base from '../base/basecontroller'
import { bp } from 'egg-blueprint'

export default class Userontroller extends Base {
    @bp.post('/article')
    public async postArticle() {
        const { service } = this;
        const res = await service.article.postArticle();
        const id = res.id;

        this.success(id);
    }

    @bp.get('/article/:page')
    public async getArticle() {
        const { service } = this;
        const article = await service.article.getArticle();
        const data = {
            article: article
        }
        this.success(data)
    }
}