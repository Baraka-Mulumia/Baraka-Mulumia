import { BlockContainer } from '@/containers/BlockContainer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';
import { Project } from '@/types';
import { ProjectList } from '@/features/portfolio/ProjectList';
import QuoteOfTheDay from '@/features/quotes/QuoteOfTheDay';
import sanityAPI from '@/sanityAPI';

export async function getStaticProps() {
  const { data } = await sanityAPI.getProjects();

  if (!data) {
    return {
      projects: [],
    };
  }

  return {
    props: {
      projects: data,
    },
  };
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
      <QuoteOfTheDay />
      <Footer />
    </PageWrapper>
  );
};

export default Portfolio;
