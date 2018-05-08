import Base from '../base/basecontroller'
import { bp } from 'egg-blueprint'

export default class Userontroller extends Base {
  @bp.get('/')
  public async index() {
    const { service } = this;
    const users = await service.user.getUsersAll();
    const data = {
      users: users
    }

    this.success(data);
  }
}
