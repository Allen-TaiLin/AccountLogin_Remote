// 載入套件
const db = require('../../config/mongoose')

// 載入 restaurant model
const AccountData = require('../account')

//範本資料
const users = require('../../users.json')

//新增種子資料
db.once('open', () => {
  for (let i = 0; i < users.length; i++) {
    AccountData.create({
      firstName: users[i].firstName,
      email: users[i].email,
      password: users[i].password
    })
  }

  console.log('AccountData Insert Done')
})