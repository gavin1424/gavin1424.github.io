# StudioSite 工作室品牌網站製作服務站

正式公開網址：<https://gavin1424.github.io/>

這是 AI 網站接案工作室目前真正對外使用的獨立銷售網站。暖線拼布工作室與留白陶所只作為公開設計案例，不是本服務站的品牌首頁，也不代表真實成交客戶。

## 核心訴求

- 品牌：StudioSite
- 中文副標：專業形象網站設計
- 首頁主標：一次建站，完整交付
- 方案：7 天工作室網站上線包
- 正式售價：NT$12,800
- 前三位案例合作價：NT$9,800
- 付款：開始前 50% 訂金，確認完成後 50% 尾款
- 時程：必要素材完整後開始計算 7 個工作天
- 修改：兩次彙整後的文字與圖片修改

## 對外頁面

- `index.html`：服務銷售首頁
- `privacy.html`：網站方案詢問隱私權說明
- `service-rules.html`：服務範圍、付款、時程、修改與交付規則
- `404.html`：找不到頁面
- `sitemap.xml`、`robots.txt`：搜尋引擎設定

## 正式詢問入口

所有 `data-service-contact` 連結由 `site-config.js` 的以下設定集中管理：

- `service.contactUrl`
- `service.inquiryFormUrl`
- `service.privacyContact`

目前三者都指向已建立的 Google 方案詢問表。Email、LINE 與公開社群仍標記為「暫不使用」，網站不會顯示空白或假聯絡按鈕。

## v2 完整視覺改版

2026-07-24 依高級暖白、金色點綴與桌面三欄 Hero 參考圖完成：

- 首頁主訴求改為「一次建站，完整交付」
- 1440px Hero 採左文案、中裝置 Mockup、右價格卡
- 筆電與手機螢幕使用暖線拼布示範站的真實瀏覽器截圖
- Hero 場景為本專案新生成的無文字暖白石材場景
- 內容順序改為：優勢、適合對象、服務說明、方案範圍、流程、案例、價格、FAQ、CTA
- 手機使用漢堡選單，內容依閱讀順序改為單欄
- 所有動效支援 `prefers-reduced-motion`

主要 v2 圖片：

- `assets/hero-scene-v2.webp`
- `assets/warm-thread-desktop.webp`
- `assets/warm-thread-mobile.webp`
- `assets/case-studiosite-desktop.webp`
- `assets/case-studiosite-mobile.webp`
- `assets/case-liubai-desktop.webp`
- `assets/case-liubai-mobile.webp`
- `assets/service-og.webp`（1200 × 630）

## SEO 與索引

- 正式服務首頁：`index, follow`
- canonical：`https://gavin1424.github.io/`
- Open Graph：`assets/service-og.webp`
- JSON-LD：`Service`
- 暖線拼布與留白陶所兩個虛構品牌示範站均維持 `noindex, follow`

## 公開案例

- 暖線拼布工作室：<https://gavin1424.github.io/warm-thread-patchwork-demo/>
- 留白陶所：<https://gavin1424.github.io/liubai-pottery-studio-demo/>

兩者均在案例卡中清楚標示為商用網站設計示範或概念展示，不計入真實成交客戶數。

## 本機檢查

本專案為原生 HTML、CSS、JavaScript，不需要安裝套件。可在專案目錄啟動靜態檔案伺服器後，用真實 viewport 檢查：

- 1440 × 900
- 1024 × 768
- 768 × 1024
- 390 × 844
- 360 × 800

最終品質記錄：

- `design-qa.md`
- `網站服務銷售頁_v2_完整視覺改版_QA.md`
