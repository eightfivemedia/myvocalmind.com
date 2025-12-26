# VocalMind Landing Page - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Phone Mockup Images**
   
   Place three iPhone mockup images in `public/images/`:
   - `phone-home.png` (300x650px recommended)
   - `phone-transcription.png` (300x650px recommended)
   - `phone-notes.png` (300x650px recommended)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
vocalmind-landing/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── layout.tsx        # Root layout with Navigation
│   └── globals.css       # Global styles & animations
├── components/
│   ├── ui/               # shadcn/ui components
│   └── landing/          # Landing page components
├── lib/
│   ├── utils.ts          # Utility functions (cn)
│   ├── types.ts          # TypeScript interfaces
│   └── constants.ts      # Navigation items & phone mockups
└── public/
    └── images/           # Phone mockup images
```

## Key Features

### Navigation
- Sticky header with backdrop blur
- Responsive mobile menu
- shadcn NavigationMenu component
- Logo with gradient waveform icon

### Hero Section
- Animated gradient background
- Floating SVG doodles (rocket, lightbulb, speech bubbles, stars, etc.)
- Three iPhone mockups with rotation and hover effects
- Framer Motion animations
- Responsive text sizing

### Animations
- Gradient animation (CSS)
- Floating particles (Framer Motion)
- Doodle animations (float, rotate, bounce, pulse)
- Phone mockup entrance animations
- Staggered content animations

## Customization

### Update Hero Content
Edit `app/page.tsx`:
```typescript
<Hero
  headline="Your headline"
  subheadline="Your subheadline"
  primaryCTA={{ text: "Button Text", href: "#link" }}
  secondaryCTA={{ text: "Button Text", href: "#link" }}
/>
```

### Update Navigation Items
Edit `lib/constants.ts`:
```typescript
export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  // Add more items...
];
```

### Customize Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  vocalmind: {
    purple: { 600: '#YOUR_COLOR', 700: '#YOUR_COLOR' },
    // ...
  }
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Next.js Image optimization
- Lazy loading for below-fold content
- CSS animations where possible
- Optimized SVG doodles
- Proper loading states

## Accessibility

- Semantic HTML5
- ARIA labels for icon buttons
- Keyboard navigation
- Focus visible states
- Reduced motion support

## SEO

- Meta tags in `app/layout.tsx`
- Open Graph tags
- Semantic heading hierarchy
- Alt text for images

## Troubleshooting

### Images not showing
- Ensure images are in `public/images/`
- Check file names match exactly: `phone-home.png`, `phone-transcription.png`, `phone-notes.png`
- Verify image dimensions (recommended: 300x650px)

### Animations not working
- Check browser console for errors
- Verify Framer Motion is installed: `npm list framer-motion`
- Ensure `tailwindcss-animate` is installed

### Styling issues
- Clear `.next` cache: `rm -rf .next`
- Rebuild: `npm run build`
- Check Tailwind config is loaded correctly

## Next Steps

1. Add phone mockup images
2. Customize content in `app/page.tsx`
3. Update navigation items in `lib/constants.ts`
4. Add additional sections (Features, Pricing, etc.)
5. Deploy to Vercel or your preferred hosting

