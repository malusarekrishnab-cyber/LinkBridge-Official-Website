import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  MonitorDown,
  Smartphone,
  QrCode,
  KeyRound,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    MonitorDown,
    Smartphone,
    QrCode,
    KeyRound,
    SlidersHorizontal,
    Sparkles,
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            {t.howItWorks.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.num}
                className="relative rounded-2xl bg-slate-900/40 p-8 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-card flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black font-mono text-slate-700 group-hover:text-cyan-500/60 transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/50 flex items-center text-xs text-slate-500 font-mono">
                  <span>Step {idx + 1} of 6</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
