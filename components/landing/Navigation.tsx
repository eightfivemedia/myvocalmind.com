'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/vocalmind-logo.png"
              alt="VocalMind Logo"
              width={36}
              height={36}
              className="transition-transform group-hover:scale-110 rounded-lg"
            />
            <span className="text-xl md:text-2xl font-bold text-white">
              VocalMind
            </span>
          </Link>

          {/* Download Button */}
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-6"
          >
            <Link href="https://apps.apple.com/us/app/vocalmind/id6756663544" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download</span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

