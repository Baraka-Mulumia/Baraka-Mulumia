import { ALL_PROJECTS_QUERY, SanityClient } from '@/lib/sanityClient';

import { BlockContainer } from '@/containers/BlockContainer';
import { Contact } from '@/features/landing/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';
import { Project } from '@/lib/types';
import { ProjectList } from '@/features/portfolio/ProjectList';

export async function getStaticProps() {
  try {
    const data = await SanityClient.fetch(ALL_PROJECTS_QUERY);
    return {
      props: {
        projects: data,
      },
    };
  } catch (error) {
    return {
      props: {
        projects: [],
      },
    };
  }
}

const Portfolio: NextPage<{
  projects: Project[];
}> = ({ projects }) => {
  return (
    <PageWrapper Nav={Header}>
      <PageHeroSection
        heading='From Vision to Reality: Innovative Projects'
        leadText='Explore some of the innovative projects I have worked on and discover how I can help bring your vision to life. I am passionate about using technology to create exceptional results that make a difference'
      />

      <BlockContainer>
        <ProjectList data={projects} />
      </BlockContainer>
      <Contact />
      <Footer />
    </PageWrapper>
  );
};

export default Portfolio;
