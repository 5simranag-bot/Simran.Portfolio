import Reveal from '../shared/Reveal';
import { findings } from '../../data/pot';

export default function FindingsSection() {
  return (
    <section
      id="p-findings"
      data-screen-label="POT Findings"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: 'radial-gradient(ellipse 60% 50% at 20% 30%,#221712,#15100c 62%)' }}
    >
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif" style={{ fontSize: 13, letterSpacing: '.3em', color: '#caa066' }}>参 Chapter Three</span>
          <span className="flex-1 max-w-[160px]" style={{ height: 1, background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold" style={{ marginBottom: 16, fontSize: 'clamp(32px,5.4vw,62px)', lineHeight: 1.04, color: '#f3e8d3' }}>
          What the Map Revealed
        </Reveal>
        <Reveal as="p" delay={140} style={{ margin: '0 0 clamp(40px,6vw,60px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f', fontWeight: 300, maxWidth: '52ch' }}>
          Four fault lines beneath the legacy tool — each one became a design principle.
        </Reveal>

        <div className="grid gap-[clamp(16px,2.4vw,24px)]" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {findings.map((f) => (
            <Reveal key={f.n} delay={f.delay} className="relative flex gap-[20px] overflow-hidden transition-transform duration-500" style={{ padding: 'clamp(26px,3vw,34px)', background: 'linear-gradient(160deg,#ece0c8,#ddccab)', borderRadius: 16, boxShadow: '0 24px 48px -30px rgba(0,0,0,.7)' }}>
              <span aria-hidden="true" className="font-serif font-bold flex-shrink-0" style={{ fontSize: 'clamp(34px,4.4vw,52px)', lineHeight: 1, color: 'rgba(177,75,52,.32)' }}>{f.n}</span>
              <div>
                <h3 className="font-serif font-semibold" style={{ margin: '0 0 8px', fontSize: 'clamp(18px,2.2vw,23px)', color: '#2c2114', lineHeight: 1.25 }}>{f.t}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: '#5e4c33' }}>{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
