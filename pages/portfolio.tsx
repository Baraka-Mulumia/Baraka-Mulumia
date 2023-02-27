import { BlockContainer } from '@/containers/BlockContainer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { InquiryForm } from '@/features/landing/InquiryForm';
import { NextPage } from 'next';
import { PageContentDataRequired } from '@/types';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';
import { ProjectList } from '@/features/portfolio/ProjectList';
import sanityAPI from '@/sanityAPI';

export async function getStaticProps() {
  const { data } =
    await sanityAPI.getMultipleDocuments<PageContentDataRequired>([
      'services',
      'projects',
    ]);

  if (!data) {
    return {
      services: [],
      projects: [],
    };
  }

  const { services, projects } = data;

  return {
    props: {
      services,
      projects,
    },
  };
}

const Portfolio: NextPage<PageContentDataRequired> = ({
  projects,
  services,
}) => {
  return (
    <PageWrapper Nav={Header}>
      <PageHeroSection
        heading='From Vision to Reality: Innovative Projects'
        leadText='Explore some of the innovative projects I have worked on and discover how I can help bring your vision to life. I am passionate about using technology to create exceptional results that make a difference'
      />

      <BlockContainer>
        <ProjectList data={projects} />
      </BlockContainer>
      <InquiryForm services={services} />
      <Footer />
    </PageWrapper>
  );
};

export default Portfolio;
