'use client';

import { motion } from 'framer-motion';

interface HeroContentProps {
  headline: string;
  subheadline: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

export default function HeroContent({
  headline,
  subheadline,
}: HeroContentProps) {
  return (
    <motion.div
      className="relative z-30 text-center px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Headline */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4"
        variants={fadeInUp}
      >
        {headline}
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        variants={fadeInUp}
      >
        {subheadline}
      </motion.p>
    </motion.div>
  );
}

