import Reveal from '../shared/Reveal';
import { routes } from '../../data/pot';

export default function RoutesSection() {
  return (
    <section
      id="p-routes"
      data-screen-label="POT Routes"
      className="relative overflow-hidden"
      style={{ padding: 'clamp(90px,12vw,150px) clamp(20px,5vw,42px)', background: 'radial-gradient(ellipse 80% 40% at 50% 0%,#1f1611,#15100c 60%)' }}
    >
      <div className="max-w-[1140px] mx-auto">
        <Reveal className="flex items-center gap-[14px] mb-[22px]">
          <span className="font-serif" style={{ fontSize: 13, letterSpacing: '.3em', color: '#caa066' }}>伍 Chapter Five</span>
          <span className="flex-1 max-w-[160px]" style={{ height: 1, background: 'rgba(202,160,102,.24)' }} />
        </Reveal>
        <Reveal as="h2" delay={80} className="m-0 font-serif font-semibold" style={{ marginBottom: 16, fontSize: 'clamp(32px,5.4vw,62px)', lineHeight: 1.04, color: '#f3e8d3' }}>
          Charting the Routes
        </Reveal>
        <Reveal as="p" delay={140} style={{ margin: '0 0 clamp(40px,6vw,56px)', fontSize: 16, lineHeight: 1.85, color: '#b6a47f', fontWeight: 300, maxWidth: '54ch' }}>
          One core rate decision tree, and a distinct route for each of the three people who walk it.
        </Reveal>

        {/* Decision tree */}
        <Reveal as="h3" className="font-serif font-semibold" style={{ margin: '0 0 22px', fontSize: 'clamp(20px,2.4vw,26px)', color: '#ecdcbb' }}>
          The rate decision tree
        </Reveal>
        <Reveal style={{ position: 'relative', padding: 'clamp(20px,3vw,32px)', background: 'rgba(236,224,200,.03)', border: '1px solid rgba(202,160,102,.16)', borderRadius: 18, overflowX: 'auto', marginBottom: 'clamp(54px,7vw,80px)' }}>
          <div style={{ position: 'relative', width: 760, height: 620, margin: '0 auto', minWidth: 760 }}>
            <svg viewBox="0 0 760 620" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }} aria-hidden="true">
              <defs>
                <marker id="potTree" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0,0 L9,4.5 L0,9 Z" fill="rgba(202,160,102,.7)" />
                </marker>
              </defs>
              <g fill="none" stroke="rgba(202,160,102,.55)" strokeWidth="2" markerEnd="url(#potTree)">
                <path d="M380,66 L380,104" />
                <path d="M380,156 L380,194" />
                <path d="M380,246 L380,278" />
                <path d="M315,330 L210,330 L210,402" stroke="#7fc7a0" />
                <path d="M445,330 L560,330 L560,402" stroke="#d98a6a" />
                <path d="M210,452 L210,500 L312,500" stroke="#7fc7a0" />
                <path d="M560,452 L560,500 L448,500" stroke="#d98a6a" />
                <path d="M380,544 L380,560" stroke="rgba(202,160,102,.55)" />
              </g>
            </svg>

            {/* Decision tree nodes */}
            <TreeNode left={380} top={40} gold>Shipment loaded</TreeNode>
            <TreeNode left={380} top={130}>Filter POL → POD</TreeNode>
            <TreeNode left={380} top={220}>Look up rate</TreeNode>

            {/* Diamond */}
            <div style={{ position: 'absolute', left: 380, top: 322, transform: 'translate(-50%,-50%)', width: 188, height: 104, display: 'grid', placeItems: 'center', textAlign: 'center', background: 'linear-gradient(160deg,#3a2a1a,#241813)', clipPath: 'polygon(50% 0,100% 50%,50% 100%,0 50%)' }}>
              <span style={{ fontSize: 13, color: '#f3e8d3', fontWeight: 500, maxWidth: 120 }}>Rate found in POT?</span>
            </div>
            <span aria-hidden="true" style={{ position: 'absolute', left: 248, top: 312, fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: '.1em', color: '#7fc7a0' }}>YES</span>
            <span aria-hidden="true" style={{ position: 'absolute', left: 474, top: 312, fontFamily: "'DM Mono',monospace", fontSize: 11, letterSpacing: '.1em', color: '#d98a6a' }}>NO</span>

            <TreeNode left={210} top={427} green>Match &amp; generate PO</TreeNode>
            <TreeNode left={560} top={427} dashed>Flag missing → upload rate</TreeNode>
            <TreeNode left={380} top={500}>Publish &amp; set status</TreeNode>
            <TreeNode left={380} top={578} gold>Monitoring report</TreeNode>
          </div>
        </Reveal>

        {/* Route by role */}
        <Reveal as="h3" className="font-serif font-semibold" style={{ margin: '0 0 22px', fontSize: 'clamp(20px,2.4vw,26px)', color: '#ecdcbb' }}>
          Route by role
        </Reveal>
        <div className="grid gap-[clamp(16px,2.4vw,24px)]" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {routes.map((r) => (
            <Reveal key={r.role} delay={r.delay} className="flex flex-col" style={{ padding: 'clamp(22px,3vw,30px)', background: 'rgba(236,224,200,.04)', border: '1px solid rgba(202,160,102,.2)', borderRadius: 16 }}>
              <span aria-hidden="true" className="font-serif" style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 10, background: 'rgba(202,160,102,.14)', fontSize: 22, color: '#caa066', marginBottom: 14 }}>{r.icon}</span>
              <h4 className="font-serif font-semibold" style={{ margin: '0 0 4px', fontSize: 18, color: '#f3e8d3' }}>{r.role}</h4>
              <span className="font-mono uppercase" style={{ fontSize: 10.5, letterSpacing: '.08em', color: '#8a7350', marginBottom: 18 }}>{r.sub}</span>
              <div className="flex flex-col gap-0">
                {r.steps.map((st) => (
                  <div key={st.label}>
                    <div className="flex items-center gap-[12px]" style={{ padding: '11px 14px', background: '#1d1610', border: '1px solid rgba(202,160,102,.22)', borderRadius: 9 }}>
                      <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: '50%', background: '#caa066', flexShrink: 0 }} />
                      <span style={{ fontSize: 13.5, color: '#ecdcbb' }}>{st.label}</span>
                    </div>
                    {st.notLast && (
                      <div aria-hidden="true" className="flex justify-center" style={{ padding: '4px 0', color: '#caa066', fontSize: 13 }}>↓</div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TreeNode({ left, top, children, gold, green, dashed }) {
  const base = { position: 'absolute', left, top, transform: 'translate(-50%,-50%)', minWidth: 150, textAlign: 'center', padding: '12px 18px', borderRadius: 10, fontSize: 13.5, color: '#ecdcbb', transition: 'border-color .3s,background .3s' };
  if (gold) return <div style={{ ...base, padding: '13px 18px', background: 'linear-gradient(160deg,#2a2018,#1d1610)', border: '1.5px solid #caa066', borderRadius: 11, fontFamily: "'Shippori Mincho',serif", fontWeight: 600, color: '#f3e8d3', boxShadow: '0 0 0 5px rgba(202,160,102,.08)' }}>{children}</div>;
  if (green) return <div style={{ ...base, background: '#1d1610', border: '1.5px solid rgba(127,199,160,.5)', color: '#d6ecdf' }}>{children}</div>;
  if (dashed) return <div style={{ ...base, background: '#1d1610', border: '1.5px dashed rgba(217,138,106,.5)', fontSize: 12.5, color: '#e3c3b3' }}>{children}</div>;
  return <div style={{ ...base, background: '#1d1610', border: '1.5px solid rgba(202,160,102,.5)' }}>{children}</div>;
}
