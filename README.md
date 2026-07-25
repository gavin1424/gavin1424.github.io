# 日和手作室｜手作課程網站設計示範案例

「日和手作室」是 StudioSite 的第三個商用網站設計示範案例。品牌、地址、課程、價格與聯絡資料均為情境展示用途，不代表真實營業中的工作室。

## 網站定位

- 類型：手作課程、體驗活動與生活選物工作室
- 視覺：奶油紙張、鼠尾草綠、蜜桃橘、牛皮紙、拍立得、撕紙與紙膠帶
- 目標：示範一頁式工作室網站如何整理課程、品牌氣質、體驗流程、常見問題與預約入口

## 技術

- HTML5
- CSS3
- 原生 JavaScript
- GitHub Pages
- 本地 WebP 圖片
- Google Fonts：Noto Serif TC、Noto Sans TC

## 主要檔案

```text
03_日和手作室/
├─ index.html
├─ styles.css
├─ script.js
├─ favicon.svg
├─ 404.html
├─ robots.txt
├─ sitemap.xml
├─ design-qa.md
├─ assets/
│  ├─ images/
│  └─ icons/
└─ screenshots/       # 本機 QA 截圖，不推送至公開網站
```

## 本機開啟

可直接開啟 `index.html`。若需要完整測試相對路徑與 404 行為，請在本資料夾啟動靜態伺服器，例如：

```powershell
python -m http.server 8772 --bind 127.0.0.1
```

## 內容替換

- 品牌文字、課程資料與 FAQ：編輯 `index.html`
- 色彩、字體與斷點：編輯 `styles.css` 的 `:root` 與 media queries
- 選單、收藏、FAQ、示範預約：編輯 `script.js`
- 攝影素材：將新圖壓縮為 WebP 後替換 `assets/images/` 同名檔案
- SEO：修改 `index.html` 的 title、description、canonical、Open Graph、Twitter Card 與 JSON-LD

## 示範模式

- 所有預約、LINE、Instagram、隱私權與服務條款按鈕只顯示示範提示。
- 不會送出、儲存或外傳訪客資料。
- Footer 清楚標示品牌及聯絡資料為示範用途。

## 部署

- Repository：`gavin1424/gavin1424.github.io`
- Branch：`main`
- GitHub Pages：main branch / root
- 正式網址：<https://gavin1424.github.io/>

更新網站後：

```powershell
git add .
git commit -m "Update handmade studio demo website"
git push origin main
```

GitHub Pages 會從 `main` 分支根目錄重新發布。
