/*
 * @Author: Do not edit
 * @Date: 2023-05-30 22:26:18
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-06-01 22:44:28
 * @FilePath: /koa-admin/src/controller/user.controller.js
 */
const service = require('@/service/user.service.js');

class UserController {
  async created(ctx, next) {
    // 获取参数
    const userInfo = ctx.request.body;
    // 查询数据
    const result = await service.created(userInfo);

    if (result.message) {
      const error = new Error(result.message);
      return ctx.app.emit('error', error, ctx);
    }
    // 返回数据
    ctx.body = new global.SuccessModel(result, '创建成功');
  }
}

module.exports = new UserController();
