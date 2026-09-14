import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBrandsStrip from './components/TrustedBrandsStrip';
import About from './components/About';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import AudienceInsights from './components/AudienceInsights';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#241C18] flex flex-col selection:bg-[#EEDCD5]">
      {/* 1. Sticky Header / Navbar */}
      <Navbar onWorkTogetherClick={() => scrollToSection('contact')} />

      <main className="flex-grow">
        {/* 2. Hero Section (with Layered Scrapbook Collage) */}
        <Hero
          onViewWorkClick={() => scrollToSection('work')}
          onWorkWithMeClick={() => scrollToSection('contact')}
        />

        {/* 3. Trusted Brands Strip */}
        <TrustedBrandsStrip onExploreClick={() => scrollToSection('work')} />

        {/* 4. About Anita Section (3 Columns: Photo, Narrative + Quote Box, Side-Info Panel) */}
        <About />

        {/* 5. Services Section (What I Create: 8 Cards + Explore Services CTA) */}
        <Services
          onServiceSelect={() => scrollToSection('contact')}
          onExploreClick={() => scrollToSection('contact')}
        />

        {/* 6. Selected Work Section (2 Curated Photos + Circular Stamp & Script Note) */}
        <SelectedWork />

        {/* 7. Audience & Insights Section (5 Metrics + Handwritten Script) */}
        <AudienceInsights />

        {/* 9. Contact Section (Warm Banner with Embedded Form & Direct Links) */}
        <Contact />
      </main>

      {/* 10. Refined 4-Column Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs border border-[#D5CBC0] shadow-[0_4px_16px_rgba(36,28,24,0.1)] flex items-center justify-center text-[#241C18] hover:bg-[#241C18] hover:text-[#FAF8F5] transition-all duration-300 active:scale-95 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
