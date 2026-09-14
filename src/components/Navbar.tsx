import { useState, useEffect, type MouseEvent } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onWorkTogetherClick: () => void;
}

export default function Navbar({ onWorkTogetherClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Active section detection
      const sections = ['home', 'about', 'services', 'work', 'insights', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E1D7] py-3.5 shadow-[0_2px_12px_rgba(36,28,24,0.03)]'
          : 'bg-[#FAF8F5] border-b border-[#EAE3D9] py-4 md:py-5'
      }`}
    >
      {/* Scroll Progress Bar at the very top */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#C5A880] transition-all duration-150 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Brand / Logo Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="inline-flex items-center gap-2 group cursor-pointer"
          aria-label="Anita Portfolio Home"
        >
          <span className="font-serif text-2xl tracking-[0.24em] font-normal text-[#241C18]">
            A N I T A
          </span>
          {/* Delicate 4-pointed sparkle icon in champagne gold */}
          <span className="text-[#C5A880] text-sm transform transition-transform duration-300 group-hover:rotate-45 select-none">
            ✦
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs font-sans tracking-[0.06em] text-[#55473E]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`hover:text-[#241C18] transition-colors py-1 relative group cursor-pointer ${
                  isActive ? 'text-[#241C18] font-medium' : ''
                }`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#241C18] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Subtle Menu Bar */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onWorkTogetherClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#241C18] text-[#FAF8F5] text-xs font-sans tracking-[0.06em] hover:bg-[#3D332C] transition-all duration-300 shadow-[0_2px_6px_rgba(36,28,24,0.06)] active:scale-[0.98] cursor-pointer group"
          >
            <span>Let’s Work Together</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#EFECE6] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>

          {/* Quick Menu Toggle (matching the reference icon next to CTA button) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-[#241C18] hover:bg-[#F0EBE2] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E8E1D7] bg-[#FAF8F5]/98 backdrop-blur-md px-6 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-sans tracking-[0.06em] text-[#3D332C] hover:text-[#241C18] py-1.5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#C5A880]">✦</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#EAE3D9] flex items-center justify-between text-xs text-[#7A6C60]">
            <span>Delhi NCR, India</span>
            <span>@ugcby_ayeesha</span>
          </div>
        </div>
      )}
    </header>
  );
}
