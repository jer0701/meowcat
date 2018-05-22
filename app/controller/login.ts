import Base from '../base/basecontroller'
import { bp } from 'egg-blueprint'
import * as crypto from 'crypto'
import * as jwt from 'jsonwebtoken'
import { WechatAuth } from '../auth/auth'


export default class Login extends Base {
  @bp.post('/login')
  public async index() {
    const { ctx, service } = this;
    const res = await service.login.getWechatInfo();
   
    const sha1 = crypto.createHash('sha1');
    const token = sha1.update(res.openid).digest('hex');
    const jwtToken = jwt.sign({ token: token }, this.app.config.secret, { expiresIn: 60 * 60 * 72 })

    const model = await ctx.model;

    const user = await model.User.findOne({
      where: {
        openid: res.openid
      }
    });

    if(user) {
      await user.update({
          token: token,
          nickName: res.userInfo.nickName,
          gender: res.userInfo.gender,
          city: res.userInfo.city,
          avatarUrl: res.userInfo.avatarUrl
        })

    } else {
      await model.User.create({
        openid: res.openid,
        token: token,
        nickName: res.userInfo.nickName,
        gender: res.userInfo.gender,
        city: res.userInfo.city,
        avatarUrl: res.userInfo.avatarUrl
      })  
    }

    const data = {
      token: jwtToken,
      openid: res.openid
    }

    this.success(data);
  }

  @bp.get('/login/check', WechatAuth)
  public async check() {
    const { ctx } = this;
    if(ctx.token) {
      this.success({
        token: ctx.token
      });
    } else {
      this.fail('invalid token')
    }
  }
}
