import { Link, LinkProps } from '@chakra-ui/react';
import React, { FunctionComponent, PropsWithChildren } from 'react';

import { FONT_RUBIK } from '@/assets/fonts';

type ExternalLinkProps = PropsWithChildren<
  LinkProps & {
    href: string;
  }
>;

export const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      isExternal
      _hover={{
        textDecoration: 'none',
      }}
      className={FONT_RUBIK.className}
      {...props}>
      {children}
    </Link>
  );
};
