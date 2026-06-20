import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import KindaShopee from './pages/KindaShopee';
import Resume from './pages/Resume';
import ScrollToHash from './components/ScrollToHash';
import { Analytics } from "@vercel/analytics/next"
export default function App() {
  return (
    <HelmetProvider>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/kinda-shopee" element={<KindaShopee />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Analytics />
    </HelmetProvider>
  );
}
