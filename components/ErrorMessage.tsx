import { FunctionComponent } from 'react';
import { Text } from '@chakra-ui/react';

export const ErrorMessage: FunctionComponent<{
  message: string;
}> = ({ message }) => (
  <Text as={'span'} fontSize={'xs'} color={'primary.light.red'}>
    {message}
  </Text>
);
