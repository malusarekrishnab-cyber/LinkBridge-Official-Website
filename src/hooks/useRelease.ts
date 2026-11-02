import { useEffect, useState } from 'react'
import { config } from '../config'

export type Release = { status: 'loading' | 'live' | 'fallback'; tag: string; notes: string; sizes: Record<string, number>; urls: Record<string, string> }
const base: Release = { status: 'loading', tag: config.version, notes: '', sizes: {}, urls: {} }

/** Reads the latest GitHub release. Falls back silently to src/config.ts if the API fails. */
export function useRelease(): Release {
  const [rel, setRel] = useState<Release>(base)
  useEffect(() => {
    const ac = new AbortController()
    fetch(config.releaseApi, { signal: ac.signal, headers: { Accept: 'application/vnd.github+json' } })
      .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json() })
      .then((j: { tag_name?: string; body?: string; assets?: { name: string; size: number; browser_download_url: string }[] }) => {
        const sizes: Record<string, number> = {}; const urls: Record<string, string> = {}
        for (const a of j.assets ?? []) { sizes[a.name] = a.size; urls[a.name] = a.browser_download_url }
        setRel({ status: j.tag_name ? 'live' : 'fallback', tag: j.tag_name || config.version, notes: (j.body ?? '').trim(), sizes, urls })
      })
      .catch((e) => { if (e.name !== 'AbortError') setRel({ ...base, status: 'fallback' }) })
    return () => ac.abort()
  }, [])
  return rel
}
