import { Service } from 'egg'

export default class user extends Service {
    /**
     *  获取用户信息
     */

     public async getUserAll() {
         const { ctx } = this;
         const users = this.ctx.model.User.findAll();

         return users;
     }
}