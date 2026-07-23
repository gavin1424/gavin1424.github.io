# 免主機月租工作室網站｜獨立服務站

這是「7 天工作室網站上線包」的正式公開服務說明站，與虛構品牌示範案例分開管理。

## 公開頁面

- 首頁：`index.html`
- 隱私權說明：`privacy.html`
- 服務與合作規則：`service-rules.html`
- 404：`404.html`

## 正式詢問入口

詢問按鈕統一從 `site-config.js` 的以下欄位讀取：

- `service.contactUrl`
- `service.inquiryFormUrl`
- `service.privacyContact`

目前三者均指向已驗證可由未登入使用者填寫的 Google 方案詢問表。

## 聯絡資料狀態

- 服務名稱：免主機月租工作室網站
- Google 方案詢問表：使用中
- Email：暫不使用
- 公開社群：暫不使用
- LINE／LINE 官方帳號：未提供，不顯示空白或假按鈕
- 隱私權聯絡窗口：同一詢問表，請在需求欄填寫「個資／隱私問題」

不得在此儲存密碼、Token、Cookie、私人 Email、電話、地址或未經授權的客戶資料。

## 部署

儲存庫：`gavin1424/gavin1424.github.io`

GitHub Pages 使用 `main` 分支根目錄。網站是靜態 HTML、CSS、JavaScript，不需要資料庫或傳統虛擬主機。
