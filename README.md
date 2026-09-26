# Oswal Steel Industries — Standalone Landing Page

This folder contains the lightweight, independent temporary landing page for **Oswal Steel Industries** (Est. 1974, Mumbai).

It is isolated from the full multi-page application and can be developed, built, and deployed completely independently.

---

## Structure

```
landing-page/
├── app/
│   ├── globals.css          # Editorial neutral styling & smooth scrolling
│   ├── layout.tsx           # Standalone metadata, SEO & layout
│   ├── page.tsx             # Focused Landing Page (Hero, About, Contact)
│   └── privacy-policy/      # Clean legal privacy policy route
│       └── page.tsx
├── components/
│   ├── Header.tsx           # In-page smooth scroll navigation
│   ├── Footer.tsx           # Minimal industrial footer
│   ├── OswalLogo.tsx        # Official brand logo
│   └── EnquiryForm.tsx      # Requirement submission form + WhatsApp CTA
├── public/
│   └── images/              # High-resolution documentary steel imagery
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## Sections Included

1. **Header / Navigation**: Brand logo, in-page smooth-scroll anchors (`Home`, `About`, `Contact`), and `Request a Quote` CTA button.
2. **Hero**: Editorial typography (`Specialty Steels for Demanding Industries`), establishment credentials (`Established 1974 · Mumbai`), and authentic stockyard photography.
3. **About Us**: Narrative on five decades of supply, ready stock in Mumbai and Kalamboli, and factual information blocks.
4. **Contact Us**: Commercial representative details (Ashish Shah), direct phone (`+91 9920049724`), email (`oswalsteel1974@gmail.com`), physical address, click-to-call, WhatsApp link, and requirement enquiry form.
5. **Privacy Policy**: Clean legal route at `/privacy-policy`.
6. **Footer**: Minimal charcoal footer with direct links, contact info, and copyright.

---

## Getting Started

### 1. Installation

Navigate into the `landing-page` directory and install dependencies:

```bash
cd landing-page
npm install
```

### 2. Development Server

Start the local development server (runs on port 3001 to avoid conflicting with the main website):

```bash
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### 3. Production Build

To test or build the optimized static bundle:

```bash
npm run build
npm run start
```

---

## Deployment Instructions

### Vercel (Recommended)
1. Point your deployment root directory to `landing-page`.
2. Framework Preset: **Next.js**.
3. Build Command: `next build`.
4. Output Directory: `.next`.

### Static Export / Netlify / Cloudflare Pages
To export as pure static HTML:
Add `output: 'export'` to `next.config.mjs` if static HTML hosting is required, then run `npm run build` to generate an `out` folder ready for any static web host.

---

## Environment Variables
None required for standard UI & WhatsApp integration. If connecting a backend email webhook (e.g., Resend, SendGrid) to `EnquiryForm.tsx`, define:
```env
NEXT_PUBLIC_ENQUIRY_ENDPOINT="https://your-api.com/enquiry"
```
