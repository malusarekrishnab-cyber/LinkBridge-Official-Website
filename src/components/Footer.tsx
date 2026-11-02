import { config } from '../config'
import { useI18n } from '../i18n'
export default function Footer() {
  const { t } = useI18n(); const f = t.footer
  const links: [string, string, boolean][] = [
    [f.about, '#about', false], [f.features, '#features', false], [f.downloads, '#download', false], [f.docs, config.links.docs, true],
    [f.github, config.links.repo, true], [f.privacy, '#privacy', false], [f.license, config.links.license, true], [f.contact, '#contact', false],
  ]
  return (
    <footer className="border-t border-line/20">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3 font-display text-xl font-semibold"><img src={config.logo} alt="" width={40} height={40} className="rounded-xl" />{config.name}</div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-4">
            {links.map(([l, h, ext]) => <a key={l} href={h} {...(ext ? { target: '_blank', rel: 'noreferrer' } : {})} className="text-mute hover:text-cyan">{l === f.license ? `${l}: GPL-3.0-or-later` : l}</a>)}
          </nav>
        </div>
        <p className="mt-10 max-w-3xl text-sm text-mute" lang="en">
          LinkBridge by Krushna B Malusare. Based on the open-source{' '}
          <a href={config.links.nectarlink} target="_blank" rel="noreferrer" className="underline hover:text-cyan">NectarLink by thtbee</a>.
          {' '}Adds the Obsidian Cyan and Midnight Purple themes.
        </p>
        <p className="mt-3 flex flex-wrap gap-x-4 text-sm text-mute">{f.copyright}
          <a href={config.links.trademarks} target="_blank" rel="noreferrer" className="underline hover:text-cyan">{f.trademark}</a></p>
      </div>
    </footer>
  )
}
