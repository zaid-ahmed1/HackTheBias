import AboutSection from '@/components/pages/home/AboutSection';
import Hero from '@/components/pages/home/Hero';
import TimelineSection from '@/components/pages/home/Timeline';
import FAQPreview from '@/components/pages/home/FAQPreview';
import CallToAction from '@/components/pages/home/CallToAction';
import JoinCommunity from '@/components/pages/home/JoinCommunity';
import MeetTheTeamSection from '@/components/pages/home/meet-the-team/MeetTheTeamSection';
import EventStats from '@/components/pages/home/EventStats';
import { HowItWorksSection } from '@/components/pages/home/how-it-works';

export default async function Home() {
  return (
    <main>
      <TimelineSection />
      <Hero />
      <AboutSection />
      <EventStats />
      <HowItWorksSection />
      {/* Bring back when we get sponsors */}
      {/* <SponsorsSection /> */}
      <MeetTheTeamSection />
      <FAQPreview />
      <CallToAction />
      <JoinCommunity />
    </main>
  );
}
