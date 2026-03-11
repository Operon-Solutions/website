import type { Dictionary } from "./en";

const zhTW: Dictionary = {
  meta: {
    title: "Operon | AI 智能製造系統",
    description:
      "專為製造業與化學工程定制的 AI 系統。駐場工程師、P&ID 識別、知識圖譜及自主工作流。",
  },

  navbar: {
    solutions: "解決方案",
    company: "關於我們",
    partnerships: "合作夥伴",
    signIn: "登入",
    industries: "產業",
    solutionsFor: "解決方案",
    industriesList: [
      {
        name: "化學工程",
        href: "/industries/chemical-engineering",
        solutions: [
          { label: "P&ID 識別", href: "/docs/pid-recognition" },
          { label: "CAD / P&ID AI Agent", href: "/docs/pid-agent" },
          { label: "模擬軟體原生外掛", href: "/docs/native-plugin" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
          { label: "預測性維護", href: "/docs/predictive-maintenance" },
          { label: "駐場工程師", href: "/docs/on-site-engineers" },
        ],
      },
      {
        name: "石油與天然氣",
        href: "/industries/oil-gas",
        solutions: [
          { label: "P&ID 識別", href: "/docs/pid-recognition" },
          { label: "CAD / P&ID AI Agent", href: "/docs/pid-agent" },
          { label: "安全與合規", href: "/docs/safety-compliance" },
          { label: "預測性維護", href: "/docs/predictive-maintenance" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
          { label: "駐場工程師", href: "/docs/on-site-engineers" },
        ],
      },
      {
        name: "電子製造",
        href: "/industries/electronics-manufacturing",
        solutions: [
          { label: "電路圖識別", href: "/docs/schematic-recognition" },
          { label: "知識圖譜", href: "/docs/knowledge-graphs" },
          { label: "良率優化", href: "/docs/yield-optimization" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
          { label: "供應鏈智能", href: "/docs/supply-chain-intelligence" },
          { label: "駐場工程師", href: "/docs/on-site-engineers" },
        ],
      },
      {
        name: "水泥製造",
        href: "/industries/cement-manufacturing",
        solutions: [
          { label: "窯爐優化", href: "/docs/kiln-optimization" },
          { label: "品質預測", href: "/docs/quality-prediction" },
          { label: "能源管理", href: "/docs/energy-management" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
          { label: "預測性維護", href: "/docs/predictive-maintenance" },
          { label: "駐場工程師", href: "/docs/on-site-engineers" },
        ],
      },
    ],
    companyLinks: [
      {
        title: "公司",
        items: [
          { label: "關於我們", href: "/about" },
          { label: "加入我們", href: "/careers" },
          { label: "聯絡我們", href: "#contact" },
        ],
      },
      {
        title: "資源",
        items: [
          { label: "文件", href: "/documentation" },

          { label: "部落格", href: "/blog" },
        ],
      },
    ],
  },

  hero: {
    headline1: "Operon 為製造業量身打造",
    headline2: "的智慧 AI 解決方案",
    talkToUs: "與我們聯繫",
    seeHow: "了解運作方式",
  },

  features: {
    transformHeading: "讓營運自動轉型，",
    transformHeading2: "全面升級。",
    totalPids: "P&ID 總處理數量",
    avgTime: "平均時間縮減",
    howItWorks: "核心使命",
    sectionHeading: [
      { text: "打造可以真正" },
      { text: "理解"},
      { text: "您產業的" },
      { text: " AI 系統"},
      { text: "，優化最" },
      { text: "複雜"},
      { text: "的工業流程。" },
    ],
    sectionSubheading: "三項熱門服務：",
    learnMore: "了解更多",
    items: [
      {
        label: "服務(1) - PFD、P&ID 圖面解析",
        tag: "化工與製程產業",
        slug: "pid-recognition",
        title: "一鍵解析 P&ID，數據即刻到手。",
        description:
          "上傳圖面或PDF檔即可自動辨識管線、設備與儀控元件，準確率達 97%。工程師不再需要手動抄取資料，快速檢查便可直接取得結構化數據進行後續分析。",
      },
      {
        label: "服務(2) - PFD、CAD / P&ID AI 助手",
        tag: "化工與製程產業",
        slug: "pid-agent",
        title: "讓 AI 幫你架構工程製圖。",
        description:
          "專為化工領域打造的智慧助手，能根據製程需求自動生成 PFD 與 P&ID，大幅縮短設計時程，讓團隊專注在決策而非繪圖。",
      },
      {
        label: "服務(3) - AI 原生外掛",
        tag: "化工與製程產業",
        slug: "native-plugin",
        title: "將 AI 無縫整合到你現有的模擬軟體中",
        description:
          "以本地部署的方式，將 AI 能力直接嵌入 Aspen、UniSim、AVEVA 等主流製程模擬平台，不改變既有工作流程，即刻提升效率。",
      },
    ],
    eligible: "合格",
    detected: "2024年10月8日偵測到",
    componentsDetected: "偵測到的元件",
    heatExchanger: "熱交換器",
    controlValve: "控制閥",
    pressureRelief: "洩壓閥",
    accuracy: "準確度",
    confidenceScore: "97.3% 信心分數",
    source: "來源",
    viewedSafety: "查看安全規範 2 次",
    scrolledSpecs: "捲動規格兩次",
    modifiedPid: "修改 P&ID 標記 4 次",
    knowledgePattern: "偵測到知識模式",
    startedCrossRef: "開始文件交叉引用",
    autoLinked: "自動關聯 23 個相關 P&ID",
    reportGenerated: "報告已生成",
    safetyReport: "Q4 安全合規報告已自動生成。",
    alert: "警報",
    alertDesc: "偵測到製程流中 2 個與歷史模式匹配的異常。",
    optimizingWorkflow: "正在優化工作流序列",
    aiWorkflow: "AI 工作流",
    aiWorkflowDesc: "根據預測的設備壓力安排預防性維護。",
  },

  platform: {
    popularServices: "熱門服務",
    heading: "產業專屬的 AI 解決方案",
    readMore: "了解更多",
    requestThis: "諮詢此方案",
    requestable: "可諮詢",
    available: "已上線",
    industries: [
      {
        label: "化學工程",
        capabilities: [
          {
            icon: "monitor",
            title: "P&ID 識別",
            slug: "pid-recognition",
            description:
              "在幾分鐘內以 97%+ 的準確度處理數千張工程圖紙",
          },
          {
            icon: "beaker",
            title: "CAD / P&ID AI 助手",
            slug: "pid-agent",
            description:
              "專為化工領域打造的 AI 助手，根據製程需求自動生成 PFD 與 P&ID，加速設計週期",
          },
          {
            icon: "person",
            title: "駐場工程師",
            slug: "on-site-engineers",
            description:
              "駐場專家學習您的工作流程，在 6 週內部署定制 AI",
          },
          {
            icon: "cpu",
            title: "製程模擬軟體原生外掛",
            slug: "native-plugin",
            description:
              "將 AI 能力直接嵌入 Aspen、UniSim、AVEVA 等主流製程模擬平台",
          },
          {
            icon: "arrows",
            title: "自主工作流",
            slug: "agentic-workflows",
            description:
              "自主代理處理文件、合規檢查和報告生成",
          },
          {
            icon: "cog",
            title: "預測性維護",
            slug: "predictive-maintenance",
            description:
              "透過振動、溫度與製程數據，提前預測設備故障",
          },
        ],
      },
      {
        label: "石油與天然氣產業",
        capabilities: [
          {
            icon: "monitor",
            title: "P&ID 識別",
            slug: "pid-recognition",
            description:
              "將上下游資產的傳統管路和儀表圖數位化",
          },
          {
            icon: "beaker",
            title: "CAD / P&ID AI Agent",
            slug: "pid-agent",
            description:
              "AI 助手根據製程描述、模擬數據或草圖自動生成 P&ID 圖",
          },
          {
            icon: "shield",
            title: "安全與合規",
            slug: "safety-compliance",
            description:
              "自動化 HAZOP 分析及符合 API 和 ASME 標準的法規合規檢查",
          },
          {
            icon: "person",
            title: "駐場工程師",
            slug: "on-site-engineers-oil-gas",
            description:
              "嵌入您營運團隊的駐場專家，快速部署 AI",
          },
          {
            icon: "cog",
            title: "預測性維護",
            slug: "predictive-maintenance",
            description:
              "透過振動、溫度與製程數據，提前預測設備故障",
          },
          {
            icon: "arrows",
            title: "自主工作流",
            slug: "agentic-workflows-oil-gas",
            description:
              "用於許可處理、檢查排程和現場報告的自主代理",
          },
        ],
      },
      {
        label: "電子製造",
        capabilities: [
          {
            icon: "cpu",
            title: "電路圖識別",
            slug: "schematic-recognition",
            description:
              "以元件級準確度數位化電路圖和 PCB 佈局",
          },
          {
            icon: "globe",
            title: "知識圖譜",
            slug: "knowledge-graphs-electronics",
            description:
              "將 BOM、數據表和測試報告連接為智能層",
          },
          {
            icon: "person",
            title: "駐場工程師",
            slug: "on-site-engineers-electronics",
            description:
              "與您的晶圓和組裝工作流程整合的駐場專家",
          },
          {
            icon: "chart",
            title: "良率優化",
            slug: "yield-optimization",
            description:
              "找出缺陷根本原因並優化製程參數以最大化良率",
          },
          {
            icon: "arrows",
            title: "自主工作流",
            slug: "agentic-workflows-electronics",
            description:
              "自動化品質檢驗、批次追蹤和合規文件",
          },
          {
            icon: "clipboard",
            title: "供應鏈智能",
            slug: "supply-chain-intelligence",
            description:
              "即時元件供應追蹤和替代零件推薦",
          },
        ],
      },
      {
        label: "水泥製造",
        capabilities: [
          {
            icon: "monitor",
            title: "窯爐優化",
            slug: "kiln-optimization",
            description:
              "以 AI 驅動旋窯溫度與進料速率優化，穩定熟料品質",
          },
          {
            icon: "chart",
            title: "品質預測",
            slug: "quality-prediction",
            description:
              "透過原料配比和製程數據即時預測水泥強度與成分",
          },
          {
            icon: "person",
            title: "駐場工程師",
            slug: "on-site-engineers-cement",
            description:
              "熟悉您工廠配置、原料特性與磨機迴路的駐場專家",
          },
          {
            icon: "bolt",
            title: "能源管理",
            slug: "energy-management",
            description:
              "全面優化燒成與研磨製程的熱能與電力消耗",
          },
          {
            icon: "arrows",
            title: "自主工作流",
            slug: "agentic-workflows-cement",
            description:
              "自動化環保合規申報、維護排程與交接班管理",
          },
          {
            icon: "cog",
            title: "預測性維護",
            slug: "predictive-maintenance",
            description:
              "透過振動、溫度與製程數據，提前預測破碎機、磨機和窯爐的設備故障",
          },
        ],
      },
    ],
  },

  showcase: {
    items: [
      {
        title: "全面理解您的工廠",
        description:
          "數位化 P&ID、串連文件、建構知識圖譜。將數十年的工程資料轉化為結構化、可查詢的智能。",
      },
      {
        title: "預測與預防",
        description:
          "設備故障、合規缺口、模擬偏移——在問題發生前就被發現。基於您實際製程資料訓練的 AI，而非通用基準。",
      },
      {
        title: "數週內上線",
        description:
          "駐場工程師深入了解您的工作流程，為您的工廠量身配置 AI。六週內見到生產成果，而非長達一年的整合專案。",
      },
    ],
    pidScanner: "pid-scanner",
    components: "12,847 個元件",
    accuracyLabel: "97.3% 準確度",
    processSim: "equipment-health",
    feedStream: "即時",
    springConfig: "警告",
    cartAid: "C-201 \u00B7 主壓縮機",
    returnCost: "偵測到軸承退化",
    silMessage:
      "預估 3\u20136 週內需維護——建議排入下次計畫停機",
    purchaseSuccessful: "正常",
    agentLabel: "正式部署",
    agentLabel2: "deployment.log",
    activeCount: "第 4 週 / 共 6 週",
    agents: [
      { name: "第 1 週", status: "資料整合與歷史資料系統對接" },
      { name: "第 2 週", status: "以工廠資料訓練模型" },
      { name: "第 3 週", status: "驗證與操作員審查" },
    ],
  },

  faq: {
    label: "常見問題",
    heading: "常見問答",
    items: [
      {
        q: "這與通用 AI 工具有何不同？",
        a: "與通用 AI 不同，Operon 專為化學工程而建。我們的模型專為製程工業文件打造——P&ID、製程流程圖和工程標準。我們派遣了解您產業的工程師到現場。",
      },
      {
        q: "使用 Operon 需要技術專業知識嗎？",
        a: "不需要。我們的駐場工程師處理技術實施。僅需一個配置變更即可安裝我們的連接器。AI 會自動學習您的營運。大多數團隊無需任何技術開銷即可自行管理一切。",
      },
      {
        q: "這適用於我特定類型的設施嗎？",
        a: "我們已在煉油廠、化工廠、製藥製造和特種化學品設施部署。我們的 AI 適應您特定的設備、製程和文件標準。",
      },
      {
        q: "我需要花多少時間管理這個系統？",
        a: "極少。初始部署後（通常不到 6 週），系統自主運行。我們的代理處理文件、合規檢查和報告。您專注於高層次決策。",
      },
      {
        q: "如果我已經在使用其他平台怎麼辦？",
        a: "Operon 與您現有的工具整合——UniSim、Aspen、SAP 等。我們增強您現有的工作流程而非取代它。我們的知識圖譜連接到您現有的文件管理系統。",
      },
    ],
  },

  cta: {
    lotsToShow: "精彩內容等您探索",
    heading: "讓您的工廠營運自動轉型",
    description:
      "讓我們向您展示真正的 AI 驅動工程智能是什麼樣子。幾分鐘內您就能知道是否適合。",
    talkToUs: "與我們聯繫",
    seeHow: "了解運作方式",
  },

  footer: {
    copyright: "Operon Solutions. 版權所有。",
    cols: [
      {
        title: "解決方案",
        links: [
          { label: "P&ID 識別", href: "/docs/pid-recognition" },
          { label: "CAD / P&ID AI Agent", href: "/docs/pid-agent" },
          { label: "模擬軟體原生外掛", href: "/docs/native-plugin" },
          { label: "預測性維護", href: "/docs/predictive-maintenance" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
        ],
      },
      {
        title: "資源",
        links: [
          { label: "文件", href: "/documentation" },

          { label: "部落格", href: "/blog" },
        ],
      },
      {
        title: "公司",
        links: [
          { label: "關於我們", href: "/about" },
          { label: "加入我們", href: "/careers" },
          { label: "聯絡我們", href: "#contact" },
          { label: "法律聲明", href: "#" },
        ],
      },
    ],
  },

  docs: {
    platform: "平台",
    features: "功能",
    home: "首頁",
    readyToStart: "準備好開始了嗎？",
    readyDesc:
      "我們的駐場工程師可以在第一週內讓您上線運行。",
    bookDemo: "預約展示",
    exploreCaps: "探索功能",
    comingSoon: "開發中",
    pageBeingWritten: "需要這項解決方案嗎？",
    pageBeingWrittenDesc:
      "我們正在評估這項功能，很想聽聽您的想法。如果這項方案能解決您團隊的實際問題，請告訴我們——您的回饋會直接影響我們的開發方向。",
    interestQuestion: "這對您的營運有幫助嗎？",
    voteYes: "是的，我需要這個",
    voteMaybe: "有興趣，想了解更多",
    thankYou: "感謝您的回饋！",
    thankYouDesc: "我們已記下您的需求。想和團隊聊聊您的使用情境嗎？",
    scheduleCall: "預約通話",
    orReachOut: "或留下您的信箱，我們會主動聯繫",
    emailSubmit: "送出",
    backToPlatform: "返回平台",
    notFound: "找不到頁面",
    minRead: "分鐘閱讀",
    entries: {
      "pid-recognition": {
        title: "P&ID 圖面數位化",
        subtitle: "透過物件偵測與拓撲探索，從流程圖面中提取結構化工程數據",
        industry: "化學工程",
        readTime: "6 分鐘閱讀",
        content: `
## 問題

P&ID 與製程流程圖包含了工廠設計的關鍵資訊 — 每一個單元操作、儀器、閥門，以及它們之間的連接關係。但實際上，這些資訊大多被鎖在靜態圖檔裡：掃描的紙本圖面、PDF、或舊版 CAD 匯出檔。

當工程師需要使用這些數據 — 進行安全審查、工廠改建或模擬建模時 — 他們只能手動閱讀圖面，再把資訊重新輸入試算表或資料庫。這個過程緩慢、容易出錯，而且無法規模化。

![化工製程 P&ID 圖面範例](/blog/plant-pid.webp)

---

## 我們做什麼

我們的目標是**流程圖面數位化**：從 P&ID 或 PFD 的圖面中提取其拓撲結構，並以圖 (graph) 的格式儲存為結構化、機器可讀的數據。

具體來說，這意味著辨識：

- 圖面上**有什麼**（設備、儀器、閥門、管線）
- 每個元件的**位置**在哪裡
- 它們**如何連接**（製程拓撲）
- **文字內容**是什麼（標籤號、管線號、註記、表格）

輸出不只是一份偵測到的符號清單 — 而是一個**捕捉元件間連接性與關係的圖結構**，這才是讓數據在後續工程工作中真正有用的關鍵。

---

## 運作方式

### 1. 上傳與前處理

上傳 PDF、TIFF、DWG、PNG 或掃描紙本格式的 P&ID 圖面。前處理管線負責糾偏、去噪、多頁分割與解析度標準化。

### 2. 物件偵測

機器學習模型辨識流程圖上每個單元操作、儀器和閥門的位置與類型。我們在大量標註的化工流程圖與 P&ID 數據集上進行訓練，涵蓋 ISA 5.1、ISO 14617 及多種專有符號集。

模型偵測：

- **設備** — 容器、槽、塔、熱交換器、反應器、泵
- **儀器** — 壓力變送器、流量計、溫度指示器、控制迴路
- **閥門** — 控制閥、止回閥、洩壓閥、手動閥
- **管線** — 製程管線、公用管線、儀表信號線

### 3. 文字與表格辨識

OCR 提取標籤號、管線號、設備標籤、規格斷點及表格數據（標題欄、設備表）。這些資訊會連結回對應的符號。

### 4. 拓撲提取

這是核心步驟。路徑探索演算法追蹤偵測到的元件之間的連接 — 沿著管線、信號線和製程流向，重建流程圖的**完整拓撲結構**。

結果：每個元件是一個節點，每個連接是一條邊，圖結構捕捉了實際的製程架構。

![Operon P&ID 識別示範 — 偵測到的元件、標籤號與信心分數](/blog/plant-pid-ai.webp)

### 5. 匯出

數位化的數據可以多種格式匯出：

- **圖格式** — 用於工程資料庫與知識系統
- **CSV / JSON / XML** — 與現有工具整合
- **DEXPI 相容格式** — 與標準化系統互通

---



## 我們的深度學習方法

### 為什麼用深度學習

傳統的 P&ID 數位化方法依賴基於規則的模板匹配 — 手動定義每種符號的外觀，再撰寫啟發式規則來尋找它們。這在實際應用中很快就會失效，因為 P&ID 的繪製方式存在巨大差異。不同公司、不同年代、不同 CAD 工具，甚至同一公司的不同繪圖員，都會產生視覺上截然不同的圖面。某張圖上的熱交換器，可能和另一張圖上的完全不像。

深度學習從根本上解決了這個問題：它從範例中學習辨識符號，而非依靠規則。只要有足夠的標註訓練數據，卷積神經網路就能跨繪圖風格進行泛化，處理掃描文件中的雜訊與退化，並偵測不同尺度和方向的符號。

### 物件偵測架構

我們系統的核心是一個為物件偵測任務訓練的深度卷積神經網路 — 這個任務要同時定位和分類圖像中的多個物件。這與圖像分類（問「這張圖是什麼？」）有本質區別。物件偵測在一次前向傳播中回答：「所有東西在哪裡，每個東西是什麼？」

現代物件偵測架構將圖像劃分為區域網格，並對每個區域預測：是否包含物件、該物件屬於什麼類別、以及精確的邊界框座標。網路學習層次化特徵：早期層偵測邊緣和角落等低階模式，深層則將這些組合成對應工程符號（如閥門、儀器和設備）的高階表示。

我們使用基於錨框的偵測框架，在多個尺度上生成候選區域 — 這對 P&ID 至關重要，因為同一張圖上可能同時出現小型儀表標籤和大型容器。模型為每個偵測輸出信心分數，讓我們可以過濾結果，並將不確定的案例標記供人工審查。

### 建立訓練數據集

將深度學習應用於 P&ID 辨識，最大的瓶頸不是模型架構 — 而是數據。與自然圖像數據集（有數百萬張標註照片）不同，目前並不存在大型的公開標註工程圖面數據集。

我們自行建立了數據集，從多元來源收集並標註 P&ID — 不同產業、不同標準（ISA 5.1、ISO 14617、公司專有符號庫）、不同年代、不同輸出格式（CAD 匯出、掃描紙本、PDF 列印）。每張圖上的每個符號都以邊界框和類別標籤手動標註。

這種多樣性是刻意的。P&ID 存在高度的類內變異 — 同一類型的設備可以有許多不同的繪製方式，取決於標準、公司或個別繪圖員。在狹窄的數據集上訓練，產出的模型只能處理與訓練數據相似的圖面。在廣泛、多樣的數據集上訓練，才能產出具泛化能力的模型。

我們還應用數據增強技術 — 旋轉、縮放、雜訊注入、對比度變化 — 以進一步提升穩健性，尤其針對圖像品質較差的退化掃描文件。

### 應對 P&ID 的獨特挑戰

P&ID 帶來了幾個標準物件偵測模型並非為之設計的挑戰：

- **密集、重疊的符號** — 與自然圖像中物件通常被背景分隔不同，P&ID 中的符號緊密排列且管線交錯。模型必須區分重疊元素，而不將一個符號誤認為另一個。
- **小型文字與標籤** — 如「FIC-13310」這樣的標籤號是關鍵資訊，但只佔極少像素。我們使用專門針對工程標註風格調優的獨立文字偵測與 OCR 管線。
- **類別不平衡** — 某些符號類型（如管線）在每張圖上出現數千次，而其他類型（如洩壓閥）可能只出現一兩次。我們在訓練中使用加權損失函數和採樣策略，防止模型忽略稀有類別。
- **管線連接性** — 偵測符號只是問題的一半。理解哪些符號連接到哪些符號，需要追蹤圖像中的管線和信號線。我們透過獨立的路徑探索演算法來處理，該演算法基於偵測到的符號位置和底層線段幾何進行運算。

### 持續改進

模型會隨時間不斷進步。隨著我們為更多客戶、跨更多產業處理更多 P&ID，我們持續擴充和精煉訓練數據集。人工審查中修正的偵測結果會回饋到訓練管線 — 這是一個標準的主動學習迴圈，能系統性地解決模型的弱點。

---

## 為什麼重要

手動 P&ID 審查是製程工程中最耗時的任務之一。一個專案可能涉及數百甚至數千張圖面，每張都需要有經驗的工程師仔細閱讀。

數位化改變了這一切：

- **速度** — 在手動審查幾張圖面的時間內，處理數百張
- **一致性** — 對每張圖面套用相同的偵測標準
- **可搜尋性** — 數位化後，可以在整個圖面庫中查詢設備、儀器和連接關係
- **自動化基礎** — 結構化的 P&ID 數據可支援自動合規檢查、跨版本變更追蹤，以及與模擬模型的整合

---

## 開始使用

如果您有興趣數位化您的 P&ID 圖庫，請與我們的團隊聯繫。我們會根據您現有的圖面與工程標準來配置系統。
`,
      },
      "pid-agent": {
        title: "CAD / P&ID AI Agent",
        subtitle: "專為化工領域打造的 AI 助手，根據製程需求自動生成 PFD 與 P&ID，加速設計週期",
        industry: "化學工程",
        readTime: "6 分鐘閱讀",
        content: `
## 問題

管路與儀表圖 (P&ID) 的開發是製程工程中最關鍵、也最耗費人力的環節之一。一個資本項目可能需要數百張 P&ID 圖面，每一張都要求工程師具備深厚的符號標準知識（ISA 5.1、ISO 14617）、製程控制理念，以及對公司內部慣例的熟悉。

初級工程師花數週繪製圖面，資深工程師花數週審查。每次修訂、每個項目、每座工廠都在重複這個循環。

近年學術研究已證明，AI 能有效解決這個問題。研究者發現，製程流程圖 (PFD) 與 P&ID 之間的關係可以被建模為一種翻譯任務 \u2014 給定製程描述，預測相應的控制結構、儀表配置和管路細節。這些成果指向一個未來：AI 能在整個設計過程中輔助工程師，而不僅限於文件階段。

---

## CAD / P&ID AI Agent的功能

Operon 的 CAD / P&ID AI Agent是一款**專為化工領域打造的 AI**，可從自然語言描述、模擬數據或草圖自動生成工程圖面。

工程師無需從空白圖紙開始，只需描述需求 \u2014 一套蒸餾分離系統、一個反應器進料系統、一組公用工程管匯 \u2014 助手即可生成符合標準的草圖，作為詳細設計的起點。

---

## 運作方式

### 1. 製程意圖擷取

助手接受多種輸入形式：

- **自然語言** \u2014 「設計一座蒸餾塔，包含回流罐、再沸器和冷凝器，用於苯-甲苯分離」
- **模擬數據** \u2014 直接從 Aspen HYSYS 或 UniSim 匯入流股數據
- **草圖** \u2014 上傳手繪草圖，助手會將其正式化

### 2. 圖面生成

助手生成的 P&ID 包含：

- **正確符號** \u2014 ISA 5.1、ISO 14617 或您公司的自定義符號庫
- **標籤編號** \u2014 遵循您設施的命名慣例
- **控制迴路** \u2014 根據製程需求和控制理念添加儀控設備
- **管線規格** \u2014 指定管線編號、管徑和規格斷點

在底層，助手使用基於真實工程圖面訓練的模型來理解 P&ID 的結構模式 \u2014 哪些儀表通常伴隨哪些設備、常見單元操作的控制迴路如何配置、標準的管路佈置方式等。

### 3. 迭代精煉

工程師審查草圖後，透過對話進行修改：

- 「在進料管線的控制閥加一條旁通」
- 「將熱交換器改為板框式」
- 「添加高壓跳脫的 SIS 儀控」

助手在迭代過程中保持對完整製程拓撲的理解。

### 4. 匯出與整合

匯出為標準格式：

- **AutoCAD DWG/DXF** \u2014 原生 CAD 整合
- **SVG/PDF** \u2014 用於文件審查
- **結構化數據** \u2014 設備清單、管線清單、儀器索引

生成的圖面可直接與我們的 P&ID 識別引擎整合，形成閉環：助手生成，識別引擎驗證，差異自動標記。

---

## 為什麼重要

傳統的 P&ID 設計流程是線性且緩慢的。工程師繪製、審查者標註、工程師修改，循環往復，每次迭代可能耗時數天。

CAD / P&ID AI Agent壓縮了這個週期：

- 圖面草案從數天縮短至**幾分鐘**
- 所有圖面**一致符合標準**
- 初級工程師**更快上手** \u2014 AI 處理機械性繪圖，讓他們專注於學習製程設計
- 資深工程師專注於**審查與最佳化**，而非核對標籤編號

這不是要取代工程師，而是要消除那些消耗工程時數卻不產生工程價值的重複性繪圖工作。

---

## 開始使用

CAD / P&ID AI Agent搭配我們的 P&ID 識別引擎和駐場工程師效果最佳。我們的團隊會根據您的符號庫、標籤慣例和設計標準進行配置。
`,
      },
      "native-plugin": {
        title: "製程模擬軟體原生外掛",
        subtitle: "將 AI 能力直接嵌入 Aspen、UniSim、AVEVA 等主流製程模擬平台",
        industry: "化學工程",
        readTime: "7 分鐘閱讀",
        content: `
## 什麼是原生外掛？

製程工程師的工作都在模擬軟體內完成 \u2014 Aspen HYSYS、Honeywell UniSim Design、AVEVA PRO/II。在模擬器和獨立 AI 平台之間切換會中斷工作流程。

Operon 的原生外掛**將 AI 能力直接嵌入您現有的模擬環境**。無需切換視窗，無需匯出匯入數據，AI 輔助就在您工作的地方。

> 「就像有一位資深製程工程師在 HYSYS 裡看著你的肩膀，在問題變大之前就發現它們。」

---

## 運作方式

### 1. 一鍵安裝

直接在您的模擬軟體中安裝外掛：

- **Aspen HYSYS / Aspen Plus** \u2014 透過 Aspen 生態系統的原生附加元件
- **Honeywell UniSim Design** \u2014 具完整 API 存取的擴充模組
- **AVEVA PRO/II** \u2014 具即時數據橋接的伴隨工具
- **CHEMCAD** \u2014 整合式側邊欄外掛

外掛在您的本機上運行 \u2014 模擬數據不會離開您的網路。

### 2. 情境式 AI 輔助

啟用外掛後，您在模擬器內即可獲得 AI 能力：

- **模型驗證** \u2014 即時對照 P&ID 數據和設計標準進行檢查
- **參數建議** \u2014 基於類似製程的 AI 推薦操作條件
- **異常偵測** \u2014 當模擬結果偏離預期模式時提醒
- **自動文件** \u2014 在建模的同時自動生成模擬基礎文件

### 3. 本地優先架構

所有 AI 推論透過我們的邊緣部署在本地運行：

- **無需雲端** \u2014 離線和隔離網路環境皆可使用
- **亞秒級回應** \u2014 無網路延遲
- **數據主權** \u2014 專有製程數據留在您的基礎設施上

---

## 支援平台

| 平台 | 外掛類型 | 主要功能 |
|------|---------|---------|
| Aspen HYSYS | 原生附加元件 | 模型驗證、參數優化、自動文件 |
| Aspen Plus | 原生附加元件 | 穩態驗證、敏感度分析輔助 |
| UniSim Design | 擴充模組 | 完整讀寫、即時 P&ID 同步、情境生成 |
| AVEVA PRO/II | 伴隨工具 | 交叉引用、模型比較、數據橋接 |
| CHEMCAD | 側邊欄外掛 | 設備尺寸驗證、流股分析 |

---

## 為什麼重要

大多數工程 AI 工具需要您匯出數據、上傳到獨立平台、等待結果，再手動套用回模型。這種摩擦讓工程師即使在有幫助的情況下也**不會使用 AI 工具**。

透過將 AI 直接嵌入模擬器，我們消除了每一步摩擦。

> 「我們在用 Operon 之前試過三個不同的 AI 平台。其他的都要求我們改變工作方式，Operon 的外掛只是讓我們現有的工作流程變得更聰明。」

---

## 開始使用

我們的駐場工程師負責完整的外掛安裝和配置 \u2014 通常在 2-3 週內完成。
`,
      },
      "predictive-maintenance": {
        title: "預測性維護",
        subtitle: "透過振動、溫度與製程數據，提前預測設備故障",
        industry: "化學工程",
        readTime: "7 分鐘閱讀",
        content: `
## 什麼是預測性維護？

非計劃性設備故障每年為製程產業造成**數十億美元**的生產損失、緊急維修和安全事故。傳統維護策略 \u2014 事後維修或按日曆排程 \u2014 要麼太遲，要麼浪費資源。

Operon 的預測性維護使用**基於您實際設備數據訓練的機器學習模型**，在故障發生前數天或數週預測故障。

> 「我們在主壓縮機軸承故障前 12 天就偵測到了。那次預測為我們節省了約 200 萬美元的生產損失。」

---

## 運作方式

### 1. 數據整合

Operon 連接您現有的數據源：

- **歷史數據庫** \u2014 PI、IP.21、DeltaV、Honeywell PHD
- **振動監測** \u2014 CSI、Bently Nevada、SKF
- **DCS/SCADA** \u2014 即時製程數據
- **CMMS** \u2014 維護記錄、工單、故障歷史

無需新感測器 \u2014 我們使用您已經收集的數據。

### 2. 設備專屬模型

Operon 為每台設備建立**專屬模型**：

- **旋轉設備** \u2014 泵、壓縮機、渦輪機、風機
- **熱交換器** \u2014 結垢預測、管路洩漏偵測
- **容器與塔** \u2014 腐蝕速率預測、塔盤損壞偵測
- **閥門** \u2014 控制閥黏滯、安全閥測試預測

每個模型學習該特定資產的正常操作範圍。

### 3. 故障預測

系統持續監測早期預警信號：

- **異常偵測** \u2014 識別正常行為的細微偏差
- **劣化追蹤** \u2014 監控設備的漸進式惡化
- **剩餘使用壽命** \u2014 估算需要干預的時間
- **根因分析** \u2014 建議可能的故障模式

### 4. 行動整合

預測結果連接到您現有的工作流程：自動在 CMMS 中生成工單、優先順序維護建議、備件庫存警報、整合停車檢修計劃。

---

## 效能

| 指標 | 數值 |
|------|------|
| 故障預測準確度 | 92%+ |
| 平均預警時間 | 故障前 14 天 |
| 誤報率 | <5% |
| 非計劃停機減少 | 40-60% |
| 維護成本降低 | 25-35% |

---

## 為什麼重要

透過學習您實際設備的行為 \u2014 而非通用故障曲線 \u2014 我們的模型能以您營運團隊所需的精確度預測故障。

> 「第一年我們就減少了 45% 的非計劃停機。維護團隊從救火變成了提前規劃。」

---

## 開始使用

預測性維護搭配我們的 P&ID 識別和知識圖譜效果最佳。駐場工程師負責完整部署 \u2014 通常在 4-6 週內完成。
`,
      },
    },
  },

  industry: {
    allSolutions: "所有解決方案",
    home: "首頁",
    talkToUs: "與我們聯繫",
    seeSolutions: "查看解決方案",
    theChallenge: "挑戰",
    challengeHeading: "當今{name}團隊面臨的挑戰",
    ourSolutions: "我們的解決方案",
    solutionsHeading: "專為{name}打造的 AI",
    learnMore: "了解更多",
    getStarted: "開始使用",
    transformHeading: "轉型您的{name}營運",
    transformDesc:
      "我們的駐場工程師可以在第一週內讓您上線運行。看到成果，而非投影片。",
    bookDemo: "預約展示",
    backToHome: "返回首頁",
    entries: {
      "chemical-engineering": {
        name: "化學工程",
        headline: "專為化工廠複雜性打造的 AI",
        subheadline: "從 P&ID 識別到自主合規工作流，我們部署理解您的製程、設備和工程標準的領域專屬 AI。",
        stats: [
          { value: "97.3%", label: "P&ID 準確度" },
          { value: "85%", label: "時間縮減" },
          { value: "<6 週", label: "部署時間" },
          { value: "10,000+", label: "已處理 P&ID" },
        ],
        introParagraphs: [
          "化工廠依賴數十年累積的制度知識，這些知識被困在 P&ID、安全報告和製程模擬中。當資深工程師退休時，這些知識也隨之流失。當廠區擴建需要審查數千張舊圖紙時，團隊花費數月進行本應只需幾天的手動工作。",
          "Operon 改變了這一切。我們派遣駐場工程師學習您的特定製程、設備命名慣例和安全標準。他們配置理解您工廠的 AI 系統——不是通用的化學工程教科書，而是您的實際營運。",
        ],
        solutions: [
          { title: "P&ID 識別", slug: "pid-recognition", description: "自動識別、分類和數位化 P&ID 圖紙上的每個元件。我們的模型在數十萬張涵蓋 ISA、ISO 和專有符號集的真實工程圖紙上訓練。", stat: "97.3%", statLabel: "元件偵測準確度" },
          { title: "知識圖譜", slug: "knowledge-graphs", description: "將文件孤島轉化為連接的工程智能。每份 P&ID、安全報告、維護日誌和模擬結果都成為您知識網絡中可查詢的節點。", stat: "384+", statLabel: "分析的文件信號" },
          { title: "UniSim 整合", slug: "unisim-integration", description: "原生支援 UniSim、Aspen HYSYS 及 50+ 種工程工具。將偵測到的 P&ID 設備直接映射到模擬模型以進行自動驗證。", stat: "50+", statLabel: "支援的工具" },
          { title: "自主工作流", slug: "agentic-workflows", description: "自主 AI 代理處理文件、HAZOP 合規檢查、安全報告生成和交叉引用驗證，無需人工干預。", stat: "24/7", statLabel: "自主運行" },
          { title: "製程優化", slug: "process-optimization", description: "以 ML 驅動的製程改進回應數十億個感測器事件。預測設備壓力、優化產量並降低能源消耗。", stat: "85%", statLabel: "審查節省的時間" },
          { title: "駐場工程師", slug: "on-site-engineers", description: "駐場專家學習您的工作流程，在 6 週內部署定制 AI。他們說您的語言——製程工程，不僅僅是機器學習。", stat: "<6", statLabel: "週至投產" },
        ],
        challenges: [
          { title: "傳統文件", description: "數十年工廠改建中的數千張 P&ID，許多仍為紙質或過時的 CAD 格式。" },
          { title: "知識孤島", description: "關鍵製程知識被困在個別工程師的腦海中、非結構化文件和斷開的數據庫中。" },
          { title: "合規負擔", description: "OSHA PSM、EPA RMP 和產業標準要求持續更新文件，消耗工程師的工時。" },
          { title: "模擬偏移", description: "製程模擬模型與實際工廠修改脫節，導致預測不可靠。" },
        ],
      },
    },
  },

  contact: {
    title: "與我們聯繫",
    subtitle: "寄送訊息或直接預約與我們團隊通話。",
    name: "姓名",
    email: "電子信箱",
    company: "公司",
    yourMessage: "您的訊息",
    sendMessage: "發送訊息",
    scheduleCall: "預約通話",
    successTitle: "我們會與您聯繫",
    successDesc: "感謝您的來信。我們的團隊將在 24 小時內回覆。",
    close: "關閉",
    namePlaceholder: "王小明",
    emailPlaceholder: "xiaoming@company.com",
    companyPlaceholder: "台灣化工股份有限公司",
    messagePlaceholder: "告訴我們您的營運、挑戰或您想探索的內容...",
  },

  theme: {
    switchToLight: "切換至亮色模式",
    switchToDark: "切換至暗色模式",
  },

  langSwitcher: {
    en: "EN",
    "zh-TW": "繁中",
  },

  about: {
    label: "關於我們",
    title: "打造真正懂產業的 AI。",
    subtitle: "我們是一群工程師與科學家，專為製造業打造領域專屬的 AI 系統。",
    sections: [
      {
        heading: "我們的使命",
        body: "製造業仰賴數十年累積的實務知識——被鎖在 P&ID、安全報告和製程模擬裡。資深工程師退休時，這些知識也跟著消失。我們打造的 AI 系統能擷取、結構化並活用這些專業經驗，讓它永遠留在組織內。",
      },
      {
        heading: "我們的工作方式",
        body: "我們派遣駐場工程師深入了解您的製程、設備命名慣例和安全標準，部署真正理解您工廠運作的 AI——不是教科書式的通用方案，而是貼合您實際營運的系統。多數團隊在 6 週內即可上線。",
      },
      {
        heading: "我們的團隊",
        body: "Operon 由在化工廠和煉油廠工作多年的工程師創立。我們清楚知道通用 AI 的承諾與製造業真實需求之間的落差。團隊結合化工領域的深厚經驗與最前沿的機器學習研究。",
      },
    ],
    cta: "想進一步了解我們的服務嗎？",
  },

  careers: {
    label: "加入我們",
    title: "一起打造工業 AI 的未來。",
    subtitle: "加入我們，為全球最複雜的產業解決真正的問題。",
    intro: "我們正在尋找對 AI 應用於真實世界難題充滿熱情的夥伴。我們的團隊直接與化工廠、煉油廠和製造設施的工程師合作——開發能切實改善他們日常工作的軟體。",
    openRolesHeading: "開放職缺",
    roles: [
      { title: "駐場工程師", location: "台北 / 駐點", type: "全職" },
      { title: "機器學習工程師 — 電腦視覺", location: "遠端", type: "全職" },
      { title: "全端工程師", location: "台北", type: "全職" },
      { title: "化學工程實習生", location: "台北", type: "實習" },
    ],
    cta: "沒有看到合適的職缺？",
    ctaDesc: "我們隨時歡迎優秀人才。寄送你的履歷，告訴我們工業 AI 的哪個面向最讓你興奮。",
    applyNow: "與我們聯繫",
  },

  blog: {
    label: "部落格",
    title: "觀點與動態",
    subtitle: "關於工業 AI、製造技術，以及打造領域專屬系統的思考。",
    posts: [
      {
        title: "為什麼通用 AI 在製造業行不通",
        slug: "why-generic-ai-fails",
        date: "2026 年 3 月",
        tag: "產業觀點",
        summary: "通用 LLM 能寫程式、摘要文件——但面對 P&ID 解讀或 HAZOP 報告驗證就束手無策。領域專屬性為何至關重要。",
      },
      {
        title: "一個週末將 2,400 張老舊 P&ID 轉為結構化資料",
        date: "2026 年 2 月",
        tag: "案例分享",
        summary: "一家大型石化煉油廠如何用 Operon 的辨識引擎數位化整個 P&ID 圖庫——原本需要團隊花 6 個月的工作。",
      },
      {
        title: "駐場工程師模式",
        date: "2026 年 1 月",
        tag: "公司理念",
        summary: "為什麼我們選擇派工程師駐點而非賣通用 SaaS，以及這種模式如何帶來截然不同的成效。",
      },
      {
        title: "被動維護的真實代價——以及如何不再為此買單",
        slug: "predictive-maintenance-cost",
        date: "2026 年 3 月",
        tag: "工程實務",
        summary: "一次壓縮機跳機可能造成數十萬美元的產量損失。在擁有數百台關鍵設備的工廠中，累積的代價巨大——而且大多可以避免。",
      },
    ],
    entries: {
      "why-generic-ai-fails": {
        title: "為什麼通用 AI 在製造業行不通",
        date: "2026 年 3 月",
        tag: "產業觀點",
        readTime: "18 分鐘閱讀",
        summary: "通用 LLM 能寫程式、摘要文件——但面對 P&ID 解讀或 HAZOP 報告驗證就束手無策。領域專屬性為何至關重要。",
        content: `
每週都有新聞宣稱 AI 將徹底改變製造業。基礎模型將優化你的供應鏈，大型語言模型將撰寫安全報告，生成式 AI 將設計下一代產品。

但工廠現場的真實情況截然不同。**超過 90% 的工業 AI 專案在概念驗證階段便停滯不前。** 那些能寫詩、生成逼真影像的模型，在面對 P&ID 解讀、壓縮機軸承故障預測、或在安全限制下優化蒸餾塔時，完全無法勝任。

這不是等下一版 GPT 就能解決的暫時性差距，而是通用 AI 系統的建構方式與製造業實際運作之間的**結構性矛盾**。

本文彙整近年學術研究與產業分析，說明為什麼通用 AI 在製造業失敗——以及專屬系統該如何設計。

---

## 基礎模型的幻象

基礎模型（Foundation Models）——在海量資料上預訓練、再針對下游任務微調的大型神經網路——在語言、視覺和程式碼生成領域取得了驚人成果。自然的假設是：這些模型可以延伸到任何領域，包括工業製造。

但近期研究直接挑戰了這個假設。

2025 年發表在 *Engineering* 期刊的研究檢視了當前基礎模型是否適用於製程工業——石化、化工、冶金及其他連續製造操作。研究發現，通用基礎模型**無法處理多產業製程資料的多樣性**、缺乏所謂「機理認知」（對底層物理與化學的理解）、且無法滿足工業環境的可靠性與安全需求。

核心問題：基礎模型是在網路規模的文本和影像上訓練的。它們從未見過蒸餾塔內部，不理解反應動力學，無法推理洩壓閥的選型，也分不清製程流程圖上的調節閥和截止閥。

> 通用基礎模型看過數十億個網頁，但零張製程流程圖、零筆 DCS 歷史資料匯出、零份 HAZOP 工作表。

---

## 製造業資料不是網路資料

基礎模型在消費端應用的成功，建立在一個關鍵假設之上：資料充沛、乾淨且標準化。但製造業資料違反了這些假設的每一條。

### 稀疏、多速率、未標註

化工廠從數千個感測器生成資料，但這些資料具有以下特性：

- **多速率** ——溫度感測器每秒取樣，實驗室分析每 8 小時一次，維護巡檢每月一次
- **稀疏** ——故障事件極為罕見；一台壓縮機可能五年才故障一次，你只有一個訓練樣本
- **未標註** ——操作員知道出了問題，但很少以結構化形式標記根本原因
- **雜訊** ——感測器漂移、校準誤差和手動覆寫污染了訊號

發表在 *Chemie Ingenieur Technik* 的化工操作機器學習生命週期研究發現，**70% 的專案時間花在資料準備上**——而非模型建構。

通用 AI 平台完全跳過這個步驟。它們假設你的資料已經準備好了。但事實從來都不是。

### 老舊系統與整合噩夢

大多數化工廠運行的控制系統（DCS、SCADA）已安裝 10-30 年。資料格式是專有的。歷史資料系統（PI、IP.21、DeltaV）各有各的 API、資料模型和特殊限制。工程文件散落在 AutoCAD、PDF、掃描紙本和命名規則不一致的 SharePoint 資料夾中。

期望即插即用的通用 AI 無法在此環境運作。

### 概念漂移

與靜態資料集不同，製造過程持續變化：催化劑衰退、進料組成隨供應商和季節變化、設備老化使操作範圍偏移、製程改造改變流程路徑。

去年資料訓練的模型，今年可能產生危險的錯誤預測。通用 AI 平台沒有偵測或適應此漂移的內建機制。

---

## 領域鴻溝：當網路模型遇上工業現實

最有力的證據來自電腦視覺。

SAM（Segment Anything Model）和 CLIP 等基礎視覺模型在標準基準測試上表現優異——自然照片中的物體、動物和場景。研究人員最近在真實工業資料上測試這些模型：用於半導體缺陷檢測的掃描式聲學斷層掃描（SAT）影像。

結果令人震驚。在寵物照片和街景上達到高準確度的模型，在工業 SAT 影像上的 **IoU（交集比聯集）接近零**。

![各職業類別的理論 AI 能力與實際使用率](/blog/ai-coverage-gap.webp)

*研究顯示理論 AI 能力與實際使用率之間存在巨大差距。在建築、工程和生產類別中——與製造業最相關的領域——AI 實際採用率遠遠落後於理論潛力。這正是因為通用 AI 工具並非為這些領域而建。*

---

## 化工廠不是點擊率優化

大多數商業 AI 針對單一目標優化：最大化營收、點擊率或互動率。製造業優化截然不同。

### 多目標、物理約束

化工製程工程師在優化反應器時，必須同時考慮：

- **產率** ——最大化產品產出
- **能源消耗** ——最小化蒸汽、電力和冷卻水用量
- **安全** ——隨時保持在溫度、壓力和濃度限制內
- **排放** ——符合環保法規目標
- **產能** ——配合生產排程的需求
- **設備壽命** ——避免加速設備退化的操作條件

這些目標經常衝突。通用 AI 不理解這些物理約束。LLM 被要求「優化此反應器」時，無法驗證其建議是否符合熱力學可行性、反應動力學或設備設計限制。

### 非線性動態與即時適應

製程製造涉及非線性熱力學、複雜反應動力學和流體力學，創造出高度耦合的系統。任何 AI 解決方案都必須與既有的先進製程控制（APC）系統、模型預測控制器（MPC）和即時優化（RTO）系統整合——而非取代它們。

---

## 生命週期問題：為什麼 90% 的 PoC 從未規模化

建構模型是容易的部分。在運轉中的工廠部署、保持準確度並獲得操作員信任，才是大多數 AI 專案陣亡之處。

- **部署基礎設施** ——從 Jupyter notebook 到在工廠網路中 24/7 運行的生產系統，需要通用 AI 平台未提供的工程支援
- **監控與再訓練** ——大多數通用平台沒有內建的概念漂移、資料品質退化或預測準確度下降的監控
- **法規驗證** ——化工廠在 OSHA PSM、EPA RMP、IEC 61511 等嚴格法規框架下運行，任何影響操作的 AI 系統都須經過驗證

---

## 組織障礙：不只是技術問題

2025 年發表在 *Journal of Manufacturing Technology Management* 的實證研究，調查了製造業企業在 AI 採用上的困難：

- **資料品質與老舊系統** ——組織缺乏餵給 AI 模型的資料基礎設施
- **技能斷層** ——同時懂資料科學和製程工程的人極為稀少
- **不明確的 ROI** ——通用 AI 供應商承諾模糊的「效率提升」，沒有與具體製程改善掛鉤的可衡量成果
- **信任赤字** ——無法解釋推理過程的黑箱模型，會被需要理解「為什麼」的工程師拒絕

研究結論：成功的製造業 AI 採用需要**領域專業知識與技術同步交付**。你不能只寄一個 SaaS 登入帳號就期望工廠自行轉型。

---

## 領域專屬 AI 該長什麼樣子

通用 AI 的失敗模式直接指向了工業 AI 的需求：

### 建立在工業資料之上

模型必須在真實製程工業資料上訓練：工程圖面、製程歷史資料匯出、維護紀錄、安全報告和模擬檔案。這些資料不存在於網路上，必須與運轉中的工廠合作收集、標註和整理。

### 基於物理機理，而非模式配對

工業 AI 必須尊重底層物理。這意味著將領域知識整合到模型架構中：熱力學約束、質量和能量平衡、設備設計限制和安全邊界。結合物理模型與資料驅動方法的混合方法，在製造業中優於純機器學習。

### 全生命週期支援

工業 AI 需要：資料管線處理工廠資料基礎設施的雜亂、持續監控漂移與資料品質、納入新資料和操作員回饋的再訓練工作流、滿足法規要求的驗證流程、以及與既有 DCS、歷史資料系統和工程工具的整合。

### 領域專業知識嵌入交付

技能斷層不是靠文件就能解決。需要同時理解 AI 技術和工業領域的工程師——能走訪工廠現場、閱讀 P&ID、並配置符合該設施特定設備命名規則、安全標準和操作程序的 AI 系統。

這就是為什麼我們在每次部署都派駐場工程師。他們學習你的工作流程、你的設備、你的標準。他們配置的 AI 系統理解你的工廠——不是通用的化工教科書，而是你的實際操作。大多數團隊在六週內即可上線。

---

## 未來的路

AI 的炒作與製造業現實之間的差距不會自行縮小。在更多網路資料上訓練更大的模型不會讓它學會讀 P&ID。更強大的 GPU 不會解決概念漂移問題。更好的提示工程不會讓 LLM 理解反應動力學。

縮小差距的是**垂直 AI**——為特定工業領域量身打造的系統，在領域專屬資料上訓練，由領域專家交付，並在整個操作生命週期中持續維護。

研究結論明確：通用 AI 只能產生通用的結果。在一個錯誤預測可能意味著環境洩漏、安全事故或數百萬美元生產損失的行業中，通用不夠好。

製造業值得擁有為製造業而建的 AI。

---

## 參考文獻

1. "Foundation Models for the Process Industry." *Engineering*, 2025.
2. "Industrial Foundation Models (IFMs) for Intelligent Manufacturing." *Journal of Intelligent Manufacturing*, 2025.
3. "Generative AI in Manufacturing: A Literature Review." *ScienceDirect*, 2025.
4. "A Review of Artificial Intelligence and Industrial Chemical Processes." *FOSM Journal*.
5. "The Machine Learning Life Cycle in Chemical Operations." *Chemie Ingenieur Technik*, Wiley.
6. "Why Do Manufacturing Firms Struggle with Artificial Intelligence?" *JMTM*, 2025.
7. "Are Foundation Models Ready for Industrial Defect Recognition?" Literature review.
8. "How AI Enables New Pathways in Chemicals." McKinsey & Company.
`,
      },
      "predictive-maintenance-cost": {
        title: "被動維護的真實代價\u2014\u2014以及如何不再為此買單",
        date: "2026 年 3 月",
        tag: "工程實務",
        readTime: "8 分鐘閱讀",
        summary: "一次壓縮機跳機可能造成數十萬美元的產量損失。在擁有數百台關鍵設備的工廠中，累積的代價巨大\u2014\u2014而且大多可以避免。",
        content: `
## 沒有人編列預算的問題

當一台關鍵壓縮機意外跳機，直接成本顯而易見：產量損失、放空燃燒、下游裝置可能連帶停車。緊急維護人員被召回，備件空運到場，生產排程重新改寫。

較不明顯的是累積的負擔。一座典型化工廠運轉著數百台關鍵的旋轉與靜態設備，每一台都有發生非計劃事件的可能。在整個設備群中，被動維護成為大多數工廠從未真正控制的、最大的可控營運費用。

製程工業非計劃停機的行業平均值介於總可用生產時數的 **5\u201312%**。對一座年營收 5000 萬美元的工廠而言，這代表每年 250\u2013600 萬美元的產出損失\u2014\u2014還不包括維修費用、加班費、緊急零件採購，以及對下游操作的連鎖影響。

多數工廠都知道這件事，但很少有系統性的方法去改變它。

---

## 為什麼定期維護不夠好

面對設備故障的傳統答案是預防性維護：每 18 個月更換軸承、每次大修檢修壓縮機、按固定排程更換閥門內件。

這種方法有一個根本問題：**它完全忽略了設備的實際狀態。**

有些軸承可以無故障運行 3 年。另一些則因製程異常、原料不合規或安裝錯誤而在 8 個月內就劣化。固定排程要麼過早更換健康的零件\u2014\u2014浪費零件、人力和不必要停機的生產時間\u2014\u2014要麼錯過比預期更快發生的劣化。

結果就是一套既太貴又不夠可靠的維護計劃。

---

## 基於狀態的預測帶來什麼改變

預測性維護將決策從「這個排程什麼時候到？」轉變為「這台機器裡面現在實際發生了什麼？」

其方法是為每台設備建立正常行為模型\u2014\u2014使用例如<a href="https://en.wikipedia.org/wiki/Autoencoder" target="_blank" rel="noopener noreferrer" class="jargon-link">自編碼器網路（Autoencoder）</a>和<a href="https://en.wikipedia.org/wiki/Isolation_forest" target="_blank" rel="noopener noreferrer" class="jargon-link">孤立森林（Isolation Forest）</a>等技術，在歷史正常運行數據上進行訓練。模型學習該設備在不同操作條件下特有的振動特徵、溫度曲線、壓力關係和性能曲線。當行為開始偏離學習到的基線時，系統就會標記出來。

這不是閾值警報。高振動警報在問題已經發生時才觸發。預測模型偵測的是**趨勢**\u2014\u2014軸承頻譜的漸變、熱交換器效率的緩降、閥門響應時間的微妙變化\u2014\u2014在它越過任何警報限值的數週甚至數月之前。

### 早期預警

預測系統提供的最有價值的東西是時間。不是讓人衝向控制室的紅色警報，而是一個通知：這台壓縮機的軸承顯示早期劣化跡象，預計還有 3\u20136 週的處理時間，這是支持數據。

這個時間窗口將維護從救火變成了計劃性活動。你可以正常訂購零件而不用付空運溢價。你可以在計劃減產時安排維修，而不是被迫跳機。你可以與操作部門協調以最大程度減少生產影響。

### 讓維護符合現實

固定排程會更換健康的設備、又漏掉有問題的設備。基於狀態的維護兩者都不會。如果一台泵的軸承在 18 個月時運轉完好，你不需要拆下來。如果一台壓縮機密封在 9 個月時正在劣化，你也不用等到下一次大修。

結果是整體維護次數減少，每一次都精準針對真正需要維護的設備。採用此方法的工廠通常可看到**總維護支出降低 25\u201335%**\u2014\u2014不是因為維護得更少，而是維護得更聰明。

### 可見性帶來的安全效益

設備劣化不只造成停機。腐蝕的容器壁、卡滯的安全閥或失效的密封都可能演變成製程安全事件。預測性監控在早期階段就能捕捉這些劣化模式\u2014\u2014遠在它們成為安全或環保隱患之前。

這不是要取代製程安全系統或安全閥，而是一層額外的可見性，讓可靠性和安全團隊有更多提前應對的時間。

---

## 對可靠性工程師意味著什麼

一個常見的擔憂是預測性維護會取代資深可靠性工程師的判斷。事實恰恰相反。

大型工廠的可靠性工程師通常負責數百台設備。以捕捉早期劣化所需的頻率，逐一手動檢視振動趨勢、歷史數據和維護記錄，在體力上是不可能的。重要訊號被淹沒在雜訊中。

預測系統扮演過濾器的角色。工程師不需要檢視所有東西，而是得到一份排序清單：這 5 台設備顯示異常行為，按嚴重程度和預估介入時間排序。每個警報都附帶底層數據\u2014\u2014哪些感測器通道在偏離、歷史模式是什麼樣、可能的故障模式是什麼。

工程師仍然做最終決定。系統只是確保正確的資訊及時送到他們手中。

---

## 如何開始

從定期維護轉向基於狀態的維護，不需要拆除現有基礎設施。你需要的數據幾乎肯定已經在收集\u2014\u2014振動監測系統、DCS 歷史資料庫、SCADA 匯出和 CMMS 記錄包含了原始訊號。

通常缺少的是連接這些數據源、學習設備特定行為、並將可操作的預測呈現給需要的人的那一層。

如果你正在探索這個轉變，我們可以利用你現有的感測器基礎設施和歷史數據系統，部署針對你特定設備和操作環境量身定制的模型。無需新感測器、無需雲端依賴、無需通用儀表板\u2014\u2014只有你的維護團隊真正能用的預測。
`,
      },
    },
  },

  documentation: {
    label: "技術文件",
    title: "技術文件",
    subtitle: "Operon 平台的技術指南與參考資料。",
    categories: [
      { title: "P&ID 辨識", slug: "pid-recognition", description: "了解 Operon 如何以 97% 以上的準確率辨識並數位化工程圖面。" },
      { title: "知識圖譜", slug: "knowledge-graphs", description: "將文件、資產和工程資料串連成可查詢的知識網絡。" },
      { title: "自主工作流", slug: "agentic-workflows", description: "設定自主代理進行合規檢查、報告生成和文件處理。" },
    ],
  },

  signin: {
    title: "登入",
    subtitle: "存取您的工作區與專案。",
    continueGoogle: "使用 Google 繼續",
    continueLinkedin: "使用 LinkedIn 繼續",
    or: "或",
    emailPlaceholder: "name@company.com",
    continueEmail: "使用電子郵件繼續",
    sending: "傳送中...",
    codeSentTo: "我們已將驗證碼寄送至",
    enterCode: "輸入驗證碼",
    verify: "驗證",
    differentEmail: "使用其他電子郵件",
    failedSend: "傳送驗證碼失敗",
    invalidCode: "驗證碼無效",
    terms: "登入即表示您同意我們的",
    termsLink: "服務條款",
    and: "與",
    privacyLink: "隱私政策",
  },
};

export default zhTW;
