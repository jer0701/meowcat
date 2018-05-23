import { Service } from 'egg'

export default class User extends Service {
    /**
     *  获取用户信息
     */
    public async getUserInfo() {
        const { ctx } = this;
        const { openid } = ctx.request.query;
        const model = await ctx.model;
        const user = await model.User.findOne({
            where: {
                openid: openid
            }
        });

        return user;
    }
    /**
     *  更新用户信息
     */
     public async updateUserInfo() {
         const { ctx } = this;
         const { openid, userInfo } = ctx.request.body;

         const model = await ctx.model;
         const user = await model.User.findOne({
             where: {
                 openid: openid
             }
         });

         if(user && userInfo.gender) {
             await user.update({
                gender: userInfo.gender
             })
         }
         return user;
     }
}