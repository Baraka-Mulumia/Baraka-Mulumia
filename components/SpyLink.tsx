import { FunctionComponent, PropsWithChildren } from 'react';

import { Link } from 'react-scroll';

type SpyLinkProps = {
  path: string;
};

export const SpyLink: FunctionComponent<PropsWithChildren<SpyLinkProps>> = ({
  path,
  children,
}) => {
  return (
    <Link
      to={path}
      spy={true}
      smooth={true}
      duration={500}
      activeClass='active'
      offset={-50}>
      {children}
    </Link>
  );
};
