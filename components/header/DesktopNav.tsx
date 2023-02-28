import { AnimatedBottomBorder } from '../AnimatedBottomBorder';
import AppText from '../AppText';
import { FunctionComponent } from 'react';
import { HStack } from '@chakra-ui/react';
import Link from 'next/link';
import { NAVIGATION_LINKS_LIST } from '@/constants';
import { map } from 'lodash';
import { uuid } from '@/lib/functions';

type DesktopNavItemProps = {
  label: string;
  path: string;
  isWhite?: boolean;
};

export const DesktopNavItem: FunctionComponent<DesktopNavItemProps> = ({
  label,
  path,
  isWhite = false,
}) => (
  <Link href={path}>
    <AnimatedBottomBorder
      minW={'24'}
      placeItems={'center'}
      placeContent={'center'}
      cursor={'pointer'}>
      <AppText variant={isWhite ? 'text_white' : 'primary'}>{label}</AppText>
    </AnimatedBottomBorder>
  </Link>
);

export const DesktopNav = () => {
  return (
    <HStack alignItems={'center'}>
      {map(NAVIGATION_LINKS_LIST, item => (
        <DesktopNavItem label={item.name} key={uuid()} path={item.href} />
      ))}
    </HStack>
  );
};
