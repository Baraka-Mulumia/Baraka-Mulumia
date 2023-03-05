import { AnimatedBottomBorder } from '../AnimatedBottomBorder';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

export const Branding: FunctionComponent<{
  isWhite?: boolean;
}> = ({ isWhite = false }) => {
  const headingColor = useColorModeValue(
    'text.light.headings',
    'text.dark.headings',
  );

  return (
    <Link href={'/'}>
      <AnimatedBottomBorder>
        <Text
          as={'h1'}
          fontFamily={'heading'}
          fontWeight={700}
          fontSize={{
            base: 'xl',
            md: '2xl',
          }}
          color={isWhite ? 'white' : headingColor}>
          Baraka M. Mulumia
        </Text>
      </AnimatedBottomBorder>
    </Link>
  );
};
