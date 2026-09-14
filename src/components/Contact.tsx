import { useState, type FormEvent } from 'react';
import { Mail, Instagram, ArrowRight, Check, Copy, ExternalLink, RotateCcw } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [details, setDetails] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');
  const [copied, setCopied] = useState(false);

  // Generate subject and body from user input
  const subjectText = `UGC Collaboration Inquiry from ${brand.trim() ? brand.trim() : name.trim()}`;
  const bodyText = `Hi Anita,\n\nI would love to collaborate on a UGC campaign with you.\n\n• Name: ${name}\n• Brand / Company: ${brand.trim() || 'Not specified'}\n• Contact Email: ${email}\n\nProject Details:\n${details.trim() || 'I would like to discuss potential UGC video and photography collaborations.'}\n\nLooking forward to hearing from you!\n${name}`;

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CREATOR_PROFILE.email)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
  const mailtoUrl = `mailto:${CREATOR_PROFILE.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // In modern browsers & iframes, try opening Gmail or the default mail client in a new window
    try {
      // Create a temporary link with target="_blank" to safely escape iframe navigation restrictions
      const link = document.createElement('a');
      link.href = gmailComposeUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      // Fallback
      window.open(gmailComposeUrl, '_blank');
    }

    setStatus('submitted');
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(
        `To: ${CREATOR_PROFILE.email}\nSubject: ${subjectText}\n\n${bodyText}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement('textarea');
      textarea.value = `To: ${CREATOR_PROFILE.email}\nSubject: ${subjectText}\n\n${bodyText}`;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleReset = () => {
    setStatus('idle');
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
                
                {/* Left Column Buttons */}
                {/* Send Email Button */}
                <div className="flex flex-col items-center">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CREATOR_PROFILE.email)}&su=${encodeURIComponent('UGC Collaboration Inquiry')}`}
                    target="_blank"
                    rel="noopener noreferrer"
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

            {/* Right Column: Embedded Form or Submission Action Card */}
            <div className="lg:col-span-6 bg-white/70 backdrop-blur-xs p-6 sm:p-7 rounded-2xl border border-[#E5DDD2] shadow-xs">
              {status === 'idle' ? (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="flex items-center justify-between pb-1">
                    <span className="text-xs font-serif italic text-[#6E5B4B]">
                      Send a message directly to Anita
                    </span>
                    <span className="text-[10px] uppercase font-sans tracking-wider text-[#8C7A6D]">
                      {CREATOR_PROFILE.email}
                    </span>
                  </div>

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name *"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4C8] bg-[#FAF8F5] text-xs text-[#241C18] placeholder-[#9E9185] focus:outline-none focus:border-[#241C18] transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email *"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4C8] bg-[#FAF8F5] text-xs text-[#241C18] placeholder-[#9E9185] focus:outline-none focus:border-[#241C18] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Brand / Company */}
                  <div>
                    <input
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Brand or Company Name"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4C8] bg-[#FAF8F5] text-xs text-[#241C18] placeholder-[#9E9185] focus:outline-none focus:border-[#241C18] transition-colors"
                    />
                  </div>

                  {/* Row 3: What would you like to create? */}
                  <div>
                    <textarea
                      rows={3}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="What would you like to create? (campaign details, deliverables, timeline...)"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#DDD4C8] bg-[#FAF8F5] text-xs text-[#241C18] placeholder-[#9E9185] focus:outline-none focus:border-[#241C18] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#241C18] text-[#FAF8F5] text-xs font-sans tracking-[0.06em] hover:bg-[#3D332C] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99] group"
                  >
                    <span>Send Message to Anita</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-[10px] text-center text-[#8C7A6D] font-sans pt-0.5">
                    Prepares your message and connects to your email app or Gmail
                  </p>
                </form>
              ) : (
                /* Post-Submission Interactive Delivery Hub */
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-[#241C18] font-medium leading-snug">
                        Your message is ready to send!
                      </h3>
                      <p className="text-xs text-[#6B5C50] font-sans mt-0.5">
                        Choose your preferred email client below to send your collaboration inquiry:
                      </p>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {/* Send via Gmail Web */}
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#241C18] text-[#FAF8F5] text-xs font-sans hover:bg-[#3D332C] transition-all shadow-xs cursor-pointer text-center"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#E6CDB5]" />
                      <span>Send with Gmail</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>

                    {/* Send via Default Mail App */}
                    <a
                      href={mailtoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#D5CBC0] bg-[#FCFBF9] text-[#241C18] text-xs font-sans hover:bg-[#FAF6F0] hover:border-[#241C18] transition-all shadow-xs cursor-pointer text-center"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#7A6C60]" />
                      <span>Default Mail App</span>
                    </a>
                  </div>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#D5CBC0] bg-white text-[#241C18] text-xs font-sans hover:bg-[#FAF8F5] hover:border-[#241C18] transition-all shadow-xs cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Message Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#7A6C60]" />
                        <span>Copy Message &amp; Recipient</span>
                      </>
                    )}
                  </button>

                  {/* Message Preview Box */}
                  <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E5DDD2] space-y-1.5 text-[11px] font-sans">
                    <div className="flex items-center justify-between text-[#7A6C60]">
                      <span className="font-medium text-[#241C18]">To:</span>
                      <span className="font-mono text-[#5C4F44]">{CREATOR_PROFILE.email}</span>
                    </div>
                    <div className="flex items-center justify-between text-[#7A6C60] pt-1 border-t border-[#EDE5DA]">
                      <span className="font-medium text-[#241C18]">Subject:</span>
                      <span className="truncate max-w-[210px] text-[#5C4F44]">{subjectText}</span>
                    </div>
                  </div>

                  {/* Back to Edit Button */}
                  <div className="pt-1 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 text-xs text-[#7A6C60] hover:text-[#241C18] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Edit details or send another</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
