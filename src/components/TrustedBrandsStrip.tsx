import { ArrowRight } from 'lucide-react';
import { TRUSTED_BRANDS } from '../data/portfolioData';

interface TrustedBrandsStripProps {
  onExploreClick?: () => void;
}

export default function TrustedBrandsStrip({ onExploreClick }: TrustedBrandsStripProps) {
  return (
    <section className="border-y border-[#EAE3D9] bg-[#FAF8F5] py-4 sm:py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
        
        {/* Left Stacked Tag */}
        <div className="shrink-0 flex items-center gap-3">
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-[#7D6E60] leading-tight select-none">
            <span>TRUSTED</span> <br />
            <span>BY BRANDS</span> <br />
            <span>I LOVE</span>
          </div>
          <div className="w-[1px] h-8 bg-[#DCD4C9] ml-1 hidden sm:block" />
        </div>

        {/* Scrollable / Responsive Horizontal Ribbon */}
        <div className="flex-1 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="flex items-center gap-7 sm:gap-10 lg:gap-11 min-w-max py-1 px-2">
            {TRUSTED_BRANDS.map((brand, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center opacity-85 hover:opacity-100 transition-opacity select-none cursor-pointer group"
                onClick={onExploreClick}
              >
                <span className="font-serif text-sm sm:text-base tracking-[0.08em] text-[#241C18] font-medium group-hover:text-[#8C6D46] transition-colors whitespace-nowrap">
                  {brand.name}
                </span>
                {brand.sub && (
                  <span className="text-[7.5px] uppercase tracking-[0.22em] font-sans font-semibold text-[#8C7A6D] -mt-0.5">
                    {brand.sub}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Nav Arrow Pill */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onExploreClick}
            className="w-8 h-8 rounded-full border border-[#D5CBC0] flex items-center justify-center text-[#55473E] hover:border-[#241C18] hover:text-[#241C18] hover:bg-[#F2ECE3] transition-all cursor-pointer shadow-xs"
            aria-label="View brand collaborations"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
