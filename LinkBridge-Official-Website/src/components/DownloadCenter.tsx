import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { CONFIG } from '../config';
import {
  Download,
  ExternalLink,
  AlertTriangle,
  Info,
  CheckCircle2,
  Cpu,
  Smartphone,
  Monitor
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const DownloadCenter: React.FC = () => {
  const { t } = useLanguage();
  const [latestReleaseInfo, setLatestReleaseInfo] = useState<{
    tagName: string;
    publishedAt?: string;
  } | null>(null);

  // Optional GitHub API release metadata fetcher with src/config.ts fallback
  useEffect(() => {
    fetch('https://api.github.com/repos/malusarekrishnab-cyber/Link-Bridge/releases/latest')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('API request failed');
      })
      .then((data) => {
        if (data && data.tag_name) {
          setLatestReleaseInfo({
            tagName: data.tag_name,
            publishedAt: data.published_at ? new Date(data.published_at).toLocaleDateString() : undefined,
          });
        }
      })
      .catch(() => {
        // Silent fallback to CONFIG without fabricating values
      });
  }, []);

  return (
    <section id="download" className="py-24 relative bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <Download className="w-3.5 h-3.5" />
            {t.downloads.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.downloads.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.downloads.subtitle}
          </p>
          {latestReleaseInfo && (
            <div className="mt-3 text-xs font-mono text-cyan-400/90 inline-block px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800/40">
              Latest GitHub Release: {latestReleaseInfo.tagName} {latestReleaseInfo.publishedAt ? `• Released ${latestReleaseInfo.publishedAt}` : ''}
            </div>
          )}
        </div>

        {/* 2 Dedicated Platform Cards (Windows x64 and Android) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Windows Desktop Card */}
          <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 hover:shadow-glow-cyan">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Monitor className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {t.downloads.windowsCard.platform}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {CONFIG.downloads.windows.tagline}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono font-bold">
                  {CONFIG.downloads.windows.version}
                </span>
              </div>

              {/* Specs & Requirements */}
              <div className="space-y-3 mb-8 bg-slate-950/60 rounded-xl p-4 border border-slate-800/70 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Architecture:
                  </span>
                  <span className="font-semibold text-white">{CONFIG.downloads.windows.architecture}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Supported OS:
                  </span>
                  <span className="font-semibold text-white">{CONFIG.downloads.windows.minOS}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Package:</span>
                  <span className="text-cyan-400 truncate max-w-[220px]">{CONFIG.downloads.windows.filename}</span>
                </div>
              </div>

              {/* Setup guide instructions */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  {t.downloads.windowsCard.instructionsTitle}
                </h4>
                <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside">
                  {t.downloads.windowsCard.instructionSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={CONFIG.downloads.windows.downloadUrl}
              className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-base shadow-glow-cyan transition-all duration-200"
            >
              <Download className="w-5 h-5 text-slate-950" />
              <span>{t.downloads.windowsCard.btnText}</span>
            </a>
          </div>

          {/* Android Mobile Card */}
          <div className="relative rounded-3xl bg-slate-900/60 border border-slate-800 p-8 sm:p-10 flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow-purple">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {t.downloads.androidCard.platform}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {CONFIG.downloads.android.tagline}
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-mono font-bold">
                  {CONFIG.downloads.android.version}
                </span>
              </div>

              {/* Specs & Requirements */}
              <div className="space-y-3 mb-8 bg-slate-950/60 rounded-xl p-4 border border-slate-800/70 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" /> Target:
                  </span>
                  <span className="font-semibold text-white">{t.downloads.androidCard.arch}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Minimum Android:
                  </span>
                  <span className="font-semibold text-white">{CONFIG.downloads.android.minOS}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-400">Package:</span>
                  <span className="text-purple-400 truncate max-w-[220px]">{CONFIG.downloads.android.filename}</span>
                </div>
              </div>

              {/* Setup guide instructions */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                  {t.downloads.androidCard.instructionsTitle}
                </h4>
                <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside">
                  {t.downloads.androidCard.instructionSteps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={CONFIG.downloads.android.downloadUrl}
              className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base shadow-glow-purple transition-all duration-200"
            >
              <Download className="w-5 h-5 text-white" />
              <span>{t.downloads.androidCard.btnText}</span>
            </a>
          </div>
        </div>

        {/* View All Releases Link Button */}
        <div className="text-center mb-16">
          <a
            href={CONFIG.repository.releasesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-200 text-sm font-semibold transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>{t.downloads.githubReleasesBtn}</span>
            <ExternalLink className="w-4 h-4 text-slate-400" />
          </a>
          <p className="mt-3 text-xs text-slate-500">
            {t.downloads.verifyNotice}
          </p>
        </div>

        {/* Troubleshooting & Security Guidelines Accordion/Cards */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            {t.downloads.troubleshootingTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-amber-500/30">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <h4 className="font-bold text-amber-300 text-sm">
                  {t.downloads.smartScreenTip.title}
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.downloads.smartScreenTip.desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/40 border border-blue-500/30">
              <div className="flex items-center gap-3 mb-3">
                <Info className="w-5 h-5 text-blue-400" />
                <h4 className="font-bold text-blue-300 text-sm">
                  {t.downloads.playProtectTip.title}
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.downloads.playProtectTip.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
