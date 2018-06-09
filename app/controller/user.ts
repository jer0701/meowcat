import Base from '../base/basecontroller'
import { bp } from 'egg-blueprint'
import { WechatAuth } from '../auth/auth'

export default class Userontroller extends Base {
  @bp.get('/userinfo', WechatAuth)
  public async index() {
    const { service } = this;
    const user = await service.user.getUserInfo();
    const data = {
      user: user
    }

    if(user) {
      this.success(data);
    } else {
      this.fail("user isn't exist")
    }
    
  }
  @bp.post('/userinfo', WechatAuth)
  public async update() {
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
