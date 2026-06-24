import Reveal from '../shared/Reveal';
import PParticles from './PParticles';

export default function PHero() {
  return (
    <section
      id="p-hero"
      data-screen-label="POT Hero"
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        minHeight: '100vh',
        padding: '120px clamp(20px,5vw,40px) 80px',
        background: 'radial-gradient(ellipse 80% 60% at 50% 36%,#241914 0%,#1a130d 46%,#120d09 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <PParticles />
      </div>

      <div className="relative mb-[42px]" style={{ animation: 'pfloatY 7s ease-in-out infinite' }}>
        <div
          aria-hidden="true"
          className="absolute rounded-full"
          style={{ inset: '-60px', background: 'radial-gradient(circle,rgba(202,160,102,.34),rgba(202,160,102,0) 68%)', animation: 'pglow 6s ease-in-out infinite' }}
        />
        <div
          className="relative flex flex-col items-center justify-center gap-[10px] overflow-hidden"
          style={{
            width: 'clamp(132px,18vw,186px)',
            height: 'clamp(150px,20vw,210px)',
            borderRadius: 12,
            background: 'linear-gradient(160deg,#efe2c6,#dcc8a0)',
            boxShadow: '0 30px 60px -24px rgba(0,0,0,.7), inset 0 2px 0 rgba(255,255,255,.5)',
          }}
        >
          <span aria-hidden="true" className="absolute top-0 left-0 right-0" style={{ height: 14, background: 'linear-gradient(180deg,#caa066,#b8915a)' }} />
          <span aria-hidden="true" className="absolute bottom-0 left-0 right-0" style={{ height: 14, background: 'linear-gradient(0deg,#caa066,#b8915a)' }} />
          <span className="font-serif leading-none" style={{ fontSize: 46, color: '#15100c' }}>統</span>
          <span className="font-mono uppercase" style={{ fontSize: 9.5, letterSpacing: '.28em', color: '#6e5536' }}>unify</span>
        </div>
      </div>

      <Reveal as="span" className="font-mono uppercase mb-[18px]" style={{ fontSize: 12, letterSpacing: '.4em', color: '#caa066' }}>
        Case Study · Enterprise SaaS
      </Reveal>
      <Reveal
        as="h1"
        delay={100}
        className="font-serif font-bold m-0"
        style={{ fontSize: 'clamp(72px,16vw,184px)', lineHeight: 0.9, letterSpacing: '.06em', color: '#f5ead4', textShadow: '0 4px 40px rgba(202,160,102,.3)' }}
      >
        POT
      </Reveal>
      <Reveal as="p" delay={160} className="font-serif m-0" style={{ marginTop: 14, fontSize: 'clamp(18px,2.6vw,28px)', fontWeight: 500, letterSpacing: '.02em', color: '#e3d2af' }}>
        Purchase Optimization Tool
      </Reveal>
      <Reveal
        as="p"
        delay={220}
        className="font-serif italic max-w-[36ch]"
        style={{ margin: '20px 0 0', fontSize: 'clamp(15px,2vw,21px)', lineHeight: 1.55, color: '#cdb893', fontWeight: 400 }}
      >
        Transforming fragmented purchasing workflows into a centralized rate and decision platform.
      </Reveal>
      <Reveal
        delay={320}
        className="flex flex-wrap justify-center font-mono uppercase"
        style={{ gap: '10px 22px', marginTop: 36, fontSize: 11.5, letterSpacing: '.12em', color: '#9a8157' }}
      >
        <span>Senior UX Designer</span>
        <span aria-hidden="true" style={{ color: '#caa066' }}>·</span>
        <span>2 Months</span>
        <span aria-hidden="true" style={{ color: '#caa066' }}>·</span>
        <span>Enterprise Web App</span>
        <span aria-hidden="true" style={{ color: '#caa066' }}>·</span>
        <span>PO · BA · Dev · UX</span>
      </Reveal>

      <div
        aria-hidden="true"
        className="absolute bottom-[26px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: 'pbob 2.6s ease-in-out infinite' }}
      >
        <span className="font-mono uppercase" style={{ fontSize: 10, letterSpacing: '.3em', color: '#7a6444' }}>begin</span>
        <span style={{ width: 1, height: 34, background: 'linear-gradient(#caa066,rgba(202,160,102,0))' }} />
      </div>
    </section>
  );
}
