/* eslint-disable no-undef */
/*
 * @Author: Do not edit
 * @Date: 2023-05-30 21:22:40
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-06-01 22:45:53
 * @FilePath: /koa-admin/src/app/config.js
 */
const dotenv = require('dotenv');
const { SuccessModel, ErrorModel } = require('@/service/model/resModel.js');

dotenv.config();
// 配置全局resModel
global.SuccessModel = SuccessModel;
global.ErrorModel = ErrorModel;

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD
} = process.env;
