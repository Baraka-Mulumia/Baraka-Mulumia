import { Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';

import { FunctionComponent } from 'react';

type SectionHeaderProps = {
  title: string;
  slogan: string;
  isWhite?: boolean;
};

export const BlockHeader: FunctionComponent<SectionHeaderProps> = ({
  title,
  slogan,
  isWhite = false,
}) => {
  const headingColor = useColorModeValue(
    'text.light.headings',
    'text.dark.headings',
  );

  return (
    <Stack as='header' spacing={2} align='center'>
      <Text
        color={isWhite ? 'white' : 'primary.light.red'}
        textTransform='uppercase'
        fontWeight={500}>
        {slogan}
      </Text>
      <Heading
        as='h2'
        size='xl'
        color={isWhite ? 'white' : headingColor}
        textTransform={'capitalize'}>
        {title}.
      </Heading>
    </Stack>
  );
};
