import Reveal from '../shared/Reveal';
import { strategy, decisions } from '../../data/pot';

export default function StrategySection() {
  return (
    <section
      id="p-strategy"
      data-screen-label="POT Strategy"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: 'radial-gradient(ellipse 70% 50% at 80% 20%,#221712,#15100c 62%)' }}
    >
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif" style={{ fontSize: 13, letterSpacing: '.3em', color: '#caa066' }}>漆 Chapter Seven</span>
          <span className="flex-1 max-w-[160px]" style={{ height: 1, background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold" style={{ marginBottom: 16, fontSize: 'clamp(32px,5.4vw,62px)', lineHeight: 1.04, color: '#f3e8d3' }}>
          Strategy &amp; Decisions
        </Reveal>
        <Reveal as="p" delay={140} style={{ margin: '0 0 clamp(40px,6vw,56px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f', fontWeight: 300, maxWidth: '52ch' }}>
          Four goals set the direction; four decisions made them real.
        </Reveal>

        <Reveal as="h3" className="font-mono uppercase" style={{ margin: '0 0 20px', fontSize: 12, letterSpacing: '.22em', color: '#9a8157' }}>
          The goals
        </Reveal>
        <div className="grid gap-[16px]" style={{ gridTemplateColumns: 'repeat(4,1fr)', marginBottom: 'clamp(48px,6vw,70px)' }}>
          {strategy.map((g) => (
            <Reveal key={g.n} delay={g.delay} className="flex flex-col" style={{ padding: '26px 22px', background: 'rgba(236,224,200,.04)', border: '1px solid rgba(202,160,102,.2)', borderRadius: 14 }}>
              <span aria-hidden="true" className="font-serif" style={{ display: 'grid', placeItems: 'center', width: 46, height: 46, borderRadius: 10, background: 'rgba(202,160,102,.14)', fontSize: 23, color: '#caa066', marginBottom: 16 }}>{g.icon}</span>
              <span className="font-mono" style={{ fontSize: 10.5, letterSpacing: '.1em', color: '#8a7350', marginBottom: 6 }}>{g.n}</span>
              <h4 className="font-serif font-semibold m-0" style={{ fontSize: 16.5, color: '#ecdcbb', lineHeight: 1.3 }}>{g.t}</h4>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="font-mono uppercase" style={{ margin: '0 0 20px', fontSize: 12, letterSpacing: '.22em', color: '#9a8157' }}>
          Key design decisions
        </Reveal>
        <div className="grid gap-[16px]" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {decisions.map((d) => (
            <Reveal key={d.t} delay={d.delay} className="flex gap-[20px]" style={{ padding: 'clamp(24px,3vw,30px)', background: 'rgba(236,224,200,.04)', border: '1px solid rgba(202,160,102,.2)', borderRadius: 14 }}>
              <span aria-hidden="true" className="font-serif flex-shrink-0" style={{ display: 'grid', placeItems: 'center', width: 50, height: 50, borderRadius: 11, background: 'rgba(202,160,102,.12)', fontSize: 24, color: '#caa066' }}>{d.icon}</span>
              <div>
                <h4 className="font-serif font-semibold" style={{ margin: '0 0 7px', fontSize: 19, color: '#f3e8d3' }}>{d.t}</h4>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: '#a8966f', fontWeight: 300 }}>{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
