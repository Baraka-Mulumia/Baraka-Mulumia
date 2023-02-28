import AppText from './AppText';
import { FunctionComponent } from 'react';

export const ErrorMessage: FunctionComponent<{
  message: string;
}> = ({ message }) => (
  <AppText as={'span'} fontSize={'xs'} color={'primary.light.red'}>
    {message}
  </AppText>
);
