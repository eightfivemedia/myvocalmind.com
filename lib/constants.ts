import { NavItem, PhoneMockup } from './types';

export const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Blog", href: "#blog" }
];

export const phoneMockups: PhoneMockup[] = [
  {
    id: 'left',
    imageSrc: '/images/phone-home.png',
    alt: 'VocalMind home screen with waveform',
    rotation: -15,
    zIndex: 10,
    position: 'left'
  },
  {
    id: 'center',
    imageSrc: '/images/phone-transcription.png',
    alt: 'VocalMind transcription screen',
    rotation: 0,
    zIndex: 20,
    position: 'center'
  },
  {
    id: 'right',
    imageSrc: '/images/phone-notes.png',
    alt: 'VocalMind notes list',
    rotation: 15,
    zIndex: 10,
    position: 'right'
  }
];

