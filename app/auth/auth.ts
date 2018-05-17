import { Context } from 'egg'
import Base from '../base/basecontroller'
import * as jwt from 'jsonwebtoken'

export function WechatAuth (ctx: Context, ctl: Base) { 
  try {
    var token = ctx.request.headers['authorization'];
    if(token) {
      jwt.verify(token, ctx.app.config.secret, function(err, decoded) {
        if(!err) {
          ctx.token = decoded.token;
        }
      });
    }
  } catch(e) {
    ctl.fail('login_fail');
    return false; // 不加这一句会报错
  }
};
