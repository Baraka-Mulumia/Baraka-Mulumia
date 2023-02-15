import AboutSection from './About';
import Banner from './Banner';
import { Footer } from '@/components/Footer';
import { FunctionComponent } from 'react';
import { HomePageProps } from '@/lib/types';
import { InquiryForm } from './InquiryForm';
import { ProjectPreview } from './ProjectPreview';
import { Services } from './Services';

export const LandingPageContent: FunctionComponent<HomePageProps> = ({
  projects,
  services,
}) => {
  return (
    <>
      <Banner />
      <AboutSection />
      <Services data={services} />
      <ProjectPreview data={projects} />
      <InquiryForm services={services} />
      <Footer />
    </>
  );
};
