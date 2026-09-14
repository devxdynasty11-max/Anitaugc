import { ArrowRight } from 'lucide-react';
import { CREATOR_PROFILE, BRAND_COLLABORATIONS } from '../data/portfolioData';

interface HeroProps {
  onViewWorkClick: () => void;
  onWorkWithMeClick: () => void;
}

export default function Hero({ onViewWorkClick, onWorkWithMeClick }: HeroProps) {
  return (
    <section id="home" className="pt-28 sm:pt-32 pb-16 md:pb-24 overflow-hidden relative bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Identity */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 z-10">
            
            {/* Small Diamond Tag */}
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-medium text-[#7D6E60]">
              <span className="text-[#B89871] text-xs">◆</span>
              <span>FACELESS UGC CREATOR</span>
            </div>

            {/* Giant Editorial Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] text-[#241C18] leading-[1.04] tracking-[-0.015em] font-normal">
              Content <br />
              <span className="italic font-normal font-serif text-[#322722]">
                that feels real.
              </span>
            </h1>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-serif tracking-wide text-[#594B41]">
              <span>Beauty</span>
              <span className="text-[#C5A880] text-xs">•</span>
              <span>Skincare</span>
              <span className="text-[#C5A880] text-xs">•</span>
              <span>Lifestyle</span>
              <span className="text-[#C5A880] text-xs">•</span>
              <span>Fashion</span>
            </div>

            {/* Subtitle Description */}
            <p className="text-[#5C4F44] text-sm sm:text-[15px] font-sans font-light leading-relaxed max-w-lg">
              {CREATOR_PROFILE.heroDescription}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onViewWorkClick}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#241C18] text-[#FAF8F5] text-xs sm:text-sm font-sans tracking-[0.04em] hover:bg-[#3D332C] transition-all duration-300 shadow-[0_2px_8px_rgba(36,28,24,0.08)] active:scale-[0.98] cursor-pointer group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              <button
                type="button"
                onClick={onWorkWithMeClick}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full border border-[#D5CBC0] bg-[#FCFBF9] text-[#241C18] text-xs sm:text-sm font-sans tracking-[0.04em] hover:bg-[#FAF6F0] hover:border-[#241C18] transition-all duration-300 shadow-[0_1px_3px_rgba(36,28,24,0.02)] active:scale-[0.98] cursor-pointer"
              >
                <span>Work With Me</span>
              </button>
            </div>

            {/* Trust Indicator / Social Proof */}
            <div className="pt-4 flex items-center gap-3.5">
              {/* Overlapping Avatar Thumbnails */}
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Creator profile"
                  className="w-8 h-8 rounded-full border-2 border-[#FAF8F5] object-cover shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Creator profile"
                  className="w-8 h-8 rounded-full border-2 border-[#FAF8F5] object-cover shadow-sm"
                />
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Creator profile"
                  className="w-8 h-8 rounded-full border-2 border-[#FAF8F5] object-cover shadow-sm"
                />
              </div>

              {/* Text info */}
              <div className="text-xs font-serif tracking-wide text-[#594B41] flex items-center gap-2">
                <span className="font-medium text-[#241C18]">{BRAND_COLLABORATIONS.confirmedBrands} Brands</span>
                <span className="text-[#C5A880]">•</span>
                <span className="font-medium text-[#241C18]">{BRAND_COLLABORATIONS.collaborations} Collaborations</span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Editorial Scrapbook Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] select-none">
            
            {/* Dried Botanical Pressed Floral Stem in Top-Right */}
            <svg
              className="absolute -top-8 right-2 sm:right-6 w-36 sm:w-44 h-auto text-[#BFA892]/60 pointer-events-none z-0"
              viewBox="0 0 160 220"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M40 210 Q 80 140 120 20" />
              <path d="M60 165 Q 40 145 35 125 Q 55 135 60 165" />
              <path d="M78 135 Q 110 120 125 105 Q 105 125 78 135" />
              <path d="M96 95 Q 70 80 65 60 Q 85 75 96 95" />
              <path d="M110 60 Q 140 45 150 25 Q 130 50 110 60" />
              <circle cx="120" cy="20" r="3" fill="currentColor" fillOpacity="0.35" />
              <circle cx="35" cy="125" r="2.5" fill="currentColor" fillOpacity="0.35" />
              <circle cx="150" cy="25" r="2.5" fill="currentColor" fillOpacity="0.35" />
            </svg>

            {/* Handwritten Note Top-Left: "small details big impact ✨" */}
            <div className="absolute top-8 left-2 sm:left-4 z-20 font-script text-lg sm:text-xl text-[#6E5B4B] -rotate-6 transform drop-shadow-sm">
              <span>small</span> <br />
              <span className="italic pl-1">details</span> <br />
              <span className="pl-3">big impact ✨</span>
            </div>

            {/* Top-Center Polaroid: Aesop Glass Bottle */}
            <div
              className="absolute top-4 sm:top-6 left-16 sm:left-24 w-[170px] sm:w-[200px] md:w-[220px] bg-white p-2.5 sm:p-3 pb-8 sm:pb-9 shadow-[0_12px_32px_rgba(36,28,24,0.1)] border border-[#ECE5DC] -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] hover:z-30 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#F5F1EB] relative">
                <img
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85"
                  alt="Aesop luxury product"
                  className="w-full h-full object-cover"
                />
                {/* Aesop typography stamp on image */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/70 backdrop-blur-xs rounded-sm text-center">
                  <span className="font-serif text-xs font-semibold text-[#241C18] tracking-wider">Aesop.</span>
                </div>
              </div>
            </div>

            {/* Top-Right Polaroid: Skincare Tube with Washi Tape */}
            <div
              className="absolute top-10 sm:top-12 right-12 sm:right-16 w-[140px] sm:w-[165px] md:w-[180px] bg-white p-2 sm:p-2.5 pb-6 sm:pb-7 shadow-[0_10px_28px_rgba(36,28,24,0.09)] border border-[#ECE5DC] rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] hover:z-30 cursor-pointer"
            >
              {/* Washi Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-5 bg-[#E8DDD1]/85 backdrop-blur-xs shadow-xs border-l border-r border-dashed border-[#C5B7A6] z-10 -rotate-2" />
              <div className="aspect-[3/4] overflow-hidden bg-[#F5F1EB]">
                <img
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=85"
                  alt="Skincare tube"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Middle Card: "Good Products Better Stories." Paper Print */}
            <div
              className="absolute top-44 sm:top-48 right-24 sm:right-32 w-[120px] sm:w-[145px] bg-[#FAF6F0] p-3 shadow-[0_8px_20px_rgba(36,28,24,0.08)] border border-[#E4DCD2] rotate-2 transition-transform duration-300 hover:rotate-0 hover:z-30 cursor-pointer z-10"
            >
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-4 bg-[#DCD1C4]/80 border-l border-r border-dashed border-[#B8A896]" />
              <p className="font-serif text-[11px] sm:text-xs text-[#3D322A] leading-tight text-center pt-1 font-medium">
                Good <br />Products <br />Better <br />Stories.”
              </p>
            </div>

            {/* Bottom Polaroid: Scented Candle / Jar ("SANTAL 26") */}
            <div
              className="absolute bottom-6 sm:bottom-8 right-8 sm:right-14 w-[170px] sm:w-[200px] md:w-[220px] bg-white p-2.5 sm:p-3 pb-6 sm:pb-7 shadow-[0_14px_36px_rgba(36,28,24,0.12)] border border-[#ECE5DC] -rotate-1 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] hover:z-30 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[#F5F1EB] relative">
                <img
                  src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=85"
                  alt="Luxury scented candle"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[9px] px-2 py-0.5 rounded font-mono tracking-wider">
                  SANTAL 26
                </div>
              </div>
            </div>

            {/* Circular Stamp Badge: UGC CREATOR · DELHI NCR */}
            <div className="absolute top-8 sm:top-10 right-2 sm:right-6 z-20 w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-[#EFE8DD] border-2 border-[#D8CCBE] shadow-[0_4px_16px_rgba(36,28,24,0.08)] flex flex-col items-center justify-center text-center p-2 transform rotate-6 hover:rotate-12 transition-transform duration-300">
              <div className="w-full h-full rounded-full border border-dashed border-[#BFAFA0] flex flex-col items-center justify-center p-1">
                <span className="font-serif text-xs tracking-wider font-semibold text-[#3D322A]">
                  UGC
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-sans font-medium text-[#7D6B5C]">
                  CREATOR
                </span>
                <span className="text-[8px] uppercase tracking-[0.14em] font-sans text-[#8C7B6D] mt-0.5">
                  DELHI NCR
                </span>
              </div>
            </div>

            {/* Handwritten Note Bottom-Right: "same products, new perspective ♡" */}
            <div className="absolute bottom-2 right-0 sm:right-2 z-20 font-script text-base sm:text-lg text-[#6E5B4B] rotate-3 transform drop-shadow-xs">
              <span>same products,</span> <br />
              <span className="pl-4 italic">new perspective ♡</span>
            </div>

            {/* Subtle Decorative Star Sparkles */}
            <span className="absolute top-28 right-0 text-[#C5A880] text-sm pointer-events-none">
              ✧
            </span>
            <span className="absolute bottom-24 left-4 text-[#C5A880] text-base pointer-events-none">
              ✦
            </span>

          </div>

        </div>
      </div>
    </section>
  );
}
