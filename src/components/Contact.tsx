import { useState, type FormEvent } from 'react';
import { Mail, Instagram, ArrowRight, Send, Check } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const subject = encodeURIComponent(`UGC Collaboration Inquiry from ${brand.trim() ? brand.trim() : name.trim()}`);
    const body = encodeURIComponent(
      `Hi Anita,\n\nI would love to collaborate on a UGC campaign.\n\nName: ${name}\nBrand / Company: ${brand || 'N/A'}\nEmail: ${email}\n\nProject Details:\n${details || '[Let me know what you would like to create]'}\n\nLooking forward to hearing from you!`
    );

    // Launch default email client
    window.location.href = `mailto:${CREATOR_PROFILE.email}?subject=${subject}&body=${body}`;
    setStatus('submitted');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Card with Warm Ambient Border */}
        <div className="relative rounded-3xl bg-[#F6F1EA] border border-[#E5DDD2] p-8 sm:p-12 lg:p-14 shadow-[0_4px_24px_rgba(36,28,24,0.03)] overflow-hidden">
          
          {/* Dried Botanical Floral Branch on the far left */}
          <svg
            className="absolute -bottom-8 -left-8 w-44 sm:w-56 h-auto text-[#BFA892]/40 pointer-events-none z-0"
            viewBox="0 0 180 260"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 250 Q 80 180 140 30" />
            <path d="M50 200 Q 20 180 20 160 Q 45 170 50 200" />
            <path d="M75 160 Q 115 140 130 120 Q 105 140 75 160" />
            <path d="M98 120 Q 70 100 65 80 Q 90 95 98 120" />
            <path d="M120 70 Q 150 50 160 30 Q 140 55 120 70" />
            <circle cx="140" cy="30" r="3" fill="currentColor" fillOpacity="0.3" />
            <circle cx="20" cy="160" r="2.5" fill="currentColor" fillOpacity="0.3" />
          </svg>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Direct Links & Divider */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Diamond Tag */}
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-medium text-[#7D6E60]">
                <span className="text-[#B89871] text-xs">✦</span>
                <span>LET’S CREATE TOGETHER</span>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#241C18] leading-[1.06] tracking-[-0.015em] font-normal">
                Let’s create <br />
                <span className="italic font-normal font-serif text-[#322722]">
                  something beautiful.
                </span>
              </h2>

              <p className="text-[#5C4F44] text-xs sm:text-sm font-sans font-light leading-relaxed max-w-md">
                Whether it’s a product, a story, or a new idea — I’d love to bring it to life with you.
              </p>

              {/* Two Buttons: Send an Email & DM on Instagram */}
              <div className="flex flex-wrap items-start gap-4 pt-1">
                
                {/* Send Email Button */}
                <div className="flex flex-col items-center">
                  <a
                    href={`mailto:${CREATOR_PROFILE.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#241C18] text-[#FAF8F5] text-xs font-sans tracking-[0.04em] hover:bg-[#3D332C] transition-all duration-300 shadow-[0_2px_8px_rgba(36,28,24,0.08)] active:scale-[0.98] cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send an Email</span>
                  </a>
                  <span className="text-[10px] text-[#7A6C60] font-sans mt-1.5">
                    {CREATOR_PROFILE.email}
                  </span>
                </div>

                {/* DM on Instagram Button */}
                <div className="flex flex-col items-center">
                  <a
                    href={CREATOR_PROFILE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D5CBC0] bg-[#FCFBF9] text-[#241C18] text-xs font-sans tracking-[0.04em] hover:bg-[#FAF6F0] hover:border-[#241C18] transition-all duration-300 shadow-[0_1px_3px_rgba(36,28,24,0.02)] active:scale-[0.98]"
                  >
                    <Instagram className="w-3.5 h-3.5 text-[#5C4D40]" />
                    <span>DM on Instagram</span>
                  </a>
                  <span className="text-[10px] text-[#7A6C60] font-sans mt-1.5">
                    {CREATOR_PROFILE.instagramHandle}
                  </span>
                </div>

              </div>

              {/* Center Divider: OR Share a few details */}
              <div className="pt-3 flex items-center gap-4 text-xs text-[#8C7A6D] font-sans max-w-sm">
                <div className="h-[1px] bg-[#DDD4C8] flex-1" />
                <span className="uppercase text-[10px] tracking-widest font-medium text-[#7D6E60]">OR</span>
                <div className="h-[1px] bg-[#DDD4C8] flex-1" />
              </div>

              <div className="text-xs font-serif italic text-[#6E5B4B] flex items-center gap-1.5">
                <span>Share a few details</span>
                <ArrowRight className="w-3 h-3 text-[#6E5B4B]" />
              </div>

            </div>

            {/* Right Column: Embedded Form Inside Card */}
            <div className="lg:col-span-6 bg-white/70 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-[#E5DDD2] shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4C8] bg-[#FAF8F5] text-xs text-[#241C18] placeholder-[#9E9185] focus:outline-none focus:border-[#241C18] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4C8] bg-[#FAF8F5] text-xs text-[#241C18] placeholder-[#9E9185] focus:outline-none focus:border-[#241C18] transition-colors"
                  />
                </div>

                {/* Row 2: Brand / Company */}
                <div>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="Brand / Company"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4C8] bg-[#FAF8F5] text-xs text-[#241C18] placeholder-[#9E9185] focus:outline-none focus:border-[#241C18] transition-colors"
                  />
                </div>

                {/* Row 3: What would you like to create? */}
                <div>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="What would you like to create?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4C8] bg-[#FAF8F5] text-xs text-[#241C18] placeholder-[#9E9185] focus:outline-none focus:border-[#241C18] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#241C18] text-[#FAF8F5] text-xs font-sans tracking-[0.06em] hover:bg-[#3D332C] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99]"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {status === 'submitted' && (
                  <div className="flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 p-2.5 rounded-xl font-sans">
                    <Check className="w-3.5 h-3.5 shrink-0" />
                    <span>Your email app opened with the message ready to send. Thank you!</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
