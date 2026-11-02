import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CONFIG } from '../config';
import {
  Download,
  Copy,
  Check,
  ShieldCheck,
  Wifi,
  Lock,
  Smartphone,
  Monitor,
  RefreshCw,
  Bell,
  MessageSquare,
  FileText
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyRepo = () => {
    navigator.clipboard.writeText(CONFIG.repository.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient futuristic lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-[100px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-medium mb-8 backdrop-blur-sm shadow-sm animate-pulse-subtle">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            {t.hero.titlePrimary} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle Pitch */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            {t.hero.description}
          </p>

          {/* Download CTAs & GitHub Repository Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            {/* Windows Download */}
            <a
              href={CONFIG.downloads.windows.downloadUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-base shadow-glow-cyan hover:shadow-cyan-500/50 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Download className="w-5 h-5 text-slate-950" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider opacity-85 font-semibold">Windows (x64)</div>
                <div className="text-sm font-extrabold">{t.hero.downloadWindows}</div>
              </div>
            </a>

            {/* Android APK Download */}
            <a
              href={CONFIG.downloads.android.downloadUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-cyan-500/50 font-bold text-base shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Smartphone className="w-5 h-5 text-cyan-400" />
              <div className="text-left">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Android 8.0+</div>
                <div className="text-sm font-extrabold">{t.hero.downloadAndroid}</div>
              </div>
            </a>

            {/* Copy Repo Link */}
            <button
              onClick={handleCopyRepo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 border border-slate-800 hover:border-slate-700 font-medium text-sm transition-colors"
              title={CONFIG.repository.url}
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t.hero.copied : t.hero.copyRepoUrl}</span>
            </button>
          </div>

          {/* Quick Technical Architecture Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/50 border border-slate-800">
              <Wifi className="w-3.5 h-3.5 text-cyan-400" /> {t.hero.featurePills.localFirst}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/50 border border-slate-800">
              <Lock className="w-3.5 h-3.5 text-indigo-400" /> {t.hero.featurePills.e2e}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/50 border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> {t.hero.featurePills.noAccount}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/50 border border-slate-800">
              <RefreshCw className="w-3.5 h-3.5 text-purple-400" /> {t.hero.featurePills.noCloud}
            </span>
          </div>
        </div>

        {/* High-End Phone-to-PC Interactive Visualization Frame */}
        <div className="relative max-w-5xl mx-auto">
          {/* Gradient outer frame glowing rim */}
          <div className="relative rounded-2xl p-[1px] bg-gradient-to-b from-cyan-500/40 via-indigo-500/20 to-purple-500/30 shadow-2xl shadow-cyan-950/40">
            <div className="relative rounded-2xl bg-slate-950/90 backdrop-blur-xl p-4 sm:p-8 overflow-hidden">
              {/* Header bar of mock UI */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-slate-400 hidden sm:inline">
                    linkbridge://desktop-client [x64-release]
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.hero.connectedStatus}
                </div>
              </div>

              {/* Graphic Phone to PC connection bridge */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Windows Desktop Representation */}
                <div className="md:col-span-7 bg-slate-900/60 rounded-xl p-4 border border-slate-800/90 shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                      <Monitor className="w-4 h-4 text-cyan-400" />
                      <span>{t.hero.pcView}</span>
                    </div>
                    <span className="text-[11px] text-cyan-400 font-mono">Windows 11 x64</span>
                  </div>

                  {/* Real screenshot preview inside the PC mock */}
                  <div className="relative rounded-lg overflow-hidden border border-slate-800">
                    <img
                      src="/screenshots/desktop-glass-home.png"
                      alt="LinkBridge Desktop Interface"
                      className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-xs text-slate-200 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded border border-slate-700/60 flex items-center gap-2">
                        <Bell className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Live Sync: 4 Active Notifications • Audio Active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central Futuristic Bridge Wire */}
                <div className="md:col-span-1 flex md:flex-col items-center justify-center gap-2 py-2">
                  <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-cyan-400 to-indigo-500" />
                  <div className="p-2.5 rounded-full bg-slate-800 border border-cyan-500/50 text-cyan-400 shadow-glow-cyan animate-pulse">
                    <RefreshCw className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-indigo-500 via-cyan-400 to-transparent" />
                </div>

                {/* Android Representation */}
                <div className="md:col-span-4 bg-slate-900/60 rounded-xl p-4 border border-slate-800/90 shadow-inner">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                      <Smartphone className="w-4 h-4 text-purple-400" />
                      <span>{t.hero.phoneView}</span>
                    </div>
                    <span className="text-[11px] text-purple-400 font-mono">Android 14</span>
                  </div>

                  {/* Android screenshot preview */}
                  <div className="relative rounded-lg overflow-hidden border border-slate-800 aspect-[9/16] max-h-[300px] flex items-center justify-center bg-slate-950">
                    <img
                      src="/screenshots/pairing-and-android.png"
                      alt="LinkBridge Android Interface"
                      className="w-full h-full object-cover object-right transform hover:scale-[1.02] transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/40 text-[10px] text-purple-300 font-mono">
                      QUIC Direct
                    </div>
                  </div>
                </div>
              </div>

              {/* Lower Sync Telemetry Strip */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" /> SMS & RCS Ready
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <FileText className="w-3.5 h-3.5 text-indigo-400" /> Clipboard History Synced
                  </span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 font-medium">
                  <span>Protocol v0 • CBOR on QUIC Streams</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
