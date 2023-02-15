import {
  Box,
  Button,
  Link as ChakraLink,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { Element } from 'react-scroll';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { NAVIGATION_LINKS_LIST } from '@/constants';
import React from 'react';

const AboutSection: FunctionComponent = () => {
  const bgGradient = useColorModeValue(
    'radial(orange.600 1px, transparent 1px)',
    'radial(orange.300 1px, transparent 1px)',
  );

  const headingColor = useColorModeValue(
    'text.light.headings',
    'text.dark.headings',
  );

  return (
    <Element name='about-section'>
      <Container maxW={'7xl'} p='12'>
        <Heading as='h2' color={headingColor}>
          Learn more about Baraka
        </Heading>
        <Stack
          marginTop={{ base: '1', sm: '5' }}
          display='flex'
          direction={{ base: 'column', mxd: 'row' }}
          justifyContent='space-between'>
          <Box
            display='flex'
            flex='1'
            marginRight='3'
            position='relative'
            alignItems='center'>
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex='2'
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop='5%'>
              <Image
                borderRadius='lg'
                src={'/images/showcase-img.png'}
                alt='Baraka Mulumia | Software Developer | Full Stack Developer'
                objectFit='contain'
              />
            </Box>
            <Box zIndex='1' width='100%' position='absolute' height='100%'>
              <Box
                bgGradient={bgGradient}
                backgroundSize='20px 20px'
                opacity='0.4'
                height='100%'
              />
            </Box>
          </Box>
          <Stack flex='1' spacing={8}>
            <Stack flex='1' spacing={2}>
              <Text as='p' marginTop='2' fontSize={{ base: 'sm', md: 'lg' }}>
                Baraka Mulumia is a skilled software developer with over 5 years
                of experience in the industry. Having a strong background in
                both front-end and back-end development and worked on a variety
                of projects, ranging from small websites to large-scale
                enterprise applications. I have a passion for using technology
                to solve complex problems and enjoy staying up-to-date with the
                latest developments in my field.
              </Text>
              <Text as='p' marginTop='2' fontSize={{ base: 'sm', md: 'lg' }}>
                I believe in collaboration, continuous learning and staying up
                to date with industry advancements to ensure that my clients
                receive the best possible results. Whether you have a small
                project or a large-scale software development requirement, I am
                ready to work with you to bring your vision to life.
              </Text>
            </Stack>
            <HStack
              spacing={{
                base: '2',
                sm: '4',
                md: '6',
              }}>
              <ChakraLink
                href='https://drive.google.com/file/d/1VW5Lp4JkNTaHC9mGtTazkQomt1QZkXh8/view?usp=sharing'
                target={'_blank'}
                _hover={{ textDecoration: 'none' }}
                _focus={{ boxShadow: 'none', textDecoration: 'none' }}>
                <Button variant='primary' rounded={'10px'} px={8}>
                  Resume
                </Button>
              </ChakraLink>
              <Button variant='primaryOutline' rounded={'10px'} px={8}>
                <Link
                  href={
                    NAVIGATION_LINKS_LIST.find(link => link.name === 'My Story')
                      ?.href || '/'
                  }>
                  My Story
                </Link>
              </Button>
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Element>
  );
};

export default AboutSection;
