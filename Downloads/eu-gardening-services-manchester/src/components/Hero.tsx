import React from 'react';
import { ArrowDown, MessageSquare, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gardeningData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-slate-900 text-white">
      {/* Background Photography with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_manchester_garden_1791992991902.jpg"
          alt="Immaculate residential garden in Manchester with striped lawn and vibrant borders by EU Gardening Services"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-102 filter brightness-90"
        />
        {/* Measured dark gradient scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/92 via-emerald-950/80 to-slate-900/65" />
        <div className="absolute inset-0 bg-radial-at-t from-transparent via-black/20 to-black/60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Location & Authenticity text indicator (clean text, no pill badges) */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-300 mb-4 tracking-wide">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
            <span>Openshaw & Greater Manchester Local Gardening Business</span>
          </div>

          {/* Headline - "Beautiful Gardens, All Year Round" */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight [text-wrap:balance]">
            Beautiful Gardens, <br className="hidden sm:inline" />
            All Year Round
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-emerald-100/90 mb-8 leading-relaxed max-w-2xl font-normal">
            Reliable, high-standard gardening and grounds maintenance in Openshaw, Manchester, and surrounding areas.
            From precision striped lawn mowing and sharp hedge trimming to full garden clearances and pressure washing—we
            treat your garden with pride and care.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
            {/* Primary WhatsApp Contact Button */}
            <a
              href={BUSINESS_INFO.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-950/40 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap"
            >
              <MessageSquare className="w-5 h-5 text-emerald-100" />
              <span>Get Free Quote on WhatsApp</span>
            </a>

            {/* Secondary Services Button */}
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-medium text-sm sm:text-base rounded-xl backdrop-blur-xs border border-white/20 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap"
            >
              <span>Our Services</span>
              <ArrowDown className="w-4 h-4 text-emerald-300" />
            </a>

            {/* Direct Phone Call Link */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="hidden lg:inline-flex items-center gap-2 px-4 py-3.5 text-emerald-200 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Quick Credibility Markers (Unboxed, clean typographic structure) */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm text-emerald-100/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free upfront quotes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Based at 1341 Ashton Old Rd</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Commercial equipment</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All cuttings bagged & tidy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
