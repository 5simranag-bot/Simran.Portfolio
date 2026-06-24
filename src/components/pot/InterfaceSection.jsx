import Reveal from '../shared/Reveal';
import { ia } from '../../data/pot';

const MockupShell = ({ path, children }) => (
  <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(202,160,102,.24)', boxShadow: '0 40px 70px -34px rgba(0,0,0,.85)', background: '#1a130d' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '10px 14px', background: '#211810', borderBottom: '1px solid rgba(202,160,102,.14)' }}>
      <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(202,160,102,.5)' }} />
      <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(202,160,102,.32)' }} />
      <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(202,160,102,.2)' }} />
      <span style={{ marginLeft: 8, fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: '.1em', color: '#9a8157' }}>{path}</span>
    </div>
    {children}
  </div>
);

const ScreenCopy = ({ eyebrow, title, body, solves }) => (
  <>
    <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase', color: '#caa066' }}>{eyebrow}</span>
    <h4 style={{ margin: '10px 0 10px', fontFamily: "'Shippori Mincho',serif", fontSize: 'clamp(22px,2.8vw,30px)', fontWeight: 600, color: '#f3e8d3', lineHeight: 1.15 }}>{title}</h4>
    <p style={{ margin: '0 0 18px', fontSize: 15, lineHeight: 1.75, color: '#bfae88', fontWeight: 300 }}>{body}</p>
    <div style={{ display: 'flex', gap: 12, paddingTop: 14, borderTop: '1px solid rgba(202,160,102,.14)' }}>
      <span style={{ flexShrink: 0, fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: '#caa066', width: 58, paddingTop: 2 }}>Solves</span>
      <span style={{ fontSize: 14, lineHeight: 1.6, color: '#d3c3a0', fontWeight: 300 }}>{solves}</span>
    </div>
  </>
);

const screens = [
  {
    dir: 'row',
    copy: {
      eyebrow: 'One screen, every dimension',
      title: 'Multi level filtering, all in one place',
      body: 'Shipping line, year, contract dates and the full POL → POD chain filter the rate table from a single panel that collapses when you need room.',
      solves: "The legacy tool's stacked screens, where finding one rate meant hopping across layers.",
    },
    mockup: (
      <MockupShell path="pot / freight-rate">
        <div style={{ padding: 'clamp(16px,2.2vw,22px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', marginBottom: 16 }}>
            {['CMAF', '2024–25', '01 Aug → 31 Oct', 'Asia · Indonesia · IDBLW', 'Asia · India · INMAA'].map((tag) => (
              <span key={tag} style={{ fontSize: 10.5, color: '#cbb78f', background: '#1d1610', border: '1px solid rgba(202,160,102,.28)', padding: '5px 11px', borderRadius: 999 }}>{tag}</span>
            ))}
            <span aria-hidden="true" style={{ display: 'grid', placeItems: 'center', width: 26, height: 26, borderRadius: '50%', background: '#caa066', color: '#15100c', fontSize: 12, marginLeft: 2 }}>⌕</span>
          </div>
          <div style={{ border: '1px solid rgba(202,160,102,.16)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr .8fr .8fr .8fr .7fr', background: 'rgba(202,160,102,.08)' }}>
              {['Line', 'Contract', 'POL', 'POD', 'Rate'].map((h, i) => (
                <span key={h} style={{ padding: '8px 10px', fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '.06em', textTransform: 'uppercase', color: '#caa066', textAlign: i === 4 ? 'right' : 'left' }}>{h}</span>
              ))}
            </div>
            {[['CMAF', '245', 'IDBLW', 'INMAA', '2394'], ['CMAF', '289', 'IDBLW', 'INMAA', '3800']].map((row, ri) => (
              <div key={ri} style={{ display: 'grid', gridTemplateColumns: '1fr .8fr .8fr .8fr .7fr', borderTop: '1px solid rgba(202,160,102,.1)' }}>
                {row.map((cell, ci) => (
                  <span key={ci} style={{ padding: '9px 10px', fontSize: 11, color: ci === 4 ? '#caa066' : '#d8c8a8', fontWeight: ci === 4 ? 600 : 400, textAlign: ci === 4 ? 'right' : 'left' }}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </MockupShell>
    ),
  },
  {
    dir: 'row-reverse',
    copy: {
      eyebrow: 'Built, not buried',
      title: 'Surcharges that show their math',
      body: 'BAF and each surcharge line build visibly onto the base rate and resolve into a single Final Rate, so the number is never a mystery.',
      solves: 'The old SC1–SC5 column sprawl that hid how a rate was actually composed.',
    },
    mockup: (
      <MockupShell path="pot / surcharges">
        <div style={{ padding: 'clamp(20px,2.6vw,28px)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 9, flexWrap: 'wrap' }}>
            <RateBox label="Base" value="2394" />
            <span style={{ fontSize: 18, color: '#caa066', paddingBottom: 12 }}>+</span>
            <RateBox label="BAF" value="100" />
            <span style={{ fontSize: 18, color: '#caa066', paddingBottom: 12 }}>+</span>
            <RateBox label="SC·PSS" value="200" info />
            <span style={{ fontSize: 18, color: '#caa066', paddingBottom: 12 }}>=</span>
            <RateBox label="Final" value="2694" highlight />
          </div>
          <p style={{ margin: '18px 0 0', textAlign: 'center', fontSize: 11.5, color: '#9a8157' }}>Each surcharge carries an info note — open it to see why it applies.</p>
        </div>
      </MockupShell>
    ),
  },
  {
    dir: 'row',
    copy: {
      eyebrow: 'Edit in place',
      title: 'Packaging rates with a live final',
      body: 'An inline surcharge field recalculates the final rate as you type — no separate screen, no guesswork.',
      solves: 'Context switching to another page just to understand or adjust a single number.',
    },
    mockup: (
      <MockupShell path="pot / packaging-rate">
        <div style={{ padding: 'clamp(20px,2.6vw,28px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9a8157' }}>Base rate</span>
              <span style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 20, fontWeight: 600, color: '#ecdcbb' }}>2394</span>
            </div>
            <span style={{ fontSize: 16, color: '#caa066' }}>+</span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9a8157' }}>Surcharge</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Shippori Mincho',serif", fontSize: 18, fontWeight: 600, color: '#ecdcbb', background: '#1d1610', border: '1.5px solid #caa066', borderRadius: 8, padding: '5px 14px' }}>
                300
                <span aria-hidden="true" style={{ width: 1, height: 16, background: '#caa066', animation: 'pglow 1.1s steps(1) infinite' }} />
              </span>
            </div>
            <span style={{ fontSize: 18, color: '#caa066' }}>→</span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: '10px 18px', background: '#caa066', borderRadius: 10, boxShadow: '0 0 0 5px rgba(202,160,102,.12)' }}>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '.08em', textTransform: 'uppercase', color: '#5c4528' }}>Final rate</span>
              <span style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 22, fontWeight: 700, color: '#15100c' }}>2694</span>
            </div>
          </div>
          <p style={{ margin: '18px 0 0', textAlign: 'center', fontSize: 11.5, color: '#9a8157' }}>The final rate recalculates live as you type.</p>
        </div>
      </MockupShell>
    ),
  },
  {
    dir: 'row-reverse',
    copy: {
      eyebrow: 'Read at a glance',
      title: 'Status you can see across the room',
      body: 'Every shipment row carries a colour-coded state — Published in green, Blocked in red — so exceptions surface before they cost anything.',
      solves: 'Invisible status, where pending or blocked records were only discovered too late.',
    },
    mockup: (
      <MockupShell path="pot / monitoring">
        <div style={{ padding: 'clamp(16px,2.2vw,22px)' }}>
          <div style={{ border: '1px solid rgba(202,160,102,.16)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '.9fr 1.2fr .7fr 1fr', background: 'rgba(202,160,102,.08)' }}>
              {['Lot', 'POL → POD', 'Total', 'Status'].map((h) => (
                <span key={h} style={{ padding: '8px 10px', fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '.06em', textTransform: 'uppercase', color: '#caa066', textAlign: h === 'Total' || h === 'Status' ? 'right' : 'left' }}>{h}</span>
              ))}
            </div>
            {[
              { st: 'Published', sc: { fontSize: 10, color: '#9bd4b4', background: 'rgba(127,199,160,.12)', border: '1px solid rgba(127,199,160,.5)', padding: '3px 10px', borderRadius: 999 } },
              { st: 'Blocked',   sc: { fontSize: 10, color: '#e6a48f', background: 'rgba(217,138,106,.12)', border: '1px solid rgba(217,138,106,.5)', padding: '3px 10px', borderRadius: 999 } },
              { st: 'Published', sc: { fontSize: 10, color: '#9bd4b4', background: 'rgba(127,199,160,.12)', border: '1px solid rgba(127,199,160,.5)', padding: '3px 10px', borderRadius: 999 } },
            ].map(({ st, sc }, ri) => (
              <div key={ri} style={{ display: 'grid', gridTemplateColumns: '.9fr 1.2fr .7fr 1fr', alignItems: 'center', borderTop: '1px solid rgba(202,160,102,.1)' }}>
                <span style={{ padding: '9px 10px', fontSize: 11, color: '#d8c8a8' }}>298548</span>
                <span style={{ padding: '9px 10px', fontSize: 11, color: '#d8c8a8' }}>IDBLW → INMAA</span>
                <span style={{ padding: '9px 10px', fontSize: 11, color: '#d8c8a8', textAlign: 'right' }}>5099</span>
                <span style={{ padding: '7px 10px', textAlign: 'right' }}><span style={sc}>{st}</span></span>
              </div>
            ))}
          </div>
        </div>
      </MockupShell>
    ),
  },
  {
    dir: 'row',
    copy: {
      eyebrow: 'Precision dating',
      title: 'Contract windows, exactly',
      body: 'A range calendar pins rates to the precise contract window they belong to — the detail that makes invoice matching trustworthy.',
      solves: "Ambiguous, overlapping date ranges that made the 'right' rate hard to defend.",
    },
    mockup: (
      <MockupShell path="pot / contract-dates">
        <div style={{ padding: 'clamp(18px,2.4vw,26px)' }}>
          <div style={{ maxWidth: 280, margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span aria-hidden="true" style={{ color: '#caa066', fontSize: 14 }}>‹</span>
              <span style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 14, fontWeight: 600, color: '#ecdcbb' }}>August 2024</span>
              <span aria-hidden="true" style={{ color: '#caa066', fontSize: 14 }}>›</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 3, marginBottom: 5 }}>
              {['Mo','Tu','We','Th','Fr','Sa','Su'].map((d) => (
                <span key={d} style={{ textAlign: 'center', fontFamily: "'DM Mono',monospace", fontSize: 9, color: '#8a7350' }}>{d}</span>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 3 }}>
              {[1,2,3,4,5,6,7].map((d) => <CalDay key={d} n={d} />)}
              {[8,9,10,11,12,13,14].map((d) => <CalDay key={d} n={d} rangeStart={d===8} rangeEnd={d===12} inRange={d>=8&&d<=12} />)}
            </div>
            <p style={{ margin: '14px 0 0', textAlign: 'center', fontSize: 11, color: '#9a8157' }}>Contract window: 08 → 12 Aug 2024</p>
          </div>
        </div>
      </MockupShell>
    ),
  },
];

export default function InterfaceSection() {
  return (
    <section
      id="p-interface"
      data-screen-label="POT Interface"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: '#15100c' }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <Reveal style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
          <span style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 13, letterSpacing: '.3em', color: '#caa066' }}>陸 Chapter Six</span>
          <span style={{ flex: 1, maxWidth: 160, height: 1, background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} style={{ margin: '0 0 16px', fontFamily: "'Shippori Mincho',serif", fontWeight: 600, fontSize: 'clamp(32px,5.4vw,62px)', lineHeight: 1.04, color: '#f3e8d3' }}>
          The Structure, Then the Surface
        </Reveal>
        <Reveal as="p" delay={140} style={{ margin: '0 0 clamp(40px,6vw,56px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f', fontWeight: 300, maxWidth: '54ch' }}>
          Three homes instead of a maze of stacked screens — then the surfaces where the work actually happens.
        </Reveal>

        {/* IA tree */}
        <Reveal style={{ overflowX: 'auto', padding: 'clamp(20px,3vw,34px)', background: 'rgba(236,224,200,.03)', border: '1px solid rgba(202,160,102,.16)', borderRadius: 18, marginBottom: 'clamp(54px,7vw,84px)' }}>
          <div style={{ minWidth: 820, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ padding: '13px 28px', background: 'linear-gradient(160deg,#2a2018,#1d1610)', border: '1.5px solid #caa066', borderRadius: 11, fontFamily: "'Shippori Mincho',serif", fontSize: 16, fontWeight: 600, color: '#f3e8d3', boxShadow: '0 0 0 5px rgba(202,160,102,.08)' }}>⌂ Homepage</div>
            <div aria-hidden="true" style={{ width: 2, height: 26, background: 'rgba(202,160,102,.4)' }} />
            <div aria-hidden="true" style={{ width: '66%', height: 2, background: 'rgba(202,160,102,.4)' }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, width: '100%' }}>
              {ia.map((col) => (
                <div key={col.t} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div aria-hidden="true" style={{ width: 2, height: 24, background: 'rgba(202,160,102,.4)' }} />
                  <div style={{ width: '100%', textAlign: 'center', padding: '13px 14px', background: '#1d1610', border: '1.5px solid rgba(202,160,102,.45)', borderRadius: 10, fontFamily: "'Shippori Mincho',serif", fontSize: 14.5, fontWeight: 600, color: '#ecdcbb' }}>{col.t}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', marginTop: 12 }}>
                    {col.children.map((ch) => (
                      <div key={ch} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 13px', background: 'rgba(236,224,200,.04)', border: '1px solid rgba(202,160,102,.18)', borderRadius: 8, fontSize: 12.5, color: '#bfae88' }}>
                        <span aria-hidden="true" style={{ color: '#8a7350' }}>└</span>{ch}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal as="h3" style={{ margin: '0 0 clamp(40px,5vw,56px)', fontFamily: "'Shippori Mincho',serif", fontWeight: 600, fontSize: 'clamp(22px,2.8vw,32px)', color: '#f3e8d3' }}>
          The surfaces where work happens
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(56px,8vw,104px)' }}>
          {screens.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(28px,5vw,64px)', flexDirection: s.dir, flexWrap: 'wrap' }}>
              {/* mockup */}
              <Reveal style={{ flex: '1.5', minWidth: 280, position: 'relative' }}>
                <div aria-hidden="true" style={{ position: 'absolute', inset: '-10% -6% -8%', borderRadius: '50%', background: 'radial-gradient(circle,rgba(202,160,102,.12),rgba(202,160,102,0) 70%)' }} />
                <div style={{ position: 'relative' }}>
                  {s.mockup}
                </div>
              </Reveal>
              {/* copy */}
              <Reveal delay={120} style={{ flex: 1, minWidth: 260 }}>
                <ScreenCopy {...s.copy} />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RateBox({ label, value, highlight, info }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5, padding: highlight ? '12px 18px' : '12px 14px', background: highlight ? '#caa066' : '#1d1610', border: highlight ? 'none' : '1px solid rgba(202,160,102,.28)', borderRadius: 10, minWidth: highlight ? 82 : 62, position: info ? 'relative' : undefined, boxShadow: highlight ? '0 0 0 5px rgba(202,160,102,.12)' : undefined }}>
      {info && <span aria-hidden="true" style={{ position: 'absolute', top: 5, right: 7, fontSize: 9, color: '#caa066' }}>ⓘ</span>}
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 9, letterSpacing: '.08em', textTransform: 'uppercase', color: highlight ? '#5c4528' : '#9a8157' }}>{label}</span>
      <span style={{ fontFamily: "'Shippori Mincho',serif", fontSize: highlight ? 22 : 18, fontWeight: highlight ? 700 : 600, color: highlight ? '#15100c' : '#ecdcbb' }}>{value}</span>
    </div>
  );
}

function CalDay({ n, rangeStart, rangeEnd, inRange }) {
  const base = { aspectRatio: '1', display: 'grid', placeItems: 'center', fontSize: 11 };
  if (rangeStart) return <span style={{ ...base, fontWeight: 600, color: '#15100c', background: '#caa066', borderRadius: '7px 0 0 7px' }}>{n}</span>;
  if (rangeEnd)   return <span style={{ ...base, fontWeight: 600, color: '#15100c', background: '#caa066', borderRadius: '0 7px 7px 0' }}>{n}</span>;
  if (inRange)    return <span style={{ ...base, color: '#ecdcbb', background: 'rgba(202,160,102,.18)' }}>{n}</span>;
  return <span style={{ ...base, color: '#bfae88' }}>{n}</span>;
}
