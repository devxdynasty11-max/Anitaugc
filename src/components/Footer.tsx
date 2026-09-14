import { Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE3D9] pt-14 pb-10 text-[#241C18]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-[#EAE3D9]">
          
          {/* Column 1: Brand Wordmark & Role (4 cols) */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="font-serif text-2xl tracking-[0.24em] font-normal text-[#241C18] block">
              A N I T A
            </span>
            <p className="text-xs text-[#6E5F52] font-sans">
              UGC Creator · Delhi NCR
            </p>
            <p className="text-[11px] text-[#7A6C60] font-serif tracking-wide">
              Beauty &nbsp;•&nbsp; Skincare &nbsp;•&nbsp; Lifestyle &nbsp;•&nbsp; Fashion
            </p>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-medium text-[#241C18] tracking-wider">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-[#635447] font-sans">
              <a href="#home" className="hover:text-[#241C18] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#241C18] transition-colors">About</a>
              <a href="#services" className="hover:text-[#241C18] transition-colors">Services</a>
              <a href="#work" className="hover:text-[#241C18] transition-colors">Work</a>
              <a href="#contact" className="hover:text-[#241C18] transition-colors">Contact</a>
            </div>
          </div>

          {/* Column 3: Connect (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans font-medium text-[#241C18] tracking-wider">
              Connect
            </h4>
            <div className="space-y-2 text-xs text-[#635447] font-sans">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a
                  href={`mailto:${CREATOR_PROFILE.email}`}
                  className="hover:text-[#241C18] hover:underline break-all"
                >
                  {CREATOR_PROFILE.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a
                  href={CREATOR_PROFILE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#241C18] hover:underline"
                >
                  {CREATOR_PROFILE.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Made by Adityax Credit (2 cols) */}
          <div className="md:col-span-2 flex md:justify-end items-start pt-1 md:pt-0">
            <div className="inline-flex items-center gap-2 text-xs font-sans text-[#706155]">
              <span className="text-[#C5A880] text-sm">✦</span>
              <span>Made by</span>
              <a
                id="footer-credit-adityax"
                href={CREATOR_PROFILE.adityaxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#241C18] underline underline-offset-4 hover:text-[#C5A880] transition-colors inline-flex items-center gap-0.5 cursor-pointer"
              >
                <span>Adityax</span>
                <ArrowUpRight className="w-3 h-3 text-[#241C18]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A6C60] font-sans">
          <p>© 2025 Anita. All rights reserved.</p>
          <p className="font-serif italic text-xs text-[#5C4F44]">
            Content that feels real.
          </p>
        </div>

      </div>
    </footer>
  );
}
