import {
  Box,
  Button,
  Center,
  HStack,
  Heading,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { FunctionComponent } from 'react';

import { AnimatedBottomBorder } from '@/components/AnimatedBottomBorder';
import { ExternalLink } from '@/components/ExternalLink';
import Image from 'next/image';
import { Project } from '@/lib/types';
import { map } from 'lodash';

type ProjectDetailCardProps = {
  project: Project;
};

const TechnologyBadge = ({ name }: { name: string }) => {
  return (
    <Tag size={'md'} variant='solid' colorScheme='orange'>
      {name}
    </Tag>
  );
};

export const ProjectCard: FunctionComponent<ProjectDetailCardProps> = ({
  project: {
    title,
    description,
    mainImage,
    url,
    sourceCodeUrl,
    isHosted,
    technologies,
  },
}) => {
  const bgCOlor = useColorModeValue('white', 'gray.900');
  const headingColor = useColorModeValue(
    'text.light.headings',
    'text.dark.headings',
  );
  const altText = (alt: string | null) =>
    alt || `Baraka Mulumia's Project  - ${title}`;

  const href = isHosted ? url : sourceCodeUrl;

  return (
    <Stack
      px={1}
      py={4}
      spacing={3}
      bg={bgCOlor}
      shadow={'md'}
      w={'full'}
      rounded={'28px'}
      maxW={'container.md'}
      minW={{
        base: '100%',
        md: 'md',
      }}>
      <ExternalLink href={href}>
        <Center>
          <AnimatedBottomBorder>
            <Heading textAlign={'center'} color={headingColor} as={'h3'}>
              {title}
            </Heading>
          </AnimatedBottomBorder>
        </Center>
      </ExternalLink>

      <Stack
        spacing={{
          base: 1,
          md: 4,
        }}
        w={'full'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Box
          as={ExternalLink}
          href={href}
          w={{
            base: '90%',
          }}
          h={{ base: '200px', sxm: '400px' }}
          boxShadow={'lg'}
          position={'relative'}>
          <Image
            src={mainImage.asset.url}
            alt={altText(mainImage.alt)}
            className={'rounded-md'}
            fill
          />
        </Box>
        <Stack alignSelf={'flex-start'} px={4} w={'full'}>
          <Text>{description}</Text>

          <HStack spacing={1} wrap={'wrap'}>
            {technologies &&
              technologies.length > 0 &&
              map(technologies, tech => (
                <TechnologyBadge name={tech} key={tech} />
              ))}
          </HStack>

          <HStack spacing={4} pb={6}>
            {isHosted && (
              <ExternalLink href={url}>
                <Button variant={'primary'} rounded={'2px'}>
                  Live Preview
                </Button>
              </ExternalLink>
            )}

            {sourceCodeUrl && (
              <ExternalLink
                isExternal
                href={sourceCodeUrl}
                className={'text-decoration-none'}>
                <Button colorScheme={'blue'} rounded={'2px'}>
                  Source Code
                </Button>
              </ExternalLink>
            )}
          </HStack>
        </Stack>
      </Stack>
    </Stack>
  );
};
