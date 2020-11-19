// 載入套件
const mongoose = require('mongoose')
// 使用mongoose.Schema
const Schema = mongoose.Schema
// 建立Schema規則
const accountSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

})

// 匯出模型樣板
const accounts = mongoose.model('AccountData', accountSchema)
module.exports = accounts
