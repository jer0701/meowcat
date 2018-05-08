import { Service } from 'egg'

export default class User extends Service {
    /**
     *  获取用户信息
     */

     public async getUsersAll() {
         const { ctx } = this;
         const users = ctx.model.User.findAll();

         return users;
     }
}