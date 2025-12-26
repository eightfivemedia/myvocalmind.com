export interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: CTAButton;
}

export interface CTAButton {
  text: string;
  href: string;
  onClick?: () => void;
}

export interface DoodleElement {
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

export interface NavItem {
  label: string;
  href: string;
}

export interface PhoneMockup {
  id: string;
  imageSrc: string;
  alt: string;
  rotation: number;
  zIndex: number;
  position: 'left' | 'center' | 'right';
}

