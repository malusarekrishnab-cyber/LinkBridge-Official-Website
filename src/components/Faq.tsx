import { ChevronDown } from 'lucide-react'
import { useI18n } from '../i18n'
import SectionHead from './SectionHead'
export default function Faq() {
  const { t } = useI18n()
  return (
    <section id="faq" className="section">
      <SectionHead title={t.faq.title} />
      <div className="max-w-3xl space-y-3">
        {t.faq.items.map((f, i) => (
          <details key={i} className="glass group p-5 open:border-cyan/50">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold">{f.q}
              <ChevronDown size={20} className="shrink-0 text-cyan transition group-open:rotate-180" aria-hidden="true" /></summary>
            <p className="mt-3 text-mute">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
