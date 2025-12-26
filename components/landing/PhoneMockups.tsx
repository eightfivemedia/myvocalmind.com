'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { phoneMockups } from '@/lib/constants';

const phoneVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + (custom * 0.1),
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

// Desktop layout component - absolute positioned
export function PhoneMockupsDesktop() {
  return (
    <div className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none">
      <div className="relative w-full h-full max-w-7xl mx-auto">
        {phoneMockups.map((phone, index) => {
          const isCenter = phone.position === 'center';
          const isLeft = phone.position === 'left';

          if (isCenter) return null;

          return (
            <motion.div
              key={phone.id}
              custom={index}
              variants={phoneVariants}
              initial="hidden"
              animate="visible"
              className={`absolute ${
                isLeft
                  ? 'left-0 md:left-[2%] lg:left-[4%] xl:left-[7%] bottom-12 z-0'
                  : 'right-0 md:right-[2%] lg:right-[4%] xl:right-[7%] bottom-12 z-0'
              }`}
              style={{
                x: 0,
                rotate: phone.rotation,
                scale: 1,
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative w-[180px] md:w-[220px] lg:w-[260px] xl:w-[300px]">
                <Image
                  src={phone.imageSrc}
                  alt={phone.alt}
                  width={300}
                  height={600}
                  className="object-contain w-full h-auto"
                  priority={false}
                  quality={90}
                  sizes="(max-width: 1024px) 220px, 300px"
                />
              </div>
            </motion.div>
          );
        })}

        {/* QR Code - Desktop */}
        <motion.div
          custom={2}
          variants={phoneVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-1/2 bottom-32 md:bottom-40 lg:bottom-48 z-10"
          style={{
            x: '-50%',
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative w-[220px] md:w-[260px] lg:w-[300px] xl:w-[340px] p-2 rounded-lg">
            <Image
              src="/images/qr-code.png"
              alt="QR Code"
              width={340}
              height={340}
              className="object-contain w-full h-auto"
              priority={true}
              quality={90}
              sizes="(max-width: 1024px) 260px, 340px"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Mobile layout component - stacked in document flow
export function PhoneMockupsMobile() {
  return (
    <div className="sm:hidden relative z-10 w-full flex flex-col items-center gap-8 mt-6 px-6 pb-12">
      {/* QR Code - Mobile */}
      <motion.div
        custom={0}
        variants={phoneVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[60vw]"
      >
        <div className="relative w-full aspect-square p-2 rounded-lg">
          <Image
            src="/images/qr-code.png"
            alt="QR Code - Scan to download"
            width={300}
            height={300}
            className="object-contain w-full h-full"
            priority={true}
            quality={90}
          />
        </div>
      </motion.div>

      {/* Only show phone-home on mobile */}
      <motion.div
        custom={1}
        variants={phoneVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[55vw]"
      >
        <div className="relative w-full">
          <Image
            src="/images/phone-home.png"
            alt="VocalMind home screen"
            width={300}
            height={600}
            className="object-contain w-full h-auto"
            priority={false}
            quality={90}
          />
        </div>
      </motion.div>
    </div>
  );
}

// Default export for backwards compatibility
export default function PhoneMockups() {
  return (
    <>
      <PhoneMockupsDesktop />
      <PhoneMockupsMobile />
    </>
  );
}

