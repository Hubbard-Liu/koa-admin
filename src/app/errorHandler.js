/*
 * @Author: Do not edit
 * @Date: 2023-06-01 21:28:01
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-06-01 22:09:48
 * @FilePath: /koa-admin/src/app/errorHandler.js
 */
const errorType = require('@/constants/errorType');

const errorHandler = (err, ctx) => {
  let status, message;

  switch (err.message) {
    case errorType.BODY_PARAMS_IS_ERROR:
      status = 400;
      message = '请求参数错误~';
      break;
    case errorType.USER_NAME_OR_PASSWORD_IS_REQUIRED:
      status = 400;
      message = '用户名或者密码不能为空~';
      break;
    default:
      status = 404;
      message = err.message || 'NOT FOUND';
  }

  ctx.status = status;
  ctx.body = message;
};

module.exports = errorHandler;
