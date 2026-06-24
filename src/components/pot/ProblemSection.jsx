import Reveal from '../shared/Reveal';
import { consequences } from '../../data/pot';

export default function ProblemSection() {
  return (
    <section
      id="p-problem"
      data-screen-label="POT Problem"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: 'radial-gradient(ellipse 70% 50% at 80% 10%,#241813,#15100c 60%)' }}
    >
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif" style={{ fontSize: 13, letterSpacing: '.3em', color: '#caa066' }}>壱 Chapter One</span>
          <span className="flex-1 max-w-[160px]" style={{ height: 1, background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold" style={{ marginBottom: 18, fontSize: 'clamp(32px,5.4vw,62px)', lineHeight: 1.04, color: '#f3e8d3' }}>
          The Order With No Anchor
        </Reveal>
        <Reveal as="p" delay={140} style={{ margin: '0 0 18px', fontSize: 16, lineHeight: 1.85, color: '#b6a47f', fontWeight: 300, maxWidth: '60ch' }}>
          For bulk commodity imports across many markets, no purchase order was generated up front. So when a manufacturer's invoice arrived, finance was left holding two questions with no clean way to answer either:
        </Reveal>

        <Reveal delay={180} className="flex flex-wrap gap-[14px] mb-[30px]">
          {[
            'Which order does this invoice fulfil?',
            'Is the amount we\'re paying correct?',
          ].map((q) => (
            <div key={q} style={{ flex: '1', minWidth: 240, padding: '22px 26px', background: 'rgba(177,75,52,.08)', border: '1px solid rgba(177,75,52,.28)', borderRadius: 14 }}>
              <span className="font-serif" style={{ fontSize: 30, color: 'rgba(217,138,106,.55)', lineHeight: 1 }}>「</span>
              <p className="font-serif font-semibold m-0" style={{ marginTop: 6, fontSize: 'clamp(17px,2.2vw,22px)', color: '#ecdcbb' }}>{q}</p>
            </div>
          ))}
        </Reveal>

        <Reveal as="p" style={{ margin: '0 0 clamp(34px,5vw,48px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f', fontWeight: 300, maxWidth: '60ch' }}>
          Rates lived in a legacy trading tool that forced people through stacked screens with no multi level filtering. POT was introduced to pick the exact freight and packaging rate for each shipment — creating the missing order to match every invoice against.
        </Reveal>

        <Reveal className="flex flex-wrap gap-[10px] mb-[clamp(40px,6vw,60px)]">
          {consequences.map((c) => (
            <span key={c} className="inline-flex items-center gap-[9px]" style={{ fontSize: 13.5, color: '#d8c6a8', background: 'rgba(177,75,52,.1)', border: '1px solid rgba(177,75,52,.32)', padding: '9px 16px', borderRadius: 999 }}>
              <span aria-hidden="true" style={{ color: '#d98a6a' }}>✕</span>{c}
            </span>
          ))}
        </Reveal>

        {/* Ecosystem diagram */}
        <Reveal style={{ position: 'relative', padding: 'clamp(24px,4vw,40px)', background: 'rgba(236,224,200,.03)', border: '1px solid rgba(202,160,102,.16)', borderRadius: 18, overflowX: 'auto' }}>
          <span className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: '.22em', color: '#9a8157' }}>Where POT sits in the flow</span>
          <div style={{ position: 'relative', width: 880, height: 330, margin: '22px auto 0', minWidth: 880 }}>
            <svg viewBox="0 0 880 330" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }} aria-hidden="true">
              <defs>
                <marker id="potEco" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="rgba(202,160,102,.7)" /></marker>
                <marker id="potEcoG" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="rgba(127,199,160,.8)" /></marker>
              </defs>
              <path d="M210,140 C300,100 320,90 360,84" fill="none" stroke="rgba(202,160,102,.55)" strokeWidth="2" markerEnd="url(#potEco)" />
              <path d="M210,185 C300,225 320,240 360,250" fill="none" stroke="rgba(202,160,102,.4)" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#potEco)" />
              <path d="M520,80 C620,90 660,110 700,140" fill="none" stroke="#7fc7a0" strokeWidth="2.5" markerEnd="url(#potEcoG)" />
              <path d="M720,185 C660,225 600,245 530,252" fill="none" stroke="rgba(202,160,102,.5)" strokeWidth="2" markerEnd="url(#potEco)" />
            </svg>

            <div style={{ position: 'absolute', left: 60, top: 162, transform: 'translate(-50%,-50%)', width: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: 16, background: '#1d1610', border: '1.5px solid rgba(202,160,102,.45)', borderRadius: 12, textAlign: 'center' }}>
              <span className="font-serif" style={{ fontSize: 17, fontWeight: 600, color: '#ecdcbb' }}>SMPT</span>
              <span style={{ fontSize: 10.5, color: '#9a8157', lineHeight: 1.3 }}>manufacturer portal sends shipping info &amp; invoices</span>
            </div>
            <div style={{ position: 'absolute', left: 440, top: 84, transform: 'translate(-50%,-50%)', width: 170, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: 18, background: 'linear-gradient(160deg,#2a2018,#1d1610)', border: '1.5px solid #caa066', borderRadius: 13, textAlign: 'center', boxShadow: '0 0 0 6px rgba(202,160,102,.08)' }}>
              <span className="font-serif" style={{ fontSize: 20, fontWeight: 700, color: '#f3e8d3', letterSpacing: '.08em' }}>POT</span>
              <span style={{ fontSize: 10.5, color: '#caa066', lineHeight: 1.3 }}>picks exact freight &amp; packaging rate · creates the PO</span>
            </div>
            <div style={{ position: 'absolute', left: 440, top: 256, transform: 'translate(-50%,-50%)', width: 170, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: 16, background: '#1d1610', border: '1.5px solid rgba(202,160,102,.45)', borderRadius: 12, textAlign: 'center' }}>
              <span className="font-serif" style={{ fontSize: 16, fontWeight: 600, color: '#ecdcbb' }}>Basware · OCR</span>
              <span style={{ fontSize: 10.5, color: '#9a8157', lineHeight: 1.3 }}>reads invoices · cross verifies the PO</span>
            </div>
            <div style={{ position: 'absolute', left: 800, top: 162, transform: 'translate(-50%,-50%)', width: 150, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: 16, background: '#1d1610', border: '1.5px solid rgba(127,199,160,.45)', borderRadius: 12, textAlign: 'center' }}>
              <span className="font-serif" style={{ fontSize: 17, fontWeight: 600, color: '#d6ecdf' }}>FOP</span>
              <span style={{ fontSize: 10.5, color: '#9bbfa9', lineHeight: 1.3 }}>finance generates &amp; pays against the PO</span>
            </div>

            <span aria-hidden="true" style={{ position: 'absolute', left: 268, top: 96, fontFamily: "'DM Mono',monospace", fontSize: 9.5, letterSpacing: '.06em', color: '#8a7350' }}>shipping info</span>
            <span aria-hidden="true" style={{ position: 'absolute', left: 262, top: 232, fontFamily: "'DM Mono',monospace", fontSize: 9.5, letterSpacing: '.06em', color: '#8a7350' }}>invoices</span>
            <span aria-hidden="true" style={{ position: 'absolute', left: 584, top: 96, fontFamily: "'DM Mono',monospace", fontSize: 9.5, letterSpacing: '.06em', color: '#7fc7a0' }}>rate → PO</span>
            <span aria-hidden="true" style={{ position: 'absolute', left: 584, top: 232, fontFamily: "'DM Mono',monospace", fontSize: 9.5, letterSpacing: '.06em', color: '#8a7350' }}>PO cross check</span>
          </div>
          <p style={{ margin: '18px auto 0', maxWidth: '60ch', textAlign: 'center', fontSize: 13.5, lineHeight: 1.6, color: '#a8966f', fontWeight: 300 }}>
            POT manages freight &amp; packaging rates across the whole year — kept current by the middle office or uploaded in bulk by template.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
