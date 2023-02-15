import { FunctionComponent, PropsWithChildren } from 'react';
import { Stack, StackProps } from '@chakra-ui/react';

export const AnimatedBottomBorder: FunctionComponent<
  PropsWithChildren<StackProps>
> = ({ children, ...props }) => (
  <Stack
    _hover={{
      _after: {
        width: '100%',
      },
      fontWeight: '500',
    }}
    _after={{
      content: '""',
      display: 'block',
      width: 0,
      height: '0.5px',
      bg: 'gray.500',
      transition: 'width 0.5s',
      mt: 1,
    }}
    w={'fit-content'}
    {...props}>
    {children}
  </Stack>
);
