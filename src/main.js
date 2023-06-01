/*
 * @Author: Do not edit
 * @Date: 2023-05-30 21:03:23
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-05-31 22:27:58
 * @FilePath: /koa-admin/src/main.js
 */
require('module-alias/register');
require('./app/database.js');
const { APP_PORT } = require('./app/config.js');
const app = require('./app/index.js');

app.listen(APP_PORT, () => {
  console.log(`服务器启动成功 ${APP_PORT}端口`);
});
