/*
 * @Author: Do not edit
 * @Date: 2023-05-30 21:03:23
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-05-30 23:04:42
 * @FilePath: /koa-admin/src/main.js
 */
require('module-alias/register');
const { APP_PORT } = require('./app/config.js');
const app = require('./app/index.js');

app.listen(APP_PORT, () => {
  console.log(`服务器启动成功 ${APP_PORT}端口`);
});
