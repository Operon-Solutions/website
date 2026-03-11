import type { Dictionary } from "./en";

const zhTW: Dictionary = {
  meta: {
    title: "Operon | AI 智能製造系統",
    description:
      "專為製造業與化學工程定制的 AI 系統。前線駐場工程師、P&ID 識別、知識圖譜及自主工作流。",
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
          { label: "P&ID 設計助手", href: "/docs/pid-agent" },
          { label: "模擬軟體原生外掛", href: "/docs/native-plugin" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
          { label: "預測性維護", href: "/docs/predictive-maintenance" },
          { label: "前線駐場工程師", href: "/docs/forward-deployed-engineers" },
        ],
      },
      {
        name: "石油與天然氣",
        href: "/industries/oil-gas",
        solutions: [
          { label: "P&ID 識別", href: "/docs/pid-recognition" },
          { label: "安全與合規", href: "/docs/safety-compliance" },
          { label: "產量預測", href: "/docs/production-forecasting" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
          { label: "資產完整性", href: "/docs/asset-integrity" },
          { label: "前線駐場工程師", href: "/docs/forward-deployed-engineers" },
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
          { label: "前線駐場工程師", href: "/docs/forward-deployed-engineers" },
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
          { label: "前線駐場工程師", href: "/docs/forward-deployed-engineers" },
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
          { label: "案例研究", href: "/case-studies" },
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
        label: "服務(2) - PFD、P&ID 設計助手",
        tag: "化工與製程產業",
        slug: "knowledge-graphs",
        title: "讓 AI 幫你架構工程製圖。",
        description:
          "專為化工領域打造的智慧助手，能根據製程需求自動生成 PFD 與 P&ID，大幅縮短設計時程，讓團隊專注在決策而非繪圖。",
      },
      {
        label: "服務(3) - AI 原生外掛",
        tag: "化工與製程產業",
        slug: "agentic-workflows",
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
            title: "P&ID 設計助手",
            slug: "pid-agent",
            description:
              "專為化工領域打造的 AI 助手，根據製程需求自動生成 PFD 與 P&ID，加速設計週期",
          },
          {
            icon: "person",
            title: "前線駐場工程師",
            slug: "forward-deployed-engineers",
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
            slug: "pid-recognition-oil-gas",
            description:
              "將上下游資產的傳統管路和儀表圖數位化",
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
            title: "前線駐場工程師",
            slug: "forward-deployed-engineers-oil-gas",
            description:
              "嵌入您營運團隊的駐場專家，快速部署 AI",
          },
          {
            icon: "chart",
            title: "產量預測",
            slug: "production-forecasting",
            description:
              "ML 驅動的井效預測和油藏優化模型",
          },
          {
            icon: "arrows",
            title: "自主工作流",
            slug: "agentic-workflows-oil-gas",
            description:
              "用於許可處理、檢查排程和現場報告的自主代理",
          },
          {
            icon: "cog",
            title: "資產完整性",
            slug: "asset-integrity",
            description:
              "管線和設施的預測性維護和腐蝕監控",
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
            title: "前線駐場工程師",
            slug: "forward-deployed-engineers-electronics",
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
            title: "前線駐場工程師",
            slug: "forward-deployed-engineers-cement",
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
        title: "P&ID 分析",
        description:
          "追蹤元件行為以 97% 的準確度預測維護。在 50 毫秒內自動觸發干預。",
      },
      {
        title: "製程模擬",
        description:
          "偵測製程即將失效。透過電子郵件、簡訊或儀表板發送針對性報告以恢復效率。",
      },
      {
        title: "智慧營運",
        description:
          "每個製程都根據瀏覽行為獲得個人化監控。384 個數據點建立個別營運檔案。",
      },
    ],
    pidScanner: "pid-scanner",
    components: "12,847 個元件",
    accuracyLabel: "97.3% 準確度",
    processSim: "製程模擬",
    feedStream: "進料流",
    springConfig: "彈簧配置",
    cartAid: "Cart AID",
    returnCost: "退貨成本",
    silMessage:
      "「嗨 David，我注意到您對 SIL 報告有疑問…」",
    purchaseSuccessful: "採購成功",
    agentLabel: "agent.01",
    agentLabel2: "agent.02",
    activeCount: "3 個活躍中",
    agents: [
      { name: "Emily", status: "分析購物車猶豫" },
      { name: "Marcus", status: "偵測匹配模式" },
      { name: "Amy", status: "優化回應時機" },
    ],
  },

  faq: {
    label: "常見問題",
    heading: "常見問答",
    items: [
      {
        q: "我可以期待什麼實際的投資報酬率？",
        a: "大多數客戶在第一個月內看到文件處理時間減少 60-80%。僅 P&ID 識別就能為每個專案節省數百個工程小時。我們在初次諮詢時提供詳細的 ROI 預測。",
      },
      {
        q: "這與通用 AI 工具有何不同？",
        a: "與通用 AI 不同，Operon 專為化學工程而建。我們的模型在數百萬張 P&ID、製程流程圖和工程文件上訓練。我們派遣了解您產業的工程師到現場。",
      },
      {
        q: "使用 Operon 需要技術專業知識嗎？",
        a: "不需要。我們的前線駐場工程師處理技術實施。僅需一個配置變更即可安裝我們的連接器。AI 會自動學習您的營運。大多數團隊無需任何技術開銷即可自行管理一切。",
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
          { label: "P&ID 設計助手", href: "/docs/pid-agent" },
          { label: "模擬軟體原生外掛", href: "/docs/native-plugin" },
          { label: "預測性維護", href: "/docs/predictive-maintenance" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
        ],
      },
      {
        title: "資源",
        links: [
          { label: "文件", href: "/documentation" },
          { label: "案例研究", href: "/case-studies" },
          { label: "部落格", href: "/blog" },
        ],
      },
      {
        title: "適用對象",
        links: [
          { label: "製程工程師", href: "#" },
          { label: "廠長", href: "#" },
          { label: "營運團隊", href: "#" },
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
      "我們的前線駐場工程師可以在第一週內讓您上線運行。",
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
        title: "P&ID 識別",
        subtitle: "Operon 如何從工程圖紙中自動識別 97% 的設備",
        industry: "化學工程",
        readTime: "8 分鐘閱讀",
        content: `
## 什麼是 P&ID 識別？

管路和儀表圖 (P&ID) 是製程工程的基石。它們定義了工廠中的每個閥門、泵、熱交換器和儀器——但大多數設施仍以靜態 PDF 或紙質圖紙管理它們。

Operon 的 P&ID 識別引擎使用電腦視覺和領域專屬 AI 來**自動識別、分類和數位化** P&ID 圖紙上的每個元件。

> 「我們在一個週末處理了 2,400 張傳統 P&ID——這項工作我們團隊手動處理需要 6 個月。」

---

## 運作方式

### 1. 掃描與匯入

以任何格式上傳您的 P&ID 圖紙——PDF、TIFF、DWG 或甚至掃描的紙質文件。我們的預處理管線處理：

- 自動糾正和去噪
- 多頁文件分割
- 解析度標準化以確保一致的偵測

> **支援格式：** PDF、TIFF、DWG、DXF、PNG、JPEG 以及最大 A0 尺寸的掃描紙質文件。

### 2. 元件偵測

我們的模型在**數十萬張真實工程圖紙**上訓練，涵蓋 ISA、ISO 和專有符號集。我們偵測：

- **設備** — 容器、槽、塔、熱交換器、反應器
- **儀器** — 壓力計、流量計、溫度變送器
- **閥門** — 控制閥、止回閥、洩壓閥、手動閥
- **管路** — 製程線、公用線、儀表連接
- **註釋** — 標籤號、線號、規格斷點

### 3. 關係映射

超越偵測，我們理解**元件如何連接**。系統映射：

- 製程流方向
- 儀器與設備的關聯
- 控制迴路關係 (PV → 控制器 → CV)
- 線路規格轉換

### 4. 數位雙胞胎輸出

結果是您 P&ID 的結構化、可查詢的數位表示——不僅是帶有邊界框的圖像，而是**工程知識圖譜**。

> 數位雙胞胎輸出直接與您現有的 CMMS、ERP 和模擬工具整合——無需手動輸入數據。

---

## 準確度與性能

| 指標 | 數值 |
|--------|-------|
| 元件偵測準確度 | 97.3% |
| 符號分類準確度 | 95.8% |
| 標籤號 OCR 準確度 | 99.1% |
| 處理速度 | 每張約 30 秒 |
| 支援符號標準 | ISA 5.1、ISO 14617、PIP、自定義 |

---

## 為什麼重要

### 使用 Operon 之前

- 工程師每個專案花費 **40+ 小時**手動審查 P&ID
- 错誤在修訂中傳播，因為變更沒有系統性追蹤
- 知識存在於個別工程師的腦海中，而非系統中

### 使用 Operon 之後

- P&ID 審查從數天縮短到**幾分鐘**
- 每個元件在每次修訂中自動追蹤
- 從您的實際圖紙建立可搜尋、可查詢的設備數據庫

> 「準確度讓我們驚嘆不已。它捕捉到了我們資深工程師在手動審查中遺漏的元件。」

---

## 整合

P&ID 識別直接饋入：

- **知識圖譜** — 偵測到的元件成為您工程知識網絡中的節點
- **自主工作流** — 處理新 P&ID 時觸發自動合規檢查
- **UniSim 整合** — 將偵測到的設備映射到模擬模型

---

## 開始使用

準備好數位化您的 P&ID 了嗎？我們的前線駐場工程師可以在第一週內讓您開始處理圖紙。
`,
      },
      "pid-agent": {
        title: "P&ID 設計助手",
        subtitle: "專為化工領域打造的 AI 助手，根據製程需求自動生成 PFD 與 P&ID，加速設計週期",
        industry: "化學工程",
        readTime: "6 分鐘閱讀",
        content: `
## 什麼是 P&ID 設計助手？

設計製程流程圖 (PFD) 和管路與儀表圖 (P&ID) 是製程工程中最耗時的階段之一。每條管線、儀器和控制迴路都必須遵循嚴格的標準，同時反映實際的製程設計意圖。

Operon 的 P&ID 設計助手是一款**專為化工領域打造的 AI**，可從自然語言描述、模擬數據或草圖自動生成工程圖面。

> 「過去初級工程師需要 2 週的繪圖工作，現在只需與助手對話加幾輪審查即可完成。」

---

## 運作方式

### 1. 製程意圖擷取

用自然語言描述您的需求，或直接匯入模擬數據：

- 「設計一座蒸餾塔，包含回流罐、再沸器和冷凝器，用於苯-甲苯分離」
- 直接從 Aspen HYSYS 或 UniSim 匯入流股數據
- 上傳手繪草圖，助手會將其正式化

### 2. 智慧圖面生成

助手生成符合標準的圖面：

- **正確符號** \u2014 ISA 5.1、ISO 14617 或您公司的符號庫
- **規範命名** \u2014 遵循您設施的標籤命名慣例
- **控制迴路** \u2014 根據製程需求自動添加儀控設備
- **管線規格** \u2014 指定管線編號、管徑和規格斷點

### 3. 迭代精煉

審查生成的圖面，透過對話進行修改：

- 「在進料管線的控制閥加一條旁通」
- 「將熱交換器改為板框式」
- 「添加高壓跳脫的 SIS 儀控」

### 4. 匯出與整合

匯出為標準格式：AutoCAD DWG/DXF、SVG/PDF、結構化數據（設備清單、管線清單、儀器索引）。

> 生成的圖面可直接與我們的 P&ID 識別引擎整合進行自動驗證。

---

## 為什麼重要

手動建立 P&ID 需要深厚的符號標準知識、製程控制理念、精確的標籤命名慣例，以及與資深工程師的多輪審查。這使 P&ID 建立成為每個資本項目的**瓶頸**。

### 使用 P&ID 設計助手

- 圖面草案從數天縮短至**幾分鐘**
- 所有圖面**一致符合標準**
- 初級工程師透過 AI 輔助繪圖**更快上手**
- 資深工程師專注於**審查而非從零繪製**

---

## 開始使用

P&ID 設計助手搭配我們的 P&ID 識別引擎和前線駐場工程師效果最佳。我們的團隊會根據您的符號庫、標籤慣例和設計標準進行配置。
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

我們的前線駐場工程師負責完整的外掛安裝和配置 \u2014 通常在 2-3 週內完成。
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

預測性維護搭配我們的 P&ID 識別和知識圖譜效果最佳。前線駐場工程師負責完整部署 \u2014 通常在 4-6 週內完成。
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
    caseStudies: "案例研究",
    resultsInProd: "生產實績",
    getStarted: "開始使用",
    transformHeading: "轉型您的{name}營運",
    transformDesc:
      "我們的前線駐場工程師可以在第一週內讓您上線運行。看到成果，而非投影片。",
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
          "Operon 改變了這一切。我們派遣前線駐場工程師學習您的特定製程、設備命名慣例和安全標準。他們配置理解您工廠的 AI 系統——不是通用的化學工程教科書，而是您的實際營運。",
        ],
        solutions: [
          { title: "P&ID 識別", slug: "pid-recognition", description: "自動識別、分類和數位化 P&ID 圖紙上的每個元件。我們的模型在數十萬張涵蓋 ISA、ISO 和專有符號集的真實工程圖紙上訓練。", stat: "97.3%", statLabel: "元件偵測準確度" },
          { title: "知識圖譜", slug: "knowledge-graphs", description: "將文件孤島轉化為連接的工程智能。每份 P&ID、安全報告、維護日誌和模擬結果都成為您知識網絡中可查詢的節點。", stat: "384+", statLabel: "分析的文件信號" },
          { title: "UniSim 整合", slug: "unisim-integration", description: "原生支援 UniSim、Aspen HYSYS 及 50+ 種工程工具。將偵測到的 P&ID 設備直接映射到模擬模型以進行自動驗證。", stat: "50+", statLabel: "支援的工具" },
          { title: "自主工作流", slug: "agentic-workflows", description: "自主 AI 代理處理文件、HAZOP 合規檢查、安全報告生成和交叉引用驗證，無需人工干預。", stat: "24/7", statLabel: "自主運行" },
          { title: "製程優化", slug: "process-optimization", description: "以 ML 驅動的製程改進回應數十億個感測器事件。預測設備壓力、優化產量並降低能源消耗。", stat: "85%", statLabel: "審查節省的時間" },
          { title: "前線駐場工程師", slug: "forward-deployed-engineers", description: "駐場專家學習您的工作流程，在 6 週內部署定制 AI。他們說您的語言——製程工程，不僅僅是機器學習。", stat: "<6", statLabel: "週至投產" },
        ],
        caseStudies: [
          { company: "大型石化煉油廠", result: "在一個週末處理了 2,400 張傳統 P&ID——這項工作工程團隊手動處理需要 6 個月。", quote: "準確度讓我們驚嘆不已。它捕捉到了我們資深工程師在手動審查中遺漏的元件。", person: "David K.", role: "工程副總裁" },
          { company: "特種化學品製造商", result: "HAZOP 準備時間減少 70%，在下一次監管審查中實現零審計發現。", quote: "我們從害怕審計變為充滿信心地走進審計現場。每份文件都經過交叉引用且是最新的。", person: "Sarah M.", role: "工廠安全經理" },
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
    ],
  },

  caseStudies: {
    label: "案例研究",
    title: "實戰成果。",
    subtitle: "看看製造業團隊如何運用 Operon 轉型他們的營運。",
    studies: [
      {
        company: "大型石化煉油廠",
        industry: "化學工程",
        result: "一個週末內處理完 2,400 張老舊 P&ID——這項工作工程團隊手動處理需要 6 個月。",
        quote: "準確度讓我們驚嘆不已。它捕捉到了資深工程師在人工審查中遺漏的元件。",
        person: "David K.",
        role: "工程副總裁",
      },
      {
        company: "特種化學品製造商",
        industry: "化學工程",
        result: "HAZOP 準備時間減少 70%，下一次監管審查達成零缺失。",
        quote: "我們從害怕稽核變成充滿信心地走進稽核現場。每份文件都經過交叉核對，完全是最新版本。",
        person: "Sarah M.",
        role: "工廠安全經理",
      },
      {
        company: "半導體晶圓廠",
        industry: "電子製造",
        result: "數位化超過 15,000 份電路文件，設計審查週期從 2 週縮短至 3 天。",
        quote: "知識圖譜串連起我們團隊甚至不知道有關聯的文件，徹底改變了我們的設計審查方式。",
        person: "James L.",
        role: "工程總監",
      },
    ],
    cta: "想看到類似的成果嗎？",
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
