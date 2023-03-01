import {
  Box,
  Button,
  ButtonProps,
  Flex,
  Link,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

import AppHeading from '@/components/AppHeading';
import AppText from '@/components/AppText';
import { BlockContainer } from '@/containers/BlockContainer';
import { Footer } from '@/components/Footer';
import { FunctionComponent } from 'react';
import { GetInTouchForm } from '@/features/contact/GetInTouchForm';
import { Header } from '@/components/header';
import { IconType } from 'react-icons';
import { NextPage } from 'next';
import { PageHeroSection } from '@/components/PageHeroSection';
import { PageWrapper } from '@/containers/PageWrapper';
import QuoteOfTheDay from '@/features/quotes/QuoteOfTheDay';
import { SocialMediaIcons } from '@/components/SocialMediaIcons';
import { map } from 'lodash';
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
      color='#DCE2FF'
      _hover={{ border: '2px solid', borderColor: '#DCE2FF' }}
      leftIcon={<Icon color='#DCE2FF' size='20px' />}>
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

const Contact: NextPage = () => {
  const bgCOlor = useColorModeValue('primary.dark.200', 'primary.dark.200');

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
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Box
            bg={bgCOlor}
            borderRadius='lg'
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} w={'full'}>
                <WrapItem>
                  <Box>
                    <AppHeading color={'white'}>Get in Touch</AppHeading>
                    <AppText
                      mt={{ sm: 3, md: 3, lg: 5 }}
                      variant={'text_white'}>
                      Lets grab coffee sometime!
                    </AppText>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems='flex-start'>
                        {map(contactItems, item => (
                          <ContactItem
                            text={item.text}
                            Icon={item.Icon}
                            key={uuid()}
                            linkType={item.type}
                          />
                        ))}
                      </VStack>
                    </Box>
                    <SocialMediaIcons />
                  </Box>
                </WrapItem>
                <GetInTouchForm />
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </BlockContainer>
      <QuoteOfTheDay />
      <Footer />
    </PageWrapper>
  );
};

export default Contact;
