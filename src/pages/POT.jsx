import { Helmet } from 'react-helmet-async';
import PNav from '../components/pot/PNav';
import PHero from '../components/pot/PHero';
import PTldrStrip from '../components/pot/PTldrStrip';
import ProblemSection from '../components/pot/ProblemSection';
import ResearchSection from '../components/pot/ResearchSection';
import FindingsSection from '../components/pot/FindingsSection';
import FrameworkSection from '../components/pot/FrameworkSection';
import RoutesSection from '../components/pot/RoutesSection';
import InterfaceSection from '../components/pot/InterfaceSection';
import StrategySection from '../components/pot/StrategySection';
import SummitSection from '../components/pot/SummitSection';
import PFooter from '../components/pot/PFooter';

const SITE = import.meta.env.VITE_SITE_URL || '';

export default function POT() {
  return (
    <div className="theme-kinda relative w-full" style={{ overflowX: 'clip', background: '#15100c', color: '#ece0c8' }}>
      <Helmet>
        <title>POT Case Study — Simran Agarwal</title>
        <meta name="description" content="A UX case study: designing POT (Purchase Optimization Tool), an enterprise SaaS platform that transformed fragmented purchasing workflows into a centralized rate and decision system." />
        {SITE && <link rel="canonical" href={`${SITE}/work/pot`} />}
        {SITE && <meta property="og:url" content={`${SITE}/work/pot`} />}
        <meta property="og:title" content="POT Case Study — Simran Agarwal" />
        <meta property="og:description" content="A UX case study: designing POT, an enterprise rate management platform for commodity purchasing." />
        <meta name="twitter:title" content="POT Case Study — Simran Agarwal" />
        <meta name="twitter:description" content="A UX case study: designing POT, an enterprise rate management platform for commodity purchasing." />
      </Helmet>
      <PNav />
      <PHero />
      <PTldrStrip />
      <main>
        <ProblemSection />
        <ResearchSection />
        <FindingsSection />
        <FrameworkSection />
        <RoutesSection />
        <InterfaceSection />
        <StrategySection />
        <SummitSection />
      </main>
      <PFooter />
    </div>
  );
}
