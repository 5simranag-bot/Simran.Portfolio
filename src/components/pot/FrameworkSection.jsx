import Reveal from '../shared/Reveal';
import { framework, matrix } from '../../data/pot';

const BASE_BADGE = { display: 'inline-flex', alignItems: 'center', fontSize: 12, letterSpacing: '.04em', padding: '5px 12px', borderRadius: 999 };

const BADGE = {
  High:   { ...BASE_BADGE, background: 'rgba(202,160,102,.16)', color: '#e6c891', border: '1px solid rgba(202,160,102,.4)' },
  Medium: { ...BASE_BADGE, background: 'rgba(127,199,160,.12)', color: '#9bd4b4', border: '1px solid rgba(127,199,160,.34)' },
  Low:    { ...BASE_BADGE, background: 'rgba(160,144,108,.12)', color: '#bfae88', border: '1px solid rgba(160,144,108,.34)' },
  P1:     { ...BASE_BADGE, background: '#caa066', color: '#15100c', border: '1px solid #caa066', fontWeight: 600 },
  P2:     { ...BASE_BADGE, background: 'rgba(127,199,160,.16)', color: '#9bd4b4', border: '1px solid rgba(127,199,160,.45)' },
  P3:     { ...BASE_BADGE, background: 'transparent', color: '#a0906c', border: '1px solid rgba(160,144,108,.45)' },
};

export default function FrameworkSection() {
  return (
    <section
      id="p-framework"
      data-screen-label="POT Framework"
      className="relative"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: '#15100c' }}
    >
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif" style={{ fontSize: 13, letterSpacing: '.3em', color: '#caa066' }}>肆 Chapter Four</span>
          <span className="flex-1 max-w-[160px]" style={{ height: 1, background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold" style={{ marginBottom: 10, fontSize: 'clamp(32px,5.4vw,62px)', lineHeight: 1.04, color: '#f3e8d3' }}>
          Decision Path Mapping<span style={{ color: '#caa066', fontSize: '.5em', verticalAlign: 'super' }}> ™</span>
        </Reveal>
        <Reveal as="p" delay={140} style={{ margin: '0 0 clamp(40px,6vw,56px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f', fontWeight: 300, maxWidth: '56ch' }}>
          A framework I used to understand the workflow before designing screens. Instead of jumping into flows, I first mapped the terrain of the decision itself — so the edge cases revealed themselves before a single pixel was drawn.
        </Reveal>

        {/* Decision path timeline */}
        <div style={{ position: 'relative', borderLeft: '2px solid rgba(202,160,102,.3)', marginLeft: 8 }}>
          {framework.map((l) => (
            <Reveal key={l.n} delay={l.delay} className="relative flex items-center gap-[20px]" style={{ padding: '14px 0 14px 28px' }}>
              <span aria-hidden="true" style={{ position: 'absolute', left: -9, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, borderRadius: '50%', background: '#caa066', boxShadow: '0 0 0 5px #15100c' }} />
              <span className="font-mono flex-shrink-0" style={{ fontSize: 11, color: '#8a7350', width: 34 }}>{l.n}</span>
              <span className="font-serif font-semibold flex-shrink-0" style={{ fontSize: 'clamp(17px,2vw,21px)', color: '#ecdcbb', width: 'clamp(180px,24vw,260px)' }}>{l.t}</span>
              <span style={{ fontSize: 14, lineHeight: 1.6, color: '#a8966f', fontWeight: 300 }}>{l.d}</span>
            </Reveal>
          ))}
        </div>

        {/* Priority matrix */}
        <Reveal as="h3" style={{ margin: 'clamp(54px,7vw,80px) 0 8px', fontFamily: "'Shippori Mincho',serif", fontSize: 'clamp(22px,2.8vw,30px)', fontWeight: 600, color: '#f3e8d3' }}>
          Use Case Prioritization
        </Reveal>
        <Reveal as="p" style={{ margin: '0 0 28px', fontSize: 15, lineHeight: 1.7, color: '#b6a47f', fontWeight: 300, maxWidth: '48ch' }}>
          Mapping value against impact told us what to build first and what could wait.
        </Reveal>
        <Reveal style={{ overflowX: 'auto', border: '1px solid rgba(202,160,102,.18)', borderRadius: 14 }}>
          <div style={{ minWidth: 640 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'rgba(202,160,102,.08)', borderBottom: '1px solid rgba(202,160,102,.18)' }}>
              {['Use case', 'User value', 'Business impact', 'Priority'].map((h) => (
                <span key={h} className="font-mono uppercase" style={{ padding: '15px 22px', fontSize: 11, letterSpacing: '.14em', color: '#caa066' }}>{h}</span>
              ))}
            </div>
            {matrix.map((m) => (
              <div key={m.useCase} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: '1px solid rgba(202,160,102,.1)' }}>
                <span style={{ padding: '16px 22px', fontSize: 14.5, color: '#ecdcbb', display: 'flex', alignItems: 'center' }}>{m.useCase}</span>
                <span style={{ padding: '16px 22px', display: 'flex', alignItems: 'center' }}><span style={BADGE[m.value]}>{m.value}</span></span>
                <span style={{ padding: '16px 22px', display: 'flex', alignItems: 'center' }}><span style={BADGE[m.impact]}>{m.impact}</span></span>
                <span style={{ padding: '16px 22px', display: 'flex', alignItems: 'center' }}><span style={BADGE[m.priority]}>{m.priority}</span></span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
