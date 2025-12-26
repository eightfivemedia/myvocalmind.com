'use client';

import { motion } from 'framer-motion';
import GradientBackground from './GradientBackground';
import FloatingDoodles from './FloatingDoodles';
import HeroContent from './HeroContent';
import { PhoneMockupsDesktop, PhoneMockupsMobile } from './PhoneMockups';

interface HeroProps {
  headline: string;
  subheadline: string;
}

export default function Hero({
  headline,
  subheadline,
}: HeroProps) {
  return (
    <motion.section
      className="relative min-h-screen sm:h-screen flex flex-col items-center sm:justify-center overflow-visible sm:overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GradientBackground />
      <FloatingDoodles />

      {/* Desktop: Phones positioned absolutely behind content */}
      <PhoneMockupsDesktop />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 sm:h-full flex flex-col items-center pt-24 sm:pt-28 md:pt-32">
        <HeroContent
          headline={headline}
          subheadline={subheadline}
        />
      </div>

      {/* Mobile: Phones and QR code below content in document flow */}
      <PhoneMockupsMobile />
    </motion.section>
  );
}

