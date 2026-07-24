# 網站服務銷售頁 v2 完整視覺改版 QA

檢查日期：2026-07-24  
專案：`C:\Users\wwwas\Desktop\AI網站接案工作室\01_示範網站\網站製作服務站_v1`  
公開網址：<https://gavin1424.github.io/>  
改版前基準：`af3b1fc83b243ad9cd14f4ba205df74a17b66170`  
回復標籤：`v2-redesign-baseline-20260724`

## 改版成果

- 品牌：StudioSite／專業形象網站設計
- 主標：一次建站，完整交付
- 方案：7 天工作室網站上線包
- 正式售價：NT$12,800
- 前三位案例價：NT$9,800
- 首頁內容順序：導覽、Hero、五項優勢、適合對象、服務說明、方案內容、流程、案例、價格、FAQ、CTA、Footer

## 圖片與 Mockup

- `assets/hero-scene-v2.webp`：本次新生成的無文字暖白石材場景，1536 × 1024，約 142 KB。
- `assets/warm-thread-desktop.webp`：暖線拼布示範站 1440 × 900 真實瀏覽器截圖。
- `assets/warm-thread-mobile.webp`：暖線拼布示範站 390 × 844 真實瀏覽器截圖。
- 筆電與手機外框使用 HTML／CSS，螢幕內容不使用 AI 產生文字。
- `assets/service-og.webp`：1200 × 630，約 57 KB。

## 五種 viewport

| Viewport | 版面結果 | 橫向溢位 | 破圖 | Console error |
|---|---|---:|---:|---:|
| 1440 × 900 | 三欄 Hero；價格卡向下錯位；五項優勢露出 | 無 | 0 | 0 |
| 1024 × 768 | 左文案／右 Mockup 雙欄；價格卡移至下方 | 無 | 0 | 0 |
| 768 × 1024 | 漢堡選單；Hero、Mockup、價格卡依序單欄 | 無 | 0 | 0 |
| 390 × 844 | 真實手機閱讀順序；CTA 與 Mockup 不重疊 | 無 | 0 | 0 |
| 360 × 800 | 小螢幕標題兩行；按鈕滿寬；無截斷 | 無 | 0 | 0 |

瀏覽器回報的 `scrollWidth` 分別為 1425、1009、753、375、345；均小於對應 viewport 寬度，差值為垂直捲軸佔用。

## 功能檢查

- [x] 桌面導覽列正常
- [x] 手機漢堡選單可開啟、按 Escape 關閉
- [x] Hero 主要與次要 CTA 正常
- [x] 正式詢問連結由 `site-config.js` 集中設定
- [x] Google 詢問表可由連結直接開啟
- [x] Google 表單頁面可看到欄位，登入僅為可選的「儲存進度」
- [x] FAQ 共 9 項，單項平順展開，開啟新項目會關閉舊項目
- [x] 暖線案例連結正常
- [x] `privacy.html` 正常
- [x] `service-rules.html` 正常
- [x] `404.html` 正常
- [x] 手機固定 CTA 在 Hero 原始 CTA 可見時隱藏
- [x] 手機固定 CTA 離開 Hero 後顯示
- [x] Footer 進入畫面時固定 CTA 隱藏

## 動效與無障礙

- Hero 小標、標題、副標、按鈕依序淡入
- Mockup 輕微向上進場
- 價格卡延遲淡入
- 優勢、案例與流程進入視窗時依序顯示
- 按鈕箭頭 hover 向右移動
- 卡片 hover 僅上移 4px
- FAQ 使用原生 `details`／`summary`
- 導覽列捲動後使用極淡背景模糊
- `prefers-reduced-motion: reduce` 時關閉非必要動畫與平滑捲動
- 按鈕與連結有鍵盤焦點樣式
- 漢堡選單觸控區 46 × 46px

## SEO 與索引

- Title：`一次建站，完整交付｜工作室品牌網站製作`
- Meta Description：`單次支付網站建置費，提供手機友善的一頁式工作室品牌網站、完整網站檔案、基礎 SEO、LINE 與表單整合。`
- 正式服務站：`index, follow`
- canonical：`https://gavin1424.github.io/`
- Open Graph：`https://gavin1424.github.io/assets/service-og.webp`
- Twitter Card：`summary_large_image`
- JSON-LD：`Service`，方案名稱為「7 天工作室網站上線包」
- 暖線虛構品牌示範站：維持 `noindex, follow`

## 真實性與安全

- [x] 沒有假 LINE、電話或 Email
- [x] 沒有假客戶評價
- [x] 沒有假合作數字或五星評分
- [x] 沒有「永久免費」「終身維護」「保證帶來客戶」「保證排名」
- [x] 沒有把暖線拼布標記成真實營業場所
- [x] 沒有本機絕對路徑寫進公開 HTML、CSS 或 JavaScript
- [x] 沒有密碼、Token、Cookie 或私人資料

## 截圖

- 改版前：`C:\Users\wwwas\Desktop\AI網站接案工作室\12_品牌與行銷素材\網站服務銷售頁_v2_改版前_1440.png`
- 改版後 1440：`C:\Users\wwwas\Desktop\AI網站接案工作室\12_品牌與行銷素材\網站服務銷售頁_v2_改版後_1440.png`
- 改版後 390：`C:\Users\wwwas\Desktop\AI網站接案工作室\12_品牌與行銷素材\網站服務銷售頁_v2_改版後_390.png`
- 參考圖並排比對：`C:\Users\wwwas\Desktop\AI網站接案工作室\12_品牌與行銷素材\網站服務銷售頁_v2_參考圖並排比對.png`

## 結果

本機版面、互動、圖片、表單入口、SEO 與真實性檢查通過。部署後需再以公開網址確認 HTTP 200、公開資源 MIME、Console error 與暖線 noindex。
