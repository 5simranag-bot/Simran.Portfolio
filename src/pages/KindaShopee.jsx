import { Helmet } from 'react-helmet-async';
import KNav from '../components/kinda/KNav';
import KHero from '../components/kinda/KHero';
import TldrStrip from '../components/kinda/TldrStrip';
import StorySection from '../components/kinda/StorySection';
import DiscoverySection from '../components/kinda/DiscoverySection';
import PathSection from '../components/kinda/PathSection';
import ToolsSection from '../components/kinda/ToolsSection';
import CraftSection from '../components/kinda/CraftSection';
import LessonsSection from '../components/kinda/LessonsSection';
import ImpactSection from '../components/kinda/ImpactSection';
import KFooter from '../components/kinda/KFooter';

const SITE = import.meta.env.VITE_SITE_URL || '';

/** KINDA SHOPEE: an e-commerce case study told as a seven-chapter journey. */
export default function KindaShopee() {
  return (
    <div className="theme-kinda relative w-full" style={{ overflowX: 'clip', background: '#15100c', color: '#ece0c8' }}>
      <Helmet>
        <title>KINDA SHOPEE Case Study — Simran Agarwal</title>
        <meta name="description" content="A UX case study: redesigning KINDA SHOPEE's mobile e-commerce experience for trust and calm. 32% return rate lift, 47% cart completion improvement." />
        {SITE && <link rel="canonical" href={`${SITE}/work/kinda-shopee`} />}
        {SITE && <meta property="og:url" content={`${SITE}/work/kinda-shopee`} />}
        <meta property="og:title" content="KINDA SHOPEE Case Study — Simran Agarwal" />
        <meta property="og:description" content="A UX case study: redesigning KINDA SHOPEE's mobile e-commerce experience for trust and calm." />
        <meta name="twitter:title" content="KINDA SHOPEE Case Study — Simran Agarwal" />
        <meta name="twitter:description" content="A UX case study: redesigning KINDA SHOPEE's mobile e-commerce experience for trust and calm." />
      </Helmet>
      <KNav />
      <KHero />
      <TldrStrip />
      <main>
        <StorySection />
        <DiscoverySection />
        <PathSection />
        <ToolsSection />
        <CraftSection />
        <LessonsSection />
        <ImpactSection />
      </main>
      <KFooter />
    </div>
  );
}
