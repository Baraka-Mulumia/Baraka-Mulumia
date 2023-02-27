import {
  Box,
  HStack,
  Heading,
  Image,
  SpaceProps,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { AnimatedBottomBorder } from '@/components/AnimatedBottomBorder';
import { BlogPost } from '@/types';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { TransitionMotion } from '@/components/motion/Transition.motion';
import { format } from 'date-fns';
import { map } from 'lodash';
import { uuid } from '@/lib/functions';

type BlogCardProps = BlogPost & {
  size?: 'large' | 'small';
  isReverse?: boolean;
};

type IBlogTags = {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
};

const BlogTags: FunctionComponent<IBlogTags> = ({
  tags,
  marginTop = { base: 2, md: 4 },
}) => {
  return (
    <HStack spacing={2} marginTop={marginTop}>
      {map(tags, (tag: string) => {
        return (
          <Tag size={'md'} variant='solid' colorScheme='orange' key={uuid()}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogPostCard: FunctionComponent<BlogCardProps> = ({
  title,
  excerpt,
  mainImage,
  publishedAt,
  slug,
  author,
  _createdAt,
  categories,
  size = 'large',
  isReverse = false,
}) => {
  const headingColor = useColorModeValue(
    'text.light.headings',
    'text.dark.headings',
  );
  const bgColor = useColorModeValue('primary.light.000', 'primary.dark.000');

  return (
    <Link href={`/tech-stories/${slug.current}`}>
      <TransitionMotion
        key={'blog-post-card'}
        animate={{
          scale: [0.9, 1],
        }}>
        <Stack
          w={'full'}
          p={4}
          direction={{
            base: 'column',
            md:
              size === 'large' ? (isReverse ? 'row-reverse' : 'row') : 'column',
          }}
          shadow={'md'}
          bg={bgColor}
          borderRadius={'lg'}
          justifyContent={'center'}
          spacing={4}>
          <Box maxH={80} overflow={'hidden'} borderRadius={'lg'}>
            {mainImage && (
              <Image
                src={mainImage.asset.url}
                alt={'Baraka Mulumia - Blog Post: ' + title}
                objectFit={'cover'}
              />
            )}
          </Box>

          <Stack maxW={'sm'} spacing={4}>
            <BlogTags tags={map(categories, category => category.title)} />
            <AnimatedBottomBorder>
              <Heading
                as='h3'
                p={1}
                fontSize={'2xl'}
                color={headingColor}
                textTransform={'capitalize'}>
                {title}
              </Heading>
            </AnimatedBottomBorder>
            <Text lineHeight={1.2} noOfLines={5} textAlign={'justify'}>
              {excerpt}
            </Text>

            <HStack spacing={1}>
              <Image
                src={author.image.asset.url}
                alt=''
                w={8}
                h={8}
                rounded={'full'}
              />
              <Stack direction={'column'} spacing={0}>
                <Text fontSize={'sm'}>{author.name} </Text>
                <Text fontSize={'xs'}>
                  {format(new Date(publishedAt || _createdAt), 'MMMM dd, yyyy')}
                </Text>
              </Stack>
            </HStack>
          </Stack>
        </Stack>
      </TransitionMotion>
    </Link>
  );
};
