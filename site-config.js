/*
 * 網站的品牌、聯絡方式、課程、作品與 SEO 都集中在這裡。
 * 品牌課程聯絡與網站製作服務聯絡是兩套獨立設定，請勿混用。
 */
window.SITE_CONFIG = {
  DEMO_MODE: true,

  brand: {
    name: "暖線拼布工作室",
    englishName: "Warm Thread Studio",
    headline: "把喜歡的布，縫成生活裡的溫度",
    subheadline: "小班制拼布與生活布作課程，從零開始，也能親手完成屬於自己的作品。",
    description: "提供成人拼布入門、生活布作與小班制手作課程，讓沒有基礎的人也能完成自己的第一件作品。"
  },

  service: {
    name: "免主機月租工作室網站",
    headline: "一次建置，免主機月租的工作室網站",
    subheadline: "把品牌介紹、服務內容、作品和 LINE 詢問整理在同一個手機友善頁面，不需要維護 WordPress，也沒有虛擬主機月租。",
    servicePageUrl: "https://gavin1424.github.io/",
    contactUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfVcI9_CYmtl0oClrnvknq641MJnTnHHtw4cArZhCV5k9rmkA/viewform",
    email: "",
    emailStatus: "暫不使用",
    publicSocialUrl: "",
    publicSocialStatus: "暫不使用",
    inquiryFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfVcI9_CYmtl0oClrnvknq641MJnTnHHtw4cArZhCV5k9rmkA/viewform",
    privacyContact: "https://docs.google.com/forms/d/e/1FAIpQLSfVcI9_CYmtl0oClrnvknq641MJnTnHHtw4cArZhCV5k9rmkA/viewform",
    formalPrice: "NT$12,800",
    casePrice: "NT$9,800",
    contactMissingMessage: "網站製作聯絡方式尚待設定；若你是收到此示範連結，請直接回覆傳送連結的對話。"
  },

  seo: {
    baseUrl: "https://gavin1424.github.io/",
    pages: {
      home: {
        title: "暖線拼布工作室｜拼布課程網站設計示範案例",
        description: "暖線拼布工作室網站設計示範案例：以手機友善的一頁式網站，呈現零基礎拼布課程、作品、上課流程與預約入口。",
        robots: "noindex, follow",
        path: "",
        ogImage: "assets/hero-patchwork.jpg",
        ogImageAlt: "暖色布料工作桌上的拼布製作情境",
        type: "website",
        schema: {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "暖線拼布工作室｜網站設計示範案例",
          "description": "小班制拼布與生活布作課程的商用網站設計示範案例。",
          "inLanguage": "zh-Hant",
          "isFamilyFriendly": true
        }
      },
      service: {
        title: "免主機月租工作室網站｜網站製作方案",
        description: "一次建置的手機友善工作室網站方案，整合品牌介紹、服務、作品與詢問入口；可選免費網址，自有網域費用另計。",
        robots: "index, follow",
        path: "",
        ogImage: "assets/service-og.jpg",
        ogImageAlt: "免主機月租工作室網站製作方案示意",
        type: "website",
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "免主機月租工作室網站",
          "description": "為個人工作室整理品牌介紹、服務內容、作品與詢問入口的手機友善網站建置服務。",
          "areaServed": "TW",
          "offers": [
            {
              "@type": "Offer",
              "priceCurrency": "TWD",
              "price": "12800",
              "description": "7 天工作室網站上線包正式售價"
            },
            {
              "@type": "Offer",
              "priceCurrency": "TWD",
              "price": "9800",
              "description": "前三位案例客戶優惠價"
            }
          ]
        }
      }
    }
  },

  theme: {
    ink: "#2f2b27",
    paper: "#f7f1e8",
    cream: "#fffaf3",
    clay: "#a45f47",
    clayDark: "#7e4433",
    olive: "#66705b",
    blue: "#647887"
  },

  contact: {
    lineUrl: "",
    phone: "",
    email: "",
    instagramUrl: "",
    facebookUrl: "",
    formEndpoint: ""
  },

  demoMessage: "這是示範網站，品牌課程的 LINE、電話與表單尚未串接。目前不會開啟假帳號、不會撥打假號碼，也不會儲存或傳送任何資料。",

  courses: [
    {
      order: "01",
      name: "拼布入門體驗課",
      summary: "適合第一次接觸拼布的人，從配色與基本縫法開始，完成一件小型實用作品。",
      audience: "完全沒有拼布經驗，想先輕鬆體驗手作的人",
      feature: "認識工具、基礎拼接與簡單收邊",
      duration: "約 2.5–3 小時",
      note: "課程內容與費用請洽詢"
    },
    {
      order: "02",
      name: "生活布作基礎班",
      summary: "學習布料搭配、裁切、車縫與基本收邊，逐步建立能獨立完成布作的基本能力。",
      audience: "想系統練習，並製作日常實用布品的人",
      feature: "布料搭配、裁切、車縫與收邊",
      duration: "依作品安排 2–3 堂",
      note: "課程內容與費用請洽詢"
    },
    {
      order: "03",
      name: "個人作品進階班",
      summary: "依照想完成的包款、掛飾或居家布品安排指導，把自己的想法一步步做成作品。",
      audience: "已有基礎，想挑戰指定作品或調整版型的人",
      feature: "依作品規劃步驟、技巧拆解與個別指導",
      duration: "依作品難度與進度安排",
      note: "課程內容與費用請洽詢"
    }
  ],

  works: [
    {
      name: "日常拼接手提包",
      category: "拼布包",
      description: "以柔和幾何色塊組合出耐看的日常配色。",
      visualClass: "work-bag",
      image: "assets/works/patchwork-bag.jpg",
      alt: "米白、陶土、橄欖綠與藍灰色幾何拼接手提包情境影像"
    },
    {
      name: "暖色餐桌杯墊",
      category: "杯墊",
      description: "從小尺寸練習布料對位與整齊壓線。",
      visualClass: "work-coaster",
      image: "assets/works/patchwork-coasters.jpg",
      alt: "四個暖色幾何拼布杯墊與素色杯子的情境影像"
    },
    {
      name: "幾何山景壁飾",
      category: "壁飾",
      description: "用布料層次與留白，為空間增加安靜的手作質感。",
      visualClass: "work-hanging",
      image: "assets/works/patchwork-wall-hanging.jpg",
      alt: "掛在木條上的暖色幾何拼布壁飾情境影像"
    },
    {
      name: "隨身拉鍊收納袋",
      category: "小型收納袋",
      description: "練習拉鍊、內裡與袋型結構，完成日常實用小物。",
      visualClass: "work-pouch",
      image: "assets/works/patchwork-pouch.jpg",
      alt: "暖色拼布拉鍊收納袋與木尺的情境影像"
    },
    {
      name: "餐桌與抱枕布品",
      category: "居家布品",
      description: "讓配色與材質自然融入餐桌和客廳的日常風景。",
      visualClass: "work-home",
      image: "assets/works/patchwork-home-textiles.jpg",
      alt: "暖色拼布桌巾與抱枕套的居家情境影像"
    },
    {
      name: "冬日手作掛飾",
      category: "節慶手作",
      description: "以小巧結構練習曲線與填充，留下節日的手作溫度。",
      visualClass: "work-seasonal",
      image: "assets/works/patchwork-seasonal-ornaments.jpg",
      alt: "三個暖色布製節慶掛飾的情境影像"
    }
  ],

  faqs: [
    {
      question: "完全沒有基礎可以參加嗎？",
      answer: "可以。拼布入門體驗課從工具、布料方向與基本縫法開始，會把每個步驟拆開示範，適合第一次接觸手作的人。"
    },
    {
      question: "需要自己準備工具嗎？",
      answer: "常用工具與材料會依課程內容事先說明。若課程可提供共用工具，也會在確認日期時一併告知，不需要在報名前一次買齊。"
    },
    {
      question: "一堂課大約多久？",
      answer: "入門體驗約 2.5–3 小時；基礎班與進階班會依作品難度安排堂數與時間。實際時長以預約時確認的課程內容為準。"
    },
    {
      question: "沒有完成作品怎麼辦？",
      answer: "課程會以能完成作品為目標安排進度。若當天仍有細節未完成，老師會說明後續步驟與練習方式，並依作品狀況協助安排。"
    },
    {
      question: "可以一個人報名嗎？",
      answer: "可以，一個人也能預約。確認日期時會說明當日課程形式與名額，讓你在適合自己的節奏中完成練習。"
    },
    {
      question: "是否接受團體包班？",
      answer: "可先提供人數、希望日期、程度與想完成的作品，再依教學空間、材料準備與課程時間確認是否適合安排。"
    },
    {
      question: "如何確認日期與名額？",
      answer: "選好想了解的課程後，以 LINE 說明你的手作經驗與偏好時段；收到課程內容、日期與準備事項的確認後，就完成預約。"
    }
  ]
};
