import Reveal from '../shared/Reveal';
import { tldr } from '../../data/pot';

export default function PTldrStrip() {
  return (
    <section
      className="relative z-2"
      style={{ background: '#1d1610', borderTop: '1px solid rgba(202,160,102,.16)', borderBottom: '1px solid rgba(202,160,102,.16)', padding: 'clamp(28px,4vw,40px) clamp(20px,5vw,42px)' }}
    >
      <div
        className="max-w-[1140px] mx-auto grid gap-[clamp(16px,3vw,40px)]"
        style={{ gridTemplateColumns: 'repeat(4,1fr)' }}
      >
        {tldr.map((t, i) => (
          <Reveal key={t.k} delay={i * 60} className="flex flex-col gap-[7px]">
            <span className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: '.2em', color: '#caa066' }}>{t.k}</span>
            <span style={{ fontSize: 14, lineHeight: 1.5, color: '#d8c8a8', fontWeight: 300 }}>{t.v}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
