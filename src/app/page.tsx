import CallToAction from '@/components/CallToAction';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import NavigationBar from '@/components/NavigationBar';
import ReviewHeader from '@/components/ReviewHeader';
import Reviews from '@/components/Reviews';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ReviewHeader />
      <Reviews />
      <CallToAction />
    </>
  );
}
