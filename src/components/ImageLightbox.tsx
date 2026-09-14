import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SelectedWorkItem } from '../types';

interface ImageLightboxProps {
  item: SelectedWorkItem | null;
  onClose: () => void;
}

export default function ImageLightbox({ item, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="portfolio-image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#181310]/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.35)] border border-[#E3DAD0] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Metadata Bar */}
        <div className="px-6 py-4 border-b border-[#E8E1D7] flex items-center justify-between bg-[#FCFBF9]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7D70] font-sans font-medium block">
              {item.category}
            </span>
            <h4 className="font-serif text-lg sm:text-xl text-[#241C18] font-medium leading-snug">
              {item.title}
            </h4>
          </div>

          <button
            id="lightbox-close-button"
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-[#DCD4C8] text-[#241C18] hover:bg-[#241C18] hover:text-[#FAF8F5] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close enlarged image"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Large Image View */}
        <div className="relative bg-[#ECE5DB] max-h-[70vh] overflow-hidden flex items-center justify-center">
          <img
            src={item.imageUrl}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[70vh]"
          />
        </div>

        {/* Bottom Details Footer */}
        <div className="px-6 py-3.5 bg-[#FAF8F5] border-t border-[#E8E1D7] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#6B5F54]">
          <p className="font-serif italic text-sm text-[#3E342D]">
            {item.subtitle}
          </p>
          <span className="text-[11px] font-sans text-[#8C7D70]">
            {item.note}
          </span>
        </div>
      </div>
    </div>
  );
}
