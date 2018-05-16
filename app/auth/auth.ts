import { Context } from 'egg'
// import Base from '../base/basecontroller'
import * as jwt from 'jsonwebtoken'

export function WechatAuth (ctx: Context, ctl: any) { // 使用 base 报错
  try {
    var token = ctx.request.headers['authorization'];

    if(token) {
      token = token.split(' ')[1];
      const obj = jwt.verify(token, ctx.app.config.secret);
      console.log(obj);
      ctx.token = obj['token'];
    }
  } catch(e) {
    ctl.fail('login_fail');
    return false; // 不加这一句会报错
  }
};
