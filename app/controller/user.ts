import Base from '../base/basecontroller'

export default class Userontroller extends Base {
  public async index() {
    const { service } = this;
    const users = await service.user.getUsersAll();
    const data = {
      users: users
    }

    this.success(data);
  }
}
