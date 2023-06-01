/*
 * @Author: Do not edit
 * @Date: 2023-05-31 22:05:46
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-06-01 22:42:46
 * @FilePath: /koa-admin/src/app/database.js
 */
// 导入模块
const mysql = require('mysql2');
const config = require('@/app/config.js');

// 创建一个数据库连接
const connection = mysql.createConnection({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  user: config.MYSQL_USER,
  database: config.MYSQL_DATABASE,
  password: config.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

connection.connect((err) => {
  if (err) {
    console.error('数据库连接失败 error connecting: ' + err.stack);
    return;
  }

  console.log('数据库连接成功 connected as id' + connection.threadId);
});

// 导出异步连接
module.exports = connection.promise();
