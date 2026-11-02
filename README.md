<<<<<<< HEAD
# LinkBridge Official Website

React + TypeScript + Vite + Tailwind CSS + Framer Motion. English and Marathi.

## Run locally
```
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the build
```

## Edit things in one place
- `src/config.ts`: version, download URLs, GitHub links, email, logo path, `showDiscussions`.
- `src/i18n/en.ts` and `src/i18n/mr.ts`: all text. **Marathi (`mr.ts`) is marked for your review.**
- `.env`: `VITE_SITE_URL` (your real domain). Used for canonical, Open Graph, sitemap.xml and robots.txt.

## Logo
`public/brand/logo.png` is cropped from your v0.2.0 showcase image (64 px). Replace it with your original high-resolution file
(same name) and also replace `public/favicon.png`, `public/favicon-32.png`, `public/apple-touch-icon.png` and `public/og-image.png`.

## Screenshots
`public/images/*.png` are unedited crops from your showcase image. Replace them with original screenshots at any time
(keep the file names, or update `config.screenshots`).

## Deploy on Vercel
- Framework preset: **Vite**
- Root directory: the project folder (`./`)
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variable: `VITE_SITE_URL` = your site URL (no trailing slash)
- Steps: push this folder to a GitHub repo, then Vercel > Add New > Project > import the repo > confirm the settings above > Deploy.
- Custom domain: Vercel project > Settings > Domains > Add, then create the DNS record Vercel shows. Update `VITE_SITE_URL` and redeploy.
- `vercel.json` routes unknown URLs to the app, which shows the custom 404 page.
=======
# LinkBridge-Official-Website
Official website of LinkBridge – Connect Beyond Limits. Download, explore features, documentation, and support for Android and Windows.
>>>>>>> b91359e8def5fc428030933d83d768d67f9dc6f9
