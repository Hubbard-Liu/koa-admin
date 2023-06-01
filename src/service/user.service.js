/*
 * @Author: Do not edit
 * @Date: 2023-05-30 22:39:36
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-06-01 22:10:48
 * @FilePath: /koa-admin/src/service/user.service.js
 */
const connection = require('@/app/database');
class UserService {
  async created(userInfo) {
    const { username, password } = userInfo;

    const statement = 'INSERT INTO users (`name`, `password`) VALUES(?, ?);';

    const result = await connection.execute(statement, [username, password]).catch((err) => (err));

    return result;
  }
}

module.exports = new UserService();
