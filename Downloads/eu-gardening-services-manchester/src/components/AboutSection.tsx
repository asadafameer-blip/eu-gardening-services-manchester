import React from 'react';
import { MapPin, Phone, MessageSquare, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, TRUST_INDICATORS } from '../data/gardeningData';

export const AboutSection: React.FC = () => {
  const iconList = [MapPin, ShieldCheck, Clock, Sparkles];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-y border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual & Local Base Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="/src/assets/images/garden_makeover_patio_1791992995362.jpg"
                alt="Garden makeover completed in Greater Manchester by EU Gardening Services"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/20 to-transparent" />

              {/* Physical Address Verification Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 text-slate-800 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-800 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-emerald-900 uppercase tracking-wider mb-0.5">
                      Operational Base
                    </p>
                    <p className="font-bold text-sm text-slate-900 leading-snug">
                      {BUSINESS_INFO.name}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Trust Indicators */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              About EU Gardening Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6 [text-wrap:balance]">
              Your Dedicated Local Gardeners in Openshaw & Manchester
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base font-normal mb-8">
              <p>
                Based at <strong>1341 Ashton Old Rd in Openshaw</strong>, EU Gardening Services is an independent,
                hands-on gardening and garden maintenance provider serving residential and commercial properties
                across Manchester, Tameside, and Greater Manchester.
              </p>
              <p>
                We believe great gardening comes down to simple, time-honoured British standards: turning up when
                agreed, working diligently, taking genuine pride in clean lawn stripes and razor-sharp hedge edges, and
                leaving every pathway and patio immaculate when the job is done.
              </p>
              <p>
                No hidden costs, no complicated sales jargon—just honest advice, commercial-grade equipment that delivers
                superior results, and friendly, trustworthy service throughout the seasons.
              </p>
            </div>

            {/* Four Trust Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {TRUST_INDICATORS.map((indicator, index) => {
                const IconComponent = iconList[index] || Award;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#f7faf5] border border-emerald-900/10 hover:border-emerald-700/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-800/10 text-emerald-800 flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4 text-emerald-800" />
                      </div>
                      <h3 className="font-bold text-sm text-slate-900">{indicator.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-normal">{indicator.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Direct Contact Callout */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
              <a
                href={BUSINESS_INFO.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Message on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-slate-800 hover:text-emerald-900 font-semibold text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-800" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
