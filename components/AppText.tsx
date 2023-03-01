import { FunctionComponent, PropsWithChildren } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

import { FONT_RUBIK } from '@/assets/fonts';

type Props = PropsWithChildren<TextProps>;

const AppText: FunctionComponent<Props> = ({ children, ...props }) => {
  return (
    <Text className={FONT_RUBIK.className} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
