import {
  Box,
  Button,
  Flex,
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
    <Flex alignItems='center' justifyContent='center'>
      <Box
        w={{
          base: 'xs',
          md: 'sm',
        }}
        bg={bgCOlor}
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        mx='auto'>
        <ExternalLink href={href}>
          <Flex
            direction='column'
            alignItems='center'
            justifyContent='center'
            h={224}
            position={'relative'}>
            <Image
              fill
              src={mainImage.asset.url}
              alt={altText(mainImage.alt)}
            />
          </Flex>
        </ExternalLink>
        <Stack px={3} py={1} spacing={3}>
          <ExternalLink href={href}>
            <AnimatedBottomBorder>
              <Heading
                textTransform={'capitalize'}
                color={headingColor}
                as={'h3'}
                fontSize={'2xl'}>
                {title}
              </Heading>
            </AnimatedBottomBorder>
            <Text>{description}</Text>
          </ExternalLink>
          <HStack gap={1} minH={16} wrap={'wrap'}>
            {technologies &&
              technologies.length > 0 &&
              map(technologies, tech => (
                <TechnologyBadge name={tech} key={uuid()} />
              ))}
          </HStack>
          <Box py={2} textAlign='center'>
            <HStack gap={1} pb={6}>
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
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};
