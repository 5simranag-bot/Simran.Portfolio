import Reveal from '../shared/Reveal';
import AnimatedCounter from '../kinda/AnimatedCounter';
import { research, researchStats } from '../../data/pot';

export default function ResearchSection() {
  return (
    <section
      id="p-research"
      data-screen-label="POT Research"
      className="relative"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: '#15100c' }}
    >
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif" style={{ fontSize: 13, letterSpacing: '.3em', color: '#caa066' }}>弐 Chapter Two</span>
          <span className="flex-1 max-w-[160px]" style={{ height: 1, background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold" style={{ marginBottom: 16, fontSize: 'clamp(32px,5.4vw,62px)', lineHeight: 1.04, color: '#f3e8d3' }}>
          Research &amp; Discovery
        </Reveal>
        <Reveal as="p" delay={140} style={{ margin: '0 0 clamp(40px,6vw,56px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f', fontWeight: 300, maxWidth: '56ch' }}>
          I sat with the people who lived inside the workflow and watched them fight the legacy tool — to understand the decision before redesigning the screen.
        </Reveal>

        {/* Research methods */}
        <div className="relative mb-[clamp(44px,6vw,64px)]">
          <div aria-hidden="true" className="absolute hidden lg:block" style={{ top: 30, left: '6%', right: '6%', height: 2, background: 'repeating-linear-gradient(90deg,rgba(202,160,102,.5) 0 9px,transparent 9px 18px)' }} />
          <div className="grid gap-[14px]" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
            {research.map((r) => (
              <Reveal key={r.t} delay={r.delay} className="relative flex flex-col items-center text-center">
                <div style={{ position: 'relative', width: 60, height: 60, borderRadius: '50%', background: '#1d1610', border: '2px solid #caa066', display: 'grid', placeItems: 'center', fontFamily: "'Shippori Mincho',serif", fontSize: 22, color: '#caa066', boxShadow: '0 0 0 6px rgba(21,16,12,1)', marginBottom: 16 }}>
                  {r.icon}
                </div>
                <span className="font-mono" style={{ fontSize: 10, letterSpacing: '.12em', color: '#8a7350' }}>{r.tag}</span>
                <h3 className="font-serif font-semibold" style={{ margin: '4px 0 6px', fontSize: 16, color: '#ecdcbb', lineHeight: 1.2 }}>{r.t}</h3>
                <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.55, color: '#a0906c', fontWeight: 300 }}>{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-[clamp(14px,2vw,22px)]" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
          {researchStats.map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 5, padding: '22px 24px', background: 'rgba(236,224,200,.04)', border: '1px solid rgba(202,160,102,.2)', borderRadius: 14 }}>
              <span style={{ display: 'flex', alignItems: 'baseline', fontFamily: "'Shippori Mincho',serif", fontWeight: 700, lineHeight: 1, color: '#caa066' }}>
                <AnimatedCounter target={s.target} style={{ fontSize: 'clamp(34px,4.4vw,48px)' }} />
                <span style={{ fontSize: 'clamp(20px,2.4vw,26px)' }}>{s.unit}</span>
              </span>
              <span style={{ fontSize: 12.5, letterSpacing: '.04em', color: '#cbb78f' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
