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
          { label: "知識圖譜", href: "/docs/knowledge-graphs" },
          { label: "UniSim 整合", href: "/docs/unisim-integration" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
          { label: "製程優化", href: "/docs/process-optimization" },
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
        name: "食品與飲料",
        href: "/industries/food-beverage",
        solutions: [
          { label: "配方管理", href: "/docs/recipe-management" },
          { label: "食品安全合規", href: "/docs/food-safety-compliance" },
          { label: "生產分析", href: "/docs/production-analytics" },
          { label: "自主工作流", href: "/docs/agentic-workflows" },
          { label: "冷鏈優化", href: "/docs/cold-chain-optimization" },
          { label: "前線駐場工程師", href: "/docs/forward-deployed-engineers" },
        ],
      },
    ],
    companyLinks: [
      {
        title: "公司",
        items: [
          { label: "關於我們", href: "#" },
          { label: "加入我們", href: "#" },
          { label: "聯絡我們", href: "#contact" },
        ],
      },
      {
        title: "資源",
        items: [
          { label: "文件", href: "#" },
          { label: "案例研究", href: "#" },
          { label: "部落格", href: "#" },
        ],
      },
    ],
  },

  hero: {
    headline1: "專為製造業打造的",
    headline2: "領域專屬 AI 系統。",
    talkToUs: "與我們聯繫",
    seeHow: "了解運作方式",
  },

  features: {
    transformHeading: "讓營運自動轉型，",
    transformHeading2: "全面升級。",
    totalPids: "P&ID 總處理數量",
    avgTime: "平均時間縮減",
    howItWorks: "運作方式",
    sectionHeading: "深入理解您營運每個層面的智慧系統",
    learnMore: "了解更多",
    items: [
      {
        label: "P&ID 識別",
        slug: "pid-recognition",
        title: "自動識別高達 97% 的設備",
        description:
          "我們從第一次掃描開始識別並追蹤工程元件，在問題發生之前就提供行為洞察。",
      },
      {
        label: "知識圖譜",
        slug: "knowledge-graphs",
        title: "自動連接每一份文件",
        description:
          "我們分析 384+ 種文件信號——從修訂模式到交叉引用——為每項資產建立獨特的知識檔案。告別通用搜尋和千篇一律的查找。",
      },
      {
        label: "自主工作流",
        slug: "agentic-workflows",
        title: "以團隊偏好的方式及時聯繫",
        description:
          "AI 驅動的代理透過電子郵件、警報或儀表板發送個人化報告。每個觸點都建立在先前的分析之上，最大化營運效率。",
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
    heading: "我們為以下產業提供領域專屬 AI 解決方案",
    readMore: "了解更多",
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
            icon: "globe",
            title: "知識圖譜",
            slug: "knowledge-graphs",
            description:
              "將文件孤島轉化為連接智能，預測準確度達 67%",
          },
          {
            icon: "person",
            title: "前線駐場工程師",
            slug: "forward-deployed-engineers",
            description:
              "駐場專家學習您的工作流程，在 6 週內部署定制 AI",
          },
          {
            icon: "language",
            title: "UniSim 整合",
            slug: "unisim-integration",
            description:
              "原生支援 UniSim、Aspen 及 50+ 種工程工具的模擬功能",
          },
          {
            icon: "arrows",
            title: "自主工作流",
            slug: "agentic-workflows",
            description:
              "自主代理處理文件、合規檢查和報告生成",
          },
          {
            icon: "bolt",
            title: "製程優化",
            slug: "process-optimization",
            description:
              "以 ML 驅動的製程改進回應數十億個感測器事件",
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
        label: "食品與飲料製造",
        capabilities: [
          {
            icon: "beaker",
            title: "配方管理",
            slug: "recipe-management",
            description:
              "數位化並版本控制配方，具備完整的成分可追溯性",
          },
          {
            icon: "shield",
            title: "食品安全合規",
            slug: "food-safety-compliance",
            description:
              "自動化 HACCP 監控、過敏原追蹤和 FDA/FSMA 審計準備",
          },
          {
            icon: "person",
            title: "前線駐場工程師",
            slug: "forward-deployed-engineers-food",
            description:
              "了解您生產線和衛生協定的駐場專家",
          },
          {
            icon: "chart",
            title: "生產分析",
            slug: "production-analytics",
            description:
              "即時 OEE 儀表板和跨生產線的批次變異分析",
          },
          {
            icon: "arrows",
            title: "自主工作流",
            slug: "agentic-workflows-food",
            description:
              "用於標籤合規、保質期測試和召回管理的自主代理",
          },
          {
            icon: "truck",
            title: "冷鏈優化",
            slug: "cold-chain-optimization",
            description:
              "易腐貨品的端到端溫度監控和物流優化",
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
          { label: "P&ID 識別", href: "#features" },
          { label: "知識圖譜", href: "#features" },
          { label: "自主工作流", href: "#features" },
          { label: "UniSim 整合", href: "#platform" },
          { label: "製程優化", href: "#platform" },
        ],
      },
      {
        title: "資源",
        links: [
          { label: "文件", href: "#" },
          { label: "案例研究", href: "#" },
          { label: "部落格", href: "#" },
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
          { label: "關於我們", href: "#" },
          { label: "加入我們", href: "#" },
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
    comingSoon: "即將推出",
    pageBeingWritten: "此頁面正在撰寫中",
    pageBeingWrittenDesc:
      "此功能的詳細文件即將推出。請稍後再來查看。",
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
    subtitle: "告訴我們您的挑戰——打字或錄製語音訊息。",
    name: "姓名",
    email: "電子信箱",
    company: "公司",
    yourMessage: "您的訊息",
    orRecordVoice: "或錄製語音",
    orTypeInstead: "或改用打字",
    sendMessage: "發送訊息",
    successTitle: "我們會與您聯繫",
    successDesc: "感謝您的來信。我們的團隊將在 24 小時內回覆。",
    close: "關閉",
    voiceMessage: "語音訊息",
    recording: "錄音中",
    recorded: "已錄製",
    record: "錄音",
    stop: "停止",
    reRecord: "重新錄製",
    voiceAttached: "語音訊息已附加",
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
};

export default zhTW;
