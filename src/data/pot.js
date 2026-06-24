export const sections = [
  { id: 'p-problem', label: 'Problem' },
  { id: 'p-research', label: 'Research' },
  { id: 'p-findings', label: 'Findings' },
  { id: 'p-framework', label: 'Framework' },
  { id: 'p-routes', label: 'Routes' },
  { id: 'p-interface', label: 'Interface' },
  { id: 'p-strategy', label: 'Strategy' },
  { id: 'p-summit', label: 'Summit' },
];

export const tldr = [
  { k: 'Problem', v: "Commodity imports arrived with no purchase order — finance couldn't tell which order an invoice fulfilled or whether the amount was right." },
  { k: 'Process', v: '12 interviews, contextual inquiry and a legacy tool audit → a decision-first rate management platform.' },
  { k: 'Solution', v: 'POT — one place to manage freight & packaging rates all year, matched precisely to each shipment.' },
  { k: 'Outcome', v: 'Faster rate lookup, fewer navigation layers, confident invoice matching.' },
];

export const consequences = [
  'No PO to match against',
  'Rates buried in stacked screens',
  'No multi level filtering',
  'Manual invoice cross checks',
  'Inconsistent rate lookups',
];

export const research = [
  { icon: '聞', tag: '12 sessions', t: 'Stakeholder Interviews', d: 'Workflows, bottlenecks and dependencies, in their words.', delay: 0 },
  { icon: '観', tag: 'In context', t: 'Contextual Inquiry', d: 'Observed real purchasing and rate work.', delay: 80 },
  { icon: '旧', tag: 'Legacy tool', t: 'ENDUR Audit', d: 'Mapped the stacked screen pain of the old system.', delay: 160 },
  { icon: '図', tag: 'Current state', t: 'Workflow Analysis', d: 'Charted the process end to end.', delay: 240 },
  { icon: '集', tag: 'Cross functional', t: 'Discovery Workshops', d: 'Aligned teams on problems and priorities.', delay: 320 },
];

export const researchStats = [
  { target: 12, unit: '', label: 'Stakeholder interviews' },
  { target: 5, unit: '', label: 'Research methods' },
  { target: 2, unit: 'mo', label: 'Project duration' },
  { target: 3, unit: '', label: 'Core roles mapped' },
];

export const findings = [
  { n: '01', t: 'No PO, no anchor', d: 'Without a purchase order generated up front, invoices had nothing to be matched against.', delay: 0 },
  { n: '02', t: 'Rates hidden across layers', d: "The legacy tool forced users through stacked screens with no multi level filter — the right rate was always a maze away.", delay: 90 },
  { n: '03', t: 'Surcharges sprawled', d: "A wall of SC1–SC5 columns confused more than it clarified; people couldn't see how a final rate was built.", delay: 180 },
  { n: '04', t: 'Status was invisible', d: 'Nothing signalled what was published, blocked or still pending — errors surfaced too late to fix cheaply.', delay: 270 },
];

export const framework = [
  { n: '01', t: 'User goals', d: 'What each role is actually trying to accomplish.', delay: 0 },
  { n: '02', t: 'Business dependencies', d: 'The rules, systems and approvals the goal depends on.', delay: 70 },
  { n: '03', t: 'Decision points', d: 'Every moment where the path can fork.', delay: 140 },
  { n: '04', t: 'Alternate routes', d: "The valid ways through when the default doesn't apply.", delay: 210 },
  { n: '05', t: 'Approval paths', d: 'Who must sign off, and under what conditions.', delay: 280 },
  { n: '06', t: 'Exception scenarios', d: 'The edge cases that break naive flows — surfaced early.', delay: 350 },
];

export const matrix = [
  { useCase: 'Manage freight base rates', value: 'High', impact: 'High', priority: 'P1' },
  { useCase: 'Manage surcharges', value: 'High', impact: 'High', priority: 'P1' },
  { useCase: 'Manage packaging rates', value: 'High', impact: 'High', priority: 'P1' },
  { useCase: 'Monitor shipment status', value: 'Medium', impact: 'High', priority: 'P2' },
  { useCase: 'Upload rates via template', value: 'Medium', impact: 'Medium', priority: 'P2' },
  { useCase: 'Admin access control', value: 'Low', impact: 'Medium', priority: 'P3' },
];

export const routes = [
  { icon: '管', role: 'Administrator', sub: 'Governs access & rates', delay: 0, steps: [
    { label: 'Manage user access' }, { label: 'Set change perimeters' }, { label: 'Upload / approve rates' }, { label: 'Monitor reports' },
  ]},
  { icon: '商', role: 'Business Coordinator', sub: 'Visualises & exports', delay: 90, steps: [
    { label: 'View dashboard' }, { label: 'Review prioritisation' }, { label: 'Check capacity status' }, { label: 'Export report' },
  ]},
  { icon: '運', role: 'Regional Supply Planner', sub: 'Plans & validates', delay: 180, steps: [
    { label: 'Open product listing' }, { label: 'Detail page' }, { label: 'Reprioritise / validate' }, { label: 'Save & update' },
  ]},
].map((r) => ({ ...r, steps: r.steps.map((s, i) => ({ label: s.label, notLast: i < r.steps.length - 1 })) }));

export const ia = [
  { t: 'Freight Rate & Surcharges', children: ['Base Rates', 'Surcharges', 'Filters & Table', 'Template / Upload rates'] },
  { t: 'Packaging Rate & Surcharges', children: ['Base Rate', 'Filters & Table', 'Template / Upload rates'] },
  { t: 'Monitoring Report', children: ['Freight details', 'Packaging details', 'Status tracking'] },
];

export const strategy = [
  { icon: '速', n: 'Goal 01', t: 'Cut rate lookup time', delay: 0 },
  { icon: '視', n: 'Goal 02', t: 'Make every rate filterable on one screen', delay: 90 },
  { icon: '警', n: 'Goal 03', t: 'Surface status & exceptions early', delay: 180 },
  { icon: '結', n: 'Goal 04', t: 'Give finance a PO to match', delay: 270 },
];

export const decisions = [
  { icon: '濾', t: 'Multi level filtering', d: "Collapse the legacy tool's stacked screens into a single, deeply filterable table.", delay: 0 },
  { icon: '合', t: 'Consolidated surcharges + info', d: 'One rate story per row instead of SC column sprawl; the breakdown is there on demand.', delay: 90 },
  { icon: '色', t: 'Status colour coding', d: 'Published, Blocked and pending states read instantly, so errors are caught early.', delay: 180 },
  { icon: '権', t: 'Role based access & templates', d: 'Admins grant or revoke perimeters per user; rates upload in bulk by template.', delay: 270 },
];

export const outcomes = [
  { icon: '探', t: 'Less time locating rates', delay: 0 },
  { icon: '速', t: 'Faster invoice matching', delay: 90 },
  { icon: '視', t: 'Clear shipment status', delay: 180 },
  { icon: '層', t: 'Fewer navigation layers', delay: 270 },
  { icon: '信', t: 'Confident rate decisions', delay: 360 },
];
