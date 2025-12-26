'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

interface LegalPageProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm sm:text-base mb-6"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Back to Home</span>
          </Link>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {lastUpdated && (
              <p className="text-white/70 text-sm sm:text-base mb-8">
                Last Updated: {lastUpdated}
              </p>
            )}
            <div className="prose prose-invert prose-lg max-w-none text-white/90">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer withBackground={true} />
    </>
  );
}

