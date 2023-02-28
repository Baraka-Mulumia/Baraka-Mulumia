import { FunctionComponent, PropsWithChildren } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

import { DM_Sans } from '@next/font/google';
import React from 'react';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

type Props = PropsWithChildren<HeadingProps>;

const AppHeading: FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <Heading className={dmSans.className} {...props}>
      {children}
    </Heading>
  );
};

export default AppHeading;
