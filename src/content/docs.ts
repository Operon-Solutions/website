export type DocEntry = {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  readTime: string;
  content: string;
};

const docs: Record<string, DocEntry> = {
  "pid-recognition": {
    slug: "pid-recognition",
    title: "P&ID Recognition",
    subtitle:
      "Extracting structured engineering data from flowsheet images using object detection and topology exploration",
    industry: "Chemical Engineering",
    readTime: "10 min read",
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
  "unisim-integration": {
    slug: "unisim-integration",
    title: "UniSim Integration",
    subtitle:
      "Native simulation fluency across UniSim, Aspen, and 50+ engineering tools",
    industry: "Chemical Engineering",
    readTime: "7 min read",
    content: `
## What is UniSim Integration?

Process simulation is the nervous system of chemical engineering — every design decision, safety analysis, and optimization study runs through tools like Honeywell UniSim Design, Aspen HYSYS, and PRO/II. But these simulators exist in isolation, disconnected from your actual P&IDs, maintenance records, and operational data.

Operon's UniSim Integration bridges this gap. We create a **live link between your simulation models and your real plant data**, so your digital twins stay synchronized with reality.

> "Our UniSim models used to drift out of sync within weeks of a plant change. Operon keeps them current automatically."

---

## How it works

### 1. Model Discovery

Operon scans your existing simulation files and builds an inventory of every model, stream, and unit operation. We support:

- **Honeywell UniSim Design** — full read/write integration
- **Aspen HYSYS / Aspen Plus** — native file parsing and API connection
- **PRO/II (Aveva)** — import and cross-reference
- **CHEMCAD** — model extraction and mapping
- **gPROMS** — dynamic simulation linkage

> **50+ tools supported** including HTRI, AFT Fathom, Flare System Analyzer, and custom in-house tools via our open API.

### 2. P&ID-to-Model Mapping

When our P&ID Recognition engine digitizes your drawings, it automatically maps detected equipment to simulation unit operations:

- Heat exchanger E-201 on the P&ID → the corresponding shell-and-tube model in UniSim
- Control valve CV-104 → the valve Cv curve in your simulation
- Process line specifications → stream conditions and compositions

This mapping is **bidirectional** — changes in the simulation update the P&ID metadata, and vice versa.

### 3. Automated Validation

With the link established, Operon continuously checks for discrepancies:

- Does the P&ID show a valve that doesn't exist in the simulation?
- Has a heat exchanger duty changed in the model but not in the operating procedures?
- Are stream conditions within the design envelope specified on the P&ID?

> Discrepancies are flagged automatically and routed to the responsible engineer via our Agentic Workflows.

### 4. Live Synchronization

For plants with historian data (PI, IP.21, DeltaV), Operon feeds real operating conditions into your simulation models in near real-time. This enables:

- **Model calibration** — automatically tune simulation parameters to match actual plant performance
- **What-if analysis** — run scenarios against current plant state, not last quarter's snapshot
- **Predictive optimization** — forecast equipment performance based on current operating trajectory

---

## Supported Integrations

| Tool | Integration Level | Capabilities |
|------|------------------|--------------|
| UniSim Design | Full read/write | Model sync, auto-calibration, scenario API |
| Aspen HYSYS | Full read/write | Stream mapping, equipment linking, batch export |
| Aspen Plus | Read + API | Model parsing, steady-state validation |
| PRO/II | Read | Import, cross-reference with P&ID data |
| CHEMCAD | Read | Model extraction, equipment mapping |
| gPROMS | API | Dynamic simulation linkage |
| HTRI | Read | Heat exchanger rating cross-check |
| Custom tools | Open API | REST/gRPC integration for proprietary simulators |

---

## Why it matters

### The problem with disconnected simulations

Most chemical plants have simulation models that were built during the design phase and rarely updated since. Plant modifications — new equipment, changed operating conditions, debottlenecking projects — create **drift** between the model and reality.

This drift means:

- Safety studies (HAZOP, SIL) are based on outdated models
- Optimization studies produce recommendations that don't match actual plant constraints
- New engineers can't trust the models they inherit

### Operon's approach

Instead of periodic manual updates, Operon creates a **continuous synchronization loop**:

1. P&ID changes are detected automatically
2. Equipment mappings are updated in the simulation
3. Operating data calibrates model parameters
4. Discrepancies are flagged and resolved through workflows

The result: simulation models you can actually trust.

> "We used to budget 3 months every year just to update our HYSYS models. Now they stay current automatically. That's 3 months of engineering time back."

---

## Get Started

UniSim Integration works best alongside our P&ID Recognition and Knowledge Graphs capabilities. Our on-site engineers handle the full setup — from model inventory to live synchronization — typically within 4-6 weeks.
`,
  },
  "pid-agent": {
    slug: "pid-agent",
    title: "P&ID Agent",
    subtitle: "A domain-specific AI agent that builds PFD and P&ID diagrams, accelerating design cycles for chemical engineers",
    industry: "Chemical Engineering",
    readTime: "6 min read",
    content: `
## The Problem

Developing Piping and Instrumentation Diagrams (P&IDs) is one of the most critical and labor-intensive steps in process development. A single capital project can require hundreds of P&ID sheets, each demanding deep expertise in symbology standards (ISA 5.1, ISO 14617), process control philosophy, and company-specific conventions.

Junior engineers spend weeks drafting diagrams. Senior engineers spend weeks reviewing them. The cycle repeats for every revision, every project, every plant.

Recent academic work has shown that this problem is tractable with AI. Researchers have demonstrated that the relationship between Process Flow Diagrams (PFDs) and P&IDs can be modeled as a translation task — given a process description, predict the control structures, instrumentation, and piping details that complete the diagram. These results point to a future where AI assists engineers throughout the design process, not just at the documentation stage.

---

## What the P&ID Agent Does

Operon's P&ID Agent is a **domain-specific AI that generates engineering diagrams** from natural-language process descriptions, existing simulation data, or partial sketches.

Rather than starting from a blank sheet, engineers describe what they need — a distillation column separation, a reactor feed system, a utility header — and the agent produces a standards-compliant draft that serves as a starting point for detailed design.

---

## How It Works

### 1. Process Intent Capture

The agent accepts input in multiple forms:

- **Natural language** — "Design a distillation column with reflux drum, reboiler, and condenser for a benzene-toluene separation"
- **Simulation data** — import stream data directly from Aspen HYSYS or UniSim
- **Partial sketches** — upload a rough hand-drawn diagram and the agent formalizes it

### 2. Diagram Generation

The agent produces P&IDs with:

- **Correct symbology** — ISA 5.1, ISO 14617, or your company's custom symbol library
- **Tag numbering** — follows your facility's naming conventions
- **Control loops** — adds instrumentation based on process requirements and control philosophy
- **Line specifications** — assigns line numbers, sizes, and spec breaks

Under the hood, the agent uses models trained on real engineering diagrams to understand the structural patterns of P&IDs — which instruments typically accompany which equipment, how control loops are configured for common unit operations, and what piping arrangements are standard practice.

### 3. Iterative Refinement

Engineers review the draft and refine through conversation:

- "Add a bypass around the control valve on the feed line"
- "Change the heat exchanger to a plate-and-frame type"
- "Add SIS instrumentation for the high-pressure trip"

The agent maintains full context of the process topology across iterations.

### 4. Export & Integration

Export to standard formats:

- **AutoCAD DWG/DXF** — native CAD integration
- **SVG/PDF** — for documentation and review
- **Structured data** — equipment lists, line lists, instrument indexes

Generated diagrams integrate directly with our P&ID Recognition engine, creating a closed loop: the agent generates, the recognition engine verifies, and discrepancies are flagged automatically.

---

## Why It Matters

The traditional P&ID design workflow is sequential and slow. An engineer drafts, a reviewer marks up, the engineer revises, and the cycle continues. Each iteration can take days.

The P&ID Agent compresses this cycle:

- **Draft diagrams in minutes** instead of days
- **Consistent standards compliance** across all drawings
- **Junior engineers become productive faster** — AI handles the mechanical drafting so they can focus on learning process design
- **Senior engineers focus on review and optimization** instead of checking tag numbers

This is not about replacing engineers. It is about removing the repetitive drafting work that consumes engineering hours without adding engineering value.

---

## Get Started

The P&ID Agent works best alongside our P&ID Recognition engine and On-Site Engineers. Our team configures the agent to match your specific symbol library, tag conventions, and design standards.
`,
  },
  "native-plugin": {
    slug: "native-plugin",
    title: "Native Plugin in Process Simulation Software",
    subtitle: "AI capabilities embedded directly into Aspen, UniSim, AVEVA and other process simulation platforms",
    industry: "Chemical Engineering",
    readTime: "7 min read",
    content: `
## What is the Native Plugin?

Operon's Native Plugin **embeds AI capabilities directly into your existing simulation environment**. No context switching. No data export/import. AI assistance right where you work.

> "It's like having a senior process engineer looking over your shoulder inside HYSYS, catching issues before they become problems."

---

## How it works

### 1. One-Click Installation

Install the plugin directly into Aspen HYSYS, UniSim Design, AVEVA PRO/II, or CHEMCAD. The plugin runs locally — your simulation data never leaves your network.

### 2. In-Context AI Assistance

Model validation, parameter suggestions, anomaly detection, and auto-documentation — all inside your simulator.

### 3. Local-First Architecture

All AI inference runs locally. No cloud dependency, sub-second response times, and full data sovereignty.

---

## Get Started

Our on-site engineers handle the full plugin installation and configuration — typically within 2-3 weeks.
`,
  },
  "predictive-maintenance": {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance",
    subtitle: "Predict equipment failures before they happen using vibration, temperature, and process data",
    industry: "Chemical Engineering",
    readTime: "7 min read",
    content: `
## What is Predictive Maintenance?

Operon's Predictive Maintenance uses **machine learning models trained on your actual equipment data** to predict failures days or weeks before they occur.

> "We caught a bearing failure on our main compressor 12 days before it would have caused a plant trip."

---

## How it works

### 1. Data Integration

Connects to historians (PI, IP.21, DeltaV), vibration monitoring, DCS/SCADA, and CMMS. No new sensors required.

### 2. Equipment-Specific Models

Models specific to each piece of equipment — rotating equipment, heat exchangers, vessels, and valves.

### 3. Failure Prediction

Anomaly detection, degradation tracking, remaining useful life estimation, and root cause analysis.

### 4. Action Integration

Automatic work order generation, priority-ranked recommendations, spare parts alerts, and turnaround planning integration.

---

## Get Started

Predictive Maintenance works best when combined with our P&ID Recognition and Knowledge Graphs. Deployment typically takes 4-6 weeks.
`,
  },
};

export function getDoc(slug: string): DocEntry | undefined {
  return docs[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(docs);
}
