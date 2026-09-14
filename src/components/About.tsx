import { MapPin, Heart, Sparkles, Leaf, User } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF8F5] relative border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Diamond Tag */}
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-medium text-[#7D6E60] mb-8">
          <span className="text-[#B89871] text-xs">◆</span>
          <span>ABOUT ANITA</span>
        </div>

        {/* 3-Column Layout Matching Reference Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Tilted Scrapbook Polaroid with Quote & Washi Tape (approx 3 cols) */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="relative w-[210px] sm:w-[230px] bg-white p-3 pb-8 shadow-[0_10px_28px_rgba(36,28,24,0.08)] border border-[#ECE5DC] -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">
              
              {/* Translucent Washi Tape on top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-[#E8DDD1]/85 backdrop-blur-xs border-l border-r border-dashed border-[#C5B7A6] z-10 -rotate-2" />

              {/* Photo */}
              <div className="aspect-[3/4] overflow-hidden bg-[#F5F1EB] relative">
                <img
                  src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=85"
                  alt="A calm mind creates a beautiful life"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#362B24]/10" />
                
                {/* Handwritten note overlay on photo */}
                <div className="absolute bottom-4 left-3 right-3 text-center bg-white/80 backdrop-blur-xs p-2.5 rounded-sm border border-[#EAE3D9]/60">
                  <p className="font-serif italic text-xs text-[#3D322A] leading-snug">
                    “A calm mind creates a beautiful life.”
                  </p>
                </div>
              </div>

              {/* Dried floral illustration accent */}
              <div className="pt-2 text-center">
                <span className="text-[10px] uppercase tracking-[0.16em] font-sans text-[#8C7A6D]">
                  Delhi NCR · Studio
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Center Editorial Narrative & Quote Box (approx 5.5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C18] leading-[1.08] tracking-[-0.015em] font-normal">
              More than content, <br />
              <span className="italic font-normal font-serif text-[#322722]">
                it’s a connection.
              </span>
            </h2>

            <p className="text-[#5C4F44] text-xs sm:text-sm font-sans font-light leading-relaxed">
              {CREATOR_PROFILE.aboutPara1}
            </p>

            <p className="text-[#5C4F44] text-xs sm:text-sm font-sans font-light leading-relaxed">
              {CREATOR_PROFILE.aboutPara2}
            </p>

            {/* Quote Box Card */}
            <div className="bg-[#FAF4EC] p-6 rounded-2xl border border-[#E8DFC8]/60 shadow-[0_2px_10px_rgba(36,28,24,0.02)] relative mt-4">
              <span className="font-serif text-4xl text-[#C5A880]/60 leading-none absolute top-4 left-5 select-none">
                “
              </span>
              <div className="relative pl-6 pt-1">
                <p className="font-serif italic text-sm sm:text-base text-[#3A2D25] leading-relaxed">
                  “Good content doesn’t just show products, it creates feelings.”
                </p>
                <div className="mt-3 text-right">
                  <span className="font-script text-base sm:text-lg text-[#7C6654]">
                    – Anita
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Side Information Panel (approx 3.5 cols) */}
          <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-[#E8E1D7] space-y-5 pt-2">
            
            {/* Item 1: Delhi NCR, India */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-full bg-white border border-[#E5DDD2] flex items-center justify-center text-[#705F52] shrink-0 mt-0.5 group-hover:border-[#C5A880] transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-[15px] font-medium text-[#241C18]">
                  Delhi NCR, India
                </h3>
                <p className="text-[11px] font-sans text-[#7A6C60] font-light">
                  Based in
                </p>
              </div>
            </div>

            {/* Item 2: 24+ Brands */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-full bg-white border border-[#E5DDD2] flex items-center justify-center text-[#705F52] shrink-0 mt-0.5 group-hover:border-[#C5A880] transition-colors">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-[15px] font-medium text-[#241C18]">
                  24+ Brands
                </h3>
                <p className="text-[11px] font-sans text-[#7A6C60] font-light">
                  Worked With
                </p>
              </div>
            </div>

            {/* Item 3: 45+ Collaborations */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-full bg-white border border-[#E5DDD2] flex items-center justify-center text-[#705F52] shrink-0 mt-0.5 group-hover:border-[#C5A880] transition-colors">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-[15px] font-medium text-[#241C18]">
                  45+ Collaborations
                </h3>
                <p className="text-[11px] font-sans text-[#7A6C60] font-light">
                  Across Beauty, Skincare, Lifestyle &amp; More
                </p>
              </div>
            </div>

            {/* Item 4: Faceless & Product-Focused */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-full bg-white border border-[#E5DDD2] flex items-center justify-center text-[#705F52] shrink-0 mt-0.5 group-hover:border-[#C5A880] transition-colors">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-[15px] font-medium text-[#241C18]">
                  Faceless &amp; Product-Focused
                </h3>
                <p className="text-[11px] font-sans text-[#7A6C60] font-light">
                  Letting the product be the hero
                </p>
              </div>
            </div>

            {/* Item 5: Open to Collaborations */}
            <div className="flex items-start gap-3.5 group">
              <div className="w-8 h-8 rounded-full bg-white border border-[#E5DDD2] flex items-center justify-center text-[#705F52] shrink-0 mt-0.5 group-hover:border-[#C5A880] transition-colors">
                <User className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-sm sm:text-[15px] font-medium text-[#241C18]">
                  Open to Collaborations
                </h3>
                <p className="text-[11px] font-sans text-[#7A6C60] font-light">
                  Always excited to work with new brands
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
