# VocalMind Landing Page

A modern, responsive landing page hero section for VocalMind - an AI-powered voice notes app.

## Tech Stack

- **Next.js 14.2.35** (App Router) - PATCHED & SECURE
- **React 18.3.1** - NOT AFFECTED BY VULNERABILITIES
- **React DOM 18.3.1**
- **TypeScript 5.x**
- **Tailwind CSS 3.4+**
- **shadcn/ui components**
- **Framer Motion 11.x**
- **Node.js 18+ or 20+**

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
vocalmind-landing/
├── app/
│   ├── page.tsx (landing page)
│   ├── layout.tsx
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── ui/ (shadcn components)
│   │   ├── button.tsx
│   │   └── navigation-menu.tsx
│   └── landing/
│       ├── Navigation.tsx
│       ├── Hero.tsx
│       ├── HeroContent.tsx
│       ├── PhoneMockups.tsx
│       ├── FloatingDoodles.tsx
│       └── GradientBackground.tsx
├── lib/
│   ├── utils.ts
│   ├── types.ts
│   └── constants.ts
└── public/
    └── images/
        ├── phone-home.png
        ├── phone-transcription.png
        └── phone-notes.png
```

## Features

- ✅ Modern, responsive design
- ✅ Framer Motion animations
- ✅ Sticky navigation with backdrop blur
- ✅ Mobile-first responsive layout
- ✅ Accessibility compliant (ARIA labels, keyboard navigation)
- ✅ SEO optimized
- ✅ TypeScript strict mode
- ✅ Performance optimized (Next.js Image, lazy loading)

## Image Requirements

Place three iPhone mockup images in `public/images/`:

1. `phone-home.png` - Home screen with waveform (300x650px)
2. `phone-transcription.png` - Transcription screen (300x650px)
3. `phone-notes.png` - Notes list (300x650px)

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  vocalmind: {
    purple: { 600: '#6B5B95', 700: '#5A4A84' },
    blue: { 600: '#4A5899', 700: '#3A4888' },
    // ...
  }
}
```

### Content

Edit `app/page.tsx` to update the hero content:

```typescript
<Hero
  headline="Your headline"
  subheadline="Your subheadline"
  // ...
/>
```

## License

MIT

