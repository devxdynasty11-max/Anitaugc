import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, Users, MapPin, Heart } from 'lucide-react';
import { AUDIENCE_INSIGHTS } from '../data/portfolioData';

export default function AudienceInsights() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [reachVal, setReachVal] = useState(0);
  const [avgVal, setAvgVal] = useState(0);

  useEffect(() => {
    // Smooth counter animation on mount
    if (!hasAnimated) {
      const duration = 1200;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);

        setReachVal(Math.floor(easeOutQuad * 40));
        setAvgVal(Math.floor(easeOutQuad * 5));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [hasAnimated]);

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'bar-chart':
        return <BarChart3 className="w-5 h-5 text-[#8C6D46]" />;
      case 'trending-up':
        return <TrendingUp className="w-5 h-5 text-[#8C6D46]" />;
      case 'users':
        return <Users className="w-5 h-5 text-[#8C6D46]" />;
      case 'map-pin':
        return <MapPin className="w-5 h-5 text-[#8C6D46]" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-[#8C6D46]" />;
      default:
        return <BarChart3 className="w-5 h-5 text-[#8C6D46]" />;
    }
  };

  return (
    <section id="insights" className="py-14 sm:py-16 bg-[#FAF8F5] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Diamond Tag */}
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-medium text-[#7D6E60] mb-6">
          <span className="text-[#B89871] text-xs">◆</span>
          <span>AUDIENCE &amp; INSIGHTS</span>
        </div>

        {/* 5 Stats Row with Right Handwritten Note */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* 5 Metrics List (approx 9 cols) */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-5 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E5DDD2]">
              
              {/* Stat 1: Reach */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pr-4">
                <div className="shrink-0">{renderIcon(AUDIENCE_INSIGHTS[0].icon)}</div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#241C18] font-normal tracking-tight">
                    {reachVal}K
                  </div>
                  <div className="text-[11px] text-[#6A5C50] font-sans font-light">
                    {AUDIENCE_INSIGHTS[0].label}
                  </div>
                </div>
              </div>

              {/* Stat 2: Average Reach */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
                <div className="shrink-0">{renderIcon(AUDIENCE_INSIGHTS[1].icon)}</div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl text-[#241C18] font-normal tracking-tight">
                    {avgVal}K
                  </div>
                  <div className="text-[11px] text-[#6A5C50] font-sans font-light">
                    {AUDIENCE_INSIGHTS[1].label}
                  </div>
                </div>
              </div>

              {/* Stat 3: Age Group */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
                <div className="shrink-0">{renderIcon(AUDIENCE_INSIGHTS[2].icon)}</div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-[#241C18] font-normal tracking-tight">
                    {AUDIENCE_INSIGHTS[2].number}
                  </div>
                  <div className="text-[11px] text-[#6A5C50] font-sans font-light">
                    {AUDIENCE_INSIGHTS[2].label}
                  </div>
                </div>
              </div>

              {/* Stat 4: Top Locations */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
                <div className="shrink-0">{renderIcon(AUDIENCE_INSIGHTS[3].icon)}</div>
                <div>
                  <div className="font-serif text-lg sm:text-xl text-[#241C18] font-normal leading-snug">
                    {AUDIENCE_INSIGHTS[3].number}
                  </div>
                  <div className="text-[11px] text-[#6A5C50] font-sans font-light">
                    {AUDIENCE_INSIGHTS[3].label}
                  </div>
                </div>
              </div>

              {/* Stat 5: Primary Audience */}
              <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:pl-4">
                <div className="shrink-0">{renderIcon(AUDIENCE_INSIGHTS[4].icon)}</div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl text-[#241C18] font-normal tracking-tight">
                    {AUDIENCE_INSIGHTS[4].number}
                  </div>
                  <div className="text-[11px] text-[#6A5C50] font-sans font-light">
                    {AUDIENCE_INSIGHTS[4].label}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Handwritten Note (approx 3 cols) */}
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <div className="font-script text-lg sm:text-xl text-[#6E5B4B] rotate-2 select-none">
              <span>A global audience</span> <br />
              <span className="pl-4 italic">with a love for</span> <br />
              <span className="pl-8">beautiful things ♡</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
