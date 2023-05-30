/*
 * @Author: Do not edit
 * @Date: 2023-05-30 21:22:32
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-05-30 23:06:31
 * @FilePath: /koa-admin/src/app/index.js
 */
const Koa = require('koa');
const userRouter = require('@/router/user.router.js');

const app = new Koa();

app
  .use(userRouter.routes())
  .use(userRouter.allowedMethods());

module.exports = app;
