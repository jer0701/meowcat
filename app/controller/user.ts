import Base from '../base/basecontroller'
import { bp } from 'egg-blueprint'

export default class Userontroller extends Base {
  @bp.post('/userinfo')
  public async index() {
    const { service } = this;
    const user = await service.user.updateUserInfo();
    const data = {
      user: user
    }

    if(user) {
      this.success(data);
    } else {
      this.fail("user isn't exist")
    }
    
  }
}
