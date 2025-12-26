'use client';

import { motion } from 'framer-motion';

interface DoodleConfig {
  id: string;
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  animation: {
    type: 'float' | 'rotate' | 'bounce' | 'pulse';
    duration: number;
    delay: number;
  };
}

// SVG Doodle Components
const Rocket: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M40 10 L30 30 L40 25 L50 30 Z M40 25 L40 50 M35 45 L40 50 L45 45"
      stroke="white"
      strokeWidth="2"
      strokeOpacity="0.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Lightbulb: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30 10 C25 10, 20 15, 20 25 C20 30, 25 35, 30 40 M30 40 L30 50 M25 50 L35 50"
      stroke="white"
      strokeWidth="2"
      strokeOpacity="0.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SpeechBubble: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 10 C10 10, 5 15, 5 20 C5 25, 10 30, 15 30 L20 35 L15 30 C20 30, 25 25, 25 20 C25 15, 20 10, 15 10 Z"
      stroke="white"
      strokeWidth="2"
      strokeOpacity="0.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const YesText: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="70"
    height="40"
    viewBox="0 0 70 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text
      x="35"
      y="25"
      textAnchor="middle"
      fontSize="20"
      fontWeight="bold"
      fill="white"
      fillOpacity="0.4"
      fontFamily="system-ui, sans-serif"
    >
      YES!
    </text>
  </svg>
);

const Star: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 5 L17 12 L24 12 L18 17 L20 24 L15 19 L10 24 L12 17 L6 12 L13 12 Z"
      stroke="white"
      strokeWidth="1.5"
      strokeOpacity="0.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckmarkCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="30"
      cy="30"
      r="20"
      stroke="white"
      strokeWidth="2"
      strokeOpacity="0.3"
    />
    <path
      d="M20 30 L27 37 L40 24"
      stroke="white"
      strokeWidth="2"
      strokeOpacity="0.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const doodles: DoodleConfig[] = [
  {
    id: 'rocket',
    Component: Rocket,
    position: { top: '10%', left: '5%' },
    animation: { type: 'rotate', duration: 4, delay: 0 },
  },
  {
    id: 'lightbulb',
    Component: Lightbulb,
    position: { top: '30%', left: '8%' },
    animation: { type: 'float', duration: 3, delay: 0.5 },
  },
  {
    id: 'speech-bubble-1',
    Component: SpeechBubble,
    position: { top: '20%', left: '15%' },
    animation: { type: 'bounce', duration: 2.5, delay: 1 },
  },
  {
    id: 'speech-bubble-2',
    Component: SpeechBubble,
    position: { top: '50%', left: '10%' },
    animation: { type: 'bounce', duration: 3, delay: 1.5 },
  },
  {
    id: 'yes-text',
    Component: YesText,
    position: { top: '15%', right: '8%' },
    animation: { type: 'pulse', duration: 2, delay: 0.3 },
  },
  {
    id: 'star-1',
    Component: Star,
    position: { top: '25%', right: '15%' },
    animation: { type: 'pulse', duration: 1.5, delay: 0.8 },
  },
  {
    id: 'star-2',
    Component: Star,
    position: { top: '40%', right: '12%' },
    animation: { type: 'pulse', duration: 2, delay: 1.2 },
  },
  {
    id: 'star-3',
    Component: Star,
    position: { top: '60%', right: '18%' },
    animation: { type: 'pulse', duration: 1.8, delay: 0.5 },
  },
  {
    id: 'checkmark',
    Component: CheckmarkCircle,
    position: { bottom: '10%', right: '5%' },
    animation: { type: 'rotate', duration: 5, delay: 0.2 },
  },
];

const getAnimationProps = (animation: DoodleConfig['animation']) => {
  switch (animation.type) {
    case 'float':
      return {
        y: [0, -10, 0],
        transition: {
          duration: animation.duration,
          repeat: Infinity,
          delay: animation.delay,
          ease: "easeInOut",
        },
      };
    case 'rotate':
      return {
        rotate: [0, 360],
        transition: {
          duration: animation.duration,
          repeat: Infinity,
          delay: animation.delay,
          ease: "linear",
        },
      };
    case 'bounce':
      return {
        y: [0, -15, 0],
        transition: {
          duration: animation.duration,
          repeat: Infinity,
          delay: animation.delay,
          ease: "easeInOut",
        },
      };
    case 'pulse':
      return {
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.6, 0.4],
        transition: {
          duration: animation.duration,
          repeat: Infinity,
          delay: animation.delay,
          ease: "easeInOut",
        },
      };
    default:
      return {};
  }
};

export default function FloatingDoodles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {doodles.map((doodle) => {
        const { Component, position, animation } = doodle;
        return (
          <motion.div
            key={doodle.id}
            className="absolute hidden md:block"
            style={position}
            animate={getAnimationProps(animation)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Component />
          </motion.div>
        );
      })}
    </div>
  );
}

