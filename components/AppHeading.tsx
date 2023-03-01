import { FunctionComponent, PropsWithChildren } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

import { FONT_DM_SANS } from '@/assets/fonts';
import React from 'react';

type Props = PropsWithChildren<HeadingProps>;

const AppHeading: FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <Heading className={FONT_DM_SANS.className} {...props}>
      {children}
    </Heading>
  );
};

export default AppHeading;
