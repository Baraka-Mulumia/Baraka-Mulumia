import { Box, Button, ButtonProps, Flex, Link, Stack } from '@chakra-ui/react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

import { BlockContainer } from '@/containers/BlockContainer';
import { Footer } from '@/components/Footer';
import { FunctionComponent } from 'react';
import { Header } from '@/components/header';
import { IconType } from 'react-icons';
import { InquiryForm } from '@/features/landing/InquiryForm';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';
import QuoteOfTheDay from '@/features/quotes/QuoteOfTheDay';
import { Service } from '@/types/Service';
import { map } from 'lodash';
import sanityAPI from '@/sanityAPI';
import { uuid } from '@/lib/functions';

const ContactItem: FunctionComponent<
  {
    text: string;
    Icon: IconType;
    linkType: string;
  } & ButtonProps
> = ({ text, Icon, linkType }) => {
  const RenderButton = () => (
    <Button
      size='md'
      height='48px'
      width='200px'
      variant='ghost'
      _hover={{ border: '2px solid' }}
      leftIcon={<Icon size='20px' />}>
      {linkType == 'email' ? text.split('@')[0] : text}
    </Button>
  );

  return linkType == 'tel' ? (
    <Link isExternal href={`tel:${text}`} _hover={{ textDecoration: 'none' }}>
      <RenderButton />
    </Link>
  ) : linkType == 'email' ? (
    <Link
      isExternal
      href={`mailto:${text}`}
      _hover={{ textDecoration: 'none' }}>
      <RenderButton />
    </Link>
  ) : (
    <RenderButton />
  );
};

export async function getStaticProps() {
  const { data } = await sanityAPI.getPartialService();

  if (!data) {
    return {
      services: [],
    };
  }

  return {
    props: {
      services: data,
    },
  };
}

const Contact: NextPage<{
  services: Service[];
}> = ({ services }) => {
  const contactItems = [
    {
      text: '+254 748 717 044',
      type: 'tel',
      Icon: MdPhone,
    },
    {
      text: 'barakamulumia@gmail.com',
      type: 'email',
      Icon: MdEmail,
    },
    {
      text: 'Nairobi, Kenya',
      type: 'text',
      Icon: MdLocationOn,
    },
  ];

  return (
    <PageWrapper Nav={Header}>
      <PageHeroSection
        heading={"Let's Connect and Bring Your Vision to Life"}
        leadText={
          "I'm excited to hear from you and discuss your technology needs. Let's work together to create innovative solutions that will exceed your expectations."
        }
      />

      <BlockContainer alignItems={'start'}>
        <InquiryForm services={services} includeHeader={false} />

        <Flex justifyContent={'center'} alignItems={'center'}>
          <Box borderRadius='lg' p={{ sm: 4, lg: 8 }}>
            <Stack
              pl={0}
              spacing={3}
              direction={{
                base: 'column',
                md: 'row',
              }}>
              {map(contactItems, item => (
                <ContactItem
                  text={item.text}
                  Icon={item.Icon}
                  key={uuid()}
                  linkType={item.type}
                />
              ))}
            </Stack>
          </Box>
        </Flex>
      </BlockContainer>
      <QuoteOfTheDay />
      <Footer />
    </PageWrapper>
  );
};

export default Contact;
