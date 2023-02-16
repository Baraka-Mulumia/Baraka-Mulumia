import { BlockContainer } from '@/containers/BlockContainer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/header';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';

const FormSubmitSuccess: NextPage = () => {
  return (
    <PageWrapper Nav={Header}>
      <BlockContainer>
        <PageHeroSection
          heading='Thank You for Reaching Out!'
          leadText="Congratulations, your inquiry has been received! I am thrilled to have the opportunity to collaborate with you and bring your technology vision to life.  I'll be in touch with you soon. Thank you for choosing me as your technology partner."
        />
      </BlockContainer>
      <Footer />
    </PageWrapper>
  );
};

export default FormSubmitSuccess;
