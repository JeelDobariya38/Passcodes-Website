import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { FeatureGrid } from '@/components/home/FeatureGrid';
import { SITE_META } from '@/lib/constants';

export const metadata: Metadata = {
  title: SITE_META.title,
  description: SITE_META.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureGrid />
    </>
  );
}
