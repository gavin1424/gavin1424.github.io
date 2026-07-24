# 網站服務銷售頁｜參考圖改版 QA

檢查日期：2026-07-24  
本機專案：`C:\Users\wwwas\Desktop\AI網站接案工作室\01_示範網站\網站製作服務站_v1`  
公開網址：<https://gavin1424.github.io/>  
改版前基準 commit：`5a9b8dd`  
改版程式 commit：`3cb2c1a`

## 結果摘要

- 參考圖構圖還原：通過
- 響應式設計：通過
- 導覽、FAQ 與 CTA：通過
- Google 方案詢問表：通過
- 隱私權與服務規則頁：通過
- SEO 與索引設定：通過
- 控制台錯誤：0
- 公開部署：通過
- 未解決阻塞：無

## 視覺還原

已依參考圖完成以下重點：

1. 暖白導覽列、StudioSite 字標與低彩度金色 CTA。
2. 左文案、中筆電場景、右價格卡的三區 Hero。
3. 黑色明體大標題、暖灰內文與金色小標。
4. 桌面版略有層次的獨立價格卡，沒有電商紅色或誇張促銷。
5. Hero 下方五項信任重點。
6. 以細分隔線、淺色底與自然留白取代舊版厚重卡片。
7. 桌面並排的五步驟流程與 FAQ。
8. 三張案例縮圖，且「概念展示」沒有被描述為真實合作客戶。
9. 暖米色底部 CTA 與單一 Google 方案詢問入口。

參考圖與實作同畫面比對：

`C:\Users\wwwas\Desktop\AI網站接案工作室\12_品牌與行銷素材\網站服務銷售頁_參考圖首屏比對.jpg`

完整 Design QA 記錄：`design-qa.md`，最終結果為 `passed`。

## Hero 圖片

- 檔案：`assets/hero-studio.webp`
- 尺寸：1536 × 1024
- 容量：約 134 KB
- 來源：本次使用影像生成工具新製作暖白石材、筆電、陶瓷花器與自然窗光場景，再嵌入暖線拼布示範站的實際公開畫面。
- 沒有直接使用參考圖當背景，也沒有保留參考圖中的瀏覽器外框。
- 螢幕內容清楚、比例合理，沒有生成錯字介面。

案例素材：

- `assets/case-warm-thread.webp`：暖線示範站實際畫面。
- `assets/case-studiosite.webp`：本站改版後實際畫面。
- `assets/case-concept-studio.webp`：新生成的概念版型情境圖，頁面清楚標示為「概念展示」。

圖示使用 Bootstrap Icons 官方開源素材，並保留 MIT License。

## 四種尺寸測試

| 尺寸 | 結果 | 橫向溢位 | 主要檢查 |
|---|---|---|---|
| 1440 × 900 | 通過 | 無 | 三欄 Hero、價格卡、五欄信任重點、流程與 FAQ |
| 1024 × 768 | 通過 | 無 | 小型筆電仍保留三欄 Hero，文字與價格卡未碰撞 |
| 768 × 1024 | 通過 | 無 | 文案、Mockup、價格卡依序堆疊，選單正常 |
| 390 × 844 | 通過 | 無 | 標題兩行、按鈕滿寬、流程垂直、固定 CTA 不遮住頁尾 |

瀏覽器實測的 `scrollWidth` 分別為 1425、1009、753、375；與 viewport 的 15px 差異是瀏覽器垂直捲軸，不是內容溢位。

## 互動與動效

- Hero 小標、標題、副標與按鈕依序淡入。
- 筆電 Mockup 輕微向上進場。
- 價格卡延遲淡入與上浮。
- 卡片進入視窗後依序淡入。
- 卡片 hover 上移 4px。
- 按鈕 hover 時箭頭右移。
- FAQ 展開與收合平順。
- 導覽列滾動後加入極淡陰影與背景模糊。
- Hero 圖片僅在大於 900px 時使用很輕的視差。
- CSS 與 JavaScript 均檢查 `prefers-reduced-motion`；啟用減少動態時，進場、視差與平滑捲動停用。

## 功能與無障礙

- 所有主要 CTA 均讀取 `site-config.js` 的正式詢問網址。
- Google 詢問表實際開啟成功，頁面標題為「免主機月租工作室網站｜方案詢問表」。
- 手機選單使用原生 `button` 與 `aria-expanded`。
- FAQ 使用原生 `details`／`summary`，Enter 鍵開合通過。
- 所有圖片都有 `alt`；裝飾圖示使用空 `alt` 與 `aria-hidden`。
- 所有本機圖片網址皆回傳 HTTP 200。
- 主要白字金色按鈕使用 `#8F6B32`，對比約 4.86:1。
- 沒有假 LINE、電話、Email、客戶姓名、評價或保證收益敘述。

## HTML、CSS 與 JavaScript

- `node --check script.js`：通過。
- HTML：無重複 ID、無缺少的頁內錨點。
- CSS：左右大括號數量一致。
- 圖片：全部存在，無破圖。
- 關鍵字掃描：沒有 Lorem ipsum、密碼、Token、Cookie、本機絕對路徑或 localhost 被寫入公開檔案。
- 公開網站控制台錯誤：0。

## SEO 與索引

公開首頁實際瀏覽器結果：

- Title：`免主機月租工作室網站｜StudioSite 專業形象網站設計`
- robots：`index, follow`
- canonical：`https://gavin1424.github.io/`
- Open Graph 圖片：`https://gavin1424.github.io/assets/service-og.jpg`
- JSON-LD：`Service`
- sitemap：包含首頁、`privacy.html`、`service-rules.html`

暖線虛構品牌示範站：

- 首頁：`noindex, follow`
- 舊 `service.html`：`noindex, follow`
- 舊服務頁 canonical：`https://gavin1424.github.io/`
- 沒有將暖線拼布工作室標記為真實營業場所。

## 公開 HTTP 狀態

| 公開頁面 | 狀態 |
|---|---|
| <https://gavin1424.github.io/> | 200 |
| <https://gavin1424.github.io/privacy.html> | 200 |
| <https://gavin1424.github.io/service-rules.html> | 200 |
| <https://gavin1424.github.io/assets/hero-studio.webp> | 200，`image/webp` |
| <https://gavin1424.github.io/warm-thread-patchwork-demo/> | 200 |
| Google 方案詢問表 | 200，可正常開啟 |

## 截圖

- 改版前完整頁面：`C:\Users\wwwas\Desktop\AI網站接案工作室\12_品牌與行銷素材\網站服務銷售頁_改版前_完整頁面.png`
- 改版後完整頁面：`C:\Users\wwwas\Desktop\AI網站接案工作室\12_品牌與行銷素材\網站服務銷售頁_改版後_完整頁面_1440.png`
- 1440px：`網站服務銷售頁_改版後_1440.png`
- 1024px：`網站服務銷售頁_改版後_1024.png`
- 768px：`網站服務銷售頁_改版後_768.png`
- 390px：`網站服務銷售頁_改版後_390.png`
- 公開版手機頁尾：`網站服務銷售頁_公開版_390_頁尾.png`

以上截圖均位於：

`C:\Users\wwwas\Desktop\AI網站接案工作室\12_品牌與行銷素材`

## 已知限制

- Google Fonts 為外部字型服務；若訪客網路阻擋 Google Fonts，會自動退回系統明體與黑體。
- 免費託管受 GitHub Pages 平台政策與可用性影響，不宣稱永久在線或永遠不需維護。

## 最終判定

所有本階段要求的視覺、功能、響應式、SEO、公開部署與安全檢查均通過，沒有阻塞。
