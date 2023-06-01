/*
 * @Author: Do not edit
 * @Date: 2023-06-01 22:28:58
 * @LastEditors: LiuYu
 * @LastEditTime: 2023-06-01 22:46:36
 * @FilePath: /koa-admin/src/service/model/resModel.js
 */
class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data;
      this.data = null;
      return;
    }

    if (data) {
      this.data = data;
    }

    if (message) {
      this.message = message;
    }
  }
}

class SuccessModel extends BaseModel {
  constructor(data, message, code = 200) {
    super(data, message);
    this.code = code;
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message, code = 400) {
    super(data, message);
    this.code = code;
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
};
