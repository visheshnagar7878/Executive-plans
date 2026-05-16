/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import GhostMascot from './components/GhostMascot';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <SmoothScroll>
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Work />
          <About />
        </main>
        <Footer />
        <GhostMascot />
      </SmoothScroll>
    </ThemeProvider>
  );
}
