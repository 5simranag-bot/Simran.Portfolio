import { Link } from 'react-router-dom';
import Reveal from '../shared/Reveal';
import { outcomes } from '../../data/pot';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';
import { scrollToId } from '../../utils/scroll';

export default function SummitSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="p-summit"
      data-screen-label="POT Summit"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(90px,12vw,160px) clamp(20px,5vw,42px) clamp(70px,9vw,110px)', background: 'radial-gradient(ellipse 80% 70% at 50% 100%,#2a1d12,#1a130d 56%,#15100c 100%)' }}
    >
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px] justify-center">
          <span className="font-serif" style={{ fontSize: 13, letterSpacing: '.3em', color: '#caa066' }}>捌 The Summit</span>
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold text-center" style={{ marginBottom: 16, fontSize: 'clamp(32px,5.4vw,62px)', lineHeight: 1.04, color: '#f3e8d3' }}>
          Outcomes
        </Reveal>
        <Reveal as="p" delay={140} className="text-center mx-auto" style={{ margin: '0 auto clamp(48px,7vw,68px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f', fontWeight: 300, maxWidth: '50ch' }}>
          Qualitative wins — the kind a unified rate platform was built to deliver.
        </Reveal>

        <div className="grid gap-[14px]" style={{ gridTemplateColumns: 'repeat(5,1fr)', marginBottom: 'clamp(56px,8vw,84px)' }}>
          {outcomes.map((o) => (
            <Reveal key={o.t} delay={o.delay} className="flex flex-col items-center text-center" style={{ padding: 'clamp(24px,3vw,32px) 16px', background: 'rgba(236,224,200,.04)', border: '1px solid rgba(202,160,102,.2)', borderRadius: 16 }}>
              <span aria-hidden="true" className="font-serif" style={{ display: 'grid', placeItems: 'center', width: 54, height: 54, borderRadius: '50%', background: 'rgba(202,160,102,.14)', fontSize: 26, color: '#caa066', marginBottom: 16 }}>{o.icon}</span>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: '#d8c8a8' }}>{o.t}</p>
            </Reveal>
          ))}
        </div>

        {/* Learning card */}
        <Reveal className="relative mx-auto overflow-hidden" style={{ maxWidth: 760, padding: 'clamp(36px,5vw,56px)', background: 'linear-gradient(160deg,#ece0c8,#ddccab)', borderRadius: 20, boxShadow: '0 30px 60px -34px rgba(0,0,0,.7)' }}>
          <span aria-hidden="true" className="font-serif absolute" style={{ top: -40, right: -16, fontSize: 170, lineHeight: 1, color: 'rgba(110,85,54,.08)' }}>省</span>
          <span className="font-mono uppercase" style={{ fontSize: 11, letterSpacing: '.24em', color: '#9a6b3f' }}>What I learned</span>
          <p className="font-serif font-semibold" style={{ margin: '16px 0 0', fontSize: 'clamp(19px,2.6vw,27px)', lineHeight: 1.5, color: '#2c2114' }}>
            This project reinforced the importance of understanding decision making systems before designing interfaces.
          </p>
          <p style={{ margin: '18px 0 0', fontSize: 15, lineHeight: 1.8, color: '#5e4c33' }}>
            The biggest challenge was not creating screens. It was simplifying complex workflows while balancing business rules, user needs, and operational constraints — holding all three in tension until a simpler shape emerged.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal className="flex flex-wrap justify-center gap-[14px]" style={{ marginTop: 44 }}>
          <Link
            to="/#work"
            className="inline-flex items-center gap-[10px] rounded-full font-medium transition-all duration-300 hover:-translate-y-[2px]"
            style={{ background: '#caa066', color: '#15100c', padding: '15px 28px', fontSize: 14, letterSpacing: '.04em' }}
          >
            ← Back to the temple
          </Link>
          <a
            href="/#contact"
            onClick={(e) => { e.preventDefault(); scrollToId('contact', reduced); }}
            className="inline-flex items-center gap-[10px] rounded-full transition-all duration-300"
            style={{ background: 'none', border: '1px solid rgba(202,160,102,.4)', color: '#e3d2af', padding: '15px 28px', fontSize: 14, letterSpacing: '.04em' }}
          >
            Start a conversation →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
