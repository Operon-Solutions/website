const en = {
  meta: {
    title: "Operon | AI-Powered Manufacturing Intelligence",
    description:
      "Customized AI systems for manufacturing and chemical engineering. On-site engineers, P&ID recognition, knowledge graphs, and agentic workflows.",
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
          { label: "CAD / P&ID AI Agent", href: "/docs/pid-agent" },
          { label: "Native Plugin", href: "/docs/native-plugin" },
          { label: "Agentic Workflows", href: "/docs/agentic-workflows" },
          { label: "Predictive Maintenance", href: "/docs/predictive-maintenance" },
          { label: "On-Site Engineers", href: "/docs/on-site-engineers" },
        ],
      },
      {
        name: "Oil & Gas",
        href: "/industries/oil-gas",
        solutions: [
          { label: "P&ID Recognition", href: "/docs/pid-recognition" },
          { label: "CAD / P&ID AI Agent", href: "/docs/pid-agent" },
          { label: "Safety & Compliance", href: "/docs/safety-compliance" },
          { label: "Predictive Maintenance", href: "/docs/predictive-maintenance" },
          { label: "Agentic Workflows", href: "/docs/agentic-workflows" },
          { label: "On-Site Engineers", href: "/docs/on-site-engineers" },
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
          { label: "On-Site Engineers", href: "/docs/on-site-engineers" },
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
          { label: "On-Site Engineers", href: "/docs/on-site-engineers" },
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
        slug: "pid-agent",
        title: "An agent that builds for you.",
        description:
          "Our domain-specific agent will build engineering diagrams such as PFD, P&ID for chemical engineers, accelerating the design cycles in your team.",
      },
      {
        label: "AI Native Plugin",
        tag: "Chemical & Process Industry",
        slug: "native-plugin",
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
          { icon: "beaker", title: "CAD / P&ID AI Agent", slug: "pid-agent", description: "A domain-specific AI agent that builds PFD and P&ID diagrams for chemical engineers, accelerating design cycles" },
          { icon: "person", title: "On-Site Engineers", slug: "on-site-engineers", description: "On-site experts who learn your workflows and deploy customized AI in under 6 weeks" },
          { icon: "cpu", title: "Native Plugin in Process Simulation Software", slug: "native-plugin", description: "AI native plugin embedded directly into Aspen, UniSim, AVEVA and other process simulation platforms" },
          { icon: "arrows", title: "Agentic Workflows", slug: "agentic-workflows", description: "Autonomous agents that handle document processing, compliance checks, and reporting" },
          { icon: "cog", title: "Predictive Maintenance", slug: "predictive-maintenance", description: "Predict equipment failures before they happen using vibration, temperature, and process data" },
        ],
      },
      {
        label: "oil & gas industries",
        capabilities: [
          { icon: "monitor", title: "P&ID Recognition", slug: "pid-recognition", description: "Digitize legacy piping and instrumentation diagrams across upstream and downstream assets" },
          { icon: "beaker", title: "CAD / P&ID AI Agent", slug: "pid-agent", description: "AI agent that builds P&ID diagrams from process descriptions, simulation data, or partial sketches" },
          { icon: "shield", title: "Safety & Compliance", slug: "safety-compliance", description: "Automated HAZOP analysis and regulatory compliance checks against API and ASME standards" },
          { icon: "person", title: "On-Site Engineers", slug: "on-site-engineers-oil-gas", description: "On-site experts embedded with your operations team for rapid AI deployment" },
          { icon: "cog", title: "Predictive Maintenance", slug: "predictive-maintenance", description: "Predict equipment failures before they happen using vibration, temperature, and process data" },
          { icon: "arrows", title: "Agentic Workflows", slug: "agentic-workflows-oil-gas", description: "Autonomous agents for permit processing, inspection scheduling, and field reporting" },
        ],
      },
      {
        label: "electronics manufacturing",
        capabilities: [
          { icon: "cpu", title: "Schematic Recognition", slug: "schematic-recognition", description: "Digitize circuit schematics and PCB layouts with component-level accuracy" },
          { icon: "globe", title: "Knowledge Graphs", slug: "knowledge-graphs-electronics", description: "Link BOMs, datasheets, and test reports into a connected intelligence layer" },
          { icon: "person", title: "On-Site Engineers", slug: "on-site-engineers-electronics", description: "On-site experts who integrate with your fab and assembly workflows" },
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
          { icon: "person", title: "On-Site Engineers", slug: "on-site-engineers-cement", description: "On-site experts who understand your plant layout, raw materials, and grinding circuits" },
          { icon: "bolt", title: "Energy Management", slug: "energy-management", description: "Optimize thermal and electrical energy consumption across pyroprocessing and grinding" },
          { icon: "arrows", title: "Agentic Workflows", slug: "agentic-workflows-cement", description: "Autonomous agents for environmental compliance reporting, maintenance scheduling, and shift handovers" },
          { icon: "cog", title: "Predictive Maintenance", slug: "predictive-maintenance", description: "Predict equipment failures in crushers, mills, and kilns before they happen using vibration, temperature, and process data" },
        ],
      },
    ],
  },

  showcase: {
    items: [
      { title: "Understand Your Plant", description: "Digitize P&IDs, connect documents, and build knowledge graphs. Turn decades of engineering data into structured, queryable intelligence." },
      { title: "Predict & Prevent", description: "Equipment failures, compliance gaps, and simulation drift — caught before they matter. AI trained on your actual process data, not generic benchmarks." },
      { title: "Deploy in Weeks", description: "On-site engineers who learn your workflows and configure AI to your plant. Production results in under 6 weeks, not year-long integrations." },
    ],
    pidScanner: "pid-scanner",
    components: "12,847 components",
    accuracyLabel: "97.3% accuracy",
    processSim: "equipment-health",
    feedStream: "Live",
    springConfig: "Warning",
    cartAid: "C-201 \u00B7 Main Compressor",
    returnCost: "Bearing degradation detected",
    silMessage: "Est. 3\u20136 weeks to intervention \u2014 schedule during next planned slowdown",
    purchaseSuccessful: "Healthy",
    agentLabel: "Production deployment",
    agentLabel2: "deployment.log",
    activeCount: "week 4 of 6",
    agents: [
      { name: "Week 1", status: "Data integration & historian setup" },
      { name: "Week 2", status: "Model training on plant data" },
      { name: "Week 3", status: "Validation & operator review" },
    ],
  },

  faq: {
    label: "FAQ",
    heading: "Commonly Asked Questions",
    items: [
      { q: "How is this different from generic AI tools?", a: "Unlike general-purpose AI, Operon is purpose-built for chemical engineering. Our models are purpose-built for process industry documents \u2014 P&IDs, process flow diagrams, and engineering standards. We deploy engineers who understand your industry on-site." },
      { q: "Do I need technical expertise to use Operon?", a: "No. Our on-site engineers handle the technical implementation. Install our connector with a single configuration change. The AI learns your operations automatically. Most teams manage everything themselves without any technical overhead." },
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
        { label: "CAD / P&ID AI Agent", href: "/docs/pid-agent" },
        { label: "Native Plugin", href: "/docs/native-plugin" },
        { label: "Predictive Maintenance", href: "/docs/predictive-maintenance" },
        { label: "Agentic Workflows", href: "/docs/agentic-workflows" },
      ]},
      { title: "Resources", links: [
        { label: "Documentation", href: "/documentation" },
        { label: "Blog", href: "/blog" },
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
    readyDesc: "Our on-site engineers can have you up and running within your first week.",
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
        subtitle: "Extracting structured engineering data from flowsheet images using object detection and topology exploration",
        industry: "Chemical Engineering",
        readTime: "6 min read",
        content: `
## The Problem

P&IDs and process flowsheets contain critical information about how a plant is designed — every unit operation, instrument, valve, and the connections between them. But in practice, most of this information is locked inside static images: scanned paper drawings, PDFs, or old CAD exports.

When engineers need to work with this data — for safety reviews, plant modifications, or simulation setup — they end up manually reading diagrams and re-entering information into spreadsheets or databases. This is slow, error-prone, and does not scale.

![Example of a chemical process P&ID diagram](/blog/plant-pid.webp)

---

## What We Do

Our goal is **flowsheet digitization**: extracting the topology of a P&ID or PFD from its image and saving it as structured, machine-readable data in a graph format.

This means identifying:

- **What** is on the diagram (equipment, instruments, valves, piping)
- **Where** each component is located
- **How** they connect to each other (the process topology)
- **What the text says** (tag numbers, line numbers, annotations, tables)

The output is not just a list of detected symbols — it is a **graph that captures the connectivity and relationships** between components, which is what makes the data actually useful for downstream engineering work.

---

## How It Works

### 1. Upload & Preprocessing

Upload P&ID drawings in PDF, TIFF, DWG, PNG, or scanned paper formats. The preprocessing pipeline handles deskewing, noise removal, multi-page splitting, and resolution normalization.

### 2. Object Detection

Machine learning models identify the position and type of each unit operation, instrument, and valve on the flowsheet. We train on a large, labeled dataset of chemical process flowsheets and P&IDs from diverse sources, covering ISA 5.1, ISO 14617, and various proprietary symbol sets.

The models detect:

- **Equipment** — vessels, tanks, columns, heat exchangers, reactors, pumps
- **Instruments** — pressure transmitters, flow meters, temperature indicators, control loops
- **Valves** — control valves, check valves, relief valves, manual valves
- **Piping** — process lines, utility lines, instrument signal lines

### 3. Text & Table Recognition

OCR extracts tag numbers, line numbers, equipment labels, spec breaks, and tabular data (title blocks, equipment schedules). These are linked back to their corresponding symbols.

### 4. Topology Extraction

This is the core step. A pathway exploration algorithm traces the connections between detected components — following pipe lines, signal lines, and process flows to reconstruct the **full topology** of the flowsheet as a graph.

The result: each component is a node, each connection is an edge, and the graph captures the actual process structure.

![Operon P&ID recognition demo — detected components with tag numbers and confidence scores](/blog/plant-pid-ai.webp)

### 5. Export

The digitized data can be exported in multiple formats:

- **Graph formats** for engineering databases and knowledge systems
- **CSV / JSON / XML** for integration with existing tools
- **DEXPI-compatible formats** for interoperability with standards-based systems

---



## Our Deep Learning Approach

### Why Deep Learning

Traditional approaches to P&ID digitization relied on rule-based template matching — manually defining what each symbol looks like and writing heuristics to find them. This breaks down quickly in practice because there is enormous variability in how P&IDs are drawn. Different companies, different eras, different CAD tools, and even different drafters within the same company all produce visually distinct diagrams. A heat exchanger in one drawing may look nothing like a heat exchanger in another.

Deep learning solves this by learning to recognize symbols from examples rather than rules. Given enough labeled training data, a convolutional neural network can generalize across drawing styles, handle noise and degradation in scanned documents, and detect symbols at varying scales and orientations.

### Object Detection Architecture

At the core of our system is a deep convolutional neural network trained for object detection — the task of simultaneously locating and classifying multiple objects within an image. This is fundamentally different from image classification (which asks "what is this image of?"). Object detection answers "where is everything, and what is each thing?" in a single pass.

Modern object detection architectures work by dividing the image into a grid of regions and predicting, for each region, whether it contains an object, what class that object belongs to, and the precise bounding box coordinates. The network learns hierarchical features: early layers detect low-level patterns like edges and corners, while deeper layers combine these into higher-level representations that correspond to engineering symbols like valves, instruments, and equipment.

We use an anchor-based detection framework that generates candidate regions at multiple scales, which is critical for P&IDs where a small instrument tag and a large vessel can appear on the same sheet. The model outputs a confidence score for each detection, allowing us to filter results and flag uncertain cases for human review.

### Building the Training Dataset

The biggest bottleneck in applying deep learning to P&ID recognition is not the model architecture — it is the data. Unlike natural image datasets (where millions of labeled photos exist), there is no large public dataset of labeled engineering drawings.

We built our own dataset by collecting and annotating P&IDs from diverse sources — different industries, different standards (ISA 5.1, ISO 14617, company-specific symbol libraries), different time periods, and different output formats (CAD exports, scanned paper, PDF prints). Each symbol on each sheet is manually labeled with a bounding box and a class label.

This diversity is intentional. P&IDs exhibit high intra-class variability — the same type of equipment can be drawn in many different ways depending on the standard, the company, or the individual drafter. Training on a narrow dataset produces a model that only works on diagrams similar to its training data. Training on a broad, diverse dataset produces a model that generalizes.

We also apply data augmentation techniques — rotation, scaling, noise injection, contrast variation — to further improve robustness, particularly for degraded scanned documents where image quality is poor.

### Handling the Unique Challenges of P&IDs

P&IDs present several challenges that standard object detection models are not designed for:

- **Dense, overlapping symbols** — Unlike natural images where objects are typically separated by background, P&IDs pack symbols tightly with intersecting lines. The model must distinguish overlapping elements without confusing one symbol for another.
- **Small text and tags** — Tag numbers like "FIC-13310" are critical information but occupy very few pixels. We use a separate text detection and OCR pipeline tuned for engineering annotation styles.
- **Class imbalance** — Some symbol types (like pipe lines) appear thousands of times per sheet, while others (like relief valves) may appear only once or twice. We use weighted loss functions and sampling strategies during training to prevent the model from ignoring rare classes.
- **Line connectivity** — Detecting symbols is only half the problem. Understanding which symbols connect to which requires tracing pipe lines and signal lines through the image. We handle this with a separate pathway exploration algorithm that operates on the detected symbol locations and the underlying line geometry.

### Continuous Improvement

The model improves over time. As we process more P&IDs for more clients across more industries, we expand and refine the training dataset. Detections that are corrected during human review are fed back into the training pipeline — a standard active learning loop that systematically addresses the model's weaknesses.

---

## Why This Matters

Manual P&ID review is one of the most time-consuming tasks in process engineering. A single project can involve hundreds or thousands of sheets, each requiring careful reading by experienced engineers.

Digitization changes this:

- **Speed** — Process hundreds of sheets in the time it takes to manually review a few
- **Consistency** — The same detection criteria applied to every sheet, every time
- **Searchability** — Once digitized, you can query your equipment, instruments, and connections across your entire drawing library
- **Foundation for automation** — Structured P&ID data enables automated compliance checks, change tracking across revisions, and integration with simulation models

---

## Get Started

If you are interested in digitizing your P&ID library, reach out to our team. We work with your existing drawings and engineering standards to configure the system for your specific needs.

**Want to see it in action?** [Try our P&ID Recognition Beta →](https://operon-solutions-pid.vercel.app/)
`,
      },
      "pid-agent": {
        title: "CAD / P&ID AI Agent",
        subtitle: "A domain-specific AI agent that builds PFD and P&ID diagrams, accelerating design cycles for chemical engineers",
        industry: "Chemical Engineering",
        readTime: "6 min read",
        content: `
## The Problem

Developing Piping and Instrumentation Diagrams (P&IDs) is one of the most critical and labor-intensive steps in process development. A single capital project can require hundreds of P&ID sheets, each demanding deep expertise in symbology standards (ISA 5.1, ISO 14617), process control philosophy, and company-specific conventions.

Junior engineers spend weeks drafting diagrams. Senior engineers spend weeks reviewing them. The cycle repeats for every revision, every project, every plant.

Recent academic work has shown that this problem is tractable with AI. Researchers have demonstrated that the relationship between Process Flow Diagrams (PFDs) and P&IDs can be modeled as a translation task \u2014 given a process description, predict the control structures, instrumentation, and piping details that complete the diagram. These results point to a future where AI assists engineers throughout the design process, not just at the documentation stage.

---

## What the P&ID Agent Does

Operon's P&ID Agent is a **domain-specific AI that generates engineering diagrams** from natural-language process descriptions, existing simulation data, or partial sketches.

Rather than starting from a blank sheet, engineers describe what they need \u2014 a distillation column separation, a reactor feed system, a utility header \u2014 and the agent produces a standards-compliant draft that serves as a starting point for detailed design.

---

## How It Works

### 1. Process Intent Capture

The agent accepts input in multiple forms:

- **Natural language** \u2014 "Design a distillation column with reflux drum, reboiler, and condenser for a benzene-toluene separation"
- **Simulation data** \u2014 import stream data directly from Aspen HYSYS or UniSim
- **Partial sketches** \u2014 upload a rough hand-drawn diagram and the agent formalizes it

### 2. Diagram Generation

The agent produces P&IDs with:

- **Correct symbology** \u2014 ISA 5.1, ISO 14617, or your company's custom symbol library
- **Tag numbering** \u2014 follows your facility's naming conventions
- **Control loops** \u2014 adds instrumentation based on process requirements and control philosophy
- **Line specifications** \u2014 assigns line numbers, sizes, and spec breaks

Under the hood, the agent uses models trained on real engineering diagrams to understand the structural patterns of P&IDs \u2014 which instruments typically accompany which equipment, how control loops are configured for common unit operations, and what piping arrangements are standard practice.

### 3. Iterative Refinement

Engineers review the draft and refine through conversation:

- "Add a bypass around the control valve on the feed line"
- "Change the heat exchanger to a plate-and-frame type"
- "Add SIS instrumentation for the high-pressure trip"

The agent maintains full context of the process topology across iterations.

### 4. Export & Integration

Export to standard formats:

- **AutoCAD DWG/DXF** \u2014 native CAD integration
- **SVG/PDF** \u2014 for documentation and review
- **Structured data** \u2014 equipment lists, line lists, instrument indexes

Generated diagrams integrate directly with our P&ID Recognition engine, creating a closed loop: the agent generates, the recognition engine verifies, and discrepancies are flagged automatically.

---

## Why It Matters

The traditional P&ID design workflow is sequential and slow. An engineer drafts, a reviewer marks up, the engineer revises, and the cycle continues. Each iteration can take days.

The P&ID Agent compresses this cycle:

- **Draft diagrams in minutes** instead of days
- **Consistent standards compliance** across all drawings
- **Junior engineers become productive faster** \u2014 AI handles the mechanical drafting so they can focus on learning process design
- **Senior engineers focus on review and optimization** instead of checking tag numbers

This is not about replacing engineers. It is about removing the repetitive drafting work that consumes engineering hours without adding engineering value.

---

## Get Started

The P&ID Agent works best alongside our P&ID Recognition engine and On-Site Engineers. Our team configures the agent to match your specific symbol library, tag conventions, and design standards.
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

Our on-site engineers handle the full plugin installation and configuration \u2014 typically within 2-3 weeks.
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

Predictive Maintenance works best when combined with our P&ID Recognition and Knowledge Graphs. Our on-site engineers handle the full deployment \u2014 typically within 4-6 weeks.
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
    getStarted: "Get Started",
    transformHeading: "Transform your {name} operations",
    transformDesc: "Our on-site engineers can have you up and running within your first week. See results, not slide decks.",
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
          "Operon changes this. We deploy on-site engineers who learn your specific processes, equipment naming conventions, and safety standards. They configure AI systems that understand your plant \u2014 not a generic chemical engineering textbook, but your actual operations.",
        ],
        solutions: [
          { title: "P&ID Recognition", slug: "pid-recognition", description: "Automatically identify, classify, and digitize every component on your P&ID sheets. Our models are trained on hundreds of thousands of real engineering drawings across ISA, ISO, and proprietary symbol sets.", stat: "97.3%", statLabel: "component detection accuracy" },
          { title: "Knowledge Graphs", slug: "knowledge-graphs", description: "Transform document silos into connected engineering intelligence. Every P&ID, safety report, maintenance log, and simulation result becomes a queryable node in your knowledge network.", stat: "384+", statLabel: "document signals analyzed" },
          { title: "UniSim Integration", slug: "unisim-integration", description: "Native fluency across UniSim, Aspen HYSYS, and 50+ engineering tools. Map detected P&ID equipment directly to simulation models for automated validation.", stat: "50+", statLabel: "tools supported" },
          { title: "Agentic Workflows", slug: "agentic-workflows", description: "Autonomous AI agents that handle document processing, HAZOP compliance checks, safety report generation, and cross-reference validation without human intervention.", stat: "24/7", statLabel: "autonomous operation" },
          { title: "Process Optimization", slug: "process-optimization", description: "React to billions of sensor events with ML-driven process improvements. Predict equipment stress, optimize throughput, and reduce energy consumption.", stat: "85%", statLabel: "time saved on reviews" },
          { title: "On-Site Engineers", slug: "on-site-engineers", description: "On-site experts who learn your workflows and deploy customized AI in under 6 weeks. They speak your language \u2014 process engineering, not just machine learning.", stat: "<6", statLabel: "weeks to production" },
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
        body: "We deploy on-site engineers who learn your specific processes, equipment naming conventions, and safety standards. They configure AI systems that understand your plant — not a generic chemical engineering textbook, but your actual operations. Most teams are up and running within 6 weeks.",
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
      { title: "On-Site Engineer", location: "Taipei / On-site", type: "Full-time" },
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
        slug: "why-generic-ai-fails",
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
        title: "The On-Site Engineering Model",
        date: "Jan 2026",
        tag: "Company",
        summary: "Why we embed engineers at customer sites instead of shipping generic SaaS, and how this approach leads to dramatically better outcomes.",
      },
      {
        title: "The Real Cost of Reactive Maintenance — and How to Stop Paying It",
        slug: "predictive-maintenance-cost",
        date: "Mar 2026",
        tag: "Engineering",
        summary: "A single compressor trip can cost hundreds of thousands in lost production. Across a plant with hundreds of critical assets, the cumulative cost is enormous — and largely preventable.",
      },
    ],
    entries: {
      "why-generic-ai-fails": {
        title: "Why Generic AI Fails in Manufacturing",
        date: "Mar 2026",
        tag: "Industry",
        readTime: "18 min read",
        summary: "General-purpose LLMs can write code and summarize documents — but they fall flat when you need to interpret a P&ID or validate a HAZOP report. Here's why domain specificity matters.",
        content: `
Every week, another headline announces that AI will transform manufacturing. Foundation models will optimize your supply chain. Large language models will write your safety reports. Generative AI will design your next product.

The reality on the factory floor is different. Over 90% of industrial AI projects stall at the proof-of-concept stage. The models that write poetry and generate photorealistic images struggle to read a P&ID, predict when a compressor bearing will fail, or optimize a distillation column without violating safety constraints.

This is not a temporary gap that the next GPT release will close. It is a structural mismatch between how generic AI systems are built and how manufacturing actually works.

This article draws on recent academic research and industry analysis to explain why generic AI fails in manufacturing \u2014 and what a purpose-built alternative looks like.

---

## The Foundation Model Illusion

Foundation models \u2014 large neural networks pre-trained on massive datasets and fine-tuned for downstream tasks \u2014 have produced remarkable results in language, vision, and code generation. The natural assumption is that these models can be extended to any domain, including industrial manufacturing.

Recent research challenges this assumption directly.

A 2025 study published in *Engineering* examined whether current foundation models are ready for the process industry \u2014 petrochemicals, chemicals, metallurgy, and other continuous manufacturing operations. The authors found that general-purpose foundation models **cannot handle the diversity of multi-industry process data**, lack what they call "mechanism cognition" (understanding of the underlying physics and chemistry), and fail to meet the reliability and safety requirements of industrial environments.

The core problem: foundation models are trained on internet-scale text and images. They have never seen the inside of a distillation column. They do not understand reaction kinetics. They cannot reason about pressure relief valve sizing or interpret the difference between a control valve and a block valve on a process flowsheet.

A parallel survey on Industrial Foundation Models (IFMs) from the *Journal of Intelligent Manufacturing* reinforces this finding. The authors argue that horizontal, general-purpose models are fundamentally limited for manufacturing because they cannot account for the **heterogeneity of industrial data** \u2014 the mix of time-series sensor data, engineering drawings, maintenance logs, simulation files, and operational procedures that characterize real manufacturing environments.

> Generic foundation models have seen billions of web pages but zero process flow diagrams, zero DCS historian exports, and zero HAZOP worksheets.

---

## Manufacturing Data Is Not Internet Data

The success of foundation models in consumer applications rests on a critical assumption: data is abundant, clean, and standardized. The internet provides trillions of text tokens in consistent formats. ImageNet contains millions of labeled photographs with clear objects against distinct backgrounds.

Manufacturing data violates every one of these assumptions.

### Sparse, multirate, and unlabeled

Chemical plants generate data from thousands of sensors, but this data is:

- **Multirate** \u2014 temperature sensors sample every second, lab analyses come every 8 hours, maintenance inspections happen monthly
- **Sparse** \u2014 fault events are rare; a compressor might fail once in five years, giving you exactly one training example
- **Unlabeled** \u2014 operators know something went wrong but rarely tag the root cause in structured form
- **Noisy** \u2014 sensor drift, calibration errors, and manual overrides contaminate the signal

A review in *Chemie Ingenieur Technik* on the machine learning lifecycle in chemical operations found that **70% of project effort goes to data preparation** \u2014 not model building. Engineers spend months cleaning historian exports, aligning timestamps, filling missing values, and reconciling inconsistent tag naming conventions across different plant areas.

Generic AI platforms skip this step entirely. They assume your data is ready. It never is.

### Legacy systems and integration nightmares

Most chemical plants run on control systems (DCS, SCADA) that were installed 10\u201330 years ago. Data formats are proprietary. Historian systems (PI, IP.21, DeltaV) each have their own APIs, data models, and quirks. Engineering documents live in a mix of AutoCAD, PDF, scanned paper, and SharePoint folders with inconsistent naming.

A plug-and-play AI that expects a clean API endpoint or a CSV upload cannot operate in this environment. It needs custom data pipelines built by engineers who understand both the data infrastructure and the process being measured.

### Concept drift

Unlike static datasets, manufacturing processes change continuously:

- Catalysts degrade over their cycle life
- Feedstock compositions vary by supplier and season
- Equipment ages and operating envelopes shift
- Process modifications alter flow paths and control strategies

A model trained on last year's data may produce dangerously wrong predictions this year. The ML lifecycle paper documents how **concept drift** causes model performance to degrade rapidly post-deployment in chemical operations \u2014 yet generic AI platforms provide no built-in mechanism for detecting or adapting to this drift.

---

## The Domain Gap: When Internet Models Meet Industrial Reality

Perhaps the most striking evidence of generic AI's failure comes from computer vision.

Foundation vision models like SAM (Segment Anything Model) and CLIP achieve impressive results on standard benchmarks \u2014 natural photographs of objects, animals, and scenes. Researchers recently tested these same models on real industrial data: Scanning Acoustic Tomography (SAT) images used for semiconductor defect inspection.

The results were stark. Models that achieved high accuracy on pet photos and street scenes scored **near-zero Intersection over Union (IoU)** on industrial SAT images. The domain gap between internet images and industrial imaging modalities was so large that the models produced essentially random output.

This is not a fine-tuning problem. The visual features that these models learned \u2014 edges of cats, textures of buildings, shapes of cars \u2014 have no correspondence to the grayscale patterns in acoustic tomography, X-ray inspection, or the dense line-and-symbol layouts of engineering drawings.

For chemical engineering specifically: a generic vision model looking at a P&ID sees a confusing jumble of lines and circles. A domain-trained model sees a heat exchanger connected to a control valve with a bypass line, tagged E-201 and CV-104, in a feed preheat service. The difference is not incremental \u2014 it is categorical.

![Theoretical AI capability vs. observed usage across occupational categories](/blog/ai-coverage-gap.webp)

*Research shows a massive gap between theoretical AI capability and actual observed usage. In architecture, engineering, and production \u2014 the categories most relevant to manufacturing \u2014 observed AI adoption lags far behind theoretical potential. This gap exists precisely because generic AI tools were not built for these domains.*

---

## Chemical Plants Are Not Click-Through Optimization

Most commercial AI has been optimized for a single objective: maximize revenue, click-through rate, or engagement. Manufacturing optimization is fundamentally different.

### Multi-objective, physics-constrained

A chemical process engineer optimizing a reactor must simultaneously consider:

- **Yield** \u2014 maximize product output
- **Energy consumption** \u2014 minimize steam, electricity, and cooling water usage
- **Safety** \u2014 stay within temperature, pressure, and concentration limits at all times
- **Emissions** \u2014 meet environmental regulatory targets
- **Throughput** \u2014 match production to demand schedules
- **Equipment life** \u2014 avoid operating conditions that accelerate degradation

These objectives often conflict. Increasing throughput raises energy consumption and may push operating conditions closer to safety limits. Minimizing energy use may reduce yield. A model that optimizes one variable without respecting the constraints on others is not useful \u2014 it is dangerous.

Generic AI has no concept of these physical constraints. An LLM asked to "optimize this reactor" has no way to verify that its recommendations respect thermodynamic feasibility, reaction kinetics, or equipment design limits. It can only pattern-match against text it has seen before, with no guarantee that the output is physically realizable.

### Nonlinear dynamics and real-time adaptation

Process manufacturing involves nonlinear thermodynamics, complex reaction kinetics, and fluid mechanics that create highly coupled systems. A change in feed temperature affects reaction rate, which affects heat generation, which affects cooling requirements, which affects downstream separation performance.

The *Engineering* study on process industry foundation models notes that these systems require **real-time adaptation** to dynamic changes in raw materials, equipment performance, and environmental conditions. Generic AI models that produce static recommendations based on training data cannot handle this level of dynamism.

Furthermore, industrial process control already has decades of sophisticated domain-specific tools: Advanced Process Control (APC) systems, Model Predictive Controllers (MPC), and real-time optimization (RTO) systems. Any AI solution must integrate with \u2014 not replace \u2014 this existing infrastructure. An LLM that cannot communicate with a DeltaV DCS or read a Honeywell UniSim model is operationally irrelevant.

---

## The Lifecycle Problem: Why 90% of PoCs Never Scale

Building a model is the easy part. Deploying it in a live plant, keeping it accurate, and gaining operator trust is where most AI projects die.

The machine learning lifecycle in chemical operations exposes several critical gaps:

### Deployment infrastructure

Moving from a Jupyter notebook to a production system that runs 24/7 in a plant network \u2014 behind firewalls, on older operating systems, without reliable internet \u2014 requires engineering that generic AI platforms do not provide. Models need to handle network interruptions, data pipeline failures, and historian outages gracefully.

### Monitoring and retraining

Once deployed, who watches the model? Most generic platforms provide no built-in monitoring for concept drift, data quality degradation, or prediction accuracy decline. In a chemical plant, an undetected model failure does not just produce a wrong recommendation \u2014 it can trigger a safety incident.

The CRISP-ML(Q) framework emphasizes the need for quality assurance across every stage of the ML lifecycle: problem understanding, data engineering, model building, evaluation, deployment, **and monitoring**. Most generic AI tools focus exclusively on model building.

### Regulatory validation

Chemical plants operate under strict regulatory frameworks: OSHA Process Safety Management (PSM), EPA Risk Management Programs (RMP), IEC 61511 for Safety Instrumented Systems. Any AI system that influences operations must be validated against these standards. Generic AI platforms are not designed for this level of regulatory scrutiny.

---

## Organizational Barriers: It's Not Just the Model

A 2025 empirical study published in the *Journal of Manufacturing Technology Management* surveyed manufacturing firms to identify why they struggle with AI adoption. The barriers extend far beyond model accuracy:

- **Data quality and legacy systems** \u2014 organizations lack the data infrastructure to feed AI models, and integrating with decades-old systems requires specialized expertise
- **Skills gap** \u2014 there are very few people who understand both data science and process engineering; most AI vendors send data scientists who don't know what a HAZOP is, and most plant engineers don't know what a transformer architecture is
- **Unclear ROI** \u2014 generic AI vendors promise vague "efficiency gains" without concrete, measurable outcomes tied to specific process improvements
- **Resistance to change** \u2014 operators with 20 years of experience are skeptical of recommendations from a system that was trained on internet text
- **Trust deficit** \u2014 black-box models that cannot explain their reasoning are rejected by engineers who need to understand *why* before they change an operating setpoint

The study reinforces what practitioners already know: successful AI adoption in manufacturing requires **domain expertise delivered alongside the technology**. You cannot ship a SaaS login and expect a plant to transform itself.

---

## What Domain-Specific AI Should Look Like

The failure modes of generic AI point directly to the requirements for industrial AI that actually works:

### Built on industrial data, not internet data

Models must be trained on actual process industry data: engineering drawings, process historian exports, maintenance records, safety reports, and simulation files. This data is not available on the internet. It must be collected, labeled, and curated in partnership with operating plants.

For P&ID recognition, this means training on real engineering drawings across ISA 5.1, ISO 14617, and proprietary symbol sets from different companies, eras, and CAD tools. A model trained on a narrow dataset fails on the next plant. A model trained on diverse, real-world data generalizes.

### Physics-informed, not pattern-matching

Industrial AI must respect the underlying physics. This means integrating domain knowledge into model architectures: thermodynamic constraints, mass and energy balances, equipment design limits, and safety boundaries. The *Engineering* process industry study calls this "mechanism cognition" \u2014 the ability to reason about *why* a process behaves the way it does, not just *what* patterns exist in the data.

Hybrid approaches that combine physics-based models with data-driven methods outperform pure machine learning in manufacturing. They require less data, generalize better, and produce predictions that are physically consistent.

### Full lifecycle support, not just models

Deployment is not a one-time event. Industrial AI requires:

- **Data pipelines** that handle the messiness of plant data infrastructure
- **Continuous monitoring** for drift, data quality, and prediction accuracy
- **Retraining workflows** that incorporate new data and operator feedback
- **Validation processes** that satisfy regulatory requirements
- **Integration** with existing DCS, historian, and engineering tools

### Domain expertise embedded in delivery

The skills gap cannot be solved with documentation. It requires engineers who understand both the AI technology and the industrial domain \u2014 who can walk a plant floor, read a P&ID, and configure an AI system to match the specific equipment naming conventions, safety standards, and operating procedures of that facility.

This is why we embed on-site engineers at every deployment. They learn your workflows, your equipment, your standards. They configure AI systems that understand your plant \u2014 not a generic chemical engineering textbook, but your actual operations. Most teams are up and running within six weeks.

### Edge deployment and data sovereignty

Plant data is sensitive. Process conditions, equipment performance, and safety records are proprietary. Manufacturing AI must run locally \u2014 on-premises or at the edge \u2014 with full data sovereignty. Cloud-only architectures are rejected by most plant operators for good reason.

---

## The Path Forward

The gap between AI hype and manufacturing reality is not closing on its own. Larger models trained on more internet data will not learn to read P&IDs. More powerful GPUs will not solve the concept drift problem. Better prompt engineering will not make an LLM understand reaction kinetics.

What closes the gap is **vertical AI** \u2014 purpose-built systems designed for specific industrial domains, trained on domain-specific data, delivered by domain experts, and maintained through the full operational lifecycle.

The research is clear: generic AI achieves generic results. In an industry where a wrong prediction can mean an environmental release, a safety incident, or millions of dollars in lost production, generic is not good enough.

Manufacturing deserves AI built for manufacturing.

---

## References

1. "Foundation Models for the Process Industry." *Engineering*, 2025. Analysis of why current general-purpose foundation models fail in process manufacturing and a framework for industrial alternatives.

2. "Industrial Foundation Models (IFMs) for Intelligent Manufacturing." *Journal of Intelligent Manufacturing*, 2025. Survey of industrial foundation models highlighting limitations of horizontal AI and data heterogeneity challenges.

3. "Generative AI in Manufacturing: A Literature Review." *ScienceDirect*, 2025. Review of generative AI applications in manufacturing, including data challenges, robustness, and explainability limitations.

4. "A Review of Artificial Intelligence and Industrial Chemical Processes." *FOSM Journal*. Benefits and limitations of AI in chemical manufacturing, with emphasis on data needs and human oversight requirements.

5. "The Machine Learning Life Cycle in Chemical Operations \u2014 Status and Open Challenges." *Chemie Ingenieur Technik*, Wiley. Analysis of deployment, monitoring, and data preparation challenges for ML in chemical plants.

6. "Why Do Manufacturing Firms Struggle with Artificial Intelligence?" *Journal of Manufacturing Technology Management*, 2025. Empirical study on organizational barriers to AI adoption: data quality, legacy systems, skills gap, and unclear ROI.

7. "Are Foundation Models Ready for Industrial Defect Recognition? A Reality Check on Real-World Data." Literature review showing near-zero performance of SAM/CLIP models on real industrial imaging data.

8. "How AI Enables New Pathways in Chemicals." McKinsey & Company. Industry analysis of real-time optimizers, control-room copilots, and integration requirements for chemical operations.
`,
      },
      "predictive-maintenance-cost": {
        title: "The Real Cost of Reactive Maintenance \u2014 and How to Stop Paying It",
        date: "Mar 2026",
        tag: "Engineering",
        readTime: "8 min read",
        summary: "A single compressor trip can cost hundreds of thousands in lost production. Across a plant with hundreds of critical assets, the cumulative cost is enormous \u2014 and largely preventable.",
        content: `
## The Problem Nobody Budgets For

When a critical compressor trips unexpectedly, the immediate cost is obvious: lost throughput, flaring, maybe a downstream unit goes down too. Emergency maintenance crews get called in. Spare parts get air-freighted. Production schedules get rewritten.

What is less obvious is the cumulative burden. A typical chemical plant operates hundreds of critical rotating and static assets. Each one carries the potential for an unplanned event. Across a fleet of equipment, reactive maintenance becomes the single largest controllable operating expense that most plants never actually control.

The industry average for unplanned downtime in process manufacturing sits between **5\u201312%** of total available production hours. For a plant generating $50M per year in revenue, that is $2.5\u2013$6M in lost output annually \u2014 before counting repair costs, overtime, expedited parts, and the cascade effects on downstream operations.

Most plants know this. Few have a systematic way to change it.

---

## Why Calendar-Based Maintenance Falls Short

The traditional answer to equipment failure is preventive maintenance: replace bearings every 18 months, overhaul compressors at every turnaround, swap valve internals on a fixed schedule.

This approach has a fundamental problem: **it ignores the actual condition of the equipment.**

Some bearings last 3 years without issue. Others degrade in 8 months due to process upsets, off-spec feed, or installation errors. A fixed schedule either replaces healthy components too early \u2014 wasting parts, labor, and production time during unnecessary shutdowns \u2014 or misses degradation that happens faster than expected.

The result is a maintenance program that is simultaneously too expensive and not reliable enough.

---

## What Changes with Condition-Based Prediction

Predictive maintenance shifts the decision from "when is this scheduled?" to "what is actually happening inside this machine right now?"

The approach works by building a model of normal behavior for each individual asset \u2014 using techniques like <a href="https://en.wikipedia.org/wiki/Autoencoder" target="_blank" rel="noopener noreferrer" class="jargon-link">autoencoder networks</a> and <a href="https://en.wikipedia.org/wiki/Isolation_forest" target="_blank" rel="noopener noreferrer" class="jargon-link">isolation forests</a> trained on historical operating data. The model learns each asset's specific vibration signature, temperature profile, pressure relationships, and performance curves under different operating conditions. When behavior starts deviating from that learned baseline, the system flags it.

This is not threshold alerting. A high-vibration alarm triggers when something is already wrong. Predictive models detect the **trajectory** \u2014 the gradual shift in bearing frequency spectrum, the slow decline in heat exchanger efficiency, the subtle change in valve response time \u2014 weeks or months before it crosses any alarm limit.

### Early warning

The most valuable thing a predictive system provides is time. Not a red alarm that sends someone running to the control room, but a notice that says: this compressor's bearing is showing early-stage degradation, you have an estimated 3\u20136 weeks before intervention is needed, here is the supporting data.

That window transforms maintenance from a firefight into a planned activity. You can order parts without paying air-freight premiums. You can schedule the repair during a planned slowdown instead of forcing a trip. You can coordinate with operations to minimize production impact.

### Maintenance that matches reality

Fixed schedules replace healthy equipment and miss sick equipment. Condition-based maintenance does neither. If a pump bearing is running perfectly at 18 months, you do not pull it. If a compressor seal is degrading at 9 months, you do not wait for the next turnaround.

The result is fewer maintenance interventions overall, with each one targeted at equipment that actually needs it. Plants that adopt this approach typically see **25\u201335% reductions in total maintenance spend** \u2014 not because they maintain less, but because they maintain smarter.

### Safety as a byproduct of visibility

Equipment degradation does not just cause downtime. A corroded vessel wall, a sticking relief valve, or a failing seal can become a process safety event. Predictive monitoring catches these degradation patterns in their early stages \u2014 well before they become a safety or environmental concern.

This is not a replacement for process safety systems or relief devices. It is an additional layer of visibility that gives reliability and safety teams more lead time to act.

---

## What This Looks Like for Reliability Engineers

A common concern is that predictive maintenance replaces the judgment of experienced reliability engineers. The opposite is true.

A typical reliability engineer in a large plant is responsible for hundreds of assets. Manually reviewing vibration trends, historian data, and maintenance records for each one is physically impossible at the frequency needed to catch early degradation. Important signals get buried in noise.

Predictive systems act as a filter. Instead of reviewing everything, the engineer gets a prioritized list: these 5 assets are showing abnormal behavior, ranked by severity and estimated time to intervention. Each alert comes with the underlying data \u2014 which sensor channels are deviating, what the historical pattern looks like, what the probable failure mode is.

The engineer still makes the call. The system just makes sure the right information reaches them in time.

---

## Getting Started

Moving from calendar-based to condition-based maintenance does not require ripping out your existing infrastructure. The data you need is almost certainly already being collected \u2014 vibration monitoring systems, DCS historians, SCADA exports, and CMMS records contain the raw signal.

What is typically missing is the layer that connects these data sources, learns equipment-specific behavior, and surfaces actionable predictions to the people who need them.

If you are exploring this shift, we work with your existing sensor infrastructure and historian systems to deploy models tailored to your specific equipment and operating context. No new sensors, no cloud dependencies, no generic dashboards \u2014 just predictions your maintenance team can actually use.
`,
      },
    },
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
