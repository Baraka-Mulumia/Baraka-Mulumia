import {
  FIRST_3_PROJECTS_QUERY,
  SERVICES_QUERY,
  SanityClient,
} from '@/lib/sanityClient';

import { Header } from '@/components/header';
import { LandingPageContent } from '@/features/landing';
import { NextPage } from 'next';
import { PageContentDataRequired } from '@/types';
import { PageWrapper } from '@/containers/PageWrapper';

const queries = `{
  "services": ${SERVICES_QUERY},
  "projects": ${FIRST_3_PROJECTS_QUERY}
}`;

export async function getStaticProps() {
  try {
    const data = await SanityClient.fetch(queries);

    const { services, projects } = data;

    return {
      props: {
        services,
        projects,
      },
    };
  } catch (error) {
    return {
      props: {
        services: [],
        projects: [],
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
