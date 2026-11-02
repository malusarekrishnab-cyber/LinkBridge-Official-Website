import { config } from '../config'
export default function Illustration({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 560 340" role="img" aria-label={label} className="h-auto w-full">
      <defs>
        <linearGradient id="lg" x1="0" x2="1"><stop offset="0" stopColor="#22d3ee" /><stop offset="1" stopColor="#a855f7" /></linearGradient>
        <clipPath id="lc"><rect x="226" y="142" width="56" height="56" rx="14" /></clipPath>
      </defs>
      <circle cx="254" cy="170" r="78" fill="url(#lg)" opacity=".16" className="pulse" />
      <circle cx="254" cy="170" r="52" fill="none" stroke="url(#lg)" strokeWidth="1.5" opacity=".5" className="pulse" />
      {/* phone */}
      <rect x="20" y="86" width="104" height="188" rx="22" className="fill-surface stroke-cyan" strokeWidth="2.5" />
      <rect x="34" y="106" width="76" height="12" rx="6" className="fill-line" opacity=".35" />
      <rect x="34" y="130" width="76" height="30" rx="8" className="fill-violet" opacity=".35" />
      <rect x="34" y="168" width="76" height="30" rx="8" className="fill-cyan" opacity=".3" />
      <rect x="34" y="206" width="52" height="12" rx="6" className="fill-line" opacity=".35" />
      <rect x="52" y="256" width="40" height="4" rx="2" className="fill-line" opacity=".5" />
      {/* monitor */}
      <rect x="360" y="62" width="190" height="130" rx="14" className="fill-surface stroke-violet" strokeWidth="2.5" />
      <rect x="374" y="76" width="162" height="102" rx="8" className="fill-bg" />
      <rect x="386" y="90" width="64" height="40" rx="6" className="fill-violet" opacity=".35" />
      <rect x="458" y="90" width="66" height="18" rx="6" className="fill-cyan" opacity=".3" />
      <rect x="458" y="114" width="66" height="16" rx="6" className="fill-line" opacity=".3" />
      <rect x="386" y="140" width="138" height="26" rx="6" className="fill-line" opacity=".2" />
      <path d="M430 192v34M392 232h76" className="stroke-violet" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* bridge */}
      <path d="M124 180 C 170 180, 180 170, 226 170" className="flow" stroke="url(#lg)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M282 170 C 320 170, 330 128, 360 128" className="flow" stroke="url(#lg)" strokeWidth="3" fill="none" strokeLinecap="round" />
      <image href={config.logo} x="226" y="142" width="56" height="56" clipPath="url(#lc)" />
      <rect x="226" y="142" width="56" height="56" rx="14" fill="none" stroke="url(#lg)" strokeWidth="2" />
    </svg>
  )
}
