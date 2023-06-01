/*
 * @Author: Do not edit
 * @Date: 2023-06-01 21:00:17
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-06-01 21:42:14
 * @FilePath: /koa-admin/src/middleware/user.middleware.js
 */
const { USER_NAME_OR_PASSWORD_IS_REQUIRED } = require('@/constants/errorType.js');

const userVerify = async(ctx, next) => {
  if (!ctx.request.body) return;
  // 判断数据
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    const error = new Error(USER_NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit('error', error, ctx);
  }

  await next();
};

module.exports = userVerify;
