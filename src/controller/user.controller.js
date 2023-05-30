/*
 * @Author: Do not edit
 * @Date: 2023-05-30 22:26:18
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-05-30 23:06:15
 * @FilePath: /koa-admin/src/controller/user.controller.js
 */
const service = require('@/service/user.service.js');

class UserController {
  async created(ctx, next) {
    // 获取参数

    // 查询数据
    const result = await service.created();

    // 返回数据
    ctx.body = result;
  }
}

module.exports = new UserController();
