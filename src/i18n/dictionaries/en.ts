const en = {
  meta: {
    title: "Operon | AI-Powered Manufacturing Intelligence",
    description:
      "Customized AI systems for manufacturing and chemical engineering. Forward-deployed engineers, P&ID recognition, knowledge graphs, and agentic workflows.",
  },

  navbar: {
    solutions: "Solutions",
    company: "Company",
    partnerships: "Partnerships",
    signIn: "Sign In",
    industries: "Industries",
    solutionsFor: "Solutions",
    industriesList: [
      {
        name: "Chemical Engineering",
        href: "/industries/chemical-engineering",
        solutions: [
          { label: "P&ID Recognition", href: "/docs/pid-recognition" },
          { label: "P&ID Agent", href: "/docs/pid-agent" },
          { label: "Native Plugin", href: "/docs/native-plugin" },
          { label: "Agentic Workflows", href: "/docs/agentic-workflows" },
          { label: "Predictive Maintenance", href: "/docs/predictive-maintenance" },
          { label: "Forward-Deployed Engineers", href: "/docs/forward-deployed-engineers" },
        ],
      },
      {
        name: "Oil & Gas",
        href: "/industries/oil-gas",
        solutions: [
          { label: "P&ID Recognition", href: "/docs/pid-recognition" },
          { label: "Safety & Compliance", href: "/docs/safety-compliance" },
          { label: "Production Forecasting", href: "/docs/production-forecasting" },
          { label: "Agentic Workflows", href: "/docs/agentic-workflows" },
          { label: "Asset Integrity", href: "/docs/asset-integrity" },
          { label: "Forward-Deployed Engineers", href: "/docs/forward-deployed-engineers" },
        ],
      },
      {
        name: "Electronics Manufacturing",
        href: "/industries/electronics-manufacturing",
        solutions: [
          { label: "Schematic Recognition", href: "/docs/schematic-recognition" },
          { label: "Knowledge Graphs", href: "/docs/knowledge-graphs" },
          { label: "Yield Optimization", href: "/docs/yield-optimization" },
          { label: "Agentic Workflows", href: "/docs/agentic-workflows" },
          { label: "Supply Chain Intelligence", href: "/docs/supply-chain-intelligence" },
          { label: "Forward-Deployed Engineers", href: "/docs/forward-deployed-engineers" },
        ],
      },
      {
        name: "Cement Manufacturing",
        href: "/industries/cement-manufacturing",
        solutions: [
          { label: "Kiln Optimization", href: "/docs/kiln-optimization" },
          { label: "Quality Prediction", href: "/docs/quality-prediction" },
          { label: "Energy Management", href: "/docs/energy-management" },
          { label: "Agentic Workflows", href: "/docs/agentic-workflows" },
          { label: "Predictive Maintenance", href: "/docs/predictive-maintenance" },
          { label: "Forward-Deployed Engineers", href: "/docs/forward-deployed-engineers" },
        ],
      },
    ],
    companyLinks: [
      {
        title: "Company",
        items: [
          { label: "About Us", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        items: [
          { label: "Documentation", href: "/documentation" },
          { label: "Case Studies", href: "/case-studies" },
          { label: "Blog", href: "/blog" },
        ],
      },
    ],
  },

  hero: {
    headline1: "Domain specific AI systems",
    headline2: "for Manufacturing Industries.",
    talkToUs: "Talk to us",
    seeHow: "See how it works",
  },

  features: {
    transformHeading: "Transform operations,",
    transformHeading2: "automatically.",
    totalPids: "Total P&IDs processed",
    avgTime: "Avg time reduction",
    howItWorks: "Core Mission",
    sectionHeading: [
      { text: "We build " },
      { text: "intelligent systems" },
      { text: " for " },
      { text: "complex"},
      { text: " industrial workflows." },
    ],
    sectionSubheading: "Popular services:",
    learnMore: "Learn more",
    items: [
      {
        label: "PFD, P&ID Extraction",
        tag: "Chemical & Process Industry",
        slug: "pid-recognition",
        title: "Extract data automatically from your P&ID diagrams.",
        description:
          "We identify and track engineering components in your P&ID diagrams from first scan with 97% accuracy, allowing engineers to work with structured data immediately.",
      },
      {
        label: "PFD, P&ID Agent",
        tag: "Chemical & Process Industry",
        slug: "knowledge-graphs",
        title: "An agent that builds for you.",
        description:
          "Our domain-specific agent will build engineering diagrams such as PFD, P&ID for chemical engineers, accelerating the design cycles in your team.",
      },
      {
        label: "AI Native Plugin",
        tag: "Chemical & Process Industry",
        slug: "agentic-workflows",
        title: "Native plugin directly embedded to your process simulation software",
        description:
          "We deploy local services such as AI native plugin to your process simulation software such as Aspen, UNISM, AVEVA systems...etc"}
    ],
    // Mockup strings
    eligible: "Eligible",
    detected: "Detected Oct 8, 2024",
    componentsDetected: "Components Detected",
    heatExchanger: "Heat Exchanger",
    controlValve: "Control Valve",
    pressureRelief: "Pressure Relief",
    accuracy: "Accuracy",
    confidenceScore: "97.3% confidence score",
    source: "Source",
    viewedSafety: "2x viewed safety protocols",
    scrolledSpecs: "Scrolled specs twice",
    modifiedPid: "Modified P&ID markup 4 times",
    knowledgePattern: "Knowledge Pattern Detected",
    startedCrossRef: "Started document cross-reference",
    autoLinked: "Auto-linked 23 related P&IDs",
    reportGenerated: "Report Generated",
    safetyReport: "Safety compliance report auto-generated for Q4 review.",
    alert: "Alert",
    alertDesc: "Detected 2 anomalies in process flow that match historical patterns.",
    optimizingWorkflow: "optimizing workflow sequence",
    aiWorkflow: "AI Workflow",
    aiWorkflowDesc: "Scheduling preventive maintenance based on predicted equipment stress.",
  },

  platform: {
    popularServices: "Popular Services",
    heading: "We provide domain specific AI solutions for",
    readMore: "Read more",
    requestThis: "Request this",
    requestable: "On request",
    available: "Available",
    industries: [
      {
        label: "chemical engineering",
        capabilities: [
          { icon: "monitor", title: "P&ID Recognition", slug: "pid-recognition", description: "Processes thousands of engineering diagrams with 97%+ accuracy in minutes" },
          { icon: "beaker", title: "P&ID Agent", slug: "pid-agent", description: "A domain-specific AI agent that builds PFD and P&ID diagrams for chemical engineers, accelerating design cycles" },
          { icon: "person", title: "Forward-Deployed Engineers", slug: "forward-deployed-engineers", description: "On-site experts who learn your workflows and deploy customized AI in under 6 weeks" },
          { icon: "cpu", title: "Native Plugin in Process Simulation Software", slug: "native-plugin", description: "AI native plugin embedded directly into Aspen, UniSim, AVEVA and other process simulation platforms" },
          { icon: "arrows", title: "Agentic Workflows", slug: "agentic-workflows", description: "Autonomous agents that handle document processing, compliance checks, and reporting" },
          { icon: "cog", title: "Predictive Maintenance", slug: "predictive-maintenance", description: "Predict equipment failures before they happen using vibration, temperature, and process data" },
        ],
      },
      {
        label: "oil & gas industries",
        capabilities: [
          { icon: "monitor", title: "P&ID Recognition", slug: "pid-recognition-oil-gas", description: "Digitize legacy piping and instrumentation diagrams across upstream and downstream assets" },
          { icon: "shield", title: "Safety & Compliance", slug: "safety-compliance", description: "Automated HAZOP analysis and regulatory compliance checks against API and ASME standards" },
          { icon: "person", title: "Forward-Deployed Engineers", slug: "forward-deployed-engineers-oil-gas", description: "On-site experts embedded with your operations team for rapid AI deployment" },
          { icon: "chart", title: "Production Forecasting", slug: "production-forecasting", description: "ML-driven well performance prediction and reservoir optimization models" },
          { icon: "arrows", title: "Agentic Workflows", slug: "agentic-workflows-oil-gas", description: "Autonomous agents for permit processing, inspection scheduling, and field reporting" },
          { icon: "cog", title: "Asset Integrity", slug: "asset-integrity", description: "Predictive maintenance and corrosion monitoring across pipelines and facilities" },
        ],
      },
      {
        label: "electronics manufacturing",
        capabilities: [
          { icon: "cpu", title: "Schematic Recognition", slug: "schematic-recognition", description: "Digitize circuit schematics and PCB layouts with component-level accuracy" },
          { icon: "globe", title: "Knowledge Graphs", slug: "knowledge-graphs-electronics", description: "Link BOMs, datasheets, and test reports into a connected intelligence layer" },
          { icon: "person", title: "Forward-Deployed Engineers", slug: "forward-deployed-engineers-electronics", description: "On-site experts who integrate with your fab and assembly workflows" },
          { icon: "chart", title: "Yield Optimization", slug: "yield-optimization", description: "Identify defect root causes and optimize process parameters to maximize yield" },
          { icon: "arrows", title: "Agentic Workflows", slug: "agentic-workflows-electronics", description: "Automated quality inspection, lot tracking, and compliance documentation" },
          { icon: "clipboard", title: "Supply Chain Intelligence", slug: "supply-chain-intelligence", description: "Real-time component availability tracking and alternative part recommendations" },
        ],
      },
      {
        label: "cement manufacturing",
        capabilities: [
          { icon: "monitor", title: "Kiln Optimization", slug: "kiln-optimization", description: "AI-driven rotary kiln temperature and feed rate optimization for consistent clinker quality" },
          { icon: "chart", title: "Quality Prediction", slug: "quality-prediction", description: "Predict cement strength and composition in real-time using raw mix and process data" },
          { icon: "person", title: "Forward-Deployed Engineers", slug: "forward-deployed-engineers-cement", description: "On-site experts who understand your plant layout, raw materials, and grinding circuits" },
          { icon: "bolt", title: "Energy Management", slug: "energy-management", description: "Optimize thermal and electrical energy consumption across pyroprocessing and grinding" },
          { icon: "arrows", title: "Agentic Workflows", slug: "agentic-workflows-cement", description: "Autonomous agents for environmental compliance reporting, maintenance scheduling, and shift handovers" },
          { icon: "cog", title: "Predictive Maintenance", slug: "predictive-maintenance", description: "Predict equipment failures in crushers, mills, and kilns before they happen using vibration, temperature, and process data" },
        ],
      },
    ],
  },

  showcase: {
    items: [
      { title: "P&ID Analysis", description: "Track component behavior to predict maintenance with 97% accuracy. Automatically trigger interventions in under 50ms." },
      { title: "Process Simulation", description: "Detect when processes are about to fail. Send targeted reports via email, SMS, or dashboards to recover efficiency." },
      { title: "Intelligent Operations", description: "Each process gets personalized monitoring based on browsing behavior. 384 data points create individual operational profiles." },
    ],
    pidScanner: "pid-scanner",
    components: "12,847 components",
    accuracyLabel: "97.3% accuracy",
    processSim: "Process Simulation",
    feedStream: "Feed Stream",
    springConfig: "Spring Config",
    cartAid: "Cart AID",
    returnCost: "Return cost",
    silMessage: "\u201CHi David, I noticed you had questions about the SIL report...\u201D",
    purchaseSuccessful: "Purchase successful",
    agentLabel: "agent.01",
    agentLabel2: "agent.02",
    activeCount: "3 active",
    agents: [
      { name: "Emily", status: "analyzing cart hesitation" },
      { name: "Marcus", status: "detecting matching patterns" },
      { name: "Amy", status: "optimizing response timing" },
    ],
  },

  faq: {
    label: "FAQ",
    heading: "Commonly Asked Questions",
    items: [
      { q: "What's the actual ROI I can expect?", a: "Most clients see 60-80% reduction in document processing time within the first month. Our P&ID recognition alone saves hundreds of engineering hours per project. We provide detailed ROI projections during our initial consultation." },
      { q: "How is this different from generic AI tools?", a: "Unlike general-purpose AI, Operon is purpose-built for chemical engineering. Our models are trained on millions of P&IDs, process flow diagrams, and engineering documents. We deploy engineers who understand your industry on-site." },
      { q: "Do I need technical expertise to use Operon?", a: "No. Our forward-deployed engineers handle the technical implementation. Install our connector with a single configuration change. The AI learns your operations automatically. Most teams manage everything themselves without any technical overhead." },
      { q: "Will this work for my specific type of facility?", a: "We've deployed across refineries, chemical plants, pharmaceutical manufacturing, and specialty chemical facilities. Our AI adapts to your specific equipment, processes, and documentation standards." },
      { q: "How much time will I need to manage this?", a: "Minimal. After initial deployment (typically under 6 weeks), the system runs autonomously. Our agents handle document processing, compliance checks, and reporting. You focus on high-level decisions." },
      { q: "What if I'm already using another platform?", a: "Operon integrates with your existing tools\u2014UniSim, Aspen, SAP, and more. We augment your current workflow rather than replacing it. Our knowledge graphs connect to your existing document management systems." },
    ],
  },

  cta: {
    lotsToShow: "Lots to show you",
    heading: "Transform your plant operations, automatically",
    description: "Let us show you how true AI-powered engineering intelligence looks in action. You'll know in minutes if it's a fit.",
    talkToUs: "Talk to us",
    seeHow: "See how it works",
  },

  footer: {
    copyright: "Operon Solutions. All Rights Reserved.",
    cols: [
      { title: "Solutions", links: [
        { label: "P&ID Recognition", href: "/docs/pid-recognition" },
        { label: "P&ID Agent", href: "/docs/pid-agent" },
        { label: "Native Plugin", href: "/docs/native-plugin" },
        { label: "Predictive Maintenance", href: "/docs/predictive-maintenance" },
        { label: "Agentic Workflows", href: "/docs/agentic-workflows" },
      ]},
      { title: "Resources", links: [
        { label: "Documentation", href: "/documentation" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blog", href: "/blog" },
      ]},
      { title: "Persona", links: [
        { label: "Process Engineers", href: "#" },
        { label: "Plant Managers", href: "#" },
        { label: "Operations Teams", href: "#" },
      ]},
      { title: "Company", links: [
        { label: "About us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "#contact" },
        { label: "Legal", href: "#" },
      ]},
    ],
  },

  docs: {
    platform: "Platform",
    features: "Features",
    home: "Home",
    readyToStart: "Ready to get started?",
    readyDesc: "Our forward-deployed engineers can have you up and running within your first week.",
    bookDemo: "Book a demo",
    exploreCaps: "Explore capabilities",
    comingSoon: "In Development",
    pageBeingWritten: "Want this solution?",
    pageBeingWrittenDesc: "We're exploring this capability and would love to hear from you. If this solution would solve a real problem for your team, let us know — your input directly shapes what we build next.",
    interestQuestion: "Would this be valuable for your operations?",
    voteYes: "Yes, I need this",
    voteMaybe: "Interested, tell me more",
    thankYou: "Thanks for your input!",
    thankYouDesc: "We've noted your interest. Want to discuss your use case with our team?",
    scheduleCall: "Schedule a call",
    orReachOut: "Or leave your email and we'll reach out",
    emailSubmit: "Submit",
    backToPlatform: "Back to platform",
    notFound: "Not Found",
    minRead: "min read",
    entries: {
      "pid-recognition": {
        title: "P&ID Recognition",
        subtitle: "How Operon identifies 97% of equipment from engineering diagrams automatically",
        industry: "Chemical Engineering",
        readTime: "8 min read",
        content: `
## What is P&ID Recognition?

Piping and Instrumentation Diagrams (P&IDs) are the backbone of process engineering. They define every valve, pump, heat exchanger, and instrument in a plant \u2014 yet most facilities still manage them as static PDFs or paper drawings.

Operon's P&ID Recognition engine uses computer vision and domain-specific AI to **automatically identify, classify, and digitize** every component on a P&ID sheet.

> "We processed 20,000+ legacy P&IDs within a month \u2014 work that would have taken our team plenty of months manually." 

---

## How it works

### 1. Scan & Ingest

Upload your P&ID drawings in any format \u2014 PDF, TIFF, DWG, or even scanned paper documents. Our preprocessing pipeline handles:

- Automatic deskewing and noise removal
- Multi-page document splitting
- Resolution normalization for consistent detection

> **Supported formats:** PDF, TIFF, DWG, DXF, PNG, JPEG, and scanned paper documents up to A0 size.

### 2. Component Detection

Our models are trained on **hundreds of thousands of real engineering drawings** across ISA, ISO, and proprietary symbol sets. We detect:

- **Equipment** \u2014 vessels, tanks, columns, heat exchangers, reactors
- **Instruments** \u2014 pressure gauges, flow meters, temperature transmitters
- **Valves** \u2014 control valves, check valves, relief valves, manual valves
- **Piping** \u2014 process lines, utility lines, instrument connections
- **Annotations** \u2014 tag numbers, line numbers, spec breaks

### 3. Relationship Mapping

Beyond detection, we understand **how components connect**. The system maps:

- Process flow direction
- Instrument-to-equipment associations
- Control loop relationships (PV \u2192 controller \u2192 CV)
- Line spec transitions

### 4. Digital Twin Output

The result is a structured, queryable digital representation of your P&ID \u2014 not just an image with bounding boxes, but a **graph of engineering knowledge**.

> The digital twin output integrates directly with your existing CMMS, ERP, and simulation tools \u2014 no manual data entry required.

---

## Accuracy & Performance

| Metric | Value |
|--------|-------|
| Component detection accuracy | 97.3% |
| Symbol classification accuracy | 95.8% |
| Tag number OCR accuracy | 99.1% |
| Processing speed | ~30 seconds per sheet |
| Supported symbol standards | ISA 5.1, ISO 14617, PIP, custom |

---

## Why it matters

### Before Operon

- Engineers spend **40+ hours per project** manually reviewing P&IDs
- Errors propagate across revisions because changes aren't tracked systematically
- Knowledge lives in individual engineers' heads, not in systems

### After Operon

- P&ID review drops to **minutes, not days**
- Every component is tracked across every revision automatically
- Searchable, queryable equipment database built from your actual drawings

> "The accuracy blew us away. It caught components our senior engineers had missed in manual reviews."

---

## Integration

P&ID Recognition feeds directly into:

- **Knowledge Graphs** \u2014 detected components become nodes in your engineering knowledge network
- **Agentic Workflows** \u2014 trigger automated compliance checks when new P&IDs are processed
- **UniSim Integration** \u2014 map detected equipment to simulation models

---

## Get Started

Ready to digitize your P&IDs? Our forward-deployed engineers can have you processing drawings within your first week.
`,
      },
      "pid-agent": {
        title: "P&ID Agent",
        subtitle: "A domain-specific AI agent that builds PFD and P&ID diagrams, accelerating design cycles for chemical engineers",
        industry: "Chemical Engineering",
        readTime: "6 min read",
        content: `
## What is the P&ID Agent?

Designing Process Flow Diagrams (PFDs) and Piping & Instrumentation Diagrams (P&IDs) is one of the most time-consuming stages of process engineering. Every line, instrument, and control loop must follow strict standards \u2014 ISA, ISO, and company-specific conventions \u2014 while reflecting the actual process design intent.

Operon's P&ID Agent is a **domain-specific AI that generates engineering diagrams** from natural-language process descriptions, existing simulation data, or partial sketches.

> "What used to take our junior engineers 2 weeks of drafting now takes a conversation with the agent and a few rounds of review."

---

## How it works

### 1. Process Intent Capture

Describe what you need in plain language or feed in simulation data:

- "Design a distillation column with reflux drum, reboiler, and condenser for a benzene-toluene separation"
- Import stream data directly from Aspen HYSYS or UniSim
- Upload a rough hand sketch and the agent will formalize it

### 2. Intelligent Diagram Generation

The agent generates standards-compliant diagrams with:

- **Correct symbology** \u2014 ISA 5.1, ISO 14617, or your company symbol library
- **Proper tag numbering** \u2014 follows your facility's naming conventions
- **Control loops** \u2014 automatically adds instrumentation based on process requirements
- **Line specifications** \u2014 assigns line numbers, sizes, and spec breaks

### 3. Iterative Refinement

Review the generated diagram and refine through conversation:

- "Add a bypass around the control valve on the feed line"
- "Change the heat exchanger to a plate-and-frame type"
- "Add SIS instrumentation for the high-pressure trip"

The agent maintains context across iterations, understanding the full process topology.

### 4. Export & Integration

Export to standard formats:

- **AutoCAD DWG/DXF** \u2014 native CAD integration
- **SVG/PDF** \u2014 for documentation and review
- **Structured data** \u2014 equipment lists, line lists, instrument indexes

> Generated diagrams integrate directly with our P&ID Recognition engine for automated verification.

---

## Why it matters

Creating P&IDs manually requires deep knowledge of symbology standards, understanding of process control philosophy, careful attention to tag numbering conventions, and multiple review cycles with senior engineers. This makes P&ID creation a **bottleneck** in every capital project.

### With the P&ID Agent

- **Draft diagrams in minutes** instead of days
- **Consistent standards compliance** across all drawings
- **Junior engineers become productive faster** with AI-assisted drafting
- **Senior engineers focus on review** instead of drafting from scratch

> "The agent doesn't replace our engineers \u2014 it gives them a 10x head start on every diagram."

---

## Get Started

The P&ID Agent works best alongside our P&ID Recognition engine and Forward-Deployed Engineers. Our team configures the agent to match your specific symbol library, tag conventions, and design standards.
`,
      },
      "native-plugin": {
        title: "Native Plugin in Process Simulation Software",
        subtitle: "AI capabilities embedded directly into Aspen, UniSim, AVEVA and other process simulation platforms",
        industry: "Chemical Engineering",
        readTime: "7 min read",
        content: `
## What is the Native Plugin?

Process engineers live inside simulation software \u2014 Aspen HYSYS, Honeywell UniSim Design, AVEVA PRO/II. Switching between your simulator and a separate AI platform breaks your workflow.

Operon's Native Plugin **embeds AI capabilities directly into your existing simulation environment**. No context switching. No data export/import. AI assistance right where you work.

> "It's like having a senior process engineer looking over your shoulder inside HYSYS, catching issues before they become problems."

---

## How it works

### 1. One-Click Installation

Install the plugin directly into your simulation software:

- **Aspen HYSYS / Aspen Plus** \u2014 native add-in via the Aspen ecosystem
- **Honeywell UniSim Design** \u2014 extension module with full API access
- **AVEVA PRO/II** \u2014 companion tool with live data bridge
- **CHEMCAD** \u2014 integrated sidebar plugin

The plugin runs locally on your machine \u2014 your simulation data never leaves your network.

### 2. In-Context AI Assistance

With the plugin active, you get AI capabilities inside your simulator:

- **Model validation** \u2014 real-time checks against your P&ID data and design standards
- **Parameter suggestions** \u2014 AI-recommended operating conditions based on similar processes
- **Anomaly detection** \u2014 highlights when simulation results deviate from expected patterns
- **Auto-documentation** \u2014 generates simulation basis documents as you build models

### 3. Local-First Architecture

All AI inference runs locally via our edge deployment:

- **No cloud dependency** \u2014 works offline and in air-gapped environments
- **Sub-second response times** \u2014 no network latency
- **Data sovereignty** \u2014 your proprietary process data stays on your infrastructure

---

## Supported Platforms

| Platform | Plugin Type | Key Capabilities |
|----------|------------|-----------------|
| Aspen HYSYS | Native add-in | Model validation, parameter optimization, auto-documentation |
| Aspen Plus | Native add-in | Steady-state validation, sensitivity analysis assistance |
| UniSim Design | Extension module | Full read/write, live P&ID sync, scenario generation |
| AVEVA PRO/II | Companion tool | Cross-reference, model comparison, data bridge |
| CHEMCAD | Sidebar plugin | Equipment sizing validation, stream analysis |

---

## Why it matters

Most AI tools for engineering require you to export data, upload it to a separate platform, wait for results, and manually apply insights back. This friction means engineers **don't use AI tools** even when they would help.

By embedding AI directly into the simulator, we eliminate every step of friction.

> "We tried three different AI platforms before Operon. The others required us to change how we work. Operon's plugin just makes our existing workflow smarter."

---

## Get Started

Our forward-deployed engineers handle the full plugin installation and configuration \u2014 typically within 2-3 weeks.
`,
      },
      "predictive-maintenance": {
        title: "Predictive Maintenance",
        subtitle: "Predict equipment failures before they happen using vibration, temperature, and process data",
        industry: "Chemical Engineering",
        readTime: "7 min read",
        content: `
## What is Predictive Maintenance?

Unplanned equipment failures cost the process industry **billions of dollars annually** in lost production, emergency repairs, and safety incidents. Traditional maintenance strategies \u2014 run-to-failure or calendar-based schedules \u2014 either come too late or waste resources.

Operon's Predictive Maintenance uses **machine learning models trained on your actual equipment data** to predict failures days or weeks before they occur.

> "We caught a bearing failure on our main compressor 12 days before it would have caused a plant trip. That single prediction saved us an estimated M in lost production."

---

## How it works

### 1. Data Integration

Operon connects to your existing data sources:

- **Historians** \u2014 PI, IP.21, DeltaV, Honeywell PHD
- **Vibration monitoring** \u2014 CSI, Bently Nevada, SKF
- **DCS/SCADA** \u2014 real-time process data
- **CMMS** \u2014 maintenance records, work orders, failure history

No new sensors required \u2014 we work with the data you already collect.

### 2. Equipment-Specific Models

Operon builds **models specific to each piece of equipment**:

- **Rotating equipment** \u2014 pumps, compressors, turbines, fans
- **Heat exchangers** \u2014 fouling prediction, tube leak detection
- **Vessels & columns** \u2014 corrosion rate prediction, tray damage detection
- **Valves** \u2014 control valve stiction, relief valve testing prediction

Each model learns the normal operating envelope for that specific asset.

### 3. Failure Prediction

The system continuously monitors for early warning signs:

- **Anomaly detection** \u2014 identifies subtle deviations from normal behavior
- **Degradation tracking** \u2014 monitors gradual equipment deterioration
- **Remaining useful life** \u2014 estimates time until intervention is needed
- **Root cause analysis** \u2014 suggests probable failure modes

### 4. Action Integration

Predictions connect to your existing workflows:

- Automatic work order generation in your CMMS
- Priority-ranked maintenance recommendations
- Spare parts inventory alerts
- Integration with turnaround planning

---

## Performance

| Metric | Value |
|--------|-------|
| Failure prediction accuracy | 92%+ |
| Average lead time | 14 days before failure |
| False positive rate | <5% |
| Unplanned downtime reduction | 40-60% |
| Maintenance cost reduction | 25-35% |

---

## Why it matters

By learning from your actual equipment behavior \u2014 not generic failure curves \u2014 our models predict failures with the specificity your operations team needs.

> "We reduced our unplanned downtime by 45% in the first year. The maintenance team went from fighting fires to planning ahead."

---

## Get Started

Predictive Maintenance works best when combined with our P&ID Recognition and Knowledge Graphs. Our forward-deployed engineers handle the full deployment \u2014 typically within 4-6 weeks.
`,
      },
    },
  },

  industry: {
    allSolutions: "All Solutions",
    home: "Home",
    talkToUs: "Talk to us",
    seeSolutions: "See solutions",
    theChallenge: "The Challenge",
    challengeHeading: "What {name} teams face today",
    ourSolutions: "Our Solutions",
    solutionsHeading: "Purpose-built AI for {name}",
    learnMore: "Learn more",
    caseStudies: "Case Studies",
    resultsInProd: "Results in production",
    getStarted: "Get Started",
    transformHeading: "Transform your {name} operations",
    transformDesc: "Our forward-deployed engineers can have you up and running within your first week. See results, not slide decks.",
    bookDemo: "Book a demo",
    backToHome: "Back to home",
    entries: {
      "chemical-engineering": {
        name: "Chemical Engineering",
        headline: "AI built for the complexity of chemical plants",
        subheadline: "From P&ID recognition to autonomous compliance workflows, we deploy domain-specific AI that understands your processes, your equipment, and your engineering standards.",
        stats: [
          { value: "97.3%", label: "P&ID accuracy" },
          { value: "85%", label: "Time reduction" },
          { value: "<6 wk", label: "Deployment" },
          { value: "10,000+", label: "P&IDs processed" },
        ],
        introParagraphs: [
          "Chemical plants run on decades of institutional knowledge trapped in P&IDs, safety reports, and process simulations. When a senior engineer retires, that knowledge walks out the door. When a plant expansion requires reviewing thousands of legacy drawings, teams spend months on manual work that should take days.",
          "Operon changes this. We deploy forward-deployed engineers who learn your specific processes, equipment naming conventions, and safety standards. They configure AI systems that understand your plant \u2014 not a generic chemical engineering textbook, but your actual operations.",
        ],
        solutions: [
          { title: "P&ID Recognition", slug: "pid-recognition", description: "Automatically identify, classify, and digitize every component on your P&ID sheets. Our models are trained on hundreds of thousands of real engineering drawings across ISA, ISO, and proprietary symbol sets.", stat: "97.3%", statLabel: "component detection accuracy" },
          { title: "Knowledge Graphs", slug: "knowledge-graphs", description: "Transform document silos into connected engineering intelligence. Every P&ID, safety report, maintenance log, and simulation result becomes a queryable node in your knowledge network.", stat: "384+", statLabel: "document signals analyzed" },
          { title: "UniSim Integration", slug: "unisim-integration", description: "Native fluency across UniSim, Aspen HYSYS, and 50+ engineering tools. Map detected P&ID equipment directly to simulation models for automated validation.", stat: "50+", statLabel: "tools supported" },
          { title: "Agentic Workflows", slug: "agentic-workflows", description: "Autonomous AI agents that handle document processing, HAZOP compliance checks, safety report generation, and cross-reference validation without human intervention.", stat: "24/7", statLabel: "autonomous operation" },
          { title: "Process Optimization", slug: "process-optimization", description: "React to billions of sensor events with ML-driven process improvements. Predict equipment stress, optimize throughput, and reduce energy consumption.", stat: "85%", statLabel: "time saved on reviews" },
          { title: "Forward-Deployed Engineers", slug: "forward-deployed-engineers", description: "On-site experts who learn your workflows and deploy customized AI in under 6 weeks. They speak your language \u2014 process engineering, not just machine learning.", stat: "<6", statLabel: "weeks to production" },
        ],
        caseStudies: [
          { company: "Major Petrochemical Refinery", result: "Processed 2,400 legacy P&IDs in a single weekend \u2014 work that would have taken the engineering team 6 months manually.", quote: "The accuracy blew us away. It caught components our senior engineers had missed in manual reviews.", person: "David K.", role: "VP of Engineering" },
          { company: "Specialty Chemicals Manufacturer", result: "Reduced HAZOP preparation time by 70% and achieved zero audit findings in their next regulatory review.", quote: "We went from dreading audits to walking in with complete confidence. Every document is cross-referenced and up to date.", person: "Sarah M.", role: "Plant Safety Manager" },
        ],
        challenges: [
          { title: "Legacy documentation", description: "Thousands of P&IDs across decades of plant modifications, many still on paper or in obsolete CAD formats." },
          { title: "Knowledge silos", description: "Critical process knowledge trapped in individual engineers\u2019 heads, unstructured documents, and disconnected databases." },
          { title: "Compliance burden", description: "OSHA PSM, EPA RMP, and industry standards require constant documentation updates that consume engineering hours." },
          { title: "Simulation drift", description: "Process simulation models fall out of sync with actual plant modifications, leading to unreliable predictions." },
        ],
      },
    },
  },

  contact: {
    title: "Talk to us",
    subtitle: "Send us a message or schedule a call with our team.",
    name: "Name",
    email: "Email",
    company: "Company",
    yourMessage: "Your message",
    sendMessage: "Send message",
    scheduleCall: "Schedule a call",
    successTitle: "We\u2019ll be in touch",
    successDesc: "Thank you for reaching out. Our team will get back to you within 24 hours.",
    close: "Close",
    namePlaceholder: "Jane Smith",
    emailPlaceholder: "jane@company.com",
    companyPlaceholder: "Acme Chemical Corp",
    messagePlaceholder: "Tell us about your operations, challenges, or what you\u2019d like to explore...",
  },

  theme: {
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },

  langSwitcher: {
    en: "EN",
    "zh-TW": "\u7E41\u4E2D",
  },

  about: {
    label: "Company",
    title: "Building AI that understands industry.",
    subtitle: "We are a team of engineers and scientists building domain-specific AI systems for manufacturing industries.",
    sections: [
      {
        heading: "Our Mission",
        body: "Manufacturing runs on decades of institutional knowledge — trapped in P&IDs, safety reports, and process simulations. When senior engineers retire, that knowledge walks out the door. We build AI systems that capture, structure, and operationalize this expertise so it stays in the organization forever.",
      },
      {
        heading: "How We Work",
        body: "We deploy forward-deployed engineers who learn your specific processes, equipment naming conventions, and safety standards. They configure AI systems that understand your plant — not a generic chemical engineering textbook, but your actual operations. Most teams are up and running within 6 weeks.",
      },
      {
        heading: "Our Team",
        body: "Operon was founded by engineers who spent years working in chemical plants and refineries. We understand the gap between what generic AI promises and what manufacturing actually needs. Our team combines deep domain expertise in chemical engineering with cutting-edge machine learning research.",
      },
    ],
    cta: "Want to learn more about what we do?",
  },

  careers: {
    label: "Careers",
    title: "Build the future of industrial AI.",
    subtitle: "Join a team solving real problems for the world's most complex industries.",
    intro: "We're looking for people who are excited about applying AI to hard, real-world problems. Our team works directly with engineers at chemical plants, refineries, and manufacturing facilities — shipping software that makes a tangible difference in how they work every day.",
    openRolesHeading: "Open Roles",
    roles: [
      { title: "Forward-Deployed Engineer", location: "Taipei / On-site", type: "Full-time" },
      { title: "ML Engineer — Computer Vision", location: "Remote", type: "Full-time" },
      { title: "Full-Stack Engineer", location: "Taipei", type: "Full-time" },
      { title: "Chemical Engineering Intern", location: "Taipei", type: "Internship" },
    ],
    cta: "Don't see a perfect fit?",
    ctaDesc: "We're always looking for talented people. Send us your resume and tell us what excites you about industrial AI.",
    applyNow: "Get in touch",
  },

  blog: {
    label: "Blog",
    title: "Insights & Updates",
    subtitle: "Thoughts on industrial AI, manufacturing technology, and building domain-specific systems.",
    posts: [
      {
        title: "Why Generic AI Fails in Manufacturing",
        date: "Mar 2026",
        tag: "Industry",
        summary: "General-purpose LLMs can write code and summarize documents — but they fall flat when you need to interpret a P&ID or validate a HAZOP report. Here's why domain specificity matters.",
      },
      {
        title: "From 2,400 Legacy P&IDs to Structured Data in a Weekend",
        date: "Feb 2026",
        tag: "Case Study",
        summary: "How a major petrochemical refinery digitized their entire P&ID library using Operon's recognition engine — work that would have taken their team 6 months.",
      },
      {
        title: "The Forward-Deployed Engineering Model",
        date: "Jan 2026",
        tag: "Company",
        summary: "Why we embed engineers at customer sites instead of shipping generic SaaS, and how this approach leads to dramatically better outcomes.",
      },
    ],
  },

  caseStudies: {
    label: "Case Studies",
    title: "Real results in production.",
    subtitle: "See how manufacturing teams use Operon to transform their operations.",
    studies: [
      {
        company: "Major Petrochemical Refinery",
        industry: "Chemical Engineering",
        result: "Processed 2,400 legacy P&IDs in a single weekend — work that would have taken the engineering team 6 months manually.",
        quote: "The accuracy blew us away. It caught components our senior engineers missed in manual reviews.",
        person: "David K.",
        role: "VP of Engineering",
      },
      {
        company: "Specialty Chemicals Manufacturer",
        industry: "Chemical Engineering",
        result: "Reduced HAZOP preparation time by 70% and achieved zero audit findings in their next regulatory review.",
        quote: "We went from dreading audits to walking in with full confidence. Every document was cross-referenced and current.",
        person: "Sarah M.",
        role: "Plant Safety Manager",
      },
      {
        company: "Semiconductor Fab",
        industry: "Electronics Manufacturing",
        result: "Digitized 15,000+ schematic documents and reduced design review cycles from 2 weeks to 3 days.",
        quote: "The knowledge graph connected documents our teams didn't even know were related. It changed how we do design reviews entirely.",
        person: "James L.",
        role: "Director of Engineering",
      },
    ],
    cta: "Ready to see similar results?",
  },

  documentation: {
    label: "Documentation",
    title: "Documentation",
    subtitle: "Technical guides and references for the Operon platform.",
    categories: [
      { title: "P&ID Recognition", slug: "pid-recognition", description: "Learn how Operon identifies and digitizes engineering diagrams with 97%+ accuracy." },
      { title: "Knowledge Graphs", slug: "knowledge-graphs", description: "Connect documents, assets, and engineering data into a queryable knowledge network." },
      { title: "Agentic Workflows", slug: "agentic-workflows", description: "Configure autonomous agents for compliance checks, reporting, and document processing." },
    ],
  },

  signin: {
    title: "Sign in",
    subtitle: "Access your workspace and projects.",
    continueGoogle: "Continue with Google",
    continueLinkedin: "Continue with LinkedIn",
    or: "or",
    emailPlaceholder: "name@company.com",
    continueEmail: "Continue with email",
    sending: "Sending...",
    codeSentTo: "We sent a code to",
    enterCode: "Enter code",
    verify: "Verify",
    differentEmail: "Use a different email",
    failedSend: "Failed to send code",
    invalidCode: "Invalid code",
    terms: "By signing in, you agree to our",
    termsLink: "Terms of Service",
    and: "and",
    privacyLink: "Privacy Policy",
  },
} as const;

export default en;
// Deep-writable: replace literal string types with `string` so translations can use different text
type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepStringify<U>[]
    : T extends object
      ? { [K in keyof T]: DeepStringify<T[K]> }
      : T;

export type Dictionary = DeepStringify<typeof en>;
