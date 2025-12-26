'use client';

import Link from 'next/link';

const footerLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Support', href: '/support' },
];

interface FooterProps {
  fixed?: boolean;
  withBackground?: boolean;
}

export default function Footer({ fixed = false, withBackground = false }: FooterProps) {
  return (
    <footer className={`${fixed ? 'sm:fixed sm:bottom-0 sm:left-0 sm:right-0' : 'relative'} z-50 ${withBackground ? 'bg-gradient-to-b from-purple-900/80 to-purple-900' : 'bg-gradient-to-b from-purple-900/80 to-purple-900 sm:bg-none sm:bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-4 gap-3 sm:gap-4">
          {/* Copyright */}
          <p className="text-white/70 text-xs sm:text-sm">
            © 2025 VocalMind.{' '}
            <Link
              href="https://eightfivemedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              EightFive Media
            </Link>{' '}
            All rights reserved.
          </p>

          {/* Links */}
          <nav className="flex items-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

