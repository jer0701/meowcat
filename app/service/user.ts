import { Service } from 'egg'

export default class User extends Service {
    /**
     *  更新用户信息
     */
     public async updateUserInfo() {
         const { ctx } = this;
         const { openid, userinfo } = ctx.request.body;

         const model = await ctx.model;

         const user = await model.User.findOne({
             where: {
                 openid: openid
             }
         });

         if(user && userinfo.birthdate) {
             await user.update({
                birthdate: userinfo.birthdate
             })
         }

         return user;
     }
}