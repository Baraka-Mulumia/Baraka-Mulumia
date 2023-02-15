import { ALL_PROJECTS_QUERY, SanityClient } from '@/lib/sanityClient';

import { BlockContainer } from '@/containers/BlockContainer';
import { Contact } from '@/features/landing/Contact';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { NextPage } from 'next';
import { PageWrapper } from '@/containers/PageWrapper';
import { Project } from '@/lib/types';
import { ProjectList } from '@/features/portfolio/ProjectList';
import { SimpleBanner } from '@/components/SimpleBanner';

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
      <SimpleBanner
        title='Some of my projects'
        description={
          "As a software developer, I am Building digital solutions, one line of code at a time, and I understand the importance of bridging the gap between a client's vision and my expertise to achieve powerful results. This is why I am proud to present my personal portfolio, where I can showcase the projects I've worked on and the impact I've made"
        }
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
