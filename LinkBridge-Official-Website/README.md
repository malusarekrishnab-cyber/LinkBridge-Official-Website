# LinkBridge Official Website

The official, modern, and production-ready international website for **LinkBridge** (Android and Windows Cross-Device Continuity).

Developed by **Krushna B Malusare**.

---

## 🚀 Technology Stack

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS (Dark & Light modes with Obsidian Cyan & Midnight Purple accents)
- **Icons:** Lucide React
- **Animations:** Subtle CSS keyframes & Framer Motion
- **Internationalization (i18n):** Native English (EN) and natural Marathi (मराठी) translations with localStorage persistence
- **Single Source of Truth:** `src/config.ts` for all URLs, brand information, and versioning

---

## 🛠️ Local Development

To run the website locally:

```bash
cd LinkBridge-Official-Website
npm install
npm run dev
```

To create a production build:

```bash
cd LinkBridge-Official-Website
npm run build
```

The compiled output will be placed in `dist/`.

---

## 🌐 Vercel Deployment Instructions

Deploying this website to Vercel is seamless:

1. **Framework Preset:** Vite
2. **Root Directory:** `LinkBridge-Official-Website`
3. **Build Command:** `npm run build` (or `tsc -b && vite build`)
4. **Output Directory:** `dist`
5. **Install Command:** `npm install`
6. **Node.js Version:** 18.x or 20.x or newer

### Connecting GitHub to Vercel:
1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Import the `LinkBridge-Official-Website` repository.
3. In **Root Directory**, set `LinkBridge-Official-Website` (if this subfolder is deployed, or set `.` if deploying from the root of this repository).
4. Leave Build Command and Output Directory as default (`npm run build` and `dist`).
5. Click **Deploy**.

### Custom Domain Configuration (Optional):
1. In your Vercel project settings, go to **Domains**.
2. Add your custom domain (e.g., `linkbridge.app` or `linkbridge.dev`).
3. Set up the CNAME or A records as instructed by Vercel.

---

## 🔒 Attribution & License

- **License:** GPL-3.0-or-later
- **Attribution:**
  > "LinkBridge by Krushna B Malusare. Based on the open-source NectarLink by thtbee. Adds the Obsidian Cyan and Midnight Purple themes."
