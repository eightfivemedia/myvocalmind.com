import Hero from '@/components/landing/Hero';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <>
      <div className="sm:h-screen sm:overflow-hidden">
        <Hero
          headline="Capture ideas effortlessly."
          subheadline="Say gocalMind to AI-powered, Meet Tally — the free inolte app that organizes you've thoughts."
        />
      </div>
      <Footer fixed={true} />
    </>
  );
}

