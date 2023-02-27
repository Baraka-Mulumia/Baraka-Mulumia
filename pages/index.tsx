import { Header } from '@/components/header';
import { LandingPageContent } from '@/features/landing';
import { NextPage } from 'next';
import { PageContentDataRequired } from '@/types';
import { PageWrapper } from '@/containers/PageWrapper';
import sanityAPI from '@/sanityAPI';

export async function getStaticProps() {
  const { data } = await sanityAPI.getMultipleDocuments<{
    services: PageContentDataRequired['services'];
    first3Projects: PageContentDataRequired['projects'];
  }>(['services', 'first3Projects']);

  if (!data) {
    return {
      services: [],
      projects: [],
    };
  } else {
    const { services, first3Projects: projects } = data;

    return {
      props: {
        services,
        projects,
      },
    };
  }
}

const HomePage: NextPage<PageContentDataRequired> = ({
  services,
  projects,
}) => {
  return (
    <PageWrapper Nav={Header}>
      <LandingPageContent services={services} projects={projects} />
    </PageWrapper>
  );
};

export default HomePage;
