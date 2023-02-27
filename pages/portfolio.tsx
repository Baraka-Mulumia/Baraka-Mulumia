import {
  ALL_PROJECTS_QUERY,
  SERVICES_TITLES_QUERY,
  SanityClient,
} from '@/lib/sanityClient';

import { BlockContainer } from '@/containers/BlockContainer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { InquiryForm } from '@/features/landing/InquiryForm';
import { NextPage } from 'next';
import { PageContentDataRequired } from '@/types';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';
import { ProjectList } from '@/features/portfolio/ProjectList';

const queries = `{
  "services": ${SERVICES_TITLES_QUERY},
  "projects": ${ALL_PROJECTS_QUERY}
}`;

export async function getStaticProps() {
  try {
    const data = await SanityClient.fetch(queries);
    return {
      props: {
        projects: data.projects,
        services: data.services,
      },
    };
  } catch (error) {
    return {
      props: {
        projects: [],
        services: [],
      },
    };
  }
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
