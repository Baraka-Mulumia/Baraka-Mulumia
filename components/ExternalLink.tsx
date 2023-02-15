import { Link, LinkProps } from '@chakra-ui/react';
import React, { FunctionComponent, PropsWithChildren } from 'react';

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
      {...props}>
      {children}
    </Link>
  );
};
