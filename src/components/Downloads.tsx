import { useState } from 'react'
import { Check, Copy, Download, ExternalLink, LifeBuoy, Monitor, Smartphone } from 'lucide-react'
import { config } from '../config'
import { useI18n } from '../i18n'
import { useRelease, type Release } from '../hooks/useRelease'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

const mb = (n: number) => `${(n / 1048576).toFixed(1)} MB`

function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex justify-between gap-4 border-b border-line/15 py-2 text-sm"><dt className="text-mute">{k}</dt><dd className="text-right font-medium">{v}</dd></div>
}

function Card({ kind, rel }: { kind: 'windows' | 'android'; rel: Release }) {
  const { t } = useI18n()
  const d = config.downloads[kind]
  const url = rel.urls[d.file] ?? d.url
  const size = rel.sizes[d.file]
  const Icon = kind === 'windows' ? Monitor : Smartphone
  return (
    <Reveal className="glass glow flex h-full flex-col p-7">
      <div className="mb-5 flex items-center gap-3"><span className="rounded-xl bg-violet/15 p-3 text-cyan"><Icon size={26} aria-hidden="true" /></span>
        <h3 className="font-display text-2xl font-semibold">{t.dl[kind]}</h3></div>
      <dl className="mb-6">
        <Row k={t.dl.version} v={rel.tag} />
        <Row k={t.dl.file} v={d.file} />
        {kind === 'windows' ? <><Row k={t.dl.arch} v={config.downloads.windows.arch} /><Row k={t.dl.supports} v={config.downloads.windows.os} /></> : <Row k={t.dl.minOs} v={config.downloads.android.minOs} />}
        {size ? <Row k={t.dl.size} v={mb(size)} /> : null}
      </dl>
      <a href={url} className="btn-primary mt-auto w-full py-4 text-lg"><Download size={22} />{kind === 'windows' ? t.dl.btnWin : t.dl.btnAnd}</a>
    </Reveal>
  )
}

export default function Downloads() {
  const { t } = useI18n()
  const rel = useRelease()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(config.links.repo); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* clipboard blocked */ }
  }
  return (
    <section id="download" className="section">
      <SectionHead title={t.dl.title} intro={t.dl.intro} />
      <div className="grid gap-5 md:grid-cols-2"><Card kind="windows" rel={rel} /><Card kind="android" rel={rel} /></div>
      <div className="mt-6 flex flex-wrap items-center gap-3" aria-live="polite">
        <a href={config.links.releases} target="_blank" rel="noreferrer" className="btn-ghost"><ExternalLink size={18} />{t.dl.allReleases}</a>
        <button onClick={copy} className="btn-ghost">{copied ? <Check size={18} /> : <Copy size={18} />}{copied ? t.dl.copied : t.dl.copy}</button>
        <p className="text-sm text-mute">{rel.status === 'loading' ? t.common.loading : rel.status === 'live' ? t.dl.live : t.dl.fallback}</p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Reveal className="glass p-7"><h3 className="mb-4 font-display text-xl font-semibold">{t.dl.installTitle}</h3>
          {([['windows', t.dl.installWin], ['android', t.dl.installAnd]] as const).map(([k, steps]) => (
            <div key={k} className="mb-5 last:mb-0"><h4 className="mb-2 font-semibold text-cyan">{t.dl[k]}</h4>
              <ol className="list-decimal space-y-1.5 pl-5 text-mute">{steps.map((s, i) => <li key={i}>{s}</li>)}</ol></div>
          ))}
        </Reveal>
        <Reveal className="glass p-7"><h3 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold"><LifeBuoy size={20} className="text-cyan" aria-hidden="true" />{t.dl.troubleTitle}</h3>
          <div className="space-y-4">{t.dl.troubles.map((x, i) => <div key={i}><h4 className="font-semibold">{x.t}</h4><p className="text-mute">{x.d}</p></div>)}</div>
          <a href={config.links.troubleshooting} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 font-medium text-cyan hover:underline">{t.dl.moreHelp}<ExternalLink size={15} /></a>
        </Reveal>
      </div>
      <Reveal className="glass mt-5 p-7"><h3 className="mb-3 font-display text-xl font-semibold">{t.dl.notesTitle}</h3>
        {rel.notes ? <><p className="mb-2 text-sm text-mute">{t.dl.notesLive} {rel.tag}</p><pre className="max-h-64 overflow-auto whitespace-pre-wrap font-body text-sm text-mute">{rel.notes.slice(0, 1500)}</pre></> : <p className="text-mute">{t.dl.notesNone}</p>}
        <a href={config.links.releases} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 font-medium text-cyan hover:underline">{t.dl.notesLink}<ExternalLink size={15} /></a>
      </Reveal>
    </section>
  )
}
