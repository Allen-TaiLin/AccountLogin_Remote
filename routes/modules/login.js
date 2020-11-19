// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 AccountData model
const AccountData = require('../../models/account')

// 定義路由
//登入驗證
router.post('/', (req, res) => {
  // 從 req.body 拿出表單裡的資料
  const options = req.body
  // 取出 AccountData model 裡的所有資料
  AccountData.find()
    .lean()
    .then((accounts) => {
      // 比對帳密
      const user = accounts.find((item) => {
        return (item.email === options.email) && (item.password === options.password)
      })

      // 帳密吻合
      if (user !== undefined) {
        return res.render('show', { user, message: '' })
      } else {
        // 帳密不符，檢查是否有帳號
        const mistake = accounts.find((item) => {
          return (item.email === options.email) && !(item.password === options.password)
        })

        if (mistake !== undefined) {
          return res.render('index', { user: options, message: '密碼錯誤!!!' })
        } else {
          return res.render('index', { user: options, message: '無此帳號!!!' })
        }
      }
    })
    .catch((error) => console.log(error))  // 錯誤處理
})

// 錯誤導回首頁
router.get('/', (req, res) => {
  return res.render('index')
})

// 匯出路由模組
module.exports = router