import {
  Box,
  Button,
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
import { Project } from '@/types';
import { map } from 'lodash';
import { uuid } from '@/lib/functions';

type ProjectDetailCardProps = {
  project: Project;
};

const TechnologyBadge = ({ name }: { name: string }) => {
  return (
    <Tag
      size={'md'}
      marginTop={1}
      marginBottom={1}
      variant='solid'
      colorScheme='orange'>
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
      spacing={3}
      bg={bgCOlor}
      shadow={'md'}
      w={'full'}
      rounded={'10px'}
      maxW={'container.sm'}
      minW={{
        base: '100%',
        md: 'md',
      }}>
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
          w={'100%'}
          h={{ base: '200px', sxm: '300px', xl: '400px' }}
          boxShadow={'lg'}
          borderTopRadius={'10px'}
          overflow={'hidden'}
          position={'relative'}>
          <Image src={mainImage.asset.url} alt={altText(mainImage.alt)} fill />
        </Box>
        <Stack alignSelf={'flex-start'} px={4} w={'full'}>
          <ExternalLink href={href}>
            <AnimatedBottomBorder>
              <Heading color={headingColor} as={'h3'}>
                {title}
              </Heading>
            </AnimatedBottomBorder>
          </ExternalLink>

          <Text>{description}</Text>

          <HStack spacing={2} wrap={'wrap'}>
            {technologies &&
              technologies.length > 0 &&
              map(technologies, tech => (
                <TechnologyBadge name={tech} key={uuid()} />
              ))}
          </HStack>

          <HStack spacing={4} pb={6}>
            {isHosted && (
              <ExternalLink href={url}>
                <Button variant={'primary'} size={'sm'}>
                  Live Preview
                </Button>
              </ExternalLink>
            )}

            {sourceCodeUrl && (
              <ExternalLink
                isExternal
                href={sourceCodeUrl}
                className={'text-decoration-none'}>
                <Button colorScheme={'blue'} size={'sm'}>
                  Source Code
                </Button>
              </ExternalLink>
            )}
          </HStack>
        </Stack>
      </Stack>
    </Stack>
    // </TransitionMotion>
  );
};
