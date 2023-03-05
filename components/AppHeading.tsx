import { FunctionComponent, PropsWithChildren } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/react';

import React from 'react';

type Props = PropsWithChildren<HeadingProps>;

const AppHeading: FunctionComponent<Props> = ({ children, ...props }) => {
  return <Heading {...props}>{children}</Heading>;
};

export default AppHeading;
