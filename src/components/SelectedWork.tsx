import { useState } from 'react';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { SELECTED_WORK } from '../data/portfolioData';
import { SelectedWorkItem } from '../types';
import ImageLightbox from './ImageLightbox';

export default function SelectedWork() {
  const [activeLightboxItem, setActiveLightboxItem] = useState<SelectedWorkItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SELECTED_WORK.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SELECTED_WORK.length) % SELECTED_WORK.length);
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE3D9] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Diamond Tag */}
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-medium text-[#7D6E60] mb-8">
          <span className="text-[#B89871] text-xs">◆</span>
          <span>SELECTED WORK</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & Circular Arrows */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#241C18] leading-[1.08] tracking-[-0.015em] font-normal">
              A glimpse <br />
              <span className="italic font-normal font-serif text-[#322722]">
                of my world.
              </span>
            </h2>

            <p className="text-xs sm:text-sm font-sans font-light text-[#66574C]">
              Clean. Aesthetic. Impactful.
            </p>

            {/* Circular Arrows */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-[#D5CBC0] flex items-center justify-center text-[#55473E] hover:border-[#241C18] hover:text-[#241C18] hover:bg-[#F2ECE3] transition-all cursor-pointer"
                aria-label="Previous work"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-[#D5CBC0] flex items-center justify-center text-[#55473E] hover:border-[#241C18] hover:text-[#241C18] hover:bg-[#F2ECE3] transition-all cursor-pointer"
                aria-label="Next work"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Middle: Two Curated Photographic Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Card 1: Beauty & Fragrance */}
              <div
                onClick={() => setActiveLightboxItem(SELECTED_WORK[0])}
                className="group relative rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(36,28,24,0.06)] bg-[#F5F1EB] cursor-pointer aspect-[4/3] border border-[#ECE5DC]"
              >
                <img
                  src={SELECTED_WORK[0].imageUrl}
                  alt={SELECTED_WORK[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Bottom Left Label & Bottom Right Zoom Icon */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white z-10">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium">
                    {SELECTED_WORK[0].category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#241C18] transition-all">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Card 2: Skincare & Lifestyle */}
              <div
                onClick={() => setActiveLightboxItem(SELECTED_WORK[1])}
                className="group relative rounded-2xl overflow-hidden shadow-[0_4px_16px_rgba(36,28,24,0.06)] bg-[#F5F1EB] cursor-pointer aspect-[4/3] border border-[#ECE5DC]"
              >
                <img
                  src={SELECTED_WORK[1].imageUrl}
                  alt={SELECTED_WORK[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Bottom Left Label & Bottom Right Zoom Icon */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white z-10">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium">
                    {SELECTED_WORK[1].category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#241C18] transition-all">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Graphic Stamp Badge & Handwritten Script */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center select-none py-4">
            <div className="relative flex flex-col items-center">
              {/* Circular line badge with star */}
              <div className="relative">
                <div className="w-28 sm:w-32 h-28 sm:h-32 rounded-full border border-[#D5CBC0] flex flex-col items-center justify-center p-3 text-center bg-[#FAF8F5]">
                  <span className="text-[9px] uppercase tracking-[0.22em] font-sans text-[#78695C] block leading-tight font-medium">
                    SAME <br />
                    PRODUCTS <br />
                    DIFFERENT <br />
                    STORIES
                  </span>
                </div>
                <span className="absolute -top-1 -right-1 text-[#C5A880] text-sm select-none">
                  ✦
                </span>
              </div>

              {/* Vertical line extending downward */}
              <div className="w-[1px] h-10 bg-[#D5CBC0] mt-2" />

              {/* Handwritten note: "That's the magic. ♡" */}
              <div className="font-script text-base sm:text-lg text-[#6E5B4B] rotate-3 pt-2">
                <span>That’s the magic. ♡</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <ImageLightbox
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
        />
      )}
    </section>
  );
}
