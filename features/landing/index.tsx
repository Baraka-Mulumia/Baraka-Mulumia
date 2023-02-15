import AboutSection from './About';
import Banner from './Banner';
import { Contact } from './Contact';
import { Footer } from '@/components/Footer';
import { FunctionComponent } from 'react';
import { HomePageProps } from '@/lib/types';
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
      <Contact />
      <Footer />
    </>
  );
};
