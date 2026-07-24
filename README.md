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

## 2026-07-24 參考圖改版

首頁已改為 StudioSite 的高級暖白／金色成交展示版：

- 1440px 採左文案、中間實景 Mockup、右價格卡三欄 Hero。
- 1024px 保留三欄構圖；768px 與 390px 依序堆疊。
- 手機版有固定「免費諮詢」入口，底部保留安全間距。
- FAQ 使用可鍵盤操作的原生 `details`／`summary`。
- 動效使用 Intersection Observer，並支援 `prefers-reduced-motion`。

### 圖片與圖示來源

- `assets/hero-studio.webp`：本次以影像生成工具新製作的自然光筆電場景，再嵌入暖線示範站實際公開畫面；1536 × 1024，約 134 KB。
- `assets/case-warm-thread.webp`：暖線拼布示範站實際公開畫面。
- `assets/case-studiosite.webp`：本站改版後實際畫面。
- `assets/case-concept-studio.webp`：本次新生成的概念版型情境圖，頁面中已標示為概念展示。
- `assets/icons/`：Bootstrap Icons 的開源線性圖示，來源為官方 GitHub 儲存庫；Bootstrap Icons 採 MIT License。

參考圖片只用於構圖、留白、字體層級與配色分析，未直接作為網站背景或公開資產。

測試與比對結果請見：

- `design-qa.md`
- `網站服務銷售頁_參考圖改版_QA.md`
