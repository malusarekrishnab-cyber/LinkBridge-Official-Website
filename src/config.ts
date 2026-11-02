/**
 * CENTRAL CONFIGURATION – edit brand details, versions and URLs here only.
 */
const repo = 'https://github.com/malusarekrishnab-cyber/Link-Bridge'
const version = 'v1.0.0'
const dl = (file: string) => `${repo}/releases/download/${version}/${file}`

export const config = {
  name: 'LinkBridge',
  tagline: 'Connect Beyond Limits',
  developer: 'Krushna B Malusare',
  email: 'malusarekrishnab@gmail.com',
  version,
  logo: '/brand/logo.png', // swap this one file for a higher-resolution original
  links: {
    github: 'https://github.com/malusarekrishnab-cyber',
    repo,
    releases: `${repo}/releases`,
    latest: `${repo}/releases/latest`,
    issues: `${repo}/issues`,
    discussions: `${repo}/discussions`,
    license: `${repo}/blob/main/LICENSE`,
    security: `${repo}/blob/main/docs/technical/security-model.md`,
    securityPolicy: `${repo}/blob/main/SECURITY.md`,
    docs: `${repo}/blob/main/docs/guide/README.md`,
    troubleshooting: `${repo}/blob/main/docs/guide/troubleshooting.md`,
    trademarks: `${repo}/blob/main/TRADEMARKS.md`,
    nectarlink: 'https://github.com/thtbee/nectarlink',
  },
  /** Your repo currently has no Discussions tab. Set true once you enable it. */
  showDiscussions: false,
  releaseApi: 'https://api.github.com/repos/malusarekrishnab-cyber/Link-Bridge/releases/latest',
  downloads: {
    windows: {
      file: 'LinkBridge-Windows-Setup.exe',
      arch: 'x64 Intel/AMD',
      os: 'Windows 10 (2004+) and Windows 11',
      url: dl('LinkBridge-Windows-Setup.exe'),
    },
    android: {
      file: 'LinkBridge-Android.apk',
      minOs: 'Android 8.0 (API 26)',
      url: dl('LinkBridge-Android.apk'),
    },
  },
  screenshots: [
    { key: 'home', src: '/images/home.png', w: 816, h: 325, span: 2 },
    { key: 'settings', src: '/images/settings.png', w: 668, h: 325, span: 2 },
    { key: 'pairing', src: '/images/pairing.png', w: 392, h: 236, span: 1 },
    { key: 'messages', src: '/images/messages.png', w: 376, h: 236, span: 1 },
    { key: 'apps', src: '/images/apps.png', w: 344, h: 236, span: 1 },
    { key: 'mirroring', src: '/images/mirroring.png', w: 357, h: 236, span: 1 },
    { key: 'themes', src: '/images/themes.png', w: 1372, h: 126, span: 2 },
  ],
} as const

export type ScreenshotKey = (typeof config.screenshots)[number]['key']
