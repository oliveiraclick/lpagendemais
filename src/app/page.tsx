
import React from 'react';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import FeaturesOwner from '@/components/FeaturesOwner';
import BenefitsClient from '@/components/BenefitsClient';
import Pricing from '@/components/Pricing';
import { content } from '@/data/content';

export const metadata = {
  title: `${content.brand.name} - ${content.brand.subheadline}`,
  description: content.hero.description,
  openGraph: {
    title: content.brand.name,
    description: content.hero.description,
    images: [
      {
        url: '/og-image.png', // Updated to use the Symbol "A"
        width: 1200,
        height: 630,
        alt: content.brand.name,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main style={{ overflow: 'hidden' }}>
      <Header />
      <Hero />
      <FeaturesOwner />
      <BenefitsClient />
      <Pricing />

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid #333',
        color: '#666',
        fontSize: '0.9rem'
      }}>
        <p>{content.footer.copyright}</p>
      </footer>
    </main>
  );
}
