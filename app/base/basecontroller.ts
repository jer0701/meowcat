import { Controller } from 'egg';

export default class BaseController extends Controller {
    success(data: any = {}) {
        const { ctx } = this;
        ctx.body = JSON.stringify({
            status: 'ok',
            data: data
        });
    }

    fail(msg: string = 'error') {
        const { ctx } = this;
        ctx.body = JSON.stringify({
            status: 'fail',
            msg: msg
        })
    }
}