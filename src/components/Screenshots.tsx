import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { config } from '../config'
import { useI18n } from '../i18n'
import SectionHead from './SectionHead'

export default function Screenshots() {
  const { t } = useI18n()
  const shots = config.screenshots
  const [idx, setIdx] = useState<number | null>(null)
  const [loaded, setLoaded] = useState<Record<string, boolean>>({})
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)
  const open = idx !== null
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'; closeRef.current?.focus()
    const k = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIdx(null)
      if (e.key === 'ArrowRight') setIdx((i) => (i === null ? i : (i + 1) % shots.length))
      if (e.key === 'ArrowLeft') setIdx((i) => (i === null ? i : (i - 1 + shots.length) % shots.length))
    }
    window.addEventListener('keydown', k)
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = ''; lastFocus.current?.focus() }
  }, [open, shots.length])
  const cur = idx !== null ? shots[idx] : null
  return (
    <section id="screenshots" className="section">
      <SectionHead title={t.shots.title} intro={t.shots.intro} />
      <ul className="grid items-start gap-4 md:grid-cols-2">
        {shots.map((s, i) => (
          <li key={s.key} className={s.span === 2 ? 'md:col-span-2' : ''}>
            <button onClick={(e) => { lastFocus.current = e.currentTarget; setIdx(i) }} aria-label={`${t.shots.open}: ${t.shots.items[s.key]}`}
              className="glass glow group block w-full overflow-hidden p-2 text-left">
              <div className={`overflow-hidden rounded-xl ${loaded[s.key] ? '' : 'skeleton'}`} style={{ aspectRatio: `${s.w} / ${s.h}` }}>
                <img src={s.src} alt={t.shots.items[s.key]} width={s.w} height={s.h} loading="lazy" onLoad={() => setLoaded((l) => ({ ...l, [s.key]: true }))} className="h-full w-full object-cover" />
              </div>
              <p className="px-2 pb-1 pt-3 text-sm text-mute">{t.shots.items[s.key]}</p>
            </button>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {cur && (
          <motion.div role="dialog" aria-modal="true" aria-label={t.shots.items[cur.key]} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIdx(null)}>
            <button ref={closeRef} onClick={() => setIdx(null)} aria-label={t.shots.close} className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X /></button>
            <button onClick={(e) => { e.stopPropagation(); setIdx((idx! - 1 + shots.length) % shots.length) }} aria-label={t.shots.prev} className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronLeft /></button>
            <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <img src={cur.src} alt={t.shots.items[cur.key]} className="max-h-[80vh] w-auto rounded-xl" />
              <figcaption className="mt-3 text-center text-sm text-white/80">{t.shots.items[cur.key]}</figcaption>
            </figure>
            <button onClick={(e) => { e.stopPropagation(); setIdx((idx! + 1) % shots.length) }} aria-label={t.shots.next} className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
