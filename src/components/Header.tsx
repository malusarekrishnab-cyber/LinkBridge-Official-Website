import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { config } from '../config'
import { useI18n } from '../i18n'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])
  const links = [['features', t.nav.features], ['screenshots', t.nav.screenshots], ['download', t.nav.download], ['how', t.nav.how], ['privacy', t.nav.privacy], ['about', t.nav.about], ['faq', t.nav.faq], ['contact', t.nav.contact]] as const
  const langBtn = (l: 'en' | 'mr', label: string) => (
    <button onClick={() => setLang(l)} aria-pressed={lang === l} lang={l}
      className={`rounded-md px-2.5 py-1 text-sm font-semibold transition ${lang === l ? 'bg-violet/20 text-cyan' : 'text-mute hover:text-ink'}`}>{label}</button>
  )
  return (
    <header className="sticky top-0 z-40 border-b border-line/20 bg-bg/75 backdrop-blur-xl">
      <motion.div className="absolute inset-x-0 top-0 h-0.5 origin-left" style={{ scaleX: scrollYProgress, backgroundImage: 'linear-gradient(90deg,#22d3ee,#a855f7)' }} aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#home" className="flex items-center gap-2.5 font-display text-lg font-semibold" aria-label={`${config.name} home`}>
          <img src={config.logo} alt="" width={36} height={36} className="rounded-lg" />{config.name}
        </a>
        <nav aria-label="Main" className="hidden items-center gap-5 xl:flex">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className="text-sm font-medium text-mute transition hover:text-ink">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-line/30 p-0.5" role="group" aria-label={t.common.language}>{langBtn('en', 'EN')}{langBtn('mr', 'मराठी')}</div>
          <button onClick={toggle} aria-label={t.common.theme} className="rounded-lg border border-line/30 p-2 text-mute transition hover:text-cyan">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.common.closeMenu : t.common.menu}
            className="rounded-lg border border-line/30 p-2 text-mute xl:hidden">{open ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line/20 bg-bg/95 px-5 py-3 xl:hidden">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium hover:bg-surface">{label}</a>)}
        </nav>
      )}
    </header>
  )
}
