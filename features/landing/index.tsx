import AboutSection from './About';
import Banner from './Banner';
import { Footer } from '@/components/Footer';
import { FunctionComponent } from 'react';
import { InquiryForm } from './InquiryForm';
import { PageContentDataRequired } from '@/types';
import { ProjectPreview } from './ProjectPreview';
import { Services } from './Services';

export const LandingPageContent: FunctionComponent<PageContentDataRequired> = ({
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
