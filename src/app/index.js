/*
 * @Author: Do not edit
 * @Date: 2023-05-30 21:22:32
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-06-01 21:47:14
 * @FilePath: /koa-admin/src/app/index.js
 */
const Koa = require('koa');
const userRouter = require('@/router/user.router.js');
const bodyParser = require('koa-bodyparser');
const errorHandler = require('./errorHandler');
const errorType = require('@/constants/errorType');

const app = new Koa();

app
  .use(bodyParser({
    onerror(err, ctx) {
      if (err) {
        const error = new Error(errorType.BODY_PARAMS_IS_ERROR);
        return errorHandler(error, ctx);
      }
    }
  }))
  .use(userRouter.routes())
  .use(userRouter.allowedMethods());

app.on('error', errorHandler);

module.exports = app;
