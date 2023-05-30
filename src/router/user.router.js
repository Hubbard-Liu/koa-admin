/*
 * @Author: Do not edit
 * @Date: 2023-05-30 22:20:49
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-05-30 23:03:34
 * @FilePath: /koa-admin/src/router/user.router.js
 */
const Router = require('@koa/router');
const userController = require('@/controller/user.controller.js');

const userRouter = new Router({
  prefix: '/user'
});

userRouter.get('/', userController.created);

module.exports = userRouter;
