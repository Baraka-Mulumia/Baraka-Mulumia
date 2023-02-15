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
          heading="Thank You for Your Inquiry - Let's Bring Your Vision to Life"
          leadText="Congratulations, your inquiry has been received! I am thrilled to have the opportunity to collaborate with you and bring your technology vision to life. With my expertise and your vision, we can create powerful and innovative solutions that exceed your expectations. I'll be in touch with you soon to discuss your inquiry in more detail. Thank you for choosing me as your technology partner."
        />
      </BlockContainer>
      <Footer />
    </PageWrapper>
  );
};

export default FormSubmitSuccess;
