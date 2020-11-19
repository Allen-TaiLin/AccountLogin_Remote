# 餐廳清單的 CRUD 功能(重構) - Restaurant Menu 3.0

使用node.js、express、express-handlebars、body-parser打造登入頁面
![](/2_3A10AccountLogin.png)

## Features - 產品功能

- 使用者在表單裡可輸入帳密：Email 和 Password
- 送出表單後將比對Email 和 Password是否正確
- 若資料驗證有誤，將顯示錯誤訊息
- 使用者可點擊logout，回到登入頁面
- 清空錯誤資料可點擊logout或圖示

## 測試帳號

|     |               Email |         Password |
| --: | ------------------: | ---------------: |
|   1 |      tony@stark.com |       iamironman |
|   2 | captain@hotmail.com | icandothisallday |
|   3 |    peter@parker.com |         enajyram |
|   4 |   natasha@gamil.com |     \*parol#@\$! |
|   5 |     nick@shield.com |         password |

## Environment SetUp - 環境建置

1. [Node.js](https://nodejs.org/en/) (版本使用 10.15.0) - JavaScript 執行環境
2. [npm](https://nodejs.org/en/) (版本使用 6.4.1) - Node.js 的套件管理器
3. [Express](https://www.npmjs.com/package/express) (版本使用 4.17.1) - 應用程式架構
4. [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) (版本使用 5.2.0) - 模板引擎
5. [Nodemon](https://www.npmjs.com/package/nodemon) (版本使用 2.0.6) - 伺服器輔助
6. [Body-Parser](https://www.npmjs.com/package/body-parser) (版本使用 1.19.0) - Node.js body parsing middleware
7. [MongoDB](https://www.mongodb.com/) (版本使用 4.2.11) - 資料庫
8. [Mongoose](https://www.npmjs.com/package/mongoose) (版本使用 5.10.15) - MongoDB 的 ODM 可以在程式中與資料庫溝通

## Use Tools - 使用工具

- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [MongoDB](https://www.mongodb.com/) - 資料庫
- [Robo 3T](https://robomongo.org/) - 和 MongoDB 搭配的圖形介面工具

## Installing - 專案安裝流程

1. 開啟終端機(Terminal) 或 (Git Bash) 到欲存放專案的本機位置並執行:

```
git clone https://github.com/Allen-TaiLin/AccountLogin_Remote.git
```

2. 開啟終端機(Terminal) 或 (Git Bash)，進入到存放此專案的資料夾

```
cd account_login
```

3. 安裝 npm 套件

```
在 Git Bash 或 (Terminal) 輸入 npm install
```

4. 安裝 nodemon 套件

```
在 Git Bash 或 (Terminal) 輸入 npm install -g nodemon
```

5. 匯入種子資料到資料庫

```
在 Git Bash 或 (Terminal) 輸入 npm run seed
```

6. 啟動伺服器，執行 app.js 檔案

```
npm run dev
```

7. 當終端顯示出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
Express is listening on http://localhost:3000
mongodb connected!
```



