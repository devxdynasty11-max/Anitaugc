import {
  Video,
  Package,
  MessageSquare,
  Mic,
  Sparkles,
  Camera,
  Coffee,
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onServiceSelect?: (serviceTitle: string) => void;
  onExploreClick?: () => void;
}

export default function Services({ onServiceSelect, onExploreClick }: ServicesProps) {
  const getIcon = (iconName?: string) => {
    switch (iconName) {
      case 'video':
        return <Video className="w-4 h-4 text-[#4A3E34]" />;
      case 'box':
        return <Package className="w-4 h-4 text-[#4A3E34]" />;
      case 'message':
        return <MessageSquare className="w-4 h-4 text-[#4A3E34]" />;
      case 'mic':
        return <Mic className="w-4 h-4 text-[#4A3E34]" />;
      case 'sparkle':
        return <Sparkles className="w-4 h-4 text-[#4A3E34]" />;
      case 'image':
        return <Camera className="w-4 h-4 text-[#4A3E34]" />;
      case 'coffee':
        return <Coffee className="w-4 h-4 text-[#4A3E34]" />;
      case 'smartphone':
        return <Smartphone className="w-4 h-4 text-[#4A3E34]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#4A3E34]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Diamond Tag */}
        <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-medium text-[#7D6E60] mb-8">
          <span className="text-[#B89871] text-xs">◆</span>
          <span>WHAT I CREATE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Heading, Subtitle & Explore Button */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-serif text-4xl sm:text-5xl text-[#241C18] font-normal tracking-[-0.015em]">
              Services
            </h2>
            <p className="text-[#5C4F44] text-xs sm:text-sm font-sans font-light leading-relaxed">
              Every collaboration is tailored to the product, creative direction, and campaign requirements.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D5CBC0] bg-[#FCFBF9] text-[#241C18] text-xs font-sans tracking-[0.04em] hover:bg-[#FAF6F0] hover:border-[#241C18] transition-all duration-300 shadow-[0_1px_3px_rgba(36,28,24,0.02)] active:scale-[0.98] cursor-pointer group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right Area: 8 Service Cards (4 cols on tablet / 8 cols on wide) */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {SERVICES.map((svc) => (
                <div
                  key={svc.id}
                  onClick={() => onServiceSelect && onServiceSelect(svc.title)}
                  className="bg-white p-3.5 sm:p-4 rounded-xl border border-[#ECE5DC] shadow-[0_2px_8px_rgba(36,28,24,0.02)] flex flex-col items-center text-center justify-between min-h-[160px] sm:min-h-[170px] hover:border-[#C5A880] hover:shadow-md transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#EDE5DA] flex items-center justify-center group-hover:bg-[#F4EEE6] transition-colors mb-2">
                    {getIcon(svc.iconName)}
                  </div>

                  <div className="space-y-1 my-auto">
                    <h3 className="font-serif text-xs sm:text-[13px] font-medium text-[#241C18] leading-tight">
                      {svc.title}
                    </h3>
                    <p className="text-[10px] text-[#7A6C60] font-sans font-light leading-snug">
                      {svc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
