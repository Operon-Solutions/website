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
      "How Operon identifies 97% of equipment from engineering diagrams automatically",
    industry: "Chemical Engineering",
    readTime: "8 min read",
    content: `
## What is P&ID Recognition?

Piping and Instrumentation Diagrams (P&IDs) are the backbone of process engineering. They define every valve, pump, heat exchanger, and instrument in a plant — yet most facilities still manage them as static PDFs or paper drawings.

Operon's P&ID Recognition engine uses computer vision and domain-specific AI to **automatically identify, classify, and digitize** every component on a P&ID sheet.

> "We processed 2,400 legacy P&IDs in a single weekend — work that would have taken our team 6 months manually."

---

## How it works

### 1. Scan & Ingest

Upload your P&ID drawings in any format — PDF, TIFF, DWG, or even scanned paper documents. Our preprocessing pipeline handles:

- Automatic deskewing and noise removal
- Multi-page document splitting
- Resolution normalization for consistent detection

> **Supported formats:** PDF, TIFF, DWG, DXF, PNG, JPEG, and scanned paper documents up to A0 size.

### 2. Component Detection

Our models are trained on **hundreds of thousands of real engineering drawings** across ISA, ISO, and proprietary symbol sets. We detect:

- **Equipment** — vessels, tanks, columns, heat exchangers, reactors
- **Instruments** — pressure gauges, flow meters, temperature transmitters
- **Valves** — control valves, check valves, relief valves, manual valves
- **Piping** — process lines, utility lines, instrument connections
- **Annotations** — tag numbers, line numbers, spec breaks

### 3. Relationship Mapping

Beyond detection, we understand **how components connect**. The system maps:

- Process flow direction
- Instrument-to-equipment associations
- Control loop relationships (PV → controller → CV)
- Line spec transitions

### 4. Digital Twin Output

The result is a structured, queryable digital representation of your P&ID — not just an image with bounding boxes, but a **graph of engineering knowledge**.

> The digital twin output integrates directly with your existing CMMS, ERP, and simulation tools — no manual data entry required.

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

- **Knowledge Graphs** — detected components become nodes in your engineering knowledge network
- **Agentic Workflows** — trigger automated compliance checks when new P&IDs are processed
- **UniSim Integration** — map detected equipment to simulation models

---

## Get Started

Ready to digitize your P&IDs? Our forward-deployed engineers can have you processing drawings within your first week.
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

UniSim Integration works best alongside our P&ID Recognition and Knowledge Graphs capabilities. Our forward-deployed engineers handle the full setup — from model inventory to live synchronization — typically within 4-6 weeks.
`,
  },
};

export function getDoc(slug: string): DocEntry | undefined {
  return docs[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(docs);
}
