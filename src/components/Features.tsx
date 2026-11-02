import { AppWindow, Bell, Cast, ClipboardCopy, FolderUp, Images, Mic, MonitorSmartphone, MousePointer2, PhoneCall, QrCode, ShieldCheck, Smartphone, Usb, Volume2, Webcam, Wifi, MessageSquare } from 'lucide-react'
import { useI18n } from '../i18n'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const icons = [Bell, MessageSquare, PhoneCall, ClipboardCopy, FolderUp, Images, Cast, AppWindow, Webcam, Volume2, Mic, MonitorSmartphone, MousePointer2, QrCode, Usb, Wifi, Smartphone, ShieldCheck]

export default function Features() {
  const { t } = useI18n()
  return (
    <section id="features" className="section">
      <SectionHead title={t.features.title} intro={t.features.intro} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.features.items.map((f, i) => { const Icon = icons[i]; return (
          <li key={i}><Reveal delay={(i % 3) * 0.05} className="glass glow h-full p-6">
            <span className="mb-4 inline-flex rounded-xl bg-violet/15 p-2.5 text-cyan"><Icon size={22} aria-hidden="true" /></span>
            <h3 className="font-display text-lg font-semibold">{f.t}</h3>
            <p className="mt-2 text-mute">{f.d}</p>
          </Reveal></li>
        ) })}
      </ul>
    </section>
  )
}
