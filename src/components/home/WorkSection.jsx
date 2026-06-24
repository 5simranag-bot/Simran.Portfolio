import { Link } from 'react-router-dom';
import Reveal from '../shared/Reveal';

const potTags = ['UX Research', 'Enterprise SaaS', 'Systems Thinking'];
const kindaTags = ['UX Research', 'Mobile · iOS', 'Design System'];

const templeStyle = {
  padding: 'clamp(52px,6vw,74px) clamp(28px,4vw,50px) clamp(30px,4vw,44px)',
  background: 'linear-gradient(165deg,#2a1f14,#171009)',
  clipPath: 'polygon(50% 0,100% 8%,100% 100%,0 100%,0 8%)',
  filter: 'drop-shadow(0 34px 44px rgba(43,39,34,.5))',
};

/** Mountain Two "What I Create": POT shrine first, then KINDA SHOPEE shrine. */
export default function WorkSection() {
  return (
    <section
      id="work"
      data-screen-label="Mountain 2 What I Create"
      className="relative overflow-hidden"
      style={{
        padding: 'clamp(52px,7vw,96px) 0 clamp(48px,7vw,80px)',
        background: 'linear-gradient(180deg,#6f5c44 0%,#8a7457 8%,#cdb591 26%,#f6efe0 60%,#efe3cf 100%)',
      }}
    >
      <div className="relative z-3 max-w-[1180px] mx-auto px-[clamp(22px,6vw,64px)]">
        <Reveal className="flex items-center gap-4 mb-[18px]">
          <span className="font-mono text-xs" style={{ letterSpacing: '.3em', color: '#f0d9b5' }}>
            峰 02 Mountain Two
          </span>
          <span className="flex-1 h-px max-w-[120px]" style={{ background: 'rgba(244,234,217,.35)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold leading-[1.02]" style={{ fontSize: 'clamp(34px,5.4vw,68px)', color: '#fbf4e6' }}>
          What I Create
        </Reveal>
        <Reveal as="p" delay={140} className="font-light max-w-[44ch]" style={{ margin: '18px 0 0', fontSize: 16, lineHeight: 1.8, color: '#efe3cf' }}>
          <b>A temple housing the work. Step through either shrine to walk a full case study, from the first question to the summit.</b>
        </Reveal>

        {/* POT shrine — first */}
        <Reveal
          as={Link}
          to="/work/pot"
          aria-label="Open the POT Purchase Optimization Tool case study"
          delay={0}
          className="relative grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-[clamp(20px,4vw,46px)] items-center overflow-hidden transition-all duration-500 hover:-translate-y-[6px]"
          style={{ ...templeStyle, marginTop: 'clamp(40px,6vw,60px)' }}
        >
          <span aria-hidden="true" className="absolute" style={{ top: '8%', left: 0, right: 0, height: 7, background: 'linear-gradient(90deg,#b8915a,#caa066,#b8915a)' }} />
          <span aria-hidden="true" className="absolute" style={{ top: 'calc(8% + 14px)', left: '6%', right: '6%', height: 4, background: 'rgba(202,160,102,.5)' }} />
          <span
            aria-hidden="true"
            className="absolute rounded-full"
            style={{ top: '2.6%', left: '50%', transform: 'translateX(-50%)', width: 12, height: 12, background: '#caa066', boxShadow: '0 0 16px 3px rgba(202,160,102,.6)' }}
          />
          <div className="relative">
            <span className="font-mono text-[11px] uppercase" style={{ letterSpacing: '.2em', color: '#caa066' }}>
              Featured shrine · Enterprise
            </span>
            <h3 className="font-serif font-bold leading-[.98]" style={{ margin: '10px 0 0', fontSize: 'clamp(34px,5vw,60px)', letterSpacing: '.06em', color: '#f5ead4' }}>
              POT
            </h3>
            <p className="font-serif italic max-w-[32ch]" style={{ margin: '14px 0 0', fontSize: 'clamp(15px,1.9vw,19px)', lineHeight: 1.5, color: '#cdb893' }}>
              Purchase Optimization Tool unifying fragmented procurement into one centralized decision platform.
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: 22 }}>
              {potTags.map((tag) => (
                <span key={tag} className="text-xs rounded-full" style={{ color: '#d8c6a8', border: '1px solid rgba(202,160,102,.34)', padding: '6px 13px' }}>
                  {tag}
                </span>
              ))}
            </div>
            <span
              className="inline-flex items-center gap-[9px] rounded-full font-medium"
              style={{ marginTop: 26, background: '#caa066', color: '#15100c', padding: '13px 24px', fontSize: 13.5, letterSpacing: '.04em' }}
            >
              Enter the shrine <span aria-hidden="true">→</span>
            </span>
          </div>

          {/* POT node diagram */}
          <div className="hidden md:flex relative items-center justify-center" style={{ minHeight: 'clamp(200px,26vw,290px)' }}>
            <div style={{ position: 'relative', width: 300, height: 248 }}>
              <svg viewBox="0 0 300 248" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
                <g stroke="rgba(202,160,102,.45)" strokeWidth="1.5" fill="none">
                  <path d="M150,124 L58,46" />
                  <path d="M150,124 L242,46" />
                  <path d="M150,124 L58,202" />
                  <path d="M150,124 L242,202" />
                </g>
              </svg>
              {/* Central POT node */}
              <div style={{ position: 'absolute', left: 150, top: 124, transform: 'translate(-50%,-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, width: 88, height: 88, borderRadius: 14, background: 'linear-gradient(160deg,#2a2018,#1d1610)', border: '1.5px solid #caa066', boxShadow: '0 0 0 6px rgba(202,160,102,.08)' }}>
                <span style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 26, color: '#caa066', lineHeight: 1 }}>統</span>
                <span style={{ fontFamily: "'Shippori Mincho',serif", fontSize: 13, fontWeight: 700, color: '#f3e8d3', letterSpacing: '.08em' }}>POT</span>
              </div>
              {/* Corner nodes */}
              {[
                { label: 'Requests',   x: 58,  y: 46  },
                { label: 'Suppliers',  x: 242, y: 46  },
                { label: 'Monitoring', x: 58,  y: 202 },
                { label: 'Reports',    x: 242, y: 202 },
              ].map(({ label, x, y }) => (
                <span key={label} style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%,-50%)', padding: '7px 12px', background: '#1d1610', border: '1px solid rgba(202,160,102,.3)', borderRadius: 8, fontSize: 11.5, color: '#cbb78f', whiteSpace: 'nowrap' }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* KINDA SHOPEE shrine — second */}
        <Reveal
          as={Link}
          to="/work/kinda-shopee"
          aria-label="Open the KINDA SHOPEE case study"
          delay={80}
          className="relative grid grid-cols-1 md:grid-cols-[1.05fr_.95fr] gap-[clamp(20px,4vw,46px)] items-center overflow-hidden transition-all duration-500 hover:-translate-y-[6px]"
          style={{ ...templeStyle, marginTop: 'clamp(24px,3vw,34px)' }}
        >
          <span aria-hidden="true" className="absolute" style={{ top: '8%', left: 0, right: 0, height: 7, background: 'linear-gradient(90deg,#b8915a,#caa066,#b8915a)' }} />
          <span aria-hidden="true" className="absolute" style={{ top: 'calc(8% + 14px)', left: '6%', right: '6%', height: 4, background: 'rgba(202,160,102,.5)' }} />
          <span
            aria-hidden="true"
            className="absolute rounded-full"
            style={{ top: '2.6%', left: '50%', transform: 'translateX(-50%)', width: 12, height: 12, background: '#caa066', boxShadow: '0 0 16px 3px rgba(202,160,102,.6)' }}
          />
          <div className="relative">
            <span className="font-mono text-[11px] uppercase" style={{ letterSpacing: '.2em', color: '#caa066' }}>
              Featured shrine
            </span>
            <h3 className="font-serif font-bold leading-[.98]" style={{ margin: '10px 0 0', fontSize: 'clamp(30px,4.6vw,54px)', letterSpacing: '.04em', color: '#f5ead4' }}>
              KINDA SHOPEE
            </h3>
            <p className="font-serif italic max-w-[30ch]" style={{ margin: '16px 0 0', fontSize: 'clamp(15px,1.9vw,19px)', lineHeight: 1.5, color: '#cdb893' }}>
              A journey toward thoughtful commerce — a calm, trust-led shopping experience for mobile.
            </p>
            <div className="flex flex-wrap gap-2" style={{ marginTop: 22 }}>
              {kindaTags.map((tag) => (
                <span key={tag} className="text-xs rounded-full" style={{ color: '#d8c6a8', border: '1px solid rgba(202,160,102,.34)', padding: '6px 13px' }}>
                  {tag}
                </span>
              ))}
            </div>
            <span
              className="inline-flex items-center gap-[9px] rounded-full font-medium"
              style={{ marginTop: 26, background: '#caa066', color: '#15100c', padding: '13px 24px', fontSize: 13.5, letterSpacing: '.04em' }}
            >
              Enter the shrine <span aria-hidden="true">→</span>
            </span>
          </div>
          <div className="hidden md:flex relative justify-end items-end gap-[14px]" style={{ minHeight: 'clamp(200px,26vw,290px)' }}>
            <div
              className="overflow-hidden bg-black"
              style={{ width: 'clamp(118px,15vw,156px)', borderRadius: 22, border: '5px solid #2a2018', boxShadow: '0 24px 40px -20px rgba(0,0,0,.8)', transform: 'translateY(14px) rotate(-3deg)', aspectRatio: '375/812' }}
            >
              <img src="/assets/karna-home.png" alt="KINDA SHOPEE home screen" className="block w-full h-full object-cover" />
            </div>
            <div
              className="overflow-hidden bg-black"
              style={{ width: 'clamp(118px,15vw,156px)', borderRadius: 22, border: '5px solid #2a2018', boxShadow: '0 24px 40px -20px rgba(0,0,0,.8)', transform: 'translateY(-10px) rotate(3deg)', aspectRatio: '375/812' }}
            >
              <img src="/assets/karna-product.png" alt="KINDA SHOPEE product detail screen" className="block w-full h-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
