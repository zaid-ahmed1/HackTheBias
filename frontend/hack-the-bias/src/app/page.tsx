import AboutSection from '@/components/pages/home/AboutSection';
import Hero from '@/components/pages/home/Hero';
import HowItWorksSection from '../components/pages/home/HowItWorks';
import TimelineSection from '@/components/pages/home/Timeline';
import TestimonialsSection from '../components/pages/home/Testimonials';
import FAQPreview from '@/components/pages/home/FAQPreview';
import CallToAction from '@/components/pages/home/CallToAction';
import JoinCommunity from '@/components/pages/home/JoinCommunity';

// async function getBackendStatus() {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}`, {
//       cache: 'no-store',
//     });
//     if (!res.ok) return 'Failed to connect';

//     const data = await res.json();
//     return data.status;
//   } catch (error) {
//     console.error('API Error:', error);
//     return 'API is unavailable';
//   }
// }

export default async function Home() {
  return (
    <main>
      <TimelineSection />
      <Hero />
      <AboutSection />
      <HowItWorksSection />
      {/* Bring back when we get sponsors */}
      {/* <SponsorsSection /> */}
      <TestimonialsSection />
      <FAQPreview />
      <CallToAction />
      <JoinCommunity />
    </main>
  );
}
