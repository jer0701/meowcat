import { Controller } from 'egg';
import Base from '../base/basecontroller'

export default class Userontroller extends Base {
  public async index() {
    const { ctx } = this;
    const users = await this.service.user.getUsersAll();
    const data = {
      users: users
    }

    this.success(data);
  }
}
