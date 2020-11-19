// require packages used in the projects
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const AccountData = require('./models/account')

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))
// setting static files
app.use(express.static('public'))

// 設定資料庫
require('./config/mongoose')


// routes setting
app.get('/', (req, res) => {
  // 讀取index檔案、渲染畫面
  return res.render('index')
})

app.post('/login', (req, res) => {
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
          return res.render('index', { user: options, message: '密碼錯誤!' })
        } else {
          return res.render('index', { user: options, message: '無此帳號!' })
        }
      }

    })
    .catch((error) => console.log(error))  // 錯誤處理

})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})