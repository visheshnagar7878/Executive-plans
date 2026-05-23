/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConstructionZone from './components/ConstructionZone';
import GhostMascot from './components/GhostMascot';
import NoiseOverlay from './components/NoiseOverlay';
import { ThemeProvider } from './components/ThemeProvider';

import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import AboutPage from './pages/AboutPage';

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Force browser to not restore scroll position on reload, and start at the top
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  useEffect(() => {
    // Instantly reset scroll to top on page navigation, unless there is a hash in the URL
    if (!hash) {
      window.scrollTo(0, 0);
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(0, { immediate: true });
      }
    }
  }, [pathname, hash]);

  return (
    <ThemeProvider defaultTheme="light">
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <ConstructionZone />
        <GhostMascot />
        <NoiseOverlay />
      </SmoothScroll>
    </ThemeProvider>
  );
}
