/*
 * @Author: Do not edit
 * @Date: 2023-05-30 22:20:49
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-06-01 21:05:26
 * @FilePath: /koa-admin/src/router/user.router.js
 */
const Router = require('@koa/router');
const userController = require('@/controller/user.controller.js');
const userMiddleware = require('@/middleware/user.middleware.js');

const userRouter = new Router({
  prefix: '/user'
});

userRouter.get('/create', userMiddleware, userController.created);

module.exports = userRouter;
