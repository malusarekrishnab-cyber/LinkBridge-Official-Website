import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers
} from 'lucide-react';

interface ScreenshotItem {
  id: string;
  filename: string;
  category: 'desktop' | 'theme' | 'features';
  title: string;
  desc: string;
}

export const Screenshots: React.FC = () => {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'desktop' | 'theme' | 'features'>('all');

  const screenshots: ScreenshotItem[] = [
    {
      id: 'glassHome',
      filename: 'desktop-glass-home.png',
      category: 'desktop',
      title: t.screenshots.images.glassHome.title,
      desc: t.screenshots.images.glassHome.desc,
    },
    {
      id: 'messages',
      filename: 'desktop-messages.png',
      category: 'features',
      title: t.screenshots.images.messages.title,
      desc: t.screenshots.images.messages.desc,
    },
    {
      id: 'mirroring',
      filename: 'desktop-mirroring.png',
      category: 'features',
      title: t.screenshots.images.mirroring.title,
      desc: t.screenshots.images.mirroring.desc,
    },
    {
      id: 'apps',
      filename: 'desktop-apps.png',
      category: 'features',
      title: t.screenshots.images.apps.title,
      desc: t.screenshots.images.apps.desc,
    },
    {
      id: 'pairingAndAndroid',
      filename: 'pairing-and-android.png',
      category: 'features',
      title: t.screenshots.images.pairingAndAndroid.title,
      desc: t.screenshots.images.pairingAndAndroid.desc,
    },
    {
      id: 'hiveDark',
      filename: 'desktop-hive-dark.png',
      category: 'theme',
      title: t.screenshots.images.hiveDark.title,
      desc: t.screenshots.images.hiveDark.desc,
    },
    {
      id: 'hiveLight',
      filename: 'desktop-hive-light.png',
      category: 'theme',
      title: t.screenshots.images.hiveLight.title,
      desc: t.screenshots.images.hiveLight.desc,
    },
    {
      id: 'bloomHome',
      filename: 'desktop-bloom-home.png',
      category: 'theme',
      title: t.screenshots.images.bloomHome.title,
      desc: t.screenshots.images.bloomHome.desc,
    },
    {
      id: 'bloomSettings',
      filename: 'desktop-bloom-settings.png',
      category: 'desktop',
      title: t.screenshots.images.bloomSettings.title,
      desc: t.screenshots.images.bloomSettings.desc,
    },
    {
      id: 'graphiteHome',
      filename: 'desktop-graphite-home.png',
      category: 'theme',
      title: t.screenshots.images.graphiteHome.title,
      desc: t.screenshots.images.graphiteHome.desc,
    },
    {
      id: 'graphiteSettings',
      filename: 'desktop-graphite-settings.png',
      category: 'desktop',
      title: t.screenshots.images.graphiteSettings.title,
      desc: t.screenshots.images.graphiteSettings.desc,
    },
    {
      id: 'glassSettings',
      filename: 'desktop-glass-settings.png',
      category: 'desktop',
      title: t.screenshots.images.glassSettings.title,
      desc: t.screenshots.images.glassSettings.desc,
    },
  ];

  const filteredScreenshots = filter === 'all'
    ? screenshots
    : screenshots.filter(s => s.category === filter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') setSelectedIdx((prev) => (prev! + 1) % filteredScreenshots.length);
      if (e.key === 'ArrowLeft') setSelectedIdx((prev) => (prev! - 1 + filteredScreenshots.length) % filteredScreenshots.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, filteredScreenshots.length]);

  return (
    <section id="screenshots" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            {t.screenshots.badge}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.screenshots.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            {t.screenshots.subtitle}
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-indigo-600 text-white font-bold shadow-glow-purple'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {t.screenshots.filterAll}
          </button>
          <button
            onClick={() => setFilter('features')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'features'
                ? 'bg-indigo-600 text-white font-bold shadow-glow-purple'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {t.screenshots.filterFeatures}
          </button>
          <button
            onClick={() => setFilter('desktop')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'desktop'
                ? 'bg-indigo-600 text-white font-bold shadow-glow-purple'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {t.screenshots.filterDesktop}
          </button>
          <button
            onClick={() => setFilter('theme')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              filter === 'theme'
                ? 'bg-indigo-600 text-white font-bold shadow-glow-purple'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
            }`}
          >
            {t.screenshots.filterThemes}
          </button>
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScreenshots.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className="group cursor-pointer rounded-2xl bg-slate-900/50 border border-slate-800/90 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-glow-card flex flex-col justify-between"
            >
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={`/screenshots/${item.filename}`}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="p-3 rounded-full bg-slate-900/90 text-cyan-400 border border-cyan-500/40 shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedIdx(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-slate-950 rounded-2xl border border-slate-800 p-4 sm:p-6 shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {filteredScreenshots[selectedIdx].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  {filteredScreenshots[selectedIdx].desc}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={`/screenshots/${filteredScreenshots[selectedIdx].filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                  title={t.screenshots.viewFullResolution}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
                  title={t.screenshots.closeLightbox}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Preview with Arrows */}
            <div className="relative flex-1 flex items-center justify-center min-h-[300px] overflow-hidden rounded-xl bg-black">
              <img
                src={`/screenshots/${filteredScreenshots[selectedIdx].filename}`}
                alt={filteredScreenshots[selectedIdx].title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx((selectedIdx - 1 + filteredScreenshots.length) % filteredScreenshots.length);
                }}
                className="absolute left-3 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                title={t.screenshots.prev}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx((selectedIdx + 1) % filteredScreenshots.length);
                }}
                className="absolute right-3 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                title={t.screenshots.next}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Footer Navigation Info */}
            <div className="pt-4 mt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>{selectedIdx + 1} / {filteredScreenshots.length}</span>
              <span>Use Left/Right arrows to navigate, Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
