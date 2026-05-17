/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
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
