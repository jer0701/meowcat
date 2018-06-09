import { Service } from "egg";

interface article {
  id: number;
  userId: number;
  title: string;
  content: string;
  token: string;
}

export default class Article extends Service {
  public async getArticle(): Promise<article> {
    const { ctx } = this;
    const { page } = ctx.params;
    const pageSize = parseInt(ctx.query.pageSize) || 12;
    const article = await ctx.model.Article.findAll({
      offset: page * pageSize,
      limit: pageSize,
      include: [
        {
          model: ctx.model.User,
          attributes: ["id", "nickName", "avatarUrl"]
        }
      ]
    });

    return article;
  }

  public async postArticle(): Promise<article> {
    const { ctx } = this;
    const { title, content, userId } = ctx.request.body;
    const post = await ctx.model.Article.create({
      title: title,
      content: content,
      userId: userId,
    });

    return post;
  }
}
