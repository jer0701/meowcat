import { Service } from 'egg'

interface userInfo {
    nickName: string;
    gender: number;
    city: string;
    avatarUrl: string;
}

interface WechatInfo {
    session_key: string;
    openid: string;
    userInfo: userInfo;
    expires_in: number;
}

export default class Login extends Service {
    /**
     *  获取微信用户信息
     */

     public async getWechatInfo(): Promise<WechatInfo> {
        const { ctx } = this;
        const { code, userInfo } = ctx.request.body;
        const url = `https://api.weixin.qq.com/sns/jscode2session?appid=${this.app.config.wechat.appid}&secret=${this.app.config.wechat.secret}&js_code=${code}&grant_type=authorization_code`;

        const res = await ctx.curl(url, {dataType: 'json'});
        return { ...res.data, userInfo };
     }
}