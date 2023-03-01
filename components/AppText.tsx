import { FunctionComponent, PropsWithChildren } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

import { Rubik } from '@next/font/google';

type Props = PropsWithChildren<TextProps>;

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

const AppText: FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <Text className={rubik.className} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
